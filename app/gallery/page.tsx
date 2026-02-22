"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ChevronRight } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryCategory = {
  id: string;
  label: string;
  images: GalleryImage[];
};

const CATEGORIES: GalleryCategory[] = [
  {
    id: "beach",
    label: "Formby Beach",
    images: [
      { src: "/formby-beach-hero.jpg",       alt: "Formby Beach — panoramic view of sand dunes and the Irish Sea",        caption: "Formby Beach looking west toward the Irish Sea" },
      { src: "/beach-dunes-new.webp",         alt: "Formby sand dunes",                                                    caption: "The dunes between the pinewoods and the sea" },
      { src: "/formby-beach-shell.jpg",       alt: "Shell on Formby Beach with dunes and Irish Sea behind",                caption: "Low tide at Formby Beach — wide open sand" },
      { src: "/formby-beach-shell-close.jpg", alt: "Close-up of a shell on Formby Beach sand",                            caption: "Formby Beach is great for shells and rockpool finds" },
      { src: "/formby-beach-sea.jpg",         alt: "Families walking along Formby Beach at the water's edge",             caption: "The beach on a busy summer day" },
      { src: "/beach-birds.webp",             alt: "Crows on Formby Beach sand",                                          caption: "Birds on the beach — Formby is on the Sefton flyway" },
      { src: "/formby-beach-paws.jpg",        alt: "Dog paws on Formby Beach sand",                                       caption: "Dogs are welcome year-round at Formby Beach" },
      { src: "/beach-dunes-skull.webp",       alt: "Animal skull found on Formby sand dunes",                             caption: "The dunes are genuinely wild — this is what wild looks like" },
      { src: "/beach-dunes-spring-bud.webp",  alt: "Spring vegetation growing on Formby sand dunes",                     caption: "Dune vegetation coming through in spring" },
      { src: "/ainsdale-beach.webp",          alt: "Ainsdale Beach — part of the Sefton Coast",                          caption: "Ainsdale Beach, just north of Formby" },
      { src: "/beach-horses-ainsdale.webp",   alt: "Horses on Formby and Ainsdale beach",                                caption: "Horse riding on the Formby and Ainsdale beach" },
      { src: "/dog-on-formby-beach.jpg",      alt: "Dog running on Formby Beach",                                        caption: "One of the best dog beaches on the Sefton Coast" },
    ],
  },
  {
    id: "pinewoods",
    label: "Formby Pinewoods",
    images: [
      { src: "/pinewoods-hero.webp",          alt: "Path through Formby pinewoods — coastal pine woodland",               caption: "The main path through the National Trust pinewoods" },
      { src: "/pinewoods-deep-woodland.webp", alt: "Deep inside Formby pinewoods — ancient coastal pine woodland",        caption: "Into the deeper sections of the woodland" },
      { src: "/pinewoods-tall-tree.webp",     alt: "Tall Scots pine in Formby pinewoods",                                caption: "Mature Scots pine — some over 100 years old" },
      { src: "/pinewoods-woods.webp",         alt: "Sunlit Formby pinewoods with walker on path",                        caption: "Morning light through the pines" },
      { src: "/pinewoods-woods-tall.jpg",     alt: "Looking up at tall pines and mixed woodland in Formby",              caption: "Looking up through the canopy" },
      { src: "/pinewoods-flowers.webp",       alt: "Wildflowers in Formby pinewoods",                                    caption: "Spring wildflowers in the woodland" },
      { src: "/pinewoods-fungus-moss.webp",   alt: "Fungi and moss growing on a fallen log in Formby pinewoods",        caption: "Fungi on fallen logs — autumn is peak season" },
      { src: "/pinewoods-fungus.webp",        alt: "Fungus growing on a tree in Formby pinewoods",                       caption: "The variety of fungi here is an indicator of ancient woodland" },
      { src: "/pinewoods-fungus-moss-2.webp", alt: "Fungi and moss close-up in Formby pinewoods",                       caption: "Woodland floor detail" },
      { src: "/pinewoods-acorn.webp",         alt: "Acorn close-up on the Formby pinewoods floor",                      caption: "Oak and pine side by side in the mixed woodland sections" },
    ],
  },
  {
    id: "signs-practical",
    label: "Signs & Practical",
    images: [
      { src: "/nt-formby-sign.webp",          alt: "National Trust Formby sign at the entrance",                         caption: "The main National Trust Formby entrance" },
      { src: "/nt-sign.webp",                 alt: "National Trust sign at Formby",                                      caption: "Victoria Road, L37 1YH — the start of it all" },
      { src: "/beach-car-park-sign.webp",     alt: "Formby Beach National Trust car park sign",                          caption: "Book via the NT app before you leave — no signal here" },
      { src: "/pinewoods-map-sign.webp",      alt: "National Trust Formby site map and information board",               caption: "The site map at the main visitor point" },
      { src: "/pinewoods-trail-sign.webp",    alt: "Trail signpost in Formby pinewoods — no horses",                    caption: "The trails are well signed" },
      { src: "/pinewoods-no-parking.webp",    alt: "No parking sign in Formby pinewoods",                               caption: "Use the NT car park — don't park on Victoria Road" },
      { src: "/pinewoods-cycling-sign.webp",  alt: "National Trust cycling trails sign in Formby pinewoods",            caption: "Cycling trails are marked with yellow stamps on the trees" },
      { src: "/formby-beach-sign.jpg",        alt: "National Trust Blundell Path sign at Formby Beach",                 caption: "Safety information and tide warnings on the Blundell Path" },
    ],
  },
  {
    id: "wildlife",
    label: "Wildlife & Nature",
    images: [
      { src: "/natterjack-pond.webp",         alt: "Natterjack toad conservation pond in Formby dune slacks",           caption: "Conservation pond for natterjack toads — Britain's rarest amphibian" },
      { src: "/natterjack-post.webp",         alt: "Natterjack toad information post at Formby",                        caption: "NT information boards explain the conservation work" },
      { src: "/pinewoods-pine-cone.webp",     alt: "Pine cone on the Formby pinewoods floor",                          caption: "Pine cones — the squirrel's favourite food source" },
      { src: "/pinewoods-sandfield-farm.webp",alt: "Sandfield Farm heritage sign in the Formby pinewoods",             caption: "The history of the pinewoods — planted in the 19th century" },
    ],
  },
];

const ALL_IMAGES = CATEGORIES.flatMap((c) => c.images);

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>(ALL_IMAGES);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const openLightbox = useCallback((images: GalleryImage[], idx: number) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
  }, []);

  const filteredCategories = activeCategory === "all"
    ? CATEGORIES
    : CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Gallery</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Formby Photo Gallery</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Real photos from Formby — the beach, the pinewoods, the wildlife, and the signs that tell you where you are. All taken locally, none of them stock.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
        <div className="container mx-auto px-4 max-w-6xl py-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-[#1C3220] text-white"
                  : "bg-white text-[#1C3220]/60 hover:text-[#1C3220] border border-gray-200"
              }`}
            >
              All photos
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-[#2E6B3E] text-white"
                    : "bg-white text-[#1C3220]/60 hover:text-[#1C3220] border border-gray-200"
                }`}
              >
                {c.label}
                <span className="ml-1.5 opacity-60 font-normal text-xs">{c.images.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        {filteredCategories.map((category) => (
          <section key={category.id} className="mb-16">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">{category.label}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {category.images.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => openLightbox(category.images, idx)}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-zoom-in"
                  aria-label={img.alt}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {img.caption && (
                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs leading-snug drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {img.caption}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}

        {/* Related links */}
        <section className="mt-8 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-xl font-bold text-[#1C3220] mb-5">Explore Formby</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/formby-beach", label: "Formby Beach", desc: "Parking, tides, dogs & what to expect" },
              { href: "/formby-pinewoods", label: "Formby Pinewoods", desc: "Walks, wildlife & Plan Your Visit" },
              { href: "/red-squirrels-formby", label: "Red Squirrels", desc: "When and how to see them" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
                <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition mb-1">{label}</h4>
                <p className="text-sm text-[#1C3220]/60">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxImages.map(({ src, alt }) => ({ src, alt }))}
      />
    </>
  );
}
