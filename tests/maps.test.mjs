// Maps (Damian, 11 Nov 2026): listing maps are drawn with Leaflet on OpenStreetMap
// tiles. No Google Maps embed anywhere: no iframe, no embed URL and no Google key in
// page or component code. A listing without stored coordinates shows no map box,
// only the plain "Get directions" and "View on Google Maps" links (place id URLs,
// no key).
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

const LISTING_PAGE = join("app", "[category]", "[slug]", "page.tsx");
const LISTING_MAP = join("components", "ListingMap.tsx");
const LISTING_MAP_LAZY = join("components", "ListingMapLazy.tsx");
const CATEGORY_MAP = join("components", "CategoryMap.tsx");
const CATEGORY_BROWSER = join("components", "CategoryBrowser.tsx");

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
const posix = (p) => p.split(sep).join("/");

// Drops whole-line comments (// ..., /* ... */, JSX {/* ... */}) so that a comment
// saying "no Google embed" is not read as code. Strings, including URLs, are kept.
function code(src) {
  return src
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, "")
    .replace(/^\s*\/\/.*$/gm, "");
}

const siteFiles = () => [...DIRS.flatMap(files), ...ROOT_FILES.filter((f) => existsSync(join(ROOT, f)))];

// String literals in a file: "...", '...' and `...` (no nesting needed here).
const literals = (src) => src.match(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g) || [];

test("no Google Maps embed URL anywhere on the site, including My Maps and built-up URLs", () => {
  const all = siteFiles();
  assert.ok(all.length > 50, "expected to scan the site's source files");
  const hits = [];
  for (const f of all) {
    const src = code(read(f));
    const direct = [
      /google\.[a-z.]+\/maps\/(d\/)?embed/i, // Embed API and My Maps (maps/d/embed)
      /maps\.google\.[a-z.]+\/maps\?[^"'`\s]*output=embed/i,
      /[?&]output=embed/i,
      /\bembed\/v1\b/i,
    ];
    for (const re of direct) if (re.test(src)) hits.push(`${posix(f)}: ${re}`);
    // An embed URL put together from pieces: any string with "embed" in a file that
    // also talks to Google.
    if (/google/i.test(src) && literals(src).some((s) => /\bembed\b/i.test(s))) {
      hits.push(`${posix(f)}: "embed" string in a file that mentions Google`);
    }
  }
  assert.deepEqual(hits, []);
});

test("no iframe anywhere on the site", () => {
  const hits = siteFiles().filter((f) => /<iframe\b|createElement\(\s*["'`]iframe/i.test(code(read(f))));
  assert.deepEqual(hits.map(posix), [], "the site has no iframes; maps are Leaflet on OpenStreetMap");
});

test("no Google key in page or component code", () => {
  const hits = siteFiles().filter((f) => /GOOGLE_PLACES_API_KEY|GOOGLE_MAPS[A-Z_]*KEY|[?&]key=\$\{/.test(code(read(f))));
  assert.deepEqual(hits.map(posix), [], "only scripts/ may read GOOGLE_PLACES_API_KEY");
});

test("the Google click-to-load fallback is gone", () => {
  assert.ok(!existsSync(join(ROOT, "components", "GoogleMapClickToLoad.tsx")), "components/GoogleMapClickToLoad.tsx must not exist");
  const users = siteFiles().filter((f) => /GoogleMapClickToLoad/.test(code(read(f))));
  assert.deepEqual(users.map(posix), []);
});

test("listing page: a map box only with coordinates, plain keyless links otherwise", () => {
  const page = code(read(LISTING_PAGE));
  assert.match(page, /const coords = business\.lat != null && business\.lng != null/);

  // The only map component on the page is ListingMapLazy, once, inside {coords && (...)}.
  assert.equal((page.match(/<ListingMapLazy\b/g) || []).length, 1);
  const box = page.indexOf("{coords && (");
  assert.ok(box > 0, "the map box is rendered only when there are coordinates");
  assert.ok(page.indexOf("<ListingMapLazy") > box, "ListingMapLazy sits inside the coords block");
  let depth = 0;
  let end = -1;
  for (let i = box; i < page.length; i++) {
    if (page[i] === "{") depth++;
    else if (page[i] === "}" && --depth === 0) { end = i; break; }
  }
  assert.ok(end > page.indexOf("<ListingMapLazy"), "the coords block closes after the map");
  assert.doesNotMatch(page.slice(box, end), /google\.com|placeId|apiKey|<iframe|<Google/i, "nothing from Google inside the map box");

  // The links for listings without coordinates: place id URLs, never a key.
  assert.match(page, /maps\/search\/\?api=1&query=\$\{placeQuery\}&query_place_id=\$\{placeIdParam\}/);
  assert.match(page, /maps\/dir\/\?api=1&destination=\$\{placeQuery\}&destination_place_id=\$\{placeIdParam\}/);
  assert.doesNotMatch(page, /process\.env/, "the listing page reads no env (no key)");
  assert.match(page, />\s*Get directions\b/);
  assert.match(page, />\s*View on Google Maps\b/);
});

test("Leaflet is loaded lazily, in the browser only, and only through the lazy wrappers", () => {
  const lazy = read(LISTING_MAP_LAZY);
  assert.match(lazy, /dynamic\(\(\) => import\("\.\/ListingMap"\),\s*\{\s*ssr: false/);
  assert.match(read(CATEGORY_BROWSER), /dynamic\(\(\) => import\("\.\/CategoryMap"\),\s*\{\s*ssr: false/);

  // The lazy wrapper mounts the map only when its box comes near the screen.
  assert.match(lazy, /const \[near, setNear\] = useState\(false\);/);
  assert.equal((lazy.match(/setNear/g) || []).length, 2, "setNear is declared once and called once (no alias)");
  const io = lazy.slice(lazy.indexOf("new IntersectionObserver("), lazy.indexOf("io.observe("));
  assert.match(io, /setNear\(true\)/, "only the IntersectionObserver turns the map on");

  // Only the two map components touch Leaflet, and only their wrappers import them.
  const imports = (src, name) => new RegExp(`(?:from\\s*|import\\(\\s*)["'][^"']*\\/${name}["']`).test(src);
  const leafletUsers = [];
  const listingImporters = [];
  const categoryImporters = [];
  for (const f of DIRS.flatMap(files)) {
    const src = code(read(f));
    if (/from\s*["'](react-)?leaflet["']|import\(\s*["'](react-)?leaflet["']|leaflet\.css/.test(src)) leafletUsers.push(posix(f));
    if (imports(src, "ListingMap")) listingImporters.push(posix(f));
    if (imports(src, "CategoryMap")) categoryImporters.push(posix(f));
  }
  assert.deepEqual(leafletUsers.sort(), [posix(CATEGORY_MAP), posix(LISTING_MAP)].sort());
  assert.deepEqual(listingImporters, [posix(LISTING_MAP_LAZY)], "only ListingMapLazy imports ListingMap");
  assert.deepEqual(categoryImporters, [posix(CATEGORY_BROWSER)], "only CategoryBrowser imports CategoryMap");
});

test("OpenStreetMap tiles: the policy URL and visible attribution", () => {
  const tiles = read(join("lib", "osm-tiles.ts"));
  assert.match(tiles, /"https:\/\/tile\.openstreetmap\.org\/\{z\}\/\{x\}\/\{y\}\.png"/);
  assert.match(tiles, /&copy; <a href="https:\/\/www\.openstreetmap\.org\/copyright">OpenStreetMap<\/a> contributors/);
  for (const f of [LISTING_MAP, CATEGORY_MAP]) {
    const src = read(f);
    assert.match(src, /url=\{OSM_TILE_URL\}/, `${f} uses the shared tile URL`);
    assert.match(src, /attribution=\{OSM_ATTRIBUTION\}/, `${f} uses the shared attribution`);
  }
  const all = DIRS.flatMap(files);
  const old = all.filter((f) => /\{s\}\.tile\.openstreetmap\.org|http:\/\/tile\.openstreetmap/.test(read(f)));
  assert.deepEqual(old, [], "no subdomain or plain-http tile URLs");
  // The attribution control must stay on.
  const hidden = all.filter((f) => /attributionControl\s*(=\s*\{\s*false\s*\}|:\s*false)|attributionControl\??\.remove\(/.test(code(read(f))));
  assert.deepEqual(hidden.map(posix), [], "attribution control is never turned off");
});
