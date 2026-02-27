import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, Dog, Coffee, ChevronRight } from "lucide-react";
import FormbyBeachContent from "./FormbyBeachContent";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Formby Beach — Parking, Postcode, Dogs & Everything Else",
  description:
    "Everything you need to know about Formby Beach — postcode (L37 1YH), parking prices, dog rules, tide times, facilities and the best times to visit. Written by a local.",
  keywords:
    "Formby beach, formby beach postcode, parking at formby beach, formby beach car park, formby beach dogs, formby beach national trust, formby sand dunes, formby point",
  alternates: { canonical: `${BASE_URL}/formby-beach` },
  openGraph: {
    title: "Formby Beach — Parking, Postcode, Dogs & Everything Else",
    description:
      "Postcode, parking prices, dog rules, tide info and what to actually expect. Everything for planning your visit to Formby Beach.",
    url: `${BASE_URL}/formby-beach`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/formby-beach-hero.jpg`, width: 1200, height: 630, alt: "Formby Beach — sand dunes and the Irish Sea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formby Beach — Parking, Postcode, Dogs & Everything Else",
    description:
      "Postcode, parking prices, dog rules, tide info and what to actually expect. Everything for planning your visit to Formby Beach.",
  },
};

const beachJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristAttraction",
      "@id": `${BASE_URL}/formby-beach#attraction`,
      name: "Formby Beach",
      description: "A National Trust managed beach on the Sefton Coast — sand dunes, Formby Point, and the Irish Sea. Postcode L37 1YH.",
      url: `${BASE_URL}/formby-beach`,
      geo: { "@type": "GeoCoordinates", latitude: 53.5553, longitude: -3.0886 },
      address: {
        "@type": "PostalAddress",
        postalCode: "L37 1YH",
        addressLocality: "Formby",
        addressRegion: "Merseyside",
        addressCountry: "GB",
      },
      touristType: ["Families", "Dog walkers", "Wildlife spotters", "Day trippers"],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
        { "@type": "LocationFeatureSpecification", name: "Toilets", value: true },
        { "@type": "LocationFeatureSpecification", name: "Café", value: true },
        { "@type": "LocationFeatureSpecification", name: "Dogs allowed", value: true },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the postcode for Formby Beach?",
          acceptedAnswer: { "@type": "Answer", text: "Formby Beach postcode is L37 1YH. Use this for the National Trust car park sat nav." },
        },
        {
          "@type": "Question",
          name: "How much does parking cost at Formby Beach?",
          acceptedAnswer: { "@type": "Answer", text: "National Trust car park. NT members park free; non-members pay approximately £6–£8 via the NT app. Download it before you arrive — signal in the car park is unreliable." },
        },
        {
          "@type": "Question",
          name: "Are dogs allowed at Formby Beach?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, dogs are welcome at Formby Beach year-round. Some sections near the tern nesting areas have seasonal restrictions from April to August — follow the signage on the day." },
        },
        {
          "@type": "Question",
          name: "What time does the Formby Beach car park open?",
          acceptedAnswer: { "@type": "Answer", text: "The National Trust car park opens from around 8am. It fills up quickly on sunny weekends — aim to arrive before 10am in summer." },
        },
        {
          "@type": "Question",
          name: "Are there toilets at Formby Beach?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, there are public toilets at the National Trust car park. The NT café is also close by." },
        },
      ],
    },
  ],
};

export default function FormbyBeachPage() {
  const guide = getGuide("formby-beach");
  return (
    <GuideLayout guide={guide}>
      <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beachJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[420px] flex items-center">
        <Image
          src="/formby-beach-hero.jpg"
          alt="Formby Beach — sand dunes and the Irish Sea"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-blue-200 text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Formby Beach</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Formby Beach
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 drop-shadow">
              Wide open sand, dramatic dunes, and the Irish Sea with no crowds. One of the best beaches in the North West — and you don&apos;t have to fight for space.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: MapPin, label: "Postcode", value: "L37 1YH" },
                { icon: Car, label: "Parking", value: "From £6" },
                { icon: Dog, label: "Dogs", value: "Welcome" },
                { icon: Coffee, label: "Café", value: "On site" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-black/30 backdrop-blur rounded-lg p-3 border border-white/20">
                  <div className="flex items-start gap-2 mb-1">
                    <Icon className="w-4 h-4 text-blue-200 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-white/60">{label}</div>
                  </div>
                  <div className="text-sm font-bold text-white ml-6">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FormbyBeachContent />
      </>
    </GuideLayout>
  );
}
