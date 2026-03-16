import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, AlertCircle, Info } from "lucide-react";
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
            headline: "Can You Take Dogs to Formby Beach? Everything Worth Knowing",
            description: "Yes, dogs are allowed at Formby Beach — but the rules are more specific than most guides let on. Seasonal restrictions, which sections, where to walk, and what to know before you go.",
            url: "https://www.formbyguide.co.uk/blog/dogs-formby-beach",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-13",
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
            <span className="text-[#1C3220] font-medium">Dogs at Formby Beach</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#1C3220] via-[#2E6B3E] to-[#1A5C3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Dog Friendly · Beach Guide
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Can You Take Dogs<br />
              <span className="text-[#C9A96E]">to Formby Beach?</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Short answer: yes. Longer answer: it depends on the time of year and which part of the beach you&apos;re on. Here&apos;s the honest version.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 13, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1C3220] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Dogs allowed", value: "Yes" },
              { label: "Year-round access", value: "Most areas" },
              { label: "Summer restrictions", value: "Some sections" },
              { label: "On or off lead", value: "Both — see below" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-lg">{value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] prose-a:text-[#2E6B3E] max-w-none">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                Dogs are welcome at Formby Beach for most of the year, across most of the beach. But there are seasonal restrictions in summer that catch people out — and the National Trust doesn&apos;t always make them obvious until you&apos;re already there.
              </p>
              <p>
                I&apos;ve been walking dogs on this beach for years. Here&apos;s what you actually need to know before you load up the car.
              </p>
            </div>

            {/* Quick answer box */}
            <div className="not-prose my-8 bg-[#E8EDE6] rounded-2xl p-6 border-l-4 border-[#2E6B3E]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#2E6B3E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1C3220] mb-2">The quick answer</p>
                  <ul className="space-y-1.5 text-sm text-[#1C3220]/80">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span><strong>October to April:</strong> dogs allowed on the full beach, no restrictions</span></li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" /><span><strong>May to September:</strong> dogs excluded from a designated section of the beach (roughly the middle section near Formby Point). All other sections remain open.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span><strong>Pinewoods and dune paths:</strong> dogs allowed year-round, on leads near the squirrel reserve</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>The Summer Restriction Explained</h2>
              <p>
                Between May and September, the National Trust restricts dogs from a section of Formby Beach to protect nesting birds — primarily ringed plovers and oystercatchers that nest in the dunes and on the upper beach. The restricted area is usually marked with signs and rope barriers.
              </p>
              <p>
                The restriction doesn&apos;t cover the whole beach. North of the restriction (toward Freshfield and Ainsdale) dogs are still welcome. South toward Formby Point, also fine. It&apos;s a specific middle section that gets protected.
              </p>
              <p>
                In practice, this means most dog walkers just come in spring, autumn and winter — when the beach is genuinely brilliant, often much quieter, and the weather is more interesting if you&apos;re into that kind of thing. My favourite dog walks here are October to March.
              </p>
              <h2>On Lead or Off Lead?</h2>
              <p>
                The beach itself — off lead is fine. The pinewoods and paths near the red squirrel reserve — dogs must be kept on leads. The National Trust is strict on this and it&apos;s for good reason. Red squirrels are ground-level a lot of the time and a dog off lead would undo years of conservation work in minutes.
              </p>
              <p>
                The paths through the dunes to the beach are narrow and popular — keep your dog close until you&apos;re on the open sand.
              </p>
            </div>

            {/* Section breakdown */}
            <div className="not-prose my-10">
              <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">Where to Walk Your Dog at Formby</h2>
              <div className="space-y-4">
                {[
                  {
                    zone: "The Beach (Formby Point area)",
                    access: "Year-round Oct–Apr · Restricted May–Sep",
                    accessColor: "bg-amber-100 text-amber-800",
                    desc: "The main beach access from the NT car park. Wide open sand, dog heaven. Seasonal bird nesting restrictions apply May to September — watch for signage.",
                    lead: "Off lead on open sand",
                  },
                  {
                    zone: "Freshfield end (north of main beach)",
                    access: "Year-round",
                    accessColor: "bg-green-100 text-green-800",
                    desc: "North of the Formby Point area, accessed from Freshfield station or Victoria Road walking north. Quieter, often less busy. Summer restrictions typically don't extend here.",
                    lead: "Off lead on open sand",
                  },
                  {
                    zone: "Pinewoods and dune paths",
                    access: "Year-round · On leads",
                    accessColor: "bg-blue-100 text-blue-800",
                    desc: "The marked trails through the pinewoods from the NT car park. Beautiful walk. Dogs must be on leads throughout — not optional, and NT wardens do patrol.",
                    lead: "On leads required",
                  },
                  {
                    zone: "NT Café outdoor area",
                    access: "Year-round · On leads",
                    accessColor: "bg-green-100 text-green-800",
                    desc: "Dogs are welcome in the outdoor seating area of the National Trust café at the car park. Water bowls often available. Good post-walk coffee stop.",
                    lead: "On leads, outdoor only",
                  },
                ].map((z) => (
                  <div key={z.zone} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-bold text-[#1C3220] text-base">{z.zone}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${z.accessColor}`}>{z.access}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-2">{z.desc}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0" />
                      <span className="text-xs text-[#2E6B3E] font-medium">{z.lead}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Dog-Friendly Pubs and Cafés Near the Beach</h2>
              <p>
                After a walk you&apos;re going to want a coffee or a pint. Formby is fairly good for dog-friendly venues — far better than you&apos;d expect for a quiet village.
              </p>
            </div>

            <div className="not-prose my-6 space-y-4">
              {[
                {
                  name: "NT Café, Victoria Road",
                  tag: "Dogs welcome outside",
                  desc: "Right at the car park. Coffee, cake, hot food. Dogs welcome in the outdoor area. Convenient if you don&apos;t want to drive to the village.",
                  href: "/cafes",
                },
                {
                  name: "The Freshfield pub",
                  tag: "Dog-friendly",
                  desc: "On Massams Lane, Freshfield. Good beer garden, genuinely dog-friendly. Solid pub food. Post-walk pint sorted.",
                  href: "/pubs",
                },
                {
                  name: "The Sparrowhawk",
                  tag: "Dog-friendly garden",
                  desc: "Village centre. Good food, dog-friendly outdoor area. Worth booking if you&apos;re going at a weekend.",
                  href: "/restaurants/the-sparrowhawk-formby",
                },
              ].map((v) => (
                <div key={v.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8EDE6] flex items-center justify-center text-lg shrink-0">🐾</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={v.href} className="font-bold text-[#1C3220] hover:text-[#2E6B3E] transition-colors">{v.name}</Link>
                      <span className="text-[10px] font-bold text-[#2E6B3E] bg-[#E8EDE6] px-2 py-0.5 rounded-full">{v.tag}</span>
                    </div>
                    <p className="text-sm text-gray-600">{v.desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/guides/dog-friendly-formby" className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:underline">
                Full dog-friendly Formby guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 my-10">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-2">A note on the squirrel reserve</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    The red squirrel trail runs through the pinewoods from the NT car park. Dogs must be on leads the entire time. Not just &apos;well-behaved dogs can be off lead&apos; — all dogs, leads, always. The NT wardens enforce this and rightly so. A dog bounding through the undergrowth at the wrong moment can disturb squirrels at a critical time. Please just keep them on.
                  </p>
                </div>
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">More on dog-friendly Formby</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Pubs, cafés, walks and everything dog-friendly in one guide.</p>
              <Link href="/guides/dog-friendly-formby" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                Dog-Friendly Formby Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Dog Access Summary</h3>
              <div className="space-y-3">
                {[
                  { season: "Oct – Apr", access: "Full beach — no restrictions", ok: true },
                  { season: "May – Sep", access: "Main section restricted (nesting birds)", ok: false },
                  { season: "Pinewoods", access: "Year-round — on leads required", ok: true },
                  { season: "NT Café", access: "Dogs outside year-round", ok: true },
                ].map(({ season, access, ok }) => (
                  <div key={season} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className={`mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold ${ok ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {ok ? "✓" : "!"}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-[#1C3220]">{season}</p>
                      <p className="text-xs text-gray-500">{access}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Useful Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Dog-Friendly Formby Guide", href: "/guides/dog-friendly-formby" },
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Pubs in Formby", href: "/pubs" },
                  { label: "Parking at Formby Beach", href: "/guides/parking-formby-beach" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium transition py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who actually lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Formby Beach — Full Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Walking in Formby Pinewoods", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
              { title: "A Formby Day Trip from Liverpool", slug: "formby-day-trip-from-liverpool", cat: "Day Trip" },
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
