"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GALLERY = [
  { src: "/pinewoods-deep-woodland.webp", alt: "Deep inside Formby pinewoods — ancient coastal pine woodland" },
  { src: "/pinewoods-trail-sign.webp",    alt: "No horses signpost on Formby pinewoods trail" },
  { src: "/pinewoods-tall-tree.webp",     alt: "Tall Scots pine in Formby pinewoods" },
  { src: "/pinewoods-sandfield-farm.webp",alt: "Sandfield Farm heritage sign in the Formby pinewoods" },
  { src: "/pinewoods-map-sign.webp",      alt: "National Trust Formby site map and information board" },
];

const WHY_VISIT = [
  {
    title: "The Trees Themselves",
    desc: "Mature Scots pine and Corsican pine, some over 100 years old. Light through the canopy on a morning walk is genuinely beautiful. Photographers rate this highly.",
    image: "/squirrels-canopy.webp",
    imagePos: "object-center",
  },
  {
    title: "Red Squirrels",
    desc: "Primary habitat for Formby's red squirrel colony. They live in the canopy and come down to forage. Trails through denser pine sections have the most reliable sightings.",
    image: "/blog-card-wildlife.webp",
    imagePos: "object-center",
  },
  {
    title: "Access to the Beach",
    desc: "Follow main paths west and you emerge onto dunes and Formby Beach. Takes ~15 minutes. The transition from woodland to open sea is genuinely dramatic.",
    image: "/squirrels-beach-pines.webp",
    imagePos: "object-center",
  },
  {
    title: "Birdlife",
    desc: "Crossbills, goldcrests, coal tits, woodpeckers, waders and sea birds depending on season. Birders rate Formby highly for the woodland/coastal combination.",
    image: "/pinewoods-card-birds.webp",
    imagePos: "object-center",
  },
  {
    title: "Wildflowers & Plants",
    desc: "Spring brings wood anemones, bluebells and woodland plants in sheltered sections. Dune slacks have their own distinct plant communities.",
    image: "/pinewoods-flowers.webp",
    imagePos: "object-center",
  },
  {
    title: "Sunsets",
    desc: "The path through the pines to the beach in late afternoon with light filtering through the trees. The kind of walk people come back to repeatedly.",
    image: "/pinewoods-card-sunset.webp",
    imagePos: "object-center",
  },
];

const TRAILS = [
  {
    emoji: "🚶",
    name: "Squirrel Trail (short)",
    time: "30–45 minutes",
    level: "Easy",
    desc: "The dedicated red squirrel trail looping through the densest section. Flat throughout. Starts from main car park. Best for families or anyone wanting a manageable walk without committing to the beach.",
    tip: "Go early morning for best squirrel sightings.",
    image: "/squirrel-walk.webp",
    imagePos: "object-center",
  },
  {
    emoji: "🏖️",
    name: "Pinewoods to Beach",
    time: "1.5–2 hours return",
    level: "Easy",
    desc: "Walk from car park through pinewoods, emerging via dunes onto Formby Beach. Walk along sand, return through pines. Full experience of the site in one go. Flat all the way.",
    tip: "Trainers fine on dry days. Wellies better after rain.",
    image: "/beach-horses-ainsdale.webp",
    imagePos: "object-center",
  },
  {
    emoji: "🌊",
    name: "Full Sefton Coastal Path",
    time: "2.5–3.5 hours",
    level: "Easy–Moderate",
    desc: "Walk north through pines to Ainsdale or south toward Hightown. Flat, exposed in places, excellent for serious walkers. Can be done as linear walk with train back from Ainsdale.",
    tip: "Check Sefton Coast landscape website for current path conditions.",
    image: "/ainsdale-beach.webp",
    imagePos: "object-center",
  },
];

export default function PinewoodsContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const open = useCallback((idx: number) => setLightboxIndex(idx), []);

  return (
    <>
      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: "#why",     label: "Why Visit" },
              { href: "#walks",   label: "Walks & Trails" },
              { href: "#wildlife",label: "Wildlife" },
              { href: "#history", label: "History" },
              { href: "#plan",    label: "Plan Your Visit" },
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
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-[#1C3220]/80 leading-relaxed">
            The Formby pinewoods aren&apos;t natural — they were planted in the 19th century to stabilise sand dunes — but they feel ancient. What started as a practical project has become one of the most important habitats on the north-west coast. Mature Scots and Corsican pine, red squirrels in the canopy, and paths that walk you straight through to the beach.
          </p>
        </div>

        {/* Why Visit — image cards 3-col */}
        <section id="why" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">What Makes the Pinewoods Worth Visiting</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {WHY_VISIT.map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover ${item.imagePos} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-2 left-3 text-white font-display font-bold text-base drop-shadow">{item.title}</p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo break — deep woodland */}
        <button
          onClick={() => open(0)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image"
        >
          <Image
            src="/pinewoods-deep-woodland.webp"
            alt="Deep inside Formby pinewoods — ancient coastal pine woodland"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </button>

        {/* Walks & Trails — with image thumbnails */}
        <section id="walks" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Walks & Trails</h2>
          <div className="space-y-4 mb-8">
            {TRAILS.map(({ name, time, level, desc, tip, image, imagePos }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-40 sm:h-auto flex-none overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover ${imagePos}`}
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                    <span className="text-xs font-medium text-[#2E6B3E] bg-[#E8EDE6] px-2.5 py-1 rounded-full ml-2 whitespace-nowrap">{level}</span>
                  </div>
                  <p className="text-sm text-[#1C3220]/60 mb-2">⏱️ {time}</p>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3 flex-1">{desc}</p>
                  <p className="text-xs text-[#2E6B3E] font-medium">💡 {tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trail sign */}
          <button
            onClick={() => open(1)}
            className="relative w-full h-56 md:h-72 overflow-hidden rounded-2xl block cursor-zoom-in group"
            aria-label="View full image"
          >
            <Image
              src="/pinewoods-trail-sign.webp"
              alt="Trail signpost in Formby pinewoods"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow">The trails are well signed — follow the markers and you won&apos;t get lost</p>
          </button>
        </section>

        {/* Wildlife & Habitat */}
        <section id="wildlife" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Wildlife & Habitat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image src="/blog-card-wildlife.webp" alt="Red squirrel in Formby pinewoods" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-4 text-white font-bold drop-shadow">🐿️ Red Squirrels</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-2">The pinewoods are the primary habitat for Formby&apos;s red squirrel colony. They suit this woodland precisely and the National Trust actively manages the reserve to keep the population stable.</p>
                <p className="text-xs text-[#1C3220]/50 italic">One of the most significant red squirrel populations on the North West coast.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image src="/pinewoods-card-birds.webp" alt="Crossbill birds in Formby pinewoods" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-4 text-white font-bold drop-shadow">🦅 Birdlife</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-2">Crossbills, goldcrests, coal tits, woodpeckers, various waders and sea birds depending on season. The woodland-to-coast transition makes Formby particularly good for birders.</p>
                <p className="text-xs text-[#1C3220]/50 italic">Check season guides for best birdwatching times.</p>
              </div>
            </div>
            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow md:col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <Image src="/pinewoods-fungus-moss.webp" alt="Fungi and moss growing on a fallen log in Formby pinewoods" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-none" />
                  <p className="absolute bottom-3 left-4 text-white font-bold drop-shadow md:hidden">🍄 Fungi & Lichen</p>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <p className="font-bold text-[#1C3220] mb-2">🍄 Fungi & Lichen</p>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-2">Ancient woodland indicator species — the variety of fungi and lichen here tells you something about how long this woodland has been established. Best seen in autumn after rain, on fallen logs and the pine floor. Completely underrated.</p>
                  <p className="text-xs text-[#1C3220]/50 italic">October and November are peak fungus season.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Natterjack toad callout */}
          <div className="mt-8 rounded-2xl border border-[#2E6B3E]/20 bg-[#E8EDE6] overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="relative h-52 md:h-auto overflow-hidden">
                <Image src="/natterjack-pond.webp" alt="Natterjack toad conservation pond in Formby dune slacks" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="md:col-span-2 p-6 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E6B3E] mb-2">Conservation</p>
                <h3 className="font-display font-bold text-[#1C3220] text-lg mb-2">Natterjack Toads — Formby&apos;s Other Resident</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-4">Most people walk straight past the conservation ponds in the dune slacks without knowing what they are. Those ponds were built for natterjack toads — the rarest amphibian in Britain, and Formby is one of their last strongholds. In April and May you can hear the males calling at night from a surprisingly long distance.</p>
                <a href="/blog/natterjack-toads-formby" className="text-[#2E6B3E] font-semibold text-sm hover:underline">Read the full natterjack toad guide →</a>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section id="history" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">A Bit of History</h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <button onClick={() => open(3)} className="relative h-64 md:h-auto min-h-[260px] block cursor-zoom-in group" aria-label="View full image">
                <Image
                  src="/pinewoods-sandfield-farm.webp"
                  alt="Sandfield Farm heritage sign in the Formby pinewoods"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </button>
              <div className="bg-white p-8 flex flex-col justify-center">
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-4">
                  The pinewoods were planted in the late 19th century by the Formby family and later the Weld-Blundell estate to stabilise coastal dunes and provide timber. By the 20th century they had matured into the dense, atmospheric woodland you walk through today.
                </p>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Red squirrels have lived in the pinewoods for as long as anyone can remember — they suit the habitat precisely. The decline of grey squirrel populations in managed reserves like this one has helped stabilise the red population. The National Trust acquired the site in the 1960s and has been managing it for conservation ever since.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section id="plan" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Plan Your Visit</h2>
          <button
            onClick={() => open(4)}
            className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl block cursor-zoom-in group mb-6"
            aria-label="View full image"
          >
            <Image
              src="/pinewoods-map-sign.webp"
              alt="National Trust Formby site map and information board"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </button>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Address",        value: "Victoria Road, Formby, L37 1YH" },
              { label: "Opening",        value: "Year-round, dawn to dusk" },
              { label: "Parking",        value: "NT car park. Book via app before leaving. £6 non-members." },
              { label: "Dogs",           value: "Welcome throughout. Leads required in squirrel reserve (signed)." },
              { label: "Pushchairs",     value: "Main paths manageable on dry days. Sandy sections near dunes are difficult." },
              { label: "Café & Toilets", value: "NT café at visitor point. Toilets & baby changing available." },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#E8EDE6] rounded-xl p-4 border border-[#1C3220]/10">
                <p className="text-xs font-semibold text-[#1C3220]/60 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-[#1C3220]/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore More */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/red-squirrels-formby", label: "Red Squirrels",  desc: "One of the best places in England to see them.",   image: "/squirrels-hero.webp" },
              { href: "/formby-beach",          label: "Formby Beach",   desc: "Wide sand, dramatic dunes, and the Irish Sea.",    image: "/formby-beach-hero.jpg" },
              { href: "/things-to-do",          label: "Things To Do",   desc: "The full guide to a day out in Formby.",           image: "/ttd-card-coastal-path.webp" },
              { href: "/about-formby",          label: "About Formby",   desc: "Where it is, what it's like, and why visit.",      image: "/about-formby-hero.webp" },
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
