#!/usr/bin/env tsx
/**
 * Recategorise a business from one category to another.
 * Usage: npx tsx scripts/recategorise-business.ts <slug> <new-category-slug>
 *
 * Example: npx tsx scripts/recategorise-business.ts another-place activities
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const slug = process.argv[2];
  const newCategorySlug = process.argv[3];

  if (!slug || !newCategorySlug) {
    console.error("Usage: npx tsx scripts/recategorise-business.ts <slug> <new-category-slug>");
    console.error("Example: npx tsx scripts/recategorise-business.ts another-place activities");
    process.exit(1);
  }

  const business = await prisma.business.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!business) {
    console.error(`Business not found: ${slug}`);
    process.exit(1);
  }

  const newCategory = await prisma.category.findUnique({
    where: { slug: newCategorySlug },
  });

  if (!newCategory) {
    console.error(`Category not found: ${newCategorySlug}`);
    process.exit(1);
  }

  await prisma.business.update({
    where: { slug },
    data: { categoryId: newCategory.id },
  });

  console.log(`✓ Moved "${business.name}" from ${business.category.slug} → ${newCategorySlug}`);
  console.log(`  URL: /${newCategorySlug}/${slug}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
