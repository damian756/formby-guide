import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
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
            headline: "Wild Garlic at Formby Pinewoods: Where to Find It and What to Do With It",
            description: "May is the month wild garlic takes over the woodland floor in Formby. Where to find it, when to go, and what to cook.",
            url: "https://www.formbyguide.co.uk/blog/wild-garlic-formby-pinewoods",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-05-17",
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
            <span className="text-[#1C3220] font-medium">Wild Garlic at Formby</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-wild-garlic-formby-pinewoods.jpg"
          alt="Wild garlic carpet in Formby pinewoods, May"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#2E8A6E]/20 border border-[#2E8A6E]/30 text-[#7DD4B8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Wildlife
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Wild Garlic at Formby:<br />
              <span className="text-[#7DD4B8]">Where to Find It in May</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              For a few weeks in May, parts of the Formby pinewoods smell incredible and look extraordinary. Here&apos;s where to go and what to do with it when you get home.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] prose-a:text-[#2E6B3E] max-w-none">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                I grew up in Formby and I&apos;ll be honest: I didn&apos;t really notice wild garlic until a few years ago. Now it&apos;s one of the things I look forward to most in May. If you walk through certain parts of the pinewoods on a warm morning in mid-May, the smell hits you before you see it.
              </p>

              <h2>Where to Find Wild Garlic in Formby</h2>
              <p>
                The best spots are in the deciduous woodland sections rather than the Scots pine areas. Wild garlic needs damp, shaded conditions under broadleaf trees. The patches around the edges of the NT car park area and along some of the wetter paths toward the slack areas are the most reliable.
              </p>
              <p>
                You&apos;ll smell it before you see it. That distinctive garlic scent in the air means you&apos;re close. The white star-shaped flowers in full bloom cover the ground in large drifts. Once you spot one patch, you&apos;ll usually find more nearby.
              </p>

              <h2>When to Go</h2>
              <p>
                Peak wild garlic season at Formby is roughly the last two weeks of April into mid-May. By late May the flowers have usually gone over and the leaves become less useful. Go now if you&apos;re reading this in May.
              </p>
              <p>
                Early morning is genuinely better. The scent is stronger, the woodland is quieter, and you&apos;re not competing with the weekend crowds at the NT car park. An 8am walk on a weekday in May is one of the best things Formby offers.
              </p>

              <h2>Picking Responsibly</h2>
              <p>
                You can pick wild garlic for personal use on the Formby pinewoods paths, but a few rules apply. Don&apos;t strip any one patch bare. Take leaves rather than bulbs (the plant regenerates from the bulb). Don&apos;t pick in the NT car park areas where foraging rules may be stricter. And be certain of your identification: the leaves look similar to lily of the valley, which is toxic. Wild garlic leaves smell unmistakably of garlic when crushed. Lily of the valley does not.
              </p>

              <h2>What to Do With It</h2>
              <p>
                At home I use wild garlic a few different ways. The simplest is a pesto: blitz the leaves with olive oil, parmesan, pine nuts and a squeeze of lemon. It lasts about a week in the fridge. Goes on pasta, toast, scrambled eggs, anything.
              </p>
              <p>
                Wild garlic butter is easier still. Chop the leaves fine, mix with softened butter and a pinch of salt. Roll in cling film and freeze. You&apos;ve got flavoured butter for months.
              </p>
              <p>
                The flowers are edible too and look brilliant scattered over a salad or on a bowl of soup.
              </p>
            </div>

            <div className="not-prose my-10 bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Practical info</p>
              <ul className="space-y-2 text-sm text-[#1C3220]/80">
                <li><strong>Postcode:</strong> L37 1YH (NT car park, Formby)</li>
                <li><strong>Best timing:</strong> late April to mid-May, early morning</li>
                <li><strong>Parking:</strong> NT car park, book via the NT app</li>
                <li><strong>Dogs:</strong> welcome on leads through the pinewoods</li>
              </ul>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none">
              <h2>While You&apos;re There</h2>
              <p>
                If you&apos;re walking the pinewoods in May anyway, this is also peak red squirrel season. Early morning on a weekday is your best chance of seeing them. Keep dogs on leads throughout the squirrel trail. The NT café is open from 10am.
              </p>
            </div>

            <div className="not-prose mt-10">
              <Link href="/red-squirrels-formby" className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:underline">
                Red squirrel spotting guide for Formby <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Wild Garlic Quick Facts</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="pb-3 border-b border-gray-50"><strong className="text-[#1C3220]">Season:</strong> Late April to mid-May</div>
                <div className="pb-3 border-b border-gray-50"><strong className="text-[#1C3220]">Smell:</strong> Unmistakably garlicky when leaves crushed</div>
                <div className="pb-3 border-b border-gray-50"><strong className="text-[#1C3220]">Flowers:</strong> White, star-shaped, edible</div>
                <div className="pb-3 border-b border-gray-50"><strong className="text-[#1C3220]">Warning:</strong> Don&apos;t confuse with lily of the valley (toxic)</div>
                <div><strong className="text-[#1C3220]">Picking:</strong> Personal use only, take leaves not bulbs</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Related Guides</h3>
              <div className="space-y-2">
                {[
                  { label: "Formby Pinewoods Guide", href: "/formby-pinewoods" },
                  { label: "Red Squirrels at Formby", href: "/red-squirrels-formby" },
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium transition py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <ClareBio />
      </div>
    </div>
  );
}
