import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Dog, Binoculars, ChevronRight, AlertCircle, Camera, Utensils } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Red Squirrels in Formby | Where to See Them & What to Expect",
  description:
    "Everything you need to know about seeing red squirrels in Formby — postcode (L37 1YH), best times, how to get there, what to bring and practical tips from a local.",
  keywords:
    "red squirrels formby, see red squirrels, formby red squirrels, national trust formby, formby nature reserve, formby wildlife",
  alternates: { canonical: `${BASE_URL}/red-squirrels-formby` },
  openGraph: {
    title: "Red Squirrels in Formby — Where to See Them & What to Expect",
    description:
      "One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — here's everything you need to know.",
    url: `${BASE_URL}/red-squirrels-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Squirrels in Formby — Where to See Them & What to Expect",
    description:
      "One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — here's everything you need to know.",
  },
};

export default function RedSquirrelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-amber-200 text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Red Squirrels</span>
            </div>
            <div className="text-6xl mb-4">🐿️</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Red Squirrels in Formby
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — and watch even teenagers get excited when they spot one.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: MapPin, label: "Postcode", value: "L37 1YH" },
                { icon: Clock, label: "Best Months", value: "Sept – Feb" },
                { icon: Dog, label: "Dogs", value: "On leads" },
                { icon: Camera, label: "Gear", value: "Binoculars help" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/10">
                  <div className="flex items-start gap-2 mb-1">
                    <Icon className="w-4 h-4 text-amber-200 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-white/60">{label}</div>
                  </div>
                  <div className="text-sm font-bold text-white ml-6">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: "#when", label: "Best Times" },
              { href: "#where", label: "Where to Go" },
              { href: "#trails", label: "Trails" },
              { href: "#tips", label: "Tips" },
              { href: "#faq", label: "FAQ" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Intro */}
        <div className="max-w-3xl mb-12 prose prose-lg">
          <p className="text-lg text-[#1C3220]/80 leading-relaxed">
            Formby is one of only a handful of places left in England where you can genuinely say "we're going to see red squirrels" and mean it. The National Trust pinewoods are home to one of the largest remaining colonies in the north of England. They&apos;re not tame, nobody feeds them on cue — but if you show up at the right time and move quietly, you&apos;ve got a decent chance. On a good autumn morning we&apos;ve counted half a dozen from a single trail.
          </p>
        </div>

        {/* Best Time */}
        <section id="when" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">When to Visit for Best Sightings</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                season: "Best",
                months: "September – February",
                desc: "Peak season. Squirrels are most active foraging before winter. Fewer leaves = better sightings. Autumn light through the pines is stunning.",
              },
              {
                season: "Good",
                months: "March – May",
                desc: "Young squirrels born in spring. You may spot juveniles. Activity is good but thicker foliage makes spotting harder.",
              },
              {
                season: "Possible",
                months: "June – August",
                desc: "Summer is quietest — squirrels are active but dense canopy and heat reduces visibility. Go early morning.",
              },
              {
                season: "Time of Day",
                months: "First 2 hours after sunrise",
                desc: "Consistently the best window. They come down from the canopy to forage before it gets busy. By midday they're much harder to spot.",
              },
            ].map(({ season, months, desc }) => (
              <div key={months} className={`rounded-2xl border p-6 ${season === "Best" ? "bg-amber-50 border-amber-200" : "bg-white border-gray-100"}`}>
                <h3 className={`font-semibold mb-1 ${season === "Best" ? "text-amber-900" : "text-[#1C3220]"} text-lg`}>
                  {season === "Best" ? "✦ " : ""}{season}
                </h3>
                <p className={`text-sm font-medium mb-2 ${season === "Best" ? "text-amber-700" : "text-[#2E6B3E]"}`}>{months}</p>
                <p className={`text-sm leading-relaxed ${season === "Best" ? "text-amber-900/70" : "text-[#1C3220]/70"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where to Go */}
        <section id="where" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Where Exactly to Go</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Address & Access</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-[#1C3220]">National Trust Formby</p>
                  <p className="text-[#1C3220]/70">Victoria Road, Formby, L37 1YH</p>
                </div>
                <ul className="space-y-1 text-[#1C3220]/70">
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> Main car park on Victoria Road</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> Squirrel trails start from car park</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> Download NT app & book parking before you leave</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> No phone signal on site</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Distance from Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Liverpool city centre</span> <span className="font-semibold text-[#2E6B3E]">20–25 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Southport</span> <span className="font-semibold text-[#2E6B3E]">10 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Wigan/Manchester</span> <span className="font-semibold text-[#2E6B3E]">45–60 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Preston</span> <span className="font-semibold text-[#2E6B3E]">35 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Train to Formby station</span> <span className="font-semibold text-[#2E6B3E]">20 min walk</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Parking */}
        <section className="mb-16">
          <h3 className="font-semibold text-[#1C3220] text-xl mb-4">Parking Prices</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { who: "NT Members", price: "Free", note: "Show card or app" },
              { who: "Non-members", price: "From £6", note: "Book via NT app" },
            ].map(({ who, price, note }) => (
              <div key={who} className="bg-[#E8EDE6] rounded-xl p-4 border border-[#1C3220]/10">
                <p className="text-sm text-[#1C3220]/60 mb-1">{who}</p>
                <p className="text-2xl font-bold text-[#2E6B3E] mb-1">{price}</p>
                <p className="text-xs text-[#1C3220]/50">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trails */}
        <section id="trails" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Squirrel Trails & Walks</h2>
          <div className="space-y-4">
            {[
              {
                name: "Squirrel Trail (short)",
                time: "30–45 mins",
                difficulty: "Easy",
                desc: "The dedicated red squirrel trail looping through dense pinewood. This is where sightings are most reliable. Starts from main car park. Good for all ages including pushchairs on wider sections.",
              },
              {
                name: "Beach & Pines (extended)",
                time: "1.5–2 hours",
                difficulty: "Easy–Moderate",
                desc: "Follow squirrel trail through pines, continue west to beach, walk along sand, return through dunes. Brilliant combination — wildlife and sea in one go. Wellies or sturdy footwear recommended.",
              },
              {
                name: "Full Coastal Path",
                time: "2.5–3 hours",
                difficulty: "Moderate",
                desc: "Walk north along Sefton Coastal Path toward Ainsdale or south toward Hightown. Flat but exposed to coastal winds. Can be done as linear walk with train back from Ainsdale.",
              },
            ].map(({ name, time, difficulty, desc }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                  <span className="text-xs font-medium text-[#2E6B3E] bg-[#E8EDE6] px-2.5 py-1 rounded-full">{difficulty}</span>
                </div>
                <p className="text-sm text-[#1C3220]/60 mb-3">⏱️ {time}</p>
                <p className="text-sm text-[#1C3220]/70">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Tips & What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "👁️",
                title: "Move Slowly & Quietly",
                desc: "They hear you before they see you. Walk slowly, stop often, look up into canopy. Less spooking = higher chance they carry on.",
              },
              {
                emoji: "🔭",
                title: "Bring Binoculars",
                desc: "Not essential but brilliant. Often high in the pines — binoculars let you see properly instead of just a rusty blur.",
              },
              {
                emoji: "🧥",
                title: "Dress for Coastal Weather",
                desc: "Coastal woodland gets cool and damp even on warm days. Layers and waterproofs make sense year-round.",
              },
              {
                emoji: "👟",
                title: "Good Footwear",
                desc: "Trainers fine on dry days. After rain paths are muddy. Wellies if you're planning to walk to the beach.",
              },
              {
                emoji: "📱",
                title: "Download NT App First",
                desc: "You need it for parking. Signal on site is poor. Sort it at home before you leave.",
              },
              {
                emoji: "🐕",
                title: "Dogs Welcome (On Leads)",
                desc: "Dogs are fine on trails but must be on leads in squirrel reserve. Signs mark where the lead zone starts.",
              },
              {
                emoji: "📸",
                title: "Photography Tips",
                desc: "Morning light through pines is stunning. Phone cameras struggle with low canopy light — a decent zoom lens helps.",
              },
              {
                emoji: "🚫",
                title: "Don't Feed Them",
                desc: "Tempting but harmful to squirrels and the reserve. Watch and enjoy — that's enough.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="text-3xl mb-2">{emoji}</div>
                <h3 className="font-semibold text-[#1C3220] mb-2">{title}</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Are red squirrels guaranteed?",
                a: "No wildlife sighting is ever guaranteed, but Formby is about as reliable as it gets in England. Go early on a dry morning in autumn or winter and chances are good. Some mornings you'll see several. On a wet summer afternoon, you might see none. Manage expectations but don't be put off — it's worth the visit regardless.",
              },
              {
                q: "Is it suitable for young children?",
                a: "Yes. The squirrel trail is flat and manageable for kids. Pushchairs are fine on main paths. Keep children calm and slow-moving near the squirrel zone — excited running sends them straight up into the canopy.",
              },
              {
                q: "Do I need to book?",
                a: "You don't need to book to visit — but you should book your parking slot via the NT app or website before you leave, especially in summer and at weekends. The car park fills up and on-site signal is terrible.",
              },
              {
                q: "What's happened to the red squirrel population?",
                a: "Grey squirrels, introduced from North America in the 1870s, gradually displaced reds across most of England. They compete for food and carry squirrelpox (fatal to reds but not greys). Formby survives because the habitat suits reds and the NT actively manages the reserve, including grey squirrel control.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/formby-beach" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🏖️</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Formby Beach</h4>
              <p className="text-sm text-[#1C3220]/60">Wide sand, dramatic dunes, and the Irish Sea.</p>
            </Link>
            <Link href="/formby-pinewoods" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🌲</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Pinewoods Walks</h4>
              <p className="text-sm text-[#1C3220]/60">Ancient woodland paths to the sea.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
