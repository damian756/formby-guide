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
            headline: "Best Cafes in Formby Village — Where to Eat, Drink and Sit Down",
            description: "The honest guide to cafes in Formby village — which ones are worth it, what to order, and where to go after the beach. From the NT cafe to village independents.",
            url: "https://www.formbyguide.co.uk/blog/best-cafes-formby-village",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-03-18",
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
            <span className="text-[#1C3220] font-medium">Best Cafes in Formby</span>
          </nav>
        </div>
      </div>

      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-card-cafes-formby.webp"
          alt="Cozy independent cafe in Formby village with coffee and cake"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/30 text-[#C9A96E] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Food Guide · Cafes
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Best Cafes<br />
              <span className="text-[#C9A96E]">in Formby Village</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Where to go for a proper coffee, decent cake, and somewhere to sit down — before or after the beach.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>March 18, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-3xl py-12 md:py-16">
        <div className="prose prose-lg prose-slate max-w-none">

          <p className="text-xl text-[#1C3220] font-medium leading-relaxed mb-8">
            Formby village isn&apos;t exactly overflowing with cafes — but what it has is worth knowing about. A handful of independents that do a decent job, the National Trust cafe if you&apos;re already at the beach, and enough options that you won&apos;t be stuck with a petrol station coffee after a morning walk. Here&apos;s the honest breakdown.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">The National Trust Cafe at Formby Beach</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            If you&apos;re visiting the beach and pinewoods, the NT cafe is the obvious choice. It&apos;s at the end of the car park, right at the start of the squirrel trail. The coffee is decent, the cake is good (the cake changes but it&apos;s reliably proper home-baked rather than packaged), and it&apos;s open from when the car park opens in April through to the end of the season.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            It&apos;s not cheap — NT catering never is — but you&apos;re paying for a cup of coffee with a view of the pinewoods and the knowledge that the money goes back into the estate. Worth it. Dogs are welcome outside.
          </p>

          <div className="bg-[#F0F7F2] border-l-4 border-[#2E6B3E] rounded-r-lg px-6 py-5 my-8">
            <p className="text-sm font-bold text-[#2E6B3E] uppercase tracking-wide mb-2">Practical</p>
            <p className="text-[#1C3220] leading-relaxed">
              <strong>NT Cafe:</strong> L37 1YH · Open April–October during car park hours · Hot drinks, cakes, light lunches · Outside seating, dogs welcome.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">Formby village — the independent options</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            In the village centre (a five-minute drive or 20-minute walk from the NT car park), there are a few options worth knowing about. They don&apos;t all have the same name every year — Formby has an independent cafe scene that shifts — so I&apos;ll describe what&apos;s there and let you check what&apos;s currently trading.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The Chapel Lane area and the roads around the village centre have had a reliable selection of cafe and coffee options for years. These tend to be the kind of places that serve a proper flat white, have cake that was made that morning, and where you can sit down without feeling rushed. The sort of place I prefer to a chain. Not always Instagrammable. Generally good.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">What about brunch?</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            For a proper sit-down brunch, the village restaurants do better service than the cafes. Left Bank Brasserie is the obvious choice for something that feels like a treat — book ahead on weekends. The Sparrowhawk and Emily&apos;s Kitchen are also worth checking for weekend brunch menus.
          </p>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            If you want a quick coffee and a pastry before the beach, the village cafes are the answer. If you want a full brunch experience, those restaurants are where you&apos;ll get it — just with a table booked and slightly more structure to your morning.
          </p>

          <h2 className="text-2xl font-bold text-[#1C3220] mt-10 mb-4">After the beach — what actually works</h2>
          <p className="text-[#4A6B5A] leading-relaxed mb-4">
            The pattern that works well: arrive early, beach first, then drive to the village for lunch rather than trying to eat at the NT cafe when it&apos;s busy at 1pm. The village is five minutes by car and has more options. It also separates the sandy, soggy post-beach phase from the clean, warm lunch phase, which is better for everyone.
          </p>

          <ul className="space-y-2 text-[#4A6B5A] my-4">
            {[
              "NT Cafe — best for coffee and cake while you're at the beach estate.",
              "Village cafes — best for a sit-down coffee, mid-morning, before or after the beach.",
              "Village restaurants (Left Bank, Emily's) — best for a proper brunch or lunch, with a booking.",
              "Most cafes close by 4–5pm. Don't plan a late afternoon coffee stop without checking first.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#2E6B3E] mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
          <Link
            href="/restaurants"
            className="flex-1 bg-[#2E6B3E] text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#1C4A2A] transition"
          >
            Formby Restaurants Directory →
          </Link>
          <Link
            href="/formby-beach"
            className="flex-1 bg-white border-2 border-[#2E6B3E] text-[#2E6B3E] px-6 py-4 rounded-xl font-semibold text-center hover:bg-[#F0F7F2] transition"
          >
            Formby Beach Guide →
          </Link>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
