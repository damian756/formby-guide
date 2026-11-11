// No em dash (U+2014) in anything a visitor or search engine sees (C:\Projects\CLAUDE.md).
// Static read of every file that can render: page and layout code under app/ (titles,
// descriptions, metadata exports, generateMetadata, JSON-LD builders, copy), shared
// components, data files in lib/ content/ data/ messages/, visitor email text, and the
// text files in public/ (manifest, llms.txt, feeds). Code comments may keep em dashes.
// Text stored in the database is counted separately and is not covered here.
// Run: node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIRS = ["app", "components", "lib", "content", "data", "messages", "emails", "public"];
const CODE = /\.(tsx?|jsx?|mjs|cjs)$/i;
const TEXT = /\.(json|webmanifest|txt|xml|md|mdx|html?|svg)$/i;
const EM = "\u2014";

function files(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(join(ROOT, d))) {
      const p = join(d, name);
      if (statSync(join(ROOT, p)).isDirectory()) walk(p);
      else if (CODE.test(name) || TEXT.test(name)) out.push(p);
    }
  };
  if (existsSync(join(ROOT, dir))) walk(dir);
  return out;
}

// Removes comments from JS/TS source and returns what is left (strings, JSX text, code).
// Tracks quotes and template literals so "https://" in a string is not taken for a
// comment. In JSX text an apostrophe is not a quote, so a quote only opens a string
// where code expects a value (after = ( [ { , : ? ! & | + return and similar).
export function stripComments(src) {
  let out = "";
  let i = 0;
  let prev = ""; // last non-space character outside strings and comments
  const opensString = () => prev === "" || /[=([{,:;?!&|+\-*%<>~^]/.test(prev) || /\b(return|case|typeof|in|of|default|export)$/.test(out.trimEnd());
  while (i < src.length) {
    const c = src[i];
    const n = src[i + 1];
    if (c === "/" && n === "/") { while (i < src.length && src[i] !== "\n") i++; continue; }
    if (c === "/" && n === "*") { const e = src.indexOf("*/", i + 2); i = e === -1 ? src.length : e + 2; continue; }
    if ((c === '"' || c === "'" || c === "`") && opensString()) {
      let j = i + 1;
      while (j < src.length && src[j] !== c) { if (src[j] === "\\") j++; if (c !== "`" && src[j] === "\n") break; j++; }
      out += src.slice(i, j + 1);
      prev = c;
      i = j + 1;
      continue;
    }
    out += c;
    if (!/\s/.test(c)) prev = c;
    i++;
  }
  return out;
}

function emDashLines(path) {
  const raw = readFileSync(join(ROOT, path), "utf8");
  if (!raw.includes(EM)) return [];
  const body = CODE.test(path) ? stripComments(raw) : raw;
  if (!body.includes(EM)) return [];
  return raw.split("\n").flatMap((line, k) => (line.includes(EM) && body.includes(line.trim()) ? [`${path.split(sep).join("/")}:${k + 1}: ${line.trim().slice(0, 120)}`] : []));
}

test("the comment stripper keeps strings and drops comments", () => {
  assert.equal(stripComments('const a = "x"; // note \u2014 here').includes(EM), false);
  assert.equal(stripComments("/* block \u2014 */ const b = 1;").includes(EM), false);
  assert.equal(stripComments('const c = "Bad \u2014 copy";').includes(EM), true);
  assert.equal(stripComments('title: `${x} \u2014 ${y}`').includes(EM), true);
  assert.equal(stripComments('<p>Don\'t go \u2014 it rains</p>').includes(EM), true);
  assert.equal(stripComments('const u = "https://example.com"; const t = "a \u2014 b";').includes(EM), true);
  assert.equal(stripComments("{/* JSX comment \u2014 */}<p>ok</p>").includes(EM), false);
});

test("no em dash in titles, descriptions, metadata, schema, copy or data files", () => {
  const all = DIRS.flatMap(files);
  assert.ok(all.length > 100, "expected to scan the site's files");
  const hits = all.flatMap(emDashLines);
  assert.deepEqual(hits, [], "replace each with a colon, comma or full stop, or rewrite the sentence");
});

test("no em dash in metadata exports or title and description templates under app/", () => {
  const hits = [];
  for (const f of files("app").filter((p) => CODE.test(p))) {
    const src = stripComments(readFileSync(join(ROOT, f), "utf8"));
    const blocks = [
      ...src.matchAll(/export (?:const metadata|async function generateMetadata|function generateMetadata)[\s\S]*?\n\}/g),
      ...src.matchAll(/(?:title|description|metaTitle|metaDescription|excerpt|alt|headline|name)\s*:\s*(["'`])(?:\\.|(?!\1)[^\\])*\1/g),
    ];
    for (const m of blocks) if (m[0].includes(EM)) hits.push(`${f.split(sep).join("/")}: ${m[0].slice(0, 100)}`);
  }
  assert.deepEqual(hits, []);
});
