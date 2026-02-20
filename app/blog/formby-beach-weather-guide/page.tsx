import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "The Formby Beach Weather Guide — When to Visit | FormbyGuide",
  description: "After 10 years living here, I've learned when Formby Beach is brilliant and when it's just windy. Here's your honest seasonal guide.",
  alternates: { canonical: `${BASE_URL}/blog/formby-beach-weather-guide` },
  openGraph: {
    title: "The Formby Beach Weather Guide — When to Visit",
    description: "When to visit Formby Beach for the best experience. Local seasonal guide.",
    url: `${BASE_URL}/blog/formby-beach-weather-guide`,
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
            <span className="text-[#1C3220] font-medium">The Formby Beach Weather Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section
        className="bg-gradient-to-br from-[#1C4A5A] to-[#2E7A9A] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider">Seasonal</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight mt-2">
              The Formby Beach Weather Guide
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              When Formby Beach is brilliant. When it's just windy. And what to actually bring depending on the month.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Clare
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 18, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>
            Formby Beach is stunning. It's also temperamental. I've been here ten years. I've walked that beach in almost every weather condition imaginable. Some days it's genuinely one of the best beaches on the north-west coast. Other days it's just relentlessly windy and a bit miserable.
          </p>

          <p>
            Here's what I've learned about when to go, and when to maybe stay home with a cuppa instead.
          </p>

          <h2>Spring (March – May): The "Probably Windy" Season</h2>

          <p>
            Spring gets everyone excited. The sun's coming out, daffodils are blooming, and surely the beach will be nice?
          </p>

          <p>
            No. Spring is windy. Always windy. The kind of wind that blows your hat off and makes it hard to have a conversation. The beach is still beautiful — the light is lovely, the sand is firm — but your hair will look like you've been electrocuted.
          </p>

          <p>
            <strong>What to bring:</strong> A proper windproof jacket. Hair clips. Low expectations about how you look in photos.
          </p>

          <p>
            <strong>Best day to go:</strong> Early morning, before the wind really picks up. Or on the rare still day in late May.
          </p>

          <h2>Summer (June – August): The Busy But Beautiful Months</h2>

          <p>
            This is when the beach actually delivers. Warmer weather, mostly kinder wind, and it's packed. Absolutely rammed, especially weekends and school holidays.
          </p>

          <p>
            If you love crowds and beach culture, brilliant. If you want peace and quiet, avoid bank holidays and Saturdays.
          </p>

          <p>
            Early mornings in summer are genuinely lovely. The beach is relatively quiet, the light is golden, and the temperature is actually nice.
          </p>

          <p>
            <strong>What to bring:</strong> Sunscreen (always). A picnic. Something to read. The kids' beach toys if you've got them.
          </p>

          <p>
            <strong>Best day to go:</strong> A weekday morning in late June, before the school holidays. Or literally any time in September when everyone's back at school.
          </p>

          <h2>Autumn (September – November): The Second Summer</h2>

          <p>
            September is genuinely magic. The kids go back to school, the summer crowds disappear, the weather is still warm, and the beach feels like it's yours again.
          </p>

          <p>
            October and November? The weather turns. Darker, colder, wetter. But the light is beautiful on clear days. And there's something quite nice about a cold autumn walk on a quiet beach.
          </p>

          <p>
            <strong>What to bring:</strong> Layers. Definitely layers. A waterproof for the November walks.
          </p>

          <p>
            <strong>Best day to go:</strong> A crisp, clear September morning. Or any day in October if you like that moody autumn vibe.
          </p>

          <h2>Winter (December – February): Only If You're Properly Prepared</h2>

          <p>
            Winter is honestly brutal. Cold wind, grey skies, and you need to be genuinely committed to make it pleasant.
          </p>

          <p>
            But — and this is important — if the conditions are right, a winter beach walk is stunning. Crisp air, empty beach, the light has this particular quality that's hard to describe. You feel alive.
          </p>

          <p>
            Just don't kid yourself that you're going to have fun if you're not properly prepared. Cold fingers and misery don't make good memories.
          </p>

          <p>
            <strong>What to bring:</strong> Everything waterproof. Warm gloves. A thermos of hot chocolate. Actual determination. Maybe a good waterproof coat that you don't mind sand blowing into.
          </p>

          <p>
            <strong>Best day to go:</strong> A clear winter's day with actual sun. Or don't. Go to a cafe instead.
          </p>

          <h2>What the Weather Actually Does to the Beach</h2>

          <p>
            Wind: Makes the sand blow everywhere. Dramatic. Not always pleasant. Worse at high tide.
          </p>

          <p>
            Rain: The beach gets emptier, which is nice. But it's also cold and grey and a bit pointless unless you're really into that.
          </p>

          <p>
            High tide vs low tide: Low tide gives you more beach to explore. High tide means the beach is narrow, which is fine if you're just walking but annoying if you want space.
          </p>

          <h2>The Bottom Line</h2>

          <p>
            Formby Beach is worth visiting in almost every season. But your experience will genuinely depend on the weather. Check the forecast. Dress appropriately. And maybe pick a windier month to go early in the morning, because that's genuinely when it's best.
          </p>

          <p>
            And if the forecast looks miserable? Honestly? There's absolutely no shame in going to a cafe instead. You'll enjoy your time more.
          </p>

          <hr className="my-12" />

          <div className="bg-[#E8EDE6] rounded-2xl p-8 not-prose">
            <p className="font-semibold text-[#1C3220] mb-3">Plan your Formby Beach visit</p>
            <p className="text-sm text-[#1C3220]/70 mb-4">
              Get the full guide to Formby Beach, including facilities, parking, and tide information.
            </p>
            <Link
              href="/formby-beach"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
            >
              Formby Beach Guide <ArrowRight className="w-3.5 h-3.5" />
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
                title: "Walking in Formby Pinewoods",
                slug: "formby-pinewoods-walking-guide",
                excerpt: "Trails, tips & what to actually bring to the Pinewoods.",
              },
              {
                title: "How to Actually See Red Squirrels",
                slug: "red-squirrels-formby-spotting-guide",
                excerpt: "Yes, they're here. But not if you visit at 2pm on Saturday.",
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
