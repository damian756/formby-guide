import type { Metadata } from "next";
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
      "Where is Formby, what&apos;s it like, and why do people visit? A practical, honest guide to the village from someone who lives there.",
    url: `${BASE_URL}/about-formby`,
  },
};

export default function AboutFormbyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>About Formby</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              About Formby
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A village on the Sefton Coast in Merseyside — 12 miles south of Southport, 12 miles north of Liverpool, and home to one of England&apos;s most important red squirrel colonies.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">

        {/* Where is Formby — answers the literal query */}
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
          <p className="text-[#1C3220]/70 leading-relaxed">
            As a visitor, you&apos;re mostly here for the National Trust site. But the village itself is worth an hour of your time — a walk along Chapel Lane, lunch at one of the restaurants, a browse of the shops — before or after the beach.
          </p>
        </section>

        {/* Key facts */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Formby at a glance</h2>
          <div className="bg-white rounded-xl border border-[#1C3220]/8 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Location", value: "Sefton, Merseyside, north-west England" },
                  { label: "Postcode", value: "L37 (village), L37 1YH (National Trust beach)" },
                  { label: "County", value: "Merseyside (Metropolitan Borough of Sefton)" },
                  { label: "Population", value: "Approximately 25,000" },
                  { label: "Known for", value: "Red squirrels, National Trust beach, pinewoods, affluent village" },
                  { label: "Nearest city", value: "Liverpool (12 miles south-east)" },
                  { label: "Nearest town", value: "Southport (12 miles north)" },
                  { label: "Station", value: "Formby — Merseyrail Northern Line (Liverpool to Southport)" },
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

        {/* History */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">A bit of history</h2>
          <div className="space-y-4 text-[#1C3220]/70 leading-relaxed">
            <p>
              Formby has been settled since at least Viking times — the name itself is Old Norse, thought to derive from &ldquo;Fornr&apos;s farmstead.&rdquo; The area was recorded in the Domesday Book of 1086, and the village grew gradually over the following centuries as a coastal agricultural community.
            </p>
            <p>
              The 19th century brought the railway — Formby station opened in 1848 — and with it, wealthier Liverpool residents looking for a commutable home away from the city. The character of the place as a prosperous, leafy commuter village was established in this period and has remained broadly similar since.
            </p>
            <p>
              The pinewoods were planted in the late 19th century to stabilise coastal dunes, and the red squirrels — native to the British Isles — have lived in them for as long as anyone can document. The decline of red squirrels nationally due to grey squirrel competition and disease made Formby&apos;s colony increasingly significant over the 20th century. The National Trust acquired the site in the 1960s and has managed it for conservation ever since.
            </p>
            <p>
              The asparagus fields that made Formby famous in the 19th and early 20th centuries — &ldquo;Formby asparagus&rdquo; was a known local product sold at Liverpool markets — are largely gone now, replaced by housing. A few small-scale growers still produce local asparagus in season.
            </p>
          </div>
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

        {/* Start exploring */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white">
          <h2 className="font-display text-2xl font-bold mb-4">Start exploring Formby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Red Squirrels", href: "/red-squirrels-formby", desc: "Where to see them and what to expect." },
              { label: "Formby Beach", href: "/formby-beach", desc: "Parking, postcode, dogs and more." },
              { label: "Things To Do", href: "/things-to-do", desc: "The full guide to a day in Formby." },
              { label: "Restaurants", href: "/restaurants", desc: "Where to eat in the village." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all">
                <div className="font-semibold text-white group-hover:text-[#C9A96E] transition-colors mb-1">{l.label} →</div>
                <div className="text-sm text-white/60">{l.desc}</div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
