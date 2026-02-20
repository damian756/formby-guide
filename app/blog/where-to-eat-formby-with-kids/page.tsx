import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, Star, CheckCircle, AlertCircle, Utensils } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Best Restaurants in Formby for Families — Honest Review | FormbyGuide",
  description: "A local mum of four reviews where to eat in Formby with kids. Honest assessments of family-friendly restaurants, cafes and pubs — not a sponsored round-up.",
  keywords: "restaurants Formby families, where to eat Formby kids, family friendly restaurants Formby, Formby dining kids menu",
  alternates: { canonical: `${BASE_URL}/blog/where-to-eat-formby-with-kids` },
  openGraph: {
    title: "Best Restaurants in Formby for Families",
    description: "Honest reviews of family-friendly dining in Formby from a mum of four.",
    url: `${BASE_URL}/blog/where-to-eat-formby-with-kids`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: { card: "summary_large_image", title: "Best Restaurants in Formby for Families", description: "Where to actually eat in Formby with kids." },
};

const RESTAURANTS = [
  {
    name: "The Sparrowhawk",
    tag: "Best Overall",
    tagColor: "bg-[#2E6B3E] text-white",
    rating: 5,
    price: "££",
    summary: "The best family restaurant in Formby. Proper food, a children's menu that kids actually want to eat, and staff who genuinely understand what family dining looks like.",
    pros: ["Kids menu with real food, not just nuggets", "Patient, warm staff", "Good wine list for the adults", "Doesn't feel chaotic even when busy"],
    cons: ["Booking recommended at weekends", "Can get warm in summer"],
    bestFor: "Sit-down family lunches or weekend dinners",
    link: "/restaurants/the-sparrowhawk-formby",
  },
  {
    name: "Local Independent Cafes",
    tag: "Best Casual",
    tagColor: "bg-amber-600 text-white",
    rating: 4,
    price: "£",
    summary: "Formby's independent cafes are genuinely relaxed about children. Order a proper coffee, get cake for the kids, sit down. No pressure, no rushing. This is community dining.",
    pros: ["Low pressure atmosphere", "Often dog-friendly too", "Great for coffee while kids eat", "Reasonable prices"],
    cons: ["Limited hot food options at some", "Smaller spaces"],
    bestFor: "Mid-morning stops, post-beach cake",
    link: "/cafes",
  },
  {
    name: "Pubs with Food",
    tag: "Hit & Miss",
    tagColor: "bg-blue-600 text-white",
    rating: 3,
    price: "£–££",
    summary: "Some Formby pubs are great for families at lunchtime. Others have a vibe that's clearly adult-focused. Check before you go — look for 'family friendly' in recent reviews.",
    pros: ["Often serve earlier lunches", "Garden spaces in summer", "Kids menus available at many"],
    cons: ["Evening atmosphere not always family-friendly", "Variable quality kitchen to kitchen"],
    bestFor: "Weekend lunch only — avoid evening with kids",
    link: "/pubs",
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
            headline: "Best Restaurants in Formby for Families — Honest Review",
            description: "A local mum of four reviews where to eat in Formby with kids. Honest assessments of family-friendly restaurants, cafes and pubs — not a sponsored round-up.",
            url: "https://www.formbyguide.co.uk/blog/where-to-eat-formby-with-kids",
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
            <span className="text-[#1C3220] font-medium">Restaurants for Families</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5C1A1A] via-[#8B3A3A] to-[#6B2020] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Food · Family Dining
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Best Restaurants in Formby<br />
              <span className="text-[#C9A96E]">for Families</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Four kids. Fussy eaters. A limited budget for disasters. After years of family dining in Formby, here&apos;s what actually works — and what I&apos;d avoid with children in tow.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local, mum of 4</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 15, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#5C1A1A] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Years experience", value: "6+" },
              { label: "Kids tested", value: "4" },
              { label: "Average budget", value: "£15–25pp" },
              { label: "Honest rating", value: "Not sponsored" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-lg">{value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] max-w-none mb-10">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                Eating out with kids isn&apos;t what it was before kids. You&apos;re not looking for atmosphere and clever cocktails. You&apos;re looking for places where someone spills a drink and nobody gives you a death stare.
              </p>
              <p>
                Formby isn&apos;t overrun with restaurants, but what&apos;s here is genuinely good. You just need to know which places understand families and which ones are better saved for a babysitter night.
              </p>
            </div>

            {/* Restaurant cards */}
            <div className="not-prose space-y-6 mb-12">
              {RESTAURANTS.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F5E8E8] flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-[#8B3A3A]" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-[#1C3220]">{r.name}</h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                              ))}
                            </div>
                            <span className="text-gray-400 text-xs">{r.price}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${r.tagColor}`}>{r.tag}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{r.summary}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-0 border-t border-gray-100">
                    <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What&apos;s great</p>
                      <ul className="space-y-1.5">
                        {r.pros.map(p => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0 mt-0.5" />{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Worth knowing</p>
                      <ul className="space-y-1.5 mb-4">
                        {r.cons.map(c => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />{c}
                          </li>
                        ))}
                      </ul>
                      <div className="bg-[#E8EDE6] rounded-xl px-3 py-2">
                        <p className="text-[10px] uppercase tracking-wider text-[#2E6B3E] font-bold mb-0.5">Best for</p>
                        <p className="text-sm text-[#1C3220]">{r.bestFor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <Link href={r.link} className="inline-flex items-center gap-2 text-[#2E6B3E] font-bold text-sm hover:text-[#1C3220] transition">
                      View full listing <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* The honest take */}
            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <h3 className="font-display text-xl font-bold mb-4">The Money Reality</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                Four kids eating out is expensive. Two mains, four kids&apos; meals, four drinks, and possibly four puddings — you&apos;re easily at £70–90 for a sit-down meal. That&apos;s real money.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-5">
                {[
                  { label: "Save money", tip: "Go for lunch not dinner. Most places are cheaper at lunch and quieter too." },
                  { label: "Worth the splurge", tip: "The Sparrowhawk. Quality is high enough that it doesn't feel like wasted money." },
                ].map(({ label, tip }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-4">
                    <p className="text-[#C9A96E] font-bold text-xs uppercase tracking-wider mb-2">{label}</p>
                    <p className="text-white/75 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Browse All Formby Restaurants</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Reviews, ratings, hygiene scores and contact details in one place.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/restaurants" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Restaurants <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/cafes" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">
                  Cafes & Coffee
                </Link>
                <Link href="/pubs" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">
                  Pubs & Bars
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Reference</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">For a family lunch</p>
                  <p className="text-sm font-semibold text-[#2E6B3E]">The Sparrowhawk → first choice</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Post-beach cake stop</p>
                  <p className="text-sm font-semibold text-[#2E6B3E]">Local independent cafes</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Budget tip</p>
                  <p className="text-sm text-gray-700">Go for lunch over dinner. Same quality, lower price, quieter.</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Also worth looking at</p>
                  <div className="space-y-2">
                    {[
                      { label: "Things to do with kids", href: "/blog/things-to-do-formby-half-term" },
                      { label: "Formby Beach guide", href: "/formby-beach" },
                    ].map(({ label, href }) => (
                      <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium py-1 group">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-bold text-amber-900 text-sm">Weekend booking tip</p>
              </div>
              <p className="text-amber-800 text-xs leading-relaxed">
                The Sparrowhawk gets full at weekends. Book in advance, especially Friday evening and Sunday lunch. Don&apos;t risk a walk-in with hungry children.
              </p>
            </div>
          </aside>
        </div>

        {/* Author bio */}
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who actually lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Half Term in Formby", slug: "things-to-do-formby-half-term", cat: "Family" },
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Pinewoods Walking Guide", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
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
