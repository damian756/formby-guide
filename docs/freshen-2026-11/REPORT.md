# Formby Guide freshen-up, November 2026

Internal report. Work done 11 Nov 2026. Screenshots are in `docs/freshen-2026-11/screens/`; source captures in `docs/freshen-2026-11/sources/`. The shared playbook for all four sites is `docs/GUIDE-SITES-PLAYBOOK-2026-11.md`.

## 1. What was found (ranked)

1. **Wrong visitor facts, site-wide.** The National Trust's Formby page (fetched 11 Nov 2026) gives Victoria Road car park as **L37 1LJ** and Lifeboat Road as **L37 2EB**. The site used **L37 1YH** 108 times in 44 files; postcodes.io puts L37 1YH about 750 m east of the NT entrance, on a residential stretch of Victoria Road. The site also told visitors 65 times in 30 files to "book via the NT app", quoted £6 or £7 parking, and described an on-site "NT café". The NT now runs ticketless ANPR car parks: pay at the machine or with JustPark, no booking, members and Blue Badge holders free, food only from mobile vans in spring and summer. The beach page also said there was "no lifeguard service"; the NT says RNLI lifeguards cover Lifeboat Road at peak times. Files: almost every page and post; worst on `app/guides/parking-formby-beach/page.tsx`, `app/formby-beach/FormbyBeachContent.tsx`, `app/red-squirrels-formby/RedSquirrelsContent.tsx`, `app/formby-pinewoods/PinewoodsContent.tsx`.
2. **Home page showing last season's posts.** "Local guides & stories" was hard-coded to Easter 2026, The Open 2026 and an April wild garlic post (`app/page.tsx`).
3. **A post listed twice.** `wild-garlic-formby-pinewoods` had two entries in `lib/blog-posts.ts` (April and May versions, one component), so it appeared twice on the blog index and in the sitemap and caused a React duplicate-key error. The footer had two links to `/claim-listing`, causing a second duplicate-key error (`app/layout.tsx`). These were the "1 Issue / 2 Issues" badges in dev.
4. **Em dashes in customer-facing copy**, against `C:\Projects\CLAUDE.md`: four posts and one excerpt (`blackpool-or-formby-family-day-out`, `formby-day-trip-from-blackpool`, `formby-in-may`, `left-bank-brasserie-formby`, `lib/blog-posts.ts`).
5. **Emoji used as icons** on the home page (hero, quick links, category tiles, fact strip, planning box, cards), the landing pages, guides, the author box ("Mum of 4", "15+ years local" badges) and the about page. A pulsing "live" dot on the static "Formby, Merseyside" label (`app/page.tsx`).
6. **Slogans and empty claims**: "Your definitive guide", "Skip the tourist traps. Here is what you actually need to know.", "Wide, wild and brilliant", "Written by locals... Real tips, honest reviews", "no fluff", "Discover the best...", and a blog footer promising "new local guides every week" (the last post was 9 September).
7. **Factual slips in slogans**: "Ancient pinewoods" / "ancient coastal woodland" (the pines were planted; the site's own pinewoods page says so).
8. **Stale Open 2026 references** outside the Open pages: footer link, accommodation intro, advertise page.
9. **Author box contradicting the disclosure.** `ClareBio.tsx` said "All tips are based on Clare's personal experience" while the about page says Clare is a persona.

What works and was left alone: the overall layout, the photography in the gallery strip (real local shots), the category and listing pages, the blog index filters, post templates.

## 2. What changed

| Change | Files | Screenshots |
|---|---|---|
| Postcode L37 1YH to L37 1LJ everywhere (mechanical, 108 lines) | 44 files | `after-formby-beach-*`, `after-red-squirrels-formby-*` |
| Parking, payment, booking, café, lifeguard and station facts rewritten to match the NT page (about 120 statements) | 40 files incl. `app/guides/parking-formby-beach/page.tsx` | `after-guides-parking-formby-beach-*` |
| Home: newest three posts now come from `BLOG_POSTS` by date | `app/page.tsx` | `before-home-1440`, `after-home-1440` |
| Duplicate wild garlic entry removed; duplicate footer link and Open 2026 footer link removed | `lib/blog-posts.ts`, `app/layout.tsx` | `before-blog-*`, `after-blog-*` |
| Emoji icons replaced with the lucide icons the file already imported, or removed | `app/page.tsx`, `app/[category]/page.tsx`, landing pages, guides, collections, nav, 404, blog index | `before-home-390`, `after-home-390`, `before-nature-walks-1440` |
| Author box: emoji badges and pill removed; "personal experience" line replaced with "Clare is FormbyGuide's editorial voice" linking to /about | `app/blog/ClareBio.tsx`, `app/about/page.tsx` | `post-blog-*-390` (bottom) |
| Slogans rewritten; "ancient" removed; blog footer "coming soon" replaced with a plain "Planning a visit?" block | `app/page.tsx`, `app/layout.tsx`, `lib/config.ts`, `app/blog/page.tsx`, `app/formby-pinewoods/*` | `after-blog-1440` |
| Em dashes removed from every changed file | 5 files | |
| Sitemap reference date moved to 2026-11-11 | `app/sitemap.ts` | |
| Advertise page: unsupported claims removed ("affluent audience", "New site: rising fast", "Pages ranking for key terms", "No competitor exists", "Growing traffic", "responds to premium brands"); positions no component renders ("Sidebar", "Homepage sponsored panel", "SeftonLinks sidebar and in-feed") now say "by arrangement". Packages and prices unchanged pending Damian's pick | `app/advertise/page.tsx` | `before-advertise-*`, `after-advertise-*` |

## 3. The two new posts

### The Prehistoric Footprints at Formby Point: What They Are and How to Look for Them
- Slug: `prehistoric-footprints-formby-point`
- Live URL: https://www.formbyguide.co.uk/blog/prehistoric-footprints-formby-point
- Why: the footprints are mentioned in passing in four posts but never explained, they are evergreen, and a low-tide winter walk suits them.
- Screenshots: `post-blog-prehistoric-footprints-formby-point-1440`, `-390`
- Sources (all fetched 11 Nov 2026; text captures in `sources/`):
  - University of Manchester news, "Ancient footprints on UK beach record demise of a biodiversity hotspot" (2022): https://www.manchester.ac.uk/about/news/ancient-footprints-on-uk-beach/ . Beds span Mesolithic to medieval, 9,000 to 1,000 years ago; radiocarbon dating; journal Nature Ecology and Evolution; aurochs, red deer, roe deer, wild boar, beaver, wolf, lynx; human prints dominate Neolithic and later beds with a fall in large mammal species; possible drivers; "one of the world's largest known concentrations of prehistoric vertebrate tracks".
  - CITiZAN (Museum of London Archaeology), "From Prehistoric Footprints to the First Lifeboat Station" (2016): https://citizan.org.uk/blog/2016/Jan/28/prehistoric-footprints-first-lifeboat-station/ . Sand bar about a kilometre out, salt marsh fringed by fen carr of oak and alder; prints of adults and young children, aurochs (extinct, six foot at the shoulder), red deer, roe deer, wild boar, wolf, oystercatcher, crane; baked, filled with windblown sand, sealed, uncovered by the sea; Britain's first known lifeboat station set up by the Trustees of Liverpool Dock; 1771/1776 chart; Richard Scarisbrick 1777, two guineas a year; repaired or rebuilt, closed 1918; café until demolished in the 1950s.
  - National Trust, Formby: https://www.nationaltrust.org.uk/visit/liverpool-lancashire/formby . Footprints and two shipwrecks on the shoreline; fastest-changing coastline in NT care; Lifeboat Road L37 2EB with hard path and boardwalk; Formby station a short walk; Victoria Road L37 1LJ; payment, members, Blue Badge; car parks 09:00 to 16:00 on 11 Nov 2026; vans spring and summer; Merseyrail every 15 minutes.
  - Ribble and Alt Estuaries SPA factsheet (Defra): https://assets.publishing.service.gov.uk/media/5def787fed915d15ec797ee1/Ribble_and_Alt_Estuaries_SPA_Factsheet.pdf . Wintering waders; beach recreation disturbs roosting flocks, affecting energy and survival especially in winter.
- Images: `/beach-dunes-new.webp` (hero) and `/beach-car-park-sign.webp`, both from the site's own gallery of local photos.

### Formby in Winter: What to Expect from December to February
- Slug: `formby-in-winter`
- Live URL: https://www.formbyguide.co.uk/blog/formby-in-winter
- Why: the site has posts for most months from February to September but nothing for December to February, and winter visits work differently (earlier closing, no food on site, squirrel pox guidance, birds on the shore).
- Screenshots: `post-blog-formby-in-winter-1440`, `-390`
- Sources (fetched 11 Nov 2026):
  - National Trust, Formby (as above): car park and toilet hours on 11 Nov 2026; payment; members and Blue Badge; vans spring and summer only; trains; conservation cattle grazing in the dunes this winter for natterjack toads and sand lizards; "mindful of wildlife and cattle grazing"; woodland conservation work this autumn and winter; two shipwrecks and footprints; RNLI lifeguards at Lifeboat Road at peak times; dogs under close control.
  - Wildlife Trust for Lancashire, Manchester and North Merseyside, "Squirrel pox outbreak confirmed on the Sefton Coast" (Monday 20 July 2026): https://www.lancswt.org.uk/node/9334 . Outbreak confirmed in Formby; 2008 outbreak cut the population by an estimated 80%; carried by greys without symptoms, fatal to reds; remove feeders along the Sefton Coast; scatter high-water fruit such as apple or melon; clean outdoor equipment daily with wildlife-safe disinfectant; report healthy, sick or dead reds and greys; Red Squirrel Team 07590 745 862, voicemail.
  - Sefton Council, "Sefton residents urged to help red squirrels with simple steps amid pox outbreak" (29 July 2026): https://sefton.gov.uk/mysefton-news/latest-news/sefton-residents-urged-to-help-red-squirrels-with-simple-steps-amid-pox-outbreak/ . Same guidance; Wildlife Trust sighting form.
  - Ribble and Alt Estuaries SPA factsheet (as above): wintering pink-footed goose, knot, sanderling, dunlin, bar-tailed godwit, grey plover, oystercatcher and others; disturbance from beach recreation.
  - Sefton Council, "Formby beach car park closed for major conservation project": https://sefton.gov.uk/mysefton-news/latest-news/formby-beach-car-park-closed-for-major-conservation-project . Background only (old Victoria Road beach car park removed and replaced further inland, 2025 to 2026).
- Images: `/pinewoods-hero.webp` (hero) and `/formby-beach-sea.jpg`, both from the site's gallery.

Persona note: both posts carry the "Clare" byline as every post does, but contain no first-person experiences, anecdotes or claims of visits.

## 4. Reviewer's findings and what was done

An independent reviewer (fresh context, no access to the author's reasoning) re-fetched the sources, checked about 85 factual claims in the two posts and read the site diff cold. It found 7 must-fix and 13 should-fix items. All were acted on:

| # | Finding | Done |
|---|---|---|
| 1 | Category intros still said "book through the National Trust app" and "£6–£9" (`app/[category]/page.tsx`) | Rewritten to the NT facts |
| 2 | Lifeguard wording inconsistent ("none", "peak times") | Every mention now uses the NT line: RNLI at Lifeboat Road, 10am to 6pm, spring and summer school holidays; winter post says none in winter |
| 3 | Squirrel pox section read as current news | Heading changed to "Red Squirrels and Squirrel Pox"; "In July the Trust..."; added "that guidance dates from July 2026, check the Trust's pages"; meta text no longer says "after" the outbreak |
| 4 | April post said the car park "reopens in April after the winter closure" | Removed |
| 5 | Open 2026 still framed as upcoming in two posts, category links, sitemap dates | Blackpool day-trip Open section removed; family post link removed; Open links dropped from the accommodation category; Open pages' sitemap date kept at 9 Sep. The Open pages themselves are left for Damian (suggestion 3) |
| 6 | Parking guide recommended street parking on Victoria Road | Removed; now says Sefton Council enforces restrictions on residential roads (NT page) |
| 7 | "Entry: Free (NT members) / £" | "Free on foot or by bike" (NT page) |
| 8 | Member check-in described as JustPark only | "Scan your card or check in with JustPark" |
| 9 | Blue Badge holders must see the welcome team | Added to the parking guide, both new posts, NT first-visit and autumn posts |
| 10 | "No year-round National Trust café" implied a seasonal café | "No café on site" (6 files) |
| 11 | Footprints post went beyond its sources in four places | Reworded to match Manchester and CITiZAN exactly |
| 12 | Footprints post promised "where to look" | Section retitled "Going to Look"; meta text changed; tip no longer contradicts the "changes from visit to visit" line |
| 13 | SPA factsheet wording | "records concerns that beach recreation disturbs roosting flocks" |
| 14 | Slogans, fragments, "mid-afternoon", misplaced modifier in the winter post | Rewritten ("close at 4pm" on a November day, new intro, no slogans) |
| 15 | Dog-friendly guide grid left half-empty | Single-column card, intro points to the pubs and cafés listings |
| 16 | Emoji still used as icons in ten older posts and two pages | Removed (only the listing photo placeholder in `collections/[slug]` remains) |
| 17 | Contradictions left by edits (Formby station vs Freshfield, boardwalk from Victoria Road, "NT barrier", "pay on the day") | Fixed |
| 18 | Food-van cards linked to `/cafes`; gallery alt text described the wrong photo | Cards link to the beach facilities section; alt and caption rewritten |
| 19 | A rewritten line kept a personal ice-cream anecdote; two illogical lines | Rewritten |
| 20 | Older squirrel posts suggested checking feeders, against the Wildlife Trust's July guidance | Feeder tips removed |

Also found while re-checking: 25 data strings showed a literal `&apos;` on screen (for example "won&apos;t" on the dog-friendly guide). Fixed in six files.

## 5. Bigger suggestions for Damian (not built)

1. **Decide what Clare is.** The about page says Clare is a persona; the post bio still says she has lived in Formby "over fifteen years" with four children, the weather post says ten years, the wild garlic post says she grew up here, and the red squirrel page says "we've counted half a dozen from a single trail". Either keep a persona with no biographical claims, or put the posts under your own name. One afternoon of copy edits either way. Screenshot: `post-blog-formby-in-winter-390` (author box).
2. **Red squirrel pages after the July 2026 pox outbreak.** `/red-squirrels-formby` and several posts still promise good odds ("chances are good", "you've got a decent chance"). The Wildlife Trust confirmed an outbreak on 20 July 2026; in 2008 the population fell by about 80%. Worth a rewrite of the red squirrel guide with the Trust's guidance, ideally after asking the Trust or the NT how numbers look this winter. Screenshot: `after-red-squirrels-formby-1440`.
3. **The Open 2026 pages.** `/the-open-2026`, `/the-open-2026/accommodation`, `/the-open-2026/restaurants` and several posts still read as if the Open is ahead ("book now"). Options: redirect to a Royal Birkdale or golf page, or rewrite as a "staying in Formby for golf" page. Screenshot: `idea-the-open-2026-1440`.
4. **Business rankings in editorial copy.** The landing pages call one restaurant "the best restaurant in Formby" and the pubs intro calls a named pub "fine for a quick pint, not a destination". With businesses as possible customers, consider neutral wording. Not changed. Screenshot: `idea-pubs-1440`.
5. **House-style tics across the 39 older posts.** "genuinely" appears 83 times in post bodies and "honest" over 100 times site-wide; many posts use the same "It is not bad. But..." rhythm. A careful pass over the older posts would take a day. Screenshot: `before-blog-formby-nt-autumn-visit-1440`.
6. **Listing descriptions.** Many directory descriptions are machine-written and repeat ("Formby's greatest draws are its natural spaces..."). These are business data, so not touched. Screenshot: `before-nature-walks-1440`.
7. **Parking prices.** The site no longer quotes a price because the NT's own pages disagree (£8.50 and £9 appear, undated). Worth adding once confirmed with the NT.

## 6. Checks run

- `npx tsc --noEmit`: 15 errors before and after, all in `app/api/command-centre/stats/route.ts`; none elsewhere.
- `npx eslint .`: 43 errors and 6 warnings before and after, all pre-existing.
- Browser console on home, blog index and both new posts: no errors (the two duplicate-key errors are gone).
- Screenshots at 1440 and 390 through headless Microsoft Edge (Playwright, `msedge` channel) of every changed page type and both posts.
- Em dash scan of `app/`, `lib/`, `components/`: none left in customer-facing strings (a few remain in code comments in `app/globals.css` and `lib/affiliate-links.ts`).

## 7. Advertising (stage B)

Built on 11 Nov 2026 from the approved stage A proposal and Damian's picks. Every sponsor is empty at commit; Damian fills one by hand in `lib/ad-slots.ts` once its invoice is paid (a sponsor with a past `until` date shows as empty again, within the hour).

**Existing advertisers:** none. All 357 listings are `listingTier = "free"` with `featured = false`, the `Subscription` table is empty, and no business has a Stripe customer or subscription ID. Nothing in code ever recorded a network package. The £450/£650/£800 packages are gone.

**Spaces (at most one advert per page):**
- Home page card, after "Local guides & stories" (£59 a month, labelled Advertisement).
- Featured places on Restaurants, Cafés, Pubs, Places to Stay, Activities and Shopping: at most two, taken from the listing's `listingTier` (featured or premium), shown first and marked "Featured" and "Paid placement". While fewer than two are featured, one empty card sits above the search bar. The normal order no longer gives any tier an unlabelled boost (£29 a month or £290 a year).
- Guide sponsor (£49 a month, labelled Sponsor) at the end of /formby-beach, /formby-pinewoods, /red-squirrels-formby, /guides/parking-formby-beach and /things-to-do, below the guide and away from the "Where to eat" sections.
- End-of-post sponsor on eight seasonal and walks posts that name no business: formby-beach-weather-guide, spring-formby-beach-april, sunset-formby-point, formby-in-winter, formby-cycling-routes, ainsdale-beach-walk-from-formby, formby-nt-autumn-visit, prehistoric-footprints-formby-point. Left off every post that names or rates a business.
- None on listing pages, reviews, best-of guides, about, privacy, terms, disclosure, contact, claim-listing, advertise or 404.

**Advertise page** rebuilt from the mock: five options and the Sefton Coast bundle, all "plus VAT"; the founding offer; how it works; our rules. `/advertise?space=<id>` names the space and highlights its option; every "Ask about" button opens the contact form with the advertising subject chosen and "I'm interested in: <space>" filled in. No traffic or audience claims.

**Sponsored articles:** support only, none published. A post's metadata takes `sponsor: { name, url }`, and `app/blog/SponsoredArticle.tsx` gives it a Sponsored label, a "Sponsored by X" byline, the sponsor as JSON-LD author, sponsored links and no Clare bio; it is labelled Sponsored in the blog index, home strip and feed.

**Disclosure and about:** new "Advertising" section on /disclosure; the about page's funding lines now say featured placement and advertising, and that nothing under Clare's name is paid for.

**Enquiries:** forms deliver to `DELIVERY_EMAIL` (Damian's inbox) and every address a visitor sees is `DISPLAY_EMAIL` (hello@seftoncoast.network), both in `lib/contact.ts`. The contact route sends from noreply@formbyguide.co.uk unless `RESEND_FROM_EMAIL` is set, replies to the enquirer, escapes every value and logs send errors. `npm run test:enquiry`: 18 tests, all pass. Nothing was sent.

**Affiliate links removed:** the LateRooms box on Places to Stay, the Go Ape box on Things to Do, the Sykes and LateRooms buttons on /the-open-2026, the three partner boxes on /the-open-2026/accommodation, `lib/affiliate-links.ts`, and the affiliate lines on the about and disclosure pages.

**Visit counts:** a `PageCount` table (path, day, count) on Neon, created by `prisma/sql/2026-11-page-count.sql`. `/api/count` adds one per page view on the live site only, leaves out bots, and stores nothing about the visitor.

**Checks:** `npx tsc --noEmit` 0 errors (15 before, all from a stale generated Prisma client); `npx eslint .` 43 errors and 6 warnings, the same as before; no em dashes in changed files. Screenshots `ads-*` at 1440 and 390, empty and filled.

**For Damian:** set `RESEND_FROM_EMAIL` on Vercel to "FormbyGuide <noreply@formbyguide.co.uk>" or remove it; the privacy page still names Plausible while the site loads Ahrefs Web Analytics, and needs a line for the page counts; listing pages still say "from £29/month" without "plus VAT"; the Open 2026 pages are out of date.

### 7b. Advertising build: independent review and fixes

An independent reviewer read commits `d6fdce3`, `c89b0f2` and `a40ff44` cold against the build spec: 5 MUST FIX, 7 SHOULD FIX, plus two items carried over from the Wildlife review. All fixed in `6bb7899`:

1. The "Relevant Listings" block in `GuideLayout` showed featured and premium listings unlabelled on guide pages, including the "best of" restaurants guide, and would have put a second paid unit beside the sponsor card. Removed, with its audience-claim copy.
2. Spam risk once the contact form sends from a verified domain: name, subject and business name capped at 100 characters, message at 3,000; the auto-reply is fixed text with no enquirer input; hidden honeypot field `website` on the contact and claim forms (filled means ok and nothing sent). Tests added.
3. About and disclosure claimed the guide is already funded by featured listings and adverts. Now: "Churchtown Media Ltd pays for the guide. Businesses can pay for a Featured place or a labelled advert."
4. Paid tiers no longer sort first unlabelled on collections and the Open 2026 pages; a listing is Featured only on its primary category.
5. Listing-page upsell now reads "from £29 a month plus VAT", linking to `/advertise#featured`.
6. `/api/count` counts only known routes and drops cross-site requests (`Sec-Fetch-Site` not same-origin).
7. Rules line now reads "Adverts never appear inside a review, and paying for a space does not change what we write."
8. Featured slots on category pages can never show a sponsor card.
9. A post with `sponsor` set always renders in the sponsored layout (no Clare bio, sponsor as author); the build fails if a sponsored post has no sponsored body.
10. "1 to 2 working days" (UK English).
11. End-of-post cards say "post", not "guide".
12. A dangling sentence on the Open page fixed; internal command-centre price set to £29.
13. Slot pages already revalidate hourly (home, guides, posts) or are dynamic (categories).
14. Advert, Featured and Paid placement labels at 11px in full colour.

Checks after the fixes: tests 32 of 32; tsc 0 errors; eslint 43 errors and 6 warnings (unchanged baseline); no em dash in changed files. Screenshots `adsfix-*`. Left for Damian: some listing descriptions (database data, not touched) contain em dashes.

### Forms (for live testing after the push)

- https://www.formbyguide.co.uk/contact : POST `/api/contact`. Required `name` (max 100), `email` (one plain address, max 254), `message` (max 3,000). Optional `subject` (max 100; "Claim my listing", "Advertise / Featured listing", "Report an issue", "General enquiry") and `businessName` (max 100). Honeypot `website` must be empty. Delivers to damian@churchtownmedia.co.uk from noreply@formbyguide.co.uk (unless `RESEND_FROM_EMAIL` is set on Vercel).
- https://www.formbyguide.co.uk/claim-listing : same route and fields; `subject` fixed to "Claim my listing".

## 8. Follow-up: Open pages, business wording, privacy

Done 11 Nov 2026. Commits: `5d6e493` (Open 2026), `2c3fabb` (business wording) on main; `725e2a8` (privacy) on branch `privacy-wording`, waiting for Damian's approval. Not pushed. Screenshots `fu-*`; sources in `sources/` (theopen-*, rb-*, mr-*, emilys-b, donluigi-home, sorrento-*, sparrowhawk-*, fsa-formby-businesses, ahrefs-web-analytics-help).

**The Open 2026.**
- `/the-open-2026` is reframed as a record of The 154th Open: Ryan Fox 72-68-62-68 = 270, one shot ahead of Cameron Young, more than 300,000 spectators (theopen.com). It also covers what still helps a golf visit: Royal Birkdale's visitors page (visitor tee times fully booked for 2027), Merseyrail stations, and links to places to stay, restaurants and pubs.
- `/the-open-2026/accommodation` and `/the-open-2026/restaurants` redirect permanently to `/accommodation` and `/restaurants`. They are removed from the sitemap, the category links and the page-count list (that list's test requires it).
- The two dated Open posts carry a note dated 11 Nov 2026 and no longer tell readers to book.
- The guide entry, the Royal Birkdale collection and the events label no longer present the Open as upcoming.

**Business wording.**
- No editorial line ranks or criticises a named business. Named places are described only from their own sites (Emily's, The Sparrowhawk, Don Luigi, Sorrento) or the FSA register.
- `/guides/best-restaurants-formby` is now "Restaurants in Formby", alphabetical, with no "best" or "no sponsored results" claims.
- The Sparrowhawk review is a factual profile. The site had placed it on four different wrong streets; it is on Southport Old Road.
- The Left Bank Brasserie review is removed and redirects to the restaurants guide. The FSA register lists The Olive Grove at 1a The Beacons (inspected 27 Oct 2026), and the restaurant's old domain now serves a gambling site.
- Verdicts are also removed from the home page cards, the three landing pages, the village, dog and parking guides, things-to-do, the category intros, four collection intros and 20 posts.

**Privacy (branch).**
- Plausible is replaced with Ahrefs Web Analytics, described from Ahrefs' help page, plus a line for the site's own daily page counts.
- The Stripe lines are replaced with invoice-only billing.
- Last updated 11 November 2026.

**Checks.** Tests 32/32; tsc 0; eslint 16 errors and 6 warnings, none new (baseline 43/6); no em dashes in changed files; console clean on changed pages.

**Left for Damian.**
- Merge `privacy-wording`.
- The Left Bank and Coffee Carriage listing rows, ranking phrases in listing descriptions, and star ratings on listings.
- The terms page still says Stripe billing.

## 9. Maps: OpenStreetMap instead of Google embeds

Done 11 Nov 2026. Commits: `bb9477b` on main (maps); `db3a248` on branch `privacy-wording` (one privacy line), waiting for Damian's approval. Not pushed. Screenshots `map-*`.

**What a visitor sees.**
- Listings with stored coordinates (352 of 357) show a Leaflet map on OpenStreetMap tiles straight away, no click, pin on the stored lat/lng, in a fixed-height box (320px, 256px on phones), so nothing moves when it loads. "© OpenStreetMap contributors" shows in the map's corner.
- "Get directions" and "View on Google Maps" are plain links under the map. With JavaScript off they still work, and the box says "The map needs JavaScript. The links below open Google Maps."
- The 5 listings with no coordinates (all have a Google place id) show a "Show map (Google Maps)" button. Nothing is requested from Google until it is clicked; then the Google embed loads in the same box. No location is guessed. They are: `/beaches/national-trust-formby-beach`, `/nature-walks/formby-red-squirrel-reserve`, `/restaurants/the-sparrowhawk-formby`, `/restaurants/emilys-formby`, `/restaurants/left-bank-brasserie-formby`.
- The category map view now uses the same tile settings.

**How it is built.**
- `components/ListingMap.tsx` (Leaflet, one pin) is loaded by `components/ListingMapLazy.tsx` with a dynamic import and no SSR, and is mounted only when the box comes within 300px of the screen. Leaflet and its CSS are fetched only on listing pages with coordinates, and only when needed.
- `components/GoogleMapClickToLoad.tsx` is the only file that builds a Google embed URL.
- `lib/osm-tiles.ts` holds the tile URL, attribution and max zoom for both maps.
- Keyboard: the map is one tab stop (arrow keys pan, + and - zoom), then Zoom in, Zoom out, the attribution links, Get directions, View on Google Maps. No trap; Shift+Tab goes back. The marker is not a tab stop. On phones one finger scrolls the page and two fingers zoom the map. The "Show map" button is reached by Tab; Enter loads the map and moves focus to it.

**OpenStreetMap Foundation pages (read 11 Nov 2026).**
- Tile Usage Policy (operations.osmfoundation.org/policies/tiles/). What applies to a site this size, and what was done:
  - Use exactly `https://tile.openstreetmap.org/{z}/{x}/{y}.png`. The category map used the old `{s}.` subdomains; fixed.
  - Show visible attribution. Done.
  - The browser's own User-Agent and a valid Referer are sent: `next.config.ts` sets `strict-origin-when-cross-origin`, so tiles get our origin.
  - No prefetching or bulk download. Only the tiles in view are requested, and none until the map is near the screen.
  - Not done (recommended, not required): a "Report a map issue" link to openstreetmap.org/fixthemap. A contact email is already published.
- Privacy Policy (osmfoundation.org/wiki/Privacy_Policy).
  - It lists data "associated with a tile request (for instance, IP addresses and request details)". Records of browser use include IP address, browser and device type, operating system, referring page and date and time.
  - It says nothing either way about cookies on tile requests. Its cookie paragraph is about login and navigation on OSMF's own services.
  - In headless Edge, 15 tile responses carried no Set-Cookie, and the browser held no openstreetmap.org cookies afterwards.

**Google key.** `GOOGLE_PLACES_API_KEY` is still read on the server in `app/[category]/[slug]/page.tsx`, now only for the click-to-load embed. It reaches the HTML of the 5 listings without coordinates (before, it was in the iframe src of every listing with a map). The same variable serves the scrape scripts' Places API calls. The embed also loaded from `http://localhost:3101`, so any referrer restriction on the key allows localhost.

**Privacy line (branch `privacy-wording`, `db3a248`).**
- Before: no line about maps (section 5 ended with the Resend entry).
- After, a new "OpenStreetMap (maps)" entry in section 5: "Maps are drawn with OpenStreetMap tiles, which your browser loads from the OpenStreetMap Foundation's servers; they receive your IP address, browser type, our site's address and the map area you view. On the few listings without a map pin, Google Maps loads only if you click “Show map (Google Maps)”."
- It makes no cookie claim, because the OSMF pages do not confirm one.

**Checks.**
- Tests: 37/37 pass, including 5 new in `tests/maps.test.mjs`. They fail if a Google embed URL appears outside the click-to-load component, or if that component renders an iframe before a click. Three deliberate breakages were each caught.
- tsc: 0 errors before and after.
- eslint: 16 errors and 6 warnings before and after, same files; the changed files are clean.
- No em dashes in changed files.
- Console: clean on both listing pages and the category map view. The only errors came from the two requests the test blocked on purpose (Ahrefs script, `/api/count`).
- No Google request was made before the click. Google was contacted once, by one keyboard click at 1440.
- The after-click screenshot came out blank: headless full-page capture leaves the cross-origin iframe empty. The iframe and its map requests were confirmed, so the shot was not kept or retried.
- Screenshots:
  - `map-with-coords-restaurants-the-lunch-hour-1440.jpg`, `-390.jpg` and `-nojs-390.jpg`.
  - `map-no-coords-beaches-national-trust-formby-beach-before-click-1440.jpg` and `-390.jpg`.

**Left for Damian.**
- Merge `privacy-wording` (now two commits).
- If you want "set no cookies" in the privacy line: the OSMF pages do not say so. Our test saw none.
- Restrict the Google key in Google Cloud (HTTP referrer `www.formbyguide.co.uk`, Maps Embed API only), or give the embed its own key. Adding coordinates to the 5 listings (business data, not touched here) would end the need for the key in page code.
- Listing descriptions in the database still contain em dashes (seen on The Lunch Hour and Formby Beach). These are business data and were not touched.
- Optional: add a "Report a map issue" link (OSMF recommendation).

## 10. Review findings and fixes

Done 11 Nov 2026 from the second independent review (`formby-review-2.md`, 32 findings). Not pushed.

**Commits on main.**
- `1964c17` Listing JSON-LD: `aggregateRating` removed (it was Google's rating; Google's review snippet rules do not allow third-party ratings). Schema only; the visible rating is unchanged. This is the commit the coordinating chat asked for.
- `7d1eb4f` About page: Clare is real, not a persona.
- `686df91` Maps: the Google click-to-load fallback removed; the map tests catch all 10 breakages.
- `6f0da7e` Facts: Father's Day, Royal Birkdale booking, walk times, Emily's evenings, Splash World, chains.
- `aa2ff4e` Business wording: no verdicts on named businesses, no invented figures, alphabetical cards, Sparrowhawk hero.
- `ec357d1` Stock phrases: "honest" and "genuinely" dropped.
- `a257306` Titles without a doubled brand, no Google Fonts preconnect, decorative related-guide images, map toggle labels.
- Branch `privacy-wording`: a third commit after `db3a248`, privacy and terms pages only (findings 2, 3, 9, 11, part of 21 and 28). Waiting for Damian.

**Applied: 20 on main and 5 on the branch (28 on both). Skipped: 6. No longer applies: 1 (19).**
- Wrong facts:
  - 1 Father's Day 2026 was Sunday 21 June (third Sunday; 15 June was a Monday): standfirst, JSON-LD, excerpt and listing entry.
  - 2 Terms 5.2 (branch): paid by invoice, no checkout, notice as the advertise page states it.
  - 3 Vercel (branch): server code runs in iad1, Washington, D.C.
- Rules:
  - 4 Rainy-day guide: The Atkinson described from its visit page; "excellent", "worth the visit", "relaxed atmosphere" and "none of them require planning" gone; the Southport Market paragraph replaced as the review set out (before the rule on the six was refined).
  - 5 Blackpool post: Pleasure Beach described from its own site; "excellent" and "adds up quickly" gone; titles without "Clare's Honest Answer" and "Honest Comparison".
  - 6 Family and free collections: no "worth the trip" or "Honest local list".
  - 7 Kids post: the "Years experience", "Kids tested" and "Average budget" tiles and the £70 to 90 figures removed.
  - 8 Google key: the click-to-load fallback is removed, so no page code reads `GOOGLE_PLACES_API_KEY`. The 5 listings without coordinates show no map box, only "Get directions" and "View on Google Maps" (place id links, no key). Rendered `/restaurants/emilys-formby`: 0 "maps/embed", 0 `?key=` or `&key=`; the only "key=" strings are Ahrefs' `data-key` and React's dev runtime.
- Misleading:
  - 9 Cookie table (branch): the site sets no cookies; the "Essential" row removed.
  - 11 Listings legal basis (branch): legitimate interest; a contract only for a paid placement.
  - 13 Royal Birkdale: "fully booked throughout 2026 and 2027, including its Birkdale Open Experience Package" (its booking page today).
  - 14 Village to beach: "a short drive from the beach car parks; on foot, allow at least half an hour". Emily's gives 5 minutes by car and 30 on foot, so "ten minutes" was not kept.
  - 17 Restaurants guide: "Being listed here is not a recommendation." Cards are alphabetical on home, beach, pinewoods and red squirrel pages.
- Minor:
  - 18 Map tests: 13 of 13 breakages caught on a scratch copy (the review's 10, plus 3 on the lazy loader).
  - 20 Google Fonts preconnects removed (`next/font` self-hosts the fonts).
  - 21 "Churchtown Media Ltd" (branch).
  - 22 Emily's: "an à la carte menu on Monday to Saturday evenings", in 6 places, from its menus today.
  - 23 "two places to eat in Formby". 24 "Dunes Splash World on the Esplanade". 25 "Most of the shops are independents."
  - 26 96 removals of "honest" and "genuinely" in 27 files, title hooks included ("The Honest Guide" x4, "Six Weeks with Kids, Honestly"). First-person sentences were left exactly as they were.
  - 27 Sparrowhawk profile: the photo of a pasta dish replaced by the site's painted illustration; alt "A painted illustration of a glass of red wine and a candle on a table" (the review's "A plate of food" does not describe that picture).
  - 28 11 page title definitions no longer double the brand (privacy and terms on the branch).
  - 30 Related-guide card images are decorative (`alt=""`). 31 Map toggle: `aria-label` and `aria-pressed`.

**Skipped, with reasons.**
- 10 Ahrefs description: wording agreed across the five sites (instruction).
- 12 `ClareBio.tsx` and 15 home "I'm Clare. I live here": Clare text stays as it is (coordinating chat). No other Clare text was edited.
- 16 Nav link to Southport Guide's Royal Birkdale page: stays (decision).
- 19 Dead button with JavaScript off: the component no longer exists.
- 29 Golf collection emoji: the collection `emoji` field is never rendered.
- 32 Stripe packages: for the dependency job.
- 21, rest: no Ahrefs privacy link (Ahrefs wording); invoice details and the database host are Damian's to state.

**Clare (about page, `7d1eb4f`).**
- Before: "Clare is an editorial voice: a persona built from genuine local knowledge. The real person behind FormbyGuide is Damian Roche of Churchtown Media. All content reflects real first-hand knowledge of the area."
- After: "Clare is real, and part of the family business that publishes FormbyGuide: Churchtown Media Ltd. All content reflects real first-hand knowledge of the area."
- Person schema, before: "Editorial voice of FormbyGuide.co.uk: written from the perspective of a Formby local of 15+ years." After: "Editor of FormbyGuide.co.uk and part of Churchtown Media Ltd, the family business that publishes it. A Formby local of 15+ years." The rest is unchanged.

**The six organisations (rule as refined: names stay, links go).** No link to any of the 18 listed domains, or to their social pages, was found in `app/`, `lib/`, `components/` or `public/`: 0 removed for every organisation (the database rows were cleared by the coordinating chat). `a0a528a` adds `lib/blocked-domains.ts` with `isBlockedUrl()`; the listing page never renders a stored website on the list (link, sidebar, JSON-LD `url` or claim prompt). Test: `tests/no-blocked-links.test.mjs`. Rendered check of all 433 sitemap pages on the dev server: 433 returned 200, 0 matches. FC2 to FC5 were not applied, and FK1 stays.

**Sources (read 11 Nov 2026, in `sources/`).**
- `rb-visitorbooking.txt` (members.royalbirkdale.com/visitorbooking/), `rb-visitors-nov11.txt`: fully booked 2026 and 2027 (booking page), 2027 (visitors page); Birkdale Open Experience Package; 2028 later; Open Events.
- `atkinson-visit.txt`, `atkinson-home.txt` (theatkinson.co.uk): Lord Street, PR8 1DB; museum, gallery and shop; café; box office for shows; Monday to Saturday 10am to 4pm; closed Sundays and bank holidays.
- `emilys-c.txt` (emilysformby.com): breakfast from 9am daily; main menu from 12:30pm Monday to Saturday; evening menu Monday to Saturday from 5pm; Sunday menu from 2pm; 5 minutes' drive or 30 minutes' walk from Formby Beach.
- `splashworld.txt`: Dunes Splash World, The Esplanade, PR8 1RX. `pleasurebeach.txt`: rides; Nickelodeon Land for younger visitors.
- `vercel-regions.txt` (vercel.com/docs/regions): iad1 is Washington, D.C., USA, and the default function region.
- Live headers: `x-vercel-id: lhr1::iad1` on `/`, `/restaurants`, `/contact`, `/advertise`; no `Set-Cookie` there or on `/privacy`. Headless Edge on 4 live pages (Ahrefs and `/api/count` blocked): no cookies, empty localStorage and sessionStorage.
- Father's Day: calendar check only, as decided.

**Checks.** tsc 0 (baseline 0). eslint 16 errors and 6 warnings in the same 12 files (baseline 16 and 6). Tests 46/46 (baseline 37/37). No em dashes in changed files.

**Left for Damian.**
- Merge `privacy-wording` (three commits).
- Clare: two first-person sentences judge a named business and were kept under the Clare rule: the Blackpool post's "I took mine ... chaotic and expensive" (Pleasure Beach) and the rainy-day "I have been in there with all four of my kids" (The Atkinson). The about page and `ClareBio.tsx` still promise to say which places "aren't worth the bother".
- The Blackpool title lost "Clare's Honest Answer" under the business-wording decision; restore it if the Clare rule covers titles.
- Google key: now used only by `scripts/`; restricting it in Google Cloud is still worth doing.
- Privacy: say what invoice details are kept, name the database host (Neon) and its region, consider a line on transfers to the USA (iad1), and decide the Ahrefs privacy link across the five sites.

## 11. Improvements and modernising

Measured 11 Nov 2026 on a production build (`next build`, then `next start -p 3101`), headless Edge, Ahrefs and `/api/count` blocked. 436 pages crawled (433 sitemap URLs plus extras); 24 page types audited at 1440, 768 and 390. Visitors are mostly day-trippers to the beach, pinewoods and squirrels, so getting there, parking, tides and dogs come first.

**What was measured.**
- Weight (full scroll, 1440): home 939 KB, `/formby-beach` 1.4 MB, `/formby-pinewoods` 2.6 MB, `/restaurants` 4.8 MB (51 listing photos at 150 to 180 KB each, plain `<img>`, none lazy), `/blog` 2.2 MB. JavaScript about 210 to 265 KB per page. `public/` is 116 MB; 13 files (7.7 MB) are referenced nowhere.
- Layout shift: 0 on 23 of 24 pages; `/blog` 0.22 (a spinner replaced by the list).
- Mobile: no sideways overflow at 768 or 390. 7 to 24 tap targets under 24px per page at 390 (nav, breadcrumb and footer links, 15 to 20px tall). Text under 12px: 6 to 82 elements per page (10px nav labels, 11px blog dates).
- Accessibility: one h1 per page, no heading skips, no image without alt, visible focus on every tab stop checked. Contrast: 696 of 2,646 text elements on 15 pages (26%) are below AA: grey-400 small text (2.6:1), gold #C9A96E on white (2.2:1), faded greens at /50 to /60 (2.9 to 3.9:1). `lang` was "en".
- Links: 410 internal link targets, 0 broken; about 25 outside links (Google Maps links not checked), 0 broken (LinkedIn answers bots with 999; theopen.com redirected). Cross-network links already sit where they help (Sefton Coast Wildlife red squirrel, birds, mermaid's purse, jellyfish; Southport Guide parking pages); none added.
- Search: all 432 sitemap URLs 200, none redirected. `robots.txt` disallowed `/_next/`. 24 of 39 posts were linked from no page's HTML (the blog index list was client-only). `/gallery` had the home page's title and canonical, and was missing from the sitemap with `/disclosure`. One noindex collection was in the sitemap. 6 pages had no Open Graph image. `article:published_time` was "June 10, 2026". 129 titles over 65 characters (listing names), 32 descriptions over 160 (blog excerpts). Article JSON-LD: 27 of 39 without `image`, 37 without `dateModified`. Post `metaTitle` and `metaDescription` fields are never read.
- Em dashes (section 1a): rendered title, meta, Open Graph, JSON-LD and text of all 436 pages, and the source. From templates and code: 1 (the PWA manifest description). From stored listing descriptions: 68 in meta descriptions, 295 in JSON-LD and 332 in visible text on 236 pages (database text, not touched or masked). One code comment in `next.config.ts` left.

**Ranked list.**
1. Google could not fetch `/_next/` (CSS, JS, images). 5 min. **Done** `5d2010a`.
2. Blog index list only in the browser: 24 orphan posts, layout shift 0.22. 30 min. **Done** `5d2010a`: category read with `useSyncExternalStore`, all 39 links in the server HTML, shift 0; category buttons, Back and `?category=` checked.
3. Em dash sweep and test. 30 min. **Done** `ad3905f`: manifest fixed; `tests/no-em-dash.test.mjs` (planted em dashes in a title, a data file and JSX text were caught; comments were not).
4. No links to the six organisations, with a render guard. 40 min. **Done** `a0a528a`, `tests/no-blocked-links.test.mjs`.
5. `/gallery` title and canonical; gallery and disclosure in the sitemap; noindex collections out of it. 20 min. **Done** `5d2010a` (sitemap 432 to 433 URLs).
6. Listing photos on category and collection cards load lazily. 5 min. **Done** `a675b6c`.
7. Open Graph image on 7 pages; ISO publish date; `lang="en-GB"`. 15 min. **Done** `5d2010a`.
8. Full-width band photos at 1200px, not 1920px. 10 min. **Done** `a675b6c` (pinewoods 2.6 to 2.1 MB).
9. Emoji used as icons (FSA badge, no-photo placeholders; 41 on `/restaurants`) replaced with lucide icons; "Curated" dropped. 15 min. **Done** `a675b6c`, `5d2010a`.
10. Contrast and small text, site-wide. 1.5 to 2 h. **Proposed** (P1).
11. Listing photos through `next/image`. 45 min. **Proposed** (P2).
12. Cache listing and category pages. 30 min. **Proposed** (P3).
13. Blog search fields and Article schema. 1.5 h. **Proposed** (P4).
14. Tap targets under 24px. 45 min. **Proposed** (P5).
15. Titles over 65 characters: listing names from the database. **Left.**
16. Em dashes and verdicts in stored listing descriptions; "Store" schema type on about 200 "shopping" rows that are churches, surgeries and services. Database. **Left.**
17. 13 unreferenced images in `public/` (7.7 MB, including the old Sparrowhawk and Left Bank photos): no cost to visitors. Damian to decide. **Left.**

**Proposals.**
- P1 Contrast: darken text that fails AA (grey-400 to grey-500 or 600, gold on white to #8A6A2F at 5.0:1, faded greens to /75) and lift 10 to 11px labels to 12px, page by page. 26% of text fails AA today; 1.5 to 2 h. Mock-up: `screens/idea-blog-cards-contrast-compare-1440.jpg` (top now, bottom mock), `screens/idea-blog-cards-contrast-mock-390.jpg`.
- P2 Photos: serve the 150 to 180 KB listing photos through `next/image` at card size (about 30 KB) and the listing hero with priority. `/restaurants` fetches 4.3 MB of photos on a full scroll and the listing hero is the LCP; 45 min, and it uses Vercel image optimisation quota. Now: `screens/idea-restaurants-cards-now-1440.jpg`.
- P3 Caching: `revalidate = 3600` on `/[category]` and `/[category]/[slug]`, so a listing view is not a Neon round trip from iad1 every time; a featured placement would then show within the hour. 30 min plus a check after deploy. Now: `screens/imp-restaurants-emilys-formby-1440.jpg`.
- P4 Blog search fields: use each post's `metaTitle` and `metaDescription` after a fact check (they have never rendered, and one carried the wrong Father's Day date), and add `image` and `dateModified` to Article JSON-LD. 32 descriptions run over 160 characters; 1.5 h. Now: `screens/imp-blog-1440.jpg`.
- P5 Tap targets: give footer, breadcrumb and nav dropdown links at least 24px of height on phones. 7 to 24 targets per page are smaller (most pass on spacing, not all); 45 min. Now: `screens/idea-footer-links-now-390.jpg`.

**Screenshots.** Every changed page (41) at 1440, 1024, 768 and 390 was shot on the dev server and checked; 164 files, 77 MB as JPEG, kept in the scratch folder (`scratchpad\imp\shots-jpg\`). Committed (9 MB, `b38d363`): `imp-restaurants-emilys-formby`, `imp-blog-where-to-eat-formby-with-kids` and `imp-blog-the-sparrowhawk-formby-review` at all four widths; `imp-about`, `imp-blog`, `imp-home`, `imp-the-open-2026`, `imp-blog-formby-rainy-day-guide`, `imp-blog-blackpool-or-formby-family-day-out` and `imp-guides-best-restaurants-formby` at 1440 and 390; the `idea-*` files above. Pages taller than 16,000px were cut at that height (`/shopping`, and `/blog`, `/restaurants`, `/formby-beach` at 390).

**Checks.** tsc 0; eslint 16 errors and 6 warnings (baseline); tests 46/46: `maps` 7, `no-em-dash` 3 and `no-blocked-links` 4 new or rewritten. Production build passes. No dependency changed.

## 12. SEO

Checked 11 Nov 2026: the live site (`main` at `bc29690`) and the dev server (port 3101) after the fixes. Every sitemap URL fetched without following redirects; title, description, canonical, robots and every JSON-LD block parsed and checked by page type. Commits `8d45a2d`, `10e0474`, `33b02e3`, `f34a3b2`. Not pushed.

**Sitemap** `https://www.formbyguide.co.uk/sitemap.xml`: 433 URLs (13 fixed pages, 8 categories, 39 posts, 8 guides, 8 collection pages, 357 listings).

| | URLs | 200 | Redirect | 404 | Noindex |
|---|---|---|---|---|---|
| Before (live) | 433 | 433 | 0 | 0 | 0 |
| After (dev) | 433 | 433 | 0 | 0 | 0 |

**robots.txt**: `Sitemap: https://www.formbyguide.co.uk/sitemap.xml`; `Allow: /`, only `/dashboard/` and `/api/` disallowed, so CSS, JS and images can be fetched.

**Canonicals.** All 433 pages have one canonical: absolute, https, www, pointing at themselves. Query versions point at the clean URL and stay indexable: `/advertise?space=`, `/[category]?sort=&area=`, `/blog?category=`, `/guides?category=`. There is no pagination. The one collection under four listings (`/collections/dog-friendly-pubs-formby`, 3) is noindex and not in the sitemap; it is now "noindex, follow". Removed pages redirect once, 308: `/the-open-2026/accommodation`, `/the-open-2026/restaurants`, `/blog/left-bank-brasserie-formby`. Fixed: the bare-domain and `formby-guide.vercel.app` rules in `next.config.ts` sent every path to the home page; they now keep the path.

**Schema.**
- Listing opening hours: before, 1,422 of 1,634 entries had no closing time, minutes were dropped and PM was not converted (Google's narrow and thin spaces defeated the parser). Now `lib/opening-hours.ts` reads the same stored hours the page prints: 1,658 entries on 268 listings (split days count twice), all with opens and closes, 0 malformed. Text and Google `periods` agree on 263 of 268; the other 5 are 24-hour days, where the page and the schema follow the text. Unreadable times are left out.
- Listings: `url` is the listing page unless the page shows the business's website (no listing is claimed today, so none does); `image` added; the beach is `Beach`, not `Park`; no `priceRange` on `Beach` or `TouristAttraction`; empty address fields left out (`/shopping/hightown` has no address in the database).
- Posts: `BreadcrumbList` added; `dateModified` 2026-11-11 on the 36 posts whose words changed after publication; two `datePublished` values corrected to the date shown.
- Categories and guides: `BreadcrumbList` added (the parking guide had its own; now one trail). `/about`: `AboutPage` instead of a second `WebSite`. Organization and WebSite now appear once, on the home page.
- After: 433 pages, 837 blocks, 0 parse errors, no rating or review markup anywhere, every breadcrumb trail ends at its own page.
- No Event markup: there are no coming events, and the Open page is a record that gives only "July 2026".

**Titles and descriptions.** Fixed: `/about` (brand doubled); two posts that said "Right Now" in November (late May beach, asparagus). Post meta descriptions use the excerpt's whole sentences up to 160 characters where that leaves at least 120 (12 posts); three page descriptions over 175 were shortened (About Formby, Pinewoods, Parking). No duplicate titles or descriptions among sitemap URLs. Left as they are under the traffic-first rule: 127 titles over 65 characters (" | FormbyGuide.co.uk" after long listing names and post titles) and 18 descriptions over 165 (post excerpts that do not split well, About, Things to Do, Advertise). The unused `metaTitle` and `metaDescription` fields on posts were not switched on: that would change every ranking post title.

**Sitemap lastmod.** Before: February dates for most fixed pages whose words changed on 11 Nov, post dates read in the server's time zone (BST dates a day early), a made-up fallback date, and a file fixed at build time. Now: posts use `dateModified` or their date (UTC); fixed pages the date their words last changed (git); categories and collections the later of that and their newest listing; listings their `updatedAt`; regenerated hourly.

**Advertise page** (coordinator's brief). URL, canonical (`/advertise`), sitemap entry and "index, follow" checked. Title and og:title are the pre-build ones, "Advertise on FormbyGuide | Sefton Coast Network", so nothing was restored. H1 and description kept.

| Pre-build page (`c89b0f2^`): "advertis" with Formby or Sefton Coast | Now |
|---|---|
| Title: "Advertise on FormbyGuide \| Sefton Coast Network" | Same |
| Description: "Featured business listings and display advertising across the Sefton Coast Network." | New description kept, as decided; the body now says it (next rows) |
| Hero: "List your Formby business, or advertise across the network." | Hero opens: "Featured listings and display advertising for Formby businesses, on FormbyGuide.co.uk or across all four Sefton Coast Network sites." Options intro: "Listing your Formby business in the directory stays free" |
| "Display advertising on FormbyGuide can be combined with SouthportGuide, SeftonLinks and Sefton Coast Wildlife in a single package" | The same hero sentence, and the Sefton Coast bundle card ("Home page card on FormbyGuide, SouthportGuide, SeftonLinks and Sefton Coast Wildlife") |

Already on the new page: H1 "Advertise to people planning a day in Formby"; "the first ten advertisers across the Sefton Coast sites". Site links to `/advertise`: footer "Advertise With Us" and the guide band "Advertising Options →" are as before the build; the listing sidebar "View pricing →" keeps its words and now goes to `/advertise#featured` (the same URL to search engines). New since the build: "See advertising options →" on claim-listing (was "Enquire about advertising →" to `/contact`), "advertising page" on the disclosure page, and the empty advert cards (`/advertise?space=…`, canonical `/advertise`).

**Internal links.** 24 posts and 5 collections were linked only from the blog or collections index. Each post now ends with three related posts (same category, nearest date), and category pages link to their collections. Nine older posts also keep their own "More local guides" box, so those show two short rows of links.

**Found, not changed.** The bare domain answers 307, then www (`http://formbyguide.co.uk` takes two hops); set the Vercel domain redirect to 308. At 390 wide the body of `/blog/formby-beach-weather-guide` is 423px and clipped on the right (the page itself does not scroll sideways). The six-organisations checks were not run: the rule is parked (playbook 1a).

**Checks.** tsc 0. eslint 17 errors, 6 warnings, none new: every changed file has the same messages as at `bc29690`. Tests 52/52, 6 new (`opening-hours` 5, `post-dates` 1). `next build` passes.

## Traffic: what to do next

Ranked by the visits each is likely to bring. No keyword tool data (Semrush expired); the terms are the plain phrasing people use. Every fact from an official or primary page, as the playbook says.

1. **Search terms not covered yet**
   1. "formby beach tide times", "is formby beach safe": a tides and safety page. The beach guide has two lines. Publish before Easter; link it from the beach, parking and dog guides.
   2. "christmas in formby", "formby christmas events": time-sensitive; publish by late November or leave it to next year.
   3. "freshfield station to formby beach", "formby beach by train": the walk from Freshfield station. The Liverpool and Manchester day-trip posts mention it in passing.
   4. "formby coastal erosion", "formby point erosion": one line on the beach page today.
   5. "ravenmeols", "formby dunes walk": nothing on the site.
   6. "free things to do in formby": the collection exists (`/collections/free-things-to-do-formby`); give it an intro of a few paragraphs rather than a separate post (the draft's item 2).
2. **Pages one edit away**
   1. `/collections/dog-friendly-pubs-formby`: noindex with 3 pubs. One more pub that really is dog-friendly, tagged, makes it indexable for "dog friendly pubs formby".
   2. `/beaches`: one listing, competing with `/formby-beach`. Add the nearby beaches (Ainsdale, Crosby, Hightown) as listings or an intro, or it stays thin.
   3. Guides to posts: `/formby-beach` and `/red-squirrels-formby` link to no seasonal post. Add "by month" links (July, August, winter; June and September squirrels).
   4. Watch in Search Console: two post titles lost their search phrase on 11 Nov under the no-rankings rule ("Best Restaurants in Formby for Families", "Best Cafes in Formby Village"). If they drop, "Family-Friendly Restaurants in Formby: Eating Out with Kids" and "Cafés in Formby Village" keep the phrase without ranking anyone.
   5. The bare-domain redirect to 308 in Vercel (above).
3. **Posts a month**: four a month from March to August, when most beach and squirrel trips are planned, and two a month from September to February (one seasonal, published two to three weeks ahead; one evergreen). A quarterly check of parking, National Trust charges and anything dated.
