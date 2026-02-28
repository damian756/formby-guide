/**
 * Bulk-tag FormbyGuide businesses based on address and description keyword matching.
 * Run with: node scripts/bulk-tag-formby.mjs
 * Safe to re-run — it only ADDS tags, never removes existing ones.
 */

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });
dotenv.config();

import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) { console.error("DATABASE_URL not set"); process.exit(1); }

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

function haystack(b) {
  return [b.name, b.shortDescription, b.description, b.address]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

const RULES = [
  // ── Feature tags ─────────────────────────────────────────────────────────────

  // Formby is a dog-walking village. Most cafes/pubs/restaurants welcome dogs.
  // Google descriptions rarely say it explicitly, so we use broader heuristics:
  // explicit mention OR category + outdoor-seating hint OR known dog-friendly types.
  {
    tag: "dog-friendly",
    test: (b) => {
      const h = haystack(b);
      const explicit =
        /dog[- ]friendly/i.test(h) ||
        /dogs?\s+welcome/i.test(h) ||
        /dogs?\s+allowed/i.test(h) ||
        /well[- ]behaved\s+dogs/i.test(h) ||
        /four[- ]legged/i.test(h) ||
        /dog\s+bowl/i.test(h) ||
        /canine/i.test(h) ||
        /pet[- ]friendly/i.test(h) ||
        /pooch/i.test(h) ||
        /paws\s+welcome/i.test(h);
      if (explicit) return true;

      // Pubs with beer gardens / outdoor seating are almost always dog-friendly
      if (b.categorySlug === "pubs") {
        return (
          /beer\s+garden/i.test(h) ||
          /outdoor/i.test(h) ||
          /terrace/i.test(h) ||
          /garden/i.test(h) ||
          /courtyard/i.test(h) ||
          /traditional/i.test(h) ||
          /free\s+house/i.test(h) ||
          /micro\s*pub/i.test(h) ||
          /tap\s*(room|house)/i.test(h)
        );
      }

      // Cafes near the beach or pinewoods cater to walkers with dogs
      if (b.categorySlug === "cafes") {
        const nearBeach = (b.postcode ?? "").startsWith("L37 1") || /beach|pinewood|nature|kiosk|coffee\s+carriage/i.test(h);
        const hasOutdoor = /outdoor|outside|terrace|garden|courtyard|al\s+fresco/i.test(h);
        return nearBeach || hasOutdoor;
      }

      // Restaurants: pub-restaurants, casual dining, and places with outdoor areas
      if (b.categorySlug === "restaurants") {
        return (
          /beer\s+garden/i.test(h) ||
          /outdoor/i.test(h) ||
          /terrace/i.test(h) ||
          /garden/i.test(h) ||
          /courtyard/i.test(h) ||
          /inn\b/i.test(h) ||
          /hotel/i.test(h) ||
          /pub/i.test(h) ||
          /bar\s+(and|&)\s+(eatery|kitchen|bistro|grill)/i.test(h) ||
          /brasserie/i.test(h) ||
          /carvery/i.test(h)
        );
      }

      return false;
    },
  },
  {
    tag: "family-friendly",
    test: (b) => {
      const h = haystack(b);
      const explicit =
        /family[- ]friendly/i.test(h) ||
        /kids[''']?\s+menu/i.test(h) ||
        /children[''']?s?\s+menu/i.test(h) ||
        /high\s*chair/i.test(h) ||
        /highchair/i.test(h) ||
        /family\s+restaurant/i.test(h) ||
        /suitable\s+for\s+(kids|children|families)/i.test(h) ||
        /children\s+welcome/i.test(h) ||
        /family\s+run/i.test(h) ||
        /family\s+owned/i.test(h) ||
        /family\s+dining/i.test(h) ||
        /all\s+ages/i.test(h);
      if (explicit) return true;

      // Most mainstream restaurants/cafes in Formby are family-friendly
      if (b.categorySlug === "restaurants" || b.categorySlug === "cafes") {
        const familyBrands = /toby\s+carvery|mcdonald|subway|domino|costa|greggs|pizza|grill|carvery|fish\s+bar|chip/i.test(h);
        const villageDining = /bistro|brasserie|italian|indian|chinese|nepalese|tapas|sushi/i.test(h);
        return familyBrands || villageDining;
      }

      // Activities: parks, nature, free attractions
      if (b.categorySlug === "activities" || b.categorySlug === "nature-walks" || b.categorySlug === "beaches") {
        return /park|playground|nature|beach|trail|walk|reserve|forest|wood/i.test(h);
      }

      return false;
    },
  },
  {
    tag: "free",
    test: (b) => {
      const h = haystack(b);
      return (
        /free\s+entry/i.test(h) ||
        /free\s+admission/i.test(h) ||
        /no\s+entry\s+fee/i.test(h) ||
        /free\s+to\s+(visit|enter|access)/i.test(h) ||
        /no\s+charge/i.test(h) ||
        /national\s+trust/i.test(h)
      );
    },
  },
  {
    tag: "outdoor-seating",
    test: (b) => {
      const h = haystack(b);
      return (
        /outdoor\s+seating/i.test(h) ||
        /outside\s+seating/i.test(h) ||
        /beer\s+garden/i.test(h) ||
        /terrace/i.test(h) ||
        /al\s+fresco/i.test(h) ||
        /garden\s+seating/i.test(h) ||
        /courtyard/i.test(h) ||
        /patio/i.test(h)
      );
    },
  },

  // ── Location tags ─────────────────────────────────────────────────────────────
  {
    tag: "village-centre",
    test: (b) =>
      /formby/i.test(b.address ?? "") ||
      (b.postcode ?? "").startsWith("L37 7") ||
      (b.postcode ?? "").startsWith("L37 4") ||
      (b.postcode ?? "").startsWith("L37 8"),
  },
  {
    tag: "near-beach",
    test: (b) => {
      const h = haystack(b);
      return (
        /national\s+trust/i.test(h) ||
        (b.postcode ?? "").startsWith("L37 1") ||
        /formby\s+beach/i.test(h) ||
        /formby\s+point/i.test(h) ||
        /victoria\s+road/i.test(b.address ?? "") ||
        /lifeboat\s+road/i.test(b.address ?? "")
      );
    },
  },
  {
    tag: "near-birkdale",
    test: (b) => {
      const h = haystack(b);
      const explicit =
        /royal\s+birkdale/i.test(h) ||
        /birkdale/i.test(b.address ?? "") ||
        /the\s+open\s+(2026|championship)/i.test(h);
      if (explicit) return true;

      // All Formby accommodation is near Royal Birkdale (2 miles up the road)
      if (b.categorySlug === "accommodation") {
        return (b.postcode ?? "").startsWith("L37");
      }
      return false;
    },
  },
];

async function main() {
  console.log("Fetching all businesses...");
  const businesses = await prisma.business.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      postcode: true,
      shortDescription: true,
      description: true,
      tags: true,
      category: { select: { slug: true } },
    },
  });

  // Flatten categorySlug onto each business for rule access
  for (const b of businesses) {
    b.categorySlug = b.category?.slug ?? "";
  }

  console.log(`Found ${businesses.length} businesses. Evaluating tag rules...`);

  let updated = 0;
  let skipped = 0;

  for (const b of businesses) {
    const currentTags = new Set(b.tags ?? []);
    const newTags = new Set(currentTags);

    for (const rule of RULES) {
      if (rule.test(b)) {
        newTags.add(rule.tag);
      }
    }

    const tagsToAdd = [...newTags].filter((t) => !currentTags.has(t));

    if (tagsToAdd.length > 0) {
      await prisma.business.update({
        where: { id: b.id },
        data: { tags: [...newTags] },
      });
      console.log(`  [+] ${b.name} → added: ${tagsToAdd.join(", ")}`);
      updated++;
    } else {
      skipped++;
    }
  }

  console.log(`\nDone. Updated: ${updated}, unchanged: ${skipped}`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
