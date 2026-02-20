import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight, CheckCircle, Lightbulb, MapPin, AlertCircle } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Things to Do in Formby During Half Term — Family Guide | FormbyGuide",
  description: "Planning half term in Formby with the kids? A local mum of four shares what actually works — and what to skip. Real tips for families visiting Formby.",
  keywords: "things to do Formby half term, Formby family activities, Formby kids, Formby half term 2026, family day out Formby",
  alternates: { canonical: `${BASE_URL}/blog/things-to-do-formby-half-term` },
  openGraph: {
    title: "Things to Do in Formby During Half Term — Family Guide",
    description: "Half term in Formby with kids. Honest local tips from a mum of four.",
    url: `${BASE_URL}/blog/things-to-do-formby-half-term`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: "Things to Do in Formby During Half Term", description: "Honest half term guide for Formby families." },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">Half Term Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C3220] via-[#2E6B3E] to-[#1C4A2A] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-16 -translate-x-16 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Family · Half Term
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Half Term in Formby<br />
              <span className="text-[#C9A96E]">What Actually Works</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Four kids. Five days. Limited budget. Here&apos;s what I&apos;ve learned after years of half term survival in Formby — and the things I&apos;d skip next time.
            </p>
            <div className="flex items-center gap-5 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] font-bold text-sm">C</div>
                <span>Clare — Formby local, mum of 4</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 20, 2026</span></div>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>8 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <div className="bg-[#1C3220] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Best ages", value: "3–14" },
              { label: "Budget/day", value: "£10–40" },
              { label: "Parking", value: "L37 1YH" },
              { label: "Half term", value: "17–21 Feb" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-lg">{value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article */}
      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main content */}
          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] prose-a:text-[#2E6B3E] max-w-none">

              <p className="lead text-xl text-gray-600 leading-relaxed">
                Half term doesn&apos;t need to be perfect. It doesn&apos;t need to be Instagram-worthy. It needs to be survivable — and ideally, a few moments your kids will actually remember fondly in 20 years.
              </p>

              <p>
                After doing this several times with four kids ranging from a toddler to a teenager, I&apos;ve landed on a formula. Mix outdoor adventure with low-effort indoor backup. Have one &quot;proper&quot; day out and let the rest breathe. And stop trying to entertain them every single hour.
              </p>

            </div>

            {/* Callout: Clare's honest take */}
            <div className="not-prose my-10 bg-[#E8EDE6] rounded-2xl p-7 border-l-4 border-[#2E6B3E]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1C3220] mb-1">The one thing that changed everything for me</p>
                  <p className="text-[#1C3220]/70 text-sm leading-relaxed">
                    I stopped planning every day and started planning every morning. One activity per morning, then let the afternoon sort itself. The kids get to decompress, I get a breather, and we all survive to day five.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Day 1–2: Start With Indoor Options</h2>
              <p>
                Days one and two, everyone&apos;s still full of energy and optimism. Take the pressure off yourself. You don&apos;t need a spectacular outing on day one — save that energy.
              </p>
            </div>

            {/* Activity cards */}
            <div className="not-prose mt-6 space-y-4 mb-10">
              {[
                {
                  name: "Formby Library",
                  type: "Free · All ages",
                  desc: "Genuinely brilliant and almost always overlooked. Story times, reading challenges, a quiet corner. Free entry makes this a no-brainer on a rain day.",
                  tip: "Check the events calendar — dedicated half term activities often run during school breaks.",
                  color: "border-blue-200 bg-blue-50",
                  badge: "FREE",
                  badgeColor: "bg-blue-600",
                },
                {
                  name: "Southport Beach & Pleasureland Area",
                  type: "15 mins away · Paid activities",
                  desc: "Yes, it's Southport — but it's 15 minutes up the A565 and has indoor play, amusements, and soft play options when Formby itself is quiet.",
                  tip: "Go mid-morning on a weekday. Quieter, shorter queues, and you'll be back for lunch.",
                  color: "border-amber-200 bg-amber-50",
                  badge: "NEARBY",
                  badgeColor: "bg-amber-600",
                },
              ].map((a) => (
                <div key={a.name} className={`rounded-2xl border p-5 ${a.color}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-bold text-[#1C3220] text-base">{a.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{a.type}</p>
                    </div>
                    <span className={`text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${a.badgeColor}`}>{a.badge}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{a.desc}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" />
                    <p className="text-xs text-[#2E6B3E] font-medium">{a.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Day 3: The Big Nature Day</h2>
              <p>
                By day three, the kids are bouncing off walls. This is your nature day. Get them outside and properly tired. This is the day that pays dividends for the rest of the week.
              </p>
            </div>

            {/* Pinewoods feature card */}
            <div className="not-prose my-6 bg-[#1C3220] rounded-2xl overflow-hidden text-white">
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🌲</div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-1">Formby Pinewoods — The Half Term Move</h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      This is the answer. Sandy trails, woodland, red squirrels if you&apos;re patient and quiet, and enough space for kids to genuinely run around for hours. Three hours here = shattered kids = quiet afternoon.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {[
                        { label: "Parking", val: "L37 1YH · National Trust" },
                        { label: "Duration", val: "2–3 hours recommended" },
                        { label: "Terrain", val: "Sandy, uneven — proper shoes" },
                        { label: "Facilities", val: "Toilets at car park" },
                      ].map(({ label, val }) => (
                        <div key={label} className="bg-white/10 rounded-xl px-3 py-2">
                          <p className="text-white/50 text-[10px] uppercase tracking-wider">{label}</p>
                          <p className="text-white text-xs font-medium mt-0.5">{val}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/formby-pinewoods" className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-white text-sm font-bold px-4 py-2.5 rounded-full transition">
                      Full Pinewoods Guide <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Day 4: The Eat-Out Day</h2>
              <p>
                School lunches are off. Cooking every single meal for five days is exhausting. You deserve at least one lunch out. Here&apos;s what works in Formby with kids.
              </p>
            </div>

            <div className="not-prose my-6 space-y-4 mb-10">
              {[
                { name: "The Sparrowhawk", desc: "Proper restaurant with a children's menu that has things kids actually eat. Staff understand family dining. Not a chain — real food, real service.", tag: "Best for sit-down" },
                { name: "Local cafes & coffee shops", desc: "Formby has independent cafes that are genuinely relaxed about children. Order your coffee, get cake for the kids, sit down. Nobody's rushing you.", tag: "Best for casual" },
              ].map((r) => (
                <div key={r.name} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5E8E8] flex items-center justify-center text-lg flex-shrink-0">🍽️</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1C3220]">{r.name}</h3>
                      <span className="text-[10px] font-bold text-[#8B3A3A] bg-[#F5E8E8] px-2 py-0.5 rounded-full">{r.tag}</span>
                    </div>
                    <p className="text-sm text-gray-600">{r.desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/restaurants" className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:underline">
                Browse all Formby restaurants <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Day 5: Keep It Simple</h2>
              <p>
                You&apos;re tired. They&apos;re tired. Resist the urge to go out with a bang.
              </p>
            </div>

            {/* Beach card */}
            <div className="not-prose my-6 bg-gradient-to-r from-[#1C4A5A] to-[#2E7A9A] rounded-2xl p-7 text-white mb-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🏖️</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Formby Beach — The No-Effort Option</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">Bucket, spade, thermos of hot chocolate. The beach is free. Even on a grey February day, kids find something to do for hours. It requires almost zero planning.</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {["Free entry", "Dogs welcome", "Toilets on site", "L37 1YH"].map(t => (
                      <span key={t} className="bg-white/15 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Real talk callout */}
            <div className="not-prose bg-white rounded-2xl border border-gray-100 shadow-sm p-7 my-10">
              <h3 className="font-display text-xl font-bold text-[#1C3220] mb-4">The Real Talk</h3>
              <div className="space-y-3">
                {[
                  "Some of the best half term memories are lazy afternoons at home. Let it happen.",
                  "One proper outing per day is enough. You don't need to fill every hour.",
                  "\"Let's just go to the beach\" is a perfectly valid plan and often the best one.",
                  "Formby has everything a family needs without needing to drive to a theme park.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#2E6B3E] mt-0.5 shrink-0" />
                    <p className="text-gray-700 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Everything to do in Formby</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Browse all attractions, beaches, walks and places to eat in one place.</p>
              <Link href="/things-to-do" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                Full Things To Do Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Quick plan */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">5-Day Half Term Plan</h3>
              <div className="space-y-3">
                {[
                  { day: "Day 1", activity: "Library + local cafe", free: true },
                  { day: "Day 2", activity: "Southport trip", free: false },
                  { day: "Day 3", activity: "Pinewoods all morning", free: true },
                  { day: "Day 4", activity: "Lunch out at Sparrowhawk", free: false },
                  { day: "Day 5", activity: "Formby Beach", free: true },
                ].map(({ day, activity, free }) => (
                  <div key={day} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="bg-[#E8EDE6] text-[#2E6B3E] text-[10px] font-bold px-2 py-1 rounded-md shrink-0">{day}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#1C3220]">{activity}</p>
                      {free && <p className="text-[10px] text-[#2E6B3E]">Free / low cost</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Useful Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Red Squirrels Guide", href: "/red-squirrels-formby" },
                  { label: "Restaurants in Formby", href: "/restaurants" },
                  { label: "Cafes in Formby", href: "/cafes" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium transition py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-bold text-amber-900 text-sm">Half term parking tip</p>
              </div>
              <p className="text-amber-800 text-xs leading-relaxed">
                The National Trust car park at Formby fills quickly on half term weekdays. Arrive before 10am or after 2pm to avoid the rush.
              </p>
            </div>
          </aside>
        </div>

        {/* Author bio */}
        <ClareBio />
      </div>

      {/* More posts */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who actually lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", excerpt: "When to visit, and when to stay home with a cuppa.", cat: "Seasonal" },
              { title: "Best Restaurants for Families", slug: "where-to-eat-formby-with-kids", excerpt: "Where we actually eat in Formby with four kids.", cat: "Food" },
              { title: "How to See Red Squirrels", slug: "red-squirrels-formby-spotting-guide", excerpt: "Local tips for actually spotting them.", cat: "Wildlife" },
            ].map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-[#F7F9F6] rounded-2xl border border-gray-100 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B3E]">{p.cat}</span>
                <h3 className="font-display font-bold text-[#1C3220] text-base mt-1 mb-2 group-hover:text-[#2E6B3E] transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
