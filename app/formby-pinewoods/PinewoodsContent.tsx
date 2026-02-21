"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MapPin, Clock, Dog, Compass, Binoculars, Info } from "lucide-react";

const GALLERY = [
  { src: "/pinewoods-woods.webp",         alt: "Sunlit Formby pinewoods with walker on path" },
  { src: "/pinewoods-cycling-sign.webp",  alt: "National Trust cycling trails sign in Formby pinewoods" },
  { src: "/pinewoods-woods-tall.jpg",     alt: "Looking up at tall pines and mixed woodland in Formby" },
  { src: "/pinewoods-sandfield-farm.webp",alt: "Sandfield Farm heritage sign in the Formby pinewoods" },
  { src: "/pinewoods-map.webp",           alt: "National Trust Formby site map and information board" },
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

        {/* Why Visit */}
        <section id="why" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">What Makes the Pinewoods Worth Visiting</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* The Trees */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🌲</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">The Trees Themselves</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Mature Scots pine and Corsican pine, some over 100 years old. Light through the canopy on a morning walk is genuinely beautiful. Photographers rate this highly.</p>
            </div>

            {/* Red Squirrels */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🐿️</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Red Squirrels</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Primary habitat for Formby&apos;s red squirrel colony. They live in the canopy and come down to forage. Trails through denser pine sections have the most reliable sightings.</p>
            </div>

            {/* Beach Access */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🏖️</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Access to the Beach</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Follow main paths west and you emerge onto dunes and Formby Beach. Takes ~15 minutes. The transition from woodland to open sea is genuinely dramatic.</p>
            </div>

            {/* Birdlife */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🦅</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Birdlife</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Crossbills, goldcrests, coal tits, woodpeckers, waders and sea birds depending on season. Birders rate Formby highly for the woodland/coastal combination.</p>
            </div>

            {/* Wildflowers */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Wildflowers & Plants</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Spring brings wood anemones, bluebells and woodland plants in sheltered sections. Dune slacks have their own distinct plant communities.</p>
            </div>

            {/* Sunsets */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="text-4xl mb-3">🌅</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Sunsets</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">The path through the pines to the beach in late afternoon with light filtering through the trees. The kind of walk people come back to repeatedly.</p>
            </div>

          </div>
        </section>

        {/* Photo break — sunlit woods */}
        <button
          onClick={() => open(0)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image"
        >
          <Image
            src="/pinewoods-woods.webp"
            alt="Sunlit Formby pinewoods with walker on path"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </button>

        {/* Walks & Trails */}
        <section id="walks" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Walks & Trails</h2>
          <div className="space-y-4 mb-8">
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
                <div className="flex items-start gap-4 mb-3">
                  <div className="text-4xl">{emoji}</div>
                  <div>
                    <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                    <p className="text-sm text-[#1C3220]/60">{time} • {level}</p>
                  </div>
                </div>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">{desc}</p>
                <p className="text-xs text-[#2E6B3E] font-medium">💡 {tip}</p>
              </div>
            ))}
          </div>

          {/* Cycling sign */}
          <button
          onClick={() => open(1)}
          className="relative w-full h-56 md:h-72 overflow-hidden rounded-2xl block cursor-zoom-in group"
            aria-label="View full image"
          >
            <Image
              src="/pinewoods-cycling-sign.webp"
              alt="National Trust cycling trails sign in Formby pinewoods"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow">Cycling trails are marked with yellow bike stamps — look out for them on the trees</p>
          </button>
        </section>

        {/* Wildlife & Habitat */}
        <section id="wildlife" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Wildlife & Habitat</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">🐿️ Red Squirrels</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                The pinewoods are the primary habitat for Formby&apos;s red squirrel colony. They suit this woodland precisely and the National Trust actively manages the reserve to keep the population stable.
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

        {/* Photo break — tall trees */}
        <button
          onClick={() => open(2)}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] block cursor-zoom-in group"
          aria-label="View full image"
        >
          <Image
            src="/pinewoods-woods-tall.jpg"
            alt="Looking up at tall pines and mixed woodland in Formby"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </button>

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

          {/* Map photo */}
          <button
          onClick={() => open(4)}
          className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl block cursor-zoom-in group mb-6"
            aria-label="View full image"
          >
            <Image
              src="/pinewoods-map.webp"
              alt="National Trust Formby site map and information board"
              fill
              className="object-cover object-[center_65%] transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </button>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Address",      value: "Victoria Road, Formby, L37 1YH" },
              { label: "Opening",      value: "Year-round, dawn to dusk" },
              { label: "Parking",      value: "NT car park. Book via app before leaving. £6 non-members." },
              { label: "Dogs",         value: "Welcome throughout. Leads required in squirrel reserve (signed)." },
              { label: "Pushchairs",   value: "Main paths manageable on dry days. Sandy sections near dunes are difficult." },
              { label: "Café & Toilets", value: "NT café at visitor point. Toilets & baby changing available." },
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
