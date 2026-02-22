import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/things-to-do-hero2.webp`, width: 1200, height: 630, alt: "Things to do in Formby — beach, pinewoods and red squirrels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Things To Do in Formby | Local Guide",
    description:
      "Red squirrels, a brilliant beach, pinewoods walks, and a village with good restaurants. Everything worth doing in Formby — from a local.",
  },
};

const FEATURED = [
  {
    id: "squirrels",
    emoji: "🐿️",
    tag: "Nature · National Trust",
    title: "See the red squirrels",
    desc: "Formby is one of the last reliable places in England to see red squirrels in the wild. Go early morning — September to February is peak season, but you've got a decent chance year-round. Even my teenagers stop complaining the minute they spot one.",
    href: "/red-squirrels-formby",
    image: "/squirrels-hero.webp",
    imagePosition: "object-center",
    practical: ["Postcode: L37 1YH", "Book parking via NT app before you leave", "Go early morning for best sightings", "Dogs welcome on leads"],
  },
  {
    id: "beach",
    emoji: "🏖️",
    tag: "Beach · Sand dunes",
    title: "Formby Beach",
    desc: "A proper beach. Wide open sand, dramatic dunes, and the Irish Sea with no theme park attached. Walk through the pinewoods to get there — about 15 minutes from the car park. The moment you come over the dunes is genuinely great.",
    href: "/formby-beach",
    image: "/beach-dunes-new.webp",
    imagePosition: "object-center",
    practical: ["Same car park as the squirrel reserve (L37 1YH)", "Dogs welcome year-round, no seasonal restrictions", "No lifeguard — check tides before you go", "Best at low to mid tide for walking"],
  },
  {
    id: "pinewoods",
    emoji: "🌲",
    tag: "Walking · Nature",
    title: "Walk the pinewoods",
    desc: "Worth the visit even if you don't see a squirrel. Mature Scots and Corsican pines, quiet paths, the sound of the sea getting closer as you walk west. Short woodland loop (30 mins) or all the way to the beach and back (1.5–2 hrs). Flat the whole way.",
    href: "/formby-pinewoods",
    image: "/pinewoods-hero.webp",
    imagePosition: "object-center",
    practical: ["Starts from NT car park, Victoria Road", "Flat terrain, manageable for most", "Wellies recommended after rain", "Continue to the beach for the full experience"],
  },
];

const SECONDARY = [
  {
    id: "eat",
    emoji: "🍽️",
    tag: "Restaurants · Cafes",
    title: "Eat in the village",
    desc: "Formby has a genuinely good restaurant scene for a town this size. Emily's is popular and relaxed, Left Bank Brasserie is a proper treat (book ahead for weekends), Don Luigi does solid Italian, and The Sparrowhawk is reliable for a post-walk lunch.",
    href: "/restaurants",
    image: "/about-village-street.webp",
    imagePosition: "object-center",
    practical: ["Book ahead for weekends — the good ones fill up", "Village centre: ~10 mins from NT beach", "Chapel Lane has most of the independents"],
  },
  {
    id: "cycling",
    emoji: "🚴",
    tag: "Cycling · Outdoor",
    title: "Cycle the Sefton Coast",
    desc: "The Trans Pennine Trail runs along the coast and is cycle-friendly. Southport to Formby without touching a main road — flat, largely traffic-free, and genuinely pretty. Good for families with older children who can manage a few miles.",
    href: "/activities",
    image: "/ainsdale-beach.webp",
    imagePosition: "object-center",
    practical: ["Formby to Southport: approx 8 miles each way", "Coastal sections can be sandy — wide tyres better"],
  },
  {
    id: "coastal-path",
    emoji: "🥾",
    tag: "Walking · Coastal",
    title: "Walk the Sefton Coastal Path",
    desc: "The Sefton Coastal Path runs from Waterloo (Liverpool) to Southport — Formby sits roughly in the middle. The stretch between Formby and Ainsdale is particularly good. Flat, exposed, sea views the whole way.",
    href: "/nature-walks",
    image: "/squirrels-beach-pines.webp",
    imagePosition: "object-center",
    practical: ["Park in Formby, walk north to Ainsdale or south to Hightown", "Ainsdale has a station — good for a one-way walk"],
  },
  {
    id: "shopping",
    emoji: "🛍️",
    tag: "Shopping · Independent",
    title: "Browse the village shops",
    desc: "A decent run of independent shops along Chapel Lane and the surrounding streets. Not a shopping destination in itself but a pleasant browse after lunch. There are good charity shops too if you're a bargain hunter.",
    href: "/shopping",
    image: "/pinewoods-flowers.webp",
    imagePosition: "object-center",
    practical: ["Chapel Lane and Three Tuns Lane", "Parking in the village centre"],
  },
  {
    id: "horse-riding",
    emoji: "🐴",
    tag: "Activities · Outdoors",
    title: "Horse riding on the beach",
    desc: "Horses on Formby and Ainsdale beach are a proper sight — and you can join them. A couple of local stables offer beach and coastal rides, and the wide flat sands make it one of the better horse riding experiences on the north-west coast. You don't need previous experience for the shorter rides.",
    href: "/activities",
    image: "/beach-horses-ainsdale.webp",
    imagePosition: "object-center",
    practical: ["Book in advance — rides fill up quickly in summer", "Ainsdale beach end is most commonly used", "Suitable for beginners on guided rides"],
  },
];


export default function ThingsToDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[420px] flex items-center">
        <Image
          src="/squirrels-beach-pines.webp"
          alt="The transition from Formby pinewoods to beach and dunes"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Things To Do</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Things to do in Formby
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow">
              Red squirrels, a brilliant beach, ancient pinewoods, and a village with good restaurants. Here&apos;s what&apos;s actually worth your time — from someone who lives here.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Postcode",       value: "L37 1YH" },
                { label: "Parking",        value: "From £6" },
                { label: "Dogs",           value: "Welcome" },
                { label: "From Liverpool", value: "~25 mins" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-black/30 backdrop-blur rounded-lg p-3 border border-white/20">
                  <div className="text-xs text-white/60 mb-1">{label}</div>
                  <div className="text-sm font-bold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <div className="bg-[#1C3220]">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl py-10">
          <div className="md:flex md:items-end md:gap-16 md:flex-nowrap">
            <div className="mb-6 md:mb-0 md:flex-1 md:min-w-0">
              <p className="font-display text-2xl md:text-3xl text-white font-semibold leading-snug">
                Small village, <span className="text-[#C9A96E]">genuinely full day out</span> — the NT site alone is worth the drive from Liverpool or Manchester.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
                Add the village restaurants and a walk through the pines and you won&apos;t be stuck for things to do.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-shrink-0">
              {[...FEATURED, ...SECONDARY].map((t) => (
                <a key={t.id} href={`#${t.id}`} className="text-xs bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-colors whitespace-nowrap">
                  {t.emoji} {t.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-14">

        {/* Featured three */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {FEATURED.map((t) => (
            <section key={t.id} id={t.id} className="scroll-mt-20 group">
              <div className="bg-white rounded-2xl border border-[#1C3220]/8 overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-none">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className={`object-cover ${t.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs bg-[#2E6B3E] text-white px-2.5 py-1 rounded-full font-semibold">
                    {t.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-display text-xl font-bold text-[#1C3220] mb-2">{t.title}</h2>
                  <p className="text-sm text-[#1C3220]/65 leading-relaxed mb-4 flex-1">{t.desc}</p>
                  {/* Practical */}
                  <div className="bg-[#E8EDE6] rounded-xl p-3 mb-4">
                    <ul className="space-y-1">
                      {t.practical.map((p) => (
                        <li key={p} className="flex gap-2 text-xs text-[#1C3220]/70">
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
            </section>
          ))}
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-[#1C3220]/10" />
          <span className="text-xs text-[#1C3220]/40 uppercase tracking-widest font-semibold">Also worth your time</span>
          <div className="flex-1 h-px bg-[#1C3220]/10" />
        </div>

        {/* Secondary four */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SECONDARY.map((t) => (
            <section key={t.id} id={t.id} className="scroll-mt-20 group">
              <div className="bg-white rounded-2xl border border-[#1C3220]/8 overflow-hidden flex hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative w-36 sm:w-48 flex-none overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className={`object-cover ${t.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 144px, 192px"
                  />
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col flex-1 min-w-0">
                  <div className="mb-1.5">
                    <span className="text-[10px] text-[#1C3220]/50 font-semibold uppercase tracking-wider">{t.tag}</span>
                  </div>
                  <h2 className="font-display text-base font-bold text-[#1C3220] mb-1.5">{t.title}</h2>
                  <p className="text-xs text-[#1C3220]/60 leading-relaxed mb-3 flex-1">{t.desc}</p>
                  <ul className="space-y-0.5 mb-3">
                    {t.practical.map((p) => (
                      <li key={p} className="flex gap-1.5 text-xs text-[#1C3220]/55">
                        <span className="text-[#2E6B3E] shrink-0">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={t.href} className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E6B3E] hover:text-[#1C3220] transition-colors">
                    Full guide <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* FAQ — 2 col on desktop */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Common questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Is Formby worth visiting for a day trip?", a: "Yes, easily. The National Trust site alone gives you the squirrels, the pinewoods and the beach — that's a solid half day. Add lunch in the village and you've got a full day without it feeling forced." },
              { q: "How far is Formby from Liverpool?", a: "About 20–25 minutes by car via the A565. On the Merseyrail Northern Line from Liverpool Central it's about 30 minutes to Formby station." },
              { q: "Is Formby good for families with young kids?", a: "Yes. The squirrel trail is flat and manageable, the beach is wide and safe (no lifeguard, but the beach itself is calm), and the walk through the pines is short enough. The NT café is on site. Book parking via the NT app first." },
              { q: "What's free at Formby?", a: "The pinewoods and beach are free to walk in. Parking is charged (free for NT members, from £6 for non-members). The NT café has a small entry fee in peak season — check the NT website." },
              { q: "Is Formby good for dogs?", a: "Very. Dogs are welcome on the beach year-round, on the pinewood paths, and in the village. The only restriction is leads required in the red squirrel reserve section — it's well-signed. Most village pubs and cafes are dog-friendly too." },
              { q: "Do you need to book the NT car park?", a: "Yes — and do it before you leave the house. There's no signal in the car park. Download the National Trust app, find Formby, and book ahead. It fills up fast on sunny weekends." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <h3 className="font-semibold text-[#1C3220] mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore More */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10 mb-16">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/red-squirrels-formby", label: "Red Squirrels",  desc: "One of the best places in England to see them.",   image: "/squirrels-hero.webp" },
              { href: "/formby-beach",          label: "Formby Beach",   desc: "Wide sand, dramatic dunes, and the Irish Sea.",    image: "/formby-beach-hero.jpg" },
              { href: "/formby-pinewoods",      label: "Pinewoods",      desc: "Ancient woodland walks to the sea.",              image: "/pinewoods-deep-woodland.webp" },
              { href: "/about-formby",          label: "About Formby",   desc: "Where it is, what it's like, and why visit.",     image: "/about-formby-hero.webp" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group relative h-48 rounded-2xl overflow-hidden block">
                <Image src={l.image} alt={l.label} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-bold text-base">{l.label} →</p>
                  <p className="text-white/70 text-xs mt-0.5">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold mb-1">Got a business in Formby?</h2>
            <p className="text-white/70">Get listed on FormbyGuide and reach visitors planning their day.</p>
          </div>
          <Link href="/claim-listing" className="inline-block bg-[#C9A96E] hover:bg-[#b8944f] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap flex-none">
            List Your Business — Free
          </Link>
        </section>

      </div>
    </>
  );
}
