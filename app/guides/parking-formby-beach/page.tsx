import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Car, Clock, Smartphone, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Parking at Formby Beach | NT Car Park, Postcode & Tips | FormbyGuide",
  description:
    "Parking at Formby Beach — postcode L37 1YH, National Trust app booking (download before you leave — signal in the car park is terrible), prices, peak times, and alternative parking nearby.",
  keywords:
    "parking formby beach, formby beach car park, formby beach postcode, national trust formby parking, parking near formby beach",
  alternates: { canonical: `${BASE_URL}/guides/parking-formby-beach` },
  openGraph: {
    title: "Parking at Formby Beach | NT Car Park, Postcode & Tips",
    description:
      "Postcode L37 1YH, NT app booking, prices, and what to know before you leave home. The complete parking guide for Formby Beach.",
    url: `${BASE_URL}/guides/parking-formby-beach`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Parking at Formby Beach — Guide",
  description: "Complete guide to parking at Formby Beach — postcode, NT app booking, prices, and tips.",
  url: `${BASE_URL}/guides/parking-formby-beach`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: "Parking at Formby Beach", item: `${BASE_URL}/guides/parking-formby-beach` },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the postcode for Formby Beach car park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The postcode for Formby Beach National Trust car park is L37 1YH. Use this for your sat nav — it takes you directly to the Victoria Road entrance.",
      },
    },
    {
      "@type": "Question",
      name: "How much does parking cost at Formby Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "National Trust members park free. Non-members pay approximately £6–£8 depending on the day. Prices are set by the National Trust and may change — check the NT app before you visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to book parking at Formby Beach in advance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On busy summer weekends it fills up and you won't get in without a pre-booked slot. Download the National Trust app at home — signal in the car park is very poor and you can't reliably book on arrival.",
      },
    },
    {
      "@type": "Question",
      name: "What time does the Formby Beach car park open and close?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The NT car park typically opens around 8am and closes at dusk. Times vary seasonally — check the NT website for the current schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Is there alternative parking near Formby Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Street parking is available on Victoria Road and surrounding streets but fills quickly on busy days. There is no official alternative car park. The train to Formby station followed by a 20-minute walk is a practical alternative on summer weekends.",
      },
    },
  ],
};

export default function ParkingFormbyBeachPage() {
  const guide = getGuide("parking-formby-beach");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[420px] flex items-center bg-[#1C3220]">
          <Image
            src="/formby-beach-hero.jpg"
            alt="Formby Beach — National Trust car park and entrance"
            fill
            priority
            className="object-cover object-bottom opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3220]/90 via-[#1C3220]/60 to-transparent" />
          <div className="relative container mx-auto px-4 max-w-6xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
                <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/guides" className="hover:text-white transition">Guides</Link>
                <ChevronRight className="w-4 h-4" />
                <span>Parking at Formby Beach</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Parking at Formby Beach
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Postcode L37 1YH. Download the NT app before you leave — signal in the car park is terrible.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: MapPin, label: "Postcode", value: "L37 1YH" },
                  { icon: Car, label: "NT Members", value: "Free" },
                  { icon: Car, label: "Non-members", value: "From £6" },
                  { icon: Clock, label: "Opens", value: "~8am" },
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

        <div className="container mx-auto px-4 max-w-6xl py-12">

          {/* The one thing you need to know */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
            <h2 className="font-semibold text-amber-900 text-lg mb-2">The one thing to do before you leave home</h2>
            <p className="text-amber-800 leading-relaxed">
              Download the <strong>National Trust app</strong> and set up an account. Mobile signal on Victoria Road near the car park is poor to non-existent. If you arrive without the app already installed, you can&apos;t book your parking slot. You then either wait for your signal to work (good luck with that) or leave. Sort it at home.
            </p>
          </div>

          {/* Postcode + address */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Car Park Location</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1C3220] mb-3">Address & Postcode</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1C3220]">National Trust Formby</p>
                      <p className="text-[#1C3220]/70">Victoria Road, Formby, L37 1YH</p>
                    </div>
                  </div>
                  <p className="text-[#1C3220]/60 leading-relaxed pt-2">
                    Follow Victoria Road west until you reach the NT barrier. The postcode takes you directly to the entrance. Don&apos;t follow Google Maps suggestions that put you on the wrong road — stick with L37 1YH.
                  </p>
                </div>
              </div>
              <div className="bg-[#E8EDE6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#1C3220] mb-3">Getting There</h3>
                <ul className="space-y-2 text-sm text-[#1C3220]/70">
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold mt-0.5">•</span>From Liverpool: A565 north through Crosby, follow signs for Formby. Total 20–25 mins.</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold mt-0.5">•</span>From Southport: A565 south through Ainsdale. 10–15 mins.</li>
                  <li className="flex gap-2"><span className="text-[#2E6B3E] font-bold mt-0.5">•</span>By train: Formby station then 20-min walk west along Victoria Road.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing table */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Parking Prices</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#1C3220] text-white">
                  <tr>
                    <th className="text-left font-semibold py-3 px-5">Who</th>
                    <th className="text-left font-semibold py-3 px-5">Price</th>
                    <th className="text-left font-semibold py-3 px-5">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { who: "National Trust members", price: "Free", notes: "Show membership card or NT app" },
                    { who: "Non-members (standard)", price: "~£6", notes: "Book via NT app in advance" },
                    { who: "Non-members (peak/summer weekends)", price: "~£8", notes: "Prices vary; confirm in app" },
                    { who: "Season pass holders", price: "Varies", notes: "Check NT website for current offers" },
                  ].map(({ who, price, notes }) => (
                    <tr key={who} className="hover:bg-gray-50">
                      <td className="py-3 px-5 text-[#1C3220]">{who}</td>
                      <td className="py-3 px-5 font-bold text-[#2E6B3E]">{price}</td>
                      <td className="py-3 px-5 text-[#1C3220]/60">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#1C3220]/50 mt-3">
              Prices set by the National Trust and subject to change. Always confirm in the NT app before visiting.
            </p>
          </section>

          {/* NT App */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">The National Trust App</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: "📱",
                  step: "1. Download the app",
                  desc: "Search 'National Trust' in the App Store or Google Play. Free to download. Create an account if you don't have one.",
                },
                {
                  icon: "🅿️",
                  step: "2. Book your slot",
                  desc: "Search for 'Formby' in the app. Select the date and time, confirm parking. You'll get a booking reference to show if asked.",
                },
                {
                  icon: "🚗",
                  step: "3. Arrive and park",
                  desc: "The barrier is managed by the NT. Have your booking reference ready. Non-members pay via the app — not at a machine on site.",
                },
              ].map(({ icon, step, desc }) => (
                <div key={step} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-[#1C3220] mb-2">{step}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Busy times */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">When It Fills Up</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Peak: Summer Weekends",
                  desc: "Arrives at capacity by 10–10:30am on sunny summer Saturdays and Sundays. Arrive before 9am or pre-book. Seriously.",
                  badge: "Book in advance",
                  badgeClass: "bg-red-100 text-red-700",
                },
                {
                  title: "Peak: School Holidays",
                  desc: "Half term and summer holidays — any day can be busy, not just weekends. Pre-booking strongly recommended throughout July and August.",
                  badge: "Book in advance",
                  badgeClass: "bg-red-100 text-red-700",
                },
                {
                  title: "Moderate: Bank Holidays",
                  desc: "Fills up on bank holidays and sunny Easter weekends. Same advice — aim early or book ahead.",
                  badge: "Arrive early",
                  badgeClass: "bg-amber-100 text-amber-700",
                },
                {
                  title: "Quiet: Weekdays (not school holidays)",
                  desc: "Tuesday or Wednesday morning off-season? You'll be fine. Plenty of space and you can often pay on the day via the app.",
                  badge: "Usually fine",
                  badgeClass: "bg-[#E8EDE6] text-[#2E6B3E]",
                },
              ].map(({ title, desc, badge, badgeClass }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#1C3220]">{title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-2 whitespace-nowrap ${badgeClass}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Alternative */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-5">If the Car Park is Full</h2>
            <div className="bg-[#E8EDE6] rounded-2xl p-6">
              <p className="text-[#1C3220]/80 leading-relaxed mb-4">
                If you arrive and the car park is full, you&apos;re not getting in. The options are:
              </p>
              <ul className="space-y-3 text-sm text-[#1C3220]/70">
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#1C3220]">Street parking on Victoria Road</strong> — limited, fills early on busy days. Walk from the road to the beach is about 20 minutes on the path.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#1C3220]">Formby station car park</strong> — paid parking, then 20-minute walk west along Victoria Road. Fine for off-peak visits.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#1C3220]">Train to Formby station</strong> — park elsewhere and take the train. 20-minute walk from the station to the beach. Decent option for families who don&apos;t mind a walk.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2E6B3E] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#1C3220]">Try Ainsdale Beach</strong> — 3 miles north in Southport, larger car park, often less busy. Different vibe but the same Sefton Coast sand.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "What's the postcode for Formby Beach?",
                  a: "L37 1YH. This takes you to the National Trust car park on Victoria Road. Use this in your sat nav — don't rely on searching 'Formby Beach' as it may route you incorrectly.",
                },
                {
                  q: "Can I pay on the day without booking?",
                  a: "On quiet days, yes — open the NT app in the car park and pay via the app. On busy days the car park fills before you arrive. Don't risk it on summer weekends.",
                },
                {
                  q: "Is there a physical pay machine?",
                  a: "No physical machine — payment is via the National Trust app. This is why downloading the app before you leave home is essential.",
                },
                {
                  q: "Can I park for free as an NT member?",
                  a: "Yes — National Trust members park free at the Formby car park. Show your membership card or the NT app membership at the barrier.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className="pt-10 border-t border-[#1C3220]/10">
            <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Now You&apos;re Sorted for Parking</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/formby-beach", label: "Formby Beach Guide", desc: "What to expect once you get there." },
                { href: "/red-squirrels-formby", label: "Red Squirrels", desc: "Worth a detour from the beach." },
                { href: "/guides/dog-friendly-formby", label: "Dog-Friendly Formby", desc: "Beach rules and the best off-lead walks." },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all group"
                >
                  <h4 className="font-semibold text-[#1C3220] group-hover:text-[#2E6B3E] transition-colors mb-1">{label}</h4>
                  <p className="text-sm text-[#1C3220]/60">{desc}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </>
    </GuideLayout>
  );
}
