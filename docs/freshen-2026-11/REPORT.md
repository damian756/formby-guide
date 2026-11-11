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
