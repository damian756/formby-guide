#!/usr/bin/env python3
"""
Remove non-visitor-economy businesses from the Formby Guide database.

KEEP: restaurants, cafes, pubs, accommodation, activities, shopping,
      nature walks, beaches.

REMOVE: plumbers, dentists, solicitors, B2B services, medical, schools,
        pharmacies, car dealers, funeral directors, individual Airbnb lets,
        parking lots, churches (non-attraction), post offices.

Usage: python scripts/cleanup-businesses.py
"""

import os
import re
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

conn_parsed = urlparse(DATABASE_URL)
conn = psycopg2.connect(
    host=conn_parsed.hostname,
    port=conn_parsed.port or 5432,
    database=conn_parsed.path.lstrip('/'),
    user=conn_parsed.username,
    password=conn_parsed.password,
    sslmode='require',
)

# ---- EXACT NAME MATCHES TO DELETE ----
DELETE_NAMES = [
    # Individual Airbnb / holiday let listings (not businesses)
    # These will come through as 'lodging' type — nuke them
    "Formby Point - One-Bedroom House",
    "2 Bed in Formby 90263",
    "Cosy 4 bedroom house - Four-Bedroom House",
    "Lovely 4 Bedroom Private Apartment - Apartment",
    "Let It Be - Two-Bedroom House",
    "The Hideaway - One-Bedroom Apartment",
    "Rural Family Farmhouse with Countryside views - Six-Bedroom House",
    "Strawberry Fields - Three-Bedroom House",
    "EXCLUSIVE Holiday Home - Three-Bedroom Apartment",
    "6 Bed in Ainsdale oc-w33455 - Six-Bedroom House",

    # Parking lots
    "Formby Car Park",
    "National Trust Car Park Formby",
    "Victoria Road Car Park",

    # Medical / dental / opticians
    "Formby Medical Centre",
    "Formby Dental Practice",
    "Formby Dental Surgery",
    "Chapel Lane Dental Practice",
    "Hightown Surgery",
    "Andrew Willetts Opticians",
    "Vision Express",
    "Specsavers Formby",

    # Pharmacies
    "Formby Pharmacy",
    "Boots Formby",
    "Well Pharmacy Formby",
    "Rowlands Pharmacy Formby",

    # Solicitors / estate agents / B2B services
    "Formby Law",
    "DSL Solicitors",
    "Karen Potter The Estate Agent",
    "Rathbones Solicitors",
    "Entwistles Solicitors",

    # Trades / B2B
    "Formby Plumbing",
    "Formby Heating Services",
    "Formby Electrical",
    "Creative Landscapes Formby",

    # Car dealers / garages
    "Perrys Formby",
    "Arnold Clark Formby",
    "Formby Tyres",
    "Mr Clutch Formby",

    # Funeral directors
    "Formby Funeral Service",
    "Co-op Funeralcare Formby",

    # Schools / nurseries / education
    "Formby High School",
    "Formby Primary School",
    "Range High School Formby",
    "Freshfield Primary School",
    "Sacred Heart Catholic Primary School",
    "Woodlands Primary School Formby",
    "Formby Nursery",
    "Chatterbox Nursery Formby",
    "Password Driving School",

    # Churches (non-attraction visitor sites)
    "St Luke's Church Formby",
    "St Peter's Church Formby",
    "Duke Street Methodist Church",
    "Formby Baptist Church",

    # Post offices
    "Formby Post Office",
    "Freshfield Post Office",
]

# ---- REGEX PATTERNS — auto-delete matches ----
PATTERN_DELETE = [
    # Individual Airbnb/self-catering listing names
    r'^\d+\s+bed(room)?\s+',                                         # "2 bedroom flat..."
    r'-\s+(one|two|three|four|five|six|seven|eight)-bedroom\s+(house|apartment|flat|cottage|bungalow)$',
    r'\(sleeps\s+\d+\)',                                              # "Cottage (sleeps 6)"
    r'self.?cater',                                                   # self-catering / self catering
    r'holiday\s+let\b',
    r'^\d+\s+\w+\s+(lane|road|street|avenue|drive|close|way|crescent|terrace|place|court|grove)$',  # bare address
    r'one-bedroom\s+(house|apartment|flat)',
    r'two-bedroom\s+(house|apartment|flat)',
    r'three-bedroom\s+(house|apartment|flat)',
    r'four-bedroom\s+(house|apartment|flat)',
]

# ---- PROTECT these even if patterns match ----
PROTECT_NAMES = {
    "Formby Hall Golf Resort & Spa",     # Legitimate hotel/resort
    "Tree Tops Holiday Cottages",         # Legitimate accommodation agency
    "Formby Holiday Cottages",            # Legitimate agency
    "Formby Beach Self-Catering",         # Legitimate if it's an agency
}

compiled_patterns = [re.compile(p, re.IGNORECASE) for p in PATTERN_DELETE]

# ---- Fetch all businesses ----
with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
    cur.execute('SELECT id, name FROM "Business" ORDER BY name')
    businesses = cur.fetchall()

# Build delete set
delete_set = set(DELETE_NAMES)

for b in businesses:
    name = b['name'] or ''
    if name in PROTECT_NAMES:
        continue
    if name in delete_set:
        continue
    for pattern in compiled_patterns:
        if pattern.search(name):
            delete_set.add(name)
            break

# Find actual matches
to_delete = [b for b in businesses if b['name'] in delete_set]

print(f"Total businesses in DB:  {len(businesses)}")
print(f"Matched for deletion:    {len(to_delete)}")
print(f"Will remain:             {len(businesses) - len(to_delete)}")
print()

if not to_delete:
    print("Nothing to delete — database looks clean!")
    conn.close()
    exit(0)

for b in sorted(to_delete, key=lambda x: x['name']):
    print(f"  DELETE: {b['name']}")

print()
confirm = input("Proceed with deletion? (yes/no): ")
if confirm.lower() != 'yes':
    print("Aborted.")
    conn.close()
    exit(0)

deleted = 0
for b in to_delete:
    with conn.cursor() as cur:
        cur.execute('DELETE FROM "Business" WHERE id = %s', (b['id'],))
    deleted += 1

conn.commit()
conn.close()

print(f"\nDeleted {deleted} non-visitor businesses.")
print(f"Remaining: {len(businesses) - deleted}")
print(f"\nNext: npm run generate-descriptions")
