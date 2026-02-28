import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Star, MapPin, ArrowRight, Utensils } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Restaurants in Formby During Open Week 2026 | FormbyGuide",
  description:
    "Where to eat in Formby during The Open 2026. Restaurants in Formby village, away from the Birkdale crowds. Book ahead — Open week gets busy.",
  alternates: { canonical: `${BASE_URL}/the-open-2026/restaurants` },
  openGraph: {
    title: "Restaurants in Formby During Open Week 2026",
    description:
      "Formby village restaurants during The Open 2026 — away from the Birkdale crowds, book ahead.",
    url: `${BASE_URL}/the-open-2026/restaurants`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
};

type RestaurantBusiness = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  listingTier: string;
  address: string;
  rating: number | null;
  reviewCount: number | null;
  priceRange: string | null;
  images: string[];
};

function formatReviewCount(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export default async function OpenRestaurantsPage() {
  let businesses: RestaurantBusiness[] = [];

  try {
    const raw = await prisma.business.findMany({
      where: { category: { slug: "restaurants" } },
      select: {
        id: true,
        slug: true,
        name: true,
        shortDescription: true,
        description: true,
        listingTier: true,
        address: true,
        rating: true,
        reviewCount: true,
        priceRange: true,
        images: true,
      },
    });

    const tierOrder: Record<string, number> = { premium: 1, featured: 2, standard: 3 };
    businesses = raw
      .map((b) => ({ ...b, images: b.images ?? [] }))
      .sort((a, b) => {
        const ta = tierOrder[a.listingTier] ?? 4;
        const tb = tierOrder[b.listingTier] ?? 4;
        if (ta !== tb) return ta - tb;
        const scoreA = (a.rating ?? 0) * Math.log((a.reviewCount ?? 0) + 1);
        const scoreB = (b.rating ?? 0) * Math.log((b.reviewCount ?? 0) + 1);
        return scoreB - scoreA;
      });
  } catch (e) {
    console.error("Restaurants query failed:", e);
  }

  return (
    <div className="min-h-screen bg-[#F7F9F6]">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="bg-[#1C3220] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/the-open-2026" className="hover:text-white/70 transition-colors">The Open 2026</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Restaurants</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#C9A96E]/20 border border-[#C9A96E]/30 rounded-xl flex items-center justify-center">
              <Utensils className="w-5 h-5 text-[#C9A96E]" />
            </div>
            <div className="inline-flex items-center gap-2 bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              The Open 2026
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Where to Eat in Formby During Open Week
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Formby village has some excellent restaurants that won&apos;t be heaving with Open crowds 
            the way Birkdale pubs will. Book ahead for evening meals — Open week does get busy, 
            even here.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { label: "Recommended", value: "Book ahead" },
              { label: "Distance to Royal Birkdale", value: "2 miles" },
              { label: "Open dates", value: "16–19 July 2026" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 backdrop-blur rounded-lg px-4 py-2.5 border border-white/10">
                <p className="text-white/50 text-xs mb-0.5">{label}</p>
                <p className="text-white font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-6 overflow-hidden mt-8">
          <svg viewBox="0 0 1440 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 24L360 12C720 0 1080 0 1440 12V24H0Z" fill="#F7F9F6" />
          </svg>
        </div>
      </div>

      {/* ── Tip ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="bg-[#E8EDE6] border border-[#1C3220]/10 rounded-2xl p-5 mb-10">
          <p className="text-[#1C3220] font-semibold text-sm mb-1">Book ahead for evenings.</p>
          <p className="text-[#1C3220]/70 text-sm leading-relaxed">
            Formby restaurants fill up during Open week, especially evenings. Left Bank Brasserie 
            and Emily&apos;s in particular — book these as early as you can. Lunch is usually easier to walk into.
          </p>
        </div>

        {/* ── Listings ─────────────────────────────────────────────── */}
        {businesses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🍽️</p>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">
              Restaurant listings coming soon
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm">
              We&apos;re adding restaurant listings. In the meantime, see our full restaurants guide.
            </p>
            <Link href="/restaurants" className="inline-flex items-center gap-2 mt-4 text-[#2E6B3E] font-semibold hover:underline text-sm">
              Browse all restaurants <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">
              Formby Restaurants
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businesses.map((b) => (
                <Link
                  key={b.id}
                  href={`/restaurants/${b.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="relative w-full h-44 bg-gradient-to-br from-[#5C1A1A] to-[#8B3A3A] flex-none overflow-hidden">
                    {b.images[0] ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={b.images[0]}
                          alt={b.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-30 select-none">🍽️</span>
                      </div>
                    )}
                    {b.listingTier === "premium" && (
                      <span className="absolute top-3 left-3 text-[10px] font-black bg-[#C9A96E] text-[#1C3220] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        ✦ Featured
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1 gap-2">
                    <h3 className="font-display font-bold text-[#1C3220] text-base leading-snug group-hover:text-[#2E6B3E] transition-colors line-clamp-2">
                      {b.name}
                    </h3>
                    <p className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{b.address.split(",")[0]}</span>
                    </p>
                    {(b.shortDescription || b.description) && (
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
                        {b.shortDescription || b.description?.slice(0, 120)}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50">
                      {b.rating != null ? (
                        <span className="flex items-center gap-1 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {b.rating.toFixed(1)}
                          {b.reviewCount != null && (
                            <span className="font-normal text-amber-500 ml-0.5">({formatReviewCount(b.reviewCount)})</span>
                          )}
                        </span>
                      ) : <span />}
                      <div className="flex items-center gap-2">
                        {b.priceRange && <span className="text-gray-400 text-xs font-semibold">{b.priceRange}</span>}
                        <span className="text-xs font-bold text-[#2E6B3E] group-hover:translate-x-0.5 transition-transform">View →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/restaurants"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1C3220] px-5 py-2.5 rounded-full text-sm font-semibold hover:border-[#2E6B3E] hover:text-[#2E6B3E] transition-all shadow-sm"
              >
                Browse all Formby restaurants <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </>
        )}

        {/* ── Back to Open guide ────────────────────────────────────── */}
        <div className="mt-14 bg-[#1C3220] rounded-2xl p-6 md:p-8 text-white">
          <h2 className="font-display text-xl font-bold mb-3">Planning Your Open 2026 Visit</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xl">
            Getting there, accommodation, parking, and everything else worth knowing about staying 
            in Formby for The Open at Royal Birkdale.
          </p>
          <Link
            href="/the-open-2026"
            className="inline-flex items-center gap-2 text-[#C9A96E] text-sm font-semibold hover:text-white transition-colors"
          >
            Full Open 2026 guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
