import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            headline: "The Sparrowhawk Formby: An Honest Local Review",
            description:
              "Is The Sparrowhawk in Formby worth it? Food, drinks, atmosphere, prices and whether locals actually rate it. Written by someone who has been multiple times.",
            url: "https://www.formbyguide.co.uk/blog/the-sparrowhawk-formby-review",
            author: {
              "@type": "Person",
              "@id": "https://www.formbyguide.co.uk/about#clare",
              name: "Clare",
              url: "https://www.formbyguide.co.uk/about",
            },
            itemReviewed: {
              "@type": "Restaurant",
              name: "The Sparrowhawk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Liverpool Road",
                addressLocality: "Formby",
                addressRegion: "Merseyside",
                postalCode: "L37",
                addressCountry: "GB",
              },
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            datePublished: "2026-05-07",
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
            <span className="text-[#1C3220] font-medium">The Sparrowhawk Review</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
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
            Restaurant Review
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            The Sparrowhawk Formby: An Honest Local Review
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Good pub or great pub? I&apos;ve been enough times to have an opinion.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Sparrowhawk is on Liverpool Road, which puts it between the village centre and the 
          Formby bypass. It&apos;s a Vintage Inns pub, which tells you something about what to expect 
          from the food: well-managed, consistent, priced fairly, occasionally excellent rather than 
          routinely so. It&apos;s popular with Formby locals for a reason and popular with day trippers 
          for a similar reason. It is reliably good.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Food</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pub classics done properly. Steak, fish, burgers, Sunday roasts. The menu is broad enough 
          that most people will find something. The steaks are the headline dish and they&apos;re worth 
          ordering if that&apos;s what you&apos;re after. Cooked correctly, good quality, nothing to 
          complain about.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Sunday roast is where The Sparrowhawk does particularly well locally. Generous portions, 
          decent gravy, vegetables that are actually cooked rather than barely introduced to hot water. 
          I&apos;ve had Sunday lunch there more than once and it&apos;s consistently the thing people 
          recommend it for.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fish and chips: straightforward, good batter, proper fish. The children&apos;s menu covers 
          the basics without being embarrassing. If you&apos;re coming with kids after a day at the 
          beach, there&apos;s plenty of choice.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          What it isn&apos;t: experimental, fine dining, or a place to impress someone on a significant 
          date. For that, go to Left Bank Brasserie on Chapel Lane and book in advance. The Sparrowhawk 
          is a very good pub with very good pub food. That&apos;s a high standard and they meet it.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Drinks</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Standard Vintage Inns drinks range. Real ales on tap, a reasonable wine list, cocktails, 
          the full soft drinks selection for the kids. The cask ales are kept well, which matters 
          more than it sounds. I&apos;ve had a pint here that I&apos;d describe as properly good.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Prices are mid-range for Formby. A main and a couple of drinks will be somewhere around 
          £25-35 per person at current prices. Not cheap, not extravagant. About what you&apos;d 
          expect from a good pub in a village like this.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Space</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          It&apos;s a large pub by Formby standards. Multiple dining areas, a bar section, a garden 
          for when the weather justifies it. The garden is one of the better pub gardens in the area 
          and it fills up quickly on warm evenings and Sunday afternoons.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The interior is warm and comfortable. Dark wood, soft lighting, the kind of place where 
          a meal stretches to two hours without it feeling like you should move. Good for groups. 
          Good for families. The noise level at busy times is what you&apos;d expect from a well-used 
          pub dining room.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Dogs are welcome in the bar and garden areas. If you&apos;re coming from the beach with the 
          dog, this is the practical choice.
        </p>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">Do You Need to Book?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yes. At weekends, definitely. Sunday lunch in particular fills up by mid-morning. 
          Weekday lunchtimes are more relaxed. You can book online through the Vintage Inns 
          website or call directly. Don&apos;t turn up on a Sunday at 1pm without a reservation 
          and expect a table.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          If you&apos;re visiting Formby on a weekend, especially in summer, book The Sparrowhawk 
          the same day you book your parking. Both run out.
        </p>

        <div className="bg-[#1C3220] text-white rounded-xl p-6 my-10">
          <p className="font-semibold text-lg mb-3">The Sparrowhawk: Quick Facts</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-200">
            <div><span className="text-white font-medium">Address:</span> Liverpool Road, Formby</div>
            <div><span className="text-white font-medium">Type:</span> Gastropub (Vintage Inns)</div>
            <div><span className="text-white font-medium">Food:</span> Classic British pub menu</div>
            <div><span className="text-white font-medium">Price:</span> Mid-range (~£25-35 per head)</div>
            <div><span className="text-white font-medium">Dogs:</span> Bar and garden only</div>
            <div><span className="text-white font-medium">Booking:</span> Essential at weekends</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1C3220] mb-4 mt-10">The Verdict</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Sparrowhawk is a pub that Formby is lucky to have. Consistent, comfortable, well-run, 
          with food that does what it says and service that doesn&apos;t make you feel like an 
          inconvenience. It&apos;s not the place for a special occasion dinner but it&apos;s 
          exactly right for lunch after a morning on the beach or a Sunday roast with the family.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          I&apos;d recommend it without hesitation to anyone asking where to eat in Formby if they 
          want something reliable and good. If they want something genuinely special, I&apos;d send 
          them to Left Bank Brasserie and tell them to book.
        </p>

        <ClareBio />

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">More from Formby Guide</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/restaurants" className="text-[#2E6B3E] hover:underline font-medium text-sm">Restaurants in Formby</Link>
            <Link href="/blog/left-bank-brasserie-formby" className="text-[#2E6B3E] hover:underline font-medium text-sm">Left Bank Brasserie Review</Link>
            <Link href="/blog/formby-beach-summer-guide" className="text-[#2E6B3E] hover:underline font-medium text-sm">Formby Beach in Summer</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
