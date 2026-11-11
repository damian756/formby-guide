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
        description: "Written during Open week in July 2026: Formby as a quieter alternative to Southport while The 154th Open was on at Royal Birkdale. Ryan Fox won with 270.",
        url: "https://www.formbyguide.co.uk/blog/formby-open-week-2026",
        datePublished: "2026-07-14",
        dateModified: "2026-11-11",
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
          <p className="text-lg text-gray-600 mb-6">Written during Open week in July 2026, when Southport was busy and Formby was not.</p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image src="/blog-formby-open-week.webp" alt="Quiet Formby village street in summer, independent shops, no crowds" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. July 14, 2026</p>
        </header>
        <div className="mb-8 bg-[#FFF8E8] border border-[#C9A96E]/40 rounded-lg p-5 text-sm text-gray-800">
          <p className="font-semibold mb-1">Note, 11 November 2026</p>
          <p>
            The 154th Open was played at Royal Birkdale in July 2026 and won by Ryan Fox with a total of 270. This post was written during Open week and is kept as a record. For visitor golf at Royal Birkdale now, see{" "}
            <Link href="/the-open-2026" className="text-[#2E6B3E] underline underline-offset-2">The Open at Royal Birkdale, 2026</Link>.
          </p>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            This was written on the Tuesday of Open week, with the championship at Royal Birkdale running until Sunday. Southport was at its busiest, with hotels full and the roads around Birkdale congested. Formby, south of Southport and on Merseyrail, was the quieter option that week.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Beach Is Normal</h2>
          <p>
            Formby beach was not part of The Open. When this was written, the National Trust car park at L37 1LJ was operating as normal, and the beach, the pinewoods and the red squirrel trail were open as usual.
          </p>
          <p>
            The red squirrels live in the pinewoods all year. For the current guidance on squirrel pox, see our <Link href="/red-squirrels-formby" className="text-[#2E6B3E] underline underline-offset-2">red squirrels guide</Link>.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Formby as a Base for The Open</h2>
          <p>
            Formby station is on Merseyrail, with trains towards Southport, where Hillside and Birkdale stations are. Spectators staying in Formby could take the train and leave the car behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/the-open-2026" className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors">The Open at Royal Birkdale, 2026</Link>
            <Link href="/formby-beach" className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors">Formby Beach Guide</Link>
          </div>
        </div>
        <ClareBio />
      </article>
    </div>
  );
}
