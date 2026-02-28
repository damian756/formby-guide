import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Train, Car, Hotel, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Stay in Formby for The Open 2026 | Royal Birkdale Guide | FormbyGuide",
  description:
    "The Open Championship 2026 is at Royal Birkdale — two miles from Formby. Where to stay, how to get to the course, parking, transport, and where to eat during Open week.",
  keywords:
    "stay in formby the open 2026, royal birkdale 2026, the open formby accommodation, formby royal birkdale, the open championship 2026",
  alternates: { canonical: `${BASE_URL}/the-open-2026` },
  openGraph: {
    title: "Stay in Formby for The Open 2026 | Royal Birkdale",
    description:
      "Royal Birkdale is 2 miles from Formby. Where to stay, how to get there, and where to eat during Open week.",
    url: `${BASE_URL}/the-open-2026`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/about-formby-railway.webp`, width: 1200, height: 630, alt: "Formby — base for The Open Championship 2026" }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "The Open Championship 2026 — Royal Birkdale",
  startDate: "2026-07-16",
  endDate: "2026-07-19",
  location: {
    "@type": "Place",
    name: "Royal Birkdale Golf Club",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Waterloo Road",
      addressLocality: "Birkdale",
      addressRegion: "Merseyside",
      postalCode: "PR8 2LX",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 53.6174, longitude: -3.0205 },
  },
  url: "https://www.theopen.com",
  description:
    "The Open Championship 2026 returns to Royal Birkdale. Formby, two miles south, is an ideal base — excellent accommodation, restaurants, and transport links to the course.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is Formby from Royal Birkdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Formby is approximately 2 miles south of Royal Birkdale. By car it's around 5–8 minutes. By train, Formby station is one stop from Birkdale station on the Merseyrail Northern Line.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a train to Royal Birkdale from Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Merseyrail Northern Line runs Formby to Birkdale in under 5 minutes. Trains run frequently during Open week. This is by far the easiest way to get to the course without dealing with traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Is there parking at Royal Birkdale for The Open 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Official park-and-ride sites are set up during The Open — exact locations confirmed closer to the event. Driving direct to the course isn't recommended. Train from Formby is the simple option.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I stay in Formby for The Open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Formby has a range of B&Bs, holiday lets, and guesthouses close to the train station. Book early — accommodation near Birkdale and Southport fills up months in advance for The Open.",
      },
    },
  ],
};

export default function TheOpen2026Page() {
  const guide = getGuide("the-open-2026");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px] flex items-center bg-[#1C3220]">
          <Image
            src="/about-formby-railway.webp"
            alt="Formby railway — easy access to Royal Birkdale for The Open 2026"
            fill
            priority
            className="object-cover object-center opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C3220]/90 via-[#1C3220]/70 to-[#1C3220]/30" />
          <div className="relative container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
                <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
                <ChevronRight className="w-4 h-4" />
                <span>The Open 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                The Open Championship 2026
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Stay in Formby for The Open
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Royal Birkdale is 2 miles up the road. Book accommodation in Formby, get the train, and you&apos;re at the course in under 10 minutes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: MapPin, label: "Distance", value: "2 miles" },
                  { icon: Train, label: "Train", value: "One stop" },
                  { icon: Car, label: "By car", value: "5–8 mins" },
                  { icon: Hotel, label: "Book", value: "Book early" },
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
            <p className="font-display text-2xl md:text-3xl text-white font-semibold leading-snug max-w-2xl">
              If you&apos;re coming for The Open, Formby is the{" "}
              <span className="text-[#C9A96E]">sensible base</span>.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
              Southport and Birkdale fill up first. Formby is quieter, has decent accommodation, brilliant restaurants, and a direct train to the course. If you haven&apos;t booked yet, move on it.
            </p>
          </div>
        </div>

        {/* Quick nav */}
        <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10 sticky top-16 z-40">
          <div className="container mx-auto px-4 max-w-6xl py-3">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                { href: "#getting-there", label: "Getting There" },
                { href: "#accommodation", label: "Accommodation" },
                { href: "#restaurants", label: "Restaurants" },
                { href: "#parking", label: "Parking" },
                { href: "#faq", label: "FAQ" },
                { href: "/the-open-2026/accommodation", label: "All Accommodation →" },
                { href: "/the-open-2026/restaurants", label: "All Restaurants →" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors font-medium">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl py-12">

          {/* Getting There */}
          <section id="getting-there" className="mb-16 scroll-mt-20">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Getting from Formby to Royal Birkdale</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 bg-[#E8EDE6] rounded-xl flex items-center justify-center mb-4">
                  <Train className="w-5 h-5 text-[#2E6B3E]" />
                </div>
                <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Train — Recommended</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Merseyrail Northern Line: Formby → Birkdale. One stop, under 5 minutes. Walk 10 minutes from Birkdale station to the course. No parking stress, no traffic.
                </p>
                <div className="bg-[#E8EDE6] rounded-lg p-3 text-xs text-[#1C3220]">
                  <p className="font-semibold mb-1">Formby station</p>
                  <p className="text-[#1C3220]/60">Station Road, Formby, L37 4AN</p>
                  <p className="text-[#1C3220]/60 mt-1">Trains every 15–20 mins. Extra services during Open week.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 bg-[#E8EDE6] rounded-xl flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-[#2E6B3E]" />
                </div>
                <h3 className="font-semibold text-[#1C3220] text-lg mb-3">By Car</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  Formby to Royal Birkdale is around 2 miles via the coast road. 5–8 minutes normally. During Open week — significantly longer. Park and ride is the sensible option.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
                  <p className="font-semibold mb-1">Open week traffic warning</p>
                  <p>A565 will be busy. Leave extra time or just use the train.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 bg-[#E8EDE6] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#2E6B3E]" />
                </div>
                <h3 className="font-semibold text-[#1C3220] text-lg mb-3">Park & Ride</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Official park-and-ride sites are set up for The Open, confirmed closer to the event by The R&A. Some use the National Trust Formby car park (L37 1YH) as a staging point — check the official Open transportation guide.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-[#1C3220] rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-3">Journey Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left font-semibold text-white/60 py-2 pr-4">Route</th>
                      <th className="text-left font-semibold text-white/60 py-2 pr-4">Method</th>
                      <th className="text-left font-semibold text-white/60 py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { route: "Formby → Royal Birkdale", method: "Train", time: "Under 10 mins total" },
                      { route: "Formby → Royal Birkdale", method: "Car (quiet day)", time: "5–8 mins" },
                      { route: "Formby → Royal Birkdale", method: "Car (Open week)", time: "30+ mins" },
                      { route: "Liverpool → Formby", method: "Train", time: "25 mins" },
                      { route: "Manchester → Formby", method: "Car/train", time: "50–70 mins" },
                    ].map(({ route, method, time }) => (
                      <tr key={`${route}-${method}`}>
                        <td className="py-2.5 pr-4 text-white/80">{route}</td>
                        <td className="py-2.5 pr-4 text-[#C9A96E] font-medium">{method}</td>
                        <td className="py-2.5 font-semibold text-white">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Accommodation */}
          <section id="accommodation" className="mb-16 scroll-mt-20">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Where to Stay in Formby</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-8 max-w-2xl">
              Formby has a mix of B&Bs, self-catering cottages, and holiday lets. Birkdale and Southport will be booked out first — Formby is the smart alternative if you&apos;ve left it late. Book directly where possible.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  type: "B&Bs & Guesthouses",
                  desc: "Several good guesthouses in the village, mainly family-run. Clean, comfortable, decent breakfasts. Perfect for early starts — you&apos;re a 5-minute walk from the station.",
                  tip: "Search Booking.com and Airbnb for Formby specifically. Don&apos;t cast the net too wide or you&apos;ll end up in Liverpool.",
                  icon: "🏡",
                },
                {
                  type: "Self-Catering Cottages",
                  desc: "Holiday lets are worth considering for groups or longer stays. Several properties within easy reach of Formby station. Space to spread out after a day on your feet.",
                  tip: "Airbnb and VRBO have good Formby options. Whole-property lets let you cook for yourselves — useful if you&apos;re doing the full week.",
                  icon: "🏠",
                },
              ].map(({ type, desc, tip, icon }) => (
                <div key={type} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-semibold text-[#1C3220] text-lg mb-3">{type}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-4">{desc}</p>
                  <div className="bg-[#E8EDE6] rounded-lg p-3 text-xs text-[#1C3220]/60">
                    <span className="font-semibold text-[#1C3220]">Tip: </span>{tip}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-900">
              <p className="font-semibold mb-1">Book now — seriously.</p>
              <p>
                The Open at Royal Birkdale in 2014 sold out accommodation across a 15-mile radius. Formby, Birkdale, Southport, Ainsdale, Crosby — all of it goes. The closer to the event, the more expensive and scarce options become.
              </p>
            </div>
          </section>

          {/* Restaurants */}
          <section id="restaurants" className="mb-16 scroll-mt-20">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Where to Eat During Open Week</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-8 max-w-2xl">
              Formby village has some excellent restaurants that won&apos;t be heaving with Open crowds the way Birkdale pubs will. Book ahead for evening meals — it&apos;ll be busy.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  name: "Left Bank Brasserie",
                  desc: "The best restaurant in Formby for a proper evening out. Great wine list, solid food, atmospheric room. Book well ahead for Open week — this will fill up.",
                  vibe: "Evening dining",
                  book: true,
                },
                {
                  name: "Emily's",
                  desc: "Popular neighbourhood restaurant in the village. Relaxed, good quality, consistent. The kind of place you want after a long day on your feet. Book ahead.",
                  vibe: "Relaxed dining",
                  book: true,
                },
                {
                  name: "The Sparrowhawk",
                  desc: "Good pub food, decent beer, friendly atmosphere. Gets busy but usually finds space. Good option if you haven&apos;t booked — better odds than a restaurant.",
                  vibe: "Pub dinner",
                  book: false,
                },
                {
                  name: "Don Luigi",
                  desc: "Italian in the village. Reliable, decent value, good for bigger groups. Useful if you need a table for 6+. Reasonable prices for an Open week.",
                  vibe: "Italian, groups",
                  book: true,
                },
              ].map(({ name, desc, vibe, book }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-[#1C3220] text-lg">{name}</h3>
                    {book && (
                      <span className="text-xs font-semibold text-[#2E6B3E] bg-[#E8EDE6] px-2.5 py-1 rounded-full ml-2 whitespace-nowrap">
                        Book ahead
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#C9A96E] font-semibold mb-2">{vibe}</p>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/guides/best-restaurants-formby"
                className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors"
              >
                Full restaurants guide →
              </Link>
            </div>
          </section>

          {/* Parking */}
          <section id="parking" className="mb-16 scroll-mt-20">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Parking During The Open</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-6 max-w-2xl">
              Don&apos;t try to drive to the course. Official park-and-ride arrangements will be in place — details confirmed by The R&A closer to the event. The train from Formby is genuinely the better option.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-[#1C3220] mb-2">Official Park & Ride</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  The R&A confirms park-and-ride sites approximately 3–4 months before The Open. Check{" "}
                  <a
                    href="https://www.theopen.com"
                    className="text-[#2E6B3E] underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    theopen.com
                  </a>{" "}
                  for official transport info.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-semibold text-[#1C3220] mb-2">Park in Formby, Train to Course</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Formby has a reasonable amount of street parking. Park near the station, walk 5 minutes, train to Birkdale in under 5 minutes. Leave the car stress behind.
                </p>
              </div>
            </div>
          </section>

          {/* The NT angle */}
          <section className="mb-16 bg-[#E8EDE6] rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-3">While You&apos;re Here</h2>
            <p className="text-[#1C3220]/70 leading-relaxed mb-4 max-w-2xl">
              If you&apos;re staying in Formby for a few days, the National Trust estate is worth a morning. Formby Beach is genuinely brilliant — wide open sand, no crowds on weekday mornings. Red squirrels in the pinewoods. Walk from the car park to the sea in 15 minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/formby-beach" className="text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors">
                Formby Beach guide →
              </Link>
              <Link href="/red-squirrels-formby" className="text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors">
                Red squirrels guide →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "How far is Formby from Royal Birkdale?",
                  a: "About 2 miles south. By train, Formby to Birkdale station is one stop — under 5 minutes. Walk 10 minutes from Birkdale station to the course entrance.",
                },
                {
                  q: "Can I get a train to the course from Formby?",
                  a: "Yes. Merseyrail Northern Line, Formby to Birkdale — runs every 15–20 minutes normally, with extra services during Open week. This is by far the easiest option.",
                },
                {
                  q: "Is Formby accommodation cheaper than Southport?",
                  a: "Broadly yes — Formby is smaller and less obviously on the radar for Open accommodation. That said, prices will go up as the event approaches. Book now.",
                },
                {
                  q: "Is the NT car park used for park and ride during The Open?",
                  a: "The Formby NT car park (L37 1YH) has been used for park-and-ride in previous Opens at Royal Birkdale. Check the official Open transportation guide for 2026 confirmation.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </>
    </GuideLayout>
  );
}
