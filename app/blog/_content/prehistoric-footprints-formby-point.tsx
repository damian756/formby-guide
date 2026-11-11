import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ClareBio from "../ClareBio";
import AdSlot from "@/components/AdSlot";

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Prehistoric Footprints at Formby Point: What They Are and How to Look for Them",
            description:
              "People and animals crossed the mudflats at Formby Point thousands of years ago, and their footprints still turn up on the shore. Who made them, how old they are, and how to go and look.",
            url: "https://www.formbyguide.co.uk/blog/prehistoric-footprints-formby-point",
            datePublished: "2026-11-11",
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
            image: "https://www.formbyguide.co.uk/beach-dunes-new.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Prehistoric Footprints</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Walks
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            The Prehistoric Footprints at Formby Point: What They Are and How to Look for Them
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thousands of years ago, people and animals walked across mudflats where Formby beach is now. Their footprints are still turning up on the shore. This guide covers who made them, how old they are and how to go and look.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/beach-dunes-new.webp"
              alt="Marram grass on the dunes at Formby with the wide beach and the sea behind under a blue sky"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. November 11, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Most people come to Formby for the red squirrels and the beach. Fewer know that the shore at Formby Point holds one of the world&apos;s largest known concentrations of prehistoric footprints, made by people and by animals including the aurochs, a wild cow that is now extinct.
          </p>
          <p>
            The National Trust lists them alongside the squirrels and the two shipwrecks as things to look out for at Formby. They are not in a museum or behind glass. They are in old layers of mud on the beach, and you can walk out and look for them when the tide is out.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Footprints Survive This Long</h2>
          <p>
            The coast here looked very different a few thousand years ago. The coastal archaeology project CITiZAN describes a sand bar about a kilometre out in the bay that held back the water from rivers and streams. Behind it was a muddy salt marsh, edged with small islands of oak and alder separated by shallow pools.
          </p>
          <p>
            People and animals walked across that mud. Some of the prints were baked hard by the sun, then filled with windblown sand and sealed under a fresh layer of mud. They stayed buried until the sea uncovered them again, thousands of years later.
          </p>
          <p>
            Research by the University of Manchester, published in 2022 in the journal Nature Ecology and Evolution, used new radiocarbon dating to show that the most species-rich footprint beds at Formby Point are much older than previously thought. Together, the beds record a long stretch of time: from the Mesolithic to the medieval period, roughly 9,000 to 1,000 years ago.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Made Them</h2>
          <p>
            The human prints include those of adults and of young children. CITiZAN lists aurochs (an extinct wild cow that stood about six feet tall at the shoulder), red deer, roe deer, wild boar and wolf, and two birds, oystercatcher and crane. The Manchester team also recorded beaver and lynx.
          </p>
          <p>
            In the oldest beds, people shared the shore with large grazing animals and with predators such as wolf and lynx. In the later beds, from the Neolithic onwards, human footprints dominate and the range of large animals falls away. The researchers suggest several possible causes, including rising sea levels shrinking the habitat, the spread of farming, and hunting.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              Treat the footprint beds as you would any archaeology. Look closely, take photos, and leave them as you found them for the next people to look for them.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Going to Look</h2>
          <p>
            The footprints are on the shoreline at Formby Point, in the older layers of mud that the sea has cut into, not in the soft sand on top. That means you can only look for them when the tide is out, so check the tide times before you set off and keep an eye on the water while you are on the shore.
          </p>
          <p>
            The easiest way onto the beach is from the National Trust car park on Lifeboat Road (L37 2EB), where a hard path and a boardwalk take you through the dunes. If you come by train, Formby station is the nearest stop for Lifeboat Road and the National Trust describes it as a short walk.
          </p>
          <figure className="my-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/beach-car-park-sign.webp"
                alt="Wooden finger post at Formby pointing to the beach via the sand dunes and to Lifeboat Road car park"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
            <figcaption className="text-sm text-gray-500 mt-2">A finger post at Formby pointing to the beach and the Lifeboat Road car park.</figcaption>
          </figure>
          <p>
            What you see changes from one visit to the next. The National Trust calls Formby one of the fastest-changing stretches of coastline in its care, and the same movement of sand and sea that uncovered the footprint beds keeps reshaping the shore.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Britain&apos;s First Lifeboat Station</h2>
          <p>
            Formby Point has a later piece of history too. According to CITiZAN, the Trustees of Liverpool Dock set up Britain&apos;s first known lifeboat station here, because Liverpool Bay, with its strong currents and shifting channels, was so dangerous for shipping. The first written record of a &quot;boat and station for the saving of lives&quot; is a note on a chart of Liverpool harbour drawn in 1771 and corrected in 1776.
          </p>
          <p>
            In 1777 a sailor called Richard Scarisbrick was appointed to look after the boat, on two guineas a year. The boathouse was repaired or rebuilt several times and finally closed in 1918. The building then served as a café until it was demolished in the 1950s.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical: Getting There and What to Know</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              ["Car parks", "Lifeboat Road, L37 2EB, is closest to the boardwalk. Victoria Road, L37 1LJ, reaches the beach through the woods and over the dunes. Both are small and fill early on sunny days."],
              ["Paying", "No booking. Pay at the machine with coins or card, or with the JustPark app. National Trust members and Blue Badge holders park free; Blue Badge holders tell the welcome team on arrival."],
              ["Opening hours", "Car park and toilet hours change with the season. On 11 November 2026 both car parks opened 09:00 to 16:00, so in winter plan a morning or early afternoon visit and check the National Trust page before you go."],
              ["By train", "Merseyrail runs every 15 minutes. Formby station for Lifeboat Road, Freshfield station for Victoria Road."],
              ["Food", "Food and drink vans park up in spring and summer only. In winter, bring a flask."],
              ["Birds and dogs", "In winter, flocks of wading birds rest on this shore. Disturbance costs them energy and, in winter especially, affects their chances of survival, so give flocks a wide berth and keep dogs close."],
            ].map(([item, detail]) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] font-bold flex-none">→</span>
                <span><span className="font-semibold text-gray-900">{item}:</span> {detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">More from Formby Guide:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/formby-beach"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#245730] transition-colors"
            >
              Formby Beach Guide
            </Link>
            <Link
              href="/blog/formby-in-winter"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Formby in Winter
            </Link>
            <Link
              href="/blog/ainsdale-beach-walk-from-formby"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Walking to Ainsdale
            </Link>
          </div>
        </div>

        {/* End-of-post sponsor (lib/ad-slots.ts) */}
        <div className="mt-10">
          <AdSlot id="post-prehistoric-footprints-formby-point" />
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
