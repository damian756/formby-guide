import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, Train, Car, AlertCircle } from "lucide-react";
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
            headline: "Formby Day Trip from Liverpool: The Honest Guide",
            description: "How to do a Formby day trip from Liverpool (or Manchester) properly. Train times, what to do, where to eat, and how long you actually need.",
            url: "https://www.formbyguide.co.uk/blog/formby-day-trip-from-liverpool",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-12",
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
            <span className="text-[#1C3220] font-medium">Formby Day Trip</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-card-day-trip.webp"
          alt="Formby beach pinewoods day trip from Liverpool"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Day Trip Guide · Seasonal
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Formby Day Trip from Liverpool<br />
              <span className="text-[#C9A96E]">The Honest Guide</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              25 minutes on the Merseyrail. Beach, pinewoods, red squirrels, a decent lunch. Here&apos;s how to do it properly: and what most day trip guides miss.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare: Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 12, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1C3220] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "From Liverpool", value: "25 mins" },
              { label: "From Manchester", value: "60–70 mins" },
              { label: "Parking postcode", value: "L37 1YH" },
              { label: "Ideal duration", value: "5–6 hours" },
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
                People from Liverpool don&apos;t realise how close Formby is. You can be on Formby Beach: proper wide empty sand, dunes, pinewoods behind you: in under half an hour from Liverpool Central. Door to beach, 45 minutes if you&apos;re not rushing.
              </p>
              <p>
                I&apos;ve lived here 44 years and I&apos;m still slightly baffled that more people don&apos;t make this trip. The beach is genuinely brilliant. The pinewoods are unlike anything else in the North West. And it&apos;s not heaving with tourists the way the Wirral coastline can get on a good day.
              </p>
              <p>
                Here&apos;s how I&apos;d plan it if I were visiting for the first time.
              </p>
            </div>

            {/* Getting there */}
            <div className="not-prose my-10">
              <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-5">Getting to Formby</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8EDE6] flex items-center justify-center">
                      <Train className="w-4 h-4 text-[#2E6B3E]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1C3220] text-sm">By Train: Recommended</p>
                      <p className="text-xs text-gray-500">Merseyrail Northern Line</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span>Liverpool Central → Formby: <strong>25 minutes</strong></span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span>Trains run every 15–20 minutes</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span>No car. No parking faff. Walk straight off the train.</span></li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">Formby station is on Station Road, L37 4AN. 15-min walk or short taxi to the beach.</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8EDE6] flex items-center justify-center">
                      <Car className="w-4 h-4 text-[#2E6B3E]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1C3220] text-sm">By Car</p>
                      <p className="text-xs text-gray-500">Via A565: Formby Bypass</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span>Liverpool → Formby: <strong>30–40 minutes</strong></span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" /><span>Manchester → Formby: <strong>60–70 minutes</strong></span></li>
                    <li className="flex items-start gap-2"><AlertCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" /><span>NT car park (L37 1YH): <strong>book via NT app</strong> before leaving</span></li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-3">Signal at the car park is poor. Download the National Trust app at home.</p>
                </div>
              </div>
            </div>

            <div className="not-prose my-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-amber-900 text-sm mb-1">If you&apos;re driving from Manchester</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    The M58/A59 via Maghull is usually faster than the M57. Park at the National Trust car park (L37 1YH): about £6–9 via the app. Don&apos;t wait until you arrive to book; the car park can fill by 10am on a sunny weekend.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>The Ideal Day Out: In Order</h2>
              <p>Here&apos;s how I&apos;d structure it if I had one day and wanted to see the best of Formby without rushing.</p>
            </div>

            <div className="not-prose my-6 space-y-4">
              {[
                {
                  time: "9:30–10:00am",
                  title: "Arrive at the National Trust car park",
                  desc: "Victoria Road, L37 1YH. From the car park, you're already in the pinewoods. Toilets at the car park: use them before you head off.",
                  tip: "Arrive early if you can. By 11am on a good day the car park is at capacity.",
                  emoji: "🅿️",
                },
                {
                  time: "10:00am–12:00pm",
                  title: "Walk the red squirrel trail and pinewoods",
                  desc: "The marked trail takes about an hour. Go slow, go quiet, keep noise down. The squirrels are most active in the morning. The walk through the pinewoods to the beach is 15–20 minutes.",
                  tip: "Best squirrel sightings: September to February, early morning.",
                  emoji: "🌲",
                },
                {
                  time: "12:00–2:00pm",
                  title: "Formby Beach",
                  desc: "Wide open sand, massive dunes, Irish Sea views. Bring something to sit on. The beach is enormous: find a quiet spot away from the main path even on busy days.",
                  tip: "Check the tide before you go. High tide at Formby means less beach. Low tide is best.",
                  emoji: "🏖️",
                },
                {
                  time: "2:30–4:00pm",
                  title: "Lunch in the village",
                  desc: "Drive or taxi from the beach to Formby village: about 10 minutes. Left Bank Brasserie for a proper lunch, Emily's for something more relaxed, NT café if you don't want to move far.",
                  tip: "If you're on the train and don't want to drive to the village, the NT café at the car park does coffee and hot food.",
                  emoji: "🍽️",
                },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{s.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold bg-[#E8EDE6] text-[#2E6B3E] px-2 py-0.5 rounded-full">{s.time}</span>
                      </div>
                      <h3 className="font-bold text-[#1C3220] text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">{s.desc}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] mt-0.5 shrink-0" />
                        <p className="text-xs text-[#2E6B3E] font-medium">{s.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>Is It Worth Coming in Winter?</h2>
              <p>
                Yes. Genuinely. Formby Beach in winter is one of my favourite things about living here. Empty, dramatic, the light off the Irish Sea on a clear January afternoon is properly beautiful. You need layers, decent boots, and a flask. But it&apos;s worth it.
              </p>
              <p>
                The red squirrel sightings are actually <strong>better</strong> from autumn through February: they&apos;re out earlier and the trees are thinner so you can see them more clearly. If you want to see them, winter is when you go.
              </p>
              <p>
                The only thing to check in winter is tides. High tides in January can reduce the beach significantly. Look up the tide times before you plan.
              </p>
              <h2>What to Bring</h2>
            </div>

            <div className="not-prose my-6 grid sm:grid-cols-2 gap-3">
              {[
                { item: "Layers", note: "Wind off the Irish Sea is real, even in summer." },
                { item: "Proper shoes", note: "Sandy paths and dune grass: trainers get full of sand." },
                { item: "NT app downloaded", note: "Book the car park before you leave home. No signal at the gate." },
                { item: "Flask", note: "Non-negotiable in autumn and winter. The café isn&apos;t always open." },
                { item: "Binoculars", note: "Brilliant for red squirrels and the birdlife on the coastal path." },
                { item: "Check tide times", note: "Low tide = more beach. High tide = dunes only." },
              ].map(({ item, note }) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-3.5">
                  <CheckCircle className="w-4 h-4 text-[#2E6B3E] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1C3220] text-sm">{item}</p>
                    <p className="text-xs text-gray-500">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="not-prose bg-[#1C3220] rounded-2xl p-7 text-white my-10">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🐿️</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">The Red Squirrels Are the Real Reason to Come</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Formby is one of the best places in England to see red squirrels in the wild. The pinewoods are a managed habitat: they actually live here, year-round. You won&apos;t see them if you arrive at 2pm and walk fast and loud. Go early, go slow, go quiet.
                  </p>
                  <Link href="/red-squirrels-formby" className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-white text-sm font-bold px-4 py-2.5 rounded-full transition">
                    Full red squirrel guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Plan your full day in Formby</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Restaurants, walks, beach guide, parking info: everything in one place.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/things-to-do" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Things to Do in Formby <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/formby-beach" className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-3 rounded-full font-semibold text-sm transition hover:bg-[#2E6B3E] hover:text-white">
                  Beach Guide →
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Day Plan</h3>
              <div className="space-y-3">
                {[
                  { time: "9:30am", activity: "Arrive NT car park" },
                  { time: "10:00am", activity: "Red squirrel trail" },
                  { time: "11:30am", activity: "Walk to beach" },
                  { time: "12:00pm", activity: "Time on the beach" },
                  { time: "2:30pm", activity: "Lunch in the village" },
                  { time: "4:00pm", activity: "Head home" },
                ].map(({ time, activity }) => (
                  <div key={time} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="bg-[#E8EDE6] text-[#2E6B3E] text-[10px] font-bold px-2 py-1 rounded-md shrink-0 whitespace-nowrap">{time}</span>
                    <p className="text-sm font-medium text-[#1C3220]">{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Useful Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Red Squirrels Guide", href: "/red-squirrels-formby" },
                  { label: "Parking Guide", href: "/guides/parking-formby-beach" },
                  { label: "Best Restaurants", href: "/guides/best-restaurants-formby" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium transition py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#1C4A5A]/10 border border-[#1C4A5A]/20 rounded-2xl p-5">
              <div className="flex items-start gap-2 mb-2">
                <Train className="w-4 h-4 text-[#1C4A5A] shrink-0 mt-0.5" />
                <p className="font-bold text-[#1C4A5A] text-sm">Train tip</p>
              </div>
              <p className="text-[#1C4A5A]/80 text-xs leading-relaxed">
                Liverpool Central → Formby runs on the Northern Line. Day return is cheap. You can also get off at Freshfield for a slightly shorter walk to the NT estate.
              </p>
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
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Walking in Formby Pinewoods", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
              { title: "How to See Red Squirrels", slug: "red-squirrels-formby-spotting-guide", cat: "Wildlife" },
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
