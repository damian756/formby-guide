import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Car, Clock, Dog, Waves, ChevronRight, AlertCircle, Coffee } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Beach — Parking, Postcode, Dogs & Everything Else",
  description:
    "Everything you need to know about Formby Beach — postcode (L37 1YH), parking prices, dog rules, tide times, facilities and the best times to visit. Written by a local.",
  keywords:
    "Formby beach, formby beach postcode, parking at formby beach, formby beach car park, formby beach dogs, formby beach national trust, formby sand dunes, formby point",
  alternates: { canonical: `${BASE_URL}/formby-beach` },
  openGraph: {
    title: "Formby Beach — Parking, Postcode, Dogs & Everything Else",
    description:
      "Postcode, parking prices, dog rules, tide info and what to actually expect. Everything for planning your visit to Formby Beach.",
    url: `${BASE_URL}/formby-beach`,
  },
};

export default function FormbyBeachPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Formby Beach</span>
            </div>
            <div className="text-5xl mb-4">🏖️</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Formby Beach
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Wide open sand, dramatic dunes, pinewoods at your back and the Irish Sea in front. One of the best beaches in the North West — and you don&apos;t have to fight anyone for space if you get the timing right.
            </p>

            {/* The answers people actually search for */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Postcode", value: "L37 1YH" },
                { label: "NT Car Park", value: "From £6 (app)" },
                { label: "Dogs", value: "Welcome" },
                { label: "Nearest café", value: "NT Café on site" },
              ].map((f) => (
                <div key={f.label} className="bg-white/10 rounded-lg p-3">
                  <div className="text-xs text-white/50 mb-0.5">{f.label}</div>
                  <div className="text-sm font-semibold text-white">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10">
        <div className="container mx-auto px-4 max-w-7xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "#parking", label: "Parking & Postcode", icon: Car },
              { href: "#beach", label: "The Beach", icon: Waves },
              { href: "#dogs", label: "Dogs", icon: Dog },
              { href: "#dunes", label: "Dunes & Formby Point", icon: MapPin },
              { href: "#facilities", label: "Facilities", icon: Coffee },
              { href: "#tides", label: "Tides & Safety", icon: Clock },
            ].map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="flex items-center gap-1.5 text-sm text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors py-1">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#1C3220]/80 leading-relaxed">
            Formby Beach is managed by the National Trust and sits at the end of Victoria Road on the western edge of Formby village. Behind the beach is a wide stretch of pinewoods — the same woodland where the red squirrels live. In front of it is miles of sand and the Irish Sea. It&apos;s a proper beach, not a resort, which is both the best and the most accurate way to describe it.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed">
            On a sunny Saturday in summer it gets busy — the car park fills, the paths are full, and you have to walk a bit to get space. On a Tuesday morning in October it&apos;s almost empty and completely brilliant. Both are valid. Know what you&apos;re walking into.
          </p>
        </div>

        {/* Parking — leads with the literal answer */}
        <section id="parking" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">Parking & getting there</h2>
          <p className="text-sm text-[#1C3220]/50 mb-6">Postcode for sat nav: <strong className="text-[#2E6B3E] text-base">L37 1YH</strong></p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C3220] text-white">
                  <th className="text-left p-3 rounded-tl-lg">Parking option</th>
                  <th className="text-left p-3">Cost</th>
                  <th className="text-left p-3 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: "Victoria Road NT car park (members)", cost: "Free", notes: "NT membership required. Book a slot in peak times." },
                  { option: "Victoria Road NT car park (non-members)", cost: "From £6/day", notes: "Book via the NT app before leaving — no signal on site." },
                  { option: "Train + walk", cost: "Varies", notes: "Formby station (Merseyrail). 20-min walk to NT car park via Victoria Road." },
                  { option: "Street parking nearby", cost: "Free (limited)", notes: "Very limited. Not reliable on weekends." },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                    <td className="p-3 font-medium text-[#1C3220]">{r.option}</td>
                    <td className="p-3 text-[#2E6B3E] font-semibold">{r.cost}</td>
                    <td className="p-3 text-[#1C3220]/60">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#2E6B3E]/10 border border-[#2E6B3E]/20 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-[#2E6B3E] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1C3220]/70">
              <strong className="text-[#1C3220]">Important:</strong> The mobile signal at the NT car park is poor. Download the National Trust app and book your parking slot at home before you drive. On busy days the car park fills up and you&apos;ll be turned away.
            </p>
          </div>
        </section>

        {/* The beach itself */}
        <section id="beach" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">What the beach is actually like</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Formby Beach is wide, sandy, and backed by significant sand dunes with the pinewoods behind them. It&apos;s a proper beach — not a promenade, not a resort, not a funfair. There&apos;s no ice cream van at the water&apos;s edge and no amusements. What there is: space, sand, sea, and quiet (relative to most beaches this close to Liverpool and Manchester).
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            The walk from the car park through the pines to the beach takes about 15 minutes. It&apos;s flat the whole way and a decent pushchair can manage it on dry days, though the sandy path near the beach gets soft. The beach itself is wide — at low tide there&apos;s a lot of sand. The sea is the Irish Sea, so don&apos;t expect Mediterranean temperatures, but it&apos;s swimmable in summer.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            The best conditions: sunny, not too windy, low to mid tide. Sunset visits are genuinely spectacular — the light across the dunes and the sea is the kind of thing people drive a long way for.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "☀️", title: "Best in summer", desc: "Pack a windbreak — it can be breezy even on sunny days. The dunes provide shelter if you find the right spot." },
              { icon: "🌅", title: "Sunsets", desc: "West-facing beach. Sunset on a clear evening is exceptional. Worth timing a visit around it." },
              { icon: "❄️", title: "Winter visits", desc: "Honestly brilliant in winter. Empty, dramatic, bracing. Walk through the pines and the whole place feels like it&apos;s yours." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-5 border border-[#1C3220]/8 text-center">
                <div className="text-3xl mb-2">{b.icon}</div>
                <h3 className="font-semibold text-[#1C3220] mb-1">{b.title}</h3>
                <p className="text-sm text-[#1C3220]/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dogs */}
        <section id="dogs" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Dogs at Formby Beach</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Dogs are welcome at Formby Beach year-round — no seasonal restrictions. This makes it one of the better dog beaches on the Sefton Coast. Most of the beach is open to dogs. The exception is the red squirrel reserve area within the pinewoods, where dogs must be on leads.
          </p>
          <div className="bg-[#E8EDE6] rounded-xl p-5 space-y-2 text-sm">
            <div className="flex gap-3"><span className="text-[#2E6B3E]">✓</span><span><strong className="text-[#1C3220]">Dogs on the beach:</strong> welcome, no restrictions</span></div>
            <div className="flex gap-3"><span className="text-[#2E6B3E]">✓</span><span><strong className="text-[#1C3220]">Dogs in the pinewoods (general paths):</strong> welcome</span></div>
            <div className="flex gap-3"><span className="text-orange-500">!</span><span><strong className="text-[#1C3220]">Dogs in the squirrel reserve:</strong> must be on a lead at all times</span></div>
            <div className="flex gap-3"><span className="text-[#2E6B3E]">✓</span><span><strong className="text-[#1C3220]">Water:</strong> bring your own — the beach itself has no dog water points</span></div>
          </div>
        </section>

        {/* Dunes & Formby Point */}
        <section id="dunes" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Sand dunes & Formby Point</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            The sand dunes at Formby are significant — some are over 10 metres high. They&apos;re also part of an active conservation effort, which means you&apos;ll see fenced-off sections and signs asking you not to climb certain dunes. It&apos;s not jobsworth bureaucracy — the dunes are genuinely fragile and the NT is trying to stop the coastal erosion that&apos;s been steadily eating into the pinewoods for decades.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            <strong className="text-[#1C3220]">Formby Point</strong> is the headland at the southern end of the beach — the most westerly point of the Formby coastline. It&apos;s a decent walk from the main car park (about 1.5 miles along the beach) but the views back along the coast are worth it. At low tide you can sometimes see the prehistoric footprints and animal tracks left in the ancient sediment — over 5,000 years old, occasionally exposed as the sand shifts.
          </p>
          <div className="bg-[#2E6B3E]/10 border border-[#2E6B3E]/20 rounded-xl p-4">
            <p className="text-sm text-[#1C3220]/70">
              <strong className="text-[#1C3220]">Prehistoric footprints:</strong> These appear occasionally on the beach and in the tidal zone when the sand conditions are right. There&apos;s no guarantee you&apos;ll see them — they&apos;re exposed and then covered again by tides over days or weeks. If you do spot them, please don&apos;t disturb them and let the NT know.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Facilities</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  { facility: "Toilets", detail: "At the NT car park / visitor point. Clean, maintained." },
                  { facility: "Café", detail: "NT café at the visitor point. Coffee, cake, soup, light bites. Not cheap but decent quality. Outdoor seating." },
                  { facility: "Picnic area", detail: "Grassy area near the car park. Bring your own food if you want to eat out." },
                  { facility: "Baby changing", detail: "Available at the NT facilities." },
                  { facility: "Accessibility", detail: "The main paths are manageable for pushchairs on dry days. The beach itself and dune paths are uneven — check the NT website for current accessible route info." },
                  { facility: "Lifeguard", detail: "No lifeguard service. Swim with care and be aware of the tide." },
                  { facility: "EV charging", detail: "Not currently available at the NT car park." },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                    <td className="p-3 font-semibold text-[#1C3220] w-40">{r.facility}</td>
                    <td className="p-3 text-[#1C3220]/60">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tides & safety */}
        <section id="tides" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Tides & safety</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Formby Beach is on the Irish Sea, which has a significant tidal range. At low tide there&apos;s a wide expanse of sand. At high tide the sea comes in to the base of the dunes and there&apos;s much less beach. Worth checking the tides before you go if beach access matters to you.
          </p>
          <div className="space-y-3">
            {[
              { icon: "🌊", point: "Rip currents", detail: "Present at times. If you&apos;re swimming, don&apos;t go out far and don&apos;t swim alone. There is no lifeguard service." },
              { icon: "🐚", point: "Best for walking: low to mid tide", detail: "You get the most beach to walk on and the sand is firmer. Easier on the legs than soft sand near the dune base." },
              { icon: "📱", point: "Tide times", detail: "Check BBC Weather, Tide Times UK, or the Met Office for Formby/Southport tide predictions before you go." },
              { icon: "⚠️", point: "Don&apos;t walk out too far at low tide", detail: "The tide comes in quickly along this stretch of coast. Be aware of where you are relative to the waterline." },
            ].map((s) => (
              <div key={s.point} className="flex gap-3 bg-white rounded-xl p-4 border border-[#1C3220]/8">
                <span className="text-xl shrink-0">{s.icon}</span>
                <div>
                  <span className="font-semibold text-[#1C3220] text-sm">{s.point}: </span>
                  <span className="text-sm text-[#1C3220]/60">{s.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white">
          <h2 className="font-display text-2xl font-bold mb-4">More to explore in Formby</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Red Squirrels", href: "/red-squirrels-formby", desc: "See them in the pines behind the beach." },
              { label: "Formby Pinewoods", href: "/formby-pinewoods", desc: "Walk the ancient woodland trails." },
              { label: "Things To Do", href: "/things-to-do", desc: "More ideas for your visit to Formby." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all">
                <div className="font-semibold text-white group-hover:text-[#C9A96E] transition-colors mb-1">{l.label} →</div>
                <div className="text-sm text-white/60">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
