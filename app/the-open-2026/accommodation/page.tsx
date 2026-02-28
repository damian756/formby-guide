import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Star, MapPin, ArrowRight, Hotel } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Accommodation in Formby for The Open 2026 | FormbyGuide",
  description:
    "Where to stay in Formby for The Open 2026 at Royal Birkdale. B&Bs, holiday lets and places to stay two miles from the course — with a direct train to Birkdale station.",
  alternates: { canonical: `${BASE_URL}/the-open-2026/accommodation` },
  openGraph: {
    title: "Accommodation in Formby for The Open 2026",
    description:
      "Stay in Formby for The Open 2026. Two miles from Royal Birkdale, one train stop away.",
    url: `${BASE_URL}/the-open-2026/accommodation`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
};

type AccomBusiness = {
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

export default async function OpenAccommodationPage() {
  let businesses: AccomBusiness[] = [];

  try {
    const raw = await prisma.business.findMany({
      where: { category: { slug: "accommodation" } },
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
      orderBy: [{ listingTier: "asc" }, { rating: "desc" }],
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
    console.error("Accommodation query failed:", e);
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
            <span className="text-white/70">Accommodation</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#C9A96E]/20 border border-[#C9A96E]/30 rounded-xl flex items-center justify-center">
              <Hotel className="w-5 h-5 text-[#C9A96E]" />
            </div>
            <div className="inline-flex items-center gap-2 bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              The Open 2026
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Accommodation in Formby for The Open
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-6">
            Formby is two miles from Royal Birkdale and one train stop away. If Birkdale and Southport 
            are full — and they will be — Formby is the practical alternative. Book early.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { label: "Distance to Royal Birkdale", value: "2 miles" },
              { label: "Train to Birkdale station", value: "Under 5 mins" },
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

      {/* ── Alert ────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
          <p className="text-amber-900 font-semibold text-sm mb-1">Book now — seriously.</p>
          <p className="text-amber-800 text-sm leading-relaxed">
            The Open at Royal Birkdale in 2014 sold out accommodation across a 15-mile radius. 
            Formby, Birkdale, Southport, Ainsdale, Crosby — all of it went. The closer to July 2026, 
            the more expensive and scarce options become.
          </p>
        </div>

        {/* ── Listings ─────────────────────────────────────────────── */}
        {businesses.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🏡</p>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-2">
              Accommodation listings coming soon
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm">
              We&apos;re adding accommodation listings. In the meantime, check Booking.com and Airbnb 
              for &quot;Formby&quot; — there are good options available.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">
              Places to Stay in Formby
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businesses.map((b) => (
                <Link
                  key={b.id}
                  href={`/accommodation/${b.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="relative w-full h-44 bg-gradient-to-br from-[#1C3220] to-[#2E6B3E] flex-none overflow-hidden">
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
                        <span className="text-5xl opacity-30 select-none">🏡</span>
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
                      <span className="text-xs font-bold text-[#2E6B3E] group-hover:translate-x-0.5 transition-transform">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* ── Getting there ─────────────────────────────────────────── */}
        <div className="mt-14 bg-[#1C3220] rounded-2xl p-6 md:p-8 text-white">
          <h2 className="font-display text-xl font-bold mb-3">Getting to the Course from Formby</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xl">
            Merseyrail Northern Line — Formby to Birkdale station. One stop, under 5 minutes. Walk 
            10 minutes from Birkdale station to Royal Birkdale. No parking stress, no traffic.
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
