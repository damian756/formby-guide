import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Best Restaurants in Formby for Families — Honest Review | FormbyGuide",
  description: "Four kids, fussy eaters, weekend sanity. Here's where we actually eat in Formby and why it works for families.",
  alternates: { canonical: `${BASE_URL}/blog/where-to-eat-formby-with-kids` },
  openGraph: {
    title: "Best Restaurants in Formby for Families — Honest Review",
    description: "Family-friendly restaurants in Formby. Real reviews from a mum of four.",
    url: `${BASE_URL}/blog/where-to-eat-formby-with-kids`,
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 max-w-5xl py-4">
          <nav className="text-sm text-gray-400 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">Best Restaurants in Formby for Families</span>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section
        className="bg-gradient-to-br from-[#5C1A1A] to-[#8B3A3A] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider">Food</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight mt-2">
              Best Restaurants in Formby for Families
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Four kids. Fussy eaters. Weekend sanity maintenance. Here are the restaurants that actually work for us.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Clare
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 15, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>
            Eating out with four kids is not the relaxing dinner-out experience you remembered before kids. It requires strategic planning, very low expectations about conversation, and honestly? Bribery in the form of pudding.
          </p>

          <p>
            Formby doesn't have loads of restaurants, but it has enough. And some of them actually genuinely understand what families need. I'm not talking about chain restaurants or kids' menus with chicken nuggets and peas. I'm talking about places where the staff gets it, the menu has something everyone will eat, and you don't feel like you're ruining someone's evening by bringing your children.
          </p>

          <h2>The Sparrowhawk — Our Go-To</h2>

          <p>
            This is genuinely the best local restaurant for families with kids. I know I keep saying this, but it's true.
          </p>

          <p>
            The kids' menu is actually good. Proper food, not just beige everything. The staff are warm and patient. They get that kids are learning to eat out, and they treat yours with kindness even if they're being a bit much.
          </p>

          <p>
            The main menu has proper portions that even adults with normal appetites can actually finish. The wine list is decent if you're an adult who wants a glass. There's enough on the menu that there's genuinely something for everyone — including the fussy eater who will "only eat certain pasta."
          </p>

          <p>
            It's not cheap, but it's not expensive either. And honestly? The quality and the vibe make it worth it.
          </p>

          <p>
            <strong>Go when:</strong> Mid-week if you can. Quieter, less frantic, the staff can actually chat to your kids if they want to.
          </p>

          <h2>Local Cafes — Underrated for Families</h2>

          <p>
            Sometimes you don't want a full restaurant experience. Sometimes you want a cafe, a decent coffee for you, cake for the kids, and nobody caring if they're a bit loud.
          </p>

          <p>
            Formby has some genuinely lovely little independent cafes tucked away in the village. The atmosphere is relaxed. The owners often know families who come regularly. The kids can move around a bit without you sweating that you're annoying everyone.
          </p>

          <p>
            These aren't fancy places. They're community places. Which is exactly what you need when you're doing family life here.
          </p>

          <p>
            <strong>Go when:</strong> Any time. They're designed for this.
          </p>

          <h2>The "Don't" List</h2>

          <p>
            There are a few restaurants here that just aren't great for kids. Not because they don't allow them — it's more that the vibe is clearly adult-focused and quiet, and bringing four children would feel like you're committing a social crime.
          </p>

          <p>
            Check the vibe before you go. Look at reviews. See if other people have taken kids. You'll know pretty quickly if it's a "bring the kids" place or an "arrange a babysitter" place.
          </p>

          <h2>Quick Wins: When You Just Need Fed</h2>

          <p>
            Some nights you don't want to sit down for two hours. You want to be in, eat something reasonable, and get home so the kids can have a bath before bed.
          </p>

          <p>
            Takeaways exist. Sometimes they're genuinely the right answer. But they don't have the same "going out" feeling, do they?
          </p>

          <p>
            That's where a quick cafe stop or a casual restaurant works. Something you can do, enjoy, and not feel like you've sacrificed the whole evening.
          </p>

          <h2>The Money Thing</h2>

          <p>
            Eating out with four kids isn't cheap. You've got four mains, four drinks, maybe four puddings. It adds up.
          </p>

          <p>
            Find places where the food is good enough that it feels worth it. Where the kids' menu actually has things they'll eat instead of just beige safe options. Where you're not paying premium prices for what is basically a chicken nugget.
          </p>

          <p>
            Formby does have this. The Sparrowhawk specifically. And that makes a difference.
          </p>

          <h2>The Real Bottom Line</h2>

          <p>
            Eating out with kids isn't about having a fancy night out anymore. It's about finding places that get families, that have good food, and where you don't feel stressed the whole time.
          </p>

          <p>
            Formby's small, but we've got what we need. And that's enough.
          </p>

          <hr className="my-12" />

          <div className="bg-[#E8EDE6] rounded-2xl p-8 not-prose">
            <p className="font-semibold text-[#1C3220] mb-3">Explore Formby restaurants</p>
            <p className="text-sm text-[#1C3220]/70 mb-4">
              Browse all restaurants, cafes, and dining options in Formby with reviews and ratings.
            </p>
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
            >
              View all restaurants <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      {/* More blog posts */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-8">More from the blog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Things to Do in Formby During Half Term",
                slug: "things-to-do-formby-half-term",
                excerpt: "Planning half term with the kids? Here's what works.",
              },
              {
                title: "Formby Beach Weather Guide",
                slug: "formby-beach-weather-guide",
                excerpt: "When Formby Beach is brilliant and when it's just windy.",
              },
            ].map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group flex flex-col bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all p-6"
              >
                <h3 className="font-display font-bold text-[#1C3220] text-lg group-hover:text-[#2E6B3E] transition-colors mb-2">
                  {related.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{related.excerpt}</p>
                <span className="text-[#2E6B3E] text-sm font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
