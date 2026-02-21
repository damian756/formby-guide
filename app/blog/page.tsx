import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import BlogClient, { type BlogPost, type BlogCategory } from "./BlogClient";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Blog — Local Guides, Tips & Stories from Formby",
  description: "Discover local stories, seasonal guides, and insider tips for making the most of Formby. Written by locals, for visitors and residents.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog — Local Guides, Tips & Stories from Formby",
    description: "Local insights and guides for Formby. Seasonal tips, local knowledge, and things worth knowing.",
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Local Guides, Tips & Stories from Formby",
    description: "Local insights and guides for Formby. Seasonal tips, local knowledge, and things worth knowing.",
  },
};

const CATEGORIES: BlogCategory[] = [
  { slug: "family",   label: "Family",   color: "#2E6B3E", description: "Half term plans, days out and activities that work with kids." },
  { slug: "seasonal", label: "Seasonal", color: "#1C4A5A", description: "When to visit, what to expect, and seasonal tips." },
  { slug: "food",     label: "Food",     color: "#8B3A3A", description: "Honest restaurant reviews and places to eat in Formby." },
  { slug: "wildlife", label: "Wildlife", color: "#8B6040", description: "Red squirrels, birdwatching and Sefton Coast nature." },
  { slug: "walks",    label: "Walks",    color: "#1A5C3A", description: "Pinewoods trails, coastal walks and what to bring." },
];

const POSTS: BlogPost[] = [
  {
    slug: "things-to-do-formby-half-term",
    title: "Things to Do in Formby During Half Term — Family Guide",
    excerpt: "Planning half term in Formby with the kids? Here's what actually works (and what I'd skip).",
    author: "Clare",
    date: "February 20, 2026",
    readTime: "8 min read",
    categorySlug: "family",
    gradient: "linear-gradient(135deg, #1C3220 0%, #2E6B3E 100%)",
    image: "/blog-card-family.webp",
  },
  {
    slug: "formby-beach-weather-guide",
    title: "The Formby Beach Weather Guide — When to Visit (& When to Skip)",
    excerpt: "After 10 years living here, I've learned when Formby Beach is brilliant and when it's just windy.",
    author: "Clare",
    date: "February 18, 2026",
    readTime: "6 min read",
    categorySlug: "seasonal",
    gradient: "linear-gradient(135deg, #1C4A5A 0%, #2E7A9A 100%)",
    image: "/blog-card-seasonal.webp",
  },
  {
    slug: "where-to-eat-formby-with-kids",
    title: "Best Restaurants in Formby for Families — Our Honest Review",
    excerpt: "Four kids. Fussy eaters. Weekend sanity maintenance. Here are the restaurants that actually work for us.",
    author: "Clare",
    date: "February 15, 2026",
    readTime: "7 min read",
    categorySlug: "food",
    gradient: "linear-gradient(135deg, #5C1A1A 0%, #8B3A3A 100%)",
    image: "/blog-card-food.webp",
  },
  {
    slug: "red-squirrels-formby-spotting-guide",
    title: "How to Actually See Red Squirrels in Formby — Local Tips",
    excerpt: "Yes, they're here. Yes, they're cute. But no, you won't see them if you visit at 2pm on a Saturday.",
    author: "Clare",
    date: "February 12, 2026",
    readTime: "5 min read",
    categorySlug: "wildlife",
    gradient: "linear-gradient(135deg, #8B6040 0%, #A8764A 100%)",
    image: "/blog-card-wildlife.webp",
  },
  {
    slug: "formby-pinewoods-walking-guide",
    title: "Walking in Formby Pinewoods — Trails, Tips & What to Bring",
    excerpt: "The Pinewoods are gorgeous, but come unprepared and you'll be miserable. Here's what I've learned.",
    author: "Clare",
    date: "February 10, 2026",
    readTime: "6 min read",
    categorySlug: "walks",
    gradient: "linear-gradient(135deg, #1A5C3A 0%, #2E8B5A 100%)",
    image: "/blog-card-walks.webp",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Hero */}
      <section className="relative h-64 md:h-80 bg-[#1C3220] overflow-hidden">
        <Image
          src="/blog-hero.webp"
          alt="Formby pinewoods — local guides and stories"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C3220]/50 via-[#1C3220]/40 to-[#1C3220]/85" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-2 text-[#C9A96E] mb-3">
            <Newspaper className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-widest uppercase">FormbyGuide Blog</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-3">
            Local guides, tips &amp;&nbsp;
            <br className="hidden sm:block" />
            Formby stories.
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md">
            Written by locals who live here. Real tips, honest reviews, and things worth knowing about Formby.
          </p>
        </div>
      </section>

      {/* Interactive content (search + tabs + grid) */}
      <Suspense fallback={
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <BlogClient posts={POSTS} categories={CATEGORIES} />
      </Suspense>

      {/* Coming soon footer */}
      <div className="max-w-6xl mx-auto px-4 pb-16 text-center border-t border-gray-100 pt-12">
        <span className="text-3xl">✍️</span>
        <h3 className="font-display text-xl font-bold text-[#1C3220] mt-3 mb-2">More posts coming soon</h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          We&rsquo;re adding new local guides every week. From the best spots for families to seasonal tips and honest restaurant reviews.
        </p>
        <div className="flex justify-center gap-4 mt-5">
          <a
            href="/things-to-do"
            className="text-sm font-semibold text-[#1C3220] border border-[#1C3220]/20 px-5 py-2.5 rounded-full hover:bg-[#1C3220] hover:text-white transition-all"
          >
            Things to do
          </a>
          <a
            href="/"
            className="text-sm font-semibold text-[#C9A96E] border border-[#C9A96E]/30 px-5 py-2.5 rounded-full hover:bg-[#C9A96E] hover:text-white transition-all"
          >
            Explore the guide
          </a>
        </div>
      </div>
    </div>
  );
}
