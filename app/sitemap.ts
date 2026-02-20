import { MetadataRoute } from "next";

const BASE_URL = "https://www.formbyguide.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/formby-beach`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/red-squirrels-formby`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/formby-pinewoods`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/things-to-do`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about-formby`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/things-to-do-formby-half-term`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/formby-beach-weather-guide`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/where-to-eat-formby-with-kids`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/red-squirrels-formby-spotting-guide`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog/formby-pinewoods-walking-guide`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/restaurants`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/cafes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/pubs`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/nature-walks`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/beaches`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/activities`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/accommodation`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/shopping`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
