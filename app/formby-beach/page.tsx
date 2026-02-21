import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, Clock, Dog, Waves, ChevronRight, AlertCircle, Coffee, Info, Shield } from "lucide-react";

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

export default function FormbyBeachPage() {
  return (
    <>
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

      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Intro prose */}
        <div className="max-w-3xl mb-12 prose prose-lg">
          <p className="text-lg text-[#1C3220]/80 leading-relaxed">
            Formby Beach is a <strong>proper beach</strong> — not a promenade, not a resort. Wide open sand, dramatic dunes, pinewoods at your back, and the Irish Sea in front. On a sunny Saturday in summer it gets busy. On a Tuesday morning in October it&apos;s almost empty. Both are valid. Know what you&apos;re walking into.
          </p>
        </div>

        {/* Practical Info Section */}
        <section id="practical" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Practical Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Parking */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Car className="w-6 h-6 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1C3220] text-lg">Parking & Getting There</h3>
                  <p className="text-sm text-[#1C3220]/60">L37 1YH</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold">•</span>
                  <span className="text-[#1C3220]/70"><strong>NT Members:</strong> Free parking, book via app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold">•</span>
                  <span className="text-[#1C3220]/70"><strong>Non-members:</strong> From £6/day via NT app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold">•</span>
                  <span className="text-[#1C3220]/70">Train from Formby station: 20-min walk</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold">•</span>
                  <span className="text-[#1C3220]/70">Book BEFORE you leave — no signal on site</span>
                </li>
              </ul>
            </div>

            {/* Distances */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
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
        </section>

        {/* Photo break */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl">
          <Image
            src="/formby-beach-shell.jpg"
            alt="Formby Beach — shell and sand dunes with the Irish Sea behind"
            fill
            className="object-cover object-bottom"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* What to Expect */}
        <section id="conditions" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">What the Beach Is Actually Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Beach Itself — photo card */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="relative h-40">
                <Image src="/formby-beach-shell-close.jpg" alt="Shell on Formby Beach sand" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[#1C3220] text-lg mb-2">The Beach Itself</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">Wide sandy beach backed by significant dunes. Pinewoods behind the dunes. Walk through pines takes ~15 mins. Flat paths. Pushchair-friendly on dry days. Sandy path near beach gets soft after rain.</p>
              </div>
            </div>
            {/* The Sea */}
            <div className="bg-gradient-to-br from-[#E8EDE6] to-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">The Sea</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Irish Sea — don&apos;t expect Mediterranean temps. Swimmable in summer. Significant tidal range. Low tide = lots of sand. High tide = less beach. Check tide times before you go.</p>
            </div>
            {/* Best Times */}
            <div className="bg-gradient-to-br from-[#E8EDE6] to-white rounded-2xl border border-gray-200 p-6">
              <div className="text-4xl mb-3">🌅</div>
              <h3 className="font-semibold text-[#1C3220] text-lg mb-2">Best Times</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed">Sunny + not too windy + low to mid tide = perfect. West-facing, so sunsets are exceptional. Winter visits are brilliant if you like it quiet and dramatic.</p>
            </div>
          </div>
        </section>

        {/* Dogs */}
        <section id="dogs" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Dogs at Formby Beach</h2>
          <div className="rounded-2xl border border-blue-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Photo */}
              <div className="relative h-64 md:h-auto min-h-[260px]">
                <Image
                  src="/formby-beach-paws.jpg"
                  alt="Dog paws on Formby Beach sand"
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Info */}
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

        {/* Photo break — dog on beach */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 h-64 md:h-80 overflow-hidden rounded-2xl">
          <Image
            src="/dog-on-formby-beach.jpg"
            alt="Dog running on Formby Beach with the Irish Sea in the background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Dunes & Formby Point */}
        <section id="dunes" className="mb-16 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Sand Dunes & Formby Point</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">The Dunes</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                Sand dunes over 10 metres high. Part of active conservation effort. You&apos;ll see fenced-off sections — not jobsworth bureaucracy. The dunes are genuinely fragile and the NT is fighting coastal erosion that&apos;s been eating into the pinewoods for decades.
              </p>
              <p className="text-xs text-[#1C3220]/50 italic">Please don&apos;t climb restricted areas.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Formby Point</h3>
              <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                Headland at the south end of the beach. ~1.5 mile walk from main car park. Views back along the coast are worth it. At low tide, sometimes see prehistoric footprints — over 5,000 years old. They appear and disappear with the sand.
              </p>
              <p className="text-xs text-[#1C3220]/50 italic">Let the NT know if you spot them — don&apos;t disturb.</p>
            </div>
          </div>
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
                  <li className="flex gap-2">
                    <span className="font-bold">⚠️</span>
                    <span><strong>No lifeguard service.</strong> Swim with care and be aware of the tide.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">🌊</span>
                    <span><strong>Rip currents present at times.</strong> Don&apos;t go out far and don&apos;t swim alone.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">📱</span>
                    <span><strong>Check tide times before you go.</strong> BBC Weather, Tide Times UK, or Met Office for Formby/Southport predictions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">⏱️</span>
                    <span><strong>Tide comes in quickly here.</strong> Be aware of where you are relative to the waterline.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">✅</span>
                    <span><strong>Best for walking:</strong> Low to mid tide gives most beach and firmer sand.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Explore More Formby</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/red-squirrels-formby" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🐿️</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Red Squirrels</h4>
              <p className="text-sm text-[#1C3220]/60">One of the best places in England to see them in the wild.</p>
            </Link>
            <Link href="/formby-pinewoods" className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#2E6B3E]/30 hover:shadow-sm transition">
              <div className="text-3xl mb-2">🌲</div>
              <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition">Pinewoods Walks</h4>
              <p className="text-sm text-[#1C3220]/60">Ancient woodland and coastal paths.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
