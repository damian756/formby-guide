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
            headline: "Formby in August: Late Summer at Its Best",
            description:
              "August at Formby is genuinely brilliant if you time it right. The beach is at its widest, the squirrels are active, and the evenings in the village are everything a late summer evening should be.",
            url: "https://www.formbyguide.co.uk/blog/formby-august-guide",
            datePublished: "2026-08-21",
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
            image: "https://www.formbyguide.co.uk/blog-formby-beach-august.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby in August</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1C4A5A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Seasonal
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Formby in August: Late Summer at Its Best
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            August at Formby is genuinely brilliant if you time it right. The beach is at its widest, the squirrels are active, and the evenings in the village are everything a late summer evening should be.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-beach-august.webp"
              alt="Formby beach in late summer, wide flat sand with sky reflections in shallow pools and marram grass dunes behind"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. August 21, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            August is when Formby is at its most reliably good. July can be brilliant but it is also the month when everything is at maximum capacity. August softens that without losing the good weather or the long evenings. The school holidays are still running, the beach is still lively, but there is a quality to late August that July does not quite have.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Beach in August</h2>
          <p>
            Formby beach in August is wide and flat at low tide in a way that is still surprising even when you know it. The sand is firm. The tide goes out further than most people expect. The shallow pools of seawater that form at mid-tide reflect the sky in a way that makes the whole place look bigger and more dramatic than it is.
          </p>
          <p>
            The dunes behind the beach are still green. The marram grass is at its most established in August before the autumn winds start to reshape things. Walking along the top of the dunes gives you views over both the beach and the inland pinewoods that are genuinely worth stopping for.
          </p>
          <p>
            Parking: still book ahead. The National Trust car park on Victoria Road (L37 1YH) fills before 10am on warm weekends. The NT app is the way to do it. Weekdays in August are noticeably easier than Saturdays. If you have flexibility, a Tuesday morning in August is a very different experience from a Saturday afternoon.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Squirrels in August</h2>
          <p>
            August is a reasonable month for red squirrel sightings, though not the best. The peak season runs September through February. In August the squirrels are active and feeding, which gives you a decent chance, particularly in the early morning on the squirrel trail near the NT car park.
          </p>
          <p>
            Morning visits before 9am give the best odds. The squirrels are most visible when the pinewoods are quiet. August is also when the young of the year are out and about, which means you can see smaller, slightly scruffier squirrels alongside the fully grown adults. They have a way of making an ordinary walk feel worth it that I am not going to apologise for enjoying.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              Early August mornings on the squirrel trail with nobody else around are genuinely one of the better experiences at Formby. Get there before 9am, go slowly, and look up into the pines rather than along the path.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Village in Late Summer</h2>
          <p>
            Formby village in August is relaxed in the right way. The restaurants on Chapel Lane and around the village centre are busy at weekends but not impossible to get into on a weekday evening. Left Bank Brasserie is still the special occasion option and worth booking ahead at weekends. The Sparrowhawk is reliable for something a bit more casual.
          </p>
          <p>
            The charity shops on Chapel Lane are worth a proper browse in August. I have been in and out of them for years and the quality varies enormously week to week. August tends to be good for summer clearances. Not glamorous, but genuinely worth forty minutes if you enjoy a rummage.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do with Kids in August</h2>
          <p>
            The beach is the obvious answer and the right one. But the prehistoric footprint trail at Formby Point is worth doing with children who are old enough to be interested. The prints emerge at low tide when conditions are right. They are genuinely ancient and genuinely there, which tends to land differently with children than most heritage experiences do.
          </p>
          <p>
            The squirrel trail works brilliantly with children between about five and twelve. Younger than five is a gamble unless they are patient. Older teenagers often become convincingly enthusiastic once they actually see a squirrel, even if they were cynical about it on the way there.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">End of August: What Changes</h2>
          <p>
            The last week of August is when Formby starts its shift toward autumn. School holidays end in early September and the character of the place changes noticeably. The late August bank holiday weekend is busy in the way July weekends are busy. After that, the crowds thin and the place becomes something different again.
          </p>
          <p>
            If you are trying to decide between a late August visit and a September visit, September wins on crowds. August wins on likelihood of genuinely warm weather. It is a genuine trade-off, and either works.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">More from Formby Guide:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/formby-red-squirrels-september"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#245730] transition-colors"
            >
              Red Squirrels in September
            </Link>
            <Link
              href="/red-squirrels-formby"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Full Red Squirrel Guide
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
