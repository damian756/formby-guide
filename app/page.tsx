import Link from "next/link";
import Image from "next/image";
import { TreePine, Waves, Utensils, Coffee, Beer, ShoppingBag, Bed, Bike, ChevronRight, Squirrel } from "lucide-react";
import type { Metadata } from "next";
import { BLOG_POSTS, getBlogCategory } from "@/lib/blog-posts";
import AdSlot from "@/components/AdSlot";

// Re-render hourly so a home page advert drops off when its end date passes.
export const revalidate = 3600;

// Newest three posts by date, so the home page never shows last season's posts.
const LATEST_POSTS = [...BLOG_POSTS]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export const metadata: Metadata = {
  title: "FormbyGuide.co.uk: Your Local Guide to Formby",
  description:
    "A local guide to Formby: the beach, the pinewoods, red squirrels, where to eat and things to do on the Sefton Coast.",
  keywords: "Formby, Formby Beach, Formby pinewoods, red squirrels Formby, things to do Formby, restaurants Formby, Sefton Coast",
  alternates: { canonical: "https://www.formbyguide.co.uk" },
  openGraph: {
    title: "FormbyGuide.co.uk: Your Local Guide to Formby",
    description: "A guide to Formby on the Sefton Coast: the beach, the pinewoods, red squirrels and places to eat.",
    url: "https://www.formbyguide.co.uk",
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: "https://www.formbyguide.co.uk/formby-beach-hero.jpg", width: 1200, height: 630, alt: "Formby Beach: sand dunes and the Irish Sea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FormbyGuide.co.uk: Your Local Guide to Formby",
    description: "Beach, pinewoods, red squirrels and places to eat in Formby.",
    images: ["https://www.formbyguide.co.uk/formby-beach-hero.jpg"],
  },
};

const CATEGORIES = [
  { slug: "nature-walks",  label: "Nature & Walks",  icon: TreePine,   gradient: "from-[#1C3220] to-[#2E6B3E]", light: "#E8EDE6" },
  { slug: "beaches",       label: "Beaches",          icon: Waves,      gradient: "from-[#1C4A5A] to-[#2E7A9A]", light: "#E6EFF5" },
  { slug: "restaurants",   label: "Restaurants",      icon: Utensils,   gradient: "from-[#5C1A1A] to-[#8B3A3A]", light: "#F5E8E8" },
  { slug: "cafes",         label: "Cafes",            icon: Coffee,     gradient: "from-[#5C3A1A] to-[#8B6040]", light: "#F5EEE8" },
  { slug: "pubs",          label: "Pubs & Bars",      icon: Beer,       gradient: "from-[#1A2E5C] to-[#2A4A8B]", light: "#E8EEF5" },
  { slug: "activities",    label: "Activities",       icon: Bike,       gradient: "from-[#1A5C3A] to-[#2E8B5A]", light: "#E8F5EE" },
  { slug: "accommodation", label: "Places to Stay",   icon: Bed,        gradient: "from-[#3A1A5C] to-[#5A2E8B]", light: "#EEE8F5" },
  { slug: "shopping",      label: "Shopping",         icon: ShoppingBag,gradient: "from-[#5C1A3A] to-[#8B3A6A]", light: "#F5E8EE" },
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
                description: "Your local guide to Formby: beach, pinewoods, red squirrels, restaurants and things to do on the Sefton Coast.",
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
          HERO: SPLIT LAYOUT (image left, nav right)
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

            <p className="text-[#C9A96E]/80 text-xs font-semibold uppercase tracking-widest mb-4">
              Formby, Merseyside
            </p>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
              Welcome to<br />
              <span className="text-[#C9A96E]">Formby.</span>
            </h1>

            <p className="text-white/60 text-sm md:text-base mb-7 leading-relaxed max-w-sm">
              I'm Clare. I live here, and this is the honest guide to our beach, the pinewoods, spotting the red squirrels, and where to actually get a decent coffee afterwards.
            </p>

            {/* Red squirrel highlight card */}
            <Link
              href="/red-squirrels-formby"
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A96E]/40 rounded-2xl p-4 mb-5 flex items-center gap-4 transition-all self-start w-full max-w-xs"
            >
              <div className="text-center flex-none">
                <Squirrel className="w-8 h-8 text-[#C9A96E]" aria-hidden="true" />
              </div>
              <div className="w-px h-10 bg-white/10 flex-none" />
              <div className="min-w-0">
                <div className="text-white font-bold text-sm group-hover:text-[#C9A96E] transition-colors">Red Squirrel Reserve</div>
                <div className="text-white/50 text-xs mt-0.5">National Trust · Victoria Road</div>
                <div className="text-[#C9A96E] text-xs mt-1.5">Plan your visit →</div>
              </div>
            </Link>

            {/* Quick links */}
            <div className="mb-6 w-full max-w-xs">
              <p className="text-white/35 text-[10px] uppercase tracking-widest mb-2">Quick links</p>
              <div className="space-y-2">
                {[
                  { href: "/formby-beach", label: "Formby Beach", sub: "Parking · L37 1LJ · Dogs welcome" },
                  { href: "/formby-pinewoods", label: "Formby Pinewoods", sub: "Walks · Pinewoods on the dunes" },
                  { href: "/things-to-do", label: "Things To Do", sub: "A day in Formby, planned" },
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
                  <cat.icon className="w-4 h-4 text-white/70 group-hover:text-[#C9A96E] transition-colors" aria-hidden="true" />
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
            <Link href="/formby-beach#parking" className="hover:text-white hover:underline transition">Victoria Road car park: L37 1LJ</Link>
            <Link href="/guides/parking-formby-beach" className="hover:text-white hover:underline transition">Pay at the machine or with JustPark</Link>
            <span>Dogs welcome on the beach year-round</span>
            <Link href="/red-squirrels-formby" className="hover:text-white hover:underline transition">Red squirrels: best Sept to Feb</Link>
            <span>Merseyrail trains every 15 minutes</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY BROWSE
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Explore Formby</h2>
          <p className="text-[#1C3220]/50 text-sm">Walks, beaches, places to eat and places to stay.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group rounded-xl p-5 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
              style={{ backgroundColor: cat.light }}
            >
              <cat.icon className="w-7 h-7 mb-3 text-[#2E6B3E]" aria-hidden="true" />
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
              <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">
                See red squirrels in the wild
              </h2>
              <p className="text-[#1C3220]/70 leading-relaxed mb-3">
                Formby is one of the last reliable places in England to see red squirrels. The National Trust pinewoods on Victoria Road are home to a thriving colony: go early morning, September through February is the best window, but you&apos;ve got a decent chance year-round.
              </p>
              <p className="text-[#1C3220]/70 leading-relaxed mb-6">
                Even my teenagers stop moaning the moment they spot one.
              </p>
              <Link
                href="/red-squirrels-formby"
                className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1C3220] transition-colors text-sm"
              >
                Full guide: where, when & what to bring →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#1C3220]/10">
              <h3 className="font-display font-bold text-[#1C3220] text-lg mb-4">Planning your visit</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Postcode", val: "L37 1LJ (NT Victoria Road car park)" },
                  { label: "Parking", val: "Pay at the machine or with the JustPark app. National Trust members park free." },
                  { label: "Best time", val: "Early morning, September to February" },
                  { label: "Dogs", val: "Welcome. On a lead where signs ask, under close control everywhere." },
                  { label: "By train", val: "Freshfield station, then west along Victoria Road" },
                ].map((r) => (
                  <li key={r.label}>
                    <strong className="text-[#1C3220]">{r.label}:</strong> <span className="text-[#1C3220]/60">{r.val}</span>
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
            <p className="text-[#1C3220]/50 text-sm">Some of the places to eat in and around the village, described from their own websites. The directory lists them all.</p>
          </div>
          <Link href="/restaurants" className="text-sm font-medium text-[#2E6B3E] hover:text-[#1C3220] transition-colors hidden sm:block">
            See all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Don Luigi",        desc: "Italian restaurant with pizza, a grill menu and small plates. Church Road.", slug: "don-luigi-formby" },
            { name: "Emily's",          desc: "Brunch from 9am every day and an à la carte menu on Monday to Saturday evenings. Brows Lane.",  slug: "emilys-formby" },
            { name: "Sorrento",         desc: "Family-run Italian restaurant, in Formby since 2009, with outdoor seating. Three Tuns Lane.", slug: "sorrento" },
            { name: "The Sparrowhawk",  desc: "A Brunning & Price pub in a country house with five acres of woods and parkland. Southport Old Road.", slug: "the-sparrowhawk-formby" },
          ].map((r) => (
            <Link
              key={r.slug}
              href={`/restaurants/${r.slug}`}
              className="group bg-white rounded-xl p-5 border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className="mb-3">
                <Utensils className="w-5 h-5 text-[#8B3A3A]" aria-hidden="true" />
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
                icon: Waves,
                title: "Formby Beach",
                desc: "Flat sand below high dunes, and dogs welcome all year. Park at Victoria Road (L37 1LJ) or Lifeboat Road (L37 2EB), or come by train on a sunny day.",
                href: "/formby-beach",
                cta: "Beach guide →",
              },
              {
                icon: TreePine,
                title: "Formby Pinewoods",
                desc: "Pinewoods running down to the coast. Walk through them to the beach, or just do the squirrel trail loop: 30 minutes, flat all the way.",
                href: "/formby-pinewoods",
                cta: "Pinewoods guide →",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C9A96E]/30 rounded-2xl p-7 transition-all"
              >
                <card.icon className="w-8 h-8 mb-3 text-[#C9A96E]" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#C9A96E] transition-colors">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{card.desc}</p>
                <span className="text-[#C9A96E] text-sm font-medium">{card.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BLOG: LATEST POSTS
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 max-w-7xl py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Local guides & stories</h2>
            <p className="text-[#1C3220]/50 text-sm">The newest posts from the blog.</p>
          </div>
          <Link href="/blog" className="text-sm font-medium text-[#2E6B3E] hover:text-[#1C3220] transition-colors hidden sm:block">
            All posts →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LATEST_POSTS.map((p) => ({
            title: p.title,
            excerpt: p.excerpt,
            cat: p.sponsor ? "Sponsored" : getBlogCategory(p.categorySlug)?.label ?? "Blog",
            image: p.image,
            slug: p.slug,
          })).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#1C3220]/8 card-hover hover:border-[#2E6B3E]/30 transition-all"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8EDE6]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
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
          HOME PAGE ADVERT (lib/ad-slots.ts)
      ══════════════════════════════════════════ */}
      <div className="container mx-auto px-4 max-w-5xl pb-14">
        <AdSlot id="home-card" />
      </div>

      {/* ══════════════════════════════════════════
          GALLERY STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-[#E8EDE6]">
        <div className="container mx-auto px-4 max-w-7xl py-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-1">Photos from Formby</h2>
              <p className="text-[#1C3220]/50 text-sm">Real shots: no stock, no AI. All taken locally.</p>
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
            List Your Business for Free
          </Link>
        </div>
      </section>

    </div>
  );
}
