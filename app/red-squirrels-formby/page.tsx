import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Dog, Camera, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";
import RedSquirrelsContent from "./RedSquirrelsContent";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Red Squirrels in Formby | Where to See Them & What to Expect",
  description:
    "Everything you need to know about seeing red squirrels in Formby — postcode (L37 1YH), best times, how to get there, what to bring and practical tips from a local.",
  keywords:
    "red squirrels formby, see red squirrels, formby red squirrels, national trust formby, formby nature reserve, formby wildlife",
  alternates: { canonical: `${BASE_URL}/red-squirrels-formby` },
  openGraph: {
    title: "Red Squirrels in Formby — Where to See Them & What to Expect",
    description:
      "One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — here's everything you need to know.",
    url: `${BASE_URL}/red-squirrels-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/squirrels-hero.webp`, width: 1400, height: 560, alt: "Red squirrel in Formby pinewoods" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Squirrels in Formby — Where to See Them & What to Expect",
    description:
      "One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — here's everything you need to know.",
  },
};

const squirrelsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `${BASE_URL}/red-squirrels-formby#attraction`,
      name: "Formby Red Squirrel Reserve",
      description: "National Trust managed red squirrel reserve in the Formby pinewoods — one of the best places in England to see red squirrels in the wild.",
      url: `${BASE_URL}/red-squirrels-formby`,
      geo: { "@type": "GeoCoordinates", latitude: 53.5553, longitude: -3.0886 },
      address: {
        "@type": "PostalAddress",
        postalCode: "L37 1YH",
        addressLocality: "Formby",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
      touristType: ["Wildlife spotters", "Families", "Photographers", "Nature lovers"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is the best time to see red squirrels at Formby?",
          acceptedAnswer: { "@type": "Answer", text: "September to February is peak time, especially early morning. Go before 10am for the best chance — they're most active in the first couple of hours after dawn." },
        },
        {
          "@type": "Question",
          name: "Where exactly are the red squirrels at Formby?",
          acceptedAnswer: { "@type": "Answer", text: "The red squirrel reserve is within the National Trust Formby estate. Park at the main NT car park (postcode L37 1YH) and follow the red squirrel trail signs from the car park." },
        },
        {
          "@type": "Question",
          name: "Do I need to pay to see the red squirrels at Formby?",
          acceptedAnswer: { "@type": "Answer", text: "The car park charges apply — free for NT members, around £6–£8 for non-members. The squirrel reserve itself is free to walk through once you're parked." },
        },
        {
          "@type": "Question",
          name: "Are binoculars useful at the Formby red squirrel reserve?",
          acceptedAnswer: { "@type": "Answer", text: "Binoculars help but aren't essential — the squirrels often come quite close to the trail. A telephoto lens is useful if you want decent photographs." },
        },
        {
          "@type": "Question",
          name: "Are dogs allowed at the Formby red squirrel reserve?",
          acceptedAnswer: { "@type": "Answer", text: "Dogs are allowed but must be kept on leads throughout the squirrel reserve area." },
        },
      ],
    },
  ],
};

export default function RedSquirrelsPage() {
  const guide = getGuide("red-squirrels-formby");
  return (
    <GuideLayout guide={guide}>
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(squirrelsJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px] flex items-center bg-amber-900">
        <Image
          src="/squirrels-hero.webp"
          alt="Red squirrel on a pine branch in Formby pinewoods"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-200 text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Red Squirrels</span>
            </div>
            <div className="text-5xl mb-4">🐿️</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Red Squirrels in Formby
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars — and watch even teenagers get excited when they spot one.
            </p>
            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: MapPin, label: "Postcode", value: "L37 1YH" },
                { icon: Clock, label: "Best Months", value: "Sept – Feb" },
                { icon: Dog, label: "Dogs", value: "On leads" },
                { icon: Camera, label: "Gear", value: "Binoculars help" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/10 backdrop-blur rounded-lg p-3 border border-white/10">
                  <div className="flex items-start gap-2 mb-1">
                    <Icon className="w-4 h-4 text-amber-200 flex-shrink-0 mt-0.5" />
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
                One of the <span className="text-[#C9A96E]">last reliable places</span> in England to see red squirrels in the wild.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
                They&apos;re not tame and nobody feeds them on cue — but show up at the right time, move quietly, and you&apos;ve got a decent chance. On a good autumn morning we&apos;ve counted half a dozen from a single trail.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:flex-none">
              {[
                { icon: "📍", label: "Postcode", val: "L37 1YH" },
                { icon: "📅", label: "Best months", val: "Sept – Feb" },
                { icon: "🐕", label: "Dogs", val: "On leads" },
                { icon: "🅿️", label: "Parking", val: "From £6" },
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

      <RedSquirrelsContent />
      </>
    </GuideLayout>
  );
}
