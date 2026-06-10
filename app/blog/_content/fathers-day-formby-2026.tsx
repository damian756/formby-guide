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
            headline: "Father's Day in Formby 2026: The Honest Guide to What's Worth Doing",
            description:
              "Father's Day in Formby on June 15. The best restaurants to book, things to do with the family, and Clare's honest take on what makes a good day out in Formby with a dad in tow.",
            url: "https://www.formbyguide.co.uk/blog/fathers-day-formby-2026",
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
            <span className="text-[#1C3220] font-medium">Father&apos;s Day in Formby</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[420px] flex items-end">
        <Image
          src="/blog-fathers-day-formby.webp"
          alt="Restaurant table set for dinner with wine and food, warm evening light"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-4 max-w-5xl pb-10 pt-16">
          <span className="inline-block bg-[#2E6B3E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Family</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Father&apos;s Day in Formby 2026: The Honest Guide to What&apos;s Worth Doing
          </h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl">
            Father&apos;s Day is Sunday 15 June. If your dad is anything like mine, he doesn&apos;t want a fuss but he&apos;d appreciate a good lunch and a decent afternoon. Here&apos;s what Formby can offer.
          </p>
          <p className="text-white/55 text-sm mt-3">Clare &middot; 10 June 2026 &middot; 5 min read</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-3xl py-10">
        <div className="prose prose-lg prose-green max-w-none">

          <p>Father&apos;s Day is this Sunday and if you are still working out what to do in Formby, here is the honest rundown. I have four kids and a dad I need to keep happy, so I have thought about this more than I probably should have.</p>

          <h2>Restaurants: Book Today</h2>

          <p>Left Bank Brasserie on Chapel Lane is the right answer if you want a genuinely good meal. It is the best restaurant in Formby. Book it today because it will be full. Father&apos;s Day Sunday is one of their busiest days of the year.</p>

          <p>The Sparrowhawk is a good pub option: proper food, a decent beer garden if the weather is right, and it handles families without being chaotic. Call ahead even if they say they take walk-ins. On Father&apos;s Day, you will not walk into anywhere decent without a reservation.</p>

          <p>For something more casual, the village has a few cafe options that work well for a relaxed brunch rather than a formal lunch. If your dad is not a sit-down-dinner person, a morning at the beach followed by a decent coffee and cake is actually a more enjoyable day than an overpriced Sunday roast.</p>

          <h2>The Beach and Pinewoods</h2>

          <p>Formby Beach on a sunny June day is genuinely excellent. The car park at the National Trust site (L37 1YH) opens at 8am and fills up by late morning. If you are going, go early or accept you will be parking on the road and walking further than planned.</p>

          <p>The red squirrel trail through the pinewoods is worth doing if your dad has never been. It takes about an hour at a relaxed pace and the squirrels are still active in June. Young squirrels born earlier in the year are out and about. It is not guaranteed, but in June you have a reasonable chance.</p>

          <p>The beach itself is one of the best things about living near Formby. Long, wide, and backed by dunes. On a clear June day the light over the Irish Sea is brilliant. If the tide is right, walk south to Ainsdale. It is a proper bit of coast.</p>

          <h2>Formby Golf Club</h2>

          <p>If your dad plays golf, Formby Golf Club is a few minutes from the village. Visitor rounds are available and the course is in excellent condition in June. It is a proper club with a proper clubhouse lunch. Call ahead to arrange a visitor tee time and combine it with lunch in the clubhouse. That is a genuinely good Father&apos;s Day for any golfer.</p>

          <h2>Practical Notes</h2>

          <ul>
            <li>Book restaurants today, not Saturday morning</li>
            <li>NT car park L37 1YH: book via the National Trust app, fills quickly on sunny Sundays</li>
            <li>The village has free parking on Chapel Lane and surrounding streets if you are just coming for lunch</li>
            <li>Beach is best in the morning: go early, the afternoon crowds build up</li>
          </ul>

        </div>

        <div className="mt-8 p-5 bg-[#F0F7F1] rounded-2xl border border-[#D0E8D4]">
          <p className="text-sm text-[#1C3220] font-semibold mb-2">More from Formby Guide</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/things-to-do" className="inline-flex items-center gap-1.5 text-[#2E6B3E] font-semibold text-sm hover:underline">
              Things to Do in Formby <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/formby-beach" className="inline-flex items-center gap-1.5 text-[#2E6B3E] font-semibold text-sm hover:underline">
              Formby Beach <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/red-squirrels-formby" className="inline-flex items-center gap-1.5 text-[#2E6B3E] font-semibold text-sm hover:underline">
              Red Squirrels <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <ClareBio />
      </div>
    </div>
  );
}
