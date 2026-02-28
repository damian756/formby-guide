// ── Collection Pages Config — FormbyGuide ────────────────────────────────────
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
      "Dog-friendly restaurants in Formby — places that genuinely welcome dogs, not just tolerate them. Updated local list with honest ratings.",
    intro:
      "Formby is a dog-walking town at heart — beach walks, pinewood trails, and a Labrador on every corner. So it's fair to expect the restaurants to keep up. These are the places that actually mean dog-friendly: water bowls, space for muddy dogs, staff who don't visibly panic when yours shakes itself at the door. Worth phoning ahead for weekend evenings.",
    tags: ["dog-friendly"],
    categorySlugs: ["restaurants"],
    emoji: "🐾",
    priority: 0.8,
  },
  {
    slug: "dog-friendly-cafes-formby",
    title: "Dog-Friendly Cafés in Formby",
    metaDescription:
      "Dog-friendly cafés in Formby — coffee stops that welcome dogs after a beach walk or pinewood trail. Honest local list.",
    intro:
      "After a walk through the pinewoods or along the beach, a decent coffee is non-negotiable. These are Formby's cafés that welcome dogs properly — inside or with genuinely sheltered outdoor space, not just a sign on the door and a damp corner. Most put water bowls out. A few have biscuits for the dog, which always helps.",
    tags: ["dog-friendly"],
    categorySlugs: ["cafes"],
    emoji: "☕",
    priority: 0.78,
  },
  {
    slug: "dog-friendly-pubs-formby",
    title: "Dog-Friendly Pubs in Formby",
    metaDescription:
      "Dog-friendly pubs in Formby — the welcoming ones, not just the ones that say so. Post-walk pints with your dog in tow.",
    intro:
      "Post-walk pub visits in Formby are a local institution. The question is which pubs are actually dog-welcoming rather than just dog-tolerating. These are the pubs where dogs are inside, welcome, and don't get the side-eye from the bar. Good food at most of them too — useful after a long walk.",
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
      "Family-friendly things to do in Formby — activities, attractions and days out that actually work with kids. Honest local list.",
    intro:
      "Formby is genuinely good for families — the beach, the red squirrels, the pinewoods, and enough to keep kids busy for a full day without spending a fortune. These are the activities and attractions worth the trip with children in tow, from toddlers to teenagers who claim they're bored of everything.",
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
      "Restaurants in Formby village — the best places to eat on and around Chapel Lane and the village centre. Local list, honest ratings.",
    intro:
      "Formby village has a decent restaurant scene for its size — a handful of genuinely good independents within walking distance of each other. Chapel Lane and the surrounding streets have most of them. These are the village restaurants worth booking, from a casual dinner to a proper occasion.",
    tags: ["village-centre"],
    categorySlugs: ["restaurants"],
    emoji: "🍽️",
    priority: 0.8,
  },
  {
    slug: "cafes-near-formby-beach",
    title: "Cafés Near Formby Beach",
    metaDescription:
      "Cafés near Formby Beach — where to get a coffee before or after a walk. NT café, local independents, and what to expect.",
    intro:
      "The coffee situation near Formby Beach is better than it used to be. The NT café is the obvious choice — convenient, decent, not cheap. But there are a few others worth knowing about if you want something a bit different before or after your walk. These are the closest options with your sandy boots still on.",
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
      "Free things to do in Formby — the beach, pinewoods, nature reserves and more that cost nothing. Honest local list.",
    intro:
      "Formby's best things are mostly free — the beach is free to walk (NT car park isn't, but the beach itself is), the pinewoods paths are open, and the red squirrel trails cost nothing to walk. These are the attractions, outdoor spaces, and things worth doing in Formby that genuinely don't cost a penny.",
    tags: ["free"],
    categorySlugs: ["activities", "nature-walks", "beaches"],
    emoji: "🎟️",
    priority: 0.82,
  },

  // ── Open 2026 ─────────────────────────────────────────────────────────────
  {
    slug: "stay-near-royal-birkdale",
    title: "Places to Stay Near Royal Birkdale",
    metaDescription:
      "Accommodation near Royal Birkdale Golf Club — where to stay in Formby for The Open 2026. B&Bs, holiday lets, and what's available.",
    intro:
      "Royal Birkdale is two miles up the road from Formby. If you're coming for The Open 2026 and the obvious Birkdale and Southport options are already full, Formby is the sensible alternative — one stop on the train, decent accommodation, and noticeably less chaos. Book as early as you can; July 2026 availability across the whole area is tight.",
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
