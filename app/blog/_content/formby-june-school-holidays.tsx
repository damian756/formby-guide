import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
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
            headline: "Formby in June: What to Expect When School Breaks Up",
            description: "June is the sweet spot before the August peak. What Formby is like in early summer, what gets busy and what stays quiet.",
            url: "https://www.formbyguide.co.uk/blog/formby-june-school-holidays",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-05-18",
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
            <span className="text-[#1C3220] font-medium">Formby in June</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-formby-june-pinewoods.jpg"
          alt="Formby pinewoods path in early summer morning light"
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Formby in June:<br />
              <span className="text-[#7BBDD4]">The Sweet Spot Before August</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Four kids means I know exactly what Formby is like at every stage of the school calendar. June is genuinely one of the best months. Here&apos;s why.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] prose-a:text-[#2E6B3E] max-w-none">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                August at Formby is brilliant but hectic. The NT car park fills before 10am on sunny days, the beach is busy, and the cafes have queues. June is different. The weather is often just as good, the days are longer, and you can actually move around without planning your parking thirty minutes in advance.
              </p>

              <h2>The Beach in June</h2>
              <p>
                Formby Beach in June is the best version of itself before the crowds arrive. The water is warming up after a cold spring, the sand is clean, and the dunes are green and alive. You&apos;ll still need to be there before 10am on a sunny Saturday to get a decent parking spot, but it&apos;s not yet the August situation where half the car park is gone before 9am.
              </p>
              <p>
                Tide times matter more in June because the evenings are long. Evening low tides in June are genuinely beautiful: the light is extraordinary from about 7pm onwards and the beach empties out as families with young children head home. If you can do an evening walk in June, do it.
              </p>

              <h2>Red Squirrels in June</h2>
              <p>
                June is still a decent month for red squirrels at the Formby reserve. They&apos;re less reliably visible than in the cooler months because they spend more time in the canopy when it&apos;s warm, but early morning walks on the squirrel trail still produce sightings. The key is always the same: go early, go quietly, and don&apos;t expect to see them if you visit at 2pm on a Saturday with the rest of the world.
              </p>

              <h2>The Pinewoods in June</h2>
              <p>
                The pinewoods are at their greenest in early summer. The bracken is coming up, the paths are well-defined after the spring growth, and the light through the Scots pines in the morning is genuinely worth getting up early for. The wild garlic from May is mostly over by June, but the woodland floor has its own character in early summer.
              </p>

              <h2>What Gets Busy</h2>
              <p>
                The NT car park fills on warm weekends from late June onwards. Book via the NT app before you leave the house: the signal in the car park is unreliable and you don&apos;t want to be searching for the app when you arrive. Weekdays in June are dramatically quieter than weekends.
              </p>
              <p>
                The village restaurants start getting busy on weekend evenings from late June. The Sparrowhawk in particular gets full. Book ahead if you want a table on a Friday or Saturday night.
              </p>

              <h2>What Stays Quiet</h2>
              <p>
                The coastal path north of the NT car park area stays relatively empty even in early summer. If you want a walk without the crowds, head north from the main beach access rather than south. The path toward Ainsdale is longer, quieter, and often more interesting for wildlife.
              </p>
              <p>
                The village cafes and independent shops on the high street are busy at weekends but manageable. Left Bank Brasserie is good for a weekend lunch but again, booking is sensible in June.
              </p>

              <h2>June With the Kids</h2>
              <p>
                With four kids, June is my favourite month for a beach day. Long evenings mean you can leave later in the afternoon and still get a proper couple of hours. The water is cold but swimmable if your kids are the sort who don&apos;t complain about cold water. Mine are not, but we go anyway.
              </p>
              <p>
                The red squirrel trail is still a solid option if you can do it early. Kids who arrive before 9am and stay quiet have a reasonable chance of seeing them. The café at the NT car park does good ice cream which has become a non-negotiable part of our post-squirrel-walk routine.
              </p>
            </div>

            <div className="not-prose my-10 bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-3">June in Formby: Quick summary</p>
              <ul className="space-y-2 text-sm text-[#1C3220]/80">
                <li><strong>Beach:</strong> Less busy than August, still worth booking parking early at weekends</li>
                <li><strong>Red squirrels:</strong> Early morning still productive, less reliable midday</li>
                <li><strong>Restaurants:</strong> Book weekend evenings, especially The Sparrowhawk and Left Bank</li>
                <li><strong>Best time of day:</strong> Early morning or evening low tide walks</li>
                <li><strong>Parking postcode:</strong> L37 1YH, NT app booking recommended</li>
              </ul>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Useful Links</h3>
              <div className="space-y-2">
                {[
                  { label: "Formby Beach Guide", href: "/formby-beach" },
                  { label: "Red Squirrels at Formby", href: "/red-squirrels-formby" },
                  { label: "Restaurants in Formby", href: "/restaurants" },
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Parking at Formby Beach", href: "/guides/parking-formby-beach" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium transition py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <ClareBio />
      </div>
    </div>
  );
}
