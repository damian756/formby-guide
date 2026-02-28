import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, Sun, CloudRain, Wind, Thermometer, MapPin } from "lucide-react";
import ClareBio from "../ClareBio";

export default function PostContent() {
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
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-02-18",
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
              Ten years living here. I&apos;ve walked that beach in every season, every weather condition. Here&apos;s the honest breakdown.
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
                Formby Beach is genuinely beautiful. It&apos;s also unpredictable. Here&apos;s what every season actually looks like.
              </p>
              <h3>🌱 Spring (March – May) — windy but beautiful</h3>
              <p>Spring is underrated. The crowds haven&apos;t arrived yet, the light in the morning is genuinely gorgeous, and the sand is firm and walkable. Pack layers, go in the morning before it picks up, and you&apos;ll have a brilliant time.</p>
              <p>Afternoon visits in April in particular can be punishing. The wind peaks mid-day and the beach empties fast for a reason.</p>

              <h3>☀️ Summer (June – August) — best weather, biggest crowds</h3>
              <p>This is peak Formby. The warmest temperatures, calmer wind, and long daylight hours make it genuinely lovely. But it&apos;s also at its busiest. The National Trust car park fills early on sunny weekends. If you&apos;re coming in summer, either arrive before 9:30am or after 2pm.</p>
              <p>Swimming is possible. Irish Sea temperatures in summer are cold but doable. Kids don&apos;t seem to notice.</p>

              <h3>🍂 Autumn (September – November) — the local&apos;s favourite</h3>
              <p>September is the best-kept secret on Formby Beach. School&apos;s back. The summer visitors are gone. The weather is still warm enough to not need a heavy coat. The light is extraordinary — low sun on the sand in September morning light is something else. This is when locals actually go.</p>
              <p>October is more unpredictable, and November usually grey. But a clear autumn day at Formby is hard to beat.</p>

              <h3>🌊 Winter (December – February) — dramatic but demanding</h3>
              <p>There&apos;s something about a completely empty Formby Beach on a clear January morning that&apos;s genuinely special. If you like dramatic skies and having miles of beach entirely to yourself, winter delivers. Proper kit is non-negotiable. Check the forecast before you go and skip any day with wind over 20mph.</p>
            </div>

            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <h3 className="font-display text-xl font-bold mb-4">The Local&apos;s Secret: September Morning</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                If you can only visit Formby Beach once, go on a clear morning in September. Kids are back at school. The summer crowd is gone. The light is extraordinary. The sand is yours.
              </p>
              <p className="text-white/75 leading-relaxed">That is Formby Beach at its absolute best.</p>
            </div>

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
              <p className="text-gray-700 text-xs leading-relaxed">Low tide gives you twice the beach. Check the BBC tide table before you visit — a 2-hour shift can make a huge difference.</p>
            </div>
          </aside>
        </div>
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
