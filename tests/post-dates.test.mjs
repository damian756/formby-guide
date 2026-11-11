// Post dates agree everywhere: the Article JSON-LD in each post file has the date the
// post shows (BLOG_POSTS `date`) as datePublished, and the registry's `dateModified`
// (also the sitemap lastmod) as dateModified. Static reads only.
// Run: npm run test:enquiry
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_POSTS } from "../lib/blog-posts.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const iso = (date) => new Date(`${date} UTC`).toISOString().slice(0, 10);

test("every post's JSON-LD datePublished and dateModified match lib/blog-posts.ts", () => {
  for (const post of BLOG_POSTS) {
    if (post.sponsor) continue; // SponsoredArticle builds its JSON-LD from the registry itself
    const file = join(ROOT, "app/blog/_content", `${post.slug}.tsx`);
    assert.ok(existsSync(file), `${post.slug}: no post file`);
    const src = readFileSync(file, "utf8");
    const published = src.match(/datePublished: "([^"]+)"/)?.[1];
    const modified = src.match(/dateModified: "([^"]+)"/)?.[1];
    assert.equal(published, iso(post.date), `${post.slug}: datePublished`);
    assert.equal(modified, post.dateModified, `${post.slug}: dateModified`);
    if (post.dateModified) {
      assert.match(post.dateModified, /^\d{4}-\d{2}-\d{2}$/, `${post.slug}: dateModified is YYYY-MM-DD`);
      assert.ok(post.dateModified >= iso(post.date), `${post.slug}: modified before published`);
    }
  }
});
