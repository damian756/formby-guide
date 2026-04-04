import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import { getCategoryBySlug, isValidCategory } from "@/lib/config";
import { prisma } from "@/lib/prisma";
import { LATEROOMS } from "@/lib/affiliate-links";
import CategoryBrowser, { type BrowserBusiness } from "@/components/CategoryBrowser";
import type { MapPin } from "@/components/CategoryMapTypes";

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

const CATEGORY_CONTENT: Record<string, React.ReactNode[]> = {
  "restaurants": [
    <>Formby punches above its weight for eating out. The village has a good spread: from proper date-night places like Left Bank Brasserie and Don Luigi to more casual spots like <Link href="/restaurants/the-sparrowhawk-formby" className="text-[#2E6B3E] hover:underline font-medium">The Sparrowhawk</Link> and Emily&apos;s. Sorrento is worth knowing about too, especially if you want Italian without the drive into Liverpool.</>,
    "The Freshfield and Hightown pubs add a few more options if you're flexible on location. For most visitors the village centre is the obvious base: everything's walkable from the train station or the main car parks on Duke Street.",
    "Worth booking ahead at weekends, especially for Left Bank Brasserie and Don Luigi. Midweek you'll generally walk in.",
  ],
  "cafes": [
    "Good coffee is easier to find in Formby than you'd expect for a village this size. The Coffee Carriage is a local favourite: small, friendly, worth the queue. Dapa Coffee is another good option, particularly if you want somewhere to actually sit.",
    "If you're coming from the beach or the red squirrel trail, the National Trust café at the car park does a decent enough coffee and the cake is good. It's not cheap but it's convenient and you're already there.",
    "The Udder Guys does ice cream and light snacks: more of a summer thing, but brilliant in season.",
  ],
  "pubs": [
    "Formby's pub scene is solid rather than spectacular, which is exactly what you want after a walk. The Freshfield and The Lifeboat are the two that come up most often. The Grapes in Freshfield has a decent beer garden if the weather holds.",
    "If you're after a pint post-beach or post-pinewoods walk, The Freshfield is probably your best bet: it's on the right side of the village for most people driving in from the A565. Dog-friendly too, which matters.",
    "The Pinewoods pub is what it sounds like: close to the NT entrance, fine for a quick pint, not a destination.",
  ],
  "activities": [
    "The National Trust pinewoods and red squirrel trail are the headline acts, and they're genuinely worth it. Beyond that, there's cycling along the coastal path, kayaking at Crosby, and horse riding if you've got kids who need something to do.",
    "Formby Beach is an activity in itself: the dunes are brilliant for kids to scramble up, and the walk from the NT car park to the waterline takes about 15–20 minutes depending on the tide. Worth checking tide times before you go.",
    "The Crosby Coastal Park (home to the Iron Men sculpture) is a 20-minute drive south and worth combining into a longer day out on the Sefton Coast.",
  ],
  "accommodation": [
    "Formby doesn't have a huge amount of accommodation, which is mostly fine: Liverpool is 20 minutes by train and Southport is 15, so most visitors use one of those as a base. But if you want to stay local, there are a handful of B&Bs and holiday lets around the village and Freshfield.",
    "If you're here for The Open 2026 at Royal Birkdale, staying in Formby puts you 10 minutes from the course: genuinely useful. Southport accommodation sells out fast and Formby gives you the same access without the same scramble.",
    "Book early if you're visiting in summer. The NT events calendar fills up quickly and local accommodation follows.",
  ],
  "shopping": [
    "Chapel Lane is the main drag for independent shops in Formby: a mix of boutiques, gifts, and the odd useful local service. It's not huge but it's worth a browse, especially if you're killing an hour between lunch and the beach.",
    "The charity shops are genuinely good. I find something almost every time: there are a couple along the high street that are worth a look if you're patient and not in a rush.",
    "Most of the chain shops are on or near Duke Street. The M&S Foodhall is useful if you want to grab something for the beach.",
  ],
  "nature-walks": [
    "The National Trust pinewoods are the main draw: the red squirrel trail is well-marked and most people can walk it in about an hour. Go early, especially if you're hoping to spot squirrels. September to February gives you the best sighting odds.",
    "The coastal path runs north–south along the whole Sefton Coast, so you can extend any walk into something bigger if you've got the legs for it. Formby Point is about 20 minutes from the NT car park and worth reaching if the tide is out.",
    "Parking is at the NT car park (L37 1YH): book through the National Trust app before you leave. The signal in the car park can be unreliable, so sort it at home.",
  ],
  "beaches": [
    "Formby Beach postcode is L37 1YH: that's the National Trust car park on Victoria Road, and it's the main access point for the beach, the sand dunes, and the red squirrel trail.",
    "Parking costs vary by season: roughly £6–£9 via the National Trust app. Download the app before you leave; the signal at the car park is patchy. Dogs are allowed on most of the beach year-round, with some seasonal restrictions on certain sections in summer.",
    "The walk from the car park to the waterline is about 15–20 minutes across the dunes. Worth knowing: there are real rip currents near Formby Point. If the sea looks rough, stick to the flagged zones.",
  ],
};

const CATEGORY_GUIDES: Record<string, { href: string; label: string }[]> = {
  restaurants: [
    { href: "/guides/best-restaurants-formby",      label: "Best Restaurants in Formby" },
    { href: "/the-open-2026/restaurants",           label: "Restaurants During The Open 2026" },
    { href: "/guides/formby-village",               label: "Formby Village Guide" },
    { href: "/guides/dog-friendly-formby",          label: "Dog-Friendly Formby" },
  ],
  cafes: [
    { href: "/guides/dog-friendly-formby",              label: "Dog-Friendly Formby" },
    { href: "/collections/cafes-near-formby-beach",     label: "Cafes Near Formby Beach" },
    { href: "/guides/formby-village",                   label: "Formby Village Guide" },
  ],
  pubs: [
    { href: "/guides/dog-friendly-formby",          label: "Dog-Friendly Formby" },
    { href: "/collections/dog-friendly-pubs-formby", label: "Dog-Friendly Pubs" },
  ],
  "nature-walks": [
    { href: "/red-squirrels-formby",   label: "Red Squirrel Reserve Guide" },
    { href: "/formby-pinewoods",       label: "Formby Pinewoods Guide" },
    { href: "/formby-beach",           label: "Formby Beach Guide" },
  ],
  activities: [
    { href: "/red-squirrels-formby",   label: "Red Squirrel Reserve" },
    { href: "/formby-beach",           label: "Formby Beach Guide" },
    { href: "/formby-pinewoods",       label: "Formby Pinewoods" },
  ],
  accommodation: [
    { href: "/the-open-2026",                        label: "The Open 2026: Stay in Formby" },
    { href: "/the-open-2026/accommodation",          label: "Open Week Accommodation Guide" },
    { href: "/collections/stay-near-royal-birkdale", label: "Places Near Royal Birkdale" },
  ],
  shopping: [
    { href: "/guides/formby-village", label: "Formby Village Guide" },
  ],
  beaches: [
    { href: "/formby-beach",                label: "Formby Beach Guide" },
    { href: "/guides/parking-formby-beach", label: "Parking at Formby Beach" },
    { href: "/guides/dog-friendly-formby",  label: "Dog-Friendly Beach Rules" },
  ],
};

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

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.formbyguide.co.uk";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category" };
  const theme = THEMES[category];
  const title = `${cat.name} in Formby`;
  const description = `${theme?.tagline || cat.description}: browse all listings with Google ratings and contact details on FormbyGuide.co.uk`;
  const url = `${BASE_URL}/${category}`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, type: "website", siteName: "FormbyGuide.co.uk",
      locale: "en_GB",
      images: [{ url: "https://www.formbyguide.co.uk/og-default.png", width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
    },
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
                 rating, "reviewCount", "priceRange", lat, lng, "hygieneRating",
                 images[1] AS "firstImage"
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY name ASC
        `;
      } else if (sort === "hygiene") {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng, "hygieneRating",
                 images[1] AS "firstImage"
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY
            CASE WHEN "hygieneRating" ~ '^[0-9]+$' THEN CAST("hygieneRating" AS INTEGER) ELSE -1 END DESC,
            (COALESCE(rating, 0) * LOG(COALESCE("reviewCount", 0) + 1)) DESC, name ASC
        `;
      } else if (sort === "google") {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng, "hygieneRating",
                 images[1] AS "firstImage"
          FROM "Business"
          WHERE "categoryId" = ${catId} OR ${catId} = ANY("secondaryCategoryIds")
          ORDER BY
            CASE "listingTier" WHEN 'premium' THEN 1 WHEN 'featured' THEN 2 WHEN 'standard' THEN 3 ELSE 4 END ASC,
            COALESCE(rating, 0) DESC, COALESCE("reviewCount", 0) DESC, name ASC
        `;
      } else {
        businesses = await prisma.$queryRaw<BrowserBusiness[]>`
          SELECT slug, name, "shortDescription", description, "listingTier", address, postcode,
                 rating, "reviewCount", "priceRange", lat, lng, "hygieneRating",
                 images[1] AS "firstImage"
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
    ? businesses.filter((b) => matchesArea(b.address ?? "", b.postcode ?? "", area))
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

        {/* Editorial intro */}
        {CATEGORY_CONTENT[category] && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 mb-5">
            <div className="max-w-3xl space-y-3">
              {CATEGORY_CONTENT[category].map((para, i) => (
                <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        )}

        {category === "accommodation" && (
          <div className="bg-gradient-to-r from-[#3A1A5C] to-[#5A2E8B] rounded-2xl p-6 mb-5 flex flex-col sm:flex-row items-center gap-5">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-1">Partner</p>
              <p className="text-white font-semibold mb-1">Compare Formby accommodation on LateRooms</p>
              <p className="text-white/60 text-xs leading-relaxed">
                Over 100,000 UK properties. Free cancellation and pay-later flexibility.
              </p>
            </div>
            <a
              href={LATEROOMS.formby}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex-none bg-[#C9A96E] hover:bg-[#E8C87A] text-[#1C3220] font-bold text-sm px-5 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Search Formby →
            </a>
          </div>
        )}

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

        {/* Related Guides strip */}
        {CATEGORY_GUIDES[category] && (
          <div className="mt-10 mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Related guides</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_GUIDES[category].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E6B3E] border border-[#2E6B3E]/30 hover:bg-[#2E6B3E] hover:text-white px-4 py-2 rounded-full transition-colors"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        )}

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
