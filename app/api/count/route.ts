import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { cleanCountPath, isBotUserAgent } from "@/lib/page-count";

// Adds one to today's count for a page. Sent by components/PageCountBeacon.tsx.
// Stores the path, the day and the number only. No cookies, no visitor data.

function done() {
  return new Response(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  // Only the live site counts: local dev and preview deployments never write.
  if (process.env.VERCEL_ENV !== "production") return done();

  // Read to leave out bots; never stored.
  if (isBotUserAgent(req.headers.get("user-agent"))) return done();

  let body = "";
  try {
    body = await req.text();
  } catch {
    return done();
  }
  if (body.length > 600) return done();

  const path = cleanCountPath(body);
  if (!path) return done();

  try {
    await prisma.$executeRaw`
      INSERT INTO "PageCount" ("path", "day", "count")
      VALUES (${path}, CURRENT_DATE, 1)
      ON CONFLICT ("path", "day") DO UPDATE SET "count" = "PageCount"."count" + 1
    `;
  } catch {
    // A failed count must never affect the visitor.
  }
  return done();
}
