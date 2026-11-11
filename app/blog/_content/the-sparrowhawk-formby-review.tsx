import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";

// Rewritten 11 Nov 2026: was a review with verdicts. Now a factual profile taken
// only from the pub's own pages (brunningandprice.co.uk/sparrowhawk/, home and
// contact pages, fetched 11 Nov 2026; captures in docs/freshen-2026-11/sources/).

const SOURCE = "https://www.brunningandprice.co.uk/sparrowhawk/";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Sparrowhawk, Formby: What It Is and What It Offers",
            description:
              "The Sparrowhawk is a Brunning & Price pub in a country house on Southport Old Road, Formby. Opening and food times, menus, dogs, access and booking, from the pub's own website.",
            url: "https://www.formbyguide.co.uk/blog/the-sparrowhawk-formby-review",
            author: {
              "@type": "Person",
              "@id": "https://www.formbyguide.co.uk/about#clare",
              name: "Clare",
              url: "https://www.formbyguide.co.uk/about",
            },
            about: {
              "@type": "BarOrPub",
              name: "The Sparrowhawk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Southport Old Road",
                addressLocality: "Formby",
                addressRegion: "Merseyside",
                postalCode: "L37 0AB",
                addressCountry: "GB",
              },
              url: SOURCE,
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            datePublished: "2026-05-07",
            dateModified: "2026-11-11",
            inLanguage: "en-GB",
          }),
        }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">The Sparrowhawk</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[420px] flex items-end">
        <Image
          src="/blog-sparrowhawk-formby-review.jpg"
          alt="A bowl of pappardelle ragu with Parmesan in warm candlelit restaurant lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <div className="inline-block bg-[#2E6B3E] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Places to Eat
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            The Sparrowhawk, Formby: What It Is and What It Offers
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Opening and food times, menus, dogs, access and booking, from the pub&apos;s own website.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">
        <div className="mb-8 bg-[#FFF8E8] border border-[#C9A96E]/40 rounded-xl p-5 text-sm text-[#1C3220]">
          <p>
            Updated 11 November 2026. This page used to be a review. It now sets out only what The Sparrowhawk says about itself on its own website, checked on that date. Times and menus change, so check with the pub before you go.
          </p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Sparrowhawk is a Brunning &amp; Price pub on Southport Old Road, Formby. It is in a country house set in five acres of woods and parkland, with a terrace for eating outside and gardens beyond.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Food and Drink</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The pub says its menus have a spine of classic British dishes with influences from other parts of the world, and that it puts each day&apos;s menus on its website. There is a Sunday menu with roasts, a pudding menu and a wine and drinks list.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          It is accredited by Coeliac UK for serving gluten-free food safely.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Opening and Food Times</h2>
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden mb-3">
          <table className="w-full text-sm">
            <thead className="bg-[#E8EDE6] text-[#1C3220]">
              <tr>
                <th className="text-left font-semibold py-2.5 px-4">Day</th>
                <th className="text-left font-semibold py-2.5 px-4">Open</th>
                <th className="text-left font-semibold py-2.5 px-4">Daily menu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {[
                ["Monday to Wednesday", "12noon to 10:30pm", "12noon to 8pm"],
                ["Thursday to Saturday", "12noon to 11pm", "12noon to 9pm"],
                ["Sunday", "12noon to 10pm", "12noon to 8pm"],
              ].map(([day, open, food]) => (
                <tr key={day}>
                  <td className="py-2.5 px-4 font-medium text-[#1C3220]">{day}</td>
                  <td className="py-2.5 px-4">{open}</td>
                  <td className="py-2.5 px-4">{food}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-8">As listed on the pub&apos;s contact page on 11 November 2026.</p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Dogs</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Well-behaved dogs on leads are welcome in the bar area, and the pub asks that they stay off the furniture. If you are booking a table and bringing a dog, tell the pub so it can give you a suitable table.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Access</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          The pub says it has full disabled access, including an accessible toilet and disabled parking. It also notes that a sat nav may stop a little short, and has a directions map on its website.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Booking</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You can book by phone or through the booking calendar on the pub&apos;s website, but not by email or Facebook. The pub keeps room for people who have not booked and runs a waiting list when there are no free tables. Outside tables are not reserved.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          It cannot take very large parties, wedding parties or functions.
        </p>

        <div className="bg-[#1C3220] text-white rounded-xl p-6 my-10">
          <p className="font-semibold text-lg mb-3">The Sparrowhawk: Quick Facts</p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-200">
            <div><span className="text-white font-medium">Address:</span> Southport Old Road, Formby, L37 0AB</div>
            <div><span className="text-white font-medium">Phone:</span> 01704 882 350</div>
            <div><span className="text-white font-medium">Type:</span> Pub with food (Brunning &amp; Price)</div>
            <div><span className="text-white font-medium">Dogs:</span> On leads, in the bar area</div>
          </div>
          <p className="text-xs text-gray-300 mt-4">
            Source:{" "}
            <a href={SOURCE} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              The Sparrowhawk on brunningandprice.co.uk
            </a>
          </p>
        </div>

        <ClareBio />

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">More from Formby Guide</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/restaurants/the-sparrowhawk-formby" className="text-[#2E6B3E] hover:underline font-medium text-sm">The Sparrowhawk listing</Link>
            <Link href="/guides/best-restaurants-formby" className="text-[#2E6B3E] hover:underline font-medium text-sm">Restaurants in Formby</Link>
            <Link href="/formby-pinewoods" className="text-[#2E6B3E] hover:underline font-medium text-sm">Formby Pinewoods</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
