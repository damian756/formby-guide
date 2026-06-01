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
            headline: "Sunset at Formby Point: Why the Evening Visit Is Better Than the Afternoon",
            description: "The sunset from Formby Point over the Irish Sea is genuinely spectacular. When it peaks, where to stand on the dunes, tide timing, and why the evening visit beats the afternoon.",
            url: "https://www.formbyguide.co.uk/blog/sunset-formby-point",
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
            <span className="text-[#1C3220] font-medium">Sunset at Formby Point</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-sunset-point.jpg"
          alt="Dramatic orange and pink sunset over wet sand and marram grass dunes at Formby Point"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-900/40 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Seasonal
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Sunset at Formby Point: Why the Evening Visit Is Better Than the Afternoon
            </h1>
            <p className="text-lg text-white/80">1 June 2026 · 4 min read · Written by Clare</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">

            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              I have lived near Formby my whole life and the sunset from the dunes at Formby Point is still one of the things that properly stops me. Not every night. But when the conditions are right and you get there at the right moment, it is genuinely brilliant.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Why the Evening Works Better</h2>
            <p>
              Most visitors come to Formby in the middle of the day. The car park fills from 10am. By noon the beach is busy. By 3pm people are heading back.
            </p>
            <p>
              Come at 7pm in June and the car park is nearly empty. The light is doing something the midday sun never does. The tide is at whatever it is at, and you have the whole stretch of wet sand to yourself. Add a clear sky and you get a sunset over the Irish Sea that reflects back across the flat beach for what feels like miles.
            </p>
            <p>
              In June, sunset is around 9.30pm. The golden hour starts around 8.15. You do not need to be there for sunset exactly. The hour before it is often the most beautiful part.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Where to Stand</h2>
            <p>
              Walk through the pinewoods from the National Trust car park (L37 1YH) and head for the dune crest rather than going straight down to the waterline. The view from the top of the dunes looking west across the beach is where you want to be.
            </p>
            <p>
              The dune crest to the south of the main beach access path gives you a wider view with the sand stretching away in both directions. This is the best position for photography and for just watching. The dunes shelter you from any easterly wind and the drop down to the beach means you have unobstructed horizon.
            </p>
            <p>
              Do not go right down to the waterline if you are there for the sunset. The reflections are in the wet sand mid-beach, not at the water's edge.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Tide Timing</h2>
            <p>
              The sunset looks different depending on the tide. At low tide, you get the full expanse of wet sand and the reflection of the sky is extraordinary. At high tide, the water comes up close to the dunes and the view is more compressed.
            </p>
            <p>
              Either can be beautiful. But if you want the classic flat-sand-orange-sky image, aim for low tide in the evening. Check the Formby tide times the day before.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Practical Notes</h2>
            <p>
              The National Trust car park closes at a set time in the evening. Check the current closing time on the NT website before you go. In summer it tends to be 9pm or 9.30pm. If you want to stay for the full sunset you need to time your arrival and departure accordingly or the gate will be locked.
            </p>
            <p>
              Bring a layer. Even on warm days the dune crest gets a breeze in the evening and it cools quickly once the sun drops below the horizon. Sandflies can be active around dusk near the vegetation. Move slightly away from the dune base if they are a problem.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-5 my-8">
              <p className="font-semibold text-orange-900 mb-2">June Sunset Times</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Sunset: around 9.20-9.35pm through June</li>
                <li>Golden hour starts: around 8.15-8.30pm</li>
                <li>Best arrival: 7.30-8pm for the full evening light</li>
                <li>Car park postcode: L37 1YH</li>
                <li>Check NT car park closing time before you go</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Dogs</h2>
            <p>
              Dogs are welcome on the beach. Keep them on leads through the pinewoods where red squirrels are active and near the little tern nesting area (fenced and signed on the beach). Once you are clear of those areas, off lead on the open beach is fine.
            </p>
            <p>
              An evening walk from the car park through the pinewoods to the dune crest and back is one of the better dog walks in this area at this time of year. Quieter than the daytime, cooler, and you get the sunset if the timing works.
            </p>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Link
                href="/formby-beach"
                className="inline-flex items-center gap-2 bg-[#1C4A5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2E7A9A] transition text-sm"
              >
                Full Formby Beach Guide
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-bold text-[#1C3220] mb-3">Quick Reference</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="font-semibold text-gray-500">Postcode</dt><dd>L37 1YH</dd></div>
                <div><dt className="font-semibold text-gray-500">Best time</dt><dd>7.30-8pm in June</dd></div>
                <div><dt className="font-semibold text-gray-500">Sunset (June)</dt><dd>9.20-9.35pm</dd></div>
                <div><dt className="font-semibold text-gray-500">Dogs</dt><dd>Welcome, leads in pinewoods</dd></div>
              </dl>
            </div>
            <ClareBio />
          </aside>
        </div>
      </div>
    </div>
  );
}
