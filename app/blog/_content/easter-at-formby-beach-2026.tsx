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
            headline: "Easter at Formby Beach 2026 — What to Expect and How to Do It Right",
            description: "Everything you need to know about visiting Formby Beach at Easter 2026. When to arrive, where to park, red squirrels, and where to eat after.",
            url: "https://www.formbyguide.co.uk/blog/easter-at-formby-beach-2026",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-04-03",
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
            <span className="text-[#1C3220] font-medium">Easter at Formby Beach</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-easter-formby.jpg"
          alt="Families arriving at Formby Beach on a sunny Easter weekend morning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Seasonal</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Easter at Formby Beach 2026 — What to Expect and How to Do It Right
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 3, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>Good Friday. Four days. The beach is open, the pinewoods are green, and every family in a thirty-mile radius has had the same idea. Here&apos;s how to do Easter at Formby without spending half of it stuck in traffic on Victoria Road.</p>

          <h2>The Car Park Reality</h2>
          <p>Let&apos;s start here because this is the thing that ruins Easter at Formby for people who don&apos;t plan for it. The National Trust car park at Freshfield Road fills early. On a sunny Easter Saturday I&apos;d say it&apos;s full by 9:30am. On Easter Sunday, possibly earlier. There&apos;s nothing to be done about this except either arrive early or accept you&apos;ll be parking on a side street and walking in.</p>
          <p>Parking is £6 through the National Trust app. Download it before you leave the house. The signal in the car park is terrible and you will not get the app working in the queue. The app also lets you extend your stay remotely, which is worth knowing if you&apos;re planning a longer afternoon.</p>
          <p>Side streets around Freshfield station are your backup. Fifteen-minute walk to the beach from there. It&apos;s not bad if you&apos;re prepared for it. Just don&apos;t block anyone&apos;s drive. The residents are reasonably patient on bank holidays but there&apos;s a limit.</p>

          <h2>Timing the Red Squirrel Trail</h2>
          <p>Easter is a brilliant time for red squirrels. The trees are starting to come into leaf, the squirrels are active after winter, and the tourist crowds haven&apos;t hit the levels they will in August. The key is still to go early. Red squirrel sightings happen between dawn and about 10am, then again in the late afternoon. Mid-morning and afternoon are the worst times: too many people, squirrels sensibly hiding.</p>
          <p>If you&apos;re visiting for the squirrels specifically: arrive for 8am if you can, go straight to the red squirrel trail off the main path, and be quiet. Binoculars help. My thirteen-year-old complains about early starts and then immediately forgets she was complaining when a squirrel appears three feet away. Every time.</p>

          <h2>The Beach Itself</h2>
          <p>Formby Beach is wide, flat, and backed by tall dunes. On Easter weekend there will be a lot of people on it. That&apos;s fine. It&apos;s a big beach and it absorbs crowds well. Walk north from the main access path and within fifteen minutes you&apos;ll have noticeably more space.</p>
          <p>The water temperature in early April is around 9-10 degrees. I mention this because every year someone is surprised by how cold the sea is. It looks inviting on a sunny day. It is not inviting when you get in it. The paddling zone near the access path is fine for children to run in and out of, but nobody is going for a swim in April without a wetsuit.</p>
          <p>Tide times matter. Check before you go. Met Office has Formby tidal predictions. Low tide gives you the widest beach and the best conditions for kite flying, games, and generally being on the sand. High tide can push the beach down to a narrow strip near the dunes.</p>

          <h2>Eating After</h2>
          <p>The National Trust cafe at Formby does a decent coffee and reasonable cake. It is not cheap and it will have a queue on Easter Saturday. Worth it if you&apos;re already there, but don&apos;t build your day around it.</p>
          <p>Formby village is a ten-minute drive or twenty-minute walk. Left Bank Brasserie on Freshfield Road is the proper sit-down option. Busy at Easter but good. Book if you can. The cafes on Chapel Lane are good for a lighter lunch. If you want something quick and the kids need feeding now, the village has a few options that won&apos;t involve a long wait.</p>
        </div>

        <div className="mt-8 bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1C3220] mb-1">Useful links for Easter at Formby</p>
          <ul className="text-sm text-[#2E6B3E] space-y-1">
            <li><Link href="/blog/red-squirrels-formby-spotting-guide" className="hover:underline">How to actually see red squirrels in Formby →</Link></li>
            <li><Link href="/blog/formby-beach-weather-guide" className="hover:underline">Formby Beach weather guide — when to visit →</Link></li>
            <li><Link href="/blog/best-cafes-formby-village" className="hover:underline">Best cafes in Formby village →</Link></li>
          </ul>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
