import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Star, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Advertise With Us | FormbyGuide.co.uk",
  description: "Get your Formby business in front of visitors searching for restaurants, cafes, activities and things to do. Free and featured listing options available.",
  alternates: { canonical: `${BASE_URL}/advertise` },
  openGraph: {
    title: "Advertise on FormbyGuide.co.uk",
    description: "Reach visitors planning a day out in Formby. Free listings and featured placement available for local businesses.",
    url: `${BASE_URL}/advertise`,
  },
};

const PACKAGES = [
  {
    name: "Free",
    price: "£0",
    period: "forever",
    highlight: false,
    description: "Get found by visitors searching for things to do in Formby.",
    features: [
      "Listed in your category",
      "Business name, address & description",
      "Website & phone number",
      "Opening hours",
    ],
    cta: "Claim free listing",
    href: "/claim-listing",
  },
  {
    name: "Featured",
    price: "Coming soon",
    period: "",
    highlight: true,
    description: "Stand out at the top of your category and on the homepage.",
    features: [
      "Everything in Free",
      "Top placement in category",
      "Featured badge",
      "Homepage rotation",
      "Monthly analytics report",
      "Priority support",
    ],
    cta: "Register your interest",
    href: "/contact",
  },
];

const STATS = [
  { icon: Users, label: "Target audience", value: "Day visitors & locals", sub: "People actively planning a Formby visit" },
  { icon: TrendingUp, label: "Growing traffic", value: "New site — rising fast", sub: "Targeting high-intent searches for Formby" },
  { icon: BarChart2, label: "Content-first SEO", value: "Pages ranking for key terms", sub: "Red squirrels, Formby beach, things to do" },
  { icon: Star, label: "Local authority", value: "Built by Churchtown Media", sub: "Also behind SouthportGuide.co.uk" },
];

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Hero */}
      <section className="bg-[#1C3220] relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2E6B3E]/20 rounded-full translate-y-16 -translate-x-16 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 max-w-6xl py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">For businesses</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Reach visitors<br />planning Formby
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              FormbyGuide puts your business in front of people actively searching for things to do, eat, and explore in Formby. Reach them when it matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/claim-listing" className="bg-[#C9A96E] hover:bg-[#b8944f] text-white font-bold px-6 py-3 rounded-full transition-colors">
                Claim free listing
              </Link>
              <Link href="/contact" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-8 overflow-hidden">
          <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 32L720 12L1440 32V32H0Z" fill="#F7F9F6"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-white rounded-2xl border border-[#1C3220]/8 p-6">
              <Icon className="w-8 h-8 text-[#2E6B3E] mb-3" />
              <p className="text-xs text-[#1C3220]/40 uppercase tracking-wider mb-1">{label}</p>
              <p className="font-display font-bold text-[#1C3220] text-lg leading-tight mb-1">{value}</p>
              <p className="text-xs text-[#1C3220]/50">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why advertise */}
      <section className="bg-[#E8EDE6] py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">Why FormbyGuide?</h2>
            <p className="text-[#1C3220]/60 leading-relaxed">
              Formby punches above its weight for day visitors — the National Trust site, red squirrels, and beach draw people from across the North West. FormbyGuide is built to catch them at the research stage, before they decide where to eat or what to do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "High-intent traffic",
                desc: "People searching 'things to do Formby' or 'restaurants Formby' are actively planning. They're not browsing — they're deciding.",
              },
              {
                title: "Content that ranks",
                desc: "The site is built around editorial content covering the beach, pinewoods, and red squirrels — pages that attract and convert visitor traffic.",
              },
              {
                title: "Local knowledge",
                desc: "Built by the same team behind SouthportGuide.co.uk. We understand the Sefton Coast audience and what drives them to visit.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#1C3220]/8">
                <h3 className="font-display font-bold text-[#1C3220] mb-2">{title}</h3>
                <p className="text-sm text-[#1C3220]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 max-w-6xl py-16">
        <div className="max-w-xl mb-10">
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">Listing options</h2>
          <p className="text-[#1C3220]/60">Start free. Upgrade when you&apos;re ready.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-7 flex flex-col ${pkg.highlight ? "bg-[#1C3220] border-[#1C3220]" : "bg-white border-[#1C3220]/8"}`}
            >
              <div className="mb-6">
                {pkg.highlight && (
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C9A96E] mb-3">Most popular</span>
                )}
                <h3 className={`font-display text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-[#1C3220]"}`}>{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-bold ${pkg.highlight ? "text-[#C9A96E]" : "text-[#1C3220]"}`}>{pkg.price}</span>
                  {pkg.period && <span className={`text-sm ${pkg.highlight ? "text-white/50" : "text-[#1C3220]/40"}`}>/{pkg.period}</span>}
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/60" : "text-[#1C3220]/60"}`}>{pkg.description}</p>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-[#C9A96E]" : "text-[#2E6B3E]"}`} />
                    <span className={pkg.highlight ? "text-white/80" : "text-[#1C3220]/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.href}
                className={`flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-colors ${
                  pkg.highlight
                    ? "bg-[#C9A96E] hover:bg-[#b8944f] text-white"
                    : "bg-[#1C3220] hover:bg-[#2E6B3E] text-white"
                }`}
              >
                {pkg.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#E8EDE6] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-[#1C3220] mb-1">Not sure where to start?</h3>
            <p className="text-[#1C3220]/60 text-sm">Claim a free listing first — it takes about 2 minutes and costs nothing.</p>
          </div>
          <Link href="/claim-listing" className="flex-shrink-0 bg-[#2E6B3E] hover:bg-[#1C3220] text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            Claim free listing →
          </Link>
        </div>
      </section>
    </div>
  );
}
