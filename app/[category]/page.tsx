import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, MapPin, Phone, Globe, Star } from "lucide-react";
import { getCategoryBySlug, isValidCategory, CATEGORIES } from "@/lib/config";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ category: string }>;
};

const THEMES: Record<string, { gradient: string; emoji: string; tagline: string }> = {
  "nature-walks":  { gradient: "from-[#1C3220] to-[#2E6B3E]", emoji: "🌲", tagline: "Trails, woodland and coastal walks in Formby" },
  "beaches":       { gradient: "from-[#1C4A5A] to-[#2E7A9A]", emoji: "🏖️", tagline: "Formby Beach and the Sefton Coast" },
  "restaurants":   { gradient: "from-[#5C1A1A] to-[#8B3A3A]", emoji: "🍽️", tagline: "The best places to eat in Formby" },
  "cafes":         { gradient: "from-[#5C3A1A] to-[#8B6040]", emoji: "☕", tagline: "Coffee, cake and somewhere to sit in Formby" },
  "pubs":          { gradient: "from-[#1A2E5C] to-[#2A4A8B]", emoji: "🍺", tagline: "Pubs and bars in Formby village" },
  "activities":    { gradient: "from-[#1A5C3A] to-[#2E8B5A]", emoji: "🏄", tagline: "Things to do and activities in Formby" },
  "accommodation": { gradient: "from-[#3A1A5C] to-[#5A2E8B]", emoji: "🛏️", tagline: "Where to stay in Formby" },
  "shopping":      { gradient: "from-[#5C1A3A] to-[#8B3A6A]", emoji: "🛍️", tagline: "Shops and independents in Formby village" },
};

const BASE_URL = "https://www.formbyguide.co.uk";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Not Found" };
  const theme = THEMES[category];
  const title = `${cat.name} in Formby`;
  const description = theme?.tagline ?? cat.description;
  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${category}` },
    openGraph: { title, description, url: `${BASE_URL}/${category}`, type: "website", siteName: "FormbyGuide.co.uk" },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const cat = getCategoryBySlug(category)!;
  const theme = THEMES[category] ?? THEMES.restaurants;

  const categoryRecord = await prisma.category.findFirst({ where: { slug: category } });

  type BusinessRow = {
    slug: string;
    name: string;
    shortDescription: string | null;
    address: string;
    postcode: string;
    phone: string | null;
    website: string | null;
    rating: number | null;
    reviewCount: number | null;
    priceRange: string | null;
    listingTier: string;
    featured: boolean;
  };

  let businesses: BusinessRow[] = [];

  if (categoryRecord) {
    businesses = await prisma.business.findMany({
      where: { categoryId: categoryRecord.id },
      select: {
        slug: true,
        name: true,
        shortDescription: true,
        address: true,
        postcode: true,
        phone: true,
        website: true,
        rating: true,
        reviewCount: true,
        priceRange: true,
        listingTier: true,
        featured: true,
      },
      orderBy: [
        { featured: "desc" },
        { listingTier: "asc" },
        { name: "asc" },
      ],
    }) as BusinessRow[];
  }

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${theme.gradient} text-white py-16 md:py-20`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{cat.name}</span>
          </div>
          <div className="text-5xl mb-3">{theme.emoji}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">{cat.name} in Formby</h1>
          <p className="text-white/80 text-lg max-w-xl">{theme.tagline}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-10">

        {businesses.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">{theme.emoji}</div>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">Listings coming soon</h2>
            <p className="text-[#1C3220]/60 mb-8 max-w-md mx-auto">
              We&apos;re building out the {cat.name.toLowerCase()} listings for Formby. Got a business to suggest?
            </p>
            <Link
              href="/claim-listing"
              className="inline-block bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors"
            >
              Add Your Business
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-[#1C3220]/50 mb-6">{businesses.length} listing{businesses.length !== 1 ? "s" : ""}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businesses.map((b) => (
                <Link
                  key={b.slug}
                  href={`/${category}/${b.slug}`}
                  className="group bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden card-hover hover:border-[#2E6B3E]/30 transition-all"
                >
                  {/* Tier badge */}
                  {b.listingTier !== "free" && (
                    <div className="bg-[#C9A96E] text-white text-xs font-semibold px-3 py-1 text-center uppercase tracking-wider">
                      {b.listingTier}
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h2 className="font-display font-bold text-[#1C3220] text-lg leading-tight group-hover:text-[#2E6B3E] transition-colors">
                        {b.name}
                      </h2>
                      {b.priceRange && (
                        <span className="text-xs text-[#1C3220]/50 bg-[#E8EDE6] px-2 py-1 rounded shrink-0">{b.priceRange}</span>
                      )}
                    </div>

                    {b.rating && (
                      <div className="flex items-center gap-1.5 mb-2">
                        <Star className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                        <span className="text-sm font-semibold text-[#1C3220]">{b.rating.toFixed(1)}</span>
                        {b.reviewCount && (
                          <span className="text-xs text-[#1C3220]/40">({b.reviewCount.toLocaleString()} reviews)</span>
                        )}
                      </div>
                    )}

                    {b.shortDescription && (
                      <p className="text-sm text-[#1C3220]/60 leading-relaxed mb-3 line-clamp-2">{b.shortDescription}</p>
                    )}

                    <div className="flex items-start gap-1.5 text-xs text-[#1C3220]/50">
                      <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                      <span>{b.address}{b.postcode ? `, ${b.postcode}` : ""}</span>
                    </div>

                    {(b.phone || b.website) && (
                      <div className="flex gap-3 mt-3 pt-3 border-t border-[#1C3220]/6">
                        {b.phone && (
                          <span className="flex items-center gap-1 text-xs text-[#1C3220]/50">
                            <Phone className="w-3 h-3" />{b.phone}
                          </span>
                        )}
                        {b.website && (
                          <span className="flex items-center gap-1 text-xs text-[#2E6B3E]">
                            <Globe className="w-3 h-3" />Website
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Add listing CTA */}
            <div className="mt-12 bg-[#E8EDE6] rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">Own a {cat.name.toLowerCase().replace(/s$/, "")} in Formby?</h2>
              <p className="text-[#1C3220]/60 mb-6">Get listed on FormbyGuide and reach visitors planning their trip.</p>
              <Link href="/claim-listing" className="inline-block bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors">
                List Your Business — Free
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
