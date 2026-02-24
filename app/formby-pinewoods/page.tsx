import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Dog, Compass, ChevronRight } from "lucide-react";
import PinewoodsContent from "./PinewoodsContent";

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
    images: [{ url: `${BASE_URL}/pinewoods-hero.webp`, width: 1200, height: 630, alt: "Formby pinewoods — path through coastal pine woodland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formby Pinewoods — Walks, Wildlife & What to Expect",
    description:
      "Ancient woodland running to the sea. Red squirrels in the canopy, brilliant walks, and light through the pines that's genuinely special.",
  },
};

const pinewoodsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `${BASE_URL}/formby-pinewoods#attraction`,
      name: "Formby Pinewoods",
      description: "Coastal pine woodland managed by the National Trust — walks, red squirrels, birdwatching, and direct access to Formby Beach.",
      url: `${BASE_URL}/formby-pinewoods`,
      geo: { "@type": "GeoCoordinates", latitude: 53.5553, longitude: -3.0886 },
      address: {
        "@type": "PostalAddress",
        postalCode: "L37 1YH",
        addressLocality: "Formby",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
      touristType: ["Walkers", "Wildlife spotters", "Families", "Dog walkers"],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Dogs allowed", value: true },
        { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
        { "@type": "LocationFeatureSpecification", name: "Marked trails", value: true },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are Formby pinewoods the same as the National Trust Formby estate?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — the pinewoods are managed by the National Trust as part of the wider Formby estate. The same car park (postcode L37 1YH) serves the beach, pinewoods, and red squirrel reserve." },
        },
        {
          "@type": "Question",
          name: "How long does a walk through Formby pinewoods take?",
          acceptedAnswer: { "@type": "Answer", text: "The main circular trail through the pinewoods takes around 45 minutes to an hour at a relaxed pace. You can extend it by continuing through the dunes to the beach." },
        },
        {
          "@type": "Question",
          name: "Are dogs allowed in Formby pinewoods?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, dogs are welcome in the pinewoods. Keep them on leads in the red squirrel reserve areas." },
        },
        {
          "@type": "Question",
          name: "Is there parking at Formby pinewoods?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — the National Trust car park at L37 1YH serves the pinewoods, beach, and squirrel reserve. NT members park free; non-members pay approximately £6–£8 via the NT app." },
        },
      ],
    },
  ],
};

export default function PinewoodsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pinewoodsJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[420px] flex items-center">
        <Image
          src="/pinewoods-acorn.webp"
          alt="Acorn on the Formby pinewoods floor — ancient coastal woodland"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Pinewoods</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Formby Pinewoods
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow">
              Ancient coastal woodland with red squirrels in the canopy, brilliant walks, and light through the pines that&apos;s genuinely special. Walk from the road to the sea.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: MapPin, label: "Postcode",  value: "L37 1YH" },
                { icon: Clock,  label: "Walk Time", value: "30 min – 3 hrs" },
                { icon: Compass,label: "Terrain",   value: "Flat, some sand" },
                { icon: Dog,    label: "Dogs",      value: "Welcome" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-black/30 backdrop-blur rounded-lg p-3 border border-white/20">
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

      {/* Intro band */}
      <div className="bg-[#1C3220]">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="container mx-auto px-4 max-w-6xl py-10">
          <div className="md:flex md:items-end md:gap-16">
            <div className="mb-8 md:mb-0 md:flex-1">
              <p className="font-display text-2xl md:text-3xl text-white font-semibold leading-snug">
                Ancient coastal woodland — <span className="text-[#C9A96E]">red squirrels overhead</span>, walks through the pines, the sea at the end.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
                Walk from the car park through ancient pines to Formby Beach in under 20 minutes. Or spend a morning on the squirrel trails. Flat throughout, manageable for all ages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-none">
              {[
                { icon: "📍", label: "Postcode",  val: "L37 1YH" },
                { icon: "⏱️", label: "Walk time", val: "30 min – 3 hrs" },
                { icon: "🐕", label: "Dogs",      val: "Welcome" },
                { icon: "🅿️", label: "Parking",   val: "From £6" },
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

      <PinewoodsContent />
    </>
  );
}
