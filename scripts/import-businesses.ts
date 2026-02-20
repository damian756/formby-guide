#!/usr/bin/env tsx
/**
 * Import businesses from businesses.csv into the Formby Guide database.
 * Usage: npm run import-businesses
 *
 * Run scrape-businesses.py first to generate the CSV.
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

interface CSVRow {
  name: string;
  category: string;
  address: string;
  postcode: string;
  lat: string;
  lng: string;
  phone: string;
  website: string;
  price_range: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parsePriceRange(priceRange: string): string | undefined {
  if (!priceRange) return undefined;
  const level = parseInt(priceRange);
  if (level >= 1 && level <= 4) {
    return "£".repeat(level);
  }
  return priceRange || undefined;
}

async function main() {
  const csvPath = path.join(process.cwd(), "businesses.csv");

  if (!fs.existsSync(csvPath)) {
    console.error(`Error: businesses.csv not found at ${csvPath}`);
    console.error("Run the scraper first: python scripts/scrape-businesses.py");
    process.exit(1);
  }

  console.log("Reading businesses.csv...");
  const content = fs.readFileSync(csvPath, "utf-8");
  const rows = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as CSVRow[];
  console.log(`Found ${rows.length} rows in CSV`);

  // Build category slug → id map
  const categories = await prisma.category.findMany({ select: { id: true, slug: true } });
  const categoryMap = new Map(categories.map((c) => [c.slug, c.id]));
  console.log(`Known categories: ${[...categoryMap.keys()].join(", ")}\n`);

  let imported = 0;
  let skipped = 0;

  for (const row of rows) {
    if (!row.name?.trim()) {
      skipped++;
      continue;
    }

    const categoryId = categoryMap.get(row.category);
    if (!categoryId) {
      console.warn(`  Skip "${row.name}": unknown category "${row.category}"`);
      skipped++;
      continue;
    }

    const slug = slugify(row.name);
    if (!slug) {
      console.warn(`  Skip "${row.name}": could not generate slug`);
      skipped++;
      continue;
    }

    try {
      await prisma.business.upsert({
        where: { slug },
        create: {
          slug,
          name: row.name,
          categoryId,
          address: row.address || "Formby",
          postcode: row.postcode || "",
          lat: row.lat ? parseFloat(row.lat) : null,
          lng: row.lng ? parseFloat(row.lng) : null,
          phone: row.phone || null,
          website: row.website || null,
          priceRange: parsePriceRange(row.price_range),
          images: [],
        },
        update: {
          name: row.name,
          address: row.address || "Formby",
          postcode: row.postcode || "",
          lat: row.lat ? parseFloat(row.lat) : null,
          lng: row.lng ? parseFloat(row.lng) : null,
          phone: row.phone || null,
          website: row.website || null,
          priceRange: parsePriceRange(row.price_range),
        },
      });
      imported++;
      if (imported % 25 === 0) {
        console.log(`  Imported ${imported}...`);
      }
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`  Error importing "${row.name}": ${msg}`);
      skipped++;
    }
  }

  console.log(`\n✓ Import complete`);
  console.log(`  Imported: ${imported}`);
  console.log(`  Skipped:  ${skipped}`);
  console.log(`\nNext: python scripts/enrich-businesses.py`);

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
