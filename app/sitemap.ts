import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { GUIDES, getGuideUrl } from "@/lib/guides-config";
import { COLLECTIONS } from "@/lib/collections-config";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE_URL = "https://www.formbyguide.co.uk";

// Parse "Month DD, YYYY" → Date
function parseBlogDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date("2026-02-01") : d;
}

// Stable reference dates — update when relevant pages change meaningfully
const D = {
  today:  new Date("2026-03-02"),
  feb22:  new Date("2026-02-22"),
  feb15:  new Date("2026-02-15"),
  feb01:  new Date("2026-02-01"),
  jan01:  new Date("2026-01-01"),
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                      lastModified: D.today, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/guides`,                          lastModified: D.feb22, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/things-to-do`,                    lastModified: D.feb22, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about-formby`,                    lastModified: D.feb15, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`,                            lastModified: D.today, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/restaurants`,                     lastModified: D.feb15, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/cafes`,                           lastModified: D.feb15, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/pubs`,                            lastModified: D.feb15, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/nature-walks`,                    lastModified: D.feb15, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/beaches`,                         lastModified: D.feb15, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/activities`,                      lastModified: D.feb15, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/accommodation`,                   lastModified: D.feb15, priority: 0.7, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/shopping`,                        lastModified: D.feb15, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/the-open-2026/accommodation`,     lastModified: D.feb22, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/the-open-2026/restaurants`,       lastModified: D.feb22, priority: 0.8, changeFrequency: "weekly"  },
    { url: `${BASE_URL}/about`,                           lastModified: D.feb01, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/claim-listing`,                   lastModified: D.feb01, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/advertise`,                       lastModified: D.feb01, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`,                         lastModified: D.feb01, priority: 0.5, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/privacy`,                         lastModified: D.jan01, priority: 0.3, changeFrequency: "yearly"  },
    { url: `${BASE_URL}/terms`,                           lastModified: D.jan01, priority: 0.3, changeFrequency: "yearly"  },
  ];

  // Blog posts — use actual post dates
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: parseBlogDate(p.date),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // Guide pages from guides-config
  const guidePages: MetadataRoute.Sitemap = GUIDES.filter((g) => g.status === "published").map((g) => ({
    url: `${BASE_URL}${getGuideUrl(g)}`,
    lastModified: new Date(g.dateUpdated),
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

  // Collection pages
  const collectionPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/collections`, lastModified: D.feb15, changeFrequency: "monthly" as const, priority: 0.8 },
    ...COLLECTIONS.map((c) => ({
      url: `${BASE_URL}/collections/${c.slug}`,
      lastModified: D.feb15,
      changeFrequency: "monthly" as const,
      priority: c.priority,
    })),
  ];

  return [...staticPages, ...blogPages, ...guidePages, ...collectionPages, ...businessPages];
}
