import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Formby During Open Week: The Quieter Alternative to Southport",
        description: "Southport is busy during The Open 2026. Formby, eight miles south, is the quieter option. Beach, pinewoods and good restaurants without the crowds.",
        url: "https://www.formbyguide.co.uk/blog/formby-open-week-2026",
        datePublished: "2026-07-14",
        author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare" },
        publisher: { "@type": "Organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
        image: "https://www.formbyguide.co.uk/blog-formby-open-week.webp",
      })}} />
      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby Open Week</span>
        </div>
      </nav>
      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Seasonal</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Formby During Open Week: The Quieter Alternative to Southport</h1>
          <p className="text-lg text-gray-600 mb-6">Southport is busy this week. Formby is not. Here is why that is worth knowing.</p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image src="/blog-formby-open-week.webp" alt="Quiet Formby village street in summer, independent shops, no crowds" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. July 14, 2026</p>
        </header>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            The Open Championship at Royal Birkdale runs until Sunday. Southport is busier than at any other point in the year. Hotels are full, restaurants need booking days in advance, and the roads around Birkdale are not worth attempting. All of which makes Formby, eight miles south on the train line, a genuinely sensible option this week.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Beach Is Normal</h2>
          <p>
            Formby beach is not affected by The Open. The National Trust car park at L37 1YH is operating as normal. Parking is still available in the mornings. The beach itself, the pinewoods, and the red squirrel trail are all running at standard July capacity, which is busy but manageable. If you are staying in the area and want a day out that does not involve Open week crowds, Formby beach is the obvious answer.
          </p>
          <p>
            The red squirrels are around, though July is not the peak viewing month. Early morning on the squirrel trail gives the best chance. Bring binoculars and be patient.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Formby as a Base for The Open</h2>
          <p>
            If you are attending The Open and are based in Formby, the journey to Royal Birkdale is straightforward. Take Merseyrail from Formby station toward Southport and alight at Hillside station. The journey takes around ten minutes and Hillside is approximately five minutes walk from the Royal Birkdale entrance. You do not need to go into Southport town centre at all.
          </p>
          <p>
            Several Formby B&Bs and holiday lets still have Open week availability where Southport has been sold out for months. If you have not sorted accommodation and still want to attend the championship, Formby is worth looking at.
          </p>
          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-lg p-5 my-8">
            <h3 className="font-semibold text-[#2E6B3E] mb-2">Getting from Formby to Royal Birkdale</h3>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>Train from Formby station toward Southport</li>
              <li>Alight at Hillside station (not Birkdale)</li>
              <li>Hillside to Royal Birkdale entrance: approximately 5 minutes walk</li>
              <li>Total journey from Formby village: around 20 minutes</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Eating in Formby This Week</h2>
          <p>
            Formby restaurants are noticeably less busy than Southport this week. Left Bank Brasserie on Brows Lane and The Sparrowhawk are both taking walk-ins at lunch more easily than you would find anywhere in Birkdale village or Southport town centre. Booking ahead for dinner is still sensible, but the availability is in a different league.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/the-open-2026" className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors">Open 2026 Formby Guide</Link>
            <Link href="/formby-beach" className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors">Formby Beach Guide</Link>
          </div>
        </div>
        <ClareBio />
      </article>
    </div>
  );
}
