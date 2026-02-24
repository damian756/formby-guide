"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MapPin, Car, Dog, Coffee, ChevronRight, Info, Shield } from "lucide-react";

const GALLERY = [
  { src: "/formby-beach-shell.jpg",       alt: "Formby Beach — shell and sand dunes with the Irish Sea behind" },
  { src: "/formby-beach-shell-close.jpg", alt: "Shell on Formby Beach sand" },
  { src: "/formby-beach-sea.jpg",         alt: "Families walking along Formby Beach at the water's edge with waves and sand dunes" },
  { src: "/beach-birds.webp",             alt: "Crows on Formby Beach sand" },
  { src: "/formby-beach-paws.jpg",        alt: "Dog paws on Formby Beach sand" },
  { src: "/beach-dunes-new.webp",         alt: "Formby sand dunes looking toward the Irish Sea" },
  { src: "/beach-dunes-skull.webp",       alt: "Animal skull on Formby Beach dunes" },
];

export default function FormbyBeachContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const open = useCallback((idx: number) => setLightboxIndex(idx), []);

  return (
    <>
      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: "#practical", label: "Practical Info" },
              { href: "#conditions", label: "What to Expect" },
              { href: "#dogs", label: "Dogs" },
              { href: "#dunes", label: "Dunes & Point" },
              { href: "#facilities", label: "Facilities" },
              { href: "#safety", label: "Safety" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors font-medium">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <div className="bg-[#1C3220]">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl py-10">
          <div className="md:flex md:items-end md:gap-16">
            <div className="mb-8 md:mb-0 md:flex-1">
              <p className="font-display text-2xl md:text-3xl text-white font-semibold leading-snug">
                A <span className="text-[#C9A96E]">proper beach</span> — wide open sand, dramatic dunes, pinewoods behind you and the Irish Sea in front.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
                Busy on a sunny Saturday in summer. Almost empty on a Tuesday in October. Both are valid. No promenade, no amusements — just beach.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-none">
              {[
                { icon: "📍", label: "Postcode", val: "L37 1YH" },
                { icon: "🅿️", label: "Parking", val: "From £6" },
                { icon: "🐕", label: "Dogs", val: "Year-round" },
                { icon: "☕", label: "Café", val: "On site" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="bg-white/8 rounded-xl px-4 py-3 border border-white/10 min-w-[110px]">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{icon} {label}</div>
                  <div className="text-sm font-bold text-white">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Practical Info */}
        <section id="practical" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image src="/beach-car-park-sign.webp" alt="Formby Beach National Trust car park sign" fill className="object-cover object-center scale-95" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Car className="w-6 h-6 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1C3220] text-lg">Parking & Getting There</h3>
                    <p className="text-sm text-[#1C3220]/60">L37 1YH</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span><span className="text-[#1C3220]/70"><strong>NT Members:</strong> Free parking, book via app</span></li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span><span className="text-[#1C3220]/70"><strong>Non-members:</strong> From £6/day via NT app</span></li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span><span className="text-[#1C3220]/70">Train from Formby station: 20-min walk</span></li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold">•</span><span className="text-[#1C3220]/70">Book BEFORE you leave — no signal on site</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <Image src="/beach-how-far-map.webp" alt="Map showing Formby's location on the Sefton Coast between Liverpool and Southport" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1C3220] text-lg">How Far Away?</h3>
                    <p className="text-sm text-[#1C3220]/60">From nearby cities</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between"><span className="text-[#1C3220]/70">Liverpool city centre</span> <span className="font-semibold text-[#2E6B3E]">20–25 mins</span></li>
                  <li className="flex justify-between"><span className="text-[#1C3220]/70">Southport</span> <span className="font-semibold text-[#2E6B3E]">10 mins</span></li>
                  <li className="flex justify-between"><span className="text-[#1C3220]/70">Manchester</span> <span className="font-semibold text-[#2E6B3E]">45–60 mins</span></li>
                  <li className="flex justify-between"><span className="text-[#1C3220]/70">Preston</span> <span className="font-semibold text-[#2E6B3E]">35 mins</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Photo break — shell */}
        <button
          onClick={() => open(0)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image"
        >
          <Image
            src="/formby-beach-shell.jpg"
            alt="Formby Beach — shell and sand dunes with the Irish Sea behind"
            fill
            className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <p className="absolute bottom-4 left-4 text-white/80 text-sm drop-shadow">Formby Beach at low tide — plenty of space</p>
        </button>

        {/* What to Expect */}
        <section id="conditions" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">What the Beach Is Actually Like</h2>
          <div className="grid lg:grid-cols-3 gap-4">

            {/* Feature — left, spans 2 cols, full height */}
            <button
              onClick={() => open(2)}
              className="lg:col-span-2 relative rounded-2xl overflow-hidden cursor-zoom-in group h-72 lg:h-auto lg:min-h-[440px] block w-full text-left"
              aria-label="View full image"
            >
              <Image
                src="/formby-beach-sea.jpg"
                alt="Families walking along Formby Beach at the water's edge with waves and sand dunes"
                fill
                className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-bold text-white text-xl mb-2">The Beach Itself</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-lg">Wide sandy beach backed by significant dunes. Pinewoods behind the dunes — walk through takes ~15 mins. Flat paths, pushchair-friendly on dry days. West-facing, so sunsets are exceptional.</p>
              </div>
            </button>

            {/* Right column — two stacked cards */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => open(1)}
                className="relative flex-1 rounded-2xl overflow-hidden cursor-zoom-in group min-h-[200px] block w-full text-left"
                aria-label="View full image"
              >
                <Image
                  src="/formby-beach-shell-close.jpg"
                  alt="Shell on Formby Beach sand"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-white text-base mb-1">The Sea</h3>
                  <p className="text-white/75 text-xs leading-relaxed">Irish Sea — don&apos;t expect Mediterranean temps. Significant tidal range. Low tide = plenty of sand. Check tides before you go.</p>
                </div>
              </button>

              <button
                onClick={() => open(3)}
                className="relative flex-1 rounded-2xl overflow-hidden cursor-zoom-in group min-h-[200px] block w-full text-left"
                aria-label="View full image"
              >
                <Image
                  src="/beach-birds.webp"
                  alt="Crows on Formby Beach sand"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display font-bold text-white text-base mb-1">Best Times</h3>
                  <p className="text-white/75 text-xs leading-relaxed">Low tide + not too windy = perfect. Winter is brilliant if you like it quiet and dramatic. Sunsets here are genuinely special.</p>
                </div>
              </button>
            </div>

          </div>
        </section>

        {/* Dogs */}
        <section id="dogs" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Dogs at Formby Beach</h2>
          <div className="rounded-2xl border border-blue-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <button onClick={() => open(4)} className="relative h-64 md:h-auto min-h-[260px] block cursor-zoom-in group" aria-label="View full image">
                <Image
                  src="/formby-beach-paws.jpg"
                  alt="Dog paws on Formby Beach sand"
                  fill
                  className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </button>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center">
                <Dog className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-lg text-blue-900 mb-6 leading-relaxed">
                  Dogs are <strong>welcome year-round</strong> — no seasonal restrictions. This makes Formby one of the better dog beaches on the Sefton Coast.
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center gap-2"><span className="font-bold text-green-600">✓</span> <span className="text-blue-800"><strong>On the beach:</strong> No restrictions</span></div>
                  <div className="flex items-center gap-2"><span className="font-bold text-green-600">✓</span> <span className="text-blue-800"><strong>In pinewoods:</strong> Welcome</span></div>
                  <div className="flex items-center gap-2"><span className="font-bold text-amber-600">!</span> <span className="text-blue-800"><strong>In squirrel reserve:</strong> Must be on leads</span></div>
                  <div className="flex items-center gap-2"><span className="text-blue-600">💧</span> <span className="text-blue-800"><strong>Water:</strong> Bring your own</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo break — dunes */}
        <button
          onClick={() => open(5)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image"
        >
          <Image
            src="/beach-dunes-new.webp"
            alt="Formby sand dunes looking toward the Irish Sea"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </button>

        {/* Dunes & Formby Point */}
        <section id="dunes" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Sand Dunes & Formby Point</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button onClick={() => open(6)} className="relative h-48 w-full block cursor-zoom-in group" aria-label="View full image">
                <Image src="/beach-dunes-skull.webp" alt="Animal skull on Formby Beach sand dunes" fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </button>
              <div className="p-6">
                <h3 className="font-semibold text-[#1C3220] text-lg mb-3">The Dunes</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Sand dunes over 10 metres high. Part of active conservation effort. You&apos;ll see fenced-off sections — not jobsworth bureaucracy. The dunes are genuinely fragile and the NT is fighting coastal erosion that&apos;s been eating into the pinewoods for decades.
                </p>
                <p className="text-xs text-[#1C3220]/50 italic">Please don&apos;t climb restricted areas.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image src="/beach-dunes-spring-bud.webp" alt="Spring vegetation growing on Formby sand dunes" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Formby Point</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Headland at the south end of the beach. ~1.5 mile walk from main car park. Views back along the coast are worth it. At low tide, sometimes see prehistoric footprints — over 5,000 years old. They appear and disappear with the sand.
                </p>
                <p className="text-xs text-[#1C3220]/50 italic">Let the NT know if you spot them — don&apos;t disturb.</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#1C3220]/70 leading-relaxed">
            The dune system supports a range of coastal species — ringed plover, little tern, natterjack toad, and several SAC-qualifying plants.{" "}
            <a
              href="https://www.seftoncoastwildlife.co.uk/nature/sefton-coast"
              className="font-medium text-[#2E6B3E] underline underline-offset-2 hover:text-[#1C3220] transition-colors"
            >
              Sefton Coast Wildlife covers the dune and coastal species
            </a>{" "}
            you&apos;re likely to encounter along the shoreline and point.
          </p>
        </section>

        {/* Facilities */}
        <section id="facilities" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Coffee, title: "Café", desc: "NT café at visitor point. Coffee, cake, soup, light bites. Outdoor seating. Not cheap but decent." },
              { icon: MapPin, title: "Toilets", desc: "At the NT car park/visitor point. Clean and well-maintained. Baby changing available." },
              { icon: Info, title: "Accessibility", desc: "Main paths manageable for pushchairs on dry days. Beach and dune paths are uneven. Check NT website for current details." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon className="w-6 h-6 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-[#1C3220] text-lg">{title}</h3>
                </div>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Tides */}
        <section id="safety" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Safety & Tides</h2>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 text-lg mb-4">Important Information</h3>
                <ul className="space-y-3 text-sm text-amber-900">
                  <li className="flex gap-2"><span className="font-bold">⚠️</span><span><strong>No lifeguard service.</strong> Swim with care and be aware of the tide.</span></li>
                  <li className="flex gap-2"><span className="font-bold">🌊</span><span><strong>Rip currents present at times.</strong> Don&apos;t go out far and don&apos;t swim alone.</span></li>
                  <li className="flex gap-2"><span className="font-bold">📱</span><span><strong>Check tide times before you go.</strong> BBC Weather, Tide Times UK, or Met Office for Formby/Southport predictions.</span></li>
                  <li className="flex gap-2"><span className="font-bold">⏱️</span><span><strong>Tide comes in quickly here.</strong> Be aware of where you are relative to the waterline.</span></li>
                  <li className="flex gap-2"><span className="font-bold">✅</span><span><strong>Best for walking:</strong> Low to mid tide gives most beach and firmer sand.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links — image cards like about-formby */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Red Squirrels", href: "/red-squirrels-formby", desc: "One of the best places in England to see them in the wild.", image: "/squirrels-hero.webp" },
              { label: "Pinewoods Walks", href: "/formby-pinewoods", desc: "Ancient woodland and coastal paths.", image: "/ttd-card-coastal-path.webp" },
              { label: "Things To Do", href: "/things-to-do", desc: "The full guide to a day in Formby.", image: "/ttd-card-beach.webp" },
              { label: "About Formby", href: "/about-formby", desc: "Where it is, what it&apos;s like, and why visit.", image: "/about-formby-hero.webp" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group relative h-40 rounded-2xl overflow-hidden block">
                <Image src={l.image} alt={l.label} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-display font-bold text-base">{l.label} →</p>
                  <p className="text-white/70 text-xs">{l.desc}</p>
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
