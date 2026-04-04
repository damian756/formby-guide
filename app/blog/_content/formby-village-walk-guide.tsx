import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock } from "lucide-react";
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
            headline: "Formby Village Walk: Chapel Lane, the High Street, and What's Worth Stopping For",
            description: "A guide to walking around Formby village: Chapel Lane boutiques, independent shops, the best pubs and cafes, and how long it actually takes.",
            url: "https://www.formbyguide.co.uk/blog/formby-village-walk-guide",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-19",
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
            <span className="text-[#1C3220] font-medium">Formby Village Walk</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-card-village-walk.webp"
          alt="Formby village high street with independent shops and spring flowers"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Village Walk · Shopping
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Formby Village Walk<br />
              <span className="text-[#C9A96E]">Chapel Lane & What to See</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Formby village has more to it than most visitors realise. Here&apos;s how to spend an afternoon properly.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare: Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 19, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1A5C3A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Walk length", value: "~1 mile" },
              { label: "Time", value: "1–2 hrs" },
              { label: "Terrain", value: "Flat" },
              { label: "Dog friendly", value: "Yes" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <p className="text-[#C9A96E] font-bold text-lg">{value}</p>
                <p className="text-white/50 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
        <div className="prose prose-lg prose-slate max-w-none">

          <p className="text-xl text-[#1C3220] font-medium leading-relaxed mb-8">
            Most people who visit Formby go straight to the beach. Which is fair: the beach and pinewoods are genuinely the main event. But if you&apos;re here for a full day, or you&apos;ve done the beach and want something else, the village itself is worth an hour. Here&apos;s what&apos;s actually there.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Chapel Lane</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            Chapel Lane is the best street in Formby for browsing. It runs parallel to the main Formby bypass road and has a cluster of independent shops: boutiques, gift shops, a few cafes: that give the village a proper centre. It&apos;s where you go if you want to spend an hour browsing and come home with something that isn&apos;t from Amazon.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            I&apos;m in the charity shops here most weeks. There are a couple that stock genuinely good quality items: Formby is an affluent area and the charity shop donations reflect that. If you&apos;re a bargain hunter, it&apos;s worth 20 minutes. I&apos;ve found some proper things over the years.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The high street and surrounding roads</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            Formby doesn&apos;t have a traditional high street in the way some towns do: the shops are spread across a few roads rather than concentrated on one. But the area around Three Tuns Lane and the roads off Chapel Lane has enough to make a walk worthwhile. A decent deli, a few gift shops, the local Post Office for anyone who still uses them.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The key thing to know: the village shops are mostly owner-operated, they have individual hours, and some don&apos;t open until mid-morning. If you&apos;re planning a village wander, aim for 10:30am onwards on a weekday. Weekends are busier but more shops are reliably open.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Pubs for after</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The village has a handful of pubs that are good for a post-walk lunch or an afternoon drink. The Freshfield near Freshfield station is dog-friendly and does a decent food menu: good option if you&apos;ve walked in from the nature reserve. The Victoria Hotel on Liverpool Road is more of a traditional pub. Both are worth knowing about.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The practical route</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            Park near Three Tuns Lane (L37 4AQ is a reasonable postcode for the village centre). From there, walk down Chapel Lane and back, loop around the village centre roads, and finish with a coffee or lunch somewhere. The whole thing: including stops: is about 90 minutes at an easy pace. Flat throughout. Fine for pushchairs and dogs.
          </p>

          <div className="bg-[#1C3220] text-white rounded-xl p-6 my-10">
            <p className="font-bold text-[#C9A96E] text-sm uppercase tracking-wide mb-2">The honest case for the village</p>
            <p className="leading-relaxed text-white/85">
              Formby village isn&apos;t a destination in its own right: it&apos;s a pleasant complement to the beach. If you&apos;re here for the day and you want more than just sand and pinewoods, a village wander is a genuinely nice way to spend the second half of it. Especially if there are good charity shops involved.
            </p>
          </div>

          <div className="bg-[#F0F7F2] border border-[#2E6B3E]/20 rounded-xl p-6 my-8">
            <p className="text-sm font-bold text-[#2E6B3E] uppercase tracking-wide mb-3">Getting here</p>
            <ul className="space-y-1 text-[#4A6B5A] text-sm">
              <li><strong>By car:</strong> Park near the village centre: L37 4AQ. Free parking available on surrounding streets.</li>
              <li><strong>By train:</strong> Formby station (Merseyrail Northern Line) is a 5-minute walk from the village centre.</li>
              <li><strong>From the beach:</strong> Five-minute drive, or a 20-minute walk along the local footpaths.</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/things-to-do"
            className="flex-1 bg-[#2E6B3E] text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#1C4A2A] transition"
          >
            Things to Do in Formby →
          </Link>
          <Link
            href="/blog"
            className="flex-1 bg-white border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#F0F7F2] transition"
          >
            More Formby Guides →
          </Link>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
