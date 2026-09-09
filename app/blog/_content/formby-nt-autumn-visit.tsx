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
            headline: "Formby National Trust in Autumn: What the Visit Is Like After the Crowds",
            description:
              "September and October are the best months to visit the National Trust at Formby. The squirrels are busier, the pinewoods look different, and the car park is manageable before 10am.",
            url: "https://www.formbyguide.co.uk/blog/formby-nt-autumn-visit",
            datePublished: "2026-09-09",
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
            image: "https://www.formbyguide.co.uk/blog-formby-nt-autumn.webp",
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800">Formby NT in Autumn</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="inline-block bg-[#1A5C3A] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Walks
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Formby National Trust in Autumn: What the Visit Is Like After the Crowds
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            September and October are the best months to visit Formby NT and most people do not know it. The squirrels are busier, the pinewoods look different, and the car park is actually manageable before 10am.
          </p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image
              src="/blog-formby-nt-autumn.webp"
              alt="Coastal pinewood path in early autumn at Formby, tall Scots pines with golden dappled light filtering through the canopy, sandy path with pine needles"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <p className="text-sm text-gray-400">By Clare, Formby Guide. September 9, 2026</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            If you have been to Formby National Trust in July or August, you know how it feels in peak season. The car park fills before 10am. The squirrel trail has a steady flow of people on it all morning. The beach approach path has families stretched out along it for the whole length. It is not bad. But it is not what the place is like most of the year.
          </p>
          <p>
            September changes things significantly. Schools are back. The volume of visitors drops. And the nature, which was always there, becomes more immediately accessible when you are not sharing the trail with two hundred other people.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Squirrels in September</h2>
          <p>
            September is when squirrel sighting odds at Formby start to genuinely improve. The reason is simple: the squirrels are entering a period of intensive activity ahead of winter. They are caching food, covering more ground, and spending more time in the visible mid-levels of the pines rather than high in the canopy.
          </p>
          <p>
            Combined with fewer people on the trail to disturb them, September produces better sighting conditions than most of August. The peak months are October through February, but September is the start of that run. If you have been to Formby in summer and not seen a squirrel, come back in September and give it forty-five minutes on the trail before 9am.
          </p>
          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] p-5 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 mb-1">Clare&apos;s tip:</p>
            <p className="text-gray-700">
              The section of the squirrel trail past the first bench and into the older, established pines is consistently better than the area closest to the car park. Go slowly. Stop for two minutes at any spot where you see movement. The squirrels are easier to spot in September when they are lower in the trees than in July.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Pinewoods in Early Autumn</h2>
          <p>
            The pinewoods at Formby do not change colour in the way a deciduous woodland does, but early September light through the Scots pines has a quality that July light does not. The sun is lower in the sky. The shadows are longer. The dappled light on the sandy path has a warmth that is different from the flatter brightness of midsummer.
          </p>
          <p>
            The undergrowth is starting to change too. The bilberry and heather that fills the gaps between the pines takes on different colours from late September. The first fungi begin to appear on the woodland floor from mid-September onwards. Nothing dramatic yet, but the russula species and early chanterelles are worth looking for if you know what to look for.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Beach in September</h2>
          <p>
            Formby beach in September is quieter than August but not empty. The wide flat sand at low tide is still one of the better beaches in the north of England. September mornings on the beach before the tide turns, when the sand is firm and the light comes in from the east, are genuinely good.
          </p>
          <p>
            The dunes are starting to change. The marram grass is past its summer green and beginning to take on the golden-brown tones of autumn. The prehistoric footprint trail at Formby Point is worth doing in September: lower visitor numbers mean you have a better chance of seeing the prints without managing around other people.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical: Parking and Timing</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              ["Car park", "Victoria Road, Formby, L37 1YH. Book via the National Trust app. In September, weekday availability is good. Weekends still worth booking but the pressure is noticeably lower than in July and August."],
              ["Best time", "Before 9am for squirrels. Morning visits in September have far better odds than afternoon ones. The pinewoods in early morning light are also at their best."],
              ["NT membership", "If you are a National Trust member, parking is included. Non-members pay via the NT app or at the machine. Around £7 for the day."],
              ["Dogs", "Dogs welcome on a lead in the nature reserve. Keep them on the lead in the pinewoods. The red squirrels are more active in September and a loose dog in the pinewoods is not helpful for anyone."],
              ["Cafe", "The seasonal cafe near the car park. Check before you go whether it is open. Opening days reduce from September onwards compared to the summer peak."],
            ].map(([item, detail]) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] font-bold flex-none">→</span>
                <span><span className="font-semibold text-gray-900">{item}:</span> {detail}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Autumn Is Genuinely Better</h2>
          <p>
            The honest answer is that Formby NT in September and October is the version of the place I prefer. The crowds of July and August turn a genuinely special place into something that requires more management to enjoy. September reduces that friction. You can walk the squirrel trail without constantly managing around other groups. You can stop for two minutes to watch a squirrel without blocking the path. You can sit at the end of the beach without being next to three families with windbreaks.
          </p>
          <p>
            The nature is also more rewarding. The squirrels are more active. The birds are more varied as autumn migration begins. The light is better for photography. If you have been thinking about trying Formby and wondering when to go, September and October are the honest answer.
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">More from Formby Guide:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/red-squirrels-formby"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#245730] transition-colors"
            >
              Full Red Squirrel Guide
            </Link>
            <Link
              href="/blog/formby-red-squirrels-september"
              className="inline-flex items-center gap-2 border border-[#2E6B3E] text-[#2E6B3E] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F0F7F2] transition-colors"
            >
              Red Squirrels in September
            </Link>
          </div>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
