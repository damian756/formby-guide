import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/api/"],
      },
    ],
    sitemap: "https://www.formbyguide.co.uk/sitemap.xml",
    host: "https://www.formbyguide.co.uk",
  };
}
