import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, AlertCircle, MapPin } from "lucide-react";
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
            headline: "Crosby Beach and the Iron Men: How to Add it to a Formby Day Out",
            description: "Antony Gormley's Another Place at Crosby Beach is 20 minutes from Formby. Here's how to combine both into one day on the Sefton Coast: tide timing, parking, and what to actually expect.",
            url: "https://www.formbyguide.co.uk/blog/crosby-beach-iron-men-formby",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-14",
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
            <span className="text-[#1C3220] font-medium">Crosby Beach & the Iron Men</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-card-crosby-iron-men.webp"
          alt="Antony Gormley Iron Men sculptures at Crosby Beach"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Sefton Coast · Walks
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Crosby Beach &amp; the Iron Men<br />
              <span className="text-[#C9A96E]">Add it to Your Formby Day</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              100 cast-iron figures standing in the sea looking toward the horizon. 20 minutes from Formby. Free. Most people who&apos;ve lived near here for years have never been.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare: Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 14, 2026</span></div>
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
              { label: "From Formby", value: "20 mins" },
              { label: "Parking", value: "Free" },
              { label: "Entry cost", value: "Free" },
              { label: "Best timing", value: "Low tide" },
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
                Antony Gormley&apos;s <em>Another Place</em> has been at Crosby Beach since 2005. One hundred cast-iron figures, each a cast of the artist&apos;s own body, spread across nearly two miles of beach and out into the sea. They&apos;ve been there so long that locals barely notice them. They&apos;re worth noticing.
              </p>
              <p>
                I drove past the signs for Crosby Beach hundreds of times before I actually stopped. When I finally went: properly, at low tide, early morning, with decent light: I understood why people travel specifically to see them. The figures are eerie in the best possible way. Covered in barnacles, stained by salt and rust, staring out at the Irish Sea. There&apos;s nothing quite like it.
              </p>
              <p>
                Combined with a morning at Formby Beach or the pinewoods, it makes a genuinely brilliant full day on the Sefton Coast. Here&apos;s how to do it.
              </p>
            </div>

            {/* What are the Iron Men */}
            <div className="not-prose my-10 bg-[#1C3220] rounded-2xl p-7 text-white">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🗿</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">What are the Iron Men?</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    <em>Another Place</em> by Antony Gormley. 100 cast-iron figures, each based on the artist&apos;s own body. They were originally displayed in Germany, Belgium and Norway before being permanently installed at Crosby Beach in 2005. The figures face west toward the sea, spread across roughly 3km of beach and up to 1km out to sea.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    At high tide, some figures are completely submerged. At low tide, you can walk among them. The further out you go, the more weathered and encrusted they are: covered in mussels, barnacles, and decades of salt.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>When to Visit: Why Tide Timing Matters</h2>
              <p>
                This is the thing most people don&apos;t check before they go, and it makes a significant difference. At high tide, most of the figures are submerged or standing in water: you can see them from the shore but you can&apos;t walk among them. At low tide, the beach is vast and you can walk out to figures that are normally at sea level.
              </p>
              <p>
                Check the tide times before you go. Aim to arrive 1–2 hours before low tide: you&apos;ll have the beach at its widest and the figures most accessible. The difference between high and low tide at Crosby is dramatic. I&apos;ve been there at both and they&apos;re genuinely different experiences.
              </p>
              <p>
                Also worth knowing: the light matters. The figures look extraordinary in low winter light, especially late afternoon when the sun catches the rust. Overcast days are actually great: the grey sky against the weathered iron is properly atmospheric. Bright flat summer sunshine is probably the least dramatic option.
              </p>
              <h2>Getting There from Formby</h2>
            </div>

            <div className="not-prose my-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#2E6B3E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1C3220]">Crosby Beach / Another Place</p>
                    <p className="text-sm text-gray-500">Mariners Road, Crosby, L23 6SX</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { method: "From Formby by car", detail: "20–25 mins south via A565. Free parking on Mariners Road or in the Crosby Coastal Park car park nearby." },
                    { method: "From Liverpool by car", detail: "20–25 mins north via A565 through Crosby village. Easy direct route." },
                    { method: "From Liverpool by train", detail: "Merseyrail to Blundellsands & Crosby station, then 15-min walk to the beach." },
                    { method: "Combined Formby & Crosby day", detail: "Start at Formby (beach/squirrels, morning), drive south to Crosby for afternoon. Works well with tide timing." },
                  ].map(({ method, detail }) => (
                    <div key={method} className="bg-[#F7F9F6] rounded-xl p-3.5">
                      <p className="font-semibold text-[#1C3220] text-xs mb-1">{method}</p>
                      <p className="text-xs text-gray-600 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="not-prose my-8 bg-[#E8EDE6] rounded-2xl p-6 border-l-4 border-[#2E6B3E]">
              <p className="font-bold text-[#1C3220] mb-2">Parking is free</p>
              <p className="text-[#1C3220]/70 text-sm leading-relaxed">
                Parking at Crosby Beach is free: unlike Formby where you&apos;re paying for the NT car park. Street parking on Mariners Road, or the dedicated car park off Hall Road. Neither is especially large so arrive before 10am on a sunny weekend.
              </p>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>The Suggested Sefton Coast Day</h2>
              <p>
                If you&apos;re coming from Liverpool or Manchester and want to make a proper day of it, here&apos;s how I&apos;d combine Formby and Crosby. Work backwards from the tide times at Crosby.
              </p>
            </div>

            <div className="not-prose my-6 space-y-4">
              {[
                {
                  time: "9:00–10:00am",
                  title: "Formby Pinewoods: red squirrel trail",
                  desc: "Start here while the light is good and before the car park fills. Walk the squirrel trail, then through the dunes to the beach.",
                  emoji: "🌲",
                },
                {
                  time: "10:00am–12:30pm",
                  title: "Formby Beach",
                  desc: "Wide sand, sea, dunes. Bring a flask. Kids can be here for hours. Find a quiet spot away from the main path access.",
                  emoji: "🏖️",
                },
                {
                  time: "1:00–1:30pm",
                  title: "Lunch: village or NT café",
                  desc: "Drive into Formby village for a proper lunch at Emily's or The Sparrowhawk, or grab something at the NT café if you want to keep moving.",
                  emoji: "🍽️",
                },
                {
                  time: "2:30–4:30pm",
                  title: "Crosby Beach: the Iron Men",
                  desc: "Aim to arrive 1–2 hours before low tide. Walk south from the car park to find the first figures: then keep walking. The ones further out are covered in barnacles and far more dramatic.",
                  emoji: "🗿",
                },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{s.emoji}</div>
                    <div className="flex-1">
                      <div className="mb-1">
                        <span className="text-[10px] font-bold bg-[#E8EDE6] text-[#2E6B3E] px-2 py-0.5 rounded-full">{s.time}</span>
                      </div>
                      <h3 className="font-bold text-[#1C3220] text-base mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>What to Bring and Expect</h2>
            </div>

            <div className="not-prose my-6 grid sm:grid-cols-2 gap-3">
              {[
                { item: "Wellies or waterproof boots", note: "The sand near the tide line is wet. Trainers will be soaked." },
                { item: "Check tide times", note: "Crosby Beach Tides: search before you leave home." },
                { item: "Camera", note: "The figures are genuinely photogenic in interesting light. Go for it." },
                { item: "Dogs welcome", note: "Dogs are allowed on Crosby Beach year-round. No seasonal restrictions." },
                { item: "No café on the beach", note: "Bring a flask. The nearest café is back in Crosby village." },
                { item: "Allow 1–1.5 hours", note: "Walk out, find figures in the water at low tide, walk back. Don&apos;t rush it." },
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

            <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-5 my-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 text-sm mb-1">Don&apos;t climb on the figures</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    They&apos;re cast iron and bolted to the sand, so they&apos;re structurally fine: but people climbing on them has damaged them over the years. Sefton Council (who manage the site) ask visitors not to climb them. Look, photograph, walk among them. That&apos;s what they&apos;re for.
                  </p>
                </div>
              </div>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Planning your Formby day out?</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Beach guide, parking, pinewoods and things to do: everything in one place.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/formby-beach" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Formby Beach Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/blog/formby-day-trip-from-liverpool" className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-3 rounded-full font-semibold text-sm transition hover:bg-[#2E6B3E] hover:text-white">
                  Full day trip guide →
                </Link>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Crosby Beach Quick Facts</h3>
              <div className="space-y-3">
                {[
                  { label: "Address", value: "Mariners Rd, Crosby, L23 6SX" },
                  { label: "Parking", value: "Free: Mariners Road" },
                  { label: "Entry", value: "Free" },
                  { label: "Dogs", value: "Welcome, year-round" },
                  { label: "Best visit", value: "Low tide + good light" },
                  { label: "From Formby", value: "20 min drive south" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <span className="text-xs text-gray-500">{label}</span>
                    <span className="text-xs font-semibold text-[#1C3220] text-right max-w-[60%]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Useful Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                  { label: "Red Squirrels Guide", href: "/red-squirrels-formby" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Day Trip Guide", href: "/blog/formby-day-trip-from-liverpool" },
                  { label: "Things To Do", href: "/things-to-do" },
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
              { title: "A Formby Day Trip from Liverpool", slug: "formby-day-trip-from-liverpool", cat: "Day Trip" },
              { title: "Formby Beach: Full Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Walking in Formby Pinewoods", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
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
