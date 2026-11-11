import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock, ArrowRight, CheckCircle, AlertCircle, Utensils } from "lucide-react";
import ClareBio from "../ClareBio";

// Rewritten 11 Nov 2026: no ratings, rankings or verdicts. Facts about named places
// come from their own websites, fetched 11 Nov 2026 (docs/freshen-2026-11/sources/).
const RESTAURANTS = [
  {
    name: "Emily's",
    summary: "A restaurant on Brows Lane serving breakfast and brunch from 9am every day, and a main menu from 12:30pm Monday to Saturday and from 2pm on Sundays.",
    pros: ["A kids menu for guests under 12", "A gluten-free brunch menu", "Well-behaved dogs welcome until 5pm"],
    cons: ["Walk-ins are first come, first served; Emily's advises booking, especially at weekends", "No dogs during evening service"],
    link: "/restaurants/emilys-formby",
    linkLabel: "View listing",
  },
  {
    name: "The Sparrowhawk",
    summary: "A Brunning & Price pub on Southport Old Road, in a country house set in five acres of woods and parkland, with a terrace and gardens.",
    pros: ["Food from noon every day", "Coeliac UK accredited for gluten-free food", "Full disabled access, including disabled parking"],
    cons: ["Bookings by phone or online; some tables are kept for people who have not booked", "Outside tables are not reserved", "Dogs on leads in the bar area only"],
    link: "/restaurants/the-sparrowhawk-formby",
    linkLabel: "View listing",
  },
  {
    name: "Cafés in the Village",
    summary: "Formby's cafés are mostly in the village, on and around Chapel Lane. The cafés directory lists them with addresses and contact details.",
    pros: ["Coffee, cake and light lunches"],
    cons: ["Opening times vary, so check before a late afternoon stop"],
    link: "/cafes",
    linkLabel: "Browse cafés",
  },
];

export default function PostContent() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Eating Out in Formby with Kids",
            description: "Where to eat in Formby with children: kids menus, times, dogs and booking at two places to eat in Formby, from their own websites, plus the cafés.",
            dateModified: "2026-11-11",
            url: "https://www.formbyguide.co.uk/blog/where-to-eat-formby-with-kids",
            author: { "@type": "Person", "@id": "https://www.formbyguide.co.uk/about#clare", name: "Clare", url: "https://www.formbyguide.co.uk/about" },
            publisher: { "@type": "Organization", "@id": "https://www.churchtownmedia.co.uk/#organization", name: "Churchtown Media", url: "https://www.churchtownmedia.co.uk" },
            datePublished: "2026-02-15",
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
            <span className="text-[#1C3220] font-medium">Restaurants for Families</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#5C1A1A] via-[#8B3A3A] to-[#6B2020] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-5xl py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Food · Family Dining
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Eating Out in Formby<br />
              <span className="text-[#C9A96E]">with Kids</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Kids menus, times, dogs and booking, taken from the restaurants&apos; own websites and checked in November 2026.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/20">
                  <Image src="/clare.png" alt="Clare" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <span>Clare: Formby local, mum of 4</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>February 15, 2026</span></div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>7 min read</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#5C1A1A] border-b border-white/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-center">
            {[
              { label: "Checked", value: "Nov 2026" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-4 text-center">
                <div className="text-[#C9A96E] font-bold text-lg">{value}</div>
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
                Eating out with kids isn&apos;t what it was before kids. You&apos;re looking for places where someone spills a drink and nobody gives you a death stare.
              </p>
              <p>Here is what two places to eat in Formby say on their own websites about children, times, dogs and booking, listed alphabetically. Check with them before you go, as menus and times change.</p>
            </div>

            <div className="not-prose space-y-6 mb-12">
              {RESTAURANTS.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="px-6 pt-6 pb-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#F5E8E8] flex items-center justify-center">
                          <Utensils className="w-5 h-5 text-[#8B3A3A]" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-[#1C3220]">{r.name}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{r.summary}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-0 border-t border-gray-100">
                    <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What it offers</p>
                      <ul className="space-y-1.5">
                        {r.pros.map(p => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] shrink-0 mt-0.5" />{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Worth knowing</p>
                      <ul className="space-y-1.5">
                        {r.cons.map(c => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <Link href={r.link} className="inline-flex items-center gap-2 text-[#2E6B3E] font-bold text-sm hover:text-[#1C3220] transition">
                      {r.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="not-prose bg-[#1C3220] text-white rounded-2xl p-7 mb-10">
              <h3 className="font-display text-xl font-bold mb-4">Prices</h3>
              <p className="text-white/75 leading-relaxed">Menus with prices are on each restaurant&apos;s website.</p>
            </div>

            <div className="not-prose bg-[#E8EDE6] rounded-2xl p-8">
              <p className="font-display font-bold text-[#1C3220] text-lg mb-2">Browse All Formby Restaurants</p>
              <p className="text-[#1C3220]/70 text-sm mb-5">Addresses and contact details in one place.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/restaurants" className="inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-5 py-3 rounded-full font-semibold text-sm transition">
                  Restaurants <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/cafes" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">Cafes & Coffee</Link>
                <Link href="/pubs" className="inline-flex items-center gap-2 bg-white border border-[#2E6B3E] text-[#2E6B3E] hover:bg-[#E8EDE6] px-5 py-3 rounded-full font-semibold text-sm transition">Pubs & Bars</Link>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-6">
              <h3 className="font-display font-bold text-[#1C3220] text-base mb-4">Quick Reference</h3>
              <div className="space-y-4">
                <div><p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Kids menu</p><p className="text-sm text-gray-700">Emily&apos;s has a kids menu for under-12s.</p></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Gluten-free</p><p className="text-sm text-gray-700">Emily&apos;s has a gluten-free brunch menu; The Sparrowhawk is Coeliac UK accredited.</p></div>
                <div><p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Prices</p><p className="text-sm text-gray-700">Menus with prices are on each restaurant&apos;s website.</p></div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-bold text-amber-900 text-sm">Weekend booking</p>
              </div>
              <p className="text-amber-800 text-xs leading-relaxed">Emily&apos;s advises booking, especially at weekends. The Sparrowhawk keeps some tables for people who have not booked and runs a waiting list when it is full.</p>
            </div>
          </aside>
        </div>
        <ClareBio />
      </div>

      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">More from the blog</h2>
          <p className="text-gray-500 mb-8">More local guides from someone who actually lives here.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Half Term in Formby", slug: "things-to-do-formby-half-term", cat: "Family" },
              { title: "Formby Beach Weather Guide", slug: "formby-beach-weather-guide", cat: "Seasonal" },
              { title: "Pinewoods Walking Guide", slug: "formby-pinewoods-walking-guide", cat: "Walks" },
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
