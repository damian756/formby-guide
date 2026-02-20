import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormbyGuide.co.uk — Your Complete Guide to Formby",
  description:
    "Discover the best restaurants, beaches, walks and things to do in Formby. Your local guide to the National Trust pinewoods, red squirrels and the Sefton Coast.",
  alternates: { canonical: "https://www.formbyguide.co.uk" },
};

const CATEGORIES = [
  {
    slug: "formby-beach",
    name: "Formby Beach",
    description: "Sand dunes, sea air and one of the best beaches in the North West. Dogs welcome.",
    icon: "🏖️",
  },
  {
    slug: "red-squirrels-formby",
    name: "Red Squirrels",
    description: "One of the best places in England to spot red squirrels in the wild. Go early.",
    icon: "🐿️",
  },
  {
    slug: "formby-pinewoods",
    name: "Pinewoods",
    description: "Ancient National Trust pinewoods running down to the coast. Brilliant for a walk.",
    icon: "🌲",
  },
  {
    slug: "things-to-do",
    name: "Things To Do",
    description: "Activities and days out for families, couples, and dog walkers.",
    icon: "✅",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    description: "From relaxed village dining to proper treat evenings — Formby eats well.",
    icon: "🍽️",
  },
  {
    slug: "cafes",
    name: "Cafes",
    description: "Good coffee, decent cake, and somewhere to sit after a walk.",
    icon: "☕",
  },
  {
    slug: "pubs",
    name: "Pubs & Bars",
    description: "Post-walk pints and village locals worth knowing about.",
    icon: "🍺",
  },
  {
    slug: "accommodation",
    name: "Places to Stay",
    description: "B&Bs and holiday lets if you're making a proper trip of it.",
    icon: "🛏️",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C3220] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C3220] via-[#2E6B3E]/80 to-[#1C3220] opacity-90" />
        <div className="relative container mx-auto px-4 max-w-7xl py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
              <span>🌿</span>
              <span>Formby, Merseyside — Sefton Coast</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your guide to<br />
              <span className="text-[#C9A96E]">Formby</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Beach, pinewoods, red squirrels, and brilliant places to eat. Everything you need to make the most of Formby — from a local who actually knows it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/things-to-do"
                className="bg-[#C9A96E] hover:bg-[#b8944f] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Things To Do
              </Link>
              <Link
                href="/formby-beach"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors backdrop-blur-sm"
              >
                Formby Beach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-[#2E6B3E] text-white">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80 justify-center md:justify-start">
            <span>📍 L37 1YH — National Trust car park postcode</span>
            <span>🅿️ Parking from £6 via NT app</span>
            <span>🐕 Dogs welcome on the beach</span>
            <span>🐿️ Red squirrels year-round, best Sept–Feb</span>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="container mx-auto px-4 max-w-7xl py-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">Explore Formby</h2>
          <p className="text-[#1C3220]/60">Everything worth knowing, from someone who lives here.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group bg-white rounded-xl p-6 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-display font-bold text-[#1C3220] text-lg mb-1 group-hover:text-[#2E6B3E] transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-[#1C3220]/60 leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Red squirrel highlight */}
      <section className="bg-[#E8EDE6] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">🐿️</div>
              <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">
                See red squirrels in the wild
              </h2>
              <p className="text-[#1C3220]/70 leading-relaxed mb-4">
                Formby is one of the few places in England where you can reliably spot red squirrels. The National Trust pinewoods along Victoria Road are home to a thriving colony. Go early morning, wear layers, and bring binoculars if you've got them.
              </p>
              <p className="text-[#1C3220]/70 leading-relaxed mb-6">
                September through to February is peak season — but honestly you've got a good chance most of the year. Even my teenagers get excited when they spot one.
              </p>
              <Link
                href="/red-squirrels-formby"
                className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors"
              >
                Everything you need to know →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#1C3220]/10">
              <h3 className="font-display font-bold text-[#1C3220] text-xl mb-4">Planning your visit</h3>
              <ul className="space-y-3 text-sm text-[#1C3220]/70">
                <li className="flex gap-3"><span className="text-[#2E6B3E] font-bold shrink-0">📍</span><span><strong className="text-[#1C3220]">Postcode:</strong> L37 1YH (National Trust car park, Victoria Road)</span></li>
                <li className="flex gap-3"><span className="text-[#2E6B3E] font-bold shrink-0">🅿️</span><span><strong className="text-[#1C3220]">Parking:</strong> From £6 — book via the National Trust app before you leave. Signal is terrible on site.</span></li>
                <li className="flex gap-3"><span className="text-[#2E6B3E] font-bold shrink-0">⏰</span><span><strong className="text-[#1C3220]">Best time:</strong> Early morning, September to February</span></li>
                <li className="flex gap-3"><span className="text-[#2E6B3E] font-bold shrink-0">🐕</span><span><strong className="text-[#1C3220]">Dogs:</strong> Welcome — keep on a lead in the squirrel area</span></li>
                <li className="flex gap-3"><span className="text-[#2E6B3E] font-bold shrink-0">♿</span><span><strong className="text-[#1C3220]">Accessibility:</strong> Some accessible paths — check NT website for details</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants highlight */}
      <section className="container mx-auto px-4 max-w-7xl py-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">Where to eat in Formby</h2>
          <p className="text-[#1C3220]/60">Formby village eats well. Here are the ones worth booking.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Emily's Restaurant", desc: "Relaxed and popular. Gets busy — book ahead.", price: "££", slug: "emilys-formby" },
            { name: "Left Bank Brasserie", desc: "A proper treat. Worth it. Book for weekends.", price: "£££", slug: "left-bank-brasserie-formby" },
            { name: "The Sparrowhawk", desc: "Solid village dining with a loyal local crowd.", price: "££", slug: "the-sparrowhawk-formby" },
            { name: "Don Luigi", desc: "Italian, well-reviewed, plenty of regulars.", price: "££", slug: "don-luigi-formby" },
          ].map((r) => (
            <Link
              key={r.slug}
              href={`/restaurants/${r.slug}`}
              className="group bg-white rounded-xl p-6 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">🍽️</span>
                <span className="text-xs font-medium text-[#1C3220]/50 bg-[#E8EDE6] px-2 py-1 rounded">{r.price}</span>
              </div>
              <h3 className="font-display font-bold text-[#1C3220] mb-1 group-hover:text-[#2E6B3E] transition-colors">
                {r.name}
              </h3>
              <p className="text-sm text-[#1C3220]/60">{r.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/restaurants" className="text-[#2E6B3E] font-medium hover:text-[#1C3220] transition-colors">
            See all Formby restaurants →
          </Link>
        </div>
      </section>

      {/* CTA — list your business */}
      <section className="bg-[#1C3220] text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Got a business in Formby?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Get listed on FormbyGuide and put your business in front of visitors planning their trip to Formby.
          </p>
          <Link
            href="/claim-listing"
            className="inline-block bg-[#C9A96E] hover:bg-[#b8944f] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            List Your Business — Free
          </Link>
        </div>
      </section>
    </>
  );
}
