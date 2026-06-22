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
            "@type": "Article",
            headline: "Walking from Formby to Ainsdale: The Coastal Path Along the Beach",
            description:
              "The coastal walk from Formby Point south to Ainsdale beach covers about three miles of open sand and dune path. What to expect, how long it takes, and practical information for the route.",
            url: "https://www.formbyguide.co.uk/blog/ainsdale-beach-walk-from-formby",
            datePublished: "2026-06-22",
            author: {
              "@type": "Person",
              "@id": "https://www.formbyguide.co.uk/about#clare",
              name: "Clare",
              url: "https://www.formbyguide.co.uk/about",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            image: "https://www.formbyguide.co.uk/blog-ainsdale-coastal-walk.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby to Ainsdale Walk</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Walks
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Walking from Formby to Ainsdale: The Coastal Path Along the Beach
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            One of the best walks on the Sefton Coast and most visitors never do it. From Formby Point south to Ainsdale is about three miles of open beach and dune path. Here is what to expect.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-ainsdale-coastal-walk.webp"
              alt="Sandy coastal path through dunes leading toward the sea, Sefton Coast"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. June 22, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Most people who come to Formby beach arrive, walk to the sea, and walk back. Which is entirely reasonable. But if you have the time and the right footwear, the walk south from Formby Point to Ainsdale beach is one of the better things you can do on the Sefton Coast. About three miles one way. Mostly on beach or firm sand path. Quiet mid-week, busier on summer weekends but never crowded.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Route</h2>
          <p>
            Start from the National Trust car park on Victoria Road (L37 1YH). Walk the main path through the pinewoods to the beach. Once you hit the open sand, turn left (south) and keep the dunes on your right and the sea on your left.
          </p>
          <p>
            From Formby Point to the southern edge of Ainsdale beach is roughly three miles. The walking is straightforward: flat, open, and firm sand unless you are walking at high tide, in which case the soft sand at the top of the beach is less comfortable. Aim to walk within two hours either side of low tide for the best surface.
          </p>
          <p>
            Ainsdale beach itself has a car park on Shore Road (PR8 2QB) which is where most people who walk one-way arrange a pick-up. Or you turn round and walk back. The return is the same route and no harder; you are just facing north instead of south.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Pass</h2>
          <p>
            The dune system runs continuously from Formby Point south to Ainsdale. This is Ainsdale Sand Dunes National Nature Reserve: one of the most important coastal dune habitats in England. The dunes are managed habitat, not just scenery. Natterjack toads breed in the dune slacks in spring. Sand lizards bask on south-facing slopes in summer. The wildflowers in June and July are worth looking for.
          </p>
          <p>
            About halfway along, near the Ainsdale NNR boundary, there is an RSPB-managed little tern nesting site on the beach, fenced and wardened during the breeding season (April to August). The birds are small and fast. If you see a small tern diving repeatedly into the shallows close to the beach, that is likely a little tern. Keep dogs on leads near the colony.
          </p>
          <p>
            The National Trust land transitions into Natural England NNR about a mile south of Formby Point. The character of the dunes changes slightly: taller dune ridges, more open bare sand in places from restoration work.
          </p>

          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-lg p-5 my-8">
            <h3 className="font-semibold text-[#2E6B3E] mb-2">Walk basics</h3>
            <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
              <li>Start: NT car park, Victoria Road, Formby (L37 1YH)</li>
              <li>End: Ainsdale beach car park, Shore Road (PR8 2QB)</li>
              <li>Distance: approximately 3 miles one way</li>
              <li>Time: 60 to 90 minutes at a steady pace one way</li>
              <li>Terrain: beach and firm sand path, flat throughout</li>
              <li>Best timing: walk within 2 hours of low tide for firm sand</li>
              <li>Dogs: allowed on both beaches; leads near the little tern colony</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Back</h2>
          <p>
            The easiest option if you are walking one way: arrange a pick-up at Ainsdale. Ainsdale beach car park on Shore Road is a clear destination for anyone navigating by postcode. If you are on your own or the pick-up logistics are complicated, just walk back. The route is flat and the return is straightforward.
          </p>
          <p>
            Ainsdale also has a train station (Ainsdale station, roughly 15 minutes walk from the beach car park inland through the village). Merseyrail runs back to Formby or into Liverpool from there. Worth knowing if you want to make it a one-way walk without needing a driver.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Bring</h2>
          <p>
            Trainers are fine on firm sand. Flip flops are not: you will be walking on soft sand at the top of the beach at points and through sandy dune paths where flip flops fall apart quickly. Water, suncream (you are exposed the whole time, no tree cover once you are on the beach), and a layer for the sea wind. Even on a warm day the coastal wind can surprise you.
          </p>
          <p>
            The walk is completely flat so it is accessible for most fitness levels. With kids, the distance is probably better split: walk south for 30 to 45 minutes, have a look at the dunes, and come back. The full six miles return is a long day for small children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Go</h2>
          <p>
            June and July are the best months for this walk. Long light, wildflowers in the dune grassland, and the little tern colony active on the beach. Morning is better than afternoon for the light direction (you are walking broadly east-west relative to the sea). A Tuesday in July beats a Sunday in July by some margin for crowds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/formby-pinewoods"
              className="inline-flex items-center justify-center bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#245530] transition-colors"
            >
              Formby Pinewoods Guide
            </Link>
            <Link
              href="/formby-beach"
              className="inline-flex items-center justify-center border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#2E6B3E] hover:text-white transition-colors"
            >
              Formby Beach Guide
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
