import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Dog, MapPin, Coffee, Beer, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Dog-Friendly Formby | Beach Rules, Walks, Pubs & Cafés | FormbyGuide",
  description:
    "Formby is genuinely good for dogs — NT beach (with seasonal rules), the pinewoods, and dog-welcoming pubs and cafés in the village. The complete dog-friendly guide.",
  keywords:
    "dog friendly formby, formby beach dogs, dogs formby pinewoods, dog friendly pubs formby, formby dog walks",
  alternates: { canonical: `${BASE_URL}/guides/dog-friendly-formby` },
  openGraph: {
    title: "Dog-Friendly Formby | Beach Rules, Walks, Pubs & Cafés",
    description:
      "Formby is genuinely good for dogs. Beach rules, best off-lead walks, and pubs and cafés that actually mean it.",
    url: `${BASE_URL}/guides/dog-friendly-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dog-Friendly Formby Guide",
  description: "Complete guide to visiting Formby with a dog — beach rules, walks, and dog-friendly pubs and cafés.",
  url: `${BASE_URL}/guides/dog-friendly-formby`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are dogs allowed at Formby Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, dogs are welcome at Formby Beach. Some sections near the Little Tern nesting area have seasonal restrictions between April and August. Follow the signage on the day — it's clearly marked.",
      },
    },
    {
      "@type": "Question",
      name: "Do dogs need to be on leads at Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dogs must be on leads in the red squirrel reserve area of the pinewoods. On the beach and in most of the pinewoods, leads are not required but are encouraged on busy days around other visitors.",
      },
    },
    {
      "@type": "Question",
      name: "Are there dog-friendly pubs in Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — The Sparrowhawk is known to be dog-friendly. Several other pubs in the village welcome dogs in their bar areas or beer gardens. It's worth calling ahead if you're not sure.",
      },
    },
    {
      "@type": "Question",
      name: "Can I walk my dog off lead at Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The beach has good off-lead potential outside the seasonal tern restriction areas. The pinewoods are fine off-lead outside the marked squirrel reserve zones. Good recall and busy day awareness recommended.",
      },
    },
  ],
};

export default function DogFriendlyFormbyPage() {
  const guide = getGuide("dog-friendly-formby");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[420px] flex items-center bg-[#1C3220]">
          <Image
            src="/formby-beach-hero.jpg"
            alt="Dog on Formby Beach — wide open sand and dunes"
            fill
            priority
            className="object-cover object-center opacity-40"
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
                <span>Dog-Friendly Formby</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Dog-Friendly Formby
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Beach, pinewoods, off-lead walks, and pubs that actually mean it. Formby is genuinely good for dogs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Dog, label: "Beach", value: "Welcome" },
                  { icon: Dog, label: "Pinewoods", value: "Welcome" },
                  { icon: Dog, label: "Squirrel reserve", value: "On leads" },
                  { icon: Dog, label: "Seasonal rules", value: "April–Aug" },
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

        <div className="container mx-auto px-4 max-w-6xl py-12">

          {/* Quick summary */}
          <div className="bg-[#E8EDE6] rounded-2xl p-6 mb-12">
            <h2 className="font-semibold text-[#1C3220] text-lg mb-3">The short version</h2>
            <ul className="space-y-2 text-sm text-[#1C3220]/80">
              <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">✓</span> Formby Beach — dogs welcome year-round, with seasonal restrictions on one section (April–August, near tern nesting)</li>
              <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">✓</span> Formby Pinewoods — dogs welcome, on leads in the red squirrel reserve zone</li>
              <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">✓</span> Off-lead areas on the beach (outside restricted zones) and parts of the pinewoods</li>
              <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">✓</span> Dog-friendly pubs and cafés in the village</li>
              <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">✓</span> NT car park postcode: L37 1YH — download the NT app before you leave</li>
            </ul>
          </div>

          {/* Beach rules */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Formby Beach — Dog Rules</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C3220] mb-3">Year-Round Access</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Dogs are welcome on Formby Beach throughout the year. The wide sandy beach gives dogs plenty of space to run. No leads required on most of the beach — use your judgement around other visitors.
                </p>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Good recall matters more here than at busier beaches — dogs can get a long way from their owners on this stretch of sand. Keep an eye on the tide.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C3220] mb-3">Seasonal Restrictions (April–August)</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Little Terns nest on a section of Formby beach between April and August. Dogs must be kept away from this nesting area during this period. It&apos;s clearly signed on arrival.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
                  <p className="font-semibold mb-1">The rule is simple:</p>
                  <p>Follow the signs on the day. The restricted zone moves depending on where the birds are nesting. Don&apos;t guess — check the signage at the beach entrance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pinewoods */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Formby Pinewoods — Dog Walks</h2>
            <div className="space-y-4">
              {[
                {
                  area: "Main Pinewoods",
                  rule: "Off-lead fine",
                  desc: "The woodland paths through the pines are open to dogs. Wide paths, good surfaces, and enough space that your dog isn&apos;t going to bother anyone. A genuinely good walk for dogs that like trees and sniffs.",
                  badgeClass: "bg-[#E8EDE6] text-[#2E6B3E]",
                },
                {
                  area: "Red Squirrel Reserve Zone",
                  rule: "On leads required",
                  desc: "The signed squirrel reserve trail requires dogs to be on leads throughout. It&apos;s marked clearly from the car park. This isn&apos;t optional — keep your dog on lead through the entire reserve area.",
                  badgeClass: "bg-amber-100 text-amber-700",
                },
                {
                  area: "Beach Dunes",
                  rule: "Off-lead fine",
                  desc: "The dunes between the pinewoods and the beach are good off-lead territory. Mind the vegetation — the NT asks visitors to stick to paths to prevent dune erosion. Most dogs are fine if they&apos;re not tearing through everything.",
                  badgeClass: "bg-[#E8EDE6] text-[#2E6B3E]",
                },
              ].map(({ area, rule, desc, badgeClass }) => (
                <div key={area} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#1C3220]">{area}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-2 whitespace-nowrap ${badgeClass}`}>
                      {rule}
                    </span>
                  </div>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best walks */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Best Dog Walks in Formby</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  name: "Beach & Dunes Circuit",
                  time: "1–1.5 hours",
                  desc: "Park at L37 1YH, walk through pines to the beach, turn left or right along the sand, return through the dunes. Classic Formby walk. Dogs love the sand. Good recall essential — the beach is wide and open.",
                  rating: 5,
                },
                {
                  name: "Pinewoods Loop",
                  time: "45–60 mins",
                  desc: "Circular walk through the pinewoods from the car park. Good in all weathers — the tree canopy keeps you drier than the beach. On leads through the squirrel reserve section.",
                  rating: 4,
                },
                {
                  name: "Sefton Coastal Path (section)",
                  time: "1.5–2.5 hours",
                  desc: "Walk north or south along the Sefton Coastal Path. Flat, exposed to wind, brilliant views. Meets the beach regularly. You can make this as long or short as you want.",
                  rating: 4,
                },
              ].map(({ name, time, desc, rating }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-[#1C3220] mb-1">{name}</h3>
                  <p className="text-xs text-[#C9A96E] font-semibold mb-2">⏱️ {time}</p>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dog-friendly pubs */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Dog-Friendly Pubs & Cafés</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-6 max-w-2xl">
              A few places in Formby village genuinely welcome dogs rather than just tolerating them. Worth calling ahead if you&apos;re not sure — especially for table service restaurants.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  name: "The Sparrowhawk",
                  type: "Pub",
                  icon: Beer,
                  desc: "Dog-friendly in the bar and beer garden. Good pub food, proper pints, and the kind of place that won&apos;t make you feel awkward about bringing the dog in.",
                  dogNote: "Bar and beer garden",
                },
                {
                  name: "NT Café (Victoria Road)",
                  type: "Café",
                  icon: Coffee,
                  desc: "At the National Trust car park — dogs welcome outside in the outdoor seating area. Convenient for right after the walk. Decent coffee, good cake. It&apos;s not cheap but you&apos;re not paying for Greggs either.",
                  dogNote: "Outdoor seating",
                },
              ].map(({ name, type, icon: Icon, desc, dogNote }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#E8EDE6] rounded-xl flex items-center justify-center flex-none">
                      <Icon className="w-5 h-5 text-[#2E6B3E]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C3220]">{name}</h3>
                      <p className="text-xs text-[#C9A96E] font-semibold">{type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">{desc}</p>
                  <div className="bg-[#E8EDE6] rounded-lg p-2.5 text-xs text-[#1C3220]/70">
                    <span className="font-semibold text-[#1C3220]">Dogs welcome: </span>{dogNote}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#1C3220]/50 mt-4">
              Dog policies can change. Always worth calling ahead if you&apos;re planning a meal rather than just a drink.
            </p>
          </section>

          {/* Practical tips */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Practical Tips</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { emoji: "🅿️", title: "Parking", desc: "NT car park, L37 1YH. Download the NT app at home — no signal on site. Members free, non-members from £6." },
                { emoji: "🌊", title: "Tides", desc: "Formby Beach has significant tidal range. Check tide times before you go — low tide gives you the most beach. Don&apos;t get caught between the sea and steep dunes at high tide." },
                { emoji: "💧", title: "Water", desc: "The beach is sandy and can get warm in summer. Bring water for your dog — especially on longer walks through the dunes." },
                { emoji: "♻️", title: "Poo bags", desc: "Bins in the NT car park and at the beach entrance. Bring plenty. Fines apply for not picking up." },
                { emoji: "🦮", title: "Leads in the car park", desc: "Keep dogs on leads in the car park — other dogs, families, and cyclists all use the access road. Save the off-lead for the beach." },
                { emoji: "🐿️", title: "Red squirrels", desc: "If you walk the squirrel trail, dogs on leads throughout. Signs mark where this starts. The squirrels don&apos;t appreciate dog chaos below their trees." },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="text-2xl mb-2">{emoji}</div>
                  <h3 className="font-semibold text-[#1C3220] mb-2">{title}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "Are dogs allowed at Formby Beach all year?",
                  a: "Yes, with one exception. Between April and August, a section near the Little Tern nesting area has restrictions. It&apos;s clearly signed on arrival. Outside this zone and outside this period, dogs are welcome on the whole beach.",
                },
                {
                  q: "Does my dog need to be on a lead in the pinewoods?",
                  a: "On leads in the red squirrel reserve zone — clearly signed from the car park. In the wider pinewoods (outside the reserve), off-lead is fine. Use your judgement around other walkers and cyclists.",
                },
                {
                  q: "Is there anywhere to get water for my dog?",
                  a: "The NT café has outdoor seating where you can ask for water. Bring a collapsible bowl and a bottle on longer walks — especially in warmer months.",
                },
                {
                  q: "What's the best season to bring a dog to Formby?",
                  a: "Autumn and winter are excellent — the beach is quieter, the tide restrictions are off, and the pinewoods are genuinely beautiful in autumn. Summer works fine too but gets busy on weekends.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className="pt-10 border-t border-[#1C3220]/10">
            <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Related Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/formby-beach", label: "Formby Beach", desc: "Full guide to the beach — facilities, parking, what to expect." },
                { href: "/formby-pinewoods", label: "Formby Pinewoods", desc: "Walks, squirrels, and the best woodland routes." },
                { href: "/guides/parking-formby-beach", label: "Parking Guide", desc: "NT app, postcode, prices, and when it fills." },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all group"
                >
                  <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition-colors mb-1">{label}</h4>
                  <p className="text-sm text-[#1C3220]/60">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </>
    </GuideLayout>
  );
}
