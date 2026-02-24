import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, AlertCircle } from "lucide-react";
import ClareBio from "../ClareBio";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Natterjack Toads at Formby — Britain's Rarest Amphibian | FormbyGuide",
  description: "Most people walk straight past the conservation ponds at Formby without knowing what they're for. Here's the full story on natterjack toads — Britain's rarest amphibian — and how to find them.",
  keywords: "natterjack toads Formby, natterjack toad conservation, Formby wildlife, Sefton Coast natterjack, natterjack toad UK, rare amphibian Formby",
  alternates: { canonical: `${BASE_URL}/blog/natterjack-toads-formby` },
  openGraph: {
    title: "Natterjack Toads at Formby — Britain's Rarest Amphibian",
    description: "The conservation ponds between Formby's pinewoods and the beach aren't decorative. They're home to one of Britain's most endangered amphibians.",
    url: `${BASE_URL}/blog/natterjack-toads-formby`,
    type: "article",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/natterjack-pond.webp`, width: 1200, height: 630, alt: "Natterjack toad conservation pond in Formby dune slacks" }],
  },
  twitter: { card: "summary_large_image", title: "Natterjack Toads at Formby", description: "Britain's rarest amphibian lives at Formby — and most visitors walk straight past them." },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Natterjack Toads at Formby — Britain's Rarest Amphibian",
            description: "Most people walk straight past the conservation ponds at Formby without knowing what they're for. Here's the full story on natterjack toads — Britain's rarest amphibian — and how to find them.",
            url: "https://www.formbyguide.co.uk/blog/natterjack-toads-formby",
            author: {
              "@type": "Person",
              "@id": "https://www.formbyguide.co.uk/about#clare",
              name: "Clare",
              url: "https://www.formbyguide.co.uk/about",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            datePublished: "2026-02-22",
            inLanguage: "en-GB",
          }),
        }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#2E6B3E] transition">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#2E6B3E] transition">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1C3220] font-medium">Natterjack Toads at Formby</span>
          </nav>
        </div>
      </div>

      {/* Hero — real photo */}
      <section className="relative text-white overflow-hidden min-h-[420px] flex items-end">
        <Image
          src="/natterjack-pond.webp"
          alt="Natterjack toad conservation pond in the Formby dune slacks"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative container mx-auto px-4 max-w-5xl py-14">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Wildlife · Conservation
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Natterjack Toads at Formby
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-6 max-w-2xl drop-shadow">
              I had absolutely no idea these existed until about five years ago. Turns out I&apos;d been walking past a nationally important amphibian breeding site every single week.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare — Formby local</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 22, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>5 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <div className="bg-[#1C3220] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Status", value: "Protected species" },
              { label: "Calling season", value: "April – June" },
              { label: "Best time", value: "Warm evenings" },
              { label: "Location", value: "Formby dune slacks" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-sm">{value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          <article className="lg:col-span-2">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1C3220] max-w-none mb-10">
              <p className="lead text-xl text-gray-600 leading-relaxed">
                Between the pinewoods and the beach at Formby, there are shallow ponds in the low-lying dune slacks. They don&apos;t look like much — a bit of water, some reeds, scrubby vegetation. Most walkers pass them without a second glance. But those ponds are there for a reason, and the reason is one of Britain&apos;s most endangered amphibians.
              </p>
              <p>
                The natterjack toad. Smaller than a common toad, with a distinctive yellow stripe down its back and a call that carries for over a mile on a still spring night.
              </p>
            </div>

            {/* Information post photo */}
            <div className="not-prose relative w-full h-56 overflow-hidden rounded-2xl mb-10">
              <Image
                src="/natterjack-post.webp"
                alt="Natterjack toad information post at Formby"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">The NT information boards explain the conservation work — easy to miss if you&apos;re not looking</p>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none mb-10">
              <h2>What Makes Them So Rare</h2>
              <p>
                Natterjacks need very specific conditions: warm, shallow water for breeding, sandy soil for burrowing, and open ground with short vegetation. The dune slacks at Formby are one of the few places left in Britain where all of these come together naturally.
              </p>
              <p>
                They&apos;ve lost around 75% of their historic range in the UK. Development, drainage, and changing land use have wiped out most of their habitat over the last century. The Sefton Coast — including Formby — is now one of the most important sites in the country for their survival. The National Trust manages the conservation ponds specifically to support the breeding population here.
              </p>
              <p>
                They&apos;re fully protected under UK law. You can&apos;t disturb them, their eggs, or their habitat.
              </p>
            </div>

            {/* Spring habitat photo */}
            <div className="not-prose relative w-full h-56 overflow-hidden rounded-2xl mb-10">
              <Image
                src="/beach-dunes-spring-bud.webp"
                alt="Spring vegetation in Formby dune slacks — natterjack toad habitat"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">The dune slacks in spring — the habitat comes alive in April and May</p>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none mb-10">
              <h2>How to Find Them</h2>
              <p>
                You almost certainly won&apos;t see one in daylight. Natterjacks are nocturnal and spend most of the day buried in the sand. But from April through June, on warm evenings, the males call — and the call is extraordinary. It&apos;s been described as something between a cricket and a small chainsaw. Loud, carrying, unmistakeable once you know what it is. On a still night, you can hear them from well over half a mile away.
              </p>
              <p>
                The breeding ponds are in the dune slack area between the pinewoods and the beach. Walk the path west from the main car park through the pines, and before you reach the beach you&apos;ll pass through the dune slack zone. You can hear the ponds before you see them in spring and early summer.
              </p>
            </div>

            {/* Amber callout */}
            <div className="not-prose my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-900 mb-1">Please don&apos;t disturb the ponds</p>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    The conservation ponds and surrounding habitat are protected. Don&apos;t approach the water&apos;s edge, don&apos;t shine torches directly into the ponds, and keep dogs well away. The NT has done an enormous amount of work to establish this population — it&apos;s fragile.
                  </p>
                </div>
              </div>
            </div>

            {/* Ecology photo */}
            <div className="not-prose relative w-full h-52 overflow-hidden rounded-2xl mb-10">
              <Image
                src="/pinewoods-fungus-moss-2.webp"
                alt="Fungi and moss on the woodland floor at Formby — part of the dune ecosystem"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">The woodland floor ecology that surrounds the dune slack habitat</p>
            </div>

            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#1C3220] prose-p:text-gray-700 max-w-none mb-10">
              <h2>What the National Trust Does Here</h2>
              <p>
                The NT&apos;s management at Formby isn&apos;t just about the pinewoods and the squirrels. They actively manage the dune slack ponds — clearing vegetation, controlling water levels, and monitoring the breeding population. It&apos;s labour-intensive work and it&apos;s the reason the toads are still here.
              </p>
              <p>
                The Sefton Coast is part of a wider conservation network for natterjacks across the north-west. Formby, Ainsdale, and the wider dune system form a connected habitat corridor that gives the population room to spread and recover.
              </p>

              <h2>Worth Knowing If You Visit</h2>
              <p>
                You don&apos;t need to make a special trip just for the toads. They&apos;re part of the wider Formby experience — walk the pinewoods to the beach in the evening between April and June, listen for the calling, look for the NT information boards near the dune slacks, and appreciate that this is genuinely rare.
              </p>
              <p>
                If you go in daylight, the ponds are still worth a quiet look from the path. You might see spawn or tadpoles in the shallower areas in late April and May.
              </p>
            </div>

            {/* Acorn macro */}
            <div className="not-prose relative w-full h-48 overflow-hidden rounded-2xl mb-10">
              <Image
                src="/pinewoods-acorn.webp"
                alt="Acorn on the Formby pinewoods floor — part of the woodland ecosystem"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-3 left-4 text-white/80 text-xs drop-shadow">The woodland floor alongside the dune slacks — oak and pine together</p>
            </div>

            {/* CTA */}
            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Explore the Formby Pinewoods</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Walking routes, wildlife, facilities and everything you need for a visit to the National Trust site.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/formby-pinewoods" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Pinewoods Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/formby-beach" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">
                  Formby Beach Guide
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Facts</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Species</p>
                  <p className="text-gray-700">Epidalea calamita — the natterjack toad</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">UK status</p>
                  <p className="text-gray-700">Fully protected. Schedule 5, Wildlife & Countryside Act 1981.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Breeding season</p>
                  <p className="text-gray-700">April to June. Males call at night to attract females.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Identification</p>
                  <p className="text-gray-700">Yellow stripe down the back. Runs rather than hops. Shorter legs than common toad.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Location at Formby</p>
                  <p className="text-gray-700">Dune slack ponds between the pinewoods and the beach. Follow the path west from the main car park.</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Parking</p>
                  <p className="text-gray-700">L37 1YH — National Trust car park, Victoria Road</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E8EDE6] border border-[#2E6B3E]/20 rounded-2xl p-5">
              <p className="font-bold text-[#1C3220] text-sm mb-2">🐿️ While you&apos;re in the pinewoods</p>
              <p className="text-[#1C3220]/70 text-xs leading-relaxed mb-3">
                The same morning walk that takes you past the dune slack ponds is also your best chance of seeing red squirrels. Go before 9am and walk slowly.
              </p>
              <Link href="/blog/red-squirrels-formby-spotting-guide" className="text-[#2E6B3E] font-bold text-xs hover:underline flex items-center gap-1">
                Red squirrel spotting guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <p className="font-bold text-[#1C3220] text-sm mb-3">Related guides</p>
              <div className="space-y-2">
                {[
                  { label: "Formby Pinewoods", href: "/formby-pinewoods" },
                  { label: "Red Squirrels Guide", href: "/red-squirrels-formby" },
                  { label: "Pinewoods Walking Guide", href: "/blog/formby-pinewoods-walking-guide" },
                  { label: "Formby Beach", href: "/formby-beach" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-sm text-[#2E6B3E] hover:text-[#1C3220] font-medium py-1 group">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />{label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Author bio */}
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Pinewoods Walking Guide", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
              { title: "How to See Red Squirrels", slug: "red-squirrels-formby-spotting-guide", cat: "Wildlife" },
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
            ].map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-[#F7F9F6] rounded-2xl border border-gray-100 hover:border-[#2E6B3E]/30 hover:shadow-sm transition-all p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6B3E]">{p.cat}</span>
                <h3 className="font-display font-bold text-[#1C3220] text-base mt-1 group-hover:text-[#2E6B3E] transition-colors">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
