import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { GUIDES, getGuideUrl } from "@/lib/guides-config";
import { COLLECTIONS, MIN_LISTINGS } from "@/lib/collections-config";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { CATEGORIES } from "@/lib/config";

const BASE_URL = "https://www.formbyguide.co.uk";

// Rebuilt at most hourly, so listing edits and new listings show without a deploy
// (otherwise the sitemap is fixed at build time).
export const revalidate = 3600;

// lastmod is the date the page's content last changed, never the build date.
//
// Fixed pages: the date of the last commit that changed the page's words or metadata
// (git log on the page's files). Change the date here when you change the page.
const PAGE_UPDATED: Record<string, string> = {
  "/":              "2026-11-11",
  "/guides":        "2026-11-11",
  "/things-to-do":  "2026-11-11",
  "/about-formby":  "2026-11-11",
  "/blog":          "2026-11-11",
  "/about":         "2026-11-11",
  "/claim-listing": "2026-11-11",
  "/advertise":     "2026-11-11",
  "/contact":       "2026-11-11",
  "/privacy":       "2026-11-11",
  "/terms":         "2026-11-11",
  "/disclosure":    "2026-11-11",
  "/gallery":       "2026-11-11",
  "/collections":   "2026-11-11",
};
// The words on the category pages (app/[category]/page.tsx) and the collection pages
// (lib/collections-config.ts) last changed on this date. Their listings change too, so
// each takes the later of this and its newest listing's updatedAt.
const CATEGORY_COPY_UPDATED = "2026-11-11";
const COLLECTION_COPY_UPDATED = "2026-11-11";

// "February 20, 2026" or "2026-11-11" -> Date at midnight UTC (not the server's zone,
// which moved British Summer Time dates back a day). null if it cannot be read.
function utcDate(s: string | undefined): Date | null {
  if (!s) return null;
  const d = new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? `${s}T00:00:00Z` : `${s} UTC`);
  return isNaN(d.getTime()) ? null : d;
}
const later = (...ds: (Date | null | undefined)[]) =>
  ds.reduce<Date | null>((a, d) => (d && (!a || d > a) ? d : a), null);
const lastmod = (d: Date | null) => (d ? { lastModified: d } : {});
const page = (path: string) => utcDate(PAGE_UPDATED[path]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts: the last change to the words, else the date the post shows.
  const postDate = (p: (typeof BLOG_POSTS)[number]) => utcDate(p.dateModified) ?? utcDate(p.date);
  const newestPost = later(...BLOG_POSTS.map(postDate));
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    ...lastmod(postDate(p)),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Listings: the row's own updatedAt.
  let businesses: { slug: string; updatedAt: Date; category: { slug: string } }[] = [];
  try {
    businesses = await prisma.business.findMany({
      select: { slug: true, updatedAt: true, category: { select: { slug: true } } },
    });
  } catch {
    // DB unavailable: no listings, and categories fall back to their copy date
  }
  const businessPages: MetadataRoute.Sitemap = businesses.map((b) => ({
    url: `${BASE_URL}/${b.category.slug}/${b.slug}`,
    lastModified: b.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  const newestInCategory = (slug: string) => later(...businesses.filter((b) => b.category.slug === slug).map((b) => b.updatedAt));

  const CATEGORY_PRIORITY: Record<string, { priority: number; changeFrequency: "weekly" | "monthly" }> = {
    restaurants:    { priority: 0.8, changeFrequency: "weekly" },
    cafes:          { priority: 0.8, changeFrequency: "weekly" },
    pubs:           { priority: 0.8, changeFrequency: "weekly" },
    "nature-walks": { priority: 0.8, changeFrequency: "monthly" },
    beaches:        { priority: 0.8, changeFrequency: "monthly" },
    activities:     { priority: 0.7, changeFrequency: "monthly" },
    accommodation:  { priority: 0.7, changeFrequency: "weekly" },
    shopping:       { priority: 0.7, changeFrequency: "monthly" },
  };
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    ...lastmod(later(utcDate(CATEGORY_COPY_UPDATED), newestInCategory(c.slug))),
    ...(CATEGORY_PRIORITY[c.slug] ?? { priority: 0.7, changeFrequency: "monthly" as const }),
  }));

  const staticPages: MetadataRoute.Sitemap = [
    // The home page and the blog index list the newest posts.
    { url: BASE_URL,                    ...lastmod(later(page("/"), newestPost)),     priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/guides`,        ...lastmod(page("/guides")),                  priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/things-to-do`,  ...lastmod(page("/things-to-do")),            priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about-formby`,  ...lastmod(page("/about-formby")),            priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`,          ...lastmod(later(page("/blog"), newestPost)), priority: 0.8, changeFrequency: "weekly"  },
    ...categoryPages,
    { url: `${BASE_URL}/about`,         ...lastmod(page("/about")),                   priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/claim-listing`, ...lastmod(page("/claim-listing")),           priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/advertise`,     ...lastmod(page("/advertise")),               priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`,       ...lastmod(page("/contact")),                 priority: 0.5, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/privacy`,       ...lastmod(page("/privacy")),                 priority: 0.3, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/terms`,         ...lastmod(page("/terms")),                   priority: 0.3, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/disclosure`,    ...lastmod(page("/disclosure")),              priority: 0.3, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/gallery`,       ...lastmod(page("/gallery")),                 priority: 0.5, changeFrequency: "monthly" },
  ];

  // Guide pages: dateUpdated in lib/guides-config.ts.
  const guidePages: MetadataRoute.Sitemap = GUIDES.filter((g) => g.status === "published").map((g) => ({
    url: `${BASE_URL}${getGuideUrl(g)}`,
    ...lastmod(utcDate(g.dateUpdated)),
    priority: g.seoPriority,
    changeFrequency: "monthly" as const,
  }));

  // Collection pages. A collection with fewer than MIN_LISTINGS listings is noindex
  // (app/collections/[slug]/page.tsx counts the same way), so it is left out here.
  const listed = await Promise.all(
    COLLECTIONS.map((c) =>
      prisma.business
        .aggregate({
          where: { category: { slug: { in: c.categorySlugs } }, tags: { hasEvery: c.tags } },
          _count: { _all: true },
          _max: { updatedAt: true },
        })
        .then((r) => ({ indexable: r._count._all >= MIN_LISTINGS, newest: r._max.updatedAt }))
        .catch(() => ({ indexable: true, newest: null })),
    ),
  );
  const collectionPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/collections`, ...lastmod(page("/collections")), changeFrequency: "monthly" as const, priority: 0.8 },
    ...COLLECTIONS.flatMap((c, i) =>
      listed[i].indexable
        ? [{
            url: `${BASE_URL}/collections/${c.slug}`,
            ...lastmod(later(utcDate(COLLECTION_COPY_UPDATED), listed[i].newest)),
            changeFrequency: "monthly" as const,
            priority: c.priority,
          }]
        : [],
    ),
  ];

  return [...staticPages, ...blogPages, ...guidePages, ...collectionPages, ...businessPages];
}
