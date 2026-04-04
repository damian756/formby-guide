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
            headline: "Wild Garlic in Formby Pinewoods: Where to Find It and What to Do With It",
            description: "April is wild garlic season in the Formby pinewoods. Where to walk to find it, when it peaks, and what to do with it if you pick some.",
            url: "https://www.formbyguide.co.uk/blog/wild-garlic-formby-pinewoods",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-04-04",
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
            <span className="text-[#1C3220] font-medium">Wild Garlic in Formby</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-wild-garlic-pinewoods.jpg"
          alt="Wild garlic covering the floor of Formby pinewoods in spring with white flowers"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Wildlife</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Wild Garlic in Formby Pinewoods: Where to Find It and What to Do With It
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 4, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>April is the month the pinewoods smell different. You notice it before you see it: a clean, sharp, garlicky scent rising from the ground as you walk under the Scots pines. Then you look down and the floor has turned white. That&apos;s the wild garlic. Allium ursinum, also called ramsons, and once you know it&apos;s there, you wonder how you ever walked past it.</p>

          <h2>Where to Find It</h2>
          <p>The wild garlic grows on the woodland floor beneath the main pine plantation, particularly in areas where the soil is damper and there&apos;s a bit more shade. The best patches in Formby tend to be along the paths that cut between the pines heading toward the beach, away from the main tourist routes.</p>
          <p>Walk in from the National Trust car park on Freshfield Road and take the path heading northwest through the pines rather than the main red squirrel trail. Within five to ten minutes you&apos;ll be into the denser woodland sections where the wild garlic carpets the floor in April. The smell tells you before your eyes do.</p>
          <p>It&apos;s also worth checking the lower paths near the dune edge where the pinewoods give way to dune scrub. Damper spots at the dune base can have good patches.</p>

          <h2>When It Peaks</h2>
          <p>The flowering season in Formby runs roughly from late March to mid-May. Peak flowering is typically the first two weeks of April in a normal year. Right now, early April, is exactly the right time. The flowers will start to fade and the leaves will toughen up by the end of April, becoming less useful for eating.</p>
          <p>The leaves appear before the flowers and can be picked from late February. The flowers themselves are edible too and arguably nicer: they have a slightly milder flavour than the leaves and look good scattered over food.</p>

          <h2>Picking: Is It Allowed?</h2>
          <p>Small amounts for personal use are generally fine in National Trust areas under the traditional right to forage. The rules around foraging on NT land are that you should not uproot plants, should only take small quantities, and should not pick protected species. Wild garlic is not a protected species.</p>
          <p>Do not strip any single patch. Take a few handfuls of leaves from across a wide area. Leave plenty. The smell in the woods is partly what makes the April walk worth doing, and that requires the plants to be there for people after you.</p>
          <p>Also: make absolutely sure you have wild garlic and not lily of the valley or lords-and-ladies, both of which grow in similar conditions and are toxic. Wild garlic smells strongly of garlic when a leaf is crushed. If it doesn&apos;t smell of garlic, don&apos;t eat it.</p>

          <h2>What to Do With It</h2>
          <p>Wild garlic pesto is the obvious one and it genuinely is excellent. Blitz the leaves with pine nuts, parmesan, olive oil, and a little lemon juice. Works exactly as basil pesto would, but with a garlic flavour that&apos;s softer and more complex than you&apos;d get from garlic cloves. Keeps in the fridge for a week.</p>
          <p>Wild garlic butter is faster and incredibly useful: soften butter, mix in finely chopped leaves, roll in clingfilm, keep in the fridge. Melt over a steak, spread on toast, use to roast chicken. It freezes well too.</p>
          <p>The flowers are nice scattered over salads, on soup, or as a garnish. They look pretty and taste mild.</p>
          <p>If you&apos;re walking with kids and they&apos;re sceptical, tell them to crush a leaf and smell it. That usually does the job. Mine were into it immediately. One of them now identifies wild garlic every April with the kind of authority she didn&apos;t have at the start of last spring. Accidental natural history education is the best kind.</p>

          <h2>The Walk Itself</h2>
          <p>A wild garlic walk through the Formby pinewoods in April takes about 45 minutes at a relaxed pace. Take the path from the NT car park into the pines, go slowly through the denser sections, loop back out via the dune edge, and finish at the NT cafe for coffee. It&apos;s the kind of walk that justifies living near here.</p>
        </div>

        <div className="mt-8 bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1C3220] mb-1">More Formby pinewoods reading</p>
          <ul className="text-sm text-[#2E6B3E] space-y-1">
            <li><Link href="/blog/formby-pinewoods-walking-guide" className="hover:underline">Walking in Formby Pinewoods: trail guide →</Link></li>
            <li><Link href="/blog/red-squirrels-formby-spotting-guide" className="hover:underline">How to actually see red squirrels at Formby →</Link></li>
            <li><Link href="/blog/natterjack-toads-formby" className="hover:underline">Natterjack Toads at Formby: Britain&apos;s rarest amphibian →</Link></li>
          </ul>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
