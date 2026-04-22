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
            headline: "Formby as a Day Trip from Blackpool: How to Do It Properly",
            description: "Blackpool to Formby is 45 minutes by car or an hour by train. Beach, pinewoods, red squirrels, a decent lunch. Here's how to do it right and what most people miss.",
            url: "https://www.formbyguide.co.uk/blog/formby-day-trip-from-blackpool",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-04-02",
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
            <span className="text-[#1C3220] font-medium">Formby Day Trip from Blackpool</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-from-blackpool-train.jpg"
          alt="View through a rain-spotted train window looking out at flat coastal Lancashire landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#1C4A5A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Seasonal</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Formby as a Day Trip from Blackpool: How to Do It Properly
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 2, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-[#1C3220]">

          <p>If you&apos;re based in or near Blackpool and haven&apos;t been to Formby, it&apos;s worth knowing it&apos;s closer than most people think. About 45 minutes by car, or just under an hour on the train via Southport. You get a completely different kind of coastline from the Blackpool promenade — National Trust pinewoods, red squirrels, a wide flat beach backed by proper dunes, and a village with enough good lunch options that you won&apos;t have to eat chips in a car park.</p>

          <p>I live here so I&apos;m biased. But I&apos;ve had enough visitors from Blackpool over the years tell me they didn&apos;t know this existed to think it&apos;s worth writing up properly.</p>

          <h2>Getting There</h2>

          <p><strong>By car:</strong> Take the A584 south from Blackpool to Lytham, then the A565 south to Formby. The journey is about 45 minutes in normal traffic. Postcode for the National Trust car park: L37 1YH. That takes you to Freshfield Road, which is the main access point for the beach and pinewoods.</p>

          <p><strong>By train:</strong> Blackpool North to Southport (via Preston), then change at Southport for Freshfield station on the Merseyrail Northern Line. Freshfield is the stop for the NT car park and beach — it&apos;s a short walk from the station. Total journey time is around 50–60 minutes. Check Merseyrail for current timetables. The train is honestly a good option if you don&apos;t want to worry about parking on a busy day.</p>

          <div className="bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5 not-prose mb-6">
            <p className="text-sm font-bold text-[#1C3220] mb-2">Key practicalities</p>
            <ul className="text-sm text-[#1C3220] space-y-1">
              <li>→ NT car park: L37 1YH — book via the National Trust app (download before you go, the signal is bad in the car park)</li>
              <li>→ Parking: £6 via app. Fills before 10am on busy summer days.</li>
              <li>→ Train: Freshfield station (Merseyrail Northern Line) is a 5-minute walk from the NT entrance</li>
              <li>→ Blackpool to Formby by car: ~45 minutes via A584 and A565</li>
            </ul>
          </div>

          <h2>What to Do</h2>

          <p>The standard Formby day has three parts: the pinewoods, the red squirrel trail, and the beach. They all connect and you can walk between them without getting back in the car.</p>

          <p><strong>The pinewoods</strong> are managed by the National Trust and the paths are well-marked. You can be in genuinely tall, quiet woodland within a few minutes of leaving the car park. It&apos;s a different world from the promenade — soft sandy paths, pine cones underfoot, the smell of resin on a warm day. If you&apos;ve only ever done Blackpool-style seaside, this will be a bit of a surprise.</p>

          <p><strong>The red squirrels</strong> are the thing people come specifically for and they&apos;re worth coming for. Formby is one of the few strongholds for red squirrels in England. The best chances are before 10am on a quiet morning: go slowly and quietly along the red squirrel trail (signed from the car park), look up into the canopy and along the branches, and be patient. Once your eyes are in, you start seeing them. I&apos;ve had them run across the path two feet in front of me. My kids have had them sit and stare at them from a low branch. It&apos;s genuinely brilliant.</p>

          <p><strong>The beach</strong> is accessed via a boardwalk over the dunes from the pinewoods. It&apos;s a wide, flat, sandy beach with big dunes behind it. At low tide it stretches out a long way and the light on the sand in the afternoon is lovely. Not a promenade beach — more space, fewer facilities, better for walking and sitting than for organised activities. Dogs are welcome (seasonal restrictions on some sections May–September). The sea is cold. April is not swimming weather unless you have a wetsuit.</p>

          <h2>Where to Eat</h2>

          <p>The National Trust cafe is at the car park and does coffee, cake, and basic hot food. It&apos;s fine, usually has a queue at peak times, and is not cheap for what it is. Worth it if you don&apos;t want to move the car.</p>

          <p>For a proper lunch, Formby village is about a ten-minute drive or a twenty-minute walk from the beach. Left Bank Brasserie on Freshfield Road is the quality option — it&apos;s good, it&apos;s worth booking ahead at weekends. The cafes on Chapel Lane are better for something lighter. If you want quick and easy with kids, the village has a few options that will sort you out without fuss.</p>

          <h2>July 2026: Worth Knowing</h2>

          <p>The Open Championship is at Royal Birkdale in Southport 12–19 July 2026. Royal Birkdale is about 20 minutes from Formby. If you&apos;re in the area that week — whether you have tickets or not — combining a day at Formby with the Open atmosphere in Southport is a genuinely good trip. The town fills up during championship week in a way that&apos;s worth experiencing even without going to the course.</p>

          <p>Accommodation in the Southport and Formby area for Open week is largely gone, but Blackpool is a realistic base for the week if you haven&apos;t booked. Forty-five minutes from Birkdale, significantly more accommodation available.</p>

          <h2>How Long Do You Need?</h2>

          <p>You can do the pinewoods, red squirrel trail and beach in about three hours at a relaxed pace. Add lunch in the village and you&apos;ve got a full half-day to full day depending on how much you like to walk. It&apos;s not an all-day, every-hour-filled kind of place. It&apos;s more of a proper outdoors day where the time fills itself. I always think I&apos;ll do two or three hours and end up staying for five.</p>

        </div>

        <div className="mt-8 bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1C3220] mb-1">Plan your visit</p>
          <ul className="text-sm text-[#2E6B3E] space-y-1">
            <li><Link href="/formby-beach" className="hover:underline">Formby Beach: full guide, parking, postcode, tide times →</Link></li>
            <li><Link href="/red-squirrels-formby" className="hover:underline">Red squirrels at Formby: how to see them →</Link></li>
            <li><Link href="/blog/formby-pinewoods-walking-guide" className="hover:underline">Walking in Formby Pinewoods: trails and what to bring →</Link></li>
          </ul>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
