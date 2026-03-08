"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY = [
  { src: "/squirrels-canopy.webp",       alt: "Morning light filtering through the pine canopy in Formby pinewoods" },
  { src: "/blog-card-walks.webp",        alt: "The red squirrel trail through the Formby pinewoods" },
  { src: "/squirrels-beach-pines.webp",  alt: "The pinewoods-to-beach walk at Formby — woodland giving way to sand dunes" },
  { src: "/ttd-card-coastal-path.webp",  alt: "The Sefton Coastal Path heading north from Formby toward Ainsdale" },
];

const TRAILS = [
  {
    name: "Squirrel Trail (short)",
    time: "30–45 mins",
    difficulty: "Easy",
    desc: "The dedicated red squirrel trail looping through dense pinewood. This is where sightings are most reliable. Starts from main car park. Good for all ages including pushchairs on wider sections.",
    image: "/blog-card-walks.webp",
    imagePos: "object-center",
    galleryIdx: 1,
  },
  {
    name: "Beach & Pines (extended)",
    time: "1.5–2 hours",
    difficulty: "Easy–Moderate",
    desc: "Follow squirrel trail through pines, continue west to beach, walk along sand, return through dunes. Brilliant combination — wildlife and sea in one go. Wellies or sturdy footwear recommended.",
    image: "/squirrels-beach-pines.webp",
    imagePos: "object-center",
    galleryIdx: 2,
  },
  {
    name: "Full Coastal Path",
    time: "2.5–3 hours",
    difficulty: "Moderate",
    desc: "Walk north along Sefton Coastal Path toward Ainsdale or south toward Hightown. Flat but exposed to coastal winds. Can be done as linear walk with train back from Ainsdale.",
    image: "/ttd-card-coastal-path.webp",
    imagePos: "object-[center_40%]",
    galleryIdx: 3,
  },
];

export default function RedSquirrelsContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const open = useCallback((idx: number) => setLightboxIndex(idx), []);

  return (
    <>
      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: "#when",   label: "Best Times" },
              { href: "#where",  label: "Where to Go" },
              { href: "#trails", label: "Trails" },
              { href: "#tips",   label: "Tips" },
              { href: "#faq",    label: "FAQ" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Best Time */}
        <section id="when" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">When to Visit for Best Sightings</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { season: "Best",      months: "September – February", desc: "Peak season. Squirrels are most active foraging before winter. Fewer leaves = better sightings. Autumn light through the pines is stunning." },
              { season: "Good",      months: "March – May",          desc: "Young squirrels born in spring. You may spot juveniles. Activity is good but thicker foliage makes spotting harder." },
              { season: "Possible",  months: "June – August",        desc: "Summer is quietest — squirrels are active but dense canopy and heat reduces visibility. Go early morning." },
              { season: "Time of Day", months: "First 2 hours after sunrise", desc: "Consistently the best window. They come down from the canopy to forage before it gets busy. By midday they're much harder to spot." },
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

        {/* Canopy photo break — now lightbox-clickable */}
        <button
          onClick={() => open(0)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image — morning light through the pinewoods"
        >
          <Image
            src="/squirrels-canopy.webp"
            alt="Morning light filtering through the pine canopy in Formby pinewoods"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <p className="absolute bottom-4 left-6 text-white/70 text-xs italic">Morning light through the Formby pinewoods</p>
          <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-lg">Enlarge</span>
        </button>

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
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> Download NT app &amp; book parking before you leave</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span> No phone signal on site</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Distance from Nearby Cities</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Liverpool city centre</span><span className="font-semibold text-[#2E6B3E]">20–25 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Southport</span><span className="font-semibold text-[#2E6B3E]">10 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Wigan/Manchester</span><span className="font-semibold text-[#2E6B3E]">45–60 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Preston</span><span className="font-semibold text-[#2E6B3E]">35 mins</span></li>
                <li className="flex justify-between"><span className="text-[#1C3220]/70">Train to Formby station</span><span className="font-semibold text-[#2E6B3E]">20 min walk</span></li>
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

        {/* Trails — all thumbnails clickable */}
        <section id="trails" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Squirrel Trails & Walks</h2>
          <div className="space-y-4">
            {TRAILS.map(({ name, time, difficulty, desc, image, imagePos, galleryIdx }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
                <button
                  onClick={() => open(galleryIdx)}
                  className="relative w-full sm:w-48 h-40 sm:h-auto flex-none overflow-hidden block cursor-zoom-in group/trail focus:outline-none"
                  aria-label={`Enlarge: ${name}`}
                >
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover ${imagePos} transition-transform duration-500 group-hover/trail:scale-105`}
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                  <span className="absolute top-2 right-2 opacity-0 group-hover/trail:opacity-100 transition bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-lg">Enlarge</span>
                </button>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                    <span className="text-xs font-medium text-[#2E6B3E] bg-[#E8EDE6] px-2.5 py-1 rounded-full ml-2 whitespace-nowrap">{difficulty}</span>
                  </div>
                  <p className="text-sm text-[#1C3220]/60 mb-2">⏱️ {time}</p>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Tips & What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: "👁️", title: "Move Slowly & Quietly",     desc: "They hear you before they see you. Walk slowly, stop often, look up into canopy. Less spooking = higher chance they carry on." },
              { emoji: "🔭", title: "Bring Binoculars",           desc: "Not essential but brilliant. Often high in the pines — binoculars let you see properly instead of just a rusty blur." },
              { emoji: "🧥", title: "Dress for Coastal Weather",  desc: "Coastal woodland gets cool and damp even on warm days. Layers and waterproofs make sense year-round." },
              { emoji: "👟", title: "Good Footwear",              desc: "Trainers fine on dry days. After rain paths are muddy. Wellies if you're planning to walk to the beach." },
              { emoji: "📱", title: "Download NT App First",      desc: "You need it for parking. Signal on site is poor. Sort it at home before you leave." },
              { emoji: "🐕", title: "Dogs Welcome (On Leads)",    desc: "Dogs are fine on trails but must be on leads in squirrel reserve. Signs mark where the lead zone starts." },
              { emoji: "📸", title: "Photography Tips",           desc: "Morning light through pines is stunning. Phone cameras struggle with low canopy light — a decent zoom lens helps." },
              { emoji: "🚫", title: "Don't Feed Them",            desc: "Tempting but harmful to squirrels and the reserve. Watch and enjoy — that's enough." },
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
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "Are red squirrels guaranteed?",     a: "No wildlife sighting is ever guaranteed, but Formby is about as reliable as it gets in England. Go early on a dry morning in autumn or winter and chances are good. Some mornings you'll see several. On a wet summer afternoon, you might see none. Manage expectations but don't be put off — it's worth the visit regardless." },
              { q: "Is it suitable for young children?", a: "Yes. The squirrel trail is flat and manageable for kids. Pushchairs are fine on main paths. Keep children calm and slow-moving near the squirrel zone — excited running sends them straight up into the canopy." },
              { q: "Do I need to book?",                a: "You don't need to book to visit — but you should book your parking slot via the NT app or website before you leave, especially in summer and at weekends. The car park fills up and on-site signal is terrible." },
              { q: "What's happened to the red squirrel population?", a: "Grey squirrels, introduced from North America in the 1870s, gradually displaced reds across most of England. They compete for food and carry squirrelpox (fatal to reds but not greys). Formby survives because the habitat suits reds and the NT actively manages the reserve, including grey squirrel control." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wildlife cross-link */}
        <section className="mb-16 pt-10 border-t border-[#1C3220]/10">
          <p className="text-sm text-[#1C3220]/70 leading-relaxed">
            Curious about the biology? The{" "}
            <a
              href="https://www.seftoncoastwildlife.co.uk/mammals/red-squirrel"
              className="font-medium text-[#2E6B3E] underline underline-offset-2 hover:text-[#1C3220] transition-colors"
            >
              Sefton Coast Wildlife red squirrel species profile
            </a>{" "}
            covers habitat, diet, conservation status, and why the Formby population has survived where others haven&apos;t — including why grey squirrels struggle in pure pine.
          </p>
        </section>

        {/* Where to eat after your visit */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10 mb-16">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-2">Where to Eat After Your Visit</h3>
          <p className="text-[#1C3220]/60 text-sm mb-6 leading-relaxed">
            The NT café is at the car park — decent coffee and cake. For a proper meal, the village is 10 minutes by car.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {[
              {
                name: "NT Café",
                href: "/cafes",
                tag: "On site",
                tagColor: "bg-[#2E6B3E] text-white",
                emoji: "☕",
                desc: "At the Victoria Road car park. Coffee, cake and hot bites. Dogs welcome outside. Convenient post-walk stop before the drive home.",
              },
              {
                name: "The Sparrowhawk",
                href: "/restaurants/the-sparrowhawk-formby",
                tag: "Dog-friendly",
                tagColor: "bg-amber-500 text-white",
                emoji: "🍺",
                desc: "Best post-walk option in the village. Gastropub food, beer garden in summer, genuinely dog-friendly. No booking needed most of the time.",
              },
              {
                name: "Emily's",
                href: "/restaurants",
                tag: "Local favourite",
                tagColor: "bg-[#1C3220] text-white",
                emoji: "🍽️",
                desc: "The most-loved neighbourhood restaurant in Formby. Relaxed, good food, reasonable prices. Worth booking ahead at weekends.",
              },
            ].map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{r.emoji}</span>
                    <h4 className="font-display font-bold text-[#1C3220] text-base group-hover:text-[#2E6B3E] transition-colors">{r.name}</h4>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-none ${r.tagColor}`}>{r.tag}</span>
                </div>
                <p className="text-sm text-[#1C3220]/65 leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/guides/best-restaurants-formby"
            className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            Best restaurants in Formby →
          </Link>
        </section>

        {/* Explore More */}
        <section className="mt-4 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/formby-beach",     label: "Formby Beach",    desc: "Wide sand, dramatic dunes, and the Irish Sea.",      image: "/formby-beach-hero.jpg" },
              { href: "/formby-pinewoods", label: "Pinewoods Walks", desc: "Ancient woodland paths running to the sea.",         image: "/pinewoods-deep-woodland.webp" },
              { href: "/things-to-do",     label: "Things To Do",    desc: "The full guide to a day out in Formby.",             image: "/ttd-card-coastal-path.webp" },
              { href: "/about-formby",     label: "About Formby",    desc: "Where it is, what it's like, and why visit.",        image: "/about-formby-hero.webp" },
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

      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={GALLERY.map(({ src, alt }) => ({ src, alt }))}
      />
    </>
  );
}
