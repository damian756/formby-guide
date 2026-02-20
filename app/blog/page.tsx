import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Blog — Local Guides, Tips & Stories from Formby",
  description: "Discover local stories, seasonal guides, and insider tips for making the most of Formby. Written by locals, for visitors and residents.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog — Local Guides, Tips & Stories from Formby",
    description: "Local insights and guides for Formby. Seasonal tips, local knowledge, and things worth knowing.",
    url: `${BASE_URL}/blog`,
  },
};

const POSTS = [
  {
    slug: "things-to-do-formby-half-term",
    title: "Things to Do in Formby During Half Term — Family Guide",
    excerpt: "Planning half term in Formby with the kids? Here's what actually works (and what I'd skip).",
    author: "Clare",
    date: "February 20, 2026",
    readTime: "8 min read",
    category: "Family",
    image: "linear-gradient(135deg, #1C3220 0%, #2E6B3E 100%)",
  },
  {
    slug: "formby-beach-weather-guide",
    title: "The Formby Beach Weather Guide — When to Visit (& When to Skip)",
    excerpt: "After 10 years living here, I've learned when Formby Beach is brilliant and when it's just windy.",
    author: "Clare",
    date: "February 18, 2026",
    readTime: "6 min read",
    category: "Seasonal",
    image: "linear-gradient(135deg, #1C4A5A 0%, #2E7A9A 100%)",
  },
  {
    slug: "where-to-eat-formby-with-kids",
    title: "Best Restaurants in Formby for Families — Our Honest Review",
    excerpt: "Four kids. Fussy eaters. Weekend sanity maintenance. Here are the restaurants that actually work for us.",
    author: "Clare",
    date: "February 15, 2026",
    readTime: "7 min read",
    category: "Food",
    image: "linear-gradient(135deg, #5C1A1A 0%, #8B3A3A 100%)",
  },
  {
    slug: "red-squirrels-formby-spotting-guide",
    title: "How to Actually See Red Squirrels in Formby — Local Tips",
    excerpt: "Yes, they're here. Yes, they're cute. But no, you won't see them if you visit at 2pm on a Saturday.",
    author: "Clare",
    date: "February 12, 2026",
    readTime: "5 min read",
    category: "Wildlife",
    image: "linear-gradient(135deg, #8B6040 0%, #A8764A 100%)",
  },
  {
    slug: "formby-pinewoods-walking-guide",
    title: "Walking in Formby Pinewoods — Trails, Tips & What to Bring",
    excerpt: "The Pinewoods are gorgeous, but come unprepared and you'll be miserable. Here's what I've learned.",
    author: "Clare",
    date: "February 10, 2026",
    readTime: "6 min read",
    category: "Walks",
    image: "linear-gradient(135deg, #1A5C3A 0%, #2E8B5A 100%)",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C3220] to-[#2E6B3E] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Blog</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Local Stories & Guides
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Written by locals, for people who want to make the most of Formby. Real tips, honest reviews, and things worth knowing.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
            >
              {/* Hero gradient */}
              <div
                className="h-40 w-full"
                style={{ background: post.image }}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B3E] bg-[#E8EDE6] px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="font-display font-bold text-[#1C3220] text-lg leading-snug group-hover:text-[#2E6B3E] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2 flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 pb-4 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <span className="ml-auto text-gray-300">{post.readTime}</span>
                </div>

                <span className="text-[#2E6B3E] text-sm font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
