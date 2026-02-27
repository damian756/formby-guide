import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Utensils, Star, ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Best Restaurants in Formby 2026 | Honest Local Guide | FormbyGuide",
  description:
    "The best restaurants in Formby — Clare's honest guide. Emily's, Left Bank Brasserie, The Sparrowhawk, Don Luigi. No sponsored results, no filler.",
  keywords:
    "best restaurants formby, formby restaurants, where to eat formby, left bank brasserie formby, emily's formby, the sparrowhawk formby",
  alternates: { canonical: `${BASE_URL}/guides/best-restaurants-formby` },
  openGraph: {
    title: "Best Restaurants in Formby 2026 | Honest Local Guide",
    description:
      "Clare's honest guide to the best restaurants in Formby — Emily's, Left Bank Brasserie, The Sparrowhawk, Don Luigi, and where to avoid.",
    url: `${BASE_URL}/guides/best-restaurants-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/blog-card-food.webp`, width: 1200, height: 630, alt: "Best restaurants in Formby" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Restaurants in Formby 2026",
  description: "Honest guide to the best restaurants in Formby, written by a local.",
  url: `${BASE_URL}/guides/best-restaurants-formby`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best restaurant in Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Left Bank Brasserie is the best restaurant in Formby for a proper sit-down dinner. Emily's is the most popular neighbourhood restaurant and the best option for a relaxed mid-week meal.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to book restaurants in Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for Left Bank Brasserie and Emily's at weekends. Book at least a week ahead for Friday and Saturday evenings. The Sparrowhawk is more walk-in friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Are there dog-friendly restaurants in Formby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Sparrowhawk is dog-friendly. Other restaurants are less predictable — call ahead if you're planning to bring your dog to a restaurant rather than a pub.",
      },
    },
    {
      "@type": "Question",
      name: "Are there good restaurants near Formby Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The NT café is at the beach. The village restaurants (Emily's, Left Bank, The Sparrowhawk) are about 10 minutes by car — the sensible option for a post-walk lunch or dinner rather than the café.",
      },
    },
  ],
};

const restaurants = [
  {
    rank: 1,
    name: "Left Bank Brasserie",
    type: "Brasserie",
    priceRange: "£££",
    dogFriendly: false,
    booking: "Essential at weekends",
    description:
      "The best restaurant in Formby. Proper brasserie food, excellent wine list, room that&apos;s actually atmospheric rather than just beige. The kind of place that&apos;s genuinely enjoyable rather than just okay. Book at least a week ahead for Friday or Saturday evenings — it fills up and they don&apos;t overbook.",
    honest:
      "The price reflects the quality. If you&apos;re on a budget, this isn&apos;t it. If you&apos;re looking for the best meal in Formby, this is it.",
    bestFor: "Birthday dinners, date nights, celebrating something",
    location: "Village centre",
  },
  {
    rank: 2,
    name: "Emily's",
    type: "Restaurant",
    priceRange: "££",
    dogFriendly: false,
    booking: "Book ahead at weekends",
    description:
      "The most-loved neighbourhood restaurant in Formby. Locals go back regularly, which is a far better endorsement than any review. Good food, reasonable prices, the kind of place you&apos;re happy to go on a Thursday evening without it feeling like a special occasion.",
    honest:
      "Not the cheapest but very good value for what you get. No annoying pretension. Kids fine, groups fine, couples fine.",
    bestFor: "Regular dining, family meals, groups",
    location: "Village centre",
  },
  {
    rank: 3,
    name: "The Sparrowhawk",
    type: "Gastropub",
    priceRange: "££",
    dogFriendly: true,
    booking: "Walk-ins possible",
    description:
      "Good gastropub food done consistently well. The most flexible option in Formby — doesn&apos;t require booking with the same urgency as Left Bank or Emily&apos;s. Dog-friendly. Beer garden in summer. The right choice if you haven&apos;t booked but want a decent evening out.",
    honest:
      "Pub food rather than restaurant food — which is exactly what you want from it. Not trying to be Left Bank and better for it.",
    bestFor: "Post-walk meals, dogs, unplanned evenings out",
    location: "Village",
  },
  {
    rank: 4,
    name: "Don Luigi",
    type: "Italian",
    priceRange: "££",
    dogFriendly: false,
    booking: "Book for larger groups",
    description:
      "Reliable Italian in the village. Good for groups and families that want a table easily and predictable food. Not going to change your life but won&apos;t disappoint either. Decent pasta, good pizza, friendly service.",
    honest:
      "It&apos;s the Italian restaurant in a town that needs a good Italian restaurant. It fills the gap well. Best for groups where you need everyone to find something they want.",
    bestFor: "Groups, families, Italian cravings",
    location: "Village",
  },
];

export default function BestRestaurantsFormbyPage() {
  const guide = getGuide("best-restaurants-formby");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-20 md:py-28 overflow-hidden min-h-[480px] flex items-center bg-[#1C3220]">
          <Image
            src="/blog-card-food.webp"
            alt="Best restaurants in Formby"
            fill
            priority
            className="object-cover object-center opacity-50"
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
                <span>Best Restaurants</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Best Restaurants in Formby
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-6">
                Written by someone who eats here regularly. No sponsorship, no filler — just honest recommendations from a local.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Star, label: "Left Bank Brasserie", note: "Best overall" },
                  { icon: Utensils, label: "Emily's", note: "Best local regular" },
                ].map(({ icon: Icon, label, note }) => (
                  <div key={label} className="bg-white/10 backdrop-blur rounded-lg px-4 py-2.5 border border-white/20">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#C9A96E]" />
                      <span className="font-semibold text-sm">{label}</span>
                    </div>
                    <p className="text-white/60 text-xs mt-0.5 ml-5">{note}</p>
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
              Formby has <span className="text-[#C9A96E]">four restaurants</span> worth knowing about. Here they are, in order.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mt-4 max-w-xl">
              These are all in the village, not at the beach. Book ahead for weekends — Formby is small and the good places fill up quickly.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl py-12">

          {/* Quick comparison table */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">At a Glance</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#1C3220] text-white">
                    <tr>
                      <th className="text-left font-semibold py-3 px-5">Restaurant</th>
                      <th className="text-left font-semibold py-3 px-5">Type</th>
                      <th className="text-left font-semibold py-3 px-5">Price</th>
                      <th className="text-left font-semibold py-3 px-5">Dogs</th>
                      <th className="text-left font-semibold py-3 px-5">Booking</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {restaurants.map(({ name, type, priceRange, dogFriendly, booking }) => (
                      <tr key={name} className="hover:bg-gray-50">
                        <td className="py-3 px-5 font-semibold text-[#1C3220]">{name}</td>
                        <td className="py-3 px-5 text-[#1C3220]/60">{type}</td>
                        <td className="py-3 px-5 font-medium text-[#2E6B3E]">{priceRange}</td>
                        <td className="py-3 px-5">
                          {dogFriendly
                            ? <span className="text-[#2E6B3E] font-semibold">Yes</span>
                            : <span className="text-gray-400">No</span>
                          }
                        </td>
                        <td className="py-3 px-5 text-[#1C3220]/60 text-xs">{booking}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Individual reviews */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">The Reviews</h2>
            <div className="space-y-6">
              {restaurants.map(({ rank, name, type, priceRange, dogFriendly, booking, description, honest, bestFor }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#E8EDE6] px-6 py-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1C3220] text-[#C9A96E] rounded-xl flex items-center justify-center font-display font-bold text-lg flex-none">
                      {rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-[#1C3220] text-xl">{name}</h3>
                      <p className="text-xs text-[#1C3220]/50 mt-0.5">
                        {type} · {priceRange} · {dogFriendly ? "Dog-friendly" : "No dogs"} · {booking}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p
                      className="text-[#1C3220]/80 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: description.replace(/&apos;/g, "'") }}
                    />
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-4">
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Honest take</p>
                      <p
                        className="text-sm text-amber-900/80 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: honest.replace(/&apos;/g, "'") }}
                      />
                    </div>
                    <p className="text-xs text-[#1C3220]/50">
                      <span className="font-semibold text-[#1C3220]">Best for: </span>{bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cafes + NT */}
          <section className="mb-16 bg-[#E8EDE6] rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">Cafés & Lighter Options</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-2">NT Café (at the beach)</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  The National Trust café at the Victoria Road car park. Decent coffee, good cake, hot food at lunchtimes. Not cheap — you&apos;re paying for location, not cuisine. Ideal for a post-walk stop before the drive home. Dogs welcome outside.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-2">Village Cafés</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  Several independent cafés near Chapel Lane in the village — good for coffee and lunch. Worth exploring if you&apos;re spending time in the village rather than at the beach. Nothing that needs booking; casual walk-in options.
                </p>
              </div>
            </div>
          </section>

          {/* Booking tips */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Booking Tips</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Left Bank — book 7–10 days ahead for weekends",
                  desc: "Friday and Saturday evenings fill up quickly. For a birthday or special meal, book further ahead. Weekday lunches are usually available with shorter notice.",
                },
                {
                  title: "Emily's — book by Tuesday for the weekend",
                  desc: "Popular with regulars who book standing weeks. Call earlier rather than later. Weekday bookings much easier.",
                },
                {
                  title: "The Sparrowhawk — early or late walk-ins",
                  desc: "If you want a table without booking, go early (before 7pm) or later (after 9pm) on weekends. Midweek is easy. Food service hours worth checking.",
                },
                {
                  title: "Don Luigi — groups call ahead",
                  desc: "For a table of 6 or more, call ahead. Smaller groups can usually get in without booking on most nights.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{title}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  q: "What's the best restaurant in Formby?",
                  a: "Left Bank Brasserie. If you want the best meal available in Formby, that's your answer. Book ahead.",
                },
                {
                  q: "Where should I go if I haven't booked?",
                  a: "The Sparrowhawk — gastropub, dog-friendly, walk-ins usually possible especially early evening. Or Don Luigi if you're going with a group and want pasta and pizza.",
                },
                {
                  q: "Are there restaurants near Formby Beach?",
                  a: "The NT café is at the beach. The actual restaurants are in the village — about 10 minutes by car. Worth the drive for a proper meal rather than settling for the café.",
                },
                {
                  q: "Is Emily's good for kids?",
                  a: "Yes — Emily's is family-friendly. Relaxed atmosphere, not overly formal. Left Bank is fine for older kids; less ideal if yours are very young.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#1C3220] mb-2">{q}</h3>
                  <p className="text-sm text-[#1C3220]/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cross links */}
          <section className="pt-10 border-t border-[#1C3220]/10">
            <h3 className="font-display text-2xl font-bold text-[#1C3220] mb-6">More Formby</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/restaurants", label: "All Restaurants", desc: "Browse the full restaurant directory." },
                { href: "/guides/formby-village", label: "Formby Village", desc: "Chapel Lane, shopping, and the full village guide." },
                { href: "/cafes", label: "Cafés", desc: "Coffee stops and lighter bites." },
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
