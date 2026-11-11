// /api/count counts only pages the site has, only same-origin, only on the
// live site, and stores the path, the day and a number. Pure helpers from
// lib/page-count.ts plus static reads: no route is called, nothing is written.
// Run: npm run test:enquiry
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { STATIC_PATHS, cleanCountPath, isBotUserAgent, isCrossSiteRequest, isKnownPath } from "../lib/page-count.ts";
import { BLOG_POSTS } from "../lib/blog-posts.ts";
import { CATEGORIES } from "../lib/config.ts";
import { COLLECTIONS } from "../lib/collections-config.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), "utf8");

const KNOWN = {
  blogSlugs: new Set(BLOG_POSTS.map((p) => p.slug)),
  categorySlugs: new Set(CATEGORIES.map((c) => c.slug)),
  collectionSlugs: new Set(COLLECTIONS.map((c) => c.slug)),
};

/** Every app/.../page.tsx with no [segment] in its folder path, as a URL path. */
function staticPagesOnDisk() {
  const out = [];
  const go = (dir) => {
    for (const name of readdirSync(join(ROOT, dir))) {
      const p = join(dir, name);
      if (statSync(join(ROOT, p)).isDirectory()) {
        if (name.startsWith("[") || name.startsWith("_") || name.startsWith("(") || name === "api") continue;
        go(p);
      } else if (name === "page.tsx") {
        const rel = dir.split(/[\\/]/).slice(1).join("/");
        out.push(rel ? `/${rel}` : "/");
      }
    }
  };
  go("app");
  return out.sort();
}

test("STATIC_PATHS lists exactly the site's fixed pages", () => {
  assert.deepEqual([...STATIC_PATHS].sort(), staticPagesOnDisk());
});

test("known pages are counted", () => {
  for (const p of ["/", "/about", "/blog", "/guides/parking-formby-beach", "/the-open-2026/restaurants"]) {
    assert.equal(isKnownPath(p, KNOWN), true, p);
  }
  assert.equal(isKnownPath(`/blog/${BLOG_POSTS[0].slug}`, KNOWN), true, "a blog post");
  assert.equal(isKnownPath("/restaurants", KNOWN), true, "a category");
  assert.equal(isKnownPath("/restaurants/some-place-formby", KNOWN), true, "a listing under a real category");
  assert.equal(isKnownPath(`/collections/${COLLECTIONS[0].slug}`, KNOWN), true, "a collection");
});

test("made-up paths are not counted", () => {
  for (const p of [
    "/made-up-page",
    "/blog/not-a-real-post",
    "/collections/not-a-collection",
    "/not-a-category/some-place",
    "/restaurants/Some-Place",
    "/restaurants/a/b",
    "/guides/not-a-guide",
    "/the-open-2026/not-a-page",
    "/restaurants/" + "a".repeat(151),
  ]) {
    assert.equal(isKnownPath(p, KNOWN), false, p);
  }
});

test("cleanCountPath keeps the path only and refuses non-site paths", () => {
  assert.equal(cleanCountPath("/about?x=1#y"), "/about");
  for (const bad of ["about", "//evil.example", "/api/count", "/admin", "/_next/static/x", "/" + "a".repeat(300), "/a b"]) {
    assert.equal(cleanCountPath(bad), null, bad);
  }
});

test("requests from another site are refused; same-origin and no header are allowed", () => {
  assert.equal(isCrossSiteRequest("same-origin"), false);
  assert.equal(isCrossSiteRequest(null), false);
  assert.equal(isCrossSiteRequest(undefined), false);
  for (const v of ["cross-site", "same-site", "none", ""]) assert.equal(isCrossSiteRequest(v), true, v);
});

test("bots and empty user agents are left out", () => {
  assert.equal(isBotUserAgent("Mozilla/5.0 (compatible; Googlebot/2.1)"), true);
  assert.equal(isBotUserAgent(""), true);
  assert.equal(isBotUserAgent(null), true);
  assert.equal(isBotUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36"), false);
});

test("the count route: production only, same-origin, bots out, known paths, path/day/count only", () => {
  const src = read("app/api/count/route.ts");
  assert.match(src, /if \(process\.env\.VERCEL_ENV !== "production"\) return done\(\);/);
  assert.match(src, /if \(isCrossSiteRequest\(req\.headers\.get\("sec-fetch-site"\)\)\) return done\(\);/);
  assert.match(src, /if \(isBotUserAgent\(req\.headers\.get\("user-agent"\)\)\) return done\(\);/);
  assert.match(src, /if \(!path \|\| !isKnownPath\(path, KNOWN\)\) return done\(\);/);
  assert.match(src, /INSERT INTO "PageCount" \("path", "day", "count"\)\s+VALUES \(\$\{path\}, CURRENT_DATE, 1\)/);
  assert.equal((src.match(/INSERT INTO/g) ?? []).length, 1, "one write only");
  assert.doesNotMatch(src, /x-forwarded-for|x-real-ip|referer|cookies\(|\.ip\b/i, "nothing else about the visitor is read");
  assert.equal((src.match(/user-agent/g) ?? []).length, 1, "the user agent is read once, to filter");
});
