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
            headline: "Formby Summer Holidays 2026: Six Weeks with Kids, Honestly",
            description: "How to use Formby through the school summer holidays. Beach timing, red squirrels, pinewoods walks, rainy day options, and what to avoid on August bank holiday weekend.",
            url: "https://www.formbyguide.co.uk/blog/formby-summer-holidays-2026",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-06-01",
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
            <span className="text-[#1C3220] font-medium">Formby Summer Holidays</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-summer-pinewoods.jpg"
          alt="Golden summer light through tall pine trees on a Formby pinewoods path"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#1C3220]/40 border border-[#2E6B3E]/30 text-[#7BBD9A] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Family
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Formby Summer Holidays 2026: Six Weeks with Kids, Honestly
            </h1>
            <p className="text-lg text-white/80">1 June 2026 · 6 min read · Written by Clare</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">

            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              Schools break up around 22 July. Six weeks is a long time. This is how I use Formby through the summer holidays with four kids, from someone who has done it enough times to know what works and what just sounds like a good idea on paper.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Beach: Timing Is Everything</h2>
            <p>
              Formby Beach in August is brilliant. It is also one of the busiest beaches in the North West on hot weekends. The National Trust car park fills by 10am on warm Saturdays in July and August. I am not exaggerating. On the hottest days it fills by 9.30.
            </p>
            <p>
              Go on weekday mornings. Arrive by 9am if you want a space and a quiet start. By 11am, even midweek in August, it gets busy. The parking is paid via the NT app (L37 1YH). Members park free. Book your space before you leave if you can.
            </p>
            <p>
              Check the tide before you go. Low tide in the morning gives you the full flat beach. High tide on a busy afternoon squeezes everyone onto a narrow strip. The BBC weather page has the Formby tide times.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Red Squirrels: Still Good in Summer</h2>
            <p>
              The red squirrel reserve is worth a visit in summer, particularly with younger kids who have not been before. Go early. Before 9am is the best window. The squirrels are less active in the heat of the day but can be surprisingly visible on cool mornings.
            </p>
            <p>
              Young squirrels from the summer litter are often around from July onwards. They are less wary than adults and easier to spot close to the feeding areas. Dogs on leads throughout the reserve.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Pinewoods Walk</h2>
            <p>
              The walk from the car park through the pinewoods to the beach is about 15 minutes each way. In summer the pinewoods are properly beautiful. Shaded, cool, the light coming through the canopy. Kids who would normally resist a walk tend to cope with this one because there is something to look at the whole way.
            </p>
            <p>
              The return walk late afternoon, tired and sandy, is where the moaning starts. Warn them about the walk back before you set off. Or bribe them with ice cream from the NT café at the car park. Both strategies work.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Rainy Days</h2>
            <p>
              It will rain. At some point in six weeks it always does. Formby village has a handful of options. Left Bank Brasserie if you want a proper meal and the kids are old enough to sit still. The Sparrowhawk for a pub lunch with a garden you can actually use when it is not raining.
            </p>
            <p>
              The village has a cinema. Small, independent, good for a wet afternoon. Check what is on at The Grand Cinema on Chapel Lane.
            </p>
            <p>
              If you are driving to Southport for a rainy day, Splash World on the promenade and The Atkinson on Lord Street are both excellent and genuinely different options. About 15 minutes from Formby village.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">August Bank Holiday Weekend</h2>
            <p>
              The last weekend of August. The beach car park will be full from 9am. Marine Drive in Southport will be similarly rammed. If you want to go to the beach that weekend, either go very early or accept it will be busy and plan around it.
            </p>
            <p>
              The Southport Air Show is usually around the bank holiday weekend. Worth knowing as context: Southport will be particularly busy, the roads into the town will be congested, and the beach around Marine Drive will be packed. Formby beach is a better option if you want to avoid that.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">What Works for Different Ages</h2>
            <ul className="space-y-2">
              <li><strong>Under 5s:</strong> The beach with buckets and spades, the pinewoods walk (short version), ice cream from the NT café. The squirrels if they stay quiet for five minutes.</li>
              <li><strong>5-10:</strong> Full beach day, squirrel spotting early morning, crabbing from the beach (bring a line and bait), cycling the coastal path.</li>
              <li><strong>Teens:</strong> The beach works if they have friends with them. Otherwise Southport has more: Splash World, the arcades, Southport Market for food. Formby village in the evening.</li>
            </ul>

            <div className="bg-[#EBF5EE] border-l-4 border-[#2E6B3E] rounded-r-lg p-5 my-8">
              <p className="font-semibold text-[#1C3220] mb-2">Summer Holiday Quick Guide</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Car park postcode: L37 1YH</li>
                <li>Arrive by 9am on warm weekend days</li>
                <li>Check tides: low tide mornings are best</li>
                <li>Squirrel spotting: before 9am, keep dogs on leads</li>
                <li>Bank holiday weekend: expect it to be busy everywhere</li>
                <li>NT café at car park for coffee and ice cream</li>
              </ul>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link
                href="/formby-beach"
                className="inline-flex items-center gap-2 bg-[#2E6B3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1C3220] transition text-sm"
              >
                Full Formby Beach Guide
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-bold text-[#1C3220] mb-3">Summer Essentials</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="font-semibold text-gray-500">Car park</dt><dd>L37 1YH, NT app</dd></div>
                <div><dt className="font-semibold text-gray-500">Schools break up</dt><dd>Around 22 July</dd></div>
                <div><dt className="font-semibold text-gray-500">Bank holiday</dt><dd>Last weekend August</dd></div>
                <div><dt className="font-semibold text-gray-500">NT café</dt><dd>At car park</dd></div>
              </dl>
            </div>
            <ClareBio />
          </aside>
        </div>
      </div>
    </div>
  );
}
