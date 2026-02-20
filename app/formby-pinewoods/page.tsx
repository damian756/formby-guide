import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Dog, Trees, ChevronRight, Binoculars, Info, Compass } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
  description:
    "Complete guide to Formby pinewoods — walks, trails, red squirrels, birdwatching, and everything you need to plan your visit. Including opening times and facilities.",
  keywords:
    "formby pinewoods, national trust formby, formby walks, coastal walks, red squirrels, pinewoods trails, birdwatching formby",
  alternates: { canonical: `${BASE_URL}/formby-pinewoods` },
  openGraph: {
    title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
    description:
      "Ancient woodland running to the sea. Red squirrels in the canopy, brilliant walks, and light through the pines that's genuinely special.",
    url: `${BASE_URL}/formby-pinewoods`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
    description:
      "Ancient woodland running to the sea. Red squirrels in the canopy, brilliant walks, and light through the pines that's genuinely special.",
  },
};

export default function PinewoodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C3220] to-[#2E6B3E] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Pinewoods</span>
            </div>
            <div className="text-6xl mb-4">🌲</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Formby Pinewoods
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Ancient coastal woodland with red squirrels in the canopy, brilliant walks, and light through the pines that's genuinely special. Walk from the road to the sea.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: MapPin, label: "Postcode", value: "L37 1YH" },
                { icon: Clock, label: "Walk Time", value: "30 min – 3 hrs" },
                { icon: Compass, label: "Terrain", value: "Flat, some sand" },
                { icon: Dog, label: "Dogs", value: "Welcome" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/10">
                  <div className="flex items-start gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
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
              { href: "#why", label: "Why Visit" },
              { href: "#walks", label: "Walks & Trails" },
              { href: "#wildlife", label: "Wildlife" },
              { href: "#history", label: "History" },
              { href: "#plan", label: "Plan Your Visit" },
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
            The Formby pinewoods aren&apos;t natural — they were planted in the 19th century to stabilise sand dunes — but they feel ancient. What started as a practical project has become one of the most important habitats on the north-west coast. Mature Scots and Corsican pine, red squirrels in the canopy, and paths that walk you straight through to the beach.
          </p>
        </div>

        {/* Why Visit */}
        <section id="why" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">What Makes the Pinewoods Worth Visiting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🐿️",
                title: "Red Squirrels",
                desc: "Primary habitat for Formby's red squirrel colony. They live in the canopy and come down to forage. Trails through denser pine sections have the most reliable sightings.",
              },
              {
                emoji: "🌲",
                title: "The Trees Themselves",
                desc: "Mature Scots pine and Corsican pine, some over 100 years old. Light through the canopy on a morning walk is genuinely beautiful. Photographers rate this highly.",
              },
              {
                emoji: "🏖️",
                title: "Access to the Beach",
                desc: "Follow main paths west and you emerge onto dunes and Formby Beach. Takes ~15 minutes. The transition from woodland to open sea is genuinely dramatic.",
              },
              {
                emoji: "🦅",
                title: "Birdlife",
                desc: "Crossbills, goldcrests, coal tits, woodpeckers, waders and sea birds depending on season. Birders rate Formby highly for the woodland/coastal combination.",
              },
              {
                emoji: "🌿",
                title: "Wildflowers & Plants",
                desc: "Spring brings wood anemones, bluebells and woodland plants in sheltered sections. Dune slacks have their own distinct plant communities.",
              },
              {
                emoji: "🌅",
                title: "Sunsets",
                desc: "The path through the pines to the beach in late afternoon with light filtering through the trees. The kind of walk people come back to repeatedly.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-semibold text-[#1C3220] text-lg mb-2">{title}</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Walks */}
        <section id="walks" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Walks & Trails</h2>
          <div className="space-y-4">
            {[
              {
                emoji: "🚶",
                name: "Squirrel Trail (short)",
                time: "30–45 minutes",
                level: "Easy",
                desc: "The dedicated red squirrel trail looping through the densest section. Flat throughout. Starts from main car park. Best for families or anyone wanting a manageable walk without committing to the beach.",
                tip: "Go early morning for best squirrel sightings.",
              },
              {
                emoji: "🏖️",
                name: "Pinewoods to Beach",
                time: "1.5–2 hours return",
                level: "Easy",
                desc: "Walk from car park through pinewoods, emerging via dunes onto Formby Beach. Walk along sand, return through pines. Full experience of the site in one go. Flat all the way.",
                tip: "Trainers fine on dry days. Wellies better after rain.",
              },
              {
                emoji: "🌊",
                name: "Full Sefton Coastal Path",
                time: "2.5–3.5 hours",
                level: "Easy–Moderate",
                desc: "Walk north through pines to Ainsdale or south toward Hightown. Flat, exposed in places, excellent for serious walkers. Can be done as linear walk with train back from Ainsdale.",
                tip: "Check Sefton Coast landscape website for current path conditions.",
              },
            ].map(({ emoji, name, time, level, desc, tip }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{emoji}</div>
                    <div>
                      <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                      <p className="text-sm text-[#1C3220]/60">{time} • {level}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">{desc}</p>
                <p className="text-xs text-[#2E6B3E] font-medium">💡 {tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wildlife & Habitat */}
        <section id="wildlife" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Wildlife & Habitat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">🐿️ Red Squirrels</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                The pinewoods are the primary habitat for Formby's red squirrel colony. They suit this woodland precisely and the National Trust actively manages the reserve to keep the population stable.
              </p>
              <p className="text-xs text-[#1C3220]/50 italic">One of the most significant red squirrel populations on the North West coast.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">🦅 Birdlife</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                Crossbills, goldcrests, coal tits, woodpeckers, various waders and sea birds depending on season. The woodland-to-coast transition makes Formby particularly good for birders.
              </p>
              <p className="text-xs text-[#1C3220]/50 italic">Check season guides for best birdwatching times.</p>
            </div>
          </div>
        </section>

        {/* History */}
        <section id="history" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">A Bit of History</h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-[#1C3220]/70 leading-relaxed">
                The pinewoods were planted in the late 19th century by the Formby family and later the Weld-Blundell estate to stabilise coastal dunes and provide timber. By the 20th century they had matured into the dense, atmospheric woodland you walk through today.
              </p>
              <p className="text-[#1C3220]/70 leading-relaxed mt-4 mb-0">
                Red squirrels have lived in the pinewoods for as long as anyone can remember — they suit the habitat precisely. The decline of grey squirrel populations in managed reserves like this one has helped stabilise the red population. The National Trust acquired the site in the 1960s and has been managing it for conservation ever since.
              </p>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section id="plan" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Plan Your Visit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Address",
                value: "Victoria Road, Formby, L37 1YH",
              },
              {
                label: "Opening",
                value: "Year-round, dawn to dusk",
              },
              {
                label: "Parking",
                value: "NT car park. Book via app before leaving. £6 non-members.",
              },
              {
                label: "Dogs",
                value: "Welcome throughout. Leads required in squirrel reserve (signed).",
              },
              {
                label: "Pushchairs",
                value: "Main paths manageable on dry days. Sandy sections near dunes are difficult.",
              },
              {
                label: "Café & Toilets",
                value: "NT café at visitor point. Toilets & baby changing available.",
              },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#E8EDE6] rounded-xl p-4 border border-[#1C3220]/10">
                <p className="text-xs font-semibold text-[#1C3220]/60 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-[#1C3220]/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/red-squirrels-formby" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🐿️</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Red Squirrels</h4>
              <p className="text-sm text-[#1C3220]/60">One of the best places in England to see them.</p>
            </Link>
            <Link href="/formby-beach" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🏖️</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Formby Beach</h4>
              <p className="text-sm text-[#1C3220]/60">Wide sand, dramatic dunes, and the Irish Sea.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
