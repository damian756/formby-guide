import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone, Globe, Clock, Star, ChevronRight, ShieldCheck, ShieldAlert, ShieldX, Shield } from "lucide-react";
import { getCategoryBySlug, isValidCategory } from "@/lib/config";
import { prisma } from "@/lib/prisma";

type Props = { params: Promise<{ category: string; slug: string }> };

function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const SCHEMA_TYPES: Record<string, string> = {
  restaurants:   "Restaurant",
  accommodation: "LodgingBusiness",
  pubs:          "BarOrPub",
  cafes:         "CafeOrCoffeeShop",
  shopping:      "Store",
  activities:    "LocalBusiness",
  "nature-walks":"TouristAttraction",
  beaches:       "Park",
};

const FOOD_CATS = new Set(["restaurants", "cafes", "pubs"]);

const SHORT_CAT: Record<string, string> = {
  restaurants:   "Restaurant",
  accommodation: "Place to Stay",
  pubs:          "Pub & Bar",
  cafes:         "Café",
  activities:    "Activity",
  "nature-walks":"Walk & Trail",
  beaches:       "Beach",
  shopping:      "Shop",
};

function extractArea(address: string, postcode: string): string {
  if (postcode.startsWith("L23") || address.includes("Crosby")) return "Crosby";
  if (postcode.startsWith("L38") || address.includes("Hightown")) return "Hightown";
  if (address.includes("Freshfield")) return "Freshfield";
  return "Formby";
}

function formatAddress(address: string, postcode: string): string {
  let addr = address.replace(/,?\s*(United Kingdom|UK)$/i, "").trim();
  if (postcode && !addr.includes(postcode)) addr = `${addr}, ${postcode}`;
  return addr;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!isValidCategory(category)) return { title: "Business" };
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: slug };

  try {
    const catRecord = await prisma.category.findFirst({ where: { slug: category } });
    if (!catRecord) return { title: slug };
    const b = await prisma.business.findFirst({
      where: { slug, categoryId: catRecord.id },
      select: { name: true, address: true, postcode: true, shortDescription: true, description: true, rating: true, reviewCount: true },
    });
    if (!b) return { title: slug };

    const area = extractArea(b.address, b.postcode);
    const catLabel = SHORT_CAT[category] ?? category;
    const location = area === "Formby" ? "Formby" : `${area}, Formby`;
    const title = `${b.name} — ${catLabel}, ${location}`;
    const desc = b.description
      ? b.description.replace(/\n/g, " ").trim().slice(0, 155)
      : b.shortDescription
        ? `${b.name} – ${b.shortDescription}${b.rating ? ` Rated ${b.rating}/5` : ""} in ${location}.`
        : `${b.name} – ${catLabel} in ${location}. Find address, opening hours and more on FormbyGuide.co.uk`;

    const canonicalUrl = `https://www.formbyguide.co.uk/${category}/${slug}`;

    return {
      title,
      description: desc.slice(0, 160),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title, description: desc.slice(0, 160),
        url: canonicalUrl, type: "website", siteName: "FormbyGuide.co.uk", locale: "en_GB",
        images: [{ url: "https://www.formbyguide.co.uk/og-default.png", width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
      },
      twitter: { card: "summary", title, description: desc.slice(0, 160) },
    };
  } catch {
    return { title: slug };
  }
}

export default async function BusinessPage({ params }: Props) {
  const { category, slug } = await params;
  if (!isValidCategory(category)) notFound();
  const cat = getCategoryBySlug(category)!;

  type Business = {
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number | null;
    lng: number | null;
    phone: string | null;
    website: string | null;
    description: string | null;
    shortDescription: string | null;
    listingTier: string;
    priceRange: string | null;
    openingHours: unknown;
    images: string[];
    claimed: boolean;
    rating: number | null;
    reviewCount: number | null;
    placeId: string | null;
    hygieneRating: string | null;
    hygieneRatingDate: Date | null;
    hygieneRatingShow: boolean;
    fhrsId: string | null;
    updatedAt: Date;
    secondaryCategoryIds: string[];
    _count?: { clicks: number };
  };

  let business: Business | null = null;
  let related: { slug: string; name: string; rating: number | null; reviewCount: number | null; address: string; priceRange: string | null }[] = [];

  try {
    const categoryRecord = await prisma.category.findFirst({ where: { slug: category } });
    if (categoryRecord) {
      business = await prisma.business.findFirst({
        where: {
          slug,
          OR: [
            { categoryId: categoryRecord.id },
            { secondaryCategoryIds: { has: categoryRecord.id } },
          ],
        },
        select: {
          id: true, name: true, address: true, postcode: true, lat: true, lng: true,
          phone: true, website: true, description: true, shortDescription: true,
          listingTier: true, priceRange: true, openingHours: true, images: true,
          claimed: true, rating: true, reviewCount: true, placeId: true,
          hygieneRating: true, hygieneRatingDate: true, hygieneRatingShow: true, fhrsId: true,
          updatedAt: true, secondaryCategoryIds: true,
          _count: { select: { clicks: true } },
        },
      }) as Business | null;

      if (business) {
        related = await prisma.$queryRaw<typeof related>`
          SELECT slug, name, rating, "reviewCount", address, "priceRange"
          FROM "Business"
          WHERE "categoryId" = ${categoryRecord.id}
            AND id != ${business.id}
          ORDER BY (COALESCE(rating, 0) * LOG(COALESCE("reviewCount", 0) + 1)) DESC
          LIMIT 4
        `;
      }
    }
  } catch { /* DB unavailable */ }

  if (!business) notFound();

  const isFeatured = business.listingTier === "featured" || business.listingTier === "premium";
  const area = extractArea(business.address, business.postcode);
  const formattedAddress = formatAddress(business.address, business.postcode);
  const mapsKey = process.env.GOOGLE_PLACES_API_KEY;
  const isFoodCategory = FOOD_CATS.has(category);

  // Fetch a Google Places photo if no images stored
  let placesPhoto: string | null = null;
  if (!business.images?.[0] && business.placeId && mapsKey) {
    try {
      const detailsRes = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${business.placeId}&fields=photos&key=${mapsKey}`,
        { next: { revalidate: 86400 } }
      );
      if (detailsRes.ok) {
        const details = await detailsRes.json() as { result?: { photos?: Array<{ photo_reference: string }> } };
        const ref = details.result?.photos?.[0]?.photo_reference;
        if (ref) {
          placesPhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${ref}&key=${mapsKey}`;
        }
      }
    } catch { /* silently skip */ }
  }

  // "Last updated" label
  const updatedLabel = (() => {
    const d = business.updatedAt;
    if (!d) return null;
    const diffDays = Math.floor((Date.now() - new Date(d).getTime()) / 86_400_000);
    if (diffDays < 1) return "Updated today";
    if (diffDays < 7) return `Updated ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    if (diffDays < 31) return `Updated ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`;
    return `Updated ${new Date(d).toLocaleDateString("en-GB", { month: "long", year: "numeric" })}`;
  })();

  // Map embed URL
  const mapSrc = mapsKey
    ? business.placeId
      ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=place_id:${business.placeId}&zoom=16`
      : business.lat && business.lng
        ? `https://www.google.com/maps/embed/v1/view?key=${mapsKey}&center=${business.lat},${business.lng}&zoom=16&maptype=roadmap`
        : null
    : null;

  // JSON-LD
  const schemaType = SCHEMA_TYPES[category] || "LocalBusiness";
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: business.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.replace(/,?\s*(United Kingdom|UK)$/i, "").split(",")[0].trim(),
      addressLocality: area,
      addressRegion: "Merseyside",
      postalCode: business.postcode,
      addressCountry: "GB",
    },
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(business.website ? { url: business.website.startsWith("http") ? business.website : `https://${business.website}` } : {}),
    ...(business.lat && business.lng ? {
      geo: { "@type": "GeoCoordinates", latitude: business.lat, longitude: business.lng },
    } : {}),
    ...(business.rating && business.reviewCount ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.rating.toFixed(1),
        reviewCount: business.reviewCount,
        bestRating: "5", worstRating: "1",
      },
    } : {}),
    ...(business.priceRange ? { priceRange: business.priceRange } : {}),
    ...(business.description || business.shortDescription ? {
      description: business.description || business.shortDescription,
    } : {}),
  };

  // Opening hours JSON-LD
  if (business.openingHours && typeof business.openingHours === "object") {
    const oh = business.openingHours as { weekdayText?: string[] };
    if (oh.weekdayText?.length) {
      const specs = oh.weekdayText.map((line: string) => {
        const [day, times] = line.split(": ");
        if (!times || times === "Closed") return null;
        if (times === "Open 24 hours") {
          return { "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${day}`, opens: "00:00", closes: "23:59" };
        }
        const [open, close] = times.split(" – ").map((t: string) => {
          const [time, ampm] = t.split(" ");
          const [h, m] = time.split(":").map(Number);
          const h24 = ampm === "PM" && h !== 12 ? h + 12 : (ampm === "AM" && h === 12 ? 0 : h);
          return `${String(h24).padStart(2, "0")}:${String(m || 0).padStart(2, "0")}`;
        });
        return { "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${day}`, opens: open, closes: close };
      }).filter(Boolean);
      if (specs.length) jsonLd.openingHoursSpecification = specs;
    }
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://www.formbyguide.co.uk" },
      { "@type": "ListItem", position: 2, name: cat.name,    item: `https://www.formbyguide.co.uk/${category}` },
      { "@type": "ListItem", position: 3, name: business.name, item: `https://www.formbyguide.co.uk/${category}/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-[#F7F9F6]">
        <div className="container mx-auto px-4 py-8 max-w-5xl">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${category}`} className="hover:text-[#2E6B3E] transition-colors">{cat.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">{business.name}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* ── Main column ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Hero card */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                <div className="h-52 bg-gradient-to-br from-[#1C3220] to-[#2E6B3E] flex items-center justify-center relative overflow-hidden">
                  {business.images?.[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={business.images[0]} alt={business.name} className="w-full h-full object-cover" />
                  ) : placesPhoto ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={placesPhoto} alt={business.name} className="w-full h-full object-cover" />
                      <span className="absolute bottom-2 right-2 text-white/50 text-[10px]">Photo © Google</span>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1C3220] to-[#2E6B3E]" />
                      <div className="absolute top-4 right-4 w-32 h-32 bg-[#C9A96E]/10 rounded-full blur-2xl" />
                      <span className="relative text-6xl select-none opacity-30">📍</span>
                    </>
                  )}
                </div>

                <div className="p-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {isFeatured && (
                      <span className="bg-[#C9A96E]/10 text-[#C9A96E] text-xs font-bold px-3 py-1 rounded-full border border-[#C9A96E]/20">✦ FEATURED</span>
                    )}
                    <Link href={`/${category}`} className="bg-[#F7F9F6] text-[#1C3220] text-xs font-medium px-3 py-1 rounded-full border border-gray-200 hover:border-gray-400 transition-colors">
                      {cat.name}
                    </Link>
                    {business.priceRange && (
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">{business.priceRange}</span>
                    )}
                    {isFoodCategory && business.hygieneRating && business.hygieneRatingShow && (
                      <HygieneBadgeInline
                        rating={business.hygieneRating}
                        show={business.hygieneRatingShow}
                        fhrsId={business.fhrsId}
                      />
                    )}
                    {updatedLabel && <span className="text-gray-400 text-xs">{updatedLabel}</span>}
                  </div>

                  <h1 className="font-display text-3xl font-bold text-[#1C3220] mb-3">{business.name}</h1>

                  {/* Google rating */}
                  {business.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      {business.placeId ? (
                        <a
                          href={`https://www.google.com/maps/place/?q=place_id:${business.placeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold px-3 py-1.5 rounded-full border border-amber-200 text-sm transition-colors group"
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {business.rating.toFixed(1)}
                          {business.reviewCount && (
                            <span className="text-amber-600 font-normal ml-0.5">({business.reviewCount.toLocaleString()} reviews)</span>
                          )}
                          <span className="text-amber-400 text-xs">↗</span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 font-semibold px-3 py-1.5 rounded-full border border-amber-200 text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {business.rating.toFixed(1)}
                          {business.reviewCount && <span className="text-amber-600 font-normal ml-0.5">({business.reviewCount.toLocaleString()} reviews)</span>}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">Google rating</span>
                    </div>
                  )}

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    {business.website && (
                      <a
                        href={business.website.startsWith("http") ? business.website : `https://${business.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-full hover:bg-[#1C3220] transition font-semibold text-sm"
                      >
                        <Globe className="w-4 h-4" /> Visit Website
                      </a>
                    )}
                    {business.phone && (
                      <a
                        href={`tel:${business.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 bg-[#C9A96E]/10 text-[#1C3220] border border-[#C9A96E]/30 px-5 py-2.5 rounded-full hover:bg-[#C9A96E]/20 transition font-semibold text-sm"
                      >
                        <Phone className="w-4 h-4 text-[#C9A96E]" /> {business.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              {(business.description || business.shortDescription) && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">About {business.name}</h2>
                  <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
                    {(business.description || business.shortDescription)!
                      .split("\n\n")
                      .filter(Boolean)
                      .map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </div>
              )}

              {/* Address + Opening Hours */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#2E6B3E]" /> Address
                    </h2>
                    <address className="text-gray-700 not-italic leading-relaxed text-sm">
                      {formattedAddress}
                    </address>
                    {business.lat && business.lng && (
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-[#2E6B3E] text-sm hover:underline font-medium"
                      >
                        Get directions →
                      </a>
                    )}
                  </div>

                  {business.openingHours != null && typeof business.openingHours === "object" && (
                    <div>
                      <h2 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#2E6B3E]" /> Opening Hours
                      </h2>
                      <OpeningHoursDisplay data={business.openingHours} />
                    </div>
                  )}
                </div>
              </div>

              {/* Google Maps embed */}
              {mapSrc && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-6 pt-5 pb-2">
                    <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#2E6B3E]" /> Location
                    </h2>
                  </div>
                  <iframe
                    loading="lazy"
                    className="w-full h-80"
                    src={mapSrc}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing location of ${business.name}`}
                  />
                </div>
              )}

              {/* Food Hygiene card */}
              {isFoodCategory && business.hygieneRating && (
                <HygieneCard
                  name={business.name}
                  rating={business.hygieneRating}
                  date={business.hygieneRatingDate}
                  claimed={business.claimed}
                  show={business.hygieneRatingShow}
                  fhrsId={business.fhrsId}
                />
              )}

              {/* Related listings */}
              {related.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="font-semibold text-gray-900 mb-4">More {cat.name} in Formby</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/${category}/${r.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition group border border-gray-100"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 group-hover:text-[#2E6B3E] transition text-sm truncate">{r.name}</p>
                          <p className="text-xs text-gray-500 truncate mt-0.5">
                            {r.address.replace(/,?\s*(United Kingdom|UK)$/i, "").split(",").slice(-2).join(",").trim()}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          {r.rating && (
                            <span className="flex items-center gap-0.5 text-xs text-amber-600 font-medium">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              {r.rating.toFixed(1)}
                            </span>
                          )}
                          {r.priceRange && <span className="block text-xs text-gray-400">{r.priceRange}</span>}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href={`/${category}`} className="block text-center text-[#2E6B3E] text-sm mt-4 hover:underline font-bold">
                    View all {cat.name} →
                  </Link>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-4">

              {/* Quick info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
                <h3 className="font-semibold text-gray-900">Quick Info</h3>

                {business.phone && (
                  <InfoRow icon={<Phone className="w-4 h-4 text-[#2E6B3E]" />} label="Phone">
                    <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="text-gray-800 text-sm hover:text-[#2E6B3E]">{business.phone}</a>
                  </InfoRow>
                )}

                {business.website && (
                  <InfoRow icon={<Globe className="w-4 h-4 text-[#2E6B3E]" />} label="Website">
                    <a
                      href={business.website.startsWith("http") ? business.website : `https://${business.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E6B3E] text-sm hover:underline break-all"
                    >
                      {business.website.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
                    </a>
                  </InfoRow>
                )}

                <InfoRow icon={<MapPin className="w-4 h-4 text-[#2E6B3E]" />} label="Location">
                  <span className="text-gray-800 text-sm">{area}{area !== "Formby" ? ", Formby" : ""}</span>
                </InfoRow>

                {business.priceRange && (
                  <InfoRow icon={<span className="w-4 h-4 text-[#2E6B3E] text-sm font-bold leading-none mt-0.5">£</span>} label="Price range">
                    <span className="text-gray-800 text-sm">{business.priceRange}</span>
                  </InfoRow>
                )}

                {business.rating && (
                  <InfoRow icon={<Star className="w-4 h-4 text-amber-400 fill-amber-400" />} label="Google rating">
                    {business.placeId ? (
                      <a
                        href={`https://www.google.com/maps/place/?q=place_id:${business.placeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 text-sm font-semibold hover:underline"
                      >
                        {business.rating.toFixed(1)}/5
                        {business.reviewCount && <span className="font-normal text-gray-500"> ({business.reviewCount.toLocaleString()} reviews) ↗</span>}
                      </a>
                    ) : (
                      <span className="text-gray-800 text-sm">
                        {business.rating.toFixed(1)}/5
                        {business.reviewCount && <span className="text-gray-500"> ({business.reviewCount.toLocaleString()} reviews)</span>}
                      </span>
                    )}
                  </InfoRow>
                )}
              </div>

              {/* Hygiene sidebar */}
              {isFoodCategory && business.hygieneRating && (
                <HygieneSidebar
                  rating={business.hygieneRating}
                  date={business.hygieneRatingDate}
                  claimed={business.claimed}
                  show={business.hygieneRatingShow}
                  fhrsId={business.fhrsId}
                />
              )}

              {/* Claim listing */}
              {!business.claimed && (
                <div className="bg-[#1C3220] rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/10 rounded-full -translate-y-8 translate-x-8 blur-2xl" />
                  <div className="relative">
                    <p className="font-display font-bold text-white mb-1">Is this your business?</p>
                    <p className="text-white/60 text-sm mb-4">Claim your free listing to update details, add photos and attract more customers.</p>
                    <Link
                      href="/claim-listing"
                      className="block text-center bg-[#C9A96E] text-white px-4 py-2.5 rounded-full font-bold text-sm hover:bg-[#E8C87A] transition"
                    >
                      Claim Free Listing →
                    </Link>
                  </div>
                </div>
              )}

              {/* Upgrade */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2">Upgrade this listing</p>
                <p className="text-gray-600 text-sm mb-3">Get more visibility with a featured listing from £29/month</p>
                <Link href="/advertise" className="text-[#2E6B3E] text-sm font-bold hover:underline">View pricing →</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

// ─── Helper components ────────────────────────────────────────────────────

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}

// ─── Opening Hours ────────────────────────────────────────────────────────

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function OpeningHoursDisplay({ data }: { data: unknown }) {
  if (!data || typeof data !== "object") return null;
  const hours = data as { weekdayText?: string[]; periods?: Array<{ open: { day: number; time: string }; close?: { day: number; time: string } }> };

  if (hours.weekdayText?.length) {
    const today = new Date().getDay();
    // Google returns Mon-Sun order; reorder to Mon-Sun (Mon = index 0)
    const reordered = [...hours.weekdayText.slice(1), hours.weekdayText[0]];
    const todayIndex = today === 0 ? 6 : today - 1;
    return (
      <ul className="space-y-0.5">
        {reordered.map((line, i) => {
          const colonIdx = line.indexOf(": ");
          const day = colonIdx > 0 ? line.slice(0, colonIdx) : line;
          const time = colonIdx > 0 ? line.slice(colonIdx + 2) : "—";
          const isToday = i === todayIndex;
          return (
            <li key={day + i} className={cn("flex justify-between text-sm py-1 px-2 rounded", isToday ? "bg-[#E8EDE6] font-semibold text-[#1C3220]" : "text-gray-600")}>
              <span className="w-24 flex-shrink-0">{day}</span>
              <span className="text-right text-xs leading-relaxed">{time}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  if (hours.periods?.length) {
    const fmt = (t: string) => {
      const h = parseInt(t.slice(0, 2)), m = t.slice(2);
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
      return `${h12}:${m} ${ampm}`;
    };
    return (
      <ul className="space-y-1">
        {hours.periods.map((p, i) => (
          <li key={i} className="flex justify-between text-sm text-gray-600">
            <span>{DAY_NAMES[p.open.day]}</span>
            <span>{fmt(p.open.time)}{p.close ? ` – ${fmt(p.close.time)}` : " (24h)"}</span>
          </li>
        ))}
      </ul>
    );
  }

  return <p className="text-sm text-gray-400">Hours not available</p>;
}

// ─── Food Hygiene ─────────────────────────────────────────────────────────

const HYGIENE_CONFIG: Record<string, { label: string; color: string; bg: string; border: string; icon: React.ReactNode; description: string }> = {
  "5": { label: "5 – Very Good", color: "text-green-700", bg: "bg-green-50", border: "border-green-300", icon: <ShieldCheck className="w-5 h-5 text-green-600" />, description: "Top food hygiene standards" },
  "4": { label: "4 – Good", color: "text-green-600", bg: "bg-green-50", border: "border-green-200", icon: <ShieldCheck className="w-5 h-5 text-green-500" />, description: "Good food hygiene standards" },
  "3": { label: "3 – Generally Satisfactory", color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-300", icon: <Shield className="w-5 h-5 text-yellow-500" />, description: "Generally satisfactory hygiene" },
  "2": { label: "2 – Improvement Necessary", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-300", icon: <ShieldAlert className="w-5 h-5 text-orange-500" />, description: "Improvement necessary" },
  "1": { label: "1 – Major Improvement Required", color: "text-red-700", bg: "bg-red-50", border: "border-red-300", icon: <ShieldAlert className="w-5 h-5 text-red-500" />, description: "Major improvement required" },
  "0": { label: "0 – Urgent Improvement Required", color: "text-red-900", bg: "bg-red-100", border: "border-red-400", icon: <ShieldX className="w-5 h-5 text-red-700" />, description: "Urgent improvement required" },
  "AwaitingInspection": { label: "Awaiting Inspection", color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-300", icon: <Shield className="w-5 h-5 text-gray-400" />, description: "Not yet inspected" },
  "Exempt": { label: "Exempt", color: "text-gray-500", bg: "bg-gray-50", border: "border-gray-200", icon: <Shield className="w-5 h-5 text-gray-400" />, description: "Not required to be rated" },
};

function fsaUrl(fhrsId: string | null): string {
  return fhrsId ? `https://ratings.food.gov.uk/business/en-GB/${fhrsId}` : "https://ratings.food.gov.uk/";
}

function HygieneBadgeInline({ rating, show, fhrsId }: { rating: string | null; show: boolean; fhrsId: string | null }) {
  if (!rating || !show) return null;
  const cfg = HYGIENE_CONFIG[rating];
  if (!cfg) return null;
  return (
    <a
      href={fsaUrl(fhrsId)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-medium hover:opacity-80 transition-opacity", cfg.bg, cfg.color, cfg.border)}
    >
      {rating === "5" || rating === "4" ? <ShieldCheck className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
      FSA {cfg.label} ↗
    </a>
  );
}

function HygieneCard({ name, rating, date, claimed, show, fhrsId }: { name: string; rating: string | null; date: Date | null; claimed: boolean; show: boolean; fhrsId: string | null }) {
  if (claimed && !show) return null;
  if (!rating) return null;
  const cfg = HYGIENE_CONFIG[rating];
  if (!cfg) return null;
  const numRating = parseInt(rating);

  return (
    <div className={cn("bg-white rounded-xl shadow-sm border p-6", cfg.border)}>
      <div className="flex items-start justify-between mb-4">
        <h2 className="font-semibold text-gray-900">Food Hygiene Rating</h2>
        <a href={fsaUrl(fhrsId)} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs hover:text-[#2E6B3E] hover:underline">
          {fhrsId ? "View on food.gov.uk ↗" : "food.gov.uk ↗"}
        </a>
      </div>
      <div className="flex items-center gap-5">
        <div className={cn("w-20 h-20 rounded-xl flex flex-col items-center justify-center border-2 flex-shrink-0", cfg.bg, cfg.border)}>
          <span className={cn("text-3xl font-black leading-none", cfg.color)}>
            {rating === "AwaitingInspection" || rating === "Exempt" ? "–" : rating}
          </span>
          {!isNaN(numRating) && <span className={cn("text-xs font-medium mt-0.5", cfg.color)}>/ 5</span>}
        </div>
        <div className="flex-1">
          <p className={cn("text-xl font-bold", cfg.color)}>{cfg.label}</p>
          <p className="text-gray-500 text-sm mt-1">{cfg.description}, as rated by the Food Standards Agency</p>
          {date && <p className="text-gray-400 text-xs mt-2">Last inspected: {new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>}
          {!isNaN(numRating) && (
            <div className="flex gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={cn("h-2 flex-1 rounded-full",
                  n <= numRating ? numRating >= 4 ? "bg-green-400" : numRating === 3 ? "bg-yellow-400" : "bg-red-400" : "bg-gray-100"
                )} />
              ))}
            </div>
          )}
        </div>
      </div>
      {!claimed && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-gray-400 text-xs">Own <strong className="text-gray-600">{name}</strong>? Claim your listing to manage how this rating is displayed.</p>
          <Link href="/claim-listing" className="flex-shrink-0 ml-4 text-[#2E6B3E] text-xs font-semibold hover:underline">Claim →</Link>
        </div>
      )}
    </div>
  );
}

function HygieneSidebar({ rating, date, claimed, show, fhrsId }: { rating: string | null; date: Date | null; claimed: boolean; show: boolean; fhrsId: string | null }) {
  if (claimed && !show) return null;
  if (!rating) return null;
  const cfg = HYGIENE_CONFIG[rating];
  if (!cfg) return null;
  const numRating = parseInt(rating);

  return (
    <div className={cn("rounded-xl border p-4", cfg.bg, cfg.border)}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          {cfg.icon}
          <span className={cn("font-semibold text-sm", cfg.color)}>Food Hygiene</span>
        </div>
        <a href={fsaUrl(fhrsId)} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs hover:underline">FSA ↗</a>
      </div>
      <p className={cn("font-bold text-base", cfg.color)}>{cfg.label}</p>
      {date && <p className="text-gray-500 text-xs mt-1">Inspected {new Date(date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</p>}
      {!isNaN(numRating) && (
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className={cn("h-2 flex-1 rounded-full",
              n <= numRating ? numRating >= 4 ? "bg-green-400" : numRating === 3 ? "bg-yellow-400" : "bg-red-400" : "bg-white/60 border border-white"
            )} />
          ))}
        </div>
      )}
      {!claimed && (
        <Link href="/claim-listing" className={cn("block text-center text-xs font-semibold px-3 py-1.5 rounded-lg mt-3 transition",
          numRating >= 4 ? "bg-green-600 text-white hover:bg-green-700"
          : numRating === 3 ? "bg-yellow-500 text-white hover:bg-yellow-600"
          : "bg-red-600 text-white hover:bg-red-700"
        )}>
          Claim to manage →
        </Link>
      )}
    </div>
  );
}
