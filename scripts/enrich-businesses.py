#!/usr/bin/env python3
"""
Enrich Formby businesses with full Google Place Details.
Fetches: phone, website, rating, review count, opening hours,
         formatted address (with postcode), business status, editorial summary.

Saves progress to enrich-progress.json — safe to interrupt and resume.

Usage:
  python scripts/enrich-businesses.py
"""

import os
import json
import time
import requests
import psycopg2
import psycopg2.extras
import re
from dotenv import load_dotenv
from urllib.parse import urlparse

load_dotenv(".env.local")
load_dotenv()

API_KEY = os.getenv('GOOGLE_PLACES_API_KEY')
DATABASE_URL = os.getenv('DATABASE_URL')

if not API_KEY:
    print("Error: GOOGLE_PLACES_API_KEY not set")
    exit(1)

if not DATABASE_URL:
    print("Error: DATABASE_URL not set")
    exit(1)

PROGRESS_FILE = 'enrich-progress.json'
DELAY_BETWEEN = 0.35   # Seconds between API calls

# Fields to fetch from Place Details
DETAIL_FIELDS = ','.join([
    'place_id',
    'name',
    'formatted_phone_number',
    'international_phone_number',
    'website',
    'rating',
    'user_ratings_total',
    'price_level',
    'opening_hours',
    'formatted_address',
    'business_status',
    'editorial_summary',
])


def connect_db():
    parsed = urlparse(DATABASE_URL)
    return psycopg2.connect(
        host=parsed.hostname,
        port=parsed.port or 5432,
        database=parsed.path.lstrip('/'),
        user=parsed.username,
        password=parsed.password,
        sslmode='require',
    )


def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {'processed': [], 'failed': []}


def save_progress(progress):
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f)


def find_place(name, lat, lng):
    """Find a place by name near Formby. Returns place_id or None."""
    url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
    params = {
        'input': f"{name} Formby",
        'inputtype': 'textquery',
        'fields': 'place_id,name',
        'locationbias': f'circle:3000@{lat},{lng}',
        'key': API_KEY,
    }
    try:
        data = requests.get(url, params=params, timeout=10).json()
        if data.get('status') == 'OK' and data.get('candidates'):
            return data['candidates'][0]['place_id']
    except Exception as e:
        print(f"    find_place error: {e}")
    return None


def get_place_details(place_id):
    """Fetch full details for a place."""
    url = 'https://maps.googleapis.com/maps/api/place/details/json'
    params = {
        'place_id': place_id,
        'fields': DETAIL_FIELDS,
        'key': API_KEY,
    }
    try:
        data = requests.get(url, params=params, timeout=10).json()
        if data.get('status') == 'OK':
            return data.get('result', {})
    except Exception as e:
        print(f"    place_details error: {e}")
    return None


def price_level_to_gbp(level):
    if level is None:
        return None
    levels = ['Free', '£', '££', '£££', '££££']
    try:
        return levels[int(level)]
    except (IndexError, TypeError):
        return None


def extract_postcode(formatted_address):
    """Extract UK postcode from a formatted address string."""
    pattern = r'[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}'
    match = re.search(pattern, formatted_address or '', re.IGNORECASE)
    if match:
        return match.group().upper().strip()
    return ''


def update_business(conn, business_id, details, place_id):
    phone = details.get('formatted_phone_number') or details.get('international_phone_number') or None
    website = details.get('website') or None
    rating = details.get('rating') or None
    review_count = details.get('user_ratings_total') or None
    price_range = price_level_to_gbp(details.get('price_level'))
    business_status = details.get('business_status') or 'OPERATIONAL'
    formatted_address = details.get('formatted_address') or None
    postcode = extract_postcode(formatted_address) if formatted_address else ''
    editorial_summary = (details.get('editorial_summary') or {}).get('overview') or None

    opening_hours = None
    if details.get('opening_hours'):
        oh = details['opening_hours']
        opening_hours = json.dumps({
            'weekdayText': oh.get('weekday_text', []),
            'openNow': oh.get('open_now'),
            'periods': oh.get('periods', []),
        })

    with conn.cursor() as cur:
        cur.execute("""
            UPDATE "Business" SET
                "placeId"       = %s,
                "phone"         = COALESCE(%s, "phone"),
                "website"       = COALESCE(%s, "website"),
                "rating"        = %s,
                "reviewCount"   = %s,
                "priceRange"    = COALESCE(%s, "priceRange"),
                "openingHours"  = CASE WHEN %s IS NOT NULL THEN %s::jsonb ELSE "openingHours" END,
                "address"       = COALESCE(%s, "address"),
                "postcode"      = CASE WHEN %s != '' THEN %s ELSE "postcode" END,
                "shortDescription" = COALESCE(%s, "shortDescription"),
                "updatedAt"     = NOW()
            WHERE "id" = %s
        """, (
            place_id,
            phone, website,
            rating, review_count,
            price_range,
            opening_hours, opening_hours,
            formatted_address,
            postcode, postcode,
            editorial_summary,
            business_id,
        ))
    conn.commit()


def main():
    print("Enriching Formby businesses with Google Place Details")
    print("=" * 60)

    progress = load_progress()
    processed_ids = set(progress.get('processed', []))
    failed_ids = set(progress.get('failed', []))

    print(f"Previously processed: {len(processed_ids)}")
    print(f"Previously failed:    {len(failed_ids)}")

    conn = connect_db()
    print("Connected to database")

    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        cur.execute("""
            SELECT id, name, lat, lng, "placeId"
            FROM "Business"
            ORDER BY name
        """)
        businesses = cur.fetchall()

    total = len(businesses)
    to_process = [b for b in businesses if b['id'] not in processed_ids]

    print(f"Total businesses: {total}")
    print(f"To process:       {len(to_process)}")
    print("=" * 60)

    import time as t
    start = t.time()
    processed_count = 0
    failed_count = 0

    for i, biz in enumerate(to_process):
        biz_id = biz['id']
        biz_name = biz['name']
        lat = biz['lat'] or 53.5545
        lng = biz['lng'] or -3.0716
        existing_place_id = biz['placeId']

        safe_name = biz_name.encode('ascii', 'replace').decode('ascii')
        print(f"\n[{i+1}/{len(to_process)}] {safe_name}")

        # Get place_id if missing
        place_id = existing_place_id
        if not place_id:
            place_id = find_place(biz_name, lat, lng)
            time.sleep(DELAY_BETWEEN)
            if not place_id:
                print(f"  Could not find place — skipping")
                failed_ids.add(biz_id)
                failed_count += 1
                progress['failed'] = list(failed_ids)
                save_progress(progress)
                continue

        # Fetch details
        details = get_place_details(place_id)
        time.sleep(DELAY_BETWEEN)

        if not details:
            print(f"  Could not get details — skipping")
            failed_ids.add(biz_id)
            failed_count += 1
            progress['failed'] = list(failed_ids)
            save_progress(progress)
            continue

        # Remove permanently closed businesses
        if details.get('business_status') == 'CLOSED_PERMANENTLY':
            print(f"  PERMANENTLY CLOSED — removing")
            with conn.cursor() as cur:
                cur.execute('DELETE FROM "Business" WHERE id = %s', (biz_id,))
            conn.commit()
            processed_ids.add(biz_id)
            progress['processed'] = list(processed_ids)
            save_progress(progress)
            continue

        # Update record
        try:
            update_business(conn, biz_id, details, place_id)
            rating = details.get('rating', '-')
            reviews = details.get('user_ratings_total', 0)
            phone = details.get('formatted_phone_number', 'no phone')
            print(f"  {rating}/5 ({reviews} reviews) | {phone}")
            processed_count += 1
        except Exception as e:
            print(f"  DB update error: {e}")
            conn.rollback()
            failed_ids.add(biz_id)
            failed_count += 1

        processed_ids.add(biz_id)
        progress['processed'] = list(processed_ids)
        progress['failed'] = list(failed_ids)

        if (i + 1) % 10 == 0:
            save_progress(progress)
            elapsed = t.time() - start
            rate = (i + 1) / elapsed
            remaining = (len(to_process) - i - 1) / rate if rate > 0 else 0
            print(f"\n  --- Progress: {i+1}/{len(to_process)} | ETA: {remaining:.0f}s ---")

    save_progress(progress)
    conn.close()

    elapsed = t.time() - start
    print(f"\n{'=' * 60}")
    print(f"COMPLETE in {elapsed:.0f}s")
    print(f"  Enriched:         {processed_count}")
    print(f"  Failed/not found: {failed_count}")
    print(f"\nNext: python scripts/cleanup-businesses.py")


if __name__ == '__main__':
    main()
