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
            headline: "Formby Asparagus: The Local Delicacy You Should Be Eating Right Now",
            description:
              "Formby asparagus grows in the same sandy soil as the red squirrel pinewoods. The season runs to mid-June. Where to buy it locally, how to cook it, and why the Formby variety has its own flavour.",
            url: "https://www.formbyguide.co.uk/blog/formby-asparagus-guide",
            datePublished: "2026-06-10",
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
            <span className="text-[#1C3220] font-medium">Formby Asparagus</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[420px] flex items-end">
        <Image
          src="/blog-formby-asparagus.webp"
          alt="Fresh green asparagus tied with twine on a wooden surface"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl pb-10 pt-16">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Food</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Formby Asparagus: The Local Delicacy You Should Be Eating Right Now
          </h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl">
            The asparagus season ends in June. Formby&apos;s sandy soil grows some of the best in the country. If you haven&apos;t bought it yet this year, this week is your last chance.
          </p>
          <p className="text-white/55 text-sm mt-3">Clare &middot; 10 June 2026 &middot; 5 min read</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-10">
        <div className="prose prose-lg prose-green max-w-none">

          <p>Most people who live near Formby know the asparagus season exists. Fewer actually buy it before it ends. The season runs from late April to the third week of June at the latest, often shorter, and by mid-June it is genuinely over for another year.</p>

          <p>I&apos;ve been buying Formby asparagus from local farm shops every spring for years. It is noticeably different to supermarket asparagus: the stalks are finer, the tips tighter, and the flavour more concentrated. The sandy soil is the reason for all of this.</p>

          <h2>Why Formby Asparagus Is Different</h2>

          <p>Asparagus needs well-drained, light soil. The sandy soil along the Formby coastline, the same soil that the red squirrel pinewoods are planted in and that the natterjack toads breed in, is ideal. It drains fast, warms up early in spring, and produces asparagus spears that come through quickly and develop a different sweetness to those grown in heavier clay soils.</p>

          <p>Asparagus farming on the Formby dunes has a long history. The Formby Civic Society notes asparagus cultivation as one of the historic land uses on the dune fringe going back centuries. The sandy duneland fields between the village and the coast were well-suited to it. The crop has reduced in scale over the decades as land use has changed, but local production continues.</p>

          <h2>Where to Buy It</h2>

          <p>Farm shops and local greengrocers are your best bet. Freshly cut asparagus deteriorates quickly so buying it close to the source makes a genuine difference. Ask when it was cut. Asparagus cut that morning is a different thing to asparagus that has been sitting in a warehouse for three days.</p>

          <p>Formby village itself and the surrounding area have independent shops worth checking. When asparagus is in season, the good ones will have it. If your usual shop doesn&apos;t have local asparagus, ask. Some sources are not well-advertised.</p>

          <h2>How to Cook It</h2>

          <p>The simpler the better. Snap off the woody ends (the stalk will break naturally at the right point if you bend it), rinse, and roast in a hot oven with olive oil and sea salt for 10 to 12 minutes. Or griddle in a pan with a little butter. Or blanch in boiling water for two to three minutes if you want it as a side dish.</p>

          <p>The mistake is overcooking it. Asparagus should have some bite. Once it goes limp, the flavour goes with it. You want it tender but not soft.</p>

          <p>On toast with a poached egg and hollandaise is the obvious choice for a Saturday breakfast. With good parmesan and lemon zest is another strong option. Or simply roasted with olive oil as a side to whatever else you are cooking.</p>

          <h2>The Season Is Almost Over</h2>

          <p>Traditional asparagus growers follow the rule of not cutting after the summer solstice, around 21 June. The spears that come through after the season ends are left to develop into fern, which feeds the crown for the following year&apos;s crop. Most local producers will have stopped or be stopping in the next ten days.</p>

          <p>If you want Formby asparagus this year, the window is right now. Do not leave it another week.</p>

        </div>

        <div className="mt-8 p-5 bg-[#F0F7F1] rounded-2xl border border-[#D0E8D4]">
          <p className="text-sm text-[#1C3220] font-semibold mb-2">Things to do in Formby</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/things-to-do" className="inline-flex items-center gap-1.5 text-[#2E6B3E] font-semibold text-sm hover:underline">
              Things to Do in Formby <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/formby-beach" className="inline-flex items-center gap-1.5 text-[#2E6B3E] font-semibold text-sm hover:underline">
              Formby Beach Guide <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
