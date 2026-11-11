import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GuideLayout from "@/app/components/GuideLayout";
import { getGuide } from "@/lib/guides-config";

const BASE_URL = "https://www.formbyguide.co.uk";

// Reframed 11 Nov 2026: The 154th Open has been played. This page is now a
// record of the result plus what still helps a golf visit from Formby.
// Sources (fetched 11 Nov 2026, captures in docs/freshen-2026-11/sources/):
// theopen.com/Royal-Birkdale-154th-Open, theopen.com/latest/ryan-fox-royal-birkdale-2026-story,
// royalbirkdale.com/visitors/, merseyrail.org station pages, nationaltrust.org.uk Formby page.

export const metadata: Metadata = {
  title: "The Open at Royal Birkdale 2026: The Result, and Golf Visits from Formby",
  description:
    "Ryan Fox won the 154th Open at Royal Birkdale in July 2026 with a total of 270. What the club says about visitor tee times now, and getting there from Formby.",
  alternates: { canonical: `${BASE_URL}/the-open-2026` },
  openGraph: {
    title: "The Open at Royal Birkdale 2026: The Result, and Golf Visits from Formby",
    description:
      "Ryan Fox won the 154th Open at Royal Birkdale with 270. Visitor tee times and getting there from Formby.",
    url: `${BASE_URL}/the-open-2026`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/about-formby-railway.webp`, width: 1200, height: 630, alt: "Formby railway station" }],
  },
};

const ROUNDS = [
  { label: "Round 1", score: "72" },
  { label: "Round 2", score: "68" },
  { label: "Round 3", score: "62" },
  { label: "Round 4", score: "68" },
  { label: "Total", score: "270 (10 under par)" },
];

export default function TheOpen2026Page() {
  const guide = getGuide("the-open-2026");
  return (
    <GuideLayout guide={guide}>
      <>
        {/* Hero */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center bg-[#1C3220]">
          <Image
            src="/about-formby-railway.webp"
            alt="Formby railway station"
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
              <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">
                The 154th Open, July 2026
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                The Open at Royal Birkdale, 2026
              </h1>
              <p className="text-xl text-white/85 leading-relaxed">
                The 154th Open was played at Royal Birkdale in July 2026. Ryan Fox of New Zealand won with a total of 270, ten under par, with a birdie at the 72nd hole.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl py-12">

          {/* The result */}
          <section className="mb-14">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">The Result</h2>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              According to The R&amp;A&apos;s official site, Fox and Cameron Young were tied on nine under par as Fox came to the 18th. He holed a putt of about 12 feet for a birdie and won by one stroke. His third round of 62 equalled the lowest score in Open history, matching Lucas Herbert and Sam Burns, who both shot 62 the day before. It was his first major title.
            </p>
            <p className="text-[#1C3220]/75 leading-relaxed mb-6">
              The R&amp;A says more than 300,000 spectators attended across the week.
            </p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <caption className="text-left text-xs text-[#1C3220]/60 px-5 pt-4 pb-2">Ryan Fox, The 154th Open</caption>
                  <tbody className="divide-y divide-gray-100">
                    {ROUNDS.map(({ label, score }) => (
                      <tr key={label}>
                        <th scope="row" className="text-left font-semibold text-[#1C3220] py-3 px-5">{label}</th>
                        <td className="py-3 px-5 text-[#1C3220]/75">{score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-[#1C3220]/60 mt-3">
              Source:{" "}
              <a
                href="https://www.theopen.com/previous-opens/royal-birkdale-154th-open"
                className="text-[#2E6B3E] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                theopen.com, The 154th Open
              </a>
              .
            </p>
          </section>

          {/* Playing Royal Birkdale */}
          <section className="mb-14">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Playing Royal Birkdale</h2>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              Royal Birkdale Golf Club is on Waterloo Road, Southport, PR8 2LX. Visitors play as Members for the Day and check in at the Professional Shop on arrival.
            </p>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              When we checked the club&apos;s visitor booking page on 11 November 2026, it said visitor tee times were fully booked throughout 2026 and 2027, including its Birkdale Open Experience Package, and asked golfers to check back for 2028 availability. The club also runs Open Events, its own competitions, through the year.
            </p>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              The club asks for smart golf clothing on the course: a collared shirt tucked in and golf shoes. Jeans, tracksuits, round-neck T-shirts and trainers are not allowed.
            </p>
            <p className="text-[#1C3220]/75 leading-relaxed">
              For tee times, fees and the full dress code, see the{" "}
              <a
                href="https://royalbirkdale.com/visitors/"
                className="text-[#2E6B3E] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Royal Birkdale visitors page
              </a>
              .
            </p>
          </section>

          {/* Getting there */}
          <section className="mb-14">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Getting There from Formby</h2>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              Formby and Freshfield stations are on Merseyrail, and the National Trust says trains run every 15 minutes. Hillside (PR8 2LN) and Birkdale (PR8 4AF) are Merseyrail stations in Southport.
            </p>
            <p className="text-[#1C3220]/75 leading-relaxed">
              Check the{" "}
              <a
                href="https://www.merseyrail.org/"
                className="text-[#2E6B3E] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Merseyrail journey planner
              </a>{" "}
              for times and the nearest station to the club before you set off.
            </p>
          </section>

          {/* Staying and eating */}
          <section className="mb-14">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Staying and Eating in Formby</h2>
            <p className="text-[#1C3220]/75 leading-relaxed mb-5">
              Our directory lists places to stay, restaurants and pubs in and around Formby, with addresses and contact details.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/accommodation"
                className="inline-flex items-center gap-2 bg-[#1C3220] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#2E6B3E] transition-colors"
              >
                Places to stay
              </Link>
              <Link
                href="/restaurants"
                className="inline-flex items-center gap-2 border border-[#1C3220] text-[#1C3220] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1C3220] hover:text-white transition-colors"
              >
                Restaurants
              </Link>
              <Link
                href="/pubs"
                className="inline-flex items-center gap-2 border border-[#1C3220] text-[#1C3220] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1C3220] hover:text-white transition-colors"
              >
                Pubs
              </Link>
            </div>
          </section>

          {/* While you're here */}
          <section className="mb-8 bg-[#E8EDE6] rounded-2xl p-6 md:p-8">
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-3">While You&apos;re Here</h2>
            <p className="text-[#1C3220]/75 leading-relaxed mb-4">
              The National Trust&apos;s Formby estate has the beach, the dunes and the pinewoods where red squirrels live. The car parks are on Victoria Road (L37 1LJ) and Lifeboat Road (L37 2EB).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/formby-beach" className="text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors">
                Formby Beach guide
              </Link>
              <Link href="/formby-pinewoods" className="text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors">
                Formby Pinewoods guide
              </Link>
              <Link href="/red-squirrels-formby" className="text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors">
                Red squirrels guide
              </Link>
            </div>
          </section>

        </div>
      </>
    </GuideLayout>
  );
}
