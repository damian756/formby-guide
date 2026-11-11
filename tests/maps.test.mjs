// Maps (Damian, 11 Nov 2026): listing maps are drawn with Leaflet on OpenStreetMap
// tiles. A Google Maps embed may only be built in the click-to-load component, and
// that component must not render an iframe before the visitor clicks.
// Static read of the source files. Run: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

// Everything that can end up on the site. docs/, tests/ and scripts/ never render.
const DIRS = ["app", "components", "lib", "content", "messages", "public"];
const ROOT_FILES = ["next.config.ts", "vercel.json"];

const CLICK_TO_LOAD = join("components", "GoogleMapClickToLoad.tsx");

const EMBED_PATTERNS = [
  /google\.[a-z.]+\/maps\/embed/i,
  /maps\.google\.[a-z.]+\/maps\?[^"'`\s]*output=embed/i,
  /[?&]output=embed/i,
];

function files(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(join(ROOT, d))) {
      const p = join(d, name);
      if (statSync(join(ROOT, p)).isDirectory()) walk(p);
      else if (/\.(tsx?|jsx?|mjs|cjs|json|md|mdx|txt|html?|xml|svg)$/i.test(name)) out.push(p);
    }
  };
  if (existsSync(join(ROOT, dir))) walk(dir);
  return out;
}

const read = (p) => readFileSync(join(ROOT, p), "utf8");

test("no Google Maps embed URL outside the click-to-load component", () => {
  const all = [...DIRS.flatMap(files), ...ROOT_FILES.filter((f) => existsSync(join(ROOT, f)))];
  assert.ok(all.length > 50, "expected to scan the site's source files");
  const hits = [];
  for (const f of all) {
    if (f === CLICK_TO_LOAD) continue;
    const src = read(f);
    for (const re of EMBED_PATTERNS) if (re.test(src)) hits.push(`${f.split(sep).join("/")}: ${re}`);
  }
  assert.deepEqual(hits, []);
});

test("the click-to-load component builds the embed and renders no iframe before a click", () => {
  const src = read(CLICK_TO_LOAD);
  assert.match(src, /google\.com\/maps\/embed\/v1\/place\?/, "embed URL lives here");
  assert.equal((src.match(/<iframe\b/g) || []).length, 1, "exactly one iframe in the component");

  // Starts hidden, and only a click turns it on.
  assert.match(src, /const \[shown, setShown\] = useState\(false\);/);
  const setters = src.match(/setShown\([^)]*\)/g) || [];
  assert.deepEqual(setters, ["setShown(true)"], "setShown is only called once, with true");
  assert.match(src, /onClick=\{\(\) => setShown\(true\)\}/, "the click sets it");

  // Before the click: the `if (!shown) { ... }` block returns the button and no iframe.
  const guard = src.indexOf("if (!shown) {");
  assert.ok(guard > 0, "early return while not shown");
  const open = src.indexOf("{", guard);
  let depth = 0;
  let close = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}" && --depth === 0) { close = i; break; }
  }
  assert.ok(close > open, "the not-shown block closes");
  const notShown = src.slice(open, close + 1);
  assert.match(notShown, /return \(/);
  assert.match(notShown, /<button[\s\S]*Show map \(Google Maps\)[\s\S]*<\/button>/);
  assert.doesNotMatch(notShown, /<iframe|embedUrl\(/, "no iframe or embed URL before the click");

  // The iframe is only in the code after that block, which runs once shown is true.
  assert.ok(src.indexOf("<iframe") > close, "iframe comes after the not-shown block");
  assert.match(src.slice(close + 1), /^\s*return \(\s*<iframe\b/, "the shown branch returns the iframe");

  // Nothing before the guard renders anything from Google.
  const componentStart = src.indexOf("export default function GoogleMapClickToLoad");
  assert.ok(componentStart > 0 && componentStart < guard);
  assert.doesNotMatch(src.slice(componentStart, guard), /<iframe|embedUrl\(/);
});

test("the listing page uses the OpenStreetMap map and the click-to-load fallback", () => {
  const page = read(join("app", "[category]", "[slug]", "page.tsx"));
  assert.doesNotMatch(page, /<iframe\b/, "no iframe on the listing page itself");
  assert.match(page, /<ListingMapLazy\b/);
  assert.match(page, /<GoogleMapClickToLoad\b/);
  assert.match(page, />\s*Get directions\b/);
  assert.match(page, />\s*View on Google Maps\b/);
});

test("Leaflet is loaded lazily, in the browser only", () => {
  const lazy = read(join("components", "ListingMapLazy.tsx"));
  assert.match(lazy, /dynamic\(\(\) => import\("\.\/ListingMap"\),\s*\{\s*ssr: false/);
  for (const f of [join("app", "[category]", "[slug]", "page.tsx"), join("components", "ListingMapLazy.tsx")]) {
    assert.doesNotMatch(read(f), /from "(react-)?leaflet"|leaflet\.css/, `${f} must not import Leaflet directly`);
  }
});

test("OpenStreetMap tiles: the policy URL and visible attribution", () => {
  const tiles = read(join("lib", "osm-tiles.ts"));
  assert.match(tiles, /"https:\/\/tile\.openstreetmap\.org\/\{z\}\/\{x\}\/\{y\}\.png"/);
  assert.match(tiles, /&copy; <a href="https:\/\/www\.openstreetmap\.org\/copyright">OpenStreetMap<\/a> contributors/);
  for (const f of [join("components", "ListingMap.tsx"), join("components", "CategoryMap.tsx")]) {
    const src = read(f);
    assert.match(src, /url=\{OSM_TILE_URL\}/, `${f} uses the shared tile URL`);
    assert.match(src, /attribution=\{OSM_ATTRIBUTION\}/, `${f} uses the shared attribution`);
  }
  const all = [...DIRS.flatMap(files)];
  const old = all.filter((f) => /\{s\}\.tile\.openstreetmap\.org|http:\/\/tile\.openstreetmap/.test(read(f)));
  assert.deepEqual(old, [], "no subdomain or plain-http tile URLs");
});
