export const CATEGORIES = [
  { slug: "nature-walks",  name: "Nature & Walks",  description: "National Trust trails, pinewoods and coastal paths in Formby" },
  { slug: "beaches",       name: "Beaches",          description: "Formby Beach and the Sefton Coast" },
  { slug: "restaurants",   name: "Restaurants",      description: "Best restaurants in Formby" },
  { slug: "cafes",         name: "Cafes & Coffee",   description: "Cafes and coffee shops in Formby" },
  { slug: "pubs",          name: "Pubs & Bars",      description: "Pubs and bars in Formby village" },
  { slug: "activities",    name: "Activities",       description: "Things to do and family activities in Formby" },
  { slug: "accommodation", name: "Places to Stay",   description: "Hotels, B&Bs and holiday lets in Formby" },
  { slug: "shopping",      name: "Shopping",         description: "Independent shops and boutiques in Formby" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function isValidCategory(slug: string): slug is CategorySlug {
  return CATEGORIES.some((c) => c.slug === slug);
}

export const SITE = {
  name: "FormbyGuide",
  domain: "formbyguide.co.uk",
  url: "https://www.formbyguide.co.uk",
  tagline: "Your complete guide to Formby — beach, pinewoods and village life",
  description: "Discover the best restaurants, beaches, walks and things to do in Formby. Your local guide to the National Trust pinewoods, red squirrels and the Sefton Coast.",
} as const;
