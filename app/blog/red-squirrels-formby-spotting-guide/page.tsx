import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, AlertCircle, X } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "How to See Red Squirrels in Formby — Local Spotting Guide | FormbyGuide",
  description: "Yes, red squirrels really live in Formby. But they won't show up on demand. A local's guide to when, where and how to actually spot them — including the timing mistakes most visitors make.",
  keywords: "red squirrels Formby, how to see red squirrels Formby, Formby red squirrel reserve, spotting red squirrels, National Trust Formby wildlife",
  alternates: { canonical: `${BASE_URL}/blog/red-squirrels-formby-spotting-guide` },
  openGraph: {
    title: "How to See Red Squirrels in Formby — Local Tips",
    description: "Local tips for actually spotting red squirrels in Formby's National Trust pinewoods.",
    url: `${BASE_URL}/blog/red-squirrels-formby-spotting-guide`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: { card: "summary_large_image", title: "How to See Red Squirrels in Formby", description: "When, where and how to actually spot them." },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to See Red Squirrels in Formby — Local Spotting Guide",
            description: "Yes, red squirrels really live in Formby. But they won't show up on demand. A local's guide to when, where and how to actually spot them — including the timing mistakes most visitors make.",
            url: "https://www.formbyguide.co.uk/blog/red-squirrels-formby-spotting-guide",
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
            <span className="text-[#1C3220] font-medium">Red Squirrel Spotting Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#6B4020] via-[#8B6040] to-[#A8764A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Wildlife · Red Squirrels
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              How to Actually See<br />
              <span className="text-[#C9A96E]">Red Squirrels in Formby</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Yes, they genuinely live here. Yes, they&apos;re extraordinary. But turn up at 2pm on a busy Saturday and you&apos;ll see nothing. Here&apos;s what visitors don&apos;t know — and what locals do.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 12, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <div className="bg-[#6B4020] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Best time", value: "7–9am" },
              { label: "Best season", value: "Spring & Autumn" },
              { label: "Location", value: "NT Pinewoods" },
              { label: "Chance of success", value: "~60% if right timing" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-base">{value}</div>
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
                Formby is genuinely one of the last strongholds of the red squirrel in England. These aren&apos;t zoo animals. They&apos;re truly wild — and that&apos;s exactly what makes seeing one so remarkable.
              </p>
              <p>
                Most visitors arrive expecting to spot them easily. They don&apos;t. They leave disappointed. Here&apos;s the full picture on how to give yourself the best possible chance.
              </p>
            </div>

            {/* The single biggest mistake */}
            <div className="not-prose my-8 bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-red-900 mb-1">The mistake 80% of visitors make</p>
                  <p className="text-red-800 text-sm leading-relaxed">
                    Arriving between 11am and 3pm. Red squirrels are most active at dawn and early morning. By mid-morning they&apos;ve retreated into the canopy. Midday visits are almost guaranteed disappointment. Adjust your timing first — it matters more than anything else.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Timing: The Single Biggest Factor</h2>
            </div>

            {/* Time grid */}
            <div className="not-prose grid md:grid-cols-3 gap-4 my-6 mb-10">
              {[
                { time: "6:30–9:00am", verdict: "Best", color: "bg-green-50 border-green-200", textColor: "text-green-800", badge: "bg-green-600 text-white", desc: "Peak activity. Squirrels feeding, moving, visible. Quiet woodland. Best odds by far." },
                { time: "9:00am–12pm", verdict: "OK", color: "bg-amber-50 border-amber-200", textColor: "text-amber-800", badge: "bg-amber-500 text-white", desc: "Activity drops off. Still possible, especially on cooler days. Worth the visit but don't expect guaranteed sightings." },
                { time: "12pm–4pm", verdict: "Poor", color: "bg-red-50 border-red-200", textColor: "text-red-800", badge: "bg-red-500 text-white", desc: "Too warm, too busy, too loud. Squirrels have retreated. You'll likely see grey squirrels and dog walkers, not reds." },
              ].map(({ time, verdict, color, textColor, badge, desc }) => (
                <div key={time} className={`rounded-2xl border p-5 ${color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={`font-bold text-sm ${textColor}`}>{time}</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badge}`}>{verdict}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Season Matters Too</h2>
            </div>

            <div className="not-prose grid md:grid-cols-2 gap-4 my-6 mb-10">
              {[
                { season: "🌱 Spring (Mar–May)", quality: "Excellent", desc: "Squirrels very active — feeding, building nests, raising young. High visibility before full leaf canopy." },
                { season: "☀️ Summer (Jun–Aug)", quality: "Fair", desc: "They're there but less visible in the dense canopy. Try early morning near the feeder areas." },
                { season: "🍂 Autumn (Sep–Nov)", quality: "Excellent", desc: "Foraging for winter. Very active, often at ground level. Best photography opportunities." },
                { season: "❄️ Winter (Dec–Feb)", quality: "Good", desc: "Less active but not hibernating. Easier to spot in leafless trees. Cold mornings are surprisingly productive." },
              ].map(({ season, quality, desc }) => (
                <div key={season} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-[#1C3220] text-sm">{season}</p>
                    <span className="text-[10px] font-bold text-[#2E6B3E] bg-[#E8EDE6] px-2 py-1 rounded-full">{quality}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Behaviour: How to Stand Your Best Chance</h2>
            </div>

            {/* Do / Don't */}
            <div className="not-prose grid md:grid-cols-2 gap-4 my-6 mb-10">
              <div className="bg-[#E8EDE6] rounded-2xl p-5">
                <p className="font-bold text-[#1C3220] mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2E6B3E]" /> Do this</p>
                <ul className="space-y-2">
                  {[
                    "Walk slowly and stop frequently",
                    "Talk in a whisper or stay silent",
                    "Sit on a bench and wait — let them come to you",
                    "Look up into the canopy as you walk",
                    "Visit the areas near feeders if available",
                    "Bring binoculars — worth every penny",
                  ].map(tip => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[#1C3220]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0 mt-0.5" />{tip}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="font-bold text-red-900 mb-3 flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Don&apos;t do this</p>
                <ul className="space-y-2">
                  {[
                    "Let children run ahead noisily",
                    "Play music or loud podcasts",
                    "Rustle bags or snack packets near trees",
                    "Feed them with your own food",
                    "Approach if you do spot one — stay still",
                    "Visit only once and expect a sighting",
                  ].map(tip => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                      <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />{tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why it matters */}
            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🐿️</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">Why Formby&apos;s Red Squirrels Matter</h3>
                  <p className="text-white/75 leading-relaxed mb-3">
                    Grey squirrels — introduced from North America in the 1870s — carry squirrelpox, a disease harmless to greys but fatal to reds. Reds have lost 98% of their UK population.
                  </p>
                  <p className="text-white/75 leading-relaxed">
                    Formby&apos;s pinewoods form a natural coastal barrier that has helped protect this colony. The National Trust&apos;s active management — grey squirrel control, habitat protection, supplementary feeding — keeps this population alive. When you see one, you&apos;re seeing something genuinely precious.
                  </p>
                </div>
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Full Red Squirrel Guide</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Everything about visiting the Formby Red Squirrel Reserve — parking, trails, facilities and conservation.</p>
              <Link href="/red-squirrels-formby" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                Red Squirrel Reserve Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Spotting Checklist</h3>
              <div className="space-y-3">
                {[
                  { item: "Arrive before 9am", critical: true },
                  { item: "Spring or autumn visit", critical: true },
                  { item: "Stay quiet and slow", critical: true },
                  { item: "Bring binoculars", critical: false },
                  { item: "Check feeders first", critical: false },
                  { item: "Sit and wait — don't rush", critical: true },
                  { item: "Don't feed them", critical: false },
                ].map(({ item, critical }) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${critical ? "bg-[#2E6B3E]" : "bg-gray-200"}`}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-[#1C3220]">{item}</span>
                    {critical && <span className="text-[10px] font-bold text-[#2E6B3E] ml-auto">Key</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="font-bold text-amber-900 text-sm mb-2">Manage your expectations</p>
              <p className="text-amber-800 text-xs leading-relaxed">
                Even with perfect timing, you might not see one. They&apos;re wild animals, not on a schedule. But multiple visits with the right approach almost always pay off eventually.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-[#1C3220] text-sm mb-3">Related guides</p>
              <div className="space-y-2">
                {[
                  { label: "Pinewoods Walking Guide", href: "/blog/formby-pinewoods-walking-guide" },
                  { label: "Full Red Squirrel Guide", href: "/red-squirrels-formby" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
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
              { title: "Walking in Formby Pinewoods", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
              { title: "Half Term in Formby", slug: "things-to-do-formby-half-term", cat: "Family" },
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
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
