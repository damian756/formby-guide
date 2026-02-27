// ── Guides Config ────────────────────────────────────────────────────────────
// Single source of truth for all editorial guide pages on FormbyGuide.co.uk.
// Drives: /guides/ index, sitemap, related guides, dynamic listings, nav.

export type GuideCategory =
  | "nature-walks"
  | "practical"
  | "areas"
  | "food-drink"
  | "events";

export type GuideStatus = "published" | "coming-soon";

export interface Guide {
  slug: string;
  title: string;
  /** One-liner shown on index cards */
  description: string;
  /** Longer excerpt used in SEO meta */
  excerpt: string;
  category: GuideCategory;
  heroImage: string;
  /**
   * Overrides the default /guides/[slug] URL.
   * Used for the 3 existing top-level pages that keep their current URLs for SEO.
   */
  url?: string;
  seoPriority: number;
  datePublished: string;
  dateUpdated: string;
  tags: string[];
  status: GuideStatus;
  listingFilter?: {
    categorySlugs?: string[];
    tags?: string[];
  };
  metaTitle?: string;
  metaDescription?: string;
}

export const GUIDE_CATEGORIES: Record<GuideCategory, { label: string; description: string }> = {
  "nature-walks": {
    label: "Nature & Walks",
    description: "The National Trust pinewoods, red squirrel reserve, and the Sefton coast.",
  },
  practical: {
    label: "Practical",
    description: "Parking, dog rules, and everything useful before you arrive.",
  },
  areas: {
    label: "Areas",
    description: "Formby village, Chapel Lane, and the neighbourhoods worth knowing.",
  },
  "food-drink": {
    label: "Food & Drink",
    description: "Where to eat, drink, and have coffee in Formby.",
  },
  events: {
    label: "Events",
    description: "The Open Championship, seasonal events, and what's on.",
  },
};

export const GUIDES: Guide[] = [
  // ── Nature & Walks ───────────────────────────────────────────────────────
  {
    slug: "formby-beach",
    title: "Formby Beach",
    description: "National Trust beach with sand dunes. Postcode, parking, dogs, and what to expect.",
    excerpt:
      "Formby Beach guide — postcode L37 1YH, NT app parking, dog rules, facilities, sand dunes, and honest advice on what to expect. Written by a Formby local.",
    category: "nature-walks",
    heroImage: "/formby-beach-hero.jpg",
    url: "/formby-beach",
    seoPriority: 0.95,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["beach", "national-trust", "dog-friendly", "parking", "dunes"],
    status: "published",
    listingFilter: {
      categorySlugs: ["cafes", "activities", "beaches"],
      tags: ["beach", "seafront"],
    },
    metaTitle: "Formby Beach | Postcode, Parking, Dogs & What to Expect | FormbyGuide",
    metaDescription:
      "Formby Beach guide — postcode L37 1YH, NT app parking (download before you leave), dog rules, sand dunes, and honest advice from a local.",
  },
  {
    slug: "red-squirrels-formby",
    title: "Red Squirrels in Formby",
    description: "One of England's best places to see red squirrels. When to go, where to look, what to bring.",
    excerpt:
      "The Formby red squirrel reserve — when to visit (September to February peak), which trails have the highest sighting rates, what to bring, and NT parking info.",
    category: "nature-walks",
    heroImage: "/squirrels-hero.webp",
    url: "/red-squirrels-formby",
    seoPriority: 0.92,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["red-squirrels", "national-trust", "wildlife", "walking"],
    status: "published",
    listingFilter: {
      categorySlugs: ["cafes", "nature-walks"],
      tags: ["wildlife", "national-trust"],
    },
    metaTitle: "Red Squirrels in Formby | Where to See Them & What to Expect | FormbyGuide",
    metaDescription:
      "Everything you need to see red squirrels in Formby — best months, which trails, what to bring, NT parking (L37 1YH). Written by a local who walks this route regularly.",
  },
  {
    slug: "formby-pinewoods",
    title: "Formby Pinewoods",
    description: "Ancient pine woodland running to the sea. Walks, wildlife, and light through the trees.",
    excerpt:
      "Formby Pinewoods guide — trails, red squirrels, birdwatching, seasonal tips, and everything you need to plan your visit to one of the Sefton Coast's best walks.",
    category: "nature-walks",
    heroImage: "/pinewoods-hero.webp",
    url: "/formby-pinewoods",
    seoPriority: 0.90,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["pinewoods", "national-trust", "walking", "wildlife", "trails"],
    status: "published",
    listingFilter: {
      categorySlugs: ["cafes", "nature-walks", "activities"],
      tags: ["pinewoods", "national-trust"],
    },
    metaTitle: "Formby Pinewoods | Walks, Wildlife & Complete Guide | FormbyGuide",
    metaDescription:
      "Formby Pinewoods — trails, wildlife, red squirrels, birdwatching, and what to bring. The complete guide to one of the Sefton Coast's finest walks.",
  },

  // ── Practical ────────────────────────────────────────────────────────────
  {
    slug: "parking-formby-beach",
    title: "Parking at Formby Beach",
    description: "NT car park, the app you need, postcode L37 1YH, prices, and when it fills.",
    excerpt:
      "Parking at Formby Beach — postcode L37 1YH, National Trust app booking (download before you leave — signal in the car park is terrible), prices, and when to arrive.",
    category: "practical",
    heroImage: "/beach-car-park-sign.webp",
    seoPriority: 0.88,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["parking", "practical", "national-trust", "beach"],
    status: "published",
    metaTitle: "Parking at Formby Beach | NT Car Park, Postcode & Tips | FormbyGuide",
    metaDescription:
      "Parking at Formby Beach — postcode L37 1YH, National Trust app booking, prices, peak times, and alternative parking nearby. Everything you need before you leave home.",
  },
  {
    slug: "dog-friendly-formby",
    title: "Dog-Friendly Formby",
    description: "Beach access rules, best off-lead walks, and the pubs and cafés that actually mean it.",
    excerpt:
      "Formby is genuinely good for dogs — the NT beach (with seasonal rules), the pinewoods, and a cluster of dog-welcoming pubs and cafés in the village.",
    category: "practical",
    heroImage: "/dog-on-formby-beach.jpg",
    seoPriority: 0.85,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["dog-friendly", "practical", "beach", "pubs", "walks"],
    status: "published",
    listingFilter: {
      categorySlugs: ["pubs", "cafes", "restaurants"],
      tags: ["dog-friendly"],
    },
    metaTitle: "Dog-Friendly Formby | Beach Rules, Walks, Pubs & Cafés | FormbyGuide",
    metaDescription:
      "Formby is genuinely dog-friendly. Beach access rules, best off-lead walks in the pinewoods, and the pubs and cafés that actually welcome dogs.",
  },

  // ── Areas ────────────────────────────────────────────────────────────────
  {
    slug: "formby-village",
    title: "Formby Village",
    description: "Chapel Lane, independent shops, proper restaurants — the bit most visitors miss.",
    excerpt:
      "Formby village is 10 minutes from the beach and most visitors never go. Chapel Lane has independent shops, proper restaurants, and Emily's. The complete guide.",
    category: "areas",
    heroImage: "/about-village-street.webp",
    seoPriority: 0.85,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["village", "shopping", "restaurants", "chapel-lane", "independent"],
    status: "published",
    listingFilter: {
      categorySlugs: ["restaurants", "cafes", "shopping", "pubs"],
      tags: ["village", "chapel-lane"],
    },
    metaTitle: "Formby Village | Chapel Lane, Shops & Restaurants Guide | FormbyGuide",
    metaDescription:
      "Formby village guide — Chapel Lane, independent shops, the best restaurants in Formby, and the part of town most visitors never see.",
  },

  // ── Food & Drink ─────────────────────────────────────────────────────────
  {
    slug: "best-restaurants-formby",
    title: "Best Restaurants in Formby",
    description: "Clare's honest guide — Emily's, Left Bank Brasserie, The Sparrowhawk, and more.",
    excerpt:
      "The best restaurants in Formby right now — Clare's honest ranking. Emily's, Left Bank Brasserie, The Sparrowhawk, Don Luigi, and a few more worth knowing about.",
    category: "food-drink",
    heroImage: "/blog-card-food.webp",
    seoPriority: 0.88,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["restaurants", "food", "dining", "village"],
    status: "published",
    listingFilter: {
      categorySlugs: ["restaurants"],
    },
    metaTitle: "Best Restaurants in Formby 2026 | Honest Local Guide | FormbyGuide",
    metaDescription:
      "The best restaurants in Formby — Clare's honest guide. Emily's, Left Bank Brasserie, The Sparrowhawk, Don Luigi. No sponsored results.",
  },

  // ── Events ───────────────────────────────────────────────────────────────
  {
    slug: "the-open-2026",
    title: "The Open Championship 2026 — Stay in Formby",
    description: "Royal Birkdale is 2 miles from Formby. Where to stay, how to get there, where to eat.",
    excerpt:
      "The Open Championship 2026 is at Royal Birkdale — two miles from Formby. Where to stay in Formby, how to get to the course, and where to eat during Open week.",
    category: "events",
    heroImage: "/about-formby-railway.webp",
    url: "/the-open-2026",
    seoPriority: 0.90,
    datePublished: "2026-02-27",
    dateUpdated: "2026-02-27",
    tags: ["open-2026", "golf", "royal-birkdale", "accommodation", "events"],
    status: "published",
    listingFilter: {
      categorySlugs: ["accommodation", "restaurants"],
      tags: ["open-2026"],
    },
    metaTitle: "Stay in Formby for The Open 2026 | Royal Birkdale Guide | FormbyGuide",
    metaDescription:
      "The Open Championship 2026 is at Royal Birkdale — 2 miles from Formby. Where to stay, how to get to the course, where to eat during Open week.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────

/** Resolve the display URL for a guide */
export function getGuideUrl(guide: Guide): string {
  return guide.url ?? `/guides/${guide.slug}`;
}

/** Get a single guide by slug. Throws if not found. */
export function getGuide(slug: string): Guide {
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Guide not found: ${slug}`);
  return guide;
}

/** Get all published guides. */
export function getPublishedGuides(): Guide[] {
  return GUIDES.filter((g) => g.status === "published");
}

/** Get related guides for a given guide (by shared tags or category, excluding self). */
export function getRelatedGuides(slug: string, limit = 4): Guide[] {
  const current = GUIDES.find((g) => g.slug === slug);
  if (!current) return [];

  const scored = GUIDES.filter((g) => g.slug !== slug && g.status === "published").map((g) => {
    let score = 0;
    if (g.category === current.category) score += 2;
    score += g.tags.filter((t) => current.tags.includes(t)).length;
    return { guide: g, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.guide);
}
