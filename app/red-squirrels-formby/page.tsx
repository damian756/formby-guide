import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Car, TreePine, Camera, Coffee, AlertCircle, ChevronRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Red Squirrels in Formby | Where to See Them & What to Expect",
  description:
    "Formby is one of the best places in England to see red squirrels in the wild. Here's exactly where to go, when to visit, where to park, and what to bring — from someone who's done it plenty of times.",
  keywords:
    "red squirrels Formby, formby red squirrels, red squirrel reserve Formby, formby squirrel reserve, where to see red squirrels England, National Trust Formby squirrels",
  alternates: { canonical: `${BASE_URL}/red-squirrels-formby` },
  openGraph: {
    title: "Red Squirrels in Formby | Where to See Them & What to Expect",
    description:
      "One of the few places left in England where you can reliably spot red squirrels in the wild. Everything you need to know before you visit.",
    url: `${BASE_URL}/red-squirrels-formby`,
  },
};

const QUICK_LINKS = [
  { href: "#where", label: "Where to Go", icon: MapPin },
  { href: "#when", label: "Best Time to Visit", icon: Clock },
  { href: "#parking", label: "Parking & Getting There", icon: Car },
  { href: "#trails", label: "The Trails", icon: TreePine },
  { href: "#tips", label: "Tips & What to Bring", icon: Camera },
  { href: "#after", label: "Food & Drink Nearby", icon: Coffee },
];

export default function RedSquirrelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1C3220] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium mb-4">
              <Link href="/" className="hover:text-white transition">FormbyGuide</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Red Squirrels</span>
            </div>
            <div className="text-5xl mb-4">🐿️</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Red Squirrels in Formby
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              One of the best places in England to see them in the wild. Go early, wear layers, bring binoculars if you&apos;ve got them — and even my teenagers get excited when they spot one.
            </p>
            {/* Quick facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Postcode", value: "L37 1YH" },
                { label: "Parking", value: "From £6 (NT app)" },
                { label: "Best months", value: "Sept – Feb" },
                { label: "Dogs", value: "Welcome, on leads" },
              ].map((f) => (
                <div key={f.label} className="bg-white/10 rounded-lg p-3">
                  <div className="text-xs text-white/50 mb-0.5">{f.label}</div>
                  <div className="text-sm font-semibold text-white">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-[#E8EDE6] border-b border-[#1C3220]/10">
        <div className="container mx-auto px-4 max-w-7xl py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {QUICK_LINKS.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="flex items-center gap-1.5 text-sm text-[#1C3220]/70 hover:text-[#2E6B3E] transition-colors py-1">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-12">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#1C3220]/80 leading-relaxed">
            There are only a handful of places left in England where you can genuinely say &ldquo;we&apos;re going to see red squirrels&rdquo; and mean it with any confidence. Formby is one of them. The National Trust pinewoods along Victoria Road are home to one of the largest remaining colonies in the north of England, and unlike some wildlife experiences where you stand around for two hours and see nothing, you&apos;ve got a decent chance here most mornings.
          </p>
          <p className="text-[#1C3220]/70 leading-relaxed">
            They&apos;re not tame, and nobody&apos;s feeding them on cue. But the pinewoods are their habitat — they live here, and if you show up at the right time and move quietly, you&apos;ll usually spot at least one. On a good autumn morning we&apos;ve counted half a dozen from a single trail.
          </p>
        </div>

        {/* Where to go */}
        <section id="where" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Where exactly to go</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            The red squirrel reserve is managed by the National Trust and sits within the Formby pinewoods on Victoria Road, on the western edge of the village. It&apos;s not a zoo or a wildlife centre — it&apos;s a working nature reserve, which is exactly what makes it worth visiting.
          </p>
          <div className="bg-[#E8EDE6] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-[#1C3220] mb-3">Address & access</h3>
            <ul className="space-y-2 text-sm text-[#1C3220]/70">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-[#2E6B3E] shrink-0 mt-0.5" /><span><strong className="text-[#1C3220]">National Trust Formby</strong> — Victoria Road, Formby, L37 1YH</span></li>
              <li className="flex gap-3"><Car className="w-4 h-4 text-[#2E6B3E] shrink-0 mt-0.5" /><span>Main car park on Victoria Road. Download the NT app and book before you leave — signal is poor once you&apos;re there.</span></li>
              <li className="flex gap-3"><TreePine className="w-4 h-4 text-[#2E6B3E] shrink-0 mt-0.5" /><span>The squirrel trails start directly from the car park. You don&apos;t need to go far — they&apos;re in the pines around the entrance as often as anywhere.</span></li>
            </ul>
          </div>
          <div className="bg-[#2E6B3E]/10 border border-[#2E6B3E]/20 rounded-xl p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-[#2E6B3E] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1C3220]/70">
              <strong className="text-[#1C3220]">NT membership:</strong> If you&apos;re a National Trust member, parking is free. If not, it&apos;s charged per car — book ahead via the app or website. Non-members pay for parking; the woodland itself is free to walk in.
            </p>
          </div>
        </section>

        {/* When to visit */}
        <section id="when" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Best time to see them</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            The honest answer is: year-round, but some times are significantly better than others.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                season: "September – February",
                badge: "Best",
                badgeColor: "bg-[#2E6B3E] text-white",
                desc: "Peak season. Squirrels are most active foraging before winter and on dry winter days. Fewer leaves on the trees means better sightings. The morning light in autumn through the pines is also genuinely beautiful.",
              },
              {
                season: "March – May",
                badge: "Good",
                badgeColor: "bg-[#C9A96E] text-white",
                desc: "Young squirrels are born in spring and you may spot juveniles alongside adults. Activity is good but the thicker foliage makes spotting harder.",
              },
              {
                season: "June – August",
                badge: "Possible",
                badgeColor: "bg-[#1C3220]/20 text-[#1C3220]",
                desc: "Summer is the quietest period for sightings — squirrels are active but dense canopy and the heat of the day makes them less visible. Go early morning.",
              },
              {
                season: "Time of day",
                badge: "Any season",
                badgeColor: "bg-[#4A90A4] text-white",
                desc: "First two hours after sunrise is consistently the best window. They come down from the canopy to forage before it gets busy. By midday on a summer weekend they&apos;re much harder to spot.",
              },
            ].map((s) => (
              <div key={s.season} className="bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                  <span className="font-semibold text-[#1C3220] text-sm">{s.season}</span>
                </div>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Parking */}
        <section id="parking" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Parking & getting there</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1C3220] text-white">
                  <th className="text-left p-3 rounded-tl-lg">Option</th>
                  <th className="text-left p-3">Cost</th>
                  <th className="text-left p-3 rounded-tr-lg">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: "NT Car Park (members)", cost: "Free", notes: "Show membership card or app. Book a slot in peak season." },
                  { option: "NT Car Park (non-members)", cost: "From £6", notes: "Book via NT app before leaving home — no signal on site." },
                  { option: "Train to Formby station", cost: "Varies", notes: "Merseyrail Northern Line. 20-minute walk from station to NT car park." },
                  { option: "Street parking, Victoria Rd", cost: "Free/limited", notes: "Very limited. Don't rely on it at weekends." },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#E8EDE6]/50" : "bg-white"}>
                    <td className="p-3 font-medium text-[#1C3220]">{r.option}</td>
                    <td className="p-3 text-[#2E6B3E] font-semibold">{r.cost}</td>
                    <td className="p-3 text-[#1C3220]/60">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#E8EDE6] rounded-xl p-5">
            <h3 className="font-semibold text-[#1C3220] mb-2">By car from nearby</h3>
            <ul className="space-y-1.5 text-sm text-[#1C3220]/70">
              <li>🚗 <strong className="text-[#1C3220]">Liverpool city centre:</strong> 20–25 minutes via A565</li>
              <li>🚗 <strong className="text-[#1C3220]">Southport:</strong> 10 minutes via A565 south</li>
              <li>🚗 <strong className="text-[#1C3220]">Wigan / Manchester:</strong> 45–60 minutes via M58</li>
              <li>🚗 <strong className="text-[#1C3220]">Preston:</strong> 35 minutes via M55/A565</li>
            </ul>
          </div>
        </section>

        {/* Trails */}
        <section id="trails" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">The trails</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            The pinewood trail network is well-marked and not particularly strenuous — you&apos;re not climbing anything. It&apos;s mostly flat paths through the pines, with the beach accessible at the western end if you want to extend the walk.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Squirrel Trail (short loop)",
                time: "30–45 mins",
                difficulty: "Easy",
                desc: "The dedicated red squirrel trail that loops through the densest pinewood. This is where sightings are most reliable. Starts directly from the main car park. Good for all ages including pushchairs on the wider sections.",
              },
              {
                name: "Beach & Pines (extended walk)",
                time: "1.5–2 hours",
                difficulty: "Easy–Moderate",
                desc: "Follow the squirrel trail through the pines, then continue west to the beach, walk along the sand, and return through the dunes. Brilliant combination — you get the wildlife and the sea in one go. Wellies or sturdy footwear recommended.",
              },
              {
                name: "Full coastal path",
                time: "2.5–3 hours",
                difficulty: "Moderate",
                desc: "For a longer day out, you can walk north along the Sefton Coastal Path toward Ainsdale or south toward Hightown. Flat all the way but can be exposed to coastal winds.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-[#1C3220]">{t.name}</h3>
                  <span className="text-xs bg-[#E8EDE6] text-[#1C3220]/60 px-2 py-0.5 rounded-full">{t.time}</span>
                  <span className="text-xs bg-[#2E6B3E]/10 text-[#2E6B3E] px-2 py-0.5 rounded-full">{t.difficulty}</span>
                </div>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Tips & what to bring</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "👁️", title: "Move slowly and quietly", desc: "They hear you before they see you. Walk slowly, stop often, and look up into the canopy. They&apos;re more likely to carry on if you don&apos;t spook them." },
              { icon: "🔭", title: "Bring binoculars", desc: "Not essential but brilliant if you have them. Half the time they&apos;re high up in the pines and binoculars let you actually see them properly rather than just a rusty blur." },
              { icon: "🧥", title: "Dress for the weather", desc: "It&apos;s a coastal woodland. Even on warm days it can be cool and damp under the canopy. Layers and waterproofs are sensible year-round." },
              { icon: "👟", title: "Decent footwear", desc: "Trainers are fine on dry days. After rain the paths can be muddy. Wellies if you&apos;re planning to walk to the beach." },
              { icon: "📱", title: "Download the NT app first", desc: "You&apos;ll need it for parking and the signal on site is often poor. Sort it at home before you drive." },
              { icon: "🐕", title: "Dogs welcome, on leads", desc: "Dogs are fine on the trails but must be on leads in the squirrel reserve. Signs mark where the lead zone starts." },
              { icon: "📸", title: "Photography tips", desc: "Morning light through the pines is stunning. Phone cameras struggle with the low canopy light — if you want decent photos, a camera with a decent zoom lens helps. But don&apos;t get too hung up on it." },
              { icon: "🚫", title: "Don&apos;t feed them", desc: "I know it&apos;s tempting but it&apos;s actively harmful to the squirrels and the reserve. Watch and enjoy — that&apos;s enough." },
            ].map((t) => (
              <div key={t.title} className="flex gap-3 bg-white rounded-xl p-4 border border-[#1C3220]/8">
                <span className="text-2xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#1C3220] text-sm mb-1">{t.title}</h3>
                  <p className="text-xs text-[#1C3220]/60 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-6">Common questions</h2>
          <div className="space-y-4">
            {[
              { q: "Are red squirrels guaranteed?", a: "No wildlife sighting is ever guaranteed, but Formby is about as reliable as it gets in England. Go early on a dry morning in autumn or winter and your chances are good. Some mornings you&apos;ll see several. On a wet summer afternoon, you might see none. Manage expectations but don&apos;t be put off — it&apos;s worth the visit regardless." },
              { q: "Is it suitable for young children?", a: "Yes. The squirrel trail is flat and manageable for kids. Pushchairs are fine on the main paths. Keep children calm and slow-moving near the squirrel zone — excited running will send them straight up into the canopy." },
              { q: "What&apos;s the difference between Formby Beach and the squirrel reserve?", a: "They&apos;re part of the same National Trust site. The squirrel reserve is the pinewood section along Victoria Road. The beach is a 10–15 minute walk west through the pines. You can do both in the same visit — most people do." },
              { q: "Do I need to book?", a: "You don&apos;t need to book to visit — but you should book your parking slot via the NT app or website before you leave, especially in summer and at weekends. The car park fills up and the on-site signal is terrible." },
              { q: "What&apos;s happened to the red squirrel population?", a: "Grey squirrels, introduced from North America in the 1870s, gradually displaced red squirrels across most of England by competing for food and carrying a disease (squirrelpox) that doesn&apos;t harm greys but is fatal to reds. The Formby colony survives because the pinewoods habitat suits reds well and the National Trust actively manages the reserve, including grey squirrel control." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 border border-[#1C3220]/8">
                <h3 className="font-semibold text-[#1C3220] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food after */}
        <section id="after" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-4">Food & drink nearby</h2>
          <p className="text-[#1C3220]/70 leading-relaxed mb-6">
            There&apos;s a National Trust café at the site which does decent coffee and cake — nothing fancy but it&apos;s handy and the outdoor seating area is pleasant on a good day. For a proper meal, Formby village is a 10-minute drive and has a solid restaurant scene.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "NT Café, Formby", type: "Café · On site", desc: "Coffee, soup, cake and light bites. Good for a post-walk warm-up. Not cheap but convenient and the quality is fine.", href: "/cafes" },
              { name: "Emily's Restaurant", type: "Restaurant · Formby village", desc: "10 minutes drive. Popular and reliably good. Book ahead.", href: "/restaurants/emilys-formby" },
              { name: "Left Bank Brasserie", type: "Restaurant · Formby village", desc: "A proper sit-down meal. Book well ahead for weekends.", href: "/restaurants/left-bank-brasserie-formby" },
              { name: "The Sparrowhawk", type: "Pub/Restaurant · Formby village", desc: "Good food in a relaxed setting. Great for post-walk lunch.", href: "/restaurants/the-sparrowhawk-formby" },
            ].map((r) => (
              <Link key={r.name} href={r.href} className="group bg-white rounded-xl p-5 border border-[#1C3220]/8 hover:border-[#2E6B3E]/30 transition-all card-hover">
                <div className="text-xs text-[#2E6B3E] font-medium mb-1">{r.type}</div>
                <h3 className="font-display font-bold text-[#1C3220] mb-1 group-hover:text-[#2E6B3E] transition-colors">{r.name}</h3>
                <p className="text-sm text-[#1C3220]/60">{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-[#1C3220] rounded-2xl p-8 text-white">
          <h2 className="font-display text-2xl font-bold mb-4">Explore more of Formby</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Formby Beach", href: "/formby-beach", desc: "Sand dunes, sea and a brilliant beach." },
              { label: "Formby Pinewoods", href: "/formby-pinewoods", desc: "The ancient pines behind the squirrel reserve." },
              { label: "Things To Do", href: "/things-to-do", desc: "Everything worth doing in Formby." },
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
