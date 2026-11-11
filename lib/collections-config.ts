// ── Collection Pages Config: FormbyGuide ────────────────────────────────────
// Programmatic tag-filtered listing pages at /collections/[slug].
// Each entry queries the DB for businesses matching the given tags + categories.
// Pages with fewer than MIN_LISTINGS results are served noindex automatically.

export const MIN_LISTINGS = 4;

export interface Collection {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  tags: string[];
  categorySlugs: string[];
  emoji: string;
  priority: number;
}

export const COLLECTIONS: Collection[] = [
  // ── Dog-friendly ──────────────────────────────────────────────────────────
  {
    slug: "dog-friendly-restaurants-formby",
    title: "Dog-Friendly Restaurants in Formby",
    metaDescription:
      "Restaurants in Formby listed as dog-friendly, with addresses and contact details. Check each restaurant's dog policy before you go.",
    intro:
      "Formby is a dog-walking town: beach walks, pinewood trails and dogs everywhere. These restaurants are listed in our directory as dog-friendly. Dog policies can differ by room and time of day, so phone ahead to check before you go.",
    tags: ["dog-friendly"],
    categorySlugs: ["restaurants"],
    emoji: "🐾",
    priority: 0.8,
  },
  {
    slug: "dog-friendly-cafes-formby",
    title: "Dog-Friendly Cafés in Formby",
    metaDescription:
      "Cafés in Formby listed as dog-friendly, for a coffee after a beach walk or pinewood trail. Addresses and contact details.",
    intro:
      "These cafés are listed in our directory as dog-friendly. Some welcome dogs inside and some only at outdoor tables, so check with the café before you go.",
    tags: ["dog-friendly"],
    categorySlugs: ["cafes"],
    emoji: "☕",
    priority: 0.78,
  },
  {
    slug: "dog-friendly-pubs-formby",
    title: "Dog-Friendly Pubs in Formby",
    metaDescription:
      "Pubs in Formby listed as dog-friendly, for a drink after a walk. Addresses and contact details.",
    intro:
      "These pubs are listed in our directory as dog-friendly. Many pubs allow dogs in the bar but not in dining areas, so check with the pub before you go.",
    tags: ["dog-friendly"],
    categorySlugs: ["pubs"],
    emoji: "🐶",
    priority: 0.78,
  },

  // ── Family-friendly ────────────────────────────────────────────────────────
  {
    slug: "family-friendly-things-to-do-formby",
    title: "Family-Friendly Things to Do in Formby",
    metaDescription:
      "Family-friendly things to do in Formby: activities and attractions listed as suitable for children, with addresses and contact details.",
    intro:
      "The beach, the pinewoods and the red squirrel trail are free to walk. These are activities and attractions in our directory listed as suitable for children. Check ages, prices and opening times with each one before you go.",
    tags: ["family-friendly"],
    categorySlugs: ["activities"],
    emoji: "👨‍👩‍👧‍👦",
    priority: 0.82,
  },

  // ── Location-based ─────────────────────────────────────────────────────────
  {
    slug: "restaurants-formby-village",
    title: "Restaurants in Formby Village",
    metaDescription:
      "Restaurants in and around Formby village centre and Chapel Lane, with addresses and contact details.",
    intro:
      "These are restaurants in and around Formby village centre, most within walking distance of each other. The listings give each one's address and contact details.",
    tags: ["village-centre"],
    categorySlugs: ["restaurants"],
    emoji: "🍽️",
    priority: 0.8,
  },
  {
    slug: "cafes-near-formby-beach",
    title: "Cafés Near Formby Beach",
    metaDescription:
      "Cafés near Formby Beach: where to get a coffee before or after a walk. Local independents, spring and summer concessions, and what to expect.",
    intro:
      "There is no café on site at Formby, only mobile concessions in the car parks in spring and summer. These are the cafés nearest the beach, for a coffee before or after your walk.",
    tags: ["near-beach"],
    categorySlugs: ["cafes"],
    emoji: "🌊",
    priority: 0.78,
  },

  // ── Free ──────────────────────────────────────────────────────────────────
  {
    slug: "free-things-to-do-formby",
    title: "Free Things to Do in Formby",
    metaDescription:
      "Free things to do in Formby: the beach, the pinewoods, nature reserves and other places in our directory listed as free.",
    intro:
      "The beach and the pinewood paths are free to walk; the National Trust car parks charge. These are the places in our directory listed as free.",
    tags: ["free"],
    categorySlugs: ["activities", "nature-walks", "beaches"],
    emoji: "🎟️",
    priority: 0.82,
  },

  // ── Golf: Royal Birkdale ──────────────────────────────────────────────────
  {
    slug: "stay-near-royal-birkdale",
    title: "Places to Stay Near Royal Birkdale",
    metaDescription:
      "Places to stay in and around Formby for a golf visit to Royal Birkdale Golf Club in Southport, with addresses and contact details.",
    intro:
      "Royal Birkdale Golf Club is on Waterloo Road, Southport, and hosted The 154th Open in July 2026. These are places to stay in and around Formby, which is on the Merseyrail line to Southport. Check the club's visitors page for tee time availability before you book.",
    tags: ["near-birkdale"],
    categorySlugs: ["accommodation"],
    emoji: "⛳",
    priority: 0.85,
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getAllCollectionSlugs(): string[] {
  return COLLECTIONS.map((c) => c.slug);
}
