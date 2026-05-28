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
            headline: "Red Squirrels at Formby in June: One of the Better Months to Visit",
            description: "June is underrated for red squirrel spotting at Formby. Young squirrels are active, the pinewoods are green, and the summer crowds have not fully arrived yet.",
            url: "https://www.formbyguide.co.uk/blog/formby-red-squirrels-june",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-05-28",
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
            <span className="text-[#1C3220] font-medium">Red Squirrels in June</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-red-squirrel-june.jpg"
          alt="Red squirrel eating a nut on a pine branch in the Formby pinewoods in early summer"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#8B6040]/40 border border-[#A8764A]/30 text-[#D4A876] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Wildlife
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Red Squirrels at Formby in June: One of the Better Months to Visit
            </h1>
            <p className="text-lg text-white/80">28 May 2026 · 5 min read · Written by Clare</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">

            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              Everyone talks about autumn as the time to see red squirrels at Formby. It is a good time. But June is genuinely underrated. Here is why, and what to do differently to make the most of a summer visit.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Why June Works</h2>
            <p>
              Red squirrels at Formby breed in late winter and again in early summer. By June, young squirrels from the second litter are often starting to explore and forage independently. They are less experienced and less cautious than adults, which means you are more likely to get a close look.
            </p>
            <p>
              The pinewoods in June are also at their best visually. Full canopy, good light in the mornings, warm without being uncomfortable. It is a genuinely pleasant place to spend a couple of hours.
            </p>
            <p>
              The main autumn peak (September to November) gets more attention because squirrels are actively burying food caches and are very visible. But June has its own advantages, and the visitor numbers are lower than in July and August.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Best Time of Day</h2>
            <p>
              Early morning is the most reliable window. Before 9am if possible. Squirrels are most active in the first couple of hours after sunrise. By mid-morning they tend to retreat to the canopy, particularly on warm days.
            </p>
            <p>
              I have had good sightings at the Formby Point reserve at 7.30am when there was almost no one else around. The same spot at 11am with families and dogs is a different proposition entirely.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Where to Look</h2>
            <p>
              The red squirrel reserve managed by the National Trust is the obvious starting point. The pine trees along the main path from the car park to the beach are productive. Squirrels tend to use the lower branches of pines to forage, which makes them visible at eye level rather than high in the canopy.
            </p>
            <p>
              The feeder areas set up by the NT give you the best odds of a sighting if you are prepared to stand still and wait for five to ten minutes. Look for movement in the lower canopy and listen: squirrels make a distinctive chattering noise when they are alert to something.
            </p>
            <p>
              The quieter paths away from the main route to the beach can be productive. If the main path is busy, take a side trail and go slowly.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">What to Bring</h2>
            <ul className="space-y-1">
              <li>Binoculars, even small compact ones. Worth it for the canopy views.</li>
              <li>Layers. The pinewoods are shaded and cooler than you expect, even in June.</li>
              <li>Dogs on leads. The NT requires this in the squirrel reserve area.</li>
              <li>Patience. This is not a zoo. Some mornings you see four squirrels in ten minutes. Some mornings you see none.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Combining It with the Beach</h2>
            <p>
              The practical advantage of the Formby Point reserve is that the beach is a 15-minute walk through the pinewoods. You can do both in the same visit. Squirrels early, beach mid-morning before the tide comes in, lunch in the village on the way home. That is a genuinely good day out.
            </p>

            <div className="bg-[#F5EEE8] border-l-4 border-[#8B6040] rounded-r-lg p-5 my-8">
              <p className="font-semibold text-[#5A3A20] mb-2">June Squirrel Tips</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Arrive before 9am for the best chance</li>
                <li>Go slowly and quietly on the forest paths</li>
                <li>Look at feeder areas and low pine branches first</li>
                <li>Dogs on leads throughout the reserve</li>
                <li>Young squirrels are less cautious than adults</li>
                <li>Car park postcode: L37 1YH</li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link
                href="/red-squirrels-formby"
                className="inline-flex items-center gap-2 bg-[#8B6040] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A8764A] transition text-sm"
              >
                Full Red Squirrel Guide at Formby
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-bold text-[#1C3220] mb-3">Quick Facts</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="font-semibold text-gray-500">Best time</dt><dd>Before 9am</dd></div>
                <div><dt className="font-semibold text-gray-500">Postcode</dt><dd>L37 1YH</dd></div>
                <div><dt className="font-semibold text-gray-500">Dogs</dt><dd>On leads in reserve</dd></div>
                <div><dt className="font-semibold text-gray-500">June advantage</dt><dd>Young squirrels, lower crowds</dd></div>
              </dl>
            </div>
            <ClareBio />
          </aside>
        </div>
      </div>
    </div>
  );
}
