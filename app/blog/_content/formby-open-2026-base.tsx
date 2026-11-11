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
            headline: "Why Formby Makes a Better Base Than Southport for The Open 2026",
            description: "Written in April 2026, before The Open at Royal Birkdale: the case for staying in Formby rather than central Southport. The 154th Open was won by Ryan Fox.",
            url: "https://www.formbyguide.co.uk/blog/formby-open-2026-base",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-04-03",
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
            <span className="text-[#1C3220] font-medium">Formby as Open 2026 Base</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-open-base.jpg"
          alt="Formby village high street with spring blossom: a quieter base for The Open 2026"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">The Open 2026</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Why Formby Makes a Better Base Than Southport for The Open 2026
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 3, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="mb-8 bg-[#FFF8E8] border border-[#C9A96E]/40 rounded-2xl p-5 text-sm text-[#1C3220]">
          <p className="font-semibold mb-1">Note, 11 November 2026</p>
          <p>
            The 154th Open was played at Royal Birkdale in July 2026 and won by Ryan Fox with a total of 270. This post was written in April, before the championship, and is kept as a record. For visitor golf at Royal Birkdale now, see{" "}
            <Link href="/the-open-2026" className="text-[#2E6B3E] underline underline-offset-2">The Open at Royal Birkdale, 2026</Link>.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>When this was written in April 2026, The Open Championship at Royal Birkdale was a few months away, and hotels in Southport and Birkdale village were filling. This post set out the case for staying in Formby instead.</p>

          <h2>The Train Journey</h2>
          <p>Formby station is on Merseyrail, and trains run towards Southport, where Hillside and Birkdale stations are. The idea was simple: stay in Formby, take the train, and leave the car behind.</p>

          <h2>The Availability Advantage</h2>
          <p>In April, the practical reason people were considering Formby was availability. Southport and Birkdale village were filling for Open week, while Formby still had B&Bs, guest houses and holiday lets, partly because people assumed it was too far from the course.</p>

          <h2>Beyond the Golf</h2>
          <p>Formby village has restaurants and cafés, and the beach and pinewoods are close by. Someone travelling with a golfer, but not interested in golf, can spend the day at Formby Beach or on the red squirrel trail.</p>

          <h2>The Caveats</h2>
          <p>You could not walk to the course from Formby. Staying here meant taking the train, and trains on championship days were expected to be busy.</p>
          <p>Southport town centre has more places to eat than Formby village.</p>
          <p>Formby has two Merseyrail stations, Formby and Freshfield, so for a golf visit it is worth checking which is nearer to where you stay.</p>
        </div>

        <div className="mt-8 bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1C3220] mb-1">More on golf near Formby</p>
          <ul className="text-sm text-[#2E6B3E] space-y-1">
            <li><Link href="/the-open-2026" className="hover:underline">The Open at Royal Birkdale, 2026: the result, and golf visits from Formby</Link></li>
            <li><Link href="/accommodation" className="hover:underline">Places to stay in Formby</Link></li>
          </ul>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
