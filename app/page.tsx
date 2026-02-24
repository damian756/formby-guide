import Link from "next/link";
import Image from "next/image";
import { TreePine, Waves, Utensils, Coffee, Beer, ShoppingBag, Bed, Bike, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormbyGuide.co.uk — Your Local Guide to Formby",
  description:
    "Your definitive guide to Formby — beach, pinewoods, red squirrels, restaurants and things to do on the Sefton Coast. Written by locals, for visitors and residents.",
  keywords: "Formby, Formby Beach, Formby pinewoods, red squirrels Formby, things to do Formby, restaurants Formby, Sefton Coast",
  alternates: { canonical: "https://www.formbyguide.co.uk" },
  openGraph: {
    title: "FormbyGuide.co.uk — Your Local Guide to Formby",
    description: "Your definitive guide to Formby — beach, pinewoods, red squirrels and the best places to eat on the Sefton Coast.",
    url: "https://www.formbyguide.co.uk",
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: "https://www.formbyguide.co.uk/formby-beach-hero.jpg", width: 1200, height: 630, alt: "Formby Beach — sand dunes and the Irish Sea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FormbyGuide.co.uk — Your Local Guide to Formby",
    description: "Beach, pinewoods, red squirrels and the best places to eat in Formby.",
    images: ["https://www.formbyguide.co.uk/formby-beach-hero.jpg"],
  },
};

const CATEGORIES = [
  { slug: "nature-walks",  label: "Nature & Walks",  icon: TreePine,   emoji: "🌲", gradient: "from-[#1C3220] to-[#2E6B3E]", light: "#E8EDE6" },
  { slug: "beaches",       label: "Beaches",          icon: Waves,      emoji: "🏖️", gradient: "from-[#1C4A5A] to-[#2E7A9A]", light: "#E6EFF5" },
  { slug: "restaurants",   label: "Restaurants",      icon: Utensils,   emoji: "🍽️", gradient: "from-[#5C1A1A] to-[#8B3A3A]", light: "#F5E8E8" },
  { slug: "cafes",         label: "Cafes",            icon: Coffee,     emoji: "☕", gradient: "from-[#5C3A1A] to-[#8B6040]", light: "#F5EEE8" },
  { slug: "pubs",          label: "Pubs & Bars",      icon: Beer,       emoji: "🍺", gradient: "from-[#1A2E5C] to-[#2A4A8B]", light: "#E8EEF5" },
  { slug: "activities",    label: "Activities",       icon: Bike,       emoji: "🚴", gradient: "from-[#1A5C3A] to-[#2E8B5A]", light: "#E8F5EE" },
  { slug: "accommodation", label: "Places to Stay",   icon: Bed,        emoji: "🛏️", gradient: "from-[#3A1A5C] to-[#5A2E8B]", light: "#EEE8F5" },
  { slug: "shopping",      label: "Shopping",         icon: ShoppingBag,emoji: "🛍️", gradient: "from-[#5C1A3A] to-[#8B3A6A]", light: "#F5E8EE" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.formbyguide.co.uk/#website",
                url: "https://www.formbyguide.co.uk",
                name: "FormbyGuide.co.uk",
                description: "Your local guide to Formby — beach, pinewoods, red squirrels, restaurants and things to do on the Sefton Coast.",
                publisher: { "@id": "https://www.formbyguide.co.uk/#organization" },
                inLanguage: "en-GB",
              },
              {
                "@type": "Organization",
                "@id": "https://www.formbyguide.co.uk/#organization",
                name: "FormbyGuide.co.uk",
                url: "https://www.formbyguide.co.uk",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.formbyguide.co.uk/og-default.png",
                  width: 1200,
                  height: 630,
                },
                sameAs: [
                  "https://www.southportguide.co.uk",
                  "https://www.seftonlinks.com",
                  "https://seftoncoastwildlife.co.uk",
                  "https://seftoncoast.network",
                  "https://www.linkedin.com/company/churchtownmedia",
                  "https://churchtownmedia.co.uk",
                ],
              },
            ],
          }),
        }}
      />

      {/* ══════════════════════════════════════════
          HERO — SPLIT LAYOUT (image left, nav right)
      ══════════════════════════════════════════ */}
      <section className="bg-[#1C3220] overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

        <div className="flex flex-col md:flex-row md:min-h-[580px]">

          {/* LEFT: Hero image */}
          <div className="relative w-full h-64 sm:h-80 md:h-auto md:flex-none md:w-[58%] overflow-hidden">
            <Image
              src="/formby-squirrel-hero.webp"
              alt="Red squirrel at the Formby Red Squirrel Reserve, National Trust"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              quality={90}
              className="object-cover object-center"
            />
            {/* Fade into right panel on desktop */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1C3220]" />
            {/* Fade down on mobile */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C3220]" />
          </div>

          {/* RIGHT: Content panel */}
          <div className="flex-1 flex flex-col justify-center px-6 py-10 md:px-10 md:py-12">

            <div className="inline-flex items-center gap-2 bg-[#2E6B3E]/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-400/25 mb-5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Formby, Merseyside
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Your Local Guide<br />
              <span className="text-[#C9A96E]">to Formby.</span>
            </h1>

            <p className="text-white/60 text-sm md:text-base mb-7 leading-relaxed max-w-sm">
              Red squirrels, the National Trust beach, pinewoods walks, and the best places to eat in the village — from someone who actually lives here.
            </p>

            {/* Red squirrel highlight card */}
            <Link
              href="/red-squirrels-formby"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A96E]/40 rounded-2xl p-4 mb-5 flex items-center gap-4 transition-all self-start w-full max-w-xs"
            >
              <div className="text-center flex-none">
                <div className="text-4xl leading-none">🐿️</div>
              </div>
              <div className="w-px h-10 bg-white/10 flex-none" />
              <div className="min-w-0">
                <div className="text-white font-bold text-sm group-hover:text-[#C9A96E] transition-colors">Red Squirrel Reserve</div>
                <div className="text-white/50 text-xs mt-0.5">🌲 National Trust · Victoria Road</div>
                <div className="text-[#C9A96E] text-xs mt-1.5">Plan your visit →</div>
              </div>
            </Link>

            {/* Quick links */}
            <div className="mb-6 w-full max-w-xs">
              <p className="text-white/35 text-[10px] uppercase tracking-widest mb-2">Quick links</p>
              <div className="space-y-2">
                {[
                  { href: "/formby-beach", label: "Formby Beach", sub: "🏖️ Parking · L37 1YH · Dogs welcome" },
                  { href: "/formby-pinewoods", label: "Formby Pinewoods", sub: "🌲 Walks · Ancient coastal woodland" },
                  { href: "/things-to-do", label: "Things To Do", sub: "✅ Full guide to a day in Formby" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl px-3 py-2.5 transition-all border border-white/5 hover:border-white/15"
                  >
                    <div>
                      <div className="text-white text-xs font-semibold group-hover:text-[#C9A96E] transition-colors">{link.label}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{link.sub}</div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C9A96E] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-4 gap-1.5 w-full max-w-xs">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group flex flex-col items-center gap-1 bg-white/5 hover:bg-white/10 rounded-xl p-2 transition-all border border-white/5 hover:border-[#C9A96E]/30"
                  title={cat.label}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  <span className="text-[9px] text-white/50 group-hover:text-white/80 transition-colors text-center leading-tight">{cat.label.split(" ")[0]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK FACTS STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-[#2E6B3E] text-white">
        <div className="container mx-auto px-4 max-w-7xl py-3">
          <div className="flex flex-wrap gap-x-8 gap-y-1.5 text-sm text-white/80 justify-center md:justify-start">
            <span>📍 L37 1YH — NT car park postcode</span>
            <span>🅿️ Parking from £6 via NT app</span>
            <span>🐕 Dogs welcome on the beach year-round</span>
            <span>🐿️ Red squirrels — best Sept to Feb</span>
            <span>🚆 30 mins from Liverpool Central (Merseyrail)</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY BROWSE
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Explore Formby</h2>
          <p className="text-[#1C3220]/50 text-sm">Everything worth knowing, from someone who lives here.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group rounded-xl p-5 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
              style={{ backgroundColor: cat.light }}
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <div className="font-display font-bold text-[#1C3220] text-sm group-hover:text-[#2E6B3E] transition-colors">
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RED SQUIRREL FEATURE
      ══════════════════════════════════════════ */}
      <section className="bg-[#E8EDE6]">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-4xl mb-3">🐿️</div>
              <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">
                See red squirrels in the wild
              </h2>
              <p className="text-[#1C3220]/70 leading-relaxed mb-3">
                Formby is one of the last reliable places in England to see red squirrels. The National Trust pinewoods on Victoria Road are home to a thriving colony — go early morning, September through February is the best window, but you&apos;ve got a decent chance year-round.
              </p>
              <p className="text-[#1C3220]/70 leading-relaxed mb-6">
                Even my teenagers stop moaning the moment they spot one.
              </p>
              <Link
                href="/red-squirrels-formby"
                className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors text-sm"
              >
                Full guide — where, when & what to bring →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#1C3220]/10">
              <h3 className="font-display font-bold text-[#1C3220] text-lg mb-4">Planning your visit</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { icon: "📍", label: "Postcode", val: "L37 1YH (NT Victoria Road car park)" },
                  { icon: "🅿️", label: "Parking", val: "From £6 — book via NT app before you leave. No signal on site." },
                  { icon: "⏰", label: "Best time", val: "Early morning, September to February" },
                  { icon: "🐕", label: "Dogs", val: "Welcome — on leads in the squirrel reserve" },
                  { icon: "🚆", label: "By train", val: "Formby station (Merseyrail) → 20 min walk" },
                ].map((r) => (
                  <li key={r.label} className="flex gap-3">
                    <span className="shrink-0">{r.icon}</span>
                    <span><strong className="text-[#1C3220]">{r.label}:</strong> <span className="text-[#1C3220]/60">{r.val}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED RESTAURANTS
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Where to eat in Formby</h2>
            <p className="text-[#1C3220]/50 text-sm">Formby village eats well. Here are the ones worth booking.</p>
          </div>
          <Link href="/restaurants" className="text-sm font-medium text-[#2E6B3E] hover:text-[#1C3220] transition-colors hidden sm:block">
            See all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Emily's Restaurant",    desc: "Relaxed and popular. Gets busy — book ahead.", price: "££",  slug: "emilys-formby" },
            { name: "Left Bank Brasserie",   desc: "A proper treat. Worth it. Book for weekends.",  price: "£££", slug: "left-bank-brasserie-formby" },
            { name: "The Sparrowhawk",       desc: "Solid village dining, loyal local crowd.",       price: "££",  slug: "the-sparrowhawk-formby" },
            { name: "Don Luigi",             desc: "Italian, well-reviewed, plenty of regulars.",    price: "££",  slug: "don-luigi-formby" },
          ].map((r) => (
            <Link
              key={r.slug}
              href={`/restaurants/${r.slug}`}
              className="group bg-white rounded-xl p-5 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">🍽️</span>
                <span className="text-xs font-medium text-[#1C3220]/50 bg-[#E8EDE6] px-2 py-1 rounded">{r.price}</span>
              </div>
              <h3 className="font-display font-bold text-[#1C3220] mb-1 text-sm group-hover:text-[#2E6B3E] transition-colors">
                {r.name}
              </h3>
              <p className="text-xs text-[#1C3220]/60">{r.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 sm:hidden text-center">
          <Link href="/restaurants" className="text-sm text-[#2E6B3E] font-medium">See all Formby restaurants →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BEACH + PINEWOODS 2-COL STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-[#1C3220] text-white">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🏖️",
                title: "Formby Beach",
                desc: "Wide, wild and brilliant. Sand dunes, sea, and dogs welcome year-round. The postcode is L37 1YH — book NT parking before you leave.",
                href: "/formby-beach",
                cta: "Beach guide →",
              },
              {
                emoji: "🌲",
                title: "Formby Pinewoods",
                desc: "Ancient pinewoods running down to the coast. Walk through them to the beach, or just do the squirrel trail loop — 30 minutes, flat all the way.",
                href: "/formby-pinewoods",
                cta: "Pinewoods guide →",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A96E]/30 rounded-2xl p-7 transition-all"
              >
                <div className="text-4xl mb-3">{card.emoji}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#C9A96E] transition-colors">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{card.desc}</p>
                <span className="text-[#C9A96E] text-sm font-medium">{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BLOG — LATEST POSTS
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Local guides & stories</h2>
            <p className="text-[#1C3220]/50 text-sm">Written by locals, for visitors and residents.</p>
          </div>
          <Link href="/blog" className="text-sm font-medium text-[#2E6B3E] hover:text-[#1C3220] transition-colors hidden sm:block">
            All posts →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Half Term in Formby — What Actually Works",
              excerpt: "Four kids, five days, limited budget. Honest tips from someone who&apos;s done it many times.",
              cat: "Family",
              gradient: "from-[#1C3220] to-[#2E6B3E]",
              slug: "things-to-do-formby-half-term",
            },
            {
              title: "How to Actually See Red Squirrels",
              excerpt: "Yes, they live here. But turn up at 2pm on a Saturday and you&apos;ll see nothing. Here&apos;s what locals know.",
              cat: "Wildlife",
              gradient: "from-[#6B4020] to-[#A8764A]",
              slug: "red-squirrels-formby-spotting-guide",
            },
            {
              title: "Walking the Formby Pinewoods",
              excerpt: "Trail options, what to wear, and the terrain mistake most visitors make on their first visit.",
              cat: "Walks",
              gradient: "from-[#1A5C3A] to-[#2E8B5A]",
              slug: "formby-pinewoods-walking-guide",
            },
          ].map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className={`h-32 w-full bg-gradient-to-br ${post.gradient}`} />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B3E] mb-2">{post.cat}</span>
                <h3 className="font-display font-bold text-[#1C3220] text-sm leading-snug group-hover:text-[#2E6B3E] transition-colors mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-[#1C3220]/50 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 sm:hidden text-center">
          <Link href="/blog" className="text-sm text-[#2E6B3E] font-medium">Read all posts →</Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-[#E8EDE6]">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Photos from Formby</h2>
              <p className="text-[#1C3220]/50 text-sm">Real shots — no stock, no AI. All taken locally.</p>
            </div>
            <Link href="/gallery" className="text-sm font-medium text-[#2E6B3E] hover:text-[#1C3220] transition-colors hidden sm:block">
              Full gallery →
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              { src: "/formby-beach-hero.jpg",       alt: "Formby Beach" },
              { src: "/pinewoods-deep-woodland.webp", alt: "Formby pinewoods" },
              { src: "/squirrel-walk.webp",          alt: "Squirrel trail in Formby pinewoods" },
              { src: "/natterjack-pond.webp",         alt: "Natterjack toad pond" },
              { src: "/beach-horses-ainsdale.webp",   alt: "Horses on Ainsdale Beach" },
              { src: "/pinewoods-acorn.webp",         alt: "Acorn on the woodland floor" },
              { src: "/beach-dunes-new.webp",         alt: "Formby sand dunes" },
              { src: "/pinewoods-fungus-moss.webp",   alt: "Fungi in the pinewoods" },
              { src: "/beach-birds.webp",             alt: "Birds on Formby Beach" },
              { src: "/pinewoods-tall-tree.webp",     alt: "Scots pine" },
              { src: "/nt-formby-sign.webp",          alt: "National Trust Formby" },
              { src: "/beach-dunes-skull.webp",       alt: "Wild dunes" },
            ].map((img) => (
              <Link
                key={img.src}
                href="/gallery"
                className="group relative aspect-square overflow-hidden rounded-xl block"
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center sm:hidden">
            <Link href="/gallery" className="text-sm text-[#2E6B3E] font-medium">Browse the full gallery →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LIST YOUR BUSINESS CTA
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="bg-[#E8EDE6] rounded-2xl p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">Got a business in Formby?</h2>
          <p className="text-[#1C3220]/60 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            Get listed on FormbyGuide and put your business in front of visitors planning their trip. Free to list, premium options available.
          </p>
          <Link
            href="/claim-listing"
            className="inline-block bg-[#2E6B3E] hover:bg-[#1C3220] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            List Your Business — Free
          </Link>
        </div>
      </section>

    </div>
  );
}
