import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

// Reframed 11 Nov 2026 from a ranked "best restaurants" list into a factual guide.
// Every description comes from the restaurant's own website, fetched 11 Nov 2026
// (captures in docs/freshen-2026-11/sources/), with addresses checked against the
// Food Standards Agency register. No rankings, verdicts or price ratings.

export const metadata: Metadata = {
  title: "Restaurants in Formby: Where They Are and What They Offer",
  description:
    "Restaurants in Formby: Emily's, The Sparrowhawk, Don Luigi and Sorrento. Addresses, menus and dog policies, taken from each restaurant's own website.",
  keywords:
    "restaurants formby, where to eat formby, formby restaurants, emily's formby, the sparrowhawk formby, don luigi formby, sorrento formby",
  alternates: { canonical: `${BASE_URL}/guides/best-restaurants-formby` },
  openGraph: {
    title: "Restaurants in Formby: Where They Are and What They Offer",
    description:
      "Emily's, The Sparrowhawk, Don Luigi and Sorrento: addresses, menus and dog policies, from each restaurant's own website.",
    url: `${BASE_URL}/guides/best-restaurants-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/blog-card-food.webp`, width: 1200, height: 630, alt: "A table laid for a meal" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Restaurants in Formby",
  description: "Where Formby's restaurants are and what each one offers, from their own websites.",
  url: `${BASE_URL}/guides/best-restaurants-formby`,
};

type Restaurant = {
  name: string;
  slug: string;
  kind: string;
  address: string;
  offers: string[];
  dogs: string;
  booking: string;
  source: { label: string; href: string };
};

// Alphabetical order. Nothing here is a ranking.
const restaurants: Restaurant[] = [
  {
    name: "Don Luigi",
    slug: "don-luigi-formby",
    kind: "Italian restaurant",
    address: "31 Church Road, Formby, L37 8BQ",
    offers: [
      "Main, set, grill, small plates and drinks menus, with pizza in the Naples style.",
      "Christmas and New Year's Eve menus in December.",
      "Gift cards are sold in the restaurant only, not online.",
    ],
    dogs: "Not stated on its website: ask the restaurant.",
    booking: "Book a table through its website or by phone on 01704 878257.",
    source: { label: "donluigirestaurant.co.uk", href: "http://www.donluigirestaurant.co.uk/" },
  },
  {
    name: "Emily's",
    slug: "emilys-formby",
    kind: "Restaurant",
    address: "25 Brows Lane, Formby",
    offers: [
      "Describes itself as a botanical hideaway in the heart of Formby.",
      "Breakfast and brunch from 9am every day; the main menu from 12:30pm Monday to Saturday and the Sunday menu from 2pm.",
      "A kids menu for under-12s, a gluten-free brunch menu and private dining.",
    ],
    dogs: "Well-behaved dogs are welcome every day until 5pm, but not during evening service.",
    booking: "Walk-ins are taken on a first come, first served basis; Emily's advises booking, especially at weekends.",
    source: { label: "emilysformby.com", href: "https://emilysformby.com/" },
  },
  {
    name: "Sorrento",
    slug: "sorrento",
    kind: "Family-run Italian restaurant",
    address: "29 Three Tuns Lane, Formby, L37 4AQ",
    offers: [
      "Opened in Formby in September 2009, after the family's first Sorrento in Orrell in 1998.",
      "Menu, specials, desserts and wine list on its website.",
      "An outdoor seating area.",
    ],
    dogs: "Not stated on its website: ask the restaurant.",
    booking: "Contact details are on its website.",
    source: { label: "sorrento.uk.com", href: "https://www.sorrento.uk.com/" },
  },
  {
    name: "The Sparrowhawk",
    slug: "the-sparrowhawk-formby",
    kind: "Pub with food (Brunning & Price)",
    address: "Southport Old Road, Formby, L37 0AB",
    offers: [
      "A country house set in five acres of woods and parkland, with a terrace and gardens.",
      "A daily menu built on British dishes, and Sunday roasts. Coeliac UK accredited for gluten-free food.",
      "Open from noon every day. Food from noon to 8pm Sunday to Wednesday and to 9pm Thursday to Saturday.",
      "Full disabled access, including an accessible toilet and disabled parking.",
    ],
    dogs: "Well-behaved dogs on leads are welcome in the bar area.",
    booking: "Bookings by phone or online, not by email or Facebook. Some tables are kept for people who have not booked, and there is a waiting list when it is full.",
    source: { label: "brunningandprice.co.uk/sparrowhawk", href: "https://www.brunningandprice.co.uk/sparrowhawk/" },
  },
];

const faqs = [
  {
    q: "Which restaurants in Formby welcome dogs?",
    a: "The Sparrowhawk says well-behaved dogs on leads are welcome in its bar area. Emily's says well-behaved dogs are welcome until 5pm, but not during evening service. For anywhere else, ask before you go.",
  },
  {
    q: "Is there a café or restaurant at Formby Beach?",
    a: "No. The National Trust says ice cream, snacks and refreshments are sold from mobile concessions in the car parks in spring and summer. The restaurants are in and around the village.",
  },
  {
    q: "Can I eat at The Sparrowhawk without booking?",
    a: "The Sparrowhawk says it keeps room for people who have not booked and runs a waiting list when there are no free tables. Its outside tables are not reserved.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RestaurantsFormbyPage() {
  const guide = getGuide("best-restaurants-formby");
  return (
    <GuideLayout guide={guide}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Hero */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center bg-[#1C3220]">
          <Image
            src="/blog-card-food.webp"
            alt="A table laid for a meal"
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
                <span>Restaurants</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Restaurants in Formby
              </h1>
              <p className="text-xl text-white/85 leading-relaxed">
                Where four of Formby&apos;s restaurants are and what each one offers, taken from their own websites in November 2026.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl py-12">

          <p className="text-[#1C3220]/75 leading-relaxed mb-10 max-w-3xl">
            They are listed in alphabetical order. Menus and opening times change, so check with the restaurant before you go. The{" "}
            <Link href="/restaurants" className="text-[#2E6B3E] underline underline-offset-2">restaurants directory</Link>{" "}
            lists every restaurant we know of in and around Formby. Being listed here is not a recommendation.
          </p>

          {/* At a glance */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">At a Glance</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#1C3220] text-white">
                    <tr>
                      <th className="text-left font-semibold py-3 px-5">Restaurant</th>
                      <th className="text-left font-semibold py-3 px-5">Type</th>
                      <th className="text-left font-semibold py-3 px-5">Address</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {restaurants.map(({ name, kind, address }) => (
                      <tr key={name}>
                        <td className="py-3 px-5 font-semibold text-[#1C3220]">{name}</td>
                        <td className="py-3 px-5 text-[#1C3220]/70">{kind}</td>
                        <td className="py-3 px-5 text-[#1C3220]/70">{address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Each restaurant */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">The Restaurants</h2>
            <div className="space-y-6">
              {restaurants.map(({ name, slug, kind, address, offers, dogs, booking, source }) => (
                <div key={name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#E8EDE6] px-6 py-4 flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[12rem]">
                      <h3 className="font-display font-bold text-[#1C3220] text-xl">{name}</h3>
                      <p className="text-xs text-[#1C3220]/60 mt-0.5">{kind} · {address}</p>
                    </div>
                    <Link
                      href={`/restaurants/${slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E6B3E] border border-[#2E6B3E]/30 hover:bg-[#2E6B3E] hover:text-white px-3 py-1.5 rounded-full transition-colors flex-none"
                    >
                      View listing <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="p-6">
                    <ul className="list-disc pl-5 space-y-1.5 text-[#1C3220]/80 leading-relaxed mb-4">
                      {offers.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                    <p className="text-sm text-[#1C3220]/75 mb-1.5">
                      <span className="font-semibold text-[#1C3220]">Dogs: </span>{dogs}
                    </p>
                    <p className="text-sm text-[#1C3220]/75 mb-3">
                      <span className="font-semibold text-[#1C3220]">Booking: </span>{booking}
                    </p>
                    <p className="text-xs text-[#1C3220]/60">
                      Source:{" "}
                      <a href={source.href} className="text-[#2E6B3E] underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                        {source.label}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cafes + beach concessions */}
          <section className="mb-16 bg-[#E8EDE6] rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">Cafés and Food at the Beach</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-2">Food at the Beach</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  There is no café on site at Formby. Mobile concessions run in the car parks in spring and summer only, so bring a flask the rest of the year.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1C3220] mb-2">Village Cafés</h3>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  There are cafés on and around Chapel Lane in the village. The{" "}
                  <Link href="/cafes" className="text-[#2E6B3E] underline underline-offset-2">cafés directory</Link>{" "}
                  lists them with addresses and contact details.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map(({ q, a }) => (
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
                { href: "/blog/where-to-eat-formby-with-kids", label: "Eating Out With Kids", desc: "Children's menus and family facilities, from the restaurants' own pages." },
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
