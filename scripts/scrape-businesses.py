#!/usr/bin/env python3
"""
Scrape Formby Guide businesses using Google Places API.

Uses multiple search points to cover:
  - Formby village & inland (4km radius)
  - Hightown village & beach (2km radius)
  - Crosby Beach / Another Place / Iron Men (2km radius)

This covers the full Sefton Coast between Formby and Crosby without
overlapping into Southport to the north or Liverpool to the south.

Usage:
  1. Set GOOGLE_PLACES_API_KEY in .env.local
  2. pip install -r scripts/requirements.txt
  3. python scripts/scrape-businesses.py
  4. npm run import-businesses
"""

import os
import csv
import time
import requests
from dotenv import load_dotenv

load_dotenv(".env.local")
load_dotenv()

API_KEY = os.getenv('GOOGLE_PLACES_API_KEY')
if not API_KEY:
    print("Error: GOOGLE_PLACES_API_KEY not found in .env.local or .env")
    print("Get a key at: https://console.cloud.google.com/apis/credentials")
    exit(1)

# Search points: (label, lat, lng, radius_metres)
# Covers Formby village → Hightown → Crosby Beach without overlapping
# Southport (11.2km north) or Liverpool suburbs (>9km south)
SEARCH_POINTS = [
    ("Formby village & inland", 53.5545, -3.0716, 4000),
    ("Hightown village & beach", 53.5195, -3.0680, 2000),
    ("Crosby Beach / Another Place", 53.4847, -3.0620, 2000),
]

# Google Places type -> Formby Guide category slug
CATEGORY_MAP = {
    # Restaurants
    'restaurant':           'restaurants',
    'meal_takeaway':        'restaurants',
    'meal_delivery':        'restaurants',
    'food':                 'restaurants',

    # Cafes
    'cafe':                 'cafes',
    'bakery':               'cafes',

    # Pubs & Bars
    'bar':                  'pubs',
    'night_club':           'pubs',
    'liquor_store':         'pubs',

    # Accommodation
    'lodging':              'accommodation',
    'hotel':                'accommodation',
    'bed_and_breakfast':    'accommodation',
    'guest_house':          'accommodation',
    'motel':                'accommodation',
    'resort_hotel':         'accommodation',
    'campground':           'accommodation',

    # Activities
    'bowling_alley':        'activities',
    'amusement_park':       'activities',
    'movie_theater':        'activities',
    'gym':                  'activities',
    'tourist_attraction':   'activities',
    'museum':               'activities',
    'art_gallery':          'activities',

    # Nature & Walks
    'park':                 'nature-walks',
    'natural_feature':      'nature-walks',

    # Beaches
    'beach':                'beaches',

    # Shopping
    'store':                'shopping',
    'clothing_store':       'shopping',
    'book_store':           'shopping',
    'shoe_store':           'shopping',
    'jewelry_store':        'shopping',
    'florist':              'shopping',
    'gift_shop':            'shopping',
    'home_goods_store':     'shopping',
    'pet_store':            'shopping',
    'toy_store':            'shopping',
    'sporting_goods_store': 'shopping',
    'department_store':     'shopping',
    'supermarket':          'shopping',
    'convenience_store':    'shopping',
    'hair_care':            'shopping',
    'beauty_salon':         'shopping',
    'spa':                  'shopping',
}

# Types to search at every point
SEARCH_TYPES = [
    'restaurant',
    'cafe',
    'bar',
    'lodging',
    'meal_takeaway',
    'bakery',
    'store',
    'clothing_store',
    'book_store',
    'gift_shop',
    'florist',
    'hair_care',
    'beauty_salon',
    'spa',
    'pet_store',
    'sporting_goods_store',
    'gym',
    'bowling_alley',
    'tourist_attraction',
    'museum',
    'art_gallery',
    'park',
    'beach',
    'bed_and_breakfast',
    'guest_house',
]


def search_places(lat, lng, place_type, radius):
    """Fetch all pages of results for a given type near a point."""
    url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
    params = {
        'location': f'{lat},{lng}',
        'radius': radius,
        'type': place_type,
        'key': API_KEY,
    }

    results = []
    page = 1
    while True:
        response = requests.get(url, params=params, timeout=10)
        data = response.json()
        status = data.get('status')

        if status == 'ZERO_RESULTS':
            break
        if status not in ('OK', 'ZERO_RESULTS'):
            print(f"    API status: {status}")
            break

        batch = data.get('results', [])
        results.extend(batch)

        next_page_token = data.get('next_page_token')
        if not next_page_token or page >= 3:
            break

        page += 1
        time.sleep(2)
        params = {'pagetoken': next_page_token, 'key': API_KEY}

    return results


def main():
    print("Formby Guide Business Scraper")
    print("=" * 60)
    for label, lat, lng, radius in SEARCH_POINTS:
        print(f"  {label}: {lat}, {lng} @ {radius}m")
    print(f"  Types: {len(SEARCH_TYPES)}")
    print("=" * 60)

    all_businesses = {}  # Deduplicate by place_id
    total_api_calls = 0

    for point_idx, (label, lat, lng, radius) in enumerate(SEARCH_POINTS, 1):
        print(f"\n-- Point {point_idx}/{len(SEARCH_POINTS)}: {label} --")

        point_new = 0
        for idx, place_type in enumerate(SEARCH_TYPES, 1):
            print(f"  [{idx}/{len(SEARCH_TYPES)}] {place_type}...", end=" ", flush=True)

            places = search_places(lat, lng, place_type, radius)
            total_api_calls += max(1, len(places) // 20)

            new_count = 0
            for place in places:
                place_id = place.get('place_id')
                if not place_id or place_id in all_businesses:
                    continue

                category_slug = CATEGORY_MAP.get(place_type, 'activities')
                all_businesses[place_id] = {
                    'name':        place.get('name', ''),
                    'category':    category_slug,
                    'address':     place.get('vicinity', ''),
                    'postcode':    '',
                    'lat':         place.get('geometry', {}).get('location', {}).get('lat', ''),
                    'lng':         place.get('geometry', {}).get('location', {}).get('lng', ''),
                    'phone':       '',
                    'website':     '',
                    'price_range': str(place.get('price_level', '')),
                }
                new_count += 1

            print(f"+{new_count} | running total: {len(all_businesses)}")
            point_new += new_count
            time.sleep(0.3)

        print(f"  >> Point {point_idx} added {point_new} new businesses")

    # Write CSV
    output_file = 'businesses.csv'
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['name', 'category', 'address', 'postcode', 'lat', 'lng',
                      'phone', 'website', 'price_range']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for biz in all_businesses.values():
            writer.writerow(biz)

    print(f"\n{'=' * 60}")
    print(f"COMPLETE")
    print(f"  Unique businesses found: {len(all_businesses)}")
    print(f"  Approximate API calls:   {total_api_calls}")
    print(f"  Estimated cost:          ${total_api_calls * 0.032:.2f}")
    print(f"  Saved to:                {output_file}")
    print(f"\nNext steps:")
    print(f"  npm run import-businesses          (import CSV into DB)")
    print(f"  python scripts/enrich-businesses.py       (fetch full details)")
    print(f"  python scripts/cleanup-businesses.py      (remove non-visitor biz)")
    print(f"  npm run generate-descriptions             (write SEO descriptions)")


if __name__ == '__main__':
    main()
