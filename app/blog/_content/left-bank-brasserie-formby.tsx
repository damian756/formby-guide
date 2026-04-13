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
            headline: "Left Bank Brasserie Formby: An Honest Review",
            description:
              "An honest review of Left Bank Brasserie in Formby village. Food, service, prices and whether it's actually worth booking.",
            url: "https://www.formbyguide.co.uk/blog/left-bank-brasserie-formby",
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
            <span className="text-[#1C3220] font-medium">Left Bank Brasserie Review</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/blog-left-bank-brasserie.jpg"
          alt="Left Bank Brasserie Formby — restaurant interior with white tablecloths and fresh flowers"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 max-w-5xl pb-10 pt-24">
          <span className="inline-block bg-[#8B3A3A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Food</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            Left Bank Brasserie Formby: An Honest Review
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

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-12">

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Left Bank Brasserie is Formby's version of a proper restaurant. Not a bistro, not a wine bar, not a glorified cafe. An actual restaurant, with white tablecloths and a menu that changes with the seasons and a wine list that requires a decision. I've been twice. Here's where I actually land on it.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Setting</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          It's on Duke Street in Formby village, which is a slightly odd location if you're expecting it to be on the main high street. It isn't. It's tucked away enough that you'd walk past it without noticing if you didn't know it was there. Inside, it's genuinely lovely. Tables aren't crammed together. The lighting is warm. There are flowers on every table. Someone has put thought into it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          The first time I went was for my husband's birthday. The second time was a Tuesday lunch when I had a free afternoon and thought I deserved a proper meal. Both visits were different experiences of the same place, which tells you something useful: it works as a celebration venue and as a midweek treat.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Food</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The menu is French-leaning, which suits the room. There's always a steak, always a fish dish, always a vegetarian option that hasn't been an afterthought. On the birthday visit I had the duck breast, which was excellent. My husband had the sea bass and declared it the best he'd had in years, which from him is high praise because he orders sea bass everywhere and is rarely impressed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          The Tuesday lunch was slightly simpler. I had the soup and then the chicken. Both were good. Not revelatory for a midweek lunch, but solid and generous and the bread that came first was properly good bread, which matters more than restaurants realise.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          The desserts are worth having if you can. The tarte tatin on the birthday visit was genuinely outstanding. On the Tuesday I had the cheese instead, which was a good decision.
        </p>

        <div className="bg-[#F0F5F1] border-l-4 border-[#2E6B3E] rounded-r-xl px-5 py-4 my-7">
          <p className="text-[#1C3220] font-medium leading-relaxed">
            <span className="mr-2">📍</span>
            Left Bank Brasserie, Duke Street, Formby, L37 4AN. Book ahead at weekends. Tuesday to Sunday lunch and dinner. Closed Monday.
          </p>
        </div>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Price</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          It's not cheap. A three-course dinner for two with a bottle of wine will come to £80–100. That's Formby's most expensive restaurant and it's appropriately priced for what you're getting, but it's also not somewhere you're going on a random Wednesday unless you're the kind of person who goes to nice restaurants on random Wednesdays. Which some people are, and good for them.
        </p>
        <p className="text-gray-700 leading-relaxed mb-5">
          Lunch is significantly more reasonable. Two courses for around £25–30. If you want to try it without committing to the full evening price, a Tuesday or Wednesday lunch is the smart move.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Service</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Both visits: confident, warm, unhurried. They know the menu properly. On the birthday visit, when I mentioned it was a birthday, they brought a small dessert without being asked and without making a song and dance about it. That's the right call. Staff who know when to be present and when to leave you alone are rarer than they should be.
        </p>

        <h2 className="font-display text-2xl font-bold text-[#1C3220] mt-10 mb-4">The Verdict</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Yes, it's worth it. For a special occasion, absolutely. For a proper weekday lunch when you want something better than a sandwich, also yes. Left Bank Brasserie is the kind of restaurant every village should have and most don't. Formby is lucky to have it.
        </p>

        <div className="bg-[#1C3220] text-white rounded-2xl px-6 py-5 my-8">
          <p className="text-white/80 text-sm mb-3 leading-relaxed">More of Clare's honest restaurant picks for Formby and the surrounding area:</p>
          <Link href="/blog/where-to-eat-formby-with-kids" className="inline-flex items-center font-bold text-[#C9A96E] hover:text-[#e0ba66] transition-colors text-sm">
            Best Restaurants in Formby for Families →
          </Link>
        </div>

        <ClareBio />
      </article>
    </div>
  );
}
