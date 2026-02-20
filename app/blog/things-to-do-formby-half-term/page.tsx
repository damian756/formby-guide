import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Things to Do in Formby During Half Term — Family Guide | FormbyGuide",
  description: "Planning half term in Formby with the kids? Here's what actually works (and what I'd skip). Honest local tips from a mum of four.",
  alternates: { canonical: `${BASE_URL}/blog/things-to-do-formby-half-term` },
  openGraph: {
    title: "Things to Do in Formby During Half Term — Family Guide",
    description: "Half term plans in Formby. Local tips for families with kids.",
    url: `${BASE_URL}/blog/things-to-do-formby-half-term`,
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
            <span className="text-[#1C3220] font-medium">Things to Do in Formby During Half Term</span>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section
        className="bg-gradient-to-br from-[#1C3220] to-[#2E6B3E] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider">Family</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight mt-2">
              Things to Do in Formby During Half Term
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Planning half term in Formby with the kids? Here's what actually works (and what I'd skip). Written from four years of half term survival and one very honest mum.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Clare
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 20, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>
            Half term. The words every parent dreads and loves simultaneously. Five days stretching ahead, full of possibility and chaos. Four kids to entertain. A limited budget. And somehow, making it memorable without losing your mind.
          </p>

          <p>
            After doing this a few times now, I've learned what actually works in Formby during half term — and more importantly, what doesn't. No sponsored listicles here. Just honest takes from someone who lives here and has definitely had a half term go sideways.
          </p>

          <h2>Day 1-2: Indoor Things (Because You're Exhausted)</h2>

          <p>
            Let's be real. Day one of half term, you're running on coffee and hope. You need something that doesn't require much planning, doesn't need a packed lunch, and preferably lets you sit down for five minutes.
          </p>

          <p>
            <strong>Southport Beach Hinterland:</strong> Yes, it's technically in Southport, but it's only 15 minutes away and my kids genuinely love it. Indoor play, climbing, sliding. They burn energy. I drink another coffee. Win.
          </p>

          <p>
            <strong>Formby Library:</strong> Honestly? The library is brilliant. Story times, activities, and it's free. Your kids can get new books. There's a quiet corner if you need five minutes. It's not thrilling, but sometimes half term is about getting through the day intact.
          </p>

          <h2>Day 3: The Nature Day</h2>

          <p>
            By day three, the kids are climbing the walls. You need to get them outside and tired.
          </p>

          <p>
            <strong>Formby Pinewoods:</strong> This is the move. Bring decent shoes — the terrain is sandy and uneven, not the gentle woodland walk you might hope for. But the kids love it. There's adventure, there's space, and yes, you might see red squirrels if you're lucky and very quiet.
          </p>

          <p>
            Pack a picnic. The car park has toilets. Give yourself three hours and you've got a whole morning sorted. Shattered kids = quiet afternoon = you might actually have time to make dinner.
          </p>

          <h2>Day 4: The Local Eat-Out Day</h2>

          <p>
            Half term means school lunches are off. Cooking every single meal is exhausting. You need a break.
          </p>

          <p>
            <strong>The Sparrowhawk:</strong> Restaurant not pub. Proper food, kids menu that actually has things kids will eat, and the staff gets that you're doing half term parenting and you need grace. They're brilliant with children.
          </p>

          <p>
            <strong>Local cafes:</strong> Formby has some lovely little cafes tucked away. Coffee for you, cake for the kids. Nothing fancy, but the locals all know the spots.
          </p>

          <h2>Day 5: The One Last Push</h2>

          <p>
            You're tired. They're tired. But you've got one more day.
          </p>

          <p>
            <strong>Formby Beach:</strong> Keep it simple. Bucket, spade, thermos of hot chocolate. The beach is free, it's right there, and even on a grey day, kids find something to do for hours.
          </p>

          <p>
            If it's freezing or raining, honestly? Go home. Put on a film. Let them build a blanket fort. Eat biscuits. Some of the best half term memories my kids have aren't from organized activities — they're from lazy afternoons at home with mum.
          </p>

          <h2>The Real Talk</h2>

          <p>
            Half term doesn't need to be perfect. It doesn't need Instagram-worthy. It needs to be survivable. My best half terms have been the ones where I stopped trying to fill every moment and just let it unfold. A mix of outdoor and indoor. Some "yes, I'll buy you a hot chocolate" and some "we're eating the pasta at home."
          </p>

          <p>
            Formby's got everything you need for that. Space to run around. Stuff to do. And enough quiet corners that you can actually sit and drink your coffee while your kids play.
          </p>

          <p>
            That's honestly what makes half term work.
          </p>

          <hr className="my-12" />

          <div className="bg-[#E8EDE6] rounded-2xl p-8 not-prose">
            <p className="font-semibold text-[#1C3220] mb-3">More things to do in Formby?</p>
            <p className="text-sm text-[#1C3220]/70 mb-4">
              Check out our full guide to attractions, restaurants, and activities in Formby.
            </p>
            <Link
              href="/things-to-do"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
            >
              Explore all things to do <ArrowRight className="w-3.5 h-3.5" />
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
                title: "The Formby Beach Weather Guide",
                slug: "formby-beach-weather-guide",
                excerpt: "When to visit Formby Beach, and when to skip it.",
              },
              {
                title: "Best Restaurants in Formby for Families",
                slug: "where-to-eat-formby-with-kids",
                excerpt: "Four kids, fussy eaters, and where we actually eat.",
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
