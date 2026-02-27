import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShoppingBag, Utensils, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Village | Chapel Lane, Shops & Restaurants Guide | FormbyGuide",
  description:
    "Formby village guide — Chapel Lane, independent shops, the best restaurants, and the part of Formby most visitors never see. Ten minutes from the beach.",
  keywords:
    "formby village, chapel lane formby, formby town centre, formby shops, formby restaurants, formby independent shops",
  alternates: { canonical: `${BASE_URL}/guides/formby-village` },
  openGraph: {
    title: "Formby Village | Chapel Lane, Shops & Restaurants",
    description:
      "Formby village guide — Chapel Lane, independent shops, and the best restaurants. The bit most visitors miss.",
    url: `${BASE_URL}/guides/formby-village`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/about-village-street.webp`, width: 1200, height: 630, alt: "Formby village — Chapel Lane" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ShoppingDistrict",
  name: "Formby Village — Chapel Lane",
  description: "Formby village centre — independent shops and restaurants on Chapel Lane and the surrounding streets.",
  url: `${BASE_URL}/guides/formby-village`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chapel Lane",
    addressLocality: "Formby",
    addressRegion: "Merseyside",
    postalCode: "L37",
    addressCountry: "GB",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Formby village?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Formby village is in the centre of Formby, about 10 minutes by car from the National Trust beach car park. The main shopping area is Chapel Lane — a mix of independent shops, restaurants, and cafés.",
      },
    },
    {
      "@type": "Question",
      name: "What's on Chapel Lane in Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chapel Lane has a mix of independent shops, estate agents, cafés, and some good restaurants. It's not a high street full of chains — mostly independents and a few small multiples. Worth a browse if you're looking for something different.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best restaurants in Formby village?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Left Bank Brasserie, Emily's, The Sparrowhawk, and Don Luigi are the main options in the village. Left Bank is the most upmarket; Emily's is the most popular local neighbourhood restaurant. Book ahead at weekends.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Formby village from the beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Formby village is about 1.5 miles from the National Trust beach car park (L37 1YH) — around 10 minutes by car. A 25-minute walk through residential streets, or take a taxi.",
      },
    },
  ],
};

export default function FormbyVillagePage() {
  const guide = getGuide("formby-village");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px] flex items-center bg-[#1C3220]">
          <Image
            src="/about-village-street.webp"
            alt="Formby village — Chapel Lane and the village centre"
            fill
            priority
            className="object-cover object-center opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3220]/90 via-[#1C3220]/60 to-transparent" />
          <div className="relative container mx-auto px-4 max-w-6xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
                <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/guides" className="hover:text-white transition">Guides</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Formby Village</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Formby Village
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Most visitors head straight to the beach and miss the village entirely. Ten minutes inland and you&apos;ve got Chapel Lane, some of the best restaurants in Merseyside, and a very decent afternoon out.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: MapPin, label: "Main street", value: "Chapel Lane" },
                  { icon: ShoppingBag, label: "Shopping", value: "Independents" },
                  { icon: Utensils, label: "Dining", value: "Book ahead" },
                  { icon: MapPin, label: "From beach", value: "10 mins" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-black/30 backdrop-blur rounded-lg p-3 border border-white/20">
                    <div className="flex items-start gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-white/60">{label}</div>
                    </div>
                    <div className="text-sm font-bold text-white ml-6">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro band */}
        <div className="bg-[#1C3220]">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
          <div className="container mx-auto px-4 max-w-6xl py-10">
            <p className="font-display text-2xl md:text-3xl text-white font-semibold leading-snug max-w-2xl">
              Formby is an <span className="text-[#C9A96E]">affluent village</span> — not a seaside town. Most of the good stuff is inland.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
              The postcode L37 1YH gets you to the beach. The village centre is L37 4 — 10 minutes by car, a different world. Independent shops, good restaurants, people who actually live here rather than tourists.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl py-12">

          {/* Chapel Lane */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Chapel Lane</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-[#1C3220]/70 leading-relaxed mb-4">
                  Chapel Lane is Formby&apos;s main shopping street — the one worth visiting rather than the Tesco end. It&apos;s a mix of independent shops, estate agents (plenty of them — Formby property is expensive), a few cafés, and restaurants at the better end of what you&apos;d find in Merseyside.
                </p>
                <p className="text-[#1C3220]/70 leading-relaxed mb-4">
                  It&apos;s not a long street. You can walk the length of it in five minutes. The independent shops are the reason to go — there are no national chains worth noting. Charity shops on and around Chapel Lane are worth a browse if you&apos;re patient (I&apos;ve found some good things in the British Heart Foundation).
                </p>
                <p className="text-[#1C3220]/70 leading-relaxed">
                  Parking on Chapel Lane and surrounding streets is reasonably easy on weekday mornings. Saturday mornings get busy — park in one of the side streets and walk.
                </p>
              </div>
              <div className="relative h-56 overflow-hidden rounded-2xl">
                <Image
                  src="/blog-card-food.webp"
                  alt="Formby village dining"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </section>

          {/* Shopping */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Shopping in Formby Village</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  type: "Independent Shops",
                  desc: "A handful of genuinely independent shops on and near Chapel Lane — gifts, clothing, interiors. Not extraordinary but better than most town centres. The kind of shopping trip where you buy something you weren&apos;t expecting to.",
                  icon: ShoppingBag,
                },
                {
                  type: "Charity Shops",
                  desc: "Formby is an affluent area — the charity shops reflect that. British Heart Foundation on Chapel Lane is usually worth a browse. Don&apos;t expect Primark prices but the donations tend to be decent quality.",
                  icon: ShoppingBag,
                },
                {
                  type: "Groceries & Day-to-Day",
                  desc: "Sainsbury&apos;s Local, Co-op, and independent butchers and delis near the village centre. If you&apos;re self-catering locally, you&apos;re well served. The deli options are better than most areas of comparable size.",
                  icon: ShoppingBag,
                },
              ].map(({ type, desc, icon: Icon }) => (
                <div key={type} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="w-10 h-10 bg-[#E8EDE6] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2E6B3E]" />
                  </div>
                  <h3 className="font-semibold text-[#1C3220] mb-2">{type}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Restaurants */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Restaurants & Eating Out</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-8 max-w-2xl">
              The village punches well above its weight for a town of this size. Four restaurants worth knowing about, and all of them require booking at weekends.
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Left Bank Brasserie",
                  type: "Brasserie",
                  desc: "The standout Formby restaurant. Proper food, good wine list, the kind of place you&apos;d choose for a birthday dinner or a decent date. Not cheap but not pretending to be. Gorgeous room. Book well ahead at weekends.",
                  note: "Book ahead — always",
                  noteClass: "bg-red-50 border-red-100 text-red-700",
                },
                {
                  name: "Emily&apos;s",
                  type: "Restaurant",
                  desc: "The most popular neighbourhood restaurant in Formby. Locals go back regularly — that&apos;s the best endorsement. Good food at reasonable prices, relaxed atmosphere. Popular with families and groups.",
                  note: "Book ahead at weekends",
                  noteClass: "bg-amber-50 border-amber-100 text-amber-700",
                },
                {
                  name: "The Sparrowhawk",
                  type: "Gastropub",
                  desc: "Good pub food done well. The best option if you haven&apos;t booked — can usually find a table for food, especially early evening. Dog-friendly. Decent beer.",
                  note: "Walk-ins possible",
                  noteClass: "bg-[#E8EDE6] border-[#1C3220]/10 text-[#2E6B3E]",
                },
                {
                  name: "Don Luigi",
                  type: "Italian",
                  desc: "Solid Italian in the village. Good for groups and families. Reliable rather than exceptional — exactly what you want from a neighbourhood Italian. Better value than some of the alternatives.",
                  note: "Good for groups",
                  noteClass: "bg-[#E8EDE6] border-[#1C3220]/10 text-[#2E6B3E]",
                },
              ].map(({ name, type, desc, note, noteClass }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                      <p className="text-xs text-[#C9A96E] font-semibold">{type}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-2 whitespace-nowrap border ${noteClass}`}>
                      {note}
                    </span>
                  </div>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/guides/best-restaurants-formby"
                className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors"
              >
                Full restaurants guide with more detail →
              </Link>
            </div>
          </section>

          {/* How it compares to the beach */}
          <section className="mb-16 bg-[#E8EDE6] rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-3">Village vs Beach — Two Different Days Out</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-3">Beach Day</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  NT car park (L37 1YH), walk through pines to the beach, let the kids and dogs run, NT café, back through the dunes. Two to three hours. If you&apos;re coming from Liverpool or Manchester this is probably the main reason to visit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-3">Village Day (or Evening)</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Park near Chapel Lane, browse the shops, lunch at Emily&apos;s or dinner at Left Bank, maybe a drink afterwards. Genuinely enjoyable afternoon out that has nothing to do with sand. Worth combining with the beach if you&apos;ve got a full day.
                </p>
              </div>
            </div>
          </section>

          {/* Getting there */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Getting to Formby Village</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-[#1C3220] mb-3">By Car</h3>
                <ul className="space-y-2 text-sm text-[#1C3220]/70">
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span>From Liverpool: A565 to Formby, follow signs for town centre. 20–25 mins.</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span>From Southport: A565 south. 10–15 mins.</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span>Parking on Chapel Lane and side streets. Easy on weekdays.</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-[#1C3220] mb-3">By Train</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Formby station is on the Merseyrail Northern Line from Liverpool Central — 25-minute journey. The station is a 5-minute walk from Chapel Lane. Trains run every 15–20 minutes.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "Is Formby village worth visiting if I'm just here for the beach?",
                  a: "Yes, if you have a full day. After the beach — sandy, windswept, possibly wet — the village is a good option for lunch or dinner. Left Bank or Emily's are both worth the trip. Ten minutes by car from the NT car park.",
                },
                {
                  q: "Are there independent shops in Formby?",
                  a: "Yes. Not an overwhelming number but enough to make a browse worthwhile. Formby is wealthy — the independents that survive here tend to be decent quality. Charity shops also reflect the local income level.",
                },
                {
                  q: "Do I need to book restaurants in Formby?",
                  a: "At Left Bank and Emily's, yes — especially on Friday and Saturday evenings. Weekday lunches are usually fine without booking. The Sparrowhawk is the most walk-in friendly option.",
                },
                {
                  q: "Is Formby village different from Formby beach?",
                  a: "Very. The beach is the National Trust estate — pinewoods, dunes, the Irish Sea. The village is an inland suburb-style community with a proper town centre, good restaurants, and normal day-to-day shops. Two different reasons to visit.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </>
    </GuideLayout>
  );
}
