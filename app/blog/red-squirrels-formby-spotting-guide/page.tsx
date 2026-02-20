import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "How to Actually See Red Squirrels in Formby — Local Tips | FormbyGuide",
  description: "Yes, they're here. Yes, they're cute. But no, you won't see them if you visit at 2pm on a Saturday. Local tips for spotting red squirrels.",
  alternates: { canonical: `${BASE_URL}/blog/red-squirrels-formby-spotting-guide` },
  openGraph: {
    title: "How to Actually See Red Squirrels in Formby",
    description: "Tips for spotting red squirrels in Formby from a local.",
    url: `${BASE_URL}/blog/red-squirrels-formby-spotting-guide`,
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
            <span className="text-[#1C3220] font-medium">How to Actually See Red Squirrels in Formby</span>
          </nav>
        </div>
      </div>

      {/* Hero section */}
      <section
        className="bg-gradient-to-br from-[#8B6040] to-[#A8764A] text-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#C9A96E] text-xs font-bold uppercase tracking-wider">Wildlife</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight mt-2">
              How to Actually See Red Squirrels in Formby
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Yes, they're here. Yes, they're adorable. But no, you won't see them if you visit at 2pm on a Saturday making noise.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Clare
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 12, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none text-[#1C3220]">
          <p>
            One of the best things about Formby is the red squirrels. They're cute, they're rare, and they're genuinely living in our pinewoods. If you move here, someone will tell you about the red squirrels within the first conversation. It's a thing. They're a big deal.
          </p>

          <p>
            But here's the thing: you won't see them unless you actually know where and when to look. Most people visit the Pinewoods expecting to just stumble upon a red squirrel, spot it, take a photo, and move on.
          </p>

          <p>
            That doesn't happen. They're wild animals, not a petting zoo.
          </p>

          <h2>Timing Is Everything</h2>

          <p>
            Red squirrels are most active in the early morning and late afternoon/early evening. If you visit at midday when it's hot and bright and busy, you won't see them. They're hidden away.
          </p>

          <p>
            Go before 9am or after 4pm. Seriously. This is the biggest difference maker.
          </p>

          <p>
            Season matters too. Spring and autumn are best — they're more active, they're feeding, they're out. Summer, they're a bit sluggish in the heat. Winter, they're slower but still active.
          </p>

          <h2>Location, Location, Location</h2>

          <p>
            Not all of the Pinewoods are equally squirrel-populated. There are hotspots. The area near the feeders (if they're up and running) tends to have more activity. The quieter sections near the paths less trafficked by people are better.
          </p>

          <p>
            Ask locals. The staff at the National Trust visitor centre know. They'll point you in the right direction.
          </p>

          <h2>Be Quiet and Be Patient</h2>

          <p>
            This is crucial. Red squirrels are skittish. If you're walking through making noise, talking loudly, your kids are running ahead making racket, you won't see them.
          </p>

          <p>
            Walk slowly. Talk quietly. Sit on a bench and just wait. Sometimes they come to you. Sometimes you sit for 20 minutes and nothing happens. That's just how it is.
          </p>

          <p>
            But when you do see one? It's genuinely magical. They're quick, they're bright-eyed, they're proper wild animals doing their thing.
          </p>

          <h2>Bring Binoculars</h2>

          <p>
            Not essential, but helpful. Squirrels move fast and they're small. Binoculars give you a better chance of actually seeing detail without scaring them off.
          </p>

          <p>
            Also useful if you're not sure if something is a red squirrel or a grey squirrel (spoiler: if it's got ear tufts, it's definitely red).
          </p>

          <h2>Don't Feed Them</h2>

          <p>
            I know the temptation. They're cute, you've got nuts, surely they'd appreciate it?
          </p>

          <p>
            No. Leave them alone. They're wild animals managing their own food. The feeders at the visitor areas are fine. But random people with nuts is not helpful.
          </p>

          <h2>Manage Your Expectations</h2>

          <p>
            Here's the real talk: you might visit the Pinewoods at the best time, in the best season, in the best weather, be perfectly quiet and patient, and still not see a red squirrel.
          </p>

          <p>
            They're wild animals. That's kind of the point. They don't perform on schedule.
          </p>

          <p>
            But if you go multiple times with the right approach, you will see them. And it's genuinely one of the best things about living here.
          </p>

          <h2>Why They Matter</h2>

          <p>
            Formby's red squirrels are important. They're part of a small population that really matters for the species. The conservation work here is significant.
          </p>

          <p>
            Seeing them in their actual habitat — wild, quick, living their lives — reminds you why that matters. They're not in a zoo. They're actually here.
          </p>

          <p>
            And that's genuinely brilliant.
          </p>

          <hr className="my-12" />

          <div className="bg-[#E8EDE6] rounded-2xl p-8 not-prose">
            <p className="font-semibold text-[#1C3220] mb-3">Explore Formby Pinewoods</p>
            <p className="text-sm text-[#1C3220]/70 mb-4">
              Get the full guide to walking the Pinewoods, parking, facilities, and trails.
            </p>
            <Link
              href="/red-squirrels-formby"
              className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition"
            >
              Red Squirrels Guide <ArrowRight className="w-3.5 h-3.5" />
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
                excerpt: "Trails, tips & what to bring to the Pinewoods.",
              },
              {
                title: "Formby Beach Weather Guide",
                slug: "formby-beach-weather-guide",
                excerpt: "When to visit Formby Beach and when to stay home.",
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
