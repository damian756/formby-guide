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
  {
    slug: "formby-day-trip-from-liverpool",
    title: "Formby Day Trip from Liverpool — The Honest Guide",
    excerpt: "25 minutes on the Merseyrail. Beach, pinewoods, red squirrels, a decent lunch. Here's how to do it properly — and what most day trip guides miss.",
    author: "Clare",
    date: "March 12, 2026",
    readTime: "7 min read",
    categorySlug: "seasonal",
    gradient: "linear-gradient(135deg, #1C4A5A 0%, #2E6B3E 100%)",
    image: "/blog-card-day-trip.webp",
    metaTitle: "Formby Day Trip from Liverpool (or Manchester) — Honest Local Guide",
    metaDescription: "How to do a Formby day trip from Liverpool properly. Train times, what to do, where to eat, and how long you actually need. Written by a Formby local.",
  },
  {
    slug: "dogs-formby-beach",
    title: "Can You Take Dogs to Formby Beach? Everything Worth Knowing",
    excerpt: "Short answer: yes. Longer answer: it depends on the time of year and which part of the beach you're on. Here's the honest version.",
    author: "Clare",
    date: "March 13, 2026",
    readTime: "6 min read",
    categorySlug: "wildlife",
    gradient: "linear-gradient(135deg, #1C3220 0%, #1A5C3A 100%)",
    image: "/blog-card-dogs-beach.webp",
    metaTitle: "Can You Take Dogs to Formby Beach? Rules, Seasons & Where to Walk",
    metaDescription: "Yes — dogs are allowed at Formby Beach, but seasonal restrictions apply May to September. Full guide to which sections, where to walk, and dog-friendly pubs nearby.",
  },
  {
    slug: "crosby-beach-iron-men-formby",
    title: "Crosby Beach and the Iron Men — How to Add it to a Formby Day Out",
    excerpt: "100 cast-iron figures standing in the sea. 20 minutes from Formby. Free. Most people who've lived near here for years have never been.",
    author: "Clare",
    date: "March 14, 2026",
    readTime: "6 min read",
    categorySlug: "walks",
    gradient: "linear-gradient(135deg, #1C3220 0%, #2A4A8B 100%)",
    image: "/blog-card-crosby-iron-men.webp",
    metaTitle: "Crosby Beach Iron Men — Visiting Another Place + Combining with Formby",
    metaDescription: "Antony Gormley's Another Place at Crosby Beach is 20 minutes from Formby. How to combine both into one day — tide timing, parking, and what to actually expect.",
  },
  {
    slug: "spring-formby-beach-april",
    title: "Formby Beach in Spring — Why April Is the Best Month to Visit",
    excerpt: "April at Formby is brilliant. The beach is back, the dunes are greening up, the red squirrels are out and about, and it's not yet the summer crowds. Here's what makes spring the best time to visit.",
    author: "Clare",
    date: "March 17, 2026",
    readTime: "6 min read",
    categorySlug: "seasonal",
    gradient: "linear-gradient(135deg, #1C4A5A 0%, #2E6B3E 100%)",
    image: "/blog-card-spring-formby.webp",
    metaTitle: "Formby Beach in April — Spring Visit Guide, What to Expect",
    metaDescription: "April is one of the best months to visit Formby Beach. Fewer crowds, green dunes, red squirrels active, and the Natterjack Toads starting to call. Practical guide to spring at Formby.",
  },
  {
    slug: "best-cafes-formby-village",
    title: "Best Cafes in Formby Village — Where to Eat, Drink and Sit Down",
    excerpt: "Formby village has a quiet little cafe scene that most visitors miss entirely. A handful of independents doing good coffee, decent cake, and proper lunches. Here's where to go.",
    author: "Clare",
    date: "March 18, 2026",
    readTime: "5 min read",
    categorySlug: "food",
    gradient: "linear-gradient(135deg, #8B3A3A 0%, #4A2A1A 100%)",
    image: "/blog-card-cafes-formby.webp",
    metaTitle: "Best Cafes in Formby Village — Independent Coffee Shops and Lunch Spots",
    metaDescription: "The honest guide to cafes in Formby village — which ones are worth it, what to order, and where to go after the beach. From the NT cafe to village independents.",
  },
  {
    slug: "formby-village-walk-guide",
    title: "Formby Village Walk — Chapel Lane, the High Street, and What's Worth Stopping For",
    excerpt: "Formby village has more to it than most people realise. A proper village high street, independent shops, a couple of good pubs, and enough to keep you occupied for a proper afternoon. Here's how to do it.",
    author: "Clare",
    date: "March 19, 2026",
    readTime: "5 min read",
    categorySlug: "walks",
    gradient: "linear-gradient(135deg, #1A5C3A 0%, #3A5C1A 100%)",
    image: "/blog-card-village-walk.webp",
    metaTitle: "Formby Village Walk — Chapel Lane, High Street & Things to See",
    metaDescription: "A guide to walking around Formby village — Chapel Lane boutiques, independent shops, the best pubs and cafes, and how long it actually takes. Good for a rainy afternoon or post-beach wind-down.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}
