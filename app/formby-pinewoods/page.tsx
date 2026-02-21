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

export default function PinewoodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[420px] flex items-center">
        <Image
          src="/pinewoods-hero.webp"
          alt="Path through Formby pinewoods — coastal pine woodland"
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

      <PinewoodsContent />
    </>
  );
}
