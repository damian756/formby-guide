import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { GUIDES, getGuideUrl } from "@/lib/guides-config";
import { COLLECTIONS } from "@/lib/collections-config";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE_URL = "https://www.formbyguide.co.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/guides`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/things-to-do`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about-formby`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    ...BLOG_POSTS.map((p) => ({ url: `${BASE_URL}/blog/${p.slug}`, priority: 0.7, changeFrequency: "weekly" as const })),
    { url: `${BASE_URL}/restaurants`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/cafes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/pubs`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/nature-walks`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/beaches`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/activities`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/accommodation`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/shopping`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/the-open-2026/accommodation`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/the-open-2026/restaurants`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/claim-listing`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/advertise`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Dynamic guide pages from guides-config — covers all 8 guides including the
  // 3 existing top-level pages (resolved via getGuideUrl) and the 5 new ones
  const guidePages = GUIDES.filter((g) => g.status === "published").map((g) => ({
    url: `${BASE_URL}${getGuideUrl(g)}`,
    priority: g.seoPriority,
    changeFrequency: "monthly" as const,
  }));

  let businessPages: MetadataRoute.Sitemap = [];

  try {
    const businesses = await prisma.business.findMany({
      select: { slug: true, updatedAt: true, category: { select: { slug: true } } },
    });

    businessPages = businesses.map((b) => ({
      url: `${BASE_URL}/${b.category.slug}/${b.slug}`,
      lastModified: b.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch {
    // DB unavailable — return static pages only
  }

  // ── Collection pages ──────────────────────────────────────────────────────────
  const collectionPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/collections`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...COLLECTIONS.map((c) => ({
      url: `${BASE_URL}/collections/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: c.priority,
    })),
  ];

  return [
    ...staticPages.map(({ url, priority, changeFrequency }) => ({
      url,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...guidePages.map(({ url, priority, changeFrequency }) => ({
      url,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...collectionPages,
    ...businessPages,
  ];
}
