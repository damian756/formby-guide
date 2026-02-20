import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Walking in Formby Pinewoods — Trails, Tips & What to Bring | FormbyGuide",
  description: "The Pinewoods are gorgeous, but come unprepared and you'll be miserable. Here's everything a local has learned about walking the Pinewoods.",
  alternates: { canonical: `${BASE_URL}/blog/formby-pinewoods-walking-guide` },
  openGraph: {
    title: "Walking in Formby Pinewoods — Trails, Tips & What to Bring",
    description: "Complete guide to walking Formby Pinewoods from a local.",
    url: `${BASE_URL}/blog/formby-pinewoods-walking-guide`,
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
            <span className="text-[#1C3220] font-medium">Walking in Formby Pinewoods</span>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section
        className="bg-gradient-to-br from-[#1A5C3A] to-[#2E8B5A] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider">Walks</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight mt-2">
              Walking in Formby Pinewoods
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Complete guide to trails, tips, and what to actually bring. The Pinewoods are gorgeous, but come unprepared and you'll be miserable.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Clare
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 10, 2026
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
            Formby Pinewoods are genuinely one of the best things about living here. Miles of woodland, relatively quiet (especially weekday mornings), and it feels like actual proper forest even though you're basically ten minutes from Liverpool.
          </p>

          <p>
            But here's the thing: if you don't know what you're doing, the Pinewoods can be a bit miserable. The terrain isn't gentle forest paths. It's sandy and uneven. You need decent shoes. You need to know what to bring. And you need to actually plan a route, not just wander and hope.
          </p>

          <p>
            Here's what I've learned from about a hundred walks there.
          </p>

          <h2>The Basic Facts</h2>

          <p>
            The Pinewoods are managed by the National Trust. There are designated trails. There's a car park with facilities. There's a visitor centre that's actually good.
          </p>

          <p>
            It's not vast, but it's substantial enough that you can lose a few hours without it feeling rushed. And it's genuinely beautiful. Proper woodland. Quiet. The kind of place that reminds you that nature exists even though you're essentially in a suburb.
          </p>

          <h2>What to Wear</h2>

          <p>
            This is crucial. Not gym shoes. Proper walking shoes or boots. The terrain is sandy and uneven. Your fancy trainers will be destroyed and you'll probably twist an ankle.
          </p>

          <p>
            Wear trousers or long socks. Not because of the walking, but because of the bugs. Midges, sand flies, all sorts of tiny things that live in the Pinewoods and will bite your legs if they get the chance.
          </p>

          <p>
            Layer up, even in summer. It's cooler under the trees. And you'll warm up quickly if you're walking at pace.
          </p>

          <h2>What to Bring</h2>

          <p>
            Water. So much water. More than you think you need. The woodland isn't particularly hot, but you're walking, and sand is basically asking your body to dehydrate.
          </p>

          <p>
            A small backpack. You probably don't need much, but having space for water, a jacket, and maybe a snack means you're prepared for almost anything.
          </p>

          <p>
            A map or phone with the trails downloaded. Don't rely on your phone signal. There are trails, but they're not always super obvious, especially if you're trying to cut across instead of following the main paths.
          </p>

          <p>
            Bug spray if you're bothered by insects. Not essential, but useful if you're sensitive to bites.
          </p>

          <h2>The Trails</h2>

          <p>
            There are designated trails of various lengths. The shortest is about 30 minutes. The longest is a few hours. There are also connecting trails that let you build your own route.
          </p>

          <p>
            For families with littler kids, the shorter trails are absolutely fine. You're not trying to complete a marathon. You're trying to enjoy a walk in genuinely nice woodland.
          </p>

          <p>
            For a decent morning walk, I'd do about 90 minutes. It gives you time to actually slow down, maybe see some wildlife, and still get back for lunch.
          </p>

          <h2>When to Go</h2>

          <p>
            Spring and autumn are genuinely the best. The light is lovely, it's not too hot, everything's growing or changing or dying in that beautiful autumn way.
          </p>

          <p>
            Summer is busier and can be a bit close under the trees. Winter is fine if you're properly dressed, but it's grey and the daylight runs out early.
          </p>

          <p>
            Midweek is quieter. If you can do a walk on a Wednesday morning, do it. Saturday afternoons are rammed with people and their dogs and it loses something of that peaceful woodland feeling.
          </p>

          <h2>Wildlife and Squirrels</h2>

          <p>
            You might see red squirrels. You might not. Go early, be quiet, manage your expectations. Other wildlife: deer, rabbits, various birds. It's genuinely good for wildlife watching if you're patient.
          </p>

          <p>
            There are dog walkers, which is fine. The Pinewoods are well-used. But it's managed and it's not chaotic.
          </p>

          <h2>The Bottom Line</h2>

          <p>
            Walking in Formby Pinewoods is genuinely one of the best things to do locally. It's free (car park is £2 or something minimal if you're not a National Trust member). It's beautiful. And it's the kind of walk that reminds you why it's nice to live near actual woodland.
          </p>

          <p>
            Just bring proper shoes. Seriously. Your feet will thank you.
          </p>

          <hr className="my-12" />

          <div className="bg-[#E8EDE6] rounded-2xl p-8 not-prose">
            <p className="font-semibold text-[#1C3220] mb-3">Explore Formby Pinewoods</p>
            <p className="text-sm text-[#1C3220]/70 mb-4">
              Get the full guide with facilities, parking info, and practical details.
            </p>
            <Link
              href="/formby-pinewoods"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
            >
              Pinewoods Guide <ArrowRight className="w-3.5 h-3.5" />
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
                title: "How to Actually See Red Squirrels",
                slug: "red-squirrels-formby-spotting-guide",
                excerpt: "Yes, they're here. Local tips for spotting them.",
              },
              {
                title: "Things to Do in Formby During Half Term",
                slug: "things-to-do-formby-half-term",
                excerpt: "Planning half term with kids? Here's what works.",
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
