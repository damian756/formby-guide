import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: "Cycling in Formby: Routes, Paths and What to Know",
        description: "Cycling routes in Formby: the coastal path, NT access tracks and village lanes. What is rideable, where to park a bike, and the honest assessment of what works for families.",
        url: "https://www.formbyguide.co.uk/blog/formby-cycling-routes",
        datePublished: "2026-07-14",
        author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare" },
        publisher: { "@type": "Organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
        image: "https://www.formbyguide.co.uk/blog-formby-cycling.webp",
      })}} />
      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Cycling in Formby</span>
        </div>
      </nav>
      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1C4A5A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Walks</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Cycling in Formby: Routes, Paths and What to Know</h1>
          <p className="text-lg text-gray-600 mb-6">Formby has more cycling infrastructure than most visitors realise. Here is what is actually worth doing.</p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image src="/blog-formby-cycling.webp" alt="Cyclist path through coastal pinewoods with sea visible, Formby Sefton Coast" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. July 14, 2026</p>
        </header>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Formby is flatter than you would think and more cycleable than most people know. There is no dedicated cycling infrastructure in the village itself, but the routes available, including the coastal path, the NT access tracks, and the quiet lanes through the pinewoods, make it genuinely good for family cycling and leisure rides.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Coastal Path</h2>
          <p>
            The National Cycle Network Route 62 runs along the Sefton Coast from Southport south through Ainsdale and Formby. On the Formby section this runs inland from the beach through the dune edge, with sections of tarmac path and some compacted track. It is suitable for hybrid bikes and children's bikes. The surface varies. Some sections are smoother than others. Road bikes are possible but not ideal.
          </p>
          <p>
            From Formby you can cycle south toward Ainsdale or north toward the Birkdale corridor. The southern section toward Ainsdale is the better riding, with longer stretches of smooth path and good views toward the dunes and beach. Allow around 45 minutes to reach Ainsdale at a relaxed family pace.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">National Trust Access Tracks</h2>
          <p>
            The National Trust estate at Formby has internal tracks that are accessible on foot and by bike. The main track from the Victoria Road car park (L37 1YH) to the beach is compacted sand and gravel and rideable on a hybrid or mountain bike. It is not suitable for road bikes. Cycling is permitted on the main access track but not on the narrower footpaths through the pinewoods.
          </p>
          <p>
            Be aware of walkers and families on the main NT track, particularly in summer when it is busy between 10am and 4pm. Early morning and evening cycling is more pleasant and considerably less congested.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Village Lanes</h2>
          <p>
            The roads around Formby village are quiet enough for comfortable cycling. Victoria Road, Freshfield Road, and the lanes toward Freshfield village are used by local cyclists regularly. These are not separated cycle paths: they are standard roads with low traffic that are comfortable on a bike without being designed for it.
          </p>
          <p>
            Freshfield village is about two miles north of Formby village centre and easily reached by bike on quiet roads. It is worth visiting: quieter than Formby, a few independent businesses, and a different character to the main village.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Bike Hire</h2>
          <p>
            There is no dedicated bike hire in Formby village at the time of writing. Visitors with their own bikes can bring them on Merseyrail trains (subject to train conditions and space). If cycling is the primary reason for the trip, check Merseyrail's current cycle policy before travelling.
          </p>
          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-lg p-5 my-8">
            <h3 className="font-semibold text-[#2E6B3E] mb-2">Formby cycling at a glance</h3>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>Coastal path (NCN Route 62): hybrid/mountain bike, family-friendly, flat</li>
              <li>NT access track to beach: compacted gravel, hybrid/MTB only</li>
              <li>Village lanes toward Freshfield: quiet roads, comfortable on any bike</li>
              <li>Best for: families and casual riders, not road cyclists</li>
              <li>No dedicated bike hire in Formby village</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/formby-pinewoods" className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors">Formby Pinewoods Guide</Link>
            <Link href="/formby-beach" className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors">Formby Beach Guide</Link>
          </div>
        </div>
        <ClareBio />
      </article>
    </div>
  );
}
