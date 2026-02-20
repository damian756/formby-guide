/**
 * Generate SEO-optimised descriptions for all Formby Guide businesses.
 * Template-based, deterministic (same business → same description every run).
 *
 * Usage: npm run generate-descriptions
 */

import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// ── Seeded RNG for deterministic output ──────────────────────────────────
function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return () => {
    h ^= h << 13; h ^= h >> 17; h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

// ── Data helpers ─────────────────────────────────────────────────────────

function extractArea(address: string): string {
  const areas = ["Freshfield", "Hightown", "Ainsdale", "Crosby", "Lydiate", "Altcar"];
  for (const a of areas) {
    if (address.includes(a)) return a;
  }
  return "Formby";
}

function areaContext(area: string): string {
  const contexts: Record<string, string> = {
    "Freshfield": "Freshfield, the quiet residential neighbourhood just south of Formby village",
    "Hightown":   "Hightown, the small coastal village at the southern end of the Sefton Coast",
    "Ainsdale":   "Ainsdale, a coastal village just north of Formby",
    "Crosby":     "Crosby, a short drive south down the coast",
  };
  return contexts[area] || "Formby village";
}

function ratingText(rating: number | null): string {
  if (!rating) return "";
  if (rating >= 4.8) return "one of the highest-rated in Formby";
  if (rating >= 4.5) return "consistently highly rated";
  if (rating >= 4.2) return "very well regarded by visitors and locals";
  if (rating >= 3.8) return "well established and popular";
  return "a well-known local choice";
}

function ratingIntro(rating: number | null, reviewCount: number | null): string {
  if (!rating) return "";
  const count = reviewCount && reviewCount > 20
    ? reviewCount >= 500  ? `over ${Math.floor(reviewCount / 100) * 100} Google reviews`
      : reviewCount >= 100 ? `${reviewCount} Google reviews`
      : `dozens of Google reviews`
    : "";
  if (rating >= 4.5 && count) return `With ${count} averaging ${rating.toFixed(1)} out of 5`;
  if (rating >= 4.0 && count) return `Rated ${rating.toFixed(1)}/5 across ${count}`;
  if (rating >= 4.0) return `Rated ${rating.toFixed(1)}/5 on Google`;
  return "";
}

function priceText(priceRange: string | null): string {
  if (!priceRange) return "";
  if (priceRange === "£") return "budget-friendly prices";
  if (priceRange === "££") return "mid-range prices that represent excellent value";
  if (priceRange === "£££") return "a premium experience at upscale prices";
  if (priceRange === "££££") return "a luxury, fine-dining price point";
  return "";
}

function hoursSnippet(openingHours: unknown): string {
  if (!openingHours || typeof openingHours !== "object") return "";
  const oh = openingHours as { weekdayText?: string[] };
  if (!oh.weekdayText?.length) return "";
  const lines = oh.weekdayText;
  if (lines.some(l => l.includes("Open 24 hours"))) return "Open every day, around the clock";
  const weekday = lines.find(l => l.startsWith("Monday"));
  if (weekday && !weekday.includes("Closed")) return "Open throughout the week";
  return "check the opening hours above before visiting";
}

// ── Template generators ───────────────────────────────────────────────────

type Business = {
  id: string;
  slug: string;
  name: string;
  address: string;
  postcode: string;
  shortDescription: string | null;
  rating: number | null;
  reviewCount: number | null;
  priceRange: string | null;
  openingHours: unknown;
  phone: string | null;
  website: string | null;
  category: { slug: string };
};

function generateRestaurant(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const rTxt = ratingText(b.rating);
  const price = priceText(b.priceRange);
  const hours = hoursSnippet(b.openingHours);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} has earned a firm following in ${area} — and it's easy to see why.`,
    `For anyone searching for a great meal in ${area}, ${b.name} is a name that comes up time and again.`,
    `${b.name} is a well-established favourite in ${areaContext(area)}.`,
    `If you're looking for somewhere to eat in Formby, ${b.name} is well worth considering.`,
    `Tucked into ${areaContext(area)}, ${b.name} is the kind of place visitors return to again and again.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} is ${rTxt} — a testament to the kitchen's consistency.`,
    `${rIntro}, it's clear that ${b.name} knows how to keep its customers happy.`,
  ] : [];

  const descParas = seedDesc ? [
    `${seedDesc}, making it a versatile choice whether you're after a quick bite or a longer meal.`,
    `${seedDesc}. That blend of quality and character is exactly what keeps people coming back.`,
  ] : [];

  const middles = [
    `${price ? `At ${price}, it` : "It"} strikes the balance between quality and accessibility that a village like Formby does well. Whether you're a visitor or a regular, the welcome feels genuine.`,
    `What sets ${b.name} apart is the attention to detail — the kind of place where things are done properly. Formby's restaurant scene punches well above its weight for a village this size, and ${b.name} is a big part of why.`,
    `Formby attracts a lot of day visitors from Liverpool and Manchester, and ${b.name} is exactly the kind of spot that justifies the drive.`,
    `The team takes obvious pride in what they serve${price ? `, and at ${price}, it makes for an easy choice` : ""}. There's a reliability here that's hard to fake.`,
  ];

  const closers = [
    `${hours ? `${hours}. ` : ""}It's worth booking ahead at weekends when the dining room fills up quickly. ${b.website ? "Check the website for the latest menus and reservation options." : "Call ahead to check availability."}`,
    `${hours ? `It's ${hours.toLowerCase()}` : "Worth checking the opening hours above"} before you make the trip. ${b.phone ? `You can reach them on ${b.phone}.` : ""}`,
    `Located in ${areaContext(area)}, ${b.name} is convenient whether you're in the village for the day or heading back from the National Trust beach. ${b.website ? "Visit their website for up-to-date menus." : ""}`,
    `${b.name} is one of those restaurants that locals tend to keep to themselves — but once you've been, you'll understand the loyalty.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateCafe(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} is a welcome find for anyone in search of good coffee and a proper break in ${area}.`,
    `For a relaxed coffee stop after a walk through the pinewoods or a morning on the beach, ${b.name} ticks all the right boxes.`,
    `${b.name} has become something of a local institution in ${area} — the kind of cafe you end up returning to every time you're nearby.`,
    `Sometimes a good cafe is all you need, and ${b.name} in ${area} has been delivering exactly that to locals and visitors alike.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, it's one of the more consistently well-reviewed cafes in the Formby area.`,
    `${rIntro}, guests single out the quality of the coffee and the unhurried atmosphere.`,
  ] : [];

  const descParas = seedDesc ? [
    `${seedDesc}. After a morning at the National Trust reserve, that's a difficult combination to resist.`,
    `${seedDesc} — the kind of simple pleasures that make a good cafe worth seeking out.`,
  ] : [];

  const middles = [
    `Formby has no shortage of cafes, but ${b.name} stands out for its commitment to doing things well. Good coffee, proper food, and staff who seem to genuinely enjoy what they do.`,
    `Whether you're stopping in before a day exploring the pinewoods and beach, or taking a break mid-afternoon, ${b.name} offers exactly the kind of restorative pause a good visit deserves.`,
    `There's something particularly satisfying about finding a great cafe in a village like Formby, and ${b.name} fits that description well.`,
  ];

  const closers = [
    `${hoursSnippet(b.openingHours) ? `${hoursSnippet(b.openingHours)}.` : ""} It's popular at peak times — expect a short wait on sunny weekend mornings when the National Trust car park is full.`,
    `${b.name} is the kind of cafe that makes ${area} feel like a neighbourhood worth knowing. Easy to recommend.`,
    `For visitors exploring Formby, ${b.name} makes a strong case as a pit-stop worth planning around. ${b.website ? "Check their website for opening times." : ""}`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generatePub(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} is one of ${area}'s most popular spots for a drink, with a loyal local following that speaks for itself.`,
    `Whether you're after a quiet pint after a coastal walk or somewhere to settle in for the evening, ${b.name} is a reliable choice.`,
    `${b.name} has carved out a reputation as one of the better pubs in ${areaContext(area)}.`,
    `For an evening out in ${area}, ${b.name} is a name that locals and visitors alike keep coming back to.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, it's clearly doing something right.`,
    `${rIntro}, ${b.name} has built a reputation as one of the more dependable pubs in the village.`,
  ] : [];

  const descParas = seedDesc ? [
    `${seedDesc}. That's a hard combination to beat for a post-walk pint.`,
    `${seedDesc}, and the atmosphere tends to reflect that.`,
  ] : [];

  const middles = [
    `Formby has a solid pub scene for a village its size, and ${b.name} holds its own comfortably. The kind of place where you can settle in for the evening without feeling rushed.`,
    `A lot of Formby's pubs do food, and ${b.name} is a good example of one that takes both sides seriously — worth knowing about whether you're after a meal or just a drink.`,
    `Post-beach and post-pinewoods pints are something of a Formby tradition, and ${b.name} is well placed to benefit. Dog-friendly, by all accounts.`,
  ];

  const closers = [
    `${hoursSnippet(b.openingHours) ? `${hoursSnippet(b.openingHours)}.` : ""} At weekends it can get busy, so arrive early if you want a good seat. ${b.phone ? `You can reach ${b.name} on ${b.phone}.` : ""}`,
    `${b.name} is one of those places that's easy to walk past and easy to stay in — the mark of a good local pub.`,
    `Worth knowing about for any visit to ${area}, whether you're here for the day or staying overnight.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateAccommodation(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const price = priceText(b.priceRange);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} offers a comfortable base for exploring Formby, the National Trust pinewoods, and the wider Sefton Coast.`,
    `For visitors planning a stay in ${area}, ${b.name} is a well-regarded option that combines convenience with character.`,
    `${b.name} puts you within easy reach of Formby Beach, the red squirrel reserve, and the village's restaurants and pubs.`,
    `Situated in ${areaContext(area)}, ${b.name} is a practical and appealing choice for exploring the Sefton Coast.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} has earned a strong reputation for the quality of its accommodation and welcome.`,
    `${rIntro}, guests consistently praise the comfort and convenient location.`,
  ] : [];

  const descParas = seedDesc ? [
    `${seedDesc}. For many guests, that's exactly what they're looking for in a Formby stay.`,
    `${seedDesc} — the sort of combination that makes it easy to settle in and relax.`,
  ] : [];

  const middles = [
    `${price ? `At ${price}, it` : "It"} represents solid value for the Sefton Coast, particularly during busy summer weekends when accommodation in the area books up quickly.`,
    `Formby is an easy drive from Liverpool and Manchester, making it a natural choice for a short break. Staying overnight rather than doing a day trip means you can properly explore the pinewoods and beach without rushing.`,
    `The National Trust reserve, Formby Beach, and the village itself are all within easy reach. It's a quiet corner of the north-west that visitors tend to return to, and ${b.name} gives them somewhere comfortable to do that.`,
  ];

  const closers = [
    `Formby accommodation books up fast on sunny summer weekends. ${b.website ? "Visit the website for availability and rates." : b.phone ? `Call ${b.phone} to check availability.` : "Book early to avoid disappointment."}`,
    `${b.name} is popular with both first-time visitors and those returning for another season on the Sefton Coast. ${b.website ? "Book directly through the website for the best rates." : ""}`,
    `For anyone visiting Formby, ${b.name} is well placed to make the most of what this stretch of the Lancashire coast has to offer.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateShopping(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} is a well-established presence on the Formby shopping scene, attracting a steady stream of locals and visitors.`,
    `Formby's shopping offer stretches along Chapel Lane and the surrounding streets, and ${b.name} is a good example of what the village has to offer.`,
    `For anyone browsing ${area}, ${b.name} is one worth knowing about.`,
    `${b.name} has built a loyal customer base in ${area} through a combination of good product and reliable service.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} has built a reputation that speaks for itself in a competitive independent retail environment.`,
  ] : [];

  const descParas = seedDesc ? [
    `${seedDesc}. In a village with a strong independent retail culture, that kind of offer stands out.`,
    `${seedDesc}, which has helped it carve out a loyal following in ${area}.`,
  ] : [];

  const middles = [
    `Formby's shopping is concentrated along Chapel Lane and Three Tuns Lane — a mix of independents and familiar names that rewards a proper browse. ${b.name} is part of what gives the village its retail character.`,
    `Whether you're a local or a visitor, ${b.name} offers the kind of experience that's increasingly hard to find online — knowledgeable staff, quality products, and the satisfaction of shopping somewhere that genuinely cares.`,
    `There are a couple of good charity shops on the high street too, if you're the kind of person who can't walk past one. But ${b.name} is one of the independent names worth seeking out.`,
  ];

  const closers = [
    `${hoursSnippet(b.openingHours) ? `${hoursSnippet(b.openingHours)}.` : ""} ${b.website ? "Browse online at their website, or visit in person for the full experience." : b.phone ? `Call ahead on ${b.phone} to check stock or opening times.` : ""}`,
    `${b.name} is the kind of local retailer that gives ${area} its character. Easy to recommend.`,
    `Worth a visit for anyone browsing Formby village, whether you're a local or spending the day after a walk through the pinewoods.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateActivities(b: Business, rng: () => number): string {
  const area = extractArea(b.address);
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `For visitors looking to get more out of their time in ${area}, ${b.name} offers exactly the kind of experience the area does well.`,
    `${b.name} is one of the more interesting options for anyone wanting to go beyond the beach and pinewoods in Formby.`,
    `Formby and the Sefton Coast offer a surprising range of leisure activities, and ${b.name} is one of the better options in the area.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} has earned a strong reputation among locals and visitors alike.`,
  ] : [];

  const descParas = seedDesc ? [`${seedDesc}.`] : [];

  const middles = [
    `The area around Formby — coastline, dunes, pinewoods, and the rural countryside inland — lends itself naturally to outdoor leisure. ${b.name} makes the most of that geography.`,
    `Whether you're travelling as a couple, a family, or a group, ${b.name} offers something a bit different from the usual beach and walk combination that Formby is known for.`,
    `Formby is easy to reach from Liverpool and Manchester, making it a popular destination for day trips. ${b.name} gives visitors another compelling reason to make the journey.`,
  ];

  const closers = [
    `${b.website ? "Visit their website for details on what's available, pricing and how to book." : b.phone ? `Call ${b.phone} to find out what's on offer and to make a booking.` : "See the details above for contact information."} Booking ahead is recommended at busy times.`,
    `${b.name} is one of those Formby finds that tends to surprise people. Well worth adding to the itinerary.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateNatureWalk(b: Business, rng: () => number): string {
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} is one of the natural highlights of the Sefton Coast — a place where the scale and quiet of the Lancashire coastline really hits home.`,
    `The Sefton Coast is one of the most significant stretches of coastline in England, and ${b.name} is one of the best places to experience it properly.`,
    `Formby's greatest draws are its natural spaces, and ${b.name} is a fine example of what makes this stretch of coast worth the visit.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} is clearly doing something right — though in this case, it's largely nature's doing.`,
  ] : [];

  const descParas = seedDesc ? [`${seedDesc}.`] : [];

  const middles = [
    `The National Trust manages a large section of the Formby coastline, protecting rare habitats including the red squirrel reserve, the ancient pinewoods, and the dune systems that stretch north towards Ainsdale. ${b.name} sits within or close to this remarkable landscape.`,
    `The Sefton Coast supports an extraordinary range of wildlife — from the famous red squirrel colony to natterjack toads, rare orchids, and migratory birds. ${b.name} gives visitors a way into this landscape at its best.`,
    `The pinewoods and dunes around Formby are a genuine antidote to city life — wide open, quiet, and surprisingly wild for somewhere so close to Liverpool and Manchester. ${b.name} is part of that experience.`,
  ];

  const closers = [
    `${b.name} is best visited early morning, particularly for wildlife. Parking via the National Trust app (L37 1YH) is strongly recommended — the car parks fill quickly on sunny days. NT members park free.`,
    `Whether you're a first-time visitor or a regular, ${b.name} is one of those places that looks different every season. Worth coming back for.`,
    `Easily reached from the National Trust car park on Victoria Road, Formby (L37 1YH). Dogs welcome on leads in the reserve. ${b.website ? b.website : ""}`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

function generateBeach(b: Business, rng: () => number): string {
  const rIntro = ratingIntro(b.rating, b.reviewCount);
  const seedDesc = b.shortDescription ? b.shortDescription.replace(/\.$/, "") : "";

  const openers = [
    `${b.name} is one of the natural highlights of the Sefton Coast — a beach where the scale and emptiness of the Lancashire coastline really hits home.`,
    `Formby Beach is one of the finest stretches of sand in the north-west of England, and ${b.name} is the heart of it.`,
    `Few things sum up Formby better than a walk along ${b.name}, where wide beaches meet open sky and the dunes stretch as far as you can see.`,
  ];

  const ratingParas = rIntro ? [
    `${rIntro}, ${b.name} is clearly delivering what visitors come for — which in this case is mostly nature's doing.`,
  ] : [];

  const descParas = seedDesc ? [`${seedDesc}.`] : [];

  const middles = [
    `The beach at Formby is wide, clean, and backed by dramatic sand dunes that separate it from the National Trust pinewoods behind. The walk from the car park through the pines to the beach takes about 15 minutes, and the moment you come over the dunes onto the open sand is genuinely worth it.`,
    `Dogs are welcome on Formby Beach year-round with no seasonal restrictions — one of the reasons local dog owners are so fond of the place. The beach is wide enough that it rarely feels crowded, even on busy summer days.`,
    `The dunes and coastal habitat around Formby Beach are managed by the National Trust and form part of a nationally important nature reserve. The beach itself is backed by the red squirrel pinewoods — most visitors do both in the same morning.`,
  ];

  const closers = [
    `Park at the National Trust car park, Victoria Road, Formby (L37 1YH). Book via the NT app before you leave — there's no signal on site, and the car parks fill quickly on sunny days. Free for NT members.`,
    `There's no lifeguard service at Formby Beach, so be aware of tides — the beach shelves gradually and the tide can come in faster than it looks. Check tide times before heading out for a long walk.`,
    `Formby Beach is best at low to mid tide when the full width of the sand is accessible. On a clear day the views across the Irish Sea towards the Lake District are genuinely spectacular.`,
  ];

  return [
    pick(openers, rng),
    ...(ratingParas.length ? [pick(ratingParas, rng)] : []),
    ...(descParas.length ? [pick(descParas, rng)] : []),
    pick(middles, rng),
    pick(closers, rng),
  ].join("\n\n");
}

// ── Main dispatcher ───────────────────────────────────────────────────────

function generateDescription(b: Business): string {
  const rng = seededRng(b.slug);
  const cat = b.category.slug;

  switch (cat) {
    case "restaurants":   return generateRestaurant(b, rng);
    case "cafes":         return generateCafe(b, rng);
    case "pubs":          return generatePub(b, rng);
    case "accommodation": return generateAccommodation(b, rng);
    case "shopping":      return generateShopping(b, rng);
    case "activities":    return generateActivities(b, rng);
    case "nature-walks":  return generateNatureWalk(b, rng);
    case "beaches":       return generateBeach(b, rng);
    default:              return generateActivities(b, rng);
  }
}

// ── Run ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("Generating descriptions for all Formby Guide businesses...\n");

  const businesses = await prisma.business.findMany({
    select: {
      id: true, slug: true, name: true, address: true, postcode: true,
      shortDescription: true, rating: true, reviewCount: true,
      priceRange: true, openingHours: true, phone: true, website: true,
      category: { select: { slug: true } },
    },
    orderBy: { name: "asc" },
  });

  console.log(`Found ${businesses.length} businesses\n`);

  let updated = 0;
  for (const b of businesses) {
    const description = generateDescription(b as Business);
    await prisma.business.update({
      where: { id: b.id },
      data: { description },
    });
    updated++;
    if (updated % 25 === 0) {
      console.log(`  ${updated}/${businesses.length} done...`);
    }
  }

  console.log(`\n✓ Complete — generated descriptions for ${updated} businesses.`);

  // Show 3 samples
  console.log("\n── Sample outputs ──\n");
  for (const b of businesses.slice(0, 3)) {
    console.log(`=== ${b.name} (${b.category.slug}) ===`);
    console.log(generateDescription(b as Business));
    console.log();
  }

  await prisma.$disconnect();
}

main().catch(console.error);
