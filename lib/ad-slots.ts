// ── Advertising spaces on FormbyGuide ─────────────────────────────────────────
// Every advert space on the site, keyed by a stable id. The id appears in the
// "advertise here" link (/advertise?space=<id>#<option>) and in contact-form
// enquiries, so do not rename one once it is live.
//
// To put an advert live (after the invoice is paid): set `sponsor` on the slot.
//   sponsor: {
//     name: "Business name",
//     url: "https://their-site.example",
//     text: "Up to 30 words about them.",
//     image: "/their-photo.webp",   // optional, a file under /public
//     until: "2027-02-28",          // optional, last day shown (UK date)
//   }
// Set it back to null when the booking ends. A sponsor whose `until` date has
// passed shows as the empty "advertise here" card on its own.
//
// Featured places on category pages are not set here: they come from the
// listing's `listingTier` ("featured" or "premium") in the database, at most
// two per category. The `featured-*` slots below only name the empty card.
//
// Rules: one advert per page at most; adverts are labelled on the card; paid
// links carry rel="sponsored noopener". No adverts on listing pages, reviews,
// "best of" guides, about, privacy, terms, disclosure, contact, claim-listing,
// the advertise page or the 404 page.

export type Sponsor = {
  name: string;
  url: string;
  /** Up to 30 words. */
  text: string;
  /** Optional image path under /public, e.g. "/sponsor-photo.webp". */
  image?: string;
  /** Optional last day the advert shows, "YYYY-MM-DD" (UK date). */
  until?: string;
};

export type AdOptionId =
  | "featured"
  | "guide-sponsor"
  | "home-card"
  | "sponsored-article"
  | "seasonal"
  | "network";

export type AdOption = {
  id: AdOptionId;
  name: string;
  /** Headline price, e.g. "£29". All prices are plus VAT. */
  price: string;
  /** "a month", "one-off", "a season". */
  per: string;
  /** Short line under the price. */
  note: string;
  /** Used on the empty card: "from £29 a month". */
  from: string;
  term: string;
  points: string[];
};

export const AD_OPTIONS: AdOption[] = [
  {
    id: "featured",
    name: "Featured in a category",
    price: "£29",
    per: "a month",
    note: "or £290 for a year",
    from: "from £29 a month",
    term: "Monthly, cancel with a month's notice",
    points: [
      "Top of one category page: Restaurants, Cafés, Pubs, Places to Stay, Activities or Shopping",
      "Marked Featured, so visitors know it is a paid place",
      "Your listing shown first, with your photo and up to 30 words about you",
      "No more than two featured places in any category",
    ],
  },
  {
    id: "guide-sponsor",
    name: "Guide sponsor",
    price: "£49",
    per: "a month",
    note: "3 months minimum",
    from: "from £49 a month",
    term: "One sponsor per guide",
    points: [
      "The Formby Beach, Pinewoods, Red Squirrels, Parking or Things to Do guide, or one of our seasonal and walking posts",
      "Your card shown once at the end of the guide, labelled Sponsor",
      "Adverts never appear inside a review, and paying for a space does not change what we write.",
    ],
  },
  {
    id: "home-card",
    name: "Home page card",
    price: "£59",
    per: "a month",
    note: "3 months minimum",
    from: "from £59 a month",
    term: "One business at a time",
    points: [
      "A card on the FormbyGuide home page, labelled Advertisement",
      "Photo, one line about you and a link",
      "Change the photo and line once a month if you like",
    ],
  },
  {
    id: "sponsored-article",
    name: "Sponsored article",
    price: "£149",
    per: "one-off",
    note: "live for 12 months",
    from: "£149 one-off",
    term: "Labelled Sponsored at the top",
    points: [
      "A useful post about something you run: an event, a walk, a seasonal menu",
      "Written with you, checked for facts, in plain English",
      "Bylined \"Sponsored by\" your business, and never presented as a review",
    ],
  },
  {
    id: "seasonal",
    name: "Seasonal package",
    price: "£99",
    per: "a season",
    note: "winter (Dec to Feb) or summer (Jul to Aug)",
    from: "£99 a season",
    term: "Book a season ahead",
    points: [
      "Sponsor of that season's guide, for example Formby in Winter",
      "Featured in your category for the same weeks",
    ],
  },
];

export const NETWORK_BUNDLE: AdOption = {
  id: "network",
  name: "Sefton Coast bundle",
  price: "£149",
  per: "a month",
  note: "3 months minimum",
  from: "from £149 a month",
  term: "One invoice",
  points: [
    "Home page card on FormbyGuide, SouthportGuide, SeftonLinks and Sefton Coast Wildlife",
    "Featured in your category on FormbyGuide, and Pro placement on SouthportGuide",
    "One invoice for all four sites",
  ],
};

export type SlotKind = "home" | "featured" | "guide" | "post";

export type AdSlotDef = {
  id: string;
  kind: SlotKind;
  option: AdOptionId;
  /** Names the space, e.g. "Sponsor of the Formby Beach guide". */
  title: string;
  /** Short name used on the empty card, e.g. "Formby Beach". */
  label: string;
  sponsor: Sponsor | null;
};

function guide(id: string, label: string): AdSlotDef {
  return { id, kind: "guide", option: "guide-sponsor", title: `Sponsor of the ${label} guide`, label, sponsor: null };
}

function post(slug: string, label: string): AdSlotDef {
  return { id: `post-${slug}`, kind: "post", option: "guide-sponsor", title: `Sponsor of the ${label} post`, label, sponsor: null };
}

function featured(category: string, label: string): AdSlotDef {
  return { id: `featured-${category}`, kind: "featured", option: "featured", title: `Featured in ${label}`, label, sponsor: null };
}

const SLOT_LIST: AdSlotDef[] = [
  // Home page: after the "Local guides & stories" strip.
  { id: "home-card", kind: "home", option: "home-card", title: "Home page card", label: "Home page", sponsor: null },

  // Category pages: the empty card shows when fewer than two places are Featured.
  featured("restaurants", "Restaurants"),
  featured("cafes", "Cafés"),
  featured("pubs", "Pubs & Bars"),
  featured("accommodation", "Places to Stay"),
  featured("activities", "Activities"),
  featured("shopping", "Shopping"),

  // Guide sponsors: one card at the end of each guide.
  guide("guide-formby-beach", "Formby Beach"),
  guide("guide-formby-pinewoods", "Formby Pinewoods"),
  guide("guide-red-squirrels", "Red Squirrels"),
  guide("guide-parking-formby-beach", "Parking at Formby Beach"),
  guide("guide-things-to-do", "Things to Do in Formby"),

  // End of post: seasonal and walks posts that do not name or judge a business.
  post("formby-beach-weather-guide", "Formby Beach Weather"),
  post("spring-formby-beach-april", "Formby Beach in Spring"),
  post("sunset-formby-point", "Sunset at Formby Point"),
  post("formby-in-winter", "Formby in Winter"),
  post("formby-cycling-routes", "Cycling in Formby"),
  post("ainsdale-beach-walk-from-formby", "Formby to Ainsdale Walk"),
  post("formby-nt-autumn-visit", "Formby in Autumn"),
  post("prehistoric-footprints-formby-point", "Prehistoric Footprints"),
];

export const AD_SLOTS: Record<string, AdSlotDef> = Object.fromEntries(SLOT_LIST.map((s) => [s.id, s]));

/** Categories that can show Featured places (and the empty Featured card). */
export const FEATURED_CATEGORIES = ["restaurants", "cafes", "pubs", "accommodation", "activities", "shopping"];

/** Listing tiers that count as a paid Featured place. */
export const FEATURED_TIERS = ["featured", "premium"];

export function getAdOption(id: string): AdOption | undefined {
  if (id === NETWORK_BUNDLE.id) return NETWORK_BUNDLE;
  return AD_OPTIONS.find((o) => o.id === id);
}

/** Today's date in the UK as "YYYY-MM-DD". */
function ukToday(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
}

/** The slot's sponsor if one is set and its `until` date has not passed. */
export function activeSponsor(slot: AdSlotDef): Sponsor | null {
  const s = slot.sponsor;
  if (!s) return null;
  if (s.until && s.until < ukToday()) return null;
  return s;
}

/** Link from an empty card to the advertise page, naming the space. */
export function advertiseHref(slot: AdSlotDef): string {
  return `/advertise?space=${encodeURIComponent(slot.id)}#${slot.option}`;
}

/** Link from the advertise page to the contact form. */
export function enquiryHref(space?: string): string {
  return `/contact?topic=advertise${space ? `&space=${encodeURIComponent(space)}` : ""}`;
}

/**
 * What a `space` value from a URL refers to: a slot title or an option name.
 * Only known ids are accepted, so nothing typed into a URL is echoed back.
 */
export function describeSpace(space: string | undefined): string | null {
  if (!space) return null;
  const slot = AD_SLOTS[space];
  if (slot) return slot.title;
  const option = getAdOption(space);
  return option ? option.name : null;
}
