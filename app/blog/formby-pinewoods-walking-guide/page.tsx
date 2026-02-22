import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, AlertCircle, MapPin, TreePine } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Walking in Formby Pinewoods — Trail Guide, Tips & What to Bring | FormbyGuide",
  description: "Everything you need to walk the Formby Pinewoods. Trail options, terrain advice, what to wear, what to bring, and the local knowledge that makes the difference.",
  keywords: "Formby Pinewoods walking, Formby Pinewoods trails, walking Formby, National Trust Formby walk, Formby woodland walk",
  alternates: { canonical: `${BASE_URL}/blog/formby-pinewoods-walking-guide` },
  openGraph: {
    title: "Walking in Formby Pinewoods — Trail Guide & Local Tips",
    description: "Complete guide to walking Formby Pinewoods from a local who goes every week.",
    url: `${BASE_URL}/blog/formby-pinewoods-walking-guide`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: { card: "summary_large_image", title: "Walking in Formby Pinewoods", description: "Trails, tips and what to bring." },
};

const TRAILS = [
  {
    name: "The Squirrel Trail",
    duration: "45–60 min",
    difficulty: "Easy",
    distance: "~2km",
    color: "border-green-200 bg-green-50",
    badge: "Best for families",
    badgeColor: "bg-[#2E6B3E] text-white",
    desc: "The main circular trail through the core pinewood. Well-marked, mostly flat, designed to pass through areas of high squirrel activity. Perfect for families and first-time visitors.",
    highlights: ["Designated squirrel spotting areas", "Interpretation boards throughout", "Mostly firm underfoot"],
  },
  {
    name: "The Coast & Pines Route",
    duration: "2–2.5 hours",
    difficulty: "Moderate",
    distance: "~5km",
    color: "border-blue-200 bg-blue-50",
    badge: "Best views",
    badgeColor: "bg-blue-600 text-white",
    desc: "Extends the Squirrel Trail through the dune system to the beach and back. Sandy terrain through the dunes requires more effort. Rewarded with sea views and a proper walk.",
    highlights: ["Beach access included", "Dune system walk", "Sea views on clear days", "Combines woodland and coast"],
  },
  {
    name: "The Extended Pinewood Loop",
    duration: "3+ hours",
    difficulty: "Moderate",
    distance: "~8km",
    color: "border-amber-200 bg-amber-50",
    badge: "Best for walkers",
    badgeColor: "bg-amber-600 text-white",
    desc: "Uses the full extent of the trail network. Takes in quieter sections of the woodland that most visitors never reach. Download the map offline — signal can be patchy in the deeper woodland.",
    highlights: ["Quieter, less visited sections", "Most varied terrain", "Best for photography", "Proper navigation needed"],
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Walking in Formby Pinewoods — Trail Guide, Tips & What to Bring",
            description: "Everything you need to walk the Formby Pinewoods. Trail options, terrain advice, what to wear, what to bring, and the local knowledge that makes the difference.",
            url: "https://www.formbyguide.co.uk/blog/formby-pinewoods-walking-guide",
            author: { "@type": "Person", name: "Clare" },
            publisher: {
              "@type": "Organization",
              name: "FormbyGuide.co.uk",
              url: "https://www.formbyguide.co.uk",
            },
            datePublished: "2026-02-20",
            inLanguage: "en-GB",
          }),
        }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">Pinewoods Walking Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5C3A] via-[#1C3220] to-[#2E6B3E] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-16 -translate-x-16 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Walks · Formby Pinewoods
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Walking the Formby<br />
              <span className="text-[#C9A96E]">Pinewoods</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              The Pinewoods are genuinely one of the best things about living here. Ancient coastal woodland, red squirrels, dune systems and sea views — all within walking distance of Formby station. Here&apos;s how to make the most of it.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — walks here weekly</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 10, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <div className="bg-[#1C3220] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Managed by", value: "National Trust" },
              { label: "Parking", value: "L37 1YH" },
              { label: "Shortest trail", value: "45 minutes" },
              { label: "Entry", value: "Free (NT members) / £" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-sm">{value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] max-w-none mb-8">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                Formby Pinewoods is remarkable. A coastal plantation of Scots and Corsican pine that creates its own microclimate — warmer, quieter, and genuinely otherworldly compared to the exposed beach just metres away.
              </p>
              <p>
                I walk here at least once a week. Here&apos;s what I&apos;ve learned that the trail maps don&apos;t tell you.
              </p>
            </div>

            {/* NT sign photo */}
            <div className="not-prose relative w-full h-56 overflow-hidden rounded-2xl mb-10">
              <Image src="/nt-sign.webp" alt="National Trust Formby sign at the car park entrance" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">Victoria Road, L37 1YH — the main NT car park entrance</p>
            </div>

            {/* Terrain warning */}
            <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">What the brochure doesn&apos;t tell you about the terrain</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    The Pinewoods are sandy. Not &quot;a bit sandy&quot; — genuinely sandy. Trainers get filled with sand within ten minutes on the dune sections. Bring proper walking shoes or wellies. Your favourite white Nikes will not thank you.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>The Three Trail Options</h2>
            </div>

            {/* Trail cards */}
            <div className="not-prose space-y-5 my-6 mb-12">
              {TRAILS.map((t) => (
                <div key={t.name} className={`rounded-2xl border overflow-hidden ${t.color}`}>
                  <div className="px-6 pt-5 pb-4">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <div className="flex items-center gap-3">
                        <TreePine className="w-6 h-6 text-[#2E6B3E]" />
                        <div>
                          <h3 className="font-display text-lg font-bold text-[#1C3220]">{t.name}</h3>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-gray-500">{t.distance}</span>
                            <span className="text-xs text-gray-400">·</span>
                            <span className="text-xs text-gray-500">{t.duration}</span>
                            <span className="text-xs text-gray-400">·</span>
                            <span className="text-xs text-gray-500">{t.difficulty}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.badgeColor}`}>{t.badge}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.highlights.map(h => (
                        <span key={h} className="flex items-center gap-1 text-xs bg-white/60 text-[#1C3220] px-2.5 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-[#2E6B3E]" />{h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trail sign photo */}
            <div className="not-prose relative w-full h-52 overflow-hidden rounded-2xl mb-10">
              <Image src="/pinewoods-trail-sign.webp" alt="Trail signpost in Formby pinewoods" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">The trails are well signed — you won&apos;t need a map for the shorter loops</p>
            </div>

            {/* What to bring */}
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>What to Bring — The Full List</h2>
            </div>

            <div className="not-prose grid md:grid-cols-2 gap-4 my-6 mb-12">
              {[
                { category: "Essential", color: "bg-[#E8EDE6] border-[#2E6B3E]/20", items: ["Walking shoes or wellies (not trainers)", "Water — more than you think", "Snacks if going over 90 mins", "A layering jacket"], },
                { category: "Strongly recommended", color: "bg-blue-50 border-blue-200", items: ["Binoculars for squirrel spotting", "Downloaded offline map (signal patchy)", "Insect repellent May–September", "Change of socks — just trust me"], },
                { category: "With kids", color: "bg-amber-50 border-amber-200", items: ["Snacks and more snacks", "Small backpack they can carry themselves", "Wellies are non-negotiable", "Something to identify wildlife"], },
                { category: "Leave at home", color: "bg-red-50 border-red-200", items: ["White or light-coloured trainers", "Sandals or flip-flops", "Expectations of staying clean", "Noise (bluetooth speakers etc)"], },
              ].map(({ category, color, items }) => (
                <div key={category} className={`rounded-2xl border p-5 ${color}`}>
                  <p className="font-bold text-[#1C3220] text-sm mb-3">{category}</p>
                  <ul className="space-y-1.5">
                    {items.map(item => (
                      <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Fungus photo */}
            <div className="not-prose relative w-full h-52 overflow-hidden rounded-2xl mb-10">
              <Image src="/pinewoods-fungus.webp" alt="Fungus growing on a fallen log in Formby pinewoods" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">Autumn is brilliant for fungi — look out for them on fallen logs and at the base of the pines</p>
            </div>

            {/* Best time callout */}
            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <h3 className="font-display text-xl font-bold mb-4">When to Go</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: "Best time of day", val: "Early morning (before 9:30am). Still, quiet, best wildlife activity, beautiful light." },
                  { label: "Best season", val: "Spring and autumn. Spring for new growth and active squirrels. Autumn for colour and foraging wildlife." },
                  { label: "Best day of week", val: "Wednesday or Thursday morning. Quietest by far. Weekends can be genuinely busy." },
                  { label: "Avoid", val: "Saturday afternoons in summer. August bank holidays. Any time after heavy rain (boggy and slippery in places)." },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-white/80 text-sm">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Full Formby Pinewoods Guide</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Parking, facilities, opening times and everything else you need to plan your visit.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/formby-pinewoods" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Pinewoods Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/blog/red-squirrels-formby-spotting-guide" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">
                  Red Squirrel Spotting Tips
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-6">
              <div className="relative h-36 overflow-hidden">
                <Image src="/pinewoods-no-parking.webp" alt="No parking sign in Formby pinewoods" fill className="object-cover object-center" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-2 left-3 text-white text-xs drop-shadow">Don&apos;t park on Victoria Road — use the NT car park</p>
              </div>
              <div className="p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Getting There</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">By car</p>
                  <p className="text-sm text-gray-700 flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" />
                    National Trust Car Park, Victoria Road, Formby, L37 1YH
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">By train</p>
                  <p className="text-sm text-gray-700">Formby station (Merseyrail Northern Line). 20-minute walk to NT car park via Victoria Road.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Parking fee</p>
                  <p className="text-sm text-gray-700">Free for NT members. Non-members pay at machine. Typically £3–5 per day.</p>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-[#1C3220] text-sm mb-3">Also in the Pinewoods</p>
              <div className="space-y-2">
                {[
                  { label: "Red Squirrel Spotting Guide", href: "/blog/red-squirrels-formby-spotting-guide" },
                  { label: "Full Red Squirrels Guide", href: "/red-squirrels-formby" },
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#E8EDE6] border border-[#2E6B3E]/20 rounded-2xl p-5">
              <p className="font-bold text-[#1C3220] text-sm mb-2">🐿️ Squirrel spotting from the Pinewoods?</p>
              <p className="text-[#1C3220]/70 text-xs leading-relaxed mb-3">
                Read our separate guide on exactly when and where to spot red squirrels — including the timing mistakes most visitors make.
              </p>
              <Link href="/blog/red-squirrels-formby-spotting-guide" className="text-[#2E6B3E] font-bold text-xs hover:underline flex items-center gap-1">
                Red squirrel guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Author bio */}
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "How to See Red Squirrels", slug: "red-squirrels-formby-spotting-guide", cat: "Wildlife" },
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Half Term in Formby", slug: "things-to-do-formby-half-term", cat: "Family" },
            ].map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-[#F7F9F6] rounded-2xl border border-gray-100 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B3E]">{p.cat}</span>
                <h3 className="font-display font-bold text-[#1C3220] text-base mt-1 group-hover:text-[#2E6B3E] transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
