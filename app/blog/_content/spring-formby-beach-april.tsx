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
            headline: "Formby Beach in Spring — Why April Is the Best Month to Visit",
            description: "April at Formby is brilliant. The beach is back, the dunes are greening up, the red squirrels are out and about, and it's not yet the summer crowds. Here's what makes spring the best time to visit.",
            url: "https://www.formbyguide.co.uk/blog/spring-formby-beach-april",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-17",
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
            <span className="text-[#1C3220] font-medium">Spring at Formby Beach</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-card-spring-formby.webp"
          alt="Formby Beach in April — spring sunshine, green dunes and wide empty sands"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Seasonal Guide · Spring
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Formby Beach in April<br />
              <span className="text-[#C9A96E]">Why Spring Is the Best Time to Visit</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              No crowds, green dunes, active squirrels, and the beach car park finally open again. April is genuinely my favourite month at Formby.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 17, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>6 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1C4A5A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Car park opens", value: "April" },
              { label: "Squirrel activity", value: "High" },
              { label: "Crowd level", value: "Low–Medium" },
              { label: "Postcode", value: "L37 1YH" },
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
            I&apos;ve said it before and I&apos;ll say it again: summer at Formby is brilliant, but April is the month I actually look forward to. The beach car park reopens, the dunes are greening up properly, the squirrels are out and active, and you&apos;re not fighting for a space at the National Trust entrance with half of Liverpool. Here&apos;s what April at Formby looks like in practice.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The beach is back</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The main National Trust car park at Formby Beach (L37 1YH) reopens in April after the winter closure. That sounds like a small detail but it changes the experience significantly — you can park properly, walk through the pinewoods to the beach, and do the full Formby day out without having to figure out alternative parking on Shore Road.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            April beach conditions: cool, often breezy, bright on a good day. The sand is wide and flat at low tide. You won&apos;t be paddling in April unless you&apos;re committed, but the beach is completely usable for walking, kite flying, or letting kids exhaust themselves in the dunes. Bring layers. The wind off the Irish Sea has a genuine edge before May.
          </p>

          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] rounded-r-lg px-6 py-5 my-8">
            <p className="text-sm font-bold text-[#2E6B3E] uppercase tracking-wide mb-2">Practical</p>
            <p className="text-[#1C3220] leading-relaxed">
              <strong>National Trust car park:</strong> L37 1YH · Book in advance via the NT app at peak Easter weekend and Bank Holidays — it fills up · April 2026 daily charges apply (NT members free).
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Red squirrels in spring</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            April is a genuinely good month for red squirrel sightings at Formby. The juveniles from winter breeding are starting to emerge and explore. The squirrels are active and feeding, which means more movement and more chances to spot them in the pinewoods between the car park and the beach.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The squirrel trail runs through the pinewoods on the NT estate. Walk slowly, make less noise than your children are making, and look up into the lower canopy rather than on the ground. Early morning is better than midday. If you arrive at the car park before 9am on a weekday in April, your chances of a decent sighting are genuinely good.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Natterjack Toads — the April bonus</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            Late April is when Natterjack Toads start calling at Ainsdale NNR, which is just north of Formby. The males produce a rasping, churring call on warm evenings — genuinely one of the stranger sounds you&apos;ll hear on the Sefton Coast. The calling starts when evening temperatures exceed about 10°C, usually late April into May.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            You don&apos;t need access to the NNR itself to hear them — the calls carry. A still evening in late April around the dune slack area is worth trying for. It&apos;s one of those wildlife experiences that surprises people who weren&apos;t expecting it.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Crowds — or the lack of them</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            Before Easter weekend, April at Formby is genuinely quiet. Weekday April visits are often just dog walkers and birders. Even at weekends it&apos;s manageable compared to June, July and August when the car park queues start before 10am and the beach is dense with families.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The exception is Easter weekend — that brings a proper crowd. If you&apos;re visiting over the Easter bank holiday, book your parking in advance and go early. An 8am start on Easter Monday is a completely different experience from arriving at noon.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">What to bring</h2>
          <ul className="space-y-2 text-[#4A6B5A] my-4">
            {[
              "Waterproof layer — April weather on the Sefton Coast is unpredictable. Blue sky and sunshine can become horizontal drizzle in 20 minutes.",
              "Warm mid-layer — the wind off the Irish Sea is cold before May even on sunny days.",
              "Binoculars if you want to do the squirrels properly — they give you distance that doesn't frighten the animals.",
              "The NT app downloaded and parking pre-booked over bank holidays.",
              "Dogs are welcome on the beach and in the pinewoods — on leads near the squirrel reserve.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-[#1C3220] text-white rounded-xl p-6 my-10">
            <p className="font-bold text-[#C9A96E] text-sm uppercase tracking-wide mb-2">Clare&apos;s verdict</p>
            <p className="leading-relaxed text-white/85">
              April is Formby at close to its best. The beach is open, the dunes are alive, the squirrels are out, and you don&apos;t have to fight for a parking space or a spot on the sand. If you&apos;ve been meaning to visit and you&apos;re deciding when — this is when.
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/formby-beach"
            className="flex-1 bg-[#2E6B3E] text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#1C4A2A] transition"
          >
            Formby Beach Full Guide →
          </Link>
          <Link
            href="/red-squirrels-formby"
            className="flex-1 bg-white border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#F0F7F2] transition"
          >
            Red Squirrel Spotting Guide →
          </Link>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
