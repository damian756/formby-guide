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
            headline: "Formby Beach Right Now: Late May Conditions, Parking and What to Expect",
            description: "Late May at Formby Beach: what conditions are like, when the car park fills, tide timing, dog rules and where to go for lunch after.",
            url: "https://www.formbyguide.co.uk/blog/formby-beach-late-may-2026",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-05-28",
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
            <span className="text-[#1C3220] font-medium">Formby Beach: Late May</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-late-may-beach.jpg"
          alt="Formby beach dunes and wet sand at low tide in late May morning light"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#1C4A5A]/40 border border-[#2E7A9A]/30 text-[#7BBDD4] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Seasonal
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Formby Beach Right Now: Late May Conditions, Parking and What to Expect
            </h1>
            <p className="text-lg text-white/80">28 May 2026 · 5 min read · Written by Clare</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 prose prose-lg max-w-none">

            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              Late May is genuinely one of the nicest times to be at Formby Beach. The pinewoods are properly green, the sand is warm, and the evenings are long enough to make a late afternoon visit worthwhile. It is also, I should warn you, one of the busier periods of the year.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Parking Reality</h2>
            <p>
              The National Trust car park at Formby Point (postcode L37 1YH) fills on good weather days. In late May, with half term just passed and the weather improving, you should aim to arrive by 9.30am if you want a space without circling. By 11am on a sunny Saturday it is full and there is a queue.
            </p>
            <p>
              Pay via the National Trust app before you arrive if you can. It saves time at the machines. NT members park free. Non-members: standard NT car park pricing applies. Book your space via the app during busy periods.
            </p>
            <p>
              If the main car park is full, do not park on Lifeboat Road or the surrounding residential streets. The alternative is to park back towards Formby village and walk or cycle the coastal path. It adds 20 minutes each way but is genuinely fine if you are not carrying too much.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Tide Timing</h2>
            <p>
              Formby Beach is tidal. At high tide, the beach in front of the dunes can be quite narrow. At low tide, you get the full expanse of flat wet sand stretching towards the water. The difference is significant.
            </p>
            <p>
              Check the tide times before you go. The best conditions for a beach walk are around low tide, roughly two hours either side. The BBC Mersey weather page has the Formby tide times. Aim for that window if the beach is the point of the trip.
            </p>
            <p>
              Late May tides are generally on the reasonable side. But it is worth checking rather than arriving to find half the beach underwater.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Dogs</h2>
            <p>
              Dogs are allowed at Formby Beach. There are seasonal restrictions on some sections: specific areas are designated dog-free during the little tern nesting season (roughly May to July). The fencing and signs make it obvious where dogs should not go.
            </p>
            <p>
              The rest of the beach is open. Keep dogs on leads near the little tern nesting area and in the pinewoods where red squirrels are present. Off lead on the open beach once you are clear of the sensitive sections: fine.
            </p>
            <p>
              Water. Bring it. The beach has no taps and the NT café is back at the car park. Dogs get thirsty faster than you expect on warm sand.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Pinewoods in Late May</h2>
            <p>
              The walk from the car park to the beach takes you through the pinewoods. In late May these are properly beautiful. The canopy is full, the light through the trees is good in the morning, and the path is well-maintained.
            </p>
            <p>
              This is red squirrel habitat. Go quietly, look up, and you might see one. Morning visits give you the best chance. By mid-afternoon the squirrels tend to be less active. More on June squirrel spotting in a separate post.
            </p>

            <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">After the Beach</h2>
            <p>
              The NT café at the car park does coffee and basic food. It is fine. For a proper lunch, the options are in Formby village, a 10 to 15 minute drive away.
            </p>
            <p>
              The Sparrowhawk on Stephenson Way is the most popular post-beach option. Good food, beer garden, family friendly. Gets busy on summer weekends. Left Bank Brasserie on Brows Lane if you want something a step up and are not in sandy clothes. Both worth booking ahead at weekends.
            </p>

            <div className="bg-[#EBF5EE] border-l-4 border-[#2E6B3E] rounded-r-lg p-5 my-8">
              <p className="font-semibold text-[#1C3220] mb-2">Late May: Quick Reference</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Car park postcode: L37 1YH</li>
                <li>Arrive by 9.30am on good weather days</li>
                <li>Check tide times before going (aim for low tide)</li>
                <li>Dogs allowed on most of the beach</li>
                <li>Seasonal dog-free zone near little tern nesting area</li>
                <li>NT café at car park; village restaurants 10 min drive</li>
              </ul>
            </div>

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
              <h3 className="font-bold text-[#1C3220] mb-3">Practical Info</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="font-semibold text-gray-500">Postcode</dt><dd>L37 1YH</dd></div>
                <div><dt className="font-semibold text-gray-500">Car park</dt><dd>National Trust, book via app</dd></div>
                <div><dt className="font-semibold text-gray-500">Dogs</dt><dd>Allowed (seasonal restrictions apply)</dd></div>
                <div><dt className="font-semibold text-gray-500">Café</dt><dd>NT café at car park</dd></div>
              </dl>
            </div>
            <ClareBio />
          </aside>
        </div>
      </div>
    </div>
  );
}
