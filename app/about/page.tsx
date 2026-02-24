import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "About FormbyGuide | Your Independent Guide to Formby",
  description:
    "FormbyGuide.co.uk is an independent local guide to Formby — red squirrels, the beach, pinewoods, village dining and everything visitors need. Published by Churchtown Media.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About FormbyGuide.co.uk",
    description: "Independent guide to Formby — written by a local, published by Churchtown Media.",
    url: `${BASE_URL}/about`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
  },
};

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "FormbyGuide.co.uk",
    url: BASE_URL,
    description:
      "Independent local guide to Formby — red squirrels, the beach, pinewoods, village dining and everything visitors need.",
    publisher: {
      "@type": "Organization",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      name: "Churchtown Media",
      url: "https://www.churchtownmedia.co.uk",
      sameAs: [
        "https://find-and-update.company-information.service.gov.uk/company/16960442",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/about#clare`,
    name: "Clare",
    jobTitle: "Editor, FormbyGuide.co.uk",
    description:
      "Editorial voice of FormbyGuide.co.uk — written from the perspective of a Formby local of 15+ years. Mum of four, she knows every trail, tide time and family-friendly spot on the Sefton Coast.",
    worksFor: {
      "@id": `${BASE_URL}/#website`,
    },
    url: `${BASE_URL}/about`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.churchtownmedia.co.uk/about#founder",
    name: "Damian Roche",
    jobTitle: "Founder, Churchtown Media",
    url: "https://www.churchtownmedia.co.uk/about",
    sameAs: [
      "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
      "https://find-and-update.company-information.service.gov.uk/company/16960442",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-[#F7F9F6]">
        {/* Hero */}
        <div className="bg-[#1C3220] text-white py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-3">
              About this site
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
              About FormbyGuide
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              An independent local guide to Formby — the red squirrels, the beach, the pinewoods,
              where to eat, and everything a visitor needs to know. Written by someone who lives here.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 py-14">

          {/* Who writes it */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">Who writes it</h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#2E6B3E]/20">
                  <Image
                    src="/clare.png"
                    alt="Clare — Editor, FormbyGuide.co.uk"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1C3220] text-lg">Clare — Editor</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-[#2E6B3E]/10 text-[#2E6B3E] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-[#2E6B3E]/20">Formby Local</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">📍 Formby, Merseyside</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">👨‍👩‍👧‍👦 Mum of 4</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">🌲 15+ years local</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                FormbyGuide is written in the voice of Clare — a local Formby woman who has lived
                here for over fifteen years. Mum of four, she knows every trail, tide time, and
                family-friendly spot on the Sefton Coast, and isn&apos;t shy about telling you which
                ones aren&apos;t worth the bother.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clare is the target reader and the author. She writes like she&apos;s texting a
                friend who&apos;s visiting for the first time — practical info first, honest about
                what&apos;s worth it, and never gushing. If something isn&apos;t up to scratch,
                she&apos;ll say so.
              </p>
              <div className="bg-[#F0F5EF] rounded-xl px-5 py-4 border border-[#2E6B3E]/15">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#1C3220]">A note on transparency:</span>{" "}
                  Clare is an editorial voice — a persona built from genuine local knowledge. The
                  real person behind FormbyGuide is Damian Roche of Churchtown Media. All content
                  reflects real first-hand knowledge of the area. No sponsored editorial, no fluff.
                </p>
              </div>
            </div>
          </section>

          {/* Who publishes it */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">Who publishes it</h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="https://www.churchtownmedia.co.uk/images/about/damian-headshot.jpg"
                    alt="Damian Roche — Founder of Churchtown Media"
                    width={88}
                    height={88}
                    className="rounded-2xl"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#1C3220] text-lg">Damian Roche</p>
                  <p className="text-gray-500 text-sm mb-3">
                    Founder,{" "}
                    <a
                      href="https://churchtownmedia.co.uk"
                      className="text-[#2E6B3E] hover:underline font-medium"
                    >
                      Churchtown Media Ltd
                    </a>{" "}
                    — Company No. 16960442
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Damian is based in Churchtown, Southport — neighbouring Formby and right on the
                    Sefton Coast. He built FormbyGuide as part of the{" "}
                    <a
                      href="https://seftoncoast.network"
                      className="text-[#2E6B3E] hover:underline font-medium"
                    >
                      Sefton Coast Network
                    </a>{" "}
                    — a group of four independent editorial guides covering this stretch of coast.
                    FormbyGuide exists because no dedicated, editorially independent guide to Formby
                    existed anywhere online.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-[#1C3220] hover:text-[#2E6B3E] transition-colors"
                  >
                    LinkedIn profile →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* What we cover */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">What we cover</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Red Squirrels", desc: "The best guide to visiting the NT red squirrel reserve — when to go, what to bring, what to expect." },
                { label: "Formby Beach", desc: "Parking, postcode, dog rules, facilities, sand dunes and Formby Point. Everything you need before you set off." },
                { label: "The Pinewoods", desc: "Walking trails through the National Trust pinewoods — wildlife, history, and how to get there." },
                { label: "Restaurants & Cafés", desc: "Where to eat in Formby village — independent restaurants, cafés, and the NT café by the beach." },
                { label: "Things To Do", desc: "Activities, family days out, walking routes and everything else for a day in Formby." },
                { label: "Local businesses", desc: "The full directory of Formby shops, services and businesses." },
              ].map(({ label, desc }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-100 p-5">
                  <p className="font-semibold text-[#1C3220] mb-1">{label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Funding */}
          <section className="mb-14">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">How it&apos;s funded</h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                FormbyGuide is free to use. It&apos;s funded by featured placement — businesses can
                pay for premium positioning in listings. This is disclosed clearly on the site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Featured placement has no influence on what gets written. We may also earn affiliate
                commissions from some external links. These are disclosed where they appear.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">Get in touch</h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                To list your business, ask about featured placement, or flag anything that looks
                wrong — use the contact form below.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#1C3220] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#2E6B3E] transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href="/claim-listing"
                  className="inline-flex items-center justify-center border border-[#1C3220] text-[#1C3220] font-semibold px-6 py-3 rounded-xl hover:bg-[#1C3220] hover:text-white transition-colors"
                >
                  Claim your listing
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
