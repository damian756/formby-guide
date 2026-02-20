import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone, Globe, Star, ChevronRight, Clock } from "lucide-react";
import { getCategoryBySlug, isValidCategory } from "@/lib/config";
import { prisma } from "@/lib/prisma";

type Props = { params: Promise<{ category: string; slug: string }> };

const BASE_URL = "https://www.formbyguide.co.uk";

const SHORT_CAT: Record<string, string> = {
  "nature-walks":  "Nature & Walk",
  "beaches":       "Beach",
  "restaurants":   "Restaurant",
  "cafes":         "Café",
  "pubs":          "Pub",
  "activities":    "Activity",
  "accommodation": "Place to Stay",
  "shopping":      "Shop",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!isValidCategory(category)) return { title: "Not Found" };

  const business = await prisma.business.findUnique({
    where: { slug },
    select: { name: true, shortDescription: true, description: true, address: true },
  });
  if (!business) return { title: "Not Found" };

  const cat = SHORT_CAT[category] ?? category;
  const title = `${business.name} — ${cat} in Formby`;
  const description = business.shortDescription ?? business.description?.slice(0, 155) ?? `${business.name} — ${cat} in Formby, Merseyside.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/${category}/${slug}` },
    openGraph: { title, description, url: `${BASE_URL}/${category}/${slug}`, type: "website", siteName: "FormbyGuide.co.uk" },
  };
}

export default async function BusinessPage({ params }: Props) {
  const { category, slug } = await params;
  if (!isValidCategory(category)) notFound();

  const cat = getCategoryBySlug(category)!;

  const business = await prisma.business.findUnique({
    where: { slug },
    include: { category: true },
  });
  if (!business || business.category.slug !== category) notFound();

  const related = await prisma.business.findMany({
    where: { categoryId: business.categoryId, slug: { not: slug } },
    select: { slug: true, name: true, shortDescription: true, priceRange: true },
    take: 3,
    orderBy: { featured: "desc" },
  });

  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(`${business.name} ${business.address} ${business.postcode}`)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${business.address} ${business.postcode}`)}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-14">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-5">
            <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${category}`} className="hover:text-white transition">{cat.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{business.name}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              {business.listingTier !== "free" && (
                <span className="inline-block bg-[#C9A96E] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {business.listingTier} listing
                </span>
              )}
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{business.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm text-white/60">{cat.name}</span>
                {business.priceRange && (
                  <span className="text-sm text-[#C9A96E] font-medium">{business.priceRange}</span>
                )}
                {business.rating && (
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-[#C9A96E] fill-[#C9A96E]" />
                    <span className="font-semibold">{business.rating.toFixed(1)}</span>
                    {business.reviewCount && (
                      <span className="text-white/50">({business.reviewCount.toLocaleString()})</span>
                    )}
                  </span>
                )}
              </div>
              {business.shortDescription && (
                <p className="text-white/80 text-lg leading-relaxed">{business.shortDescription}</p>
              )}
            </div>

            {/* Quick info card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 space-y-3">
              <div className="flex gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span className="text-white/80">{business.address}, {business.postcode}</span>
              </div>
              {business.phone && (
                <div className="flex gap-2 text-sm">
                  <Phone className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <a href={`tel:${business.phone}`} className="text-white/80 hover:text-white transition">{business.phone}</a>
                </div>
              )}
              {business.website && (
                <div className="flex gap-2 text-sm">
                  <Globe className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <a
                    href={business.website.startsWith("http") ? business.website : `https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A96E] hover:text-white transition"
                  >
                    Visit website →
                  </a>
                </div>
              )}

              <div className="pt-2 flex flex-col gap-2">
                {business.website && (
                  <a
                    href={business.website.startsWith("http") ? business.website : `https://${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#2E6B3E] hover:bg-[#C9A96E] text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Visit Website
                  </a>
                )}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="md:col-span-2">
            {business.description && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">About {business.name}</h2>
                <div className="text-[#1C3220]/70 leading-relaxed space-y-3">
                  {business.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Opening hours */}
            {business.openingHours && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#2E6B3E]" />Opening Hours
                </h2>
                <div className="bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(business.openingHours as Record<string, string>).map(([day, hours], i) => (
                        <tr key={day} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                          <td className="p-3 font-medium text-[#1C3220] w-32">{day}</td>
                          <td className="p-3 text-[#1C3220]/70">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Map link */}
            <section className="mb-10">
              <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">Location</h2>
              <div className="bg-[#E8EDE6] rounded-xl p-5">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#2E6B3E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C3220]">{business.name}</p>
                    <p className="text-sm text-[#1C3220]/60">{business.address}, {business.postcode}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#2E6B3E] hover:text-[#1C3220] transition-colors"
                  >
                    Get Directions →
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1C3220]/50 hover:text-[#1C3220] transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Claim listing */}
            {!business.claimed && (
              <div className="bg-[#E8EDE6] rounded-xl p-5">
                <h3 className="font-semibold text-[#1C3220] mb-1 text-sm">Is this your business?</h3>
                <p className="text-xs text-[#1C3220]/60 mb-3">Claim this listing to update details, add photos and respond to enquiries.</p>
                <Link href="/claim-listing" className="block text-center text-sm font-semibold bg-[#2E6B3E] text-white py-2 rounded-lg hover:bg-[#1C3220] transition-colors">
                  Claim Listing
                </Link>
              </div>
            )}

            {/* Related listings */}
            {related.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-[#1C3220] mb-3">More {cat.name} in Formby</h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/${category}/${r.slug}`}
                      className="group block bg-white rounded-xl p-4 border border-[#1C3220]/8 hover:border-[#2E6B3E]/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-medium text-[#1C3220] text-sm group-hover:text-[#2E6B3E] transition-colors">{r.name}</span>
                        {r.priceRange && <span className="text-xs text-[#1C3220]/40">{r.priceRange}</span>}
                      </div>
                      {r.shortDescription && (
                        <p className="text-xs text-[#1C3220]/50 mt-1 line-clamp-1">{r.shortDescription}</p>
                      )}
                    </Link>
                  ))}
                </div>
                <Link href={`/${category}`} className="text-xs text-[#2E6B3E] font-medium mt-3 block hover:text-[#1C3220] transition-colors">
                  See all {cat.name} →
                </Link>
              </div>
            )}

            {/* Back to category */}
            <Link
              href={`/${category}`}
              className="flex items-center gap-2 text-sm text-[#1C3220]/60 hover:text-[#2E6B3E] transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to {cat.name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
