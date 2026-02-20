import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, Sun, CloudRain, Wind, Thermometer, AlertCircle, CheckCircle, MapPin } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Beach Weather Guide — Best Time to Visit | FormbyGuide",
  description: "When is the best time to visit Formby Beach? A local's honest seasonal breakdown — including the months to avoid and exactly what to bring in each season.",
  keywords: "Formby Beach weather, best time to visit Formby Beach, Formby Beach conditions, Formby Beach seasons, when to visit Formby",
  alternates: { canonical: `${BASE_URL}/blog/formby-beach-weather-guide` },
  openGraph: {
    title: "Formby Beach Weather Guide — Best Time to Visit",
    description: "Honest seasonal guide to Formby Beach from a local who's been there in every weather condition.",
    url: `${BASE_URL}/blog/formby-beach-weather-guide`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: { card: "summary_large_image", title: "Formby Beach Weather Guide", description: "When to visit Formby Beach and what to expect." },
};

const SEASONS = [
  {
    name: "Spring",
    months: "March – May",
    icon: "🌱",
    verdict: "Windy but beautiful",
    rating: 3,
    color: "border-green-200",
    bg: "bg-green-50",
    textColor: "text-green-800",
    pros: ["Fewer crowds", "Golden morning light", "Firm, walkable sand", "Squirrels active"],
    cons: ["Almost always windy", "Cold evenings", "Unpredictable showers"],
    bestFor: "Early morning walks, photography, dog walking",
    avoid: "Afternoon in April — wind peaks mid-day",
  },
  {
    name: "Summer",
    months: "June – August",
    icon: "☀️",
    verdict: "Best weather, busiest crowds",
    rating: 5,
    color: "border-amber-200",
    bg: "bg-amber-50",
    textColor: "text-amber-800",
    pros: ["Warmest temperatures", "Calmer wind", "Long daylight hours", "Vibrant atmosphere"],
    cons: ["Packed weekends", "Car park queues", "August school holidays chaos"],
    bestFor: "Families, swimming (if brave), picnics",
    avoid: "Saturday afternoons in August — genuinely rammed",
  },
  {
    name: "Autumn",
    months: "September – November",
    icon: "🍂",
    verdict: "The local's secret season",
    rating: 4,
    color: "border-orange-200",
    bg: "bg-orange-50",
    textColor: "text-orange-800",
    pros: ["September = post-crowd magic", "Beautiful low light", "Quiet beach", "Crisp clean air"],
    cons: ["October gets unpredictable", "November is usually grey", "Shorter days"],
    bestFor: "Quiet walks, photography, locals",
    avoid: "Wet November weekdays if you want to feel warm",
  },
  {
    name: "Winter",
    months: "December – February",
    icon: "🌊",
    verdict: "Dramatic but demanding",
    rating: 2,
    color: "border-blue-200",
    bg: "bg-blue-50",
    textColor: "text-blue-800",
    pros: ["Completely empty beach", "Dramatic skies", "Special clear-day quality", "No queues anywhere"],
    cons: ["Very cold wind", "Short daylight", "Proper kit required", "Grey most days"],
    bestFor: "Hardy walkers, clear sunny days only",
    avoid: "Any day when the forecast says wind >20mph — it's miserable",
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
            headline: "Formby Beach Weather Guide — Best Time to Visit",
            description: "When is the best time to visit Formby Beach? A local's honest seasonal breakdown — including the months to avoid and exactly what to bring in each season.",
            url: "https://www.formbyguide.co.uk/blog/formby-beach-weather-guide",
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
            <span className="text-[#1C3220] font-medium">Beach Weather Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C4A5A] via-[#2E7A9A] to-[#1A5C6A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Seasonal Guide · Formby Beach
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              When Is Formby Beach<br />
              <span className="text-[#C9A96E]">Actually Worth Visiting?</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Ten years living here. I&apos;ve walked that beach in every season, every weather condition. Here&apos;s the honest breakdown — including the months where staying home with a cuppa is the smarter call.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — 10 years in Formby</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 18, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather icons strip */}
      <div className="bg-[#1C4A5A] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Wind, label: "Avg wind", value: "15 mph" },
              { icon: Thermometer, label: "Summer high", value: "18–22°C" },
              { icon: Sun, label: "Best month", value: "September" },
              { icon: CloudRain, label: "Wettest month", value: "November" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <Icon className="w-4 h-4 text-[#C9A96E] mx-auto mb-1" />
                <div className="text-white font-bold text-base">{value}</div>
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
                Formby Beach is genuinely beautiful. It&apos;s also unpredictable. The north-west coast does what it wants, and if you arrive expecting a calm, Mediterranean-style beach day, February on the Sefton coast is going to be a shock.
              </p>
              <p>
                Here&apos;s what every season actually looks like — with honest assessments rather than tourist-board spin.
              </p>
            </div>

            {/* Season cards */}
            <div className="not-prose space-y-6 mb-12">
              {SEASONS.map((s) => (
                <div key={s.name} className={`rounded-2xl border ${s.color} overflow-hidden`}>
                  <div className={`${s.bg} px-6 py-5`}>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{s.icon}</span>
                        <div>
                          <h3 className={`font-display text-xl font-bold ${s.textColor}`}>{s.name}</h3>
                          <p className="text-gray-500 text-sm">{s.months}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className={`w-2.5 h-2.5 rounded-full ${i < s.rating ? "bg-[#2E6B3E]" : "bg-gray-200"}`} />
                          ))}
                        </div>
                        <p className={`text-sm font-semibold ${s.textColor}`}>{s.verdict}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-6 py-5">
                    <div className="grid md:grid-cols-2 gap-5 mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What&apos;s good</p>
                        <ul className="space-y-1.5">
                          {s.pros.map(p => (
                            <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0 mt-0.5" />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Watch out for</p>
                        <ul className="space-y-1.5">
                          {s.cons.map(c => (
                            <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                      <div className="bg-[#E8EDE6] rounded-xl px-3 py-2.5">
                        <p className="text-[10px] uppercase tracking-wider text-[#2E6B3E] font-bold mb-0.5">Best for</p>
                        <p className="text-sm text-[#1C3220] font-medium">{s.bestFor}</p>
                      </div>
                      <div className="bg-red-50 rounded-xl px-3 py-2.5">
                        <p className="text-[10px] uppercase tracking-wider text-red-500 font-bold mb-0.5">Avoid</p>
                        <p className="text-sm text-gray-700">{s.avoid}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key insight */}
            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <h3 className="font-display text-xl font-bold mb-4">The Local&apos;s Secret: September Morning</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                If you can only visit Formby Beach once, go on a clear morning in September. Kids are back at school. The summer crowd is gone. The light is extraordinary. The sand is yours. And the weather is still warm enough that you don&apos;t need a heavy coat.
              </p>
              <p className="text-white/75 leading-relaxed">
                That is Formby Beach at its absolute best.
              </p>
            </div>

            {/* What to bring matrix */}
            <div className="not-prose mb-10">
              <h3 className="font-display text-xl font-bold text-[#1C3220] mb-5">What to Bring — by Season</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#1C3220] text-white">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Item</th>
                      <th className="text-center px-3 py-3">Spring 🌱</th>
                      <th className="text-center px-3 py-3">Summer ☀️</th>
                      <th className="text-center px-3 py-3">Autumn 🍂</th>
                      <th className="text-center px-3 py-3 rounded-tr-xl">Winter 🌊</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white rounded-b-xl overflow-hidden">
                    {[
                      { item: "Windproof jacket", spring: true, summer: false, autumn: true, winter: true },
                      { item: "Sunscreen", spring: false, summer: true, autumn: false, winter: false },
                      { item: "Proper walking shoes", spring: true, summer: false, autumn: true, winter: true },
                      { item: "Hot thermos", spring: true, summer: false, autumn: true, winter: true },
                      { item: "Beach toys", spring: false, summer: true, autumn: false, winter: false },
                      { item: "Waterproof trousers", spring: false, summer: false, autumn: true, winter: true },
                    ].map(({ item, spring, summer, autumn, winter }) => (
                      <tr key={item} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-[#1C3220]">{item}</td>
                        {[spring, summer, autumn, winter].map((v, i) => (
                          <td key={i} className="text-center px-3 py-3 text-lg">{v ? "✅" : "—"}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Full Formby Beach Guide</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Parking, facilities, tides, dogs — everything you need to plan your visit properly.</p>
              <Link href="/formby-beach" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                Formby Beach Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Visit Planner</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Best overall months</p>
                  <div className="flex flex-wrap gap-2">
                    {["June", "July", "September", "October"].map(m => (
                      <span key={m} className="bg-[#E8EDE6] text-[#2E6B3E] text-xs font-semibold px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Avoid these times</p>
                  <div className="flex flex-wrap gap-2">
                    {["August weekends", "Windy November", "Bank holidays"].map(m => (
                      <span key={m} className="bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Parking</p>
                  <p className="text-sm text-gray-700 flex items-start gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" />L37 1YH · National Trust</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1C4A5A]/10 border border-[#1C4A5A]/20 rounded-2xl p-5">
              <p className="font-bold text-[#1C4A5A] text-sm mb-2">Tide timing tip</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Low tide gives you twice the beach. Check the BBC tide table before you visit — a 2-hour shift can make a huge difference to your experience.
              </p>
            </div>
          </aside>
        </div>

        {/* Author bio */}
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More local guides</h2>
          <p className="text-gray-500 mb-8">Written by someone who actually lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Walking in Formby Pinewoods", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
              { title: "How to See Red Squirrels", slug: "red-squirrels-formby-spotting-guide", cat: "Wildlife" },
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

