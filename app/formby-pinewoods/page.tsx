import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
  description:
    "The National Trust pinewoods at Formby are home to red squirrels, ancient woodland paths, and some of the best coastal walking in the North West. Here's everything you need to know.",
  keywords:
    "Formby pinewoods, formby woods, formby beach woods, pinewoods formby, National Trust Formby woodland, formby walks, formby nature walks",
  alternates: { canonical: `${BASE_URL}/formby-pinewoods` },
  openGraph: {
    title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
    description:
      "Ancient pinewoods, red squirrels, coastal paths and sea views. Everything you need to plan your walk through the Formby pinewoods.",
    url: `${BASE_URL}/formby-pinewoods`,
  },
};

export default function FormbyPinewoodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Formby Pinewoods</span>
            </div>
            <div className="text-5xl mb-4">🌲</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Formby Pinewoods
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Ancient pinewoods running down to the Sefton Coast, with red squirrels in the canopy and the sea at the end of the path. One of the genuinely special outdoor spots in the North West — and most people don&apos;t know it exists.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Postcode", value: "L37 1YH" },
                { label: "Walk time", value: "30 min – 3 hrs" },
                { label: "Terrain", value: "Flat, some soft sand" },
                { label: "Dogs", value: "Welcome (leads in reserve)" },
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

      <div className="container mx-auto px-4 max-w-4xl py-12">

        {/* Intro */}
        <div className="mb-12">
          <p className="text-xl text-[#1C3220]/80 leading-relaxed mb-4">
            The Formby pinewoods aren&apos;t natural — they were planted in the 19th century to stabilise the sand dunes — but they feel ancient, and they&apos;ve become one of the most important habitats on the north-west coast. The combination of mature Scots and Corsican pine, sheltered dune slacks, and the proximity to the beach has created something genuinely unusual: a coastal woodland you can walk through from the road to the sea.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed">
            The whole area is managed by the National Trust. It&apos;s part of the same site as Formby Beach and the red squirrel reserve — you can walk between all three in a single visit, which most people do.
          </p>
        </div>

        {/* What makes it special */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">What makes the pinewoods worth visiting</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🐿️", title: "Red squirrels", desc: "The pinewoods are the primary habitat for Formby&apos;s red squirrel colony. They live in the canopy and come down to forage on the ground. The trails through the denser pine sections are where sightings are most reliable." },
              { icon: "🌲", title: "The trees themselves", desc: "Mature Scots pine and Corsican pine, some of them over 100 years old. The light through the canopy on a morning walk is the kind of thing you&apos;d pay to see in a painting. Photographers love it." },
              { icon: "🏖️", title: "Access to the beach", desc: "Follow any of the main paths westward through the pines and you emerge onto the dunes and Formby Beach. It takes about 15 minutes to walk through. The combination of woodland then suddenly open sea is genuinely dramatic." },
              { icon: "🦅", title: "Birdlife", desc: "Crossbills, goldcrests, coal tits, woodpeckers and various waders and sea birds depending on the season. Birders rate Formby highly for the woodland/coastal combination." },
              { icon: "🌿", title: "Wildflowers & plant life", desc: "Spring brings wood anemones, bluebells and other woodland plants in the sheltered sections. The dune slacks have their own distinct plant communities." },
              { icon: "🌅", title: "Sunsets", desc: "The path through the pines to the beach in the late afternoon, with light filtering through the trees — it&apos;s one of those walks people come back to repeatedly." },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#1C3220] mb-1">{s.title}</h3>
                  <p className="text-sm text-[#1C3220]/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Walks */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Walks through the pinewoods</h2>
          <div className="space-y-4">
            {[
              {
                name: "Squirrel trail (short)",
                duration: "30–45 minutes",
                difficulty: "Easy",
                desc: "The dedicated red squirrel trail that loops through the densest section of pinewoods. Flat throughout, starts from the main car park. Best for families with young children or anyone who wants a manageable woodland walk without committing to the beach.",
                tip: "Go early morning for the best squirrel sightings.",
              },
              {
                name: "Pinewoods to beach",
                duration: "1.5–2 hours return",
                difficulty: "Easy",
                desc: "Walk from the car park through the pinewoods, emerging via the dunes onto Formby Beach. Walk along the sand for a while, then return through the pines. The full experience of the site in one go. Flat all the way but the sandy paths near the dune face can be soft.",
                tip: "Trainers are fine on dry days. Wellies better after rain.",
              },
              {
                name: "Full Sefton Coastal Path section",
                duration: "2.5–3.5 hours",
                difficulty: "Easy–Moderate",
                desc: "Walk north through the pines, join the coastal path and continue to Ainsdale or south toward Hightown. Flat, exposed in places. Excellent for serious walkers who want distance. Can be done as a linear walk with a train back (Ainsdale station) or as a long loop.",
                tip: "Check the Sefton Coast landscape website for current path conditions.",
              },
            ].map((w) => (
              <div key={w.name} className="bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden">
                <div className="bg-[#2E6B3E] px-5 py-3 flex flex-wrap items-center gap-3">
                  <span className="font-display font-bold text-white">{w.name}</span>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{w.duration}</span>
                  <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{w.difficulty}</span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">{w.desc}</p>
                  <p className="text-xs text-[#2E6B3E] font-medium">💡 {w.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">A bit of history</h2>
          <div className="bg-[#E8EDE6] rounded-2xl p-6">
            <p className="text-[#1C3220]/70 leading-relaxed mb-4">
              The pinewoods were planted in the late 19th century by the Formby family and later the Weld-Blundell estate to stabilise the coastal dunes and provide timber. By the 20th century they had matured into the dense, atmospheric woodland you walk through today.
            </p>
            <p className="text-[#1C3220]/70 leading-relaxed mb-4">
              Red squirrels have lived in the pinewoods for as long as anyone can remember — they suit the habitat precisely. The decline of grey squirrel populations in managed reserves like this one has helped stabilise the colony, which is one of the most significant on the North West coast.
            </p>
            <p className="text-[#1C3220]/70 leading-relaxed">
              The National Trust acquired the site in the 1960s and has been managing it for conservation ever since — including the controversial but necessary grey squirrel control programme that keeps the red population stable.
            </p>
          </div>
        </section>

        {/* Practical */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Planning your visit</h2>
          <div className="bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Address", value: "Victoria Road, Formby, L37 1YH" },
                  { label: "Parking", value: "NT car park on Victoria Road. Book via NT app before leaving — no signal on site. From £6 for non-members." },
                  { label: "Opening", value: "Open year-round, dawn to dusk. Car park may have restricted access in very wet weather." },
                  { label: "Dogs", value: "Welcome throughout. Must be on leads in the red squirrel reserve section (signed)." },
                  { label: "Pushchairs", value: "Manageable on the main paths on dry days. The soft sand sections near the dunes are difficult." },
                  { label: "Café", value: "NT café at the visitor point. Coffee, cake, soup. Outdoor seating." },
                  { label: "Toilets", value: "At the NT visitor point near the car park." },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                    <td className="p-3 font-semibold text-[#1C3220] w-36 shrink-0">{r.label}</td>
                    <td className="p-3 text-[#1C3220]/70">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white">
          <h2 className="font-display text-2xl font-bold mb-4">More to explore</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Red Squirrels", href: "/red-squirrels-formby", desc: "Everything about spotting them in the reserve." },
              { label: "Formby Beach", href: "/formby-beach", desc: "The beach at the end of the pinewood paths." },
              { label: "Things To Do", href: "/things-to-do", desc: "More ideas for your day in Formby." },
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
