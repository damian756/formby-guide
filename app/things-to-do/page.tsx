import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Things To Do in Formby | Local Guide to Beaches, Walks & More",
  description:
    "The complete guide to things to do in Formby — from red squirrels and the National Trust beach to the best restaurants in the village. Written by a local who knows the place.",
  keywords:
    "things to do in formby, things to do formby, formby things to do, formby day out, formby with kids, formby with dogs, formby activities",
  alternates: { canonical: `${BASE_URL}/things-to-do` },
  openGraph: {
    title: "Things To Do in Formby | Local Guide",
    description:
      "Red squirrels, a brilliant beach, pinewoods walks, and a village with good restaurants. Everything worth doing in Formby — from a local.",
    url: `${BASE_URL}/things-to-do`,
  },
};

const THINGS = [
  {
    id: "squirrels",
    emoji: "🐿️",
    title: "See the red squirrels",
    tag: "Nature · National Trust",
    highlight: "One of the best places in England",
    href: "/red-squirrels-formby",
    desc: "Formby is one of the last reliable places in England to see red squirrels in the wild. The National Trust pinewoods on Victoria Road are home to a thriving colony. Go early morning, September through February is peak season, but you&apos;ve got a decent chance year-round. Even my teenagers stop complaining the minute they spot one.",
    practical: [
      "Postcode: L37 1YH",
      "Book parking via the NT app before you leave — no signal on site",
      "Go early morning for best sightings",
      "Dogs welcome on leads in the reserve",
    ],
  },
  {
    id: "beach",
    emoji: "🏖️",
    title: "Formby Beach",
    tag: "Beach · Sand dunes",
    highlight: "Wide, wild and worth every step",
    href: "/formby-beach",
    desc: "A proper beach. Wide open sand, dramatic dunes, and the Irish Sea with no theme park attached. Walk through the pinewoods to get there (about 15 minutes from the car park) — the moment you come over the dunes onto the beach is genuinely great. Brilliant for dogs, sandcastles, long walks, and doing absolutely nothing.",
    practical: [
      "Same car park as the squirrel reserve (L37 1YH)",
      "Dogs welcome year-round, no seasonal restrictions",
      "No lifeguard — be aware of tides",
      "Best at low to mid tide for beach walking",
    ],
  },
  {
    id: "pinewoods",
    emoji: "🌲",
    title: "Walk the pinewoods",
    tag: "Walking · Nature",
    highlight: "Ancient woodland to the sea",
    href: "/formby-pinewoods",
    desc: "The pinewoods themselves are worth the visit even if you don&apos;t see a squirrel. Mature Scots and Corsican pines, quiet paths, the sound of the sea getting closer as you walk west. You can do a short woodland loop (30 minutes) or walk all the way through to the beach and back (1.5–2 hours). Flat the whole way.",
    practical: [
      "Starts from the NT car park, Victoria Road",
      "Flat terrain, manageable for most fitness levels",
      "Wellies recommended after rain",
      "Continue to the beach for the full experience",
    ],
  },
  {
    id: "eat",
    emoji: "🍽️",
    title: "Eat in the village",
    tag: "Restaurants · Cafes",
    highlight: "Formby eats well",
    href: "/restaurants",
    desc: "Formby village has a genuinely good restaurant scene for a town this size. Emily&apos;s is popular and relaxed, Left Bank Brasserie is a proper treat (book ahead for weekends), Don Luigi does solid Italian, and The Sparrowhawk is reliable for a post-walk lunch. There&apos;s also the NT café at the beach for coffee and cake after your walk.",
    practical: [
      "Book ahead for weekends — the good ones fill up",
      "Village centre is about 10 minutes drive from the NT beach",
      "Chapel Lane and the surrounding streets have most of the independent options",
    ],
  },
  {
    id: "cycling",
    emoji: "🚴",
    title: "Cycle the Sefton Coast",
    tag: "Cycling · Outdoor",
    highlight: "Flat, easy, beautiful",
    href: "/activities",
    desc: "The Trans Pennine Trail runs along the Sefton Coast and is cycle-friendly. You can ride between Southport and Formby without touching a main road — it&apos;s flat, largely traffic-free, and takes you through some genuinely pretty coastal scenery. Good for families with older children who can manage a few miles.",
    practical: [
      "Formby to Southport: approx 8 miles each way",
      "Bring your own bikes or hire locally",
      "The coastal path sections can be sandy — wide tyres better than skinny ones",
    ],
  },
  {
    id: "coastal-path",
    emoji: "🥾",
    title: "Walk the Sefton Coastal Path",
    tag: "Walking · Coastal",
    highlight: "26 miles of coastline",
    href: "/nature-walks",
    desc: "The Sefton Coastal Path runs from Waterloo (Liverpool) to Southport — Formby sits roughly in the middle. You can walk sections of it without doing the whole thing. The stretch between Formby and Ainsdale is particularly good. Flat, exposed, sea views the whole way.",
    practical: [
      "Park in Formby and walk north to Ainsdale or south to Hightown",
      "Ainsdale has a station for a train back if you want a one-way walk",
      "Wind-exposed in places — dress accordingly",
    ],
  },
  {
    id: "shopping",
    emoji: "🛍️",
    title: "Browse the village shops",
    tag: "Shopping · Independent",
    highlight: "Chapel Lane and beyond",
    href: "/shopping",
    desc: "Formby village has a decent run of independent shops along Chapel Lane and the surrounding streets. Not a shopping destination in itself but a pleasant browse after lunch. There are also a couple of good charity shops if you&apos;re a bargain hunter — worth a look.",
    practical: [
      "Most shops are along Chapel Lane and Three Tuns Lane",
      "Parking in the village centre",
      "Mostly independent — more interesting than a high street",
    ],
  },
];

export default function ThingsToDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Things To Do</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Things to do in Formby
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Red squirrels, a brilliant beach, ancient pinewoods, and a village with good restaurants. Here&apos;s what&apos;s actually worth your time — from someone who lives here.
            </p>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10">
        <div className="container mx-auto px-4 max-w-7xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {THINGS.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="text-sm text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors py-1">
                {t.emoji} {t.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">

        <p className="text-xl text-[#1C3220]/80 leading-relaxed mb-12">
          Formby is small but it punches well above its weight for a day out. The National Trust site alone is worth the drive from Liverpool or Manchester. Add the village restaurants and a walk through the pines and you&apos;ve got a genuinely full day without having to try very hard.
        </p>

        <div className="space-y-10">
          {THINGS.map((t, i) => (
            <section key={t.id} id={t.id} className="scroll-mt-20">
              <div className="bg-white rounded-2xl border border-[#1C3220]/8 overflow-hidden">
                <div className="bg-gradient-to-r from-[#1C3220] to-[#2E6B3E] px-6 py-5">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{t.emoji}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs bg-white/20 text-white/80 px-2 py-0.5 rounded-full">{t.tag}</span>
                        <span className="text-xs text-[#C9A96E]">{t.highlight}</span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-white">{t.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#1C3220]/70 leading-relaxed mb-5">{t.desc}</p>
                  <div className="bg-[#E8EDE6] rounded-xl p-4 mb-5">
                    <h3 className="text-xs font-semibold text-[#1C3220] uppercase tracking-wider mb-2">Practical info</h3>
                    <ul className="space-y-1">
                      {t.practical.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-[#1C3220]/70">
                          <span className="text-[#2E6B3E] shrink-0">→</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={t.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E6B3E] hover:text-[#1C3220] transition-colors">
                    Full guide <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {i < THINGS.length - 1 && <div className="h-px bg-[#1C3220]/5 mt-10" />}
            </section>
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-16 mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is Formby worth visiting for a day trip?", a: "Yes, easily. The National Trust site alone gives you the squirrels, the pinewoods and the beach — that&apos;s a solid half day. Add lunch in the village and you&apos;ve got a full day without it feeling forced." },
              { q: "How far is Formby from Liverpool?", a: "About 20–25 minutes by car via the A565. On the Merseyrail Northern Line from Liverpool Central it&apos;s about 30 minutes to Formby station." },
              { q: "Is Formby good for families with young kids?", a: "Yes. The squirrel trail is flat and manageable, the beach is wide and safe (no lifeguard, but the beach itself is calm), and the walk through the pines is short enough to keep young children engaged. The NT café is on site. The one thing to manage is parking — book via the NT app first." },
              { q: "What&apos;s free at Formby?", a: "The pinewoods and beach are free to walk in. Parking is charged (free for NT members, from £6 for non-members). The NT café has a small entry/access fee in peak season — check the NT website for current details." },
              { q: "Is Formby good for dogs?", a: "Very. Dogs are welcome on the beach year-round, on the pinewood paths, and in the village. The only restriction is leads required in the red squirrel reserve section of the pinewoods (well-signed). Most of the village pubs and cafes are dog-friendly too." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <h3 className="font-semibold text-[#1C3220] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white">
          <h2 className="font-display text-2xl font-bold mb-2">Got a business in Formby?</h2>
          <p className="text-white/70 mb-6">Get listed on FormbyGuide and reach visitors planning their day.</p>
          <Link href="/claim-listing" className="inline-block bg-[#C9A96E] hover:bg-[#b8944f] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            List Your Business — Free
          </Link>
        </section>

      </div>
    </>
  );
}
