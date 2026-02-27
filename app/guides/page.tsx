import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { GUIDES, GUIDE_CATEGORIES, getGuideUrl, type GuideCategory } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Guides — Practical Local Guides for Visitors | FormbyGuide",
  description:
    "Local guides to Formby — written by someone who actually lives here. Formby Beach, red squirrels, parking, dog-friendly spots, restaurants, and more.",
  alternates: { canonical: `${BASE_URL}/guides` },
  openGraph: {
    title: "Formby Guides — Practical Local Guides for Visitors",
    description:
      "Local guides to Formby — written by someone who actually lives here. Beach, squirrels, parking, restaurants, dog walks, and more.",
    url: `${BASE_URL}/guides`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Formby Guides",
  description:
    "Practical local guides to Formby, Merseyside — written by a local. Formby Beach, red squirrels, parking, dog-friendly walks, restaurants, and more.",
  url: `${BASE_URL}/guides`,
  publisher: {
    "@type": "Organization",
    name: "FormbyGuide.co.uk",
    url: BASE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    ],
  },
};

const publishedGuides = GUIDES.filter((g) => g.status === "published");

const guidesByCategory = (Object.keys(GUIDE_CATEGORIES) as GuideCategory[]).reduce(
  (acc, cat) => {
    acc[cat] = publishedGuides.filter((g) => g.category === cat);
    return acc;
  },
  {} as Record<GuideCategory, typeof publishedGuides>
);

const categoryOrder: GuideCategory[] = ["nature-walks", "practical", "areas", "food-drink", "events"];

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#1C3220] text-white">
        <div className="container mx-auto px-4 max-w-7xl py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#C9A96E]" />
              <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest">Formby Guides</p>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Local guides to Formby — written by someone who lives here.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Parking, beach rules, red squirrels, dog walks, restaurants — practical answers, not tourism brochure copy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <main className="bg-[#F7FAF7]">
        <div className="container mx-auto px-4 max-w-7xl py-16">

          {categoryOrder.map((cat) => {
            const guides = guidesByCategory[cat];
            if (!guides || guides.length === 0) return null;
            const { label, description } = GUIDE_CATEGORIES[cat];

            return (
              <section key={cat} className="mb-16">
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-[#C9A96E] font-bold mb-1">{label}</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1C3220] mb-2">{label}</h2>
                  <p className="text-gray-600 text-base">{description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={getGuideUrl(guide)}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#2E6B3E]/30 transition-all group overflow-hidden"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={guide.heroImage}
                          alt={guide.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-wider mb-1">
                            {GUIDE_CATEGORIES[guide.category].label}
                          </p>
                          <h3 className="font-display font-bold text-white text-lg leading-snug group-hover:text-[#C9A96E] transition-colors">
                            {guide.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-1.5 text-[#2E6B3E] text-sm font-semibold group-hover:gap-2.5 transition-all">
                          Read guide <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}

        </div>
      </main>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1C3220] py-14">
        <div className="container mx-auto px-4 max-w-7xl text-center text-white">
          <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-3">Formby Business?</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Get Your Business Into These Guides
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            FormbyGuide.co.uk reaches visitors actively planning a trip to Formby.
            List your business and appear in relevant guides automatically.
          </p>
          <Link
            href="/claim-listing"
            className="inline-block bg-[#C9A96E] hover:bg-[#E0C08A] text-[#1C3220] px-8 py-3.5 rounded-full font-bold transition-colors"
          >
            List Your Business
          </Link>
        </div>
      </section>
    </>
  );
}
