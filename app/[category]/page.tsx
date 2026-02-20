import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { getCategoryBySlug, isValidCategory, CATEGORIES } from "@/lib/config";
import { prisma } from "@/lib/prisma";
import CategoryBrowser, { type BrowserBusiness } from "@/components/CategoryBrowser";
import type { MapPin } from "@/components/CategoryMap";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sort?: string; area?: string }>;
};

const THEMES: Record<string, { gradient: string; accent: string; emoji: string; tagline: string }> = {
  "nature-walks":  { gradient: "from-[#1C3220] to-[#2E6B3E]", accent: "#2E6B3E", emoji: "🌲", tagline: "Trails, woodland and coastal walks in Formby" },
  "beaches":       { gradient: "from-[#1C4A5A] to-[#2E7A9A]", accent: "#1C4A5A", emoji: "🏖️", tagline: "Formby Beach and the Sefton Coast" },
  "restaurants":   { gradient: "from-[#5C1A1A] to-[#8B3A3A]", accent: "#8B3A3A", emoji: "🍽️", tagline: "The best places to eat in Formby" },
  "cafes":         { gradient: "from-[#5C3A1A] to-[#8B6040]", accent: "#8B6040", emoji: "☕", tagline: "Coffee, cake and somewhere to sit in Formby" },
  "pubs":          { gradient: "from-[#1A2E5C] to-[#2A4A8B]", accent: "#2A4A8B", emoji: "🍺", tagline: "Pubs and bars in Formby village" },
  "activities":    { gradient: "from-[#1A5C3A] to-[#2E8B5A]", accent: "#1A5C3A", emoji: "🏄", tagline: "Things to do and activities in Formby" },
  "accommodation": { gradient: "from-[#3A1A5C] to-[#5A2E8B]", accent: "#5A2E8B", emoji: "🛏️", tagline: "Where to stay in Formby" },
  "shopping":      { gradient: "from-[#5C1A3A] to-[#8B3A6A]", accent: "#8B3A6A", emoji: "🛍️", tagline: "Shops and independents in Formby village" },
};

const CAT_ORDER = [
  "restaurants", "cafes", "pubs", "activities",
  "accommodation", "shopping", "nature-walks", "beaches",
];

const AREAS: { key: string; label: string; test: (addr: string, pc: string) => boolean }[] = [
  { key: "formby",     label: "Formby",     test: (a, pc) => pc.startsWith("L37") || a.includes("Formby") || (!pc.startsWith("L23") && !pc.startsWith("L38") && !a.includes("Crosby") && !a.includes("Hightown")) },
  { key: "freshfield", label: "Freshfield", test: (a) => a.includes("Freshfield") },
  { key: "hightown",   label: "Hightown",   test: (a, pc) => pc.startsWith("L38") || a.includes("Hightown") },
  { key: "crosby",     label: "Crosby",     test: (a, pc) => pc.startsWith("L23") || a.includes("Crosby") },
];

function matchesArea(address: string, postcode: string, areaKey: string): boolean {
  const def = AREAS.find((a) => a.key === areaKey);
  if (!def) return true;
  return def.test(address, postcode);
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

const BASE_URL = "https://www.formbyguide.co.uk";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category" };
  const theme = THEMES[category];
  const title = `${cat.name} in Formby`;
  const description = `${theme?.tagline || cat.description} — browse all listings with Google ratings and contact details on FormbyGuide.co.uk`;
  const url = `${BASE_URL}/${category}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "FormbyGuide.co.uk" },
    twitter: { card: "summary", title, description },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { sort, area } = await searchParams;
  if (!isValidCategory(category)) notFound();

  const cat = getCategoryBySlug(category)!;
  const theme = THEMES[category] || THEMES.restaurants;

  let businesses: BrowserBusiness[] = [];

  try {
    const categoryRecord = await prisma.category.findFirst({ where: { slug: category } });
    if (categoryRecord) {
      const catId = categoryRecord.id;

      if (sort === "alpha") {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY name ASC
        `;
      } else if (sort === "hygiene") {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY
            CASE WHEN "hygieneRating" ~ '^[0-9]+$' THEN CAST("hygieneRating" AS INTEGER) ELSE -1 END DESC,
            (COALESCE(rating, 0) * LOG(COALESCE("reviewCount", 0) + 1)) DESC, name ASC
        `;
      } else if (sort === "google") {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY
            CASE "listingTier" WHEN 'premium' THEN 1 WHEN 'featured' THEN 2 WHEN 'standard' THEN 3 ELSE 4 END ASC,
            COALESCE(rating, 0) DESC, COALESCE("reviewCount", 0) DESC, name ASC
        `;
      } else {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY
            CASE "listingTier" WHEN 'premium' THEN 1 WHEN 'featured' THEN 2 WHEN 'standard' THEN 3 ELSE 4 END ASC,
            (COALESCE(rating, 0) * LOG(COALESCE("reviewCount", 0) + 1)) DESC, name ASC
        `;
      }
    }
  } catch { /* DB unavailable */ }

  const filteredBusinesses = area
    ? businesses.filter((b) => matchesArea(b.address, b.postcode, area))
    : businesses;

  const mapPins: MapPin[] = filteredBusinesses
    .filter((b) => b.lat != null && b.lng != null)
    .map((b) => ({
      slug: b.slug, name: b.name, lat: b.lat!, lng: b.lng!,
      rating: b.rating, reviewCount: b.reviewCount, priceRange: b.priceRange,
      listingTier: b.listingTier, address: b.address, category,
    }));

  const activeSort = sort || "default";
  const isFoodCat = ["restaurants", "cafes", "pubs"].includes(category);
  const sortOptions = [
    { key: "default", label: "Best Match" },
    { key: "alpha",   label: "A – Z" },
    { key: "google",  label: "⭐ Google Rating" },
    ...(isFoodCat ? [{ key: "hygiene", label: "🛡️ Food Safety Rating" }] : []),
  ];

  return (
    <div className="min-h-screen bg-[#F7F9F6]">

      {/* Hero */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient}`}>
        <div className="relative container mx-auto px-4 max-w-6xl py-12 md:py-16">
          <nav className="flex items-center gap-1.5 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{cat.name}</span>
          </nav>

          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-5xl mb-4 drop-shadow-md">{theme.emoji}</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                {cat.name}
                <span className="text-white/50 font-normal"> in Formby</span>
              </h1>
              <p className="text-white/90 text-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">{theme.tagline}</p>
            </div>
            <div className="hidden md:block text-right">
              <div className="font-display text-5xl font-bold text-white/20">{filteredBusinesses.length}</div>
              <div className="text-white/40 text-sm uppercase tracking-widest">listings</div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32L360 16C720 0 1080 0 1440 16V32H0Z" fill="#F7F9F6" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-6">

        {/* Category strip */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {CAT_ORDER.map((slug) => {
              const t = THEMES[slug];
              const c = getCategoryBySlug(slug);
              if (!t || !c) return null;
              const isActive = slug === category;
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                    isActive
                      ? "text-white border-transparent shadow-sm"
                      : "text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                  style={isActive ? { backgroundColor: theme.accent, borderColor: theme.accent } : {}}
                >
                  <span className="text-sm leading-none">{t.emoji}</span>
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>

        <CategoryBrowser
          businesses={filteredBusinesses}
          mapPins={mapPins}
          accentColor={theme.accent}
          themeGradient={theme.gradient}
          emoji={theme.emoji}
          category={category}
          activeArea={area}
          activeSort={activeSort}
          sortOptions={sortOptions}
          areas={AREAS.map(({ key, label }) => ({ key, label }))}
          currentSort={sort}
          currentArea={area}
        />

        {/* Bottom CTA */}
        <div className="mt-14 rounded-2xl overflow-hidden">
          <div className={`bg-gradient-to-br ${theme.gradient} p-8 md:p-10 text-center`}>
            <div className="text-4xl mb-3">{theme.emoji}</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Own a business in Formby?</h3>
            <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
              List for free and get discovered by visitors planning their trip to Formby.
            </p>
            <Link href="/claim-listing" className="inline-block bg-[#C9A96E] hover:bg-[#E8C87A] text-white px-7 py-3 rounded-full font-bold text-sm transition-all hover:shadow-lg">
              Add Your Business →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
