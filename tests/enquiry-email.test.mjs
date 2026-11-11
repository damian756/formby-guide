// Every enquiry is delivered to DELIVERY_EMAIL; every address a visitor sees is
// DISPLAY_EMAIL. Enquiry mail is sent from the site's own domain, escaped, with
// a checked reply-to and logged errors. Static reads plus the pure helpers in
// lib/enquiry-email.ts and lib/contact.ts: nothing is sent, no route is called.
// Run: npm run test:enquiry
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  HONEYPOT_FIELD,
  LIMITS,
  buildAutoReply,
  buildEnquiryEmail,
  cleanSubject,
  escapeHtml,
  logSendError,
  parseEnquiry,
  plainAddress,
} from "../lib/enquiry-email.ts";
import { DELIVERY_EMAIL, DISPLAY_EMAIL } from "../lib/contact.ts";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

// Pages that print our contact address.
const DISPLAYS = ["app/layout.tsx", "app/advertise/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx"];

// Enquiry routes: each delivers to DELIVERY_EMAIL.
const ROUTES = ["app/api/contact/route.ts"];

// Addresses allowed in those files that are not contact addresses.
const NOT_CONTACT = new Set([
  "noreply@formbyguide.co.uk", // the contact route's default FROM address
]);

const addresses = (src) => (src.match(EMAIL) ?? []).filter((a) => !NOT_CONTACT.has(a));

function walk(dirs, onFile) {
  const go = (dir) => {
    for (const name of readdirSync(join(ROOT, dir))) {
      const p = join(dir, name);
      if (statSync(join(ROOT, p)).isDirectory()) go(p);
      else onFile(p, name);
    }
  };
  for (const d of dirs) go(d);
}

test("DELIVERY_EMAIL and DISPLAY_EMAIL have the agreed values", () => {
  assert.equal(DELIVERY_EMAIL, "damian@churchtownmedia.co.uk");
  assert.equal(DISPLAY_EMAIL, "hello@seftoncoast.network");
});

for (const file of DISPLAYS) {
  test(`${file} prints DISPLAY_EMAIL and no hard-coded address`, () => {
    const src = read(file);
    assert.match(src, /import \{[^}]*\bDISPLAY_EMAIL\b[^}]*\} from "@\/lib\/contact"/, "imports DISPLAY_EMAIL");
    assert.match(src, /\{DISPLAY_EMAIL\}/, "prints it");
    assert.match(src, /href=\{`mailto:\$\{DISPLAY_EMAIL\}`\}/, "links to it");
    assert.doesNotMatch(src, /DELIVERY_EMAIL/, "never shows the delivery address");
    assert.deepEqual(addresses(src), [], "no hard-coded address");
  });
}

for (const file of ROUTES) {
  test(`${file} delivers to DELIVERY_EMAIL`, () => {
    const src = read(file);
    assert.match(src, /import \{[^}]*\bDELIVERY_EMAIL\b[^}]*\} from "@\/lib\/contact"/);
    assert.match(src, /const TO_EMAIL = DELIVERY_EMAIL;/);
    assert.match(src, /buildEnquiryEmail\(enquiry, \{ from: FROM_EMAIL, to: TO_EMAIL, replyTo \}\)/);
    assert.deepEqual(addresses(src), [], "no hard-coded address apart from the FROM default");
  });
}

test("the contact and claim-listing forms post to the contact route", () => {
  for (const file of ["app/contact/ContactClient.tsx", "app/claim-listing/ClaimListingClient.tsx"]) {
    assert.match(read(file), /fetch\("\/api\/contact"/, file);
  }
});

test("no client component imports lib/contact (the delivery address stays on the server)", () => {
  const hits = [];
  walk(["app", "components", "lib"], (p, name) => {
    if (!/\.(tsx?|jsx?)$/.test(name)) return;
    const src = read(p);
    if (/^\s*["']use client["']/.test(src) && /from "@\/lib\/contact"/.test(src)) hits.push(p);
  });
  assert.deepEqual(hits, []);
});

test("no other address of ours appears anywhere in the site's code", () => {
  const ours = /@(seftoncoast\.network|churchtownmedia\.co\.uk|formbyguide\.co\.uk)\b/;
  const found = [];
  walk(["app", "components", "lib", "public"], (p, name) => {
    if (!/\.(tsx?|mjs|js|json|txt|md|html|xml)$/.test(name)) return;
    for (const a of read(p).match(EMAIL) ?? []) {
      if (ours.test(a)) found.push(`${relative(ROOT, join(ROOT, p)).split(sep).join("/")}: ${a}`);
    }
  });
  assert.deepEqual(found, [
    "app/api/contact/route.ts: noreply@formbyguide.co.uk", // FROM, not a contact address
    "lib/contact.ts: damian@churchtownmedia.co.uk", // DELIVERY_EMAIL
    "lib/contact.ts: hello@seftoncoast.network", // DISPLAY_EMAIL
  ]);
});

test("the contact route sends from the site's own domain, with the env override kept", () => {
  const src = read("app/api/contact/route.ts");
  assert.match(src, /const FROM_EMAIL = process\.env\.RESEND_FROM_EMAIL \|\| "FormbyGuide <noreply@formbyguide\.co\.uk>";/);
  assert.doesNotMatch(src, /resend\.dev/);
});

test("no route can fall back to a resend.dev sender (app/, lib/, components/)", () => {
  const hits = [];
  walk(["app", "lib", "components"], (p, name) => {
    if (/\.(tsx?|jsx?|mjs|json)$/.test(name) && /resend\.dev/i.test(read(p))) hits.push(p);
  });
  assert.deepEqual(hits, []);
});

test("the contact route checks both sends and logs errors", () => {
  const src = read("app/api/contact/route.ts");
  assert.equal((src.match(/const \{ error \} = await resend\.emails\.send\(/g) ?? []).length, 2);
  assert.ok((src.match(/logSendError\(/g) ?? []).length >= 4);
});

const HOSTILE = {
  name: `Jo <script>alert("x")</script>`,
  email: "jo@example.com",
  subject: "Advertise\r\nBcc: victim@example.com",
  message: `Hello <b>there</b> & "friends" 'all'`,
  businessName: "Jo's <Café>\nLtd",
};

test("escapeHtml escapes the five HTML characters", () => {
  assert.equal(escapeHtml(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(escapeHtml(undefined), "");
});

test("the enquiry email goes to DELIVERY_EMAIL, escapes every user value and has a one-line subject", () => {
  const mail = buildEnquiryEmail(HOSTILE, { from: "F <f@example.com>", to: DELIVERY_EMAIL, replyTo: "jo@example.com" });
  assert.equal(mail.to, DELIVERY_EMAIL);
  assert.doesNotMatch(mail.subject, /[\r\n]/);
  assert.equal(cleanSubject("a\r\nb\nc"), "a b c");
  assert.doesNotMatch(mail.html, /<script>|<b>there|<Caf/);
  assert.match(mail.html, /Jo &lt;script&gt;alert\(&quot;x&quot;\)&lt;\/script&gt;/);
  assert.match(mail.html, /Hello &lt;b&gt;there&lt;\/b&gt; &amp; &quot;friends&quot; &#39;all&#39;/);
  assert.match(mail.html, /Jo&#39;s &lt;Café&gt; Ltd/);
});

test("the reply-to is the enquirer's address, as one plain address", () => {
  const mail = buildEnquiryEmail(HOSTILE, { from: "F <f@example.com>", to: DELIVERY_EMAIL, replyTo: plainAddress(" jo@example.com ") });
  assert.equal(mail.replyTo, "jo@example.com");
  for (const bad of [
    "a@b.com, c@d.com",
    "Jo <jo@example.com>",
    "jo@example.com\nBcc: x@y.com",
    "jo @example.com",
    "jo;x@example.com",
    "no-at-sign.example.com",
    `${"a".repeat(250)}@b.com`,
    42,
  ]) {
    assert.equal(plainAddress(bad), null, String(bad));
  }
});

test("a returned send error is logged with its name and message only", () => {
  const lines = [];
  logSendError("enquiry", { name: "validation_error", message: "The domain is not verified.", statusCode: 403 }, (l) => lines.push(l));
  assert.deepEqual(lines, ["[contact] enquiry email failed: validation_error: The domain is not verified."]);
  lines.length = 0;
  logSendError("auto-reply", new TypeError("fetch failed"), (l) => lines.push(l));
  assert.deepEqual(lines, ["[contact] auto-reply email failed: TypeError: fetch failed"]);
});

// Limits, honeypot and the auto-reply (added after the advertising review).

const GOOD = { name: "Jo Bloggs", email: "jo@example.com", subject: "General enquiry", message: "Hello there", businessName: "" };

test("the field limits are 100 for name, subject and business name, 3000 for the message", () => {
  assert.deepEqual({ ...LIMITS }, { name: 100, subject: 100, businessName: 100, message: 3000 });
});

test("parseEnquiry accepts values at the limits and refuses one character over", () => {
  const atLimit = { ...GOOD, name: "n".repeat(100), subject: "s".repeat(100), businessName: "b".repeat(100), message: "m".repeat(3000) };
  const ok = parseEnquiry(atLimit);
  assert.equal(ok.kind, "ok");
  assert.equal(ok.replyTo, "jo@example.com");
  for (const [field, label] of [["name", "Name"], ["subject", "Subject"], ["businessName", "Business name"], ["message", "Message"]]) {
    const over = parseEnquiry({ ...GOOD, [field]: "x".repeat(LIMITS[field] + 1) });
    assert.equal(over.kind, "error", field);
    assert.equal(over.error, `${label} is too long (max ${LIMITS[field]} characters).`);
  }
});

test("parseEnquiry still requires name, email and message, and one plain address", () => {
  for (const field of ["name", "email", "message"]) {
    assert.deepEqual(parseEnquiry({ ...GOOD, [field]: "  " }), { kind: "error", error: "Name, email and message are required." }, field);
  }
  assert.deepEqual(parseEnquiry({ ...GOOD, email: "a@b.com, c@d.com" }), { kind: "error", error: "Invalid email address." });
  assert.deepEqual(parseEnquiry({ ...GOOD, name: ["x"] }), { kind: "error", error: "Invalid request." });
  assert.equal(parseEnquiry(null).kind, "error");
});

test("a filled honeypot is answered as ok and nothing is built to send", () => {
  assert.equal(HONEYPOT_FIELD, "website");
  assert.deepEqual(parseEnquiry({ ...GOOD, [HONEYPOT_FIELD]: "http://spam.example" }), { kind: "honeypot" });
  // Even an otherwise invalid request with the honeypot filled gets the quiet ok.
  assert.deepEqual(parseEnquiry({ [HONEYPOT_FIELD]: "x" }), { kind: "honeypot" });
  // Empty or blank honeypot: a person, so the enquiry goes ahead.
  assert.equal(parseEnquiry({ ...GOOD, [HONEYPOT_FIELD]: "" }).kind, "ok");
  assert.equal(parseEnquiry({ ...GOOD, [HONEYPOT_FIELD]: "   " }).kind, "ok");
});

test("the contact route returns ok and sends nothing when the honeypot is filled", () => {
  const src = read("app/api/contact/route.ts");
  const honeypotAt = src.indexOf('if (parsed.kind === "honeypot") return NextResponse.json({ success: true });');
  assert.ok(honeypotAt > 0, "honeypot check present");
  assert.ok(honeypotAt < src.indexOf("new Resend("), "checked before any mail client is made");
  assert.ok(honeypotAt < src.indexOf("resend.emails.send("), "checked before any send");
  assert.match(src, /parseEnquiry\(await req\.json\(\)\)/);
});

test("both forms carry the hidden honeypot field and the limits", () => {
  for (const file of ["app/contact/ContactClient.tsx", "app/claim-listing/ClaimListingClient.tsx"]) {
    const src = read(file);
    assert.match(src, /import \{ HONEYPOT_FIELD, LIMITS \} from "@\/lib\/enquiry-email";/, file);
    assert.match(src, /name=\{HONEYPOT_FIELD\}/, `${file}: field named`);
    assert.match(src, /aria-hidden="true" className="absolute -left-\[10000px\]/, `${file}: hidden`);
    assert.match(src, /tabIndex=\{-1\}/, `${file}: out of the tab order`);
    assert.match(src, /\[HONEYPOT_FIELD\]: /, `${file}: sent to the route`);
    assert.match(src, /maxLength=\{LIMITS\.name\}/, file);
    assert.match(src, /maxLength=\{LIMITS\.businessName\}/, file);
    assert.match(src, /maxLength=\{LIMITS\.message\}/, file);
  }
});

test("the auto-reply is fixed text: no name, nothing the enquirer typed", () => {
  const reply = buildAutoReply({ from: "F <f@example.com>", to: "jo@example.com" });
  assert.equal(reply.to, "jo@example.com", "the auto-reply goes to the enquirer");
  assert.equal(reply.replyTo, undefined);
  assert.match(reply.html, /Hello,/);
  assert.match(reply.html, /1 to 2 working days/);
  assert.doesNotMatch(reply.html, /business days|\u2013|\u2014/);
  assert.equal(buildAutoReply.length, 1, "takes only from and to: no enquiry text can reach it");
  for (const v of Object.values(HOSTILE)) {
    if (v !== HOSTILE.email) assert.ok(!reply.html.includes(v) && !reply.subject.includes(v), v);
  }
  assert.ok(!reply.html.includes("Jo"), "no name");
  assert.match(read("app/api/contact/route.ts"), /buildAutoReply\(\{ from: FROM_EMAIL, to: replyTo \}\)/);
});
