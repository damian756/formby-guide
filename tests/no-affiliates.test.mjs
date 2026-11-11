// No affiliate links (Damian, 11 Nov 2026): no affiliate network, redirect,
// partner tag or old affiliate helper anywhere in the site's code.
// Static read of the source files. Run: npm run test:enquiry
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIRS = ["app", "lib", "components", "content", "messages"];

const PATTERNS = [
  /awin1\.com/i,
  /awclick/i,
  /tidd\.ly/i,
  /prf\.hn/i,
  /booking\.com[^"'`\s]*[?&]aid=/i,
  /[?&](aid|affid|awinmid|awinaffid|clickref|ref)=/i,
  /amazon\.[a-z.]+\/[^"'`\s]*[?&]tag=/i,
  /laterooms/i,
  /sykescottages/i,
  /cottages\.com/i,
  /goape\.co\.uk/i,
  /championstravel/i,
  /affiliate-links/i,
];

function files(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(join(ROOT, d))) {
      const p = join(d, name);
      if (statSync(join(ROOT, p)).isDirectory()) walk(p);
      else if (/\.(tsx?|mjs|js|json|md|mdx|txt)$/.test(name)) out.push(p);
    }
  };
  if (existsSync(join(ROOT, dir))) walk(dir);
  return out;
}

test("lib/affiliate-links.ts is gone", () => {
  assert.equal(existsSync(join(ROOT, "lib/affiliate-links.ts")), false);
});

test("no affiliate domain or tag pattern remains in the site's code", () => {
  const hits = [];
  for (const dir of DIRS) {
    for (const f of files(dir)) {
      const src = readFileSync(join(ROOT, f), "utf8");
      for (const re of PATTERNS) if (re.test(src)) hits.push(`${f}: ${re}`);
    }
  }
  assert.deepEqual(hits, []);
});
