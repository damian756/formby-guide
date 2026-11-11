// Standing rule (Damian, 11 Nov 2026): no links to the organisations listed in
// lib/blocked-domains.ts. Naming them is fine; linking to them is not.
// Static read: the domain list is parsed from lib/blocked-domains.ts, then every text
// file under app/, lib/, components/ and public/ is searched for those domains, and
// the listing page is checked for the render guard on stored websites.
// Run: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const LIST_FILE = join("lib", "blocked-domains.ts");
const LISTING_PAGE = join("app", "[category]", "[slug]", "page.tsx");
const DIRS = ["app", "lib", "components", "public"];
const TEXT = /\.(tsx?|jsx?|mjs|cjs|json|webmanifest|txt|xml|md|mdx|html?|svg|css)$/i;

const read = (p) => readFileSync(join(ROOT, p), "utf8");

function files(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(join(ROOT, d))) {
      const p = join(d, name);
      if (statSync(join(ROOT, p)).isDirectory()) walk(p);
      else if (TEXT.test(name)) out.push(p);
    }
  };
  if (existsSync(join(ROOT, dir))) walk(dir);
  return out;
}

function blockedDomains() {
  const src = read(LIST_FILE);
  const m = src.match(/export const BLOCKED_DOMAINS = \[([\s\S]*?)\]/);
  assert.ok(m, "lib/blocked-domains.ts exports BLOCKED_DOMAINS");
  return [...m[1].matchAll(/"([a-z0-9.-]+\.[a-z]{2,})"/g)].map((x) => x[1]);
}

// A domain counts when it stands as a host: not preceded by a letter, digit or hyphen
// (so "notsefton.gov.uk" does not match) and not followed by more host characters.
const hostRe = (d) => new RegExp(`(?<![a-z0-9-])(?:[a-z0-9-]+\\.)*${d.replace(/\./g, "\\.")}(?![a-z0-9-]|\\.[a-z])`, "i");

test("the blocked list covers the six organisations' domains", () => {
  const list = blockedDomains();
  for (const d of ["sefton.gov.uk", "visitsouthport.com", "yoursouthport.com", "southportbid.com", "southportmarket.com", "southportmarket.co.uk", "mhalg.com", "thegrand.co.uk", "boldhotel.com"]) {
    assert.ok(list.includes(d), `${d} is on the list`);
  }
  assert.equal(new Set(list).size, list.length, "no duplicates");
});

test("the host pattern matches subdomains and URLs, not lookalikes", () => {
  const re = hostRe("sefton.gov.uk");
  for (const yes of ["https://www.sefton.gov.uk/parking", "http://sefton.gov.uk", "SEFTON.GOV.UK", 'href="//beta.sefton.gov.uk"']) assert.match(yes, re, yes);
  for (const no of ["notsefton.gov.uk", "sefton.gov.uk.example.com", "seftoncoast.network"]) assert.doesNotMatch(no, re, no);
});

test("no link or URL to a blocked domain in app/, lib/, components/ or public/", () => {
  const list = blockedDomains();
  const all = DIRS.flatMap(files).filter((f) => f !== LIST_FILE);
  assert.ok(all.length > 100, "expected to scan the site's files");
  const hits = [];
  for (const f of all) {
    const src = read(f);
    for (const d of list) if (hostRe(d).test(src)) hits.push(`${f.split(sep).join("/")}: ${d}`);
  }
  assert.deepEqual(hits, [], "remove the link and keep the words");
});

test("the listing page never renders a stored website on the blocked list", () => {
  const page = read(LISTING_PAGE);
  assert.match(page, /import \{ isBlockedUrl \} from "@\/lib\/blocked-domains";/);
  assert.match(page, /const website = business\.website && !isBlockedUrl\(business\.website\) \? business\.website : null;/);
  // After the guard, only the guarded value is used.
  const after = page.slice(page.indexOf("const website = business.website"));
  assert.equal((after.match(/business\.website/g) || []).length, 3, "business.website only appears in the guard line");
  assert.doesNotMatch(page, /href=\{business\.website|url: business\.website/);
  assert.match(page, /url: website\b/, "JSON-LD url uses the guarded website");
});
