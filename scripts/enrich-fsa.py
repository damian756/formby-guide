#!/usr/bin/env python3
"""
Fetch Food Hygiene Ratings from the Food Standards Agency (FSA) API
and store them against matching businesses in the database.

Only runs for food-related categories: restaurants, cafes, pubs.

Usage:
  python scripts/enrich-fsa.py
"""

import os
import json
import time
import re
import requests
import psycopg2
import psycopg2.extras
from dotenv import load_dotenv
from urllib.parse import urlparse

load_dotenv(".env.local")
load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    print("Error: DATABASE_URL not set")
    exit(1)

FSA_BASE = "https://api.ratings.food.gov.uk"
FSA_HEADERS = {"x-api-version": "2", "Accept": "application/json"}
DELAY = 0.5  # seconds between FSA calls

FOOD_CAT_SLUGS = {"restaurants", "cafes", "pubs"}

PROGRESS_FILE = "fsa-progress.json"


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
    return {"processed": [], "failed": []}


def save_progress(prog):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(prog, f)


def clean_name(name: str) -> str:
    """Strip common suffixes to improve matching."""
    suffixes = [
        r"\s+(Ltd|Limited|LLP|PLC|& Co|and Co)\.?$",
        r"\s+Formby$",
        r"\s+Liverpool$",
    ]
    n = name
    for s in suffixes:
        n = re.sub(s, "", n, flags=re.IGNORECASE).strip()
    return n


def extract_postcode(address: str) -> str:
    match = re.search(r'[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}', address, re.IGNORECASE)
    return match.group().upper().strip() if match else ""


def fsa_search(name: str, postcode: str) -> dict | None:
    """
    Search FSA for a business. Returns the best matching establishment dict or None.
    Strategy:
      1. Search by name + postcode (exact)
      2. If no results, search by cleaned name only (first word of postcode area)
    """
    def search(params):
        try:
            r = requests.get(
                f"{FSA_BASE}/Establishments",
                headers=FSA_HEADERS,
                params={**params, "pageSize": 10, "apiVersion": 2},
                timeout=10,
            )
            if r.ok:
                data = r.json()
                return data.get("establishments", [])
        except Exception as e:
            print(f"    FSA error: {e}")
        return []

    # Try name + postcode
    if postcode:
        results = search({"name": name, "address": postcode})
        if results:
            return results[0]

    # Try cleaned name + postcode area (e.g. "L37")
    clean = clean_name(name)
    pc_area = postcode.split()[0] if postcode else ""
    if pc_area:
        results = search({"name": clean, "address": pc_area})
        if results:
            return results[0]

    # Last resort: just name search
    results = search({"name": clean})
    if results:
        # Pick best match — same postcode area
        if pc_area:
            for r in results:
                addr = (r.get("addressLine4") or "") + " " + (r.get("postCode") or "")
                if pc_area.upper() in addr.upper():
                    return r
        return results[0]

    return None


def rating_value(establishment: dict) -> str | None:
    """Extract a clean rating string: '5', '4', ... or 'Exempt', 'AwaitingInspection'."""
    # FSA API returns PascalCase keys
    rv = establishment.get("RatingValue") or establishment.get("ratingValue")
    if rv is None:
        return None
    rv = str(rv).strip()
    if rv in {"", "None", "null"}:
        return None
    return rv


def main():
    print("Formby Guide — FSA Hygiene Rating Enrichment")
    print("=" * 60)

    prog = load_progress()
    processed_ids = set(prog.get("processed", []))
    failed_ids = set(prog.get("failed", []))

    conn = connect_db()
    print("Connected to database")

    # Fetch food-category businesses
    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
        cur.execute("""
            SELECT b.id, b.name, b.address, b.postcode, b."hygieneRating", c.slug AS cat_slug
            FROM "Business" b
            JOIN "Category" c ON c.id = b."categoryId"
            WHERE c.slug IN ('restaurants', 'cafes', 'pubs')
            ORDER BY b.name
        """)
        businesses = cur.fetchall()

    total = len(businesses)
    to_process = [b for b in businesses if b["id"] not in processed_ids]

    print(f"Food-category businesses: {total}")
    print(f"Already processed:        {len(processed_ids)}")
    print(f"To process now:           {len(to_process)}")
    print("=" * 60)

    found = 0
    not_found = 0

    for i, biz in enumerate(to_process):
        biz_id = biz["id"]
        name = biz["name"]
        postcode = biz["postcode"] or extract_postcode(biz["address"] or "")

        safe = name.encode("ascii", "replace").decode("ascii")
        print(f"\n[{i+1}/{len(to_process)}] {safe} | {postcode}")

        establishment = fsa_search(name, postcode)
        time.sleep(DELAY)

        if not establishment:
            print(f"  -- Not found in FSA")
            failed_ids.add(biz_id)
            not_found += 1
            prog["failed"] = list(failed_ids)
            save_progress(prog)
            processed_ids.add(biz_id)
            prog["processed"] = list(processed_ids)
            save_progress(prog)
            continue

        rv = rating_value(establishment)
        fhrs_id = str(establishment.get("FHRSID") or "")
        rating_date_str = establishment.get("RatingDate") or None

        print(f"  OK FSA ID={fhrs_id} | Rating={rv}")

        try:
            with conn.cursor() as cur:
                cur.execute("""
                    UPDATE "Business" SET
                        "hygieneRating"     = %s,
                        "hygieneRatingDate" = %s,
                        "hygieneRatingShow" = TRUE,
                        "fhrsId"            = %s,
                        "updatedAt"         = NOW()
                    WHERE id = %s
                """, (
                    rv,
                    rating_date_str,
                    fhrs_id or None,
                    biz_id,
                ))
            conn.commit()
            found += 1
        except Exception as e:
            print(f"  DB error: {e}")
            conn.rollback()
            failed_ids.add(biz_id)
            not_found += 1

        processed_ids.add(biz_id)
        prog["processed"] = list(processed_ids)
        prog["failed"] = list(failed_ids)

        if (i + 1) % 20 == 0:
            save_progress(prog)
            print(f"\n  --- Progress {i+1}/{len(to_process)} | Found: {found} | Not found: {not_found} ---")

    save_progress(prog)
    conn.close()

    print(f"\n{'=' * 60}")
    print(f"COMPLETE")
    print(f"  Hygiene ratings saved: {found}")
    print(f"  Not found/failed:      {not_found}")


if __name__ == "__main__":
    main()
