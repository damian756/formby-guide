import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS, MIN_LISTINGS } from "@/lib/collections-config";
import { prisma } from "@/lib/prisma";

export const revalidate = 3600;

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Collections | Curated Lists for Formby | FormbyGuide",
  description:
    "Curated collections of Formby businesses — dog-friendly restaurants, cafés near the beach, family-friendly activities, and more. Filtered, local, and honest.",
  alternates: { canonical: `${BASE_URL}/collections` },
  openGraph: {
    title: "Collections | FormbyGuide.co.uk",
    description:
      "Curated Formby business collections — dog-friendly, family-friendly, near the beach, free to do, and more.",
    url: `${BASE_URL}/collections`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
  },
};

const COLLECTION_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Formby Collections",
  description:
    "Curated collections of Formby businesses — dog-friendly restaurants, cafés near the beach, family-friendly activities, and more.",
  url: `${BASE_URL}/collections`,
  publisher: {
    "@type": "Organization",
    name: "FormbyGuide.co.uk",
    url: BASE_URL,
  },
};

async function getCollectionCounts(): Promise<Record<string, number>> {
  try {
    const rows = await prisma.$queryRaw<{ tag: string; count: number }[]>`
      SELECT tag, COUNT(*)::int AS count
      FROM "Business", unnest(tags) AS tag
      GROUP BY tag
    `;
    return Object.fromEntries(rows.map((r) => [r.tag, r.count]));
  } catch {
    return {};
  }
}

export default async function CollectionsIndexPage() {
  const tagCounts = await getCollectionCounts();

  const liveCollections = COLLECTIONS.filter((c) => {
    const count = c.tags.reduce((sum, tag) => sum + (tagCounts[tag] ?? 0), 0);
    return count >= MIN_LISTINGS;
  });

  const comingSoon = COLLECTIONS.filter((c) => {
    const count = c.tags.reduce((sum, tag) => sum + (tagCounts[tag] ?? 0), 0);
    return count < MIN_LISTINGS;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_LD) }}
      />

      <div className="min-h-screen bg-[#F7F9F6]">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <div className="bg-[#1C3220] text-white py-14 px-4">
          <div className="container mx-auto max-w-4xl">
            <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-6">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <span className="text-white/20">›</span>
              <span className="text-white/70">Collections</span>
            </nav>
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-3">
              FormbyGuide.co.uk
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Formby Collections
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Filtered lists of Formby businesses — dog-friendly, family-friendly, near the beach, 
              and more. No aggregator rankings. Just what&apos;s actually here, with a bit of honest context.
            </p>
          </div>
          <div className="h-6 overflow-hidden mt-6">
            <svg
              viewBox="0 0 1440 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path d="M0 24L360 12C720 0 1080 0 1440 12V24H0Z" fill="#F7F9F6" />
            </svg>
          </div>
        </div>

        {/* ── Grid ───────────────────────────────────────────────────── */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveCollections.map((c) => (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h2 className="font-display font-bold text-[#1C3220] text-base leading-snug mb-2 group-hover:text-[#2E6B3E] transition-colors">
                  {c.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                  {c.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#2E6B3E] text-sm font-semibold">
                  View list <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          {comingSoon.length > 0 && (
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Coming soon
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {comingSoon.map((c) => (
                  <div
                    key={c.slug}
                    className="bg-white/60 rounded-xl border border-gray-100 border-dashed p-4 opacity-60"
                  >
                    <span className="text-2xl mb-2 block">{c.emoji}</span>
                    <p className="font-semibold text-[#1C3220] text-sm leading-snug">
                      {c.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 bg-[#1C3220] rounded-2xl p-8 text-center">
            <h2 className="font-display text-xl font-bold text-white mb-2">
              Own a business in Formby?
            </h2>
            <p className="text-white/60 text-sm mb-5 max-w-sm mx-auto">
              List your business and we&apos;ll include you in relevant collections automatically.
            </p>
            <Link
              href="/claim-listing"
              className="inline-block bg-[#C9A96E] hover:bg-[#B8903F] text-white px-7 py-3 rounded-full font-bold text-sm transition-all"
            >
              Add Your Business →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
