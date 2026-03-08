import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat    = parseFloat(searchParams.get("lat") ?? "");
  const lng    = parseFloat(searchParams.get("lng") ?? "");
  const radius = Math.min(parseFloat(searchParams.get("radius") ?? "800"), 2000);

  if (isNaN(lat) || isNaN(lng)) {
    return NextResponse.json({ error: "lat and lng are required" }, { status: 400 });
  }

  try {
    type NearbyResult = {
      slug: string;
      name: string;
      address: string;
      categorySlug: string;
      categoryName: string;
      distance_m: number;
    };

    const results = await prisma.$queryRaw<NearbyResult[]>`
      SELECT sub.slug, sub.name, sub.address,
             sub."categorySlug", sub."categoryName",
             ROUND(sub.distance_m::numeric) AS distance_m
      FROM (
        SELECT b.slug, b.name, b.address,
               c.slug AS "categorySlug", c.name AS "categoryName",
               (6371000 * acos(LEAST(1.0,
                 cos(radians(${lat})) * cos(radians(b.lat)) *
                 cos(radians(b.lng) - radians(${lng})) +
                 sin(radians(${lat})) * sin(radians(b.lat))
               ))) AS distance_m
        FROM "Business" b
        JOIN "Category" c ON b."categoryId" = c.id
        WHERE c.slug IN ('restaurants','cafes','pubs','activities','accommodation','shopping','nature-walks','beaches')
          AND b.lat IS NOT NULL AND b.lng IS NOT NULL
      ) sub
      WHERE sub.distance_m < ${radius}
      ORDER BY sub.distance_m
      LIMIT 8
    `;

    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
        "Access-Control-Allow-Origin": "https://www.southportguide.co.uk",
      },
    });
  } catch (err) {
    console.error("FormbyGuide nearby API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
