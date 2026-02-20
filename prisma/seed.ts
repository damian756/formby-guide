import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const CATEGORIES = [
  { slug: "nature-walks",  name: "Nature & Walks",      description: "National Trust trails, pinewoods and coastal paths in Formby", sortOrder: 1 },
  { slug: "beaches",       name: "Beaches",              description: "Formby Beach and the Sefton Coast", sortOrder: 2 },
  { slug: "restaurants",   name: "Restaurants",          description: "Best restaurants in Formby", sortOrder: 3 },
  { slug: "cafes",         name: "Cafes & Coffee",       description: "Cafes and coffee shops in Formby", sortOrder: 4 },
  { slug: "pubs",          name: "Pubs & Bars",          description: "Pubs and bars in Formby village", sortOrder: 5 },
  { slug: "activities",    name: "Activities",           description: "Things to do and family activities in Formby", sortOrder: 6 },
  { slug: "accommodation", name: "Places to Stay",       description: "Hotels, B&Bs and holiday lets in Formby", sortOrder: 7 },
  { slug: "shopping",      name: "Shopping",             description: "Independent shops and boutiques in Formby", sortOrder: 8 },
];

const BUSINESSES = [
  {
    slug: "emilys-formby",
    name: "Emily's Restaurant",
    categorySlug: "restaurants",
    address: "Chapel Lane, Formby",
    postcode: "L37 4DU",
    shortDescription: "Popular village restaurant, relaxed atmosphere and a great local following.",
    priceRange: "££",
  },
  {
    slug: "left-bank-brasserie-formby",
    name: "Left Bank Brasserie",
    categorySlug: "restaurants",
    address: "Formby",
    postcode: "L37",
    shortDescription: "A proper treat. Relaxed brasserie with a solid menu — book ahead at weekends.",
    priceRange: "£££",
  },
  {
    slug: "the-sparrowhawk-formby",
    name: "The Sparrowhawk",
    categorySlug: "restaurants",
    address: "Formby",
    postcode: "L37",
    shortDescription: "Well-regarded village dining with a loyal local crowd.",
    priceRange: "££",
  },
  {
    slug: "don-luigi-formby",
    name: "Don Luigi",
    categorySlug: "restaurants",
    address: "Formby",
    postcode: "L37",
    shortDescription: "Italian restaurant with a strong reputation and plenty of Google reviews.",
    priceRange: "££",
  },
  {
    slug: "national-trust-formby-beach",
    name: "Formby Beach (National Trust)",
    categorySlug: "beaches",
    address: "Victoria Road, Formby",
    postcode: "L37 1YH",
    website: "https://www.nationaltrust.org.uk/visit/liverpool-lancashire/formby",
    shortDescription: "One of the best beaches in the North West. Pine woods, sand dunes, and red squirrels.",
    priceRange: "£",
  },
  {
    slug: "formby-red-squirrel-reserve",
    name: "Formby Red Squirrel Reserve",
    categorySlug: "nature-walks",
    address: "Victoria Road, Formby",
    postcode: "L37 1YH",
    website: "https://www.nationaltrust.org.uk/visit/liverpool-lancashire/formby",
    shortDescription: "One of the best places in England to spot red squirrels in the wild. Go early.",
    priceRange: "£",
  },
];

async function main() {
  for (const cat of CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      create: cat,
      update: { name: cat.name, description: cat.description, sortOrder: cat.sortOrder },
    });
  }
  console.log("Seeded categories:", CATEGORIES.length);

  const categories = await prisma.category.findMany({ select: { id: true, slug: true } });
  const categoryById = new Map(categories.map((c) => [c.slug, c.id]));

  for (const b of BUSINESSES) {
    const categoryId = categoryById.get(b.categorySlug);
    if (!categoryId) throw new Error(`Category not found: ${b.categorySlug}`);
    const { categorySlug, ...rest } = b;
    await prisma.business.upsert({
      where: { slug: b.slug },
      create: { ...rest, categoryId, images: [] },
      update: { name: rest.name, shortDescription: rest.shortDescription ?? undefined, priceRange: rest.priceRange ?? undefined },
    });
  }
  console.log("Seeded businesses:", BUSINESSES.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
