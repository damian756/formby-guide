import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "About Formby — Where Is It, What's There & Why Visit",
  description:
    "Where is Formby? It's a village on the Sefton Coast in Merseyside, about 12 miles south of Southport and 12 miles north of Liverpool. Here's everything worth knowing about the place.",
  keywords:
    "where is Formby, Formby village, Formby town, Formby Merseyside, Formby Liverpool, Formby Sefton, about Formby, Formby UK",
  alternates: { canonical: `${BASE_URL}/about-formby` },
  openGraph: {
    title: "About Formby — Where Is It, What's There & Why Visit",
    description:
      "Where is Formby, what's it like, and why do people visit? A practical, honest guide to the village from someone who lives there.",
    url: `${BASE_URL}/about-formby`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/about-formby-hero.webp`, width: 1200, height: 630, alt: "Aerial view of Formby village, pinewoods and coastline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Formby — Where Is It, What's There & Why Visit",
    description:
      "Where is Formby, what's it like, and why do people visit? A practical, honest guide to the village from someone who lives there.",
  },
};

export default function AboutFormbyPage() {
  return (
    <>
      {/* Hero — image with overlay */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/about-formby-hero.webp"
          alt="Aerial painterly view of Formby village, pinewoods, sand dunes and the Irish Sea"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C3220]/80 via-[#1C3220]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 max-w-7xl pb-8">
          <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-3">
            <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
            <ChevronRight className="w-4 h-4" />
            <span>About Formby</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            About Formby
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            A village on the Sefton Coast in Merseyside — 12 miles south of Southport, 12 miles north of Liverpool, and home to one of England&apos;s most important red squirrel colonies.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">

        {/* Where is Formby */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Where is Formby?</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Formby is a village in the Metropolitan Borough of Sefton, Merseyside, on the north-west coast of England. It sits on the Sefton Coast between Southport (12 miles north) and Crosby (6 miles south), with Liverpool city centre about 12 miles to the south-east.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            If you&apos;re looking for it on a map: it&apos;s directly west of the A565, the main coastal road between Liverpool and Southport. The postcode for the village centre is roughly L37, and for the National Trust beach and pinewoods it&apos;s L37 1YH.
          </p>

          <div className="bg-[#E8EDE6] rounded-2xl p-6 grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-[#1C3220] mb-3 text-sm uppercase tracking-wider">Distance from Formby</h3>
              <ul className="space-y-2 text-sm text-[#1C3220]/70">
                <li>🚗 <strong className="text-[#1C3220]">Liverpool city centre:</strong> 12 miles, ~25 mins</li>
                <li>🚗 <strong className="text-[#1C3220]">Southport:</strong> 12 miles, ~20 mins</li>
                <li>🚗 <strong className="text-[#1C3220]">Manchester:</strong> 40 miles, ~55 mins via M62</li>
                <li>🚗 <strong className="text-[#1C3220]">Wigan:</strong> 22 miles, ~35 mins via M58</li>
                <li>🚗 <strong className="text-[#1C3220]">Preston:</strong> 27 miles, ~35 mins via M6</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C3220] mb-3 text-sm uppercase tracking-wider">By public transport</h3>
              <ul className="space-y-2 text-sm text-[#1C3220]/70">
                <li>🚆 <strong className="text-[#1C3220]">From Liverpool Central:</strong> ~30 mins, Merseyrail Northern Line</li>
                <li>🚆 <strong className="text-[#1C3220]">From Southport:</strong> ~15 mins, Merseyrail Northern Line</li>
                <li>🚶 <strong className="text-[#1C3220]">Station to NT beach:</strong> ~20 min walk via Victoria Road</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Formby is like */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">What Formby is like</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Formby is affluent, quiet, and genuinely nice to spend time in. It&apos;s not a tourist town — there&apos;s no seafront promenade, no amusements, no pier. What there is: a pleasant village centre with independent shops and good restaurants, a Merseyrail station, and — a 15-minute drive west — the National Trust pinewoods, red squirrel reserve, and beach.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            The demographic is mostly families and professionals who want to be within reach of Liverpool but with more space. There&apos;s a strong community feel — lots of local sports clubs, independent businesses, and the kind of charity shops where you occasionally find something genuinely good.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed mb-8">
            As a visitor, you&apos;re mostly here for the National Trust site. But the village itself is worth an hour of your time — a walk along Chapel Lane, lunch at one of the restaurants, a browse of the shops — before or after the beach.
          </p>

          {/* Village street photo break */}
          <div className="relative -mx-4 sm:-mx-8 h-60 md:h-72 overflow-hidden rounded-2xl">
            <Image
              src="/about-village-street.webp"
              alt="Formby village high street with independent shops and trees on a sunny day"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white text-sm font-medium drop-shadow">Chapel Lane — worth an hour of anyone&apos;s time</p>
          </div>
        </section>

        {/* Key facts */}
        <section className="mb-12 mt-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Formby at a glance</h2>
          <div className="bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Location",     value: "Sefton, Merseyside, north-west England" },
                  { label: "Postcode",     value: "L37 (village), L37 1YH (National Trust beach)" },
                  { label: "County",       value: "Merseyside (Metropolitan Borough of Sefton)" },
                  { label: "Population",   value: "Approximately 25,000" },
                  { label: "Known for",    value: "Red squirrels, National Trust beach, pinewoods, affluent village" },
                  { label: "Nearest city", value: "Liverpool (12 miles south-east)" },
                  { label: "Nearest town", value: "Southport (12 miles north)" },
                  { label: "Station",      value: "Formby — Merseyrail Northern Line (Liverpool to Southport)" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                    <td className="p-3 font-semibold text-[#1C3220] w-40">{r.label}</td>
                    <td className="p-3 text-[#1C3220]/70">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* History — split layout with Victorian railway */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">A bit of history</h2>

          <div className="space-y-4 text-[#1C3220]/70 leading-relaxed mb-8">
            <p>
              Formby has been settled since at least Viking times — the name itself is Old Norse, thought to derive from &ldquo;Fornr&apos;s farmstead.&rdquo; The area was recorded in the Domesday Book of 1086, and the village grew gradually over the following centuries as a coastal agricultural community.
            </p>
          </div>

          {/* Victorian railway — split card */}
          <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[240px]">
                <Image
                  src="/about-formby-railway.webp"
                  alt="Victorian steam train arriving at a coastal Lancashire station, 1848"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-white p-8 flex flex-col justify-center">
                <p className="text-xs font-semibold text-[#2E6B3E] uppercase tracking-wider mb-3">The Railway — 1848</p>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed mb-3">
                  The 19th century brought the railway — Formby station opened in 1848 — and with it, wealthier Liverpool residents looking for a commutable home away from the city. The character of the place as a prosperous, leafy commuter village was established in this period and has remained broadly similar since.
                </p>
                <p className="text-sm text-[#1C3220]/70 leading-relaxed">
                  The pinewoods were planted in the late 19th century to stabilise coastal dunes, and the red squirrels have lived in them for as long as anyone can document. The National Trust acquired the site in the 1960s.
                </p>
              </div>
            </div>
          </div>

          {/* Asparagus fields — full-width photo break */}
          <div className="relative -mx-4 sm:-mx-8 h-60 md:h-72 overflow-hidden rounded-2xl mb-8">
            <Image
              src="/about-formby-asparagus.webp"
              alt="Formby asparagus fields on the Lancashire coastal plain with sand dunes in the distance"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold drop-shadow">Formby Asparagus</p>
              <p className="text-white/80 text-sm drop-shadow">A famous local crop sold at Liverpool markets throughout the 19th and early 20th centuries. A few small growers still produce it today.</p>
            </div>
          </div>

          <p className="text-[#1C3220]/70 leading-relaxed">
            The asparagus fields that made Formby famous — &ldquo;Formby asparagus&rdquo; was a known local product sold at Liverpool markets — are largely gone now, replaced by housing. A few small-scale growers still produce local asparagus in season.
          </p>
        </section>

        {/* Is Formby in Liverpool? */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Is Formby in Liverpool?</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-4">
            Technically no — and this question comes up a lot. Formby is in the Metropolitan Borough of Sefton, not in the City of Liverpool. It has a Merseyside postcode (L37) and a Liverpool phone dialling code (0170x), but it&apos;s administered by Sefton Council, not Liverpool City Council.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed">
            In practice, most people treat it as part of the wider Liverpool commuter belt. It&apos;s on the Liverpool to Southport train line, draws heavily on the Liverpool day-tripper market, and is culturally more connected to Liverpool than to anywhere else. But if someone from Formby hears you call it &ldquo;part of Liverpool&rdquo; they&apos;ll probably correct you.
          </p>
        </section>

        {/* Start exploring — image cards */}
        <section className="mt-16 pt-12 border-t border-[#1C3220]/10">
          <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Start exploring Formby</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Red Squirrels", href: "/red-squirrels-formby", desc: "Where to see them and what to expect.", image: "/squirrels-hero.webp" },
              { label: "Formby Beach",  href: "/formby-beach",         desc: "Parking, postcode, dogs and more.",   image: "/ttd-card-beach.webp" },
              { label: "Things To Do",  href: "/things-to-do",         desc: "The full guide to a day in Formby.", image: "/ttd-card-coastal-path.webp" },
              { label: "Restaurants",   href: "/restaurants",           desc: "Where to eat in the village.",       image: "/blog-card-walks.webp" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group relative h-40 rounded-2xl overflow-hidden block">
                <Image src={l.image} alt={l.label} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-display font-bold text-base">{l.label} →</p>
                  <p className="text-white/70 text-xs">{l.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
