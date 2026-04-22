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
            headline: "Blackpool or Formby for a Family Day Out? Clare's Honest Answer",
            description: "I've done both with four kids. Here's the straight comparison: what Blackpool does well, what Formby does well, and how to decide which one is right for your family.",
            url: "https://www.formbyguide.co.uk/blog/blackpool-or-formby-family-day-out",
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
            <span className="text-[#1C3220] font-medium">Blackpool or Formby?</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-blackpool-formby-family.jpg"
          alt="Pine needles and sand on the Formby coastal path — the edge of the pinewoods and the beach"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Family</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Blackpool or Formby for a Family Day Out? Clare&apos;s Honest Answer
          </h1>
          <div className="flex items-center gap-3 text-white/70 text-sm">
            <span>Clare</span>
            <span>·</span>
            <span>April 2, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-12">
        <div className="prose prose-lg max-w-none text-[#1C3220]">

          <p>People ask me this. Friends from further afield planning a weekend, or people who&apos;ve only done one of the two and want to know if they&apos;re missing something. I&apos;ve lived near Formby for years and I&apos;ve taken four kids to both places multiple times. So here&apos;s the straight version.</p>

          <p>They&apos;re not really comparable. They&apos;re both on the Lancashire and Merseyside coast, both accessible from Liverpool and Manchester, both have a beach. But the experience is completely different and which one is right depends entirely on what you want from the day.</p>

          <h2>What Blackpool Does Well</h2>

          <p>Blackpool is built for family entertainment at scale. Pleasure Beach, the piers, the arcades, the shows, the trams, the Illuminations in autumn — it&apos;s all designed to keep people occupied for a full day and a full evening. If your kids are teenagers who want rides and something loud to happen, Blackpool is the right call. There&apos;s no equivalent in Formby.</p>

          <p>Pleasure Beach in particular is genuinely excellent if rides are the point. I took mine when they were old enough to go on the big ones and it was brilliant — chaotic and expensive and exactly what they wanted. The Illuminations (September to November) are worth doing once: the drive or walk along the promenade with everything lit up is impressive in a way that&apos;s hard to replicate.</p>

          <p>Blackpool also has a lot of cheap, cheerful food options that kids are actually happy with. It&apos;s not a food destination in the traditional sense, but if you&apos;re feeding four children after a day on the rides, you&apos;re not going to struggle to find something everyone will eat.</p>

          <h2>What Formby Does Well</h2>

          <p>Formby is the opposite of Blackpool in almost every way and that&apos;s the point. The National Trust pinewoods are genuinely beautiful — tall Scots pines, soft sandy paths, and red squirrels if you time it right. The beach behind the dunes is wide, flat and backed by those dunes in a way that gives it a completely different feel from a typical promenade beach. It&apos;s proper outdoor space.</p>

          <p>For younger children especially — the ones who are too small for rides but happy exploring — Formby is brilliant. They can roam the pinewoods, run on the beach, look for creatures in the tideline, and be generally outdoors all day without it costing a fortune at the entrance gate. The car park is £6. That&apos;s the main expense.</p>

          <p>The red squirrels are a genuine draw. We&apos;ve been countless times and it doesn&apos;t get old. Go early (before 10am), go quietly, and the chances of seeing one close-up are actually pretty good. My kids were more excited about a squirrel appearing three feet away than they were about a lot of things that cost significantly more.</p>

          <h2>The Honest Comparison for Families</h2>

          <div className="bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5 not-prose mb-6">
            <p className="text-sm font-bold text-[#1C3220] mb-3">At a glance</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-[#2E6B3E] mb-2">Formby is better if you want:</p>
                <ul className="space-y-1 text-[#1C3220]">
                  <li>→ Proper outdoors: beach, pinewoods, dunes</li>
                  <li>→ Younger children happy exploring</li>
                  <li>→ Red squirrels and wildlife</li>
                  <li>→ A calm day without crowds (outside summer)</li>
                  <li>→ Cheaper — main cost is the car park</li>
                  <li>→ Dogs welcome</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#1C4A5A] mb-2">Blackpool is better if you want:</p>
                <ul className="space-y-1 text-[#1C3220]">
                  <li>→ Rides — Pleasure Beach is excellent</li>
                  <li>→ Older kids who want entertainment</li>
                  <li>→ Illuminations (Sept–Nov)</li>
                  <li>→ Full day of structured activity</li>
                  <li>→ More to do in wet weather</li>
                </ul>
              </div>
            </div>
          </div>

          <p>The thing that catches people out with Blackpool is the cost. Once you&apos;re through the gates at Pleasure Beach and buying food and drinks throughout the day, it adds up quickly with multiple children. Formby is significantly cheaper for a day out, and the kids find their own entertainment rather than needing to pay for each individual thing.</p>

          <p>With younger children (mine were best here at ages five to eleven), Formby wins easily. With teenagers who want stimulation and wouldn&apos;t find a pine forest sufficient entertainment, Blackpool is the better choice.</p>

          <h2>Can You Do Both?</h2>

          <p>Blackpool to Formby is about 45 minutes by car. In theory you could do a morning at the beach and afternoon at Pleasure Beach, or vice versa, but honestly that&apos;s a very full day and I&apos;d probably just pick one. Each takes a full day to do properly.</p>

          <p>What does make sense is using the two as separate trips in the same area if you&apos;re staying somewhere between them for a few days. Southport is roughly halfway — <Link href="/the-open-2026" className="text-[#2E6B3E] hover:underline">and has The Open Championship in July 2026</Link>, which makes the whole stretch of coast interesting that summer. But that&apos;s a different trip to planning a single day out.</p>

          <h2>Practical Notes for Formby</h2>
          <ul>
            <li>National Trust car park on Freshfield Road, L37 1YH. Download the NT app before you leave — the signal in the car park is awful. £6 to park.</li>
            <li>Car park fills before 10am on summer Saturdays and bank holidays. Go early or plan to walk from a side street near Freshfield station.</li>
            <li>Tide times: check before you go. Met Office has Formby predictions. Wide beach at low tide, narrow strip at high tide.</li>
            <li>Red squirrel trail: best before 10am, quiet, move slowly. Binoculars useful.</li>
            <li>Dogs welcome at Formby Beach, with seasonal restrictions May to September on certain sections.</li>
            <li>National Trust cafe on site. Formby village (ten minutes away) has better lunch options if you&apos;re not in a rush.</li>
          </ul>

        </div>

        <div className="mt-8 bg-[#F0F5EF] border border-[#2E6B3E]/20 rounded-2xl p-5">
          <p className="text-sm font-semibold text-[#1C3220] mb-1">Plan your Formby visit</p>
          <ul className="text-sm text-[#2E6B3E] space-y-1">
            <li><Link href="/blog/red-squirrels-formby-spotting-guide" className="hover:underline">How to actually see the red squirrels →</Link></li>
            <li><Link href="/formby-beach" className="hover:underline">Formby Beach: full guide including parking and tide times →</Link></li>
            <li><Link href="/blog/things-to-do-formby-half-term" className="hover:underline">Things to do in Formby with kids →</Link></li>
          </ul>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
