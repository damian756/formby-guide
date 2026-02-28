// ── Blog Post Registry ────────────────────────────────────────────────────────
// Single source of truth for all blog post metadata.
// Adding a new post: add an entry here + create app/blog/_content/[slug].tsx

export interface BlogCategory {
  slug: string;
  label: string;
  color: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categorySlug: string;
  gradient: string;
  image: string;
  /** Metadata for the individual post page */
  metaTitle?: string;
  metaDescription?: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "family",       label: "Family",       color: "#2E6B3E", description: "Half term plans, days out and activities that work with kids." },
  { slug: "seasonal",     label: "Seasonal",     color: "#1C4A5A", description: "When to visit, what to expect, and seasonal tips." },
  { slug: "food",         label: "Food",         color: "#8B3A3A", description: "Honest restaurant reviews and places to eat in Formby." },
  { slug: "wildlife",     label: "Wildlife",     color: "#8B6040", description: "Red squirrels, birdwatching and Sefton Coast nature." },
  { slug: "walks",        label: "Walks",        color: "#1A5C3A", description: "Pinewoods trails, coastal walks and what to bring." },
  { slug: "conservation", label: "Conservation", color: "#4A6B1C", description: "The wildlife and habitat work that makes Formby special." },
];

export const BLOG_POSTS: BlogPost[] = [
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
  {
    slug: "natterjack-toads-formby",
    title: "Natterjack Toads at Formby — Britain's Rarest Amphibian",
    excerpt: "I had no idea these existed until five years ago. Turns out I'd been walking past a nationally important breeding site every week.",
    author: "Clare",
    date: "February 22, 2026",
    readTime: "5 min read",
    categorySlug: "conservation",
    gradient: "linear-gradient(135deg, #1C3220 0%, #4A6B1C 100%)",
    image: "/natterjack-pond.webp",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}
