import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Star, TrendingUp, Users, CheckCircle, ArrowRight, Mail, Shield, Globe } from "lucide-react";

const BASE_URL = "https://www.formbyguide.co.uk";

export const metadata: Metadata = {
  title: "Advertise on FormbyGuide | Sefton Coast Network",
  description: "Reach Formby visitors, local residents, and the affluent Sefton Coast audience. Featured business listings and display advertising across the Sefton Coast Network.",
  alternates: { canonical: `${BASE_URL}/advertise` },
  openGraph: {
    title: "Advertise on FormbyGuide | Sefton Coast Network",
    description: "Reach Formby visitors and local residents. Featured listings and display advertising across the Sefton Coast Network.",
    url: `${BASE_URL}/advertise`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertise on FormbyGuide | Sefton Coast Network",
    description: "Reach Formby visitors and local residents. Featured listings and display advertising across the Sefton Coast Network.",
  },
};

const NETWORK_PACKAGES = [
  {
    name: "Core",
    sites: "FormbyGuide + SouthportGuide",
    price: "£450",
    total: "£2,700",
    featured: false,
    features: [
      "Sidebar on category and guide pages",
      "Homepage sponsored panel on SouthportGuide",
      "Category exclusivity on both sites",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Premium",
    sites: "FormbyGuide + SouthportGuide + SeftonLinks",
    price: "£650",
    total: "£3,900",
    featured: true,
    features: [
      "All Core placements",
      "SeftonLinks sidebar and in-feed placement",
      "Category exclusivity across all three sites",
      "Up to 2 creative updates per month",
      "Monthly performance reporting",
    ],
  },
  {
    name: "Full Network",
    sites: "All four Sefton Coast Network sites",
    price: "£800",
    total: "£4,800",
    featured: false,
    features: [
      "All Premium placements",
      "SeftonCoastWildlife included",
      "Maximum Sefton Coast reach",
      "Quarterly review call",
      "Monthly performance reporting",
    ],
  },
];

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
  { icon: TrendingUp, label: "Growing traffic", value: "New site: rising fast", sub: "Targeting high-intent searches for Formby" },
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
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">Advertising and Partnerships</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Reach the Formby audience.<br />And the whole Sefton Coast.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              FormbyGuide is part of the Sefton Coast Network: four independent editorial sites covering Southport, Formby, and the links golf corridor. List your Formby business, or advertise across the network.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:partnerships@seftoncoast.network" className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-white font-bold px-6 py-3 rounded-full transition-colors">
                <Mail className="w-4 h-4" />
                partnerships@seftoncoast.network
              </a>
              <Link href="/claim-listing" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors">
                Claim free listing
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

      {/* Network display advertising section */}
      <section className="bg-[#0d1b2a] text-white px-4 py-14">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/2">
              <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-3">Sefton Coast Network</p>
              <h2 className="text-2xl font-bold mb-4 leading-tight">Display advertising across the network</h2>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Formby is an affluent village with a strong professional residential base. The audience here responds to premium brands. Display advertising on FormbyGuide, combined with SouthportGuide and SeftonLinks, reaches the full Sefton Coast professional and visitor demographic from a single package.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                One relationship. One invoice. Category exclusivity included. Six-month minimum contract. Email us to request the full media kit.
              </p>
              <a href="mailto:partnerships@seftoncoast.network" className="inline-flex items-center gap-2 mt-6 bg-[#C9A96E] hover:bg-[#b8944f] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                <Mail className="w-4 h-4" />
                Request media kit
              </a>
            </div>
            <div className="md:w-1/2 grid gap-4">
              {[
                { icon: <Globe className="w-5 h-5 text-[#C9A96E]" />, title: "No competitor exists", body: "No other independent editorial network covers the Sefton Coast. The first advertiser in a category has it to themselves." },
                { icon: <Shield className="w-5 h-5 text-[#C9A96E]" />, title: "Category exclusivity", body: "No direct competitor in your category will appear on the same site during your contract. A firm commitment." },
                { icon: <TrendingUp className="w-5 h-5 text-[#C9A96E]" />, title: "Growing traffic", body: "All four sites are growing. The Open 2026 at Royal Birkdale is bringing the highest traffic the network has seen." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm text-white mb-1">{item.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network packages */}
      <section className="bg-[#E8EDE6] px-4 py-14">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-2">Display advertising</p>
            <h2 className="font-display text-2xl font-bold text-[#1C3220]">Network packages</h2>
            <p className="text-[#1C3220]/55 text-sm mt-2">Six-month minimum contract. Category exclusivity included on all packages.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {NETWORK_PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl overflow-hidden border-2 ${pkg.featured ? "border-[#C9A96E]" : "border-[#1C3220]/10"}`}>
                <div className={`px-5 py-4 ${pkg.featured ? "bg-[#1C3220]" : "bg-white"}`}>
                  {pkg.featured && <span className="inline-block bg-[#C9A96E] text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2">Recommended</span>}
                  <h3 className={`font-bold text-lg ${pkg.featured ? "text-white" : "text-[#1C3220]"}`}>{pkg.name}</h3>
                  <p className={`text-xs mt-0.5 ${pkg.featured ? "text-white/55" : "text-[#1C3220]/40"}`}>{pkg.sites}</p>
                </div>
                <div className="p-5 bg-white">
                  <div className="text-2xl font-extrabold text-[#1C3220] mb-0.5">{pkg.price}<span className="text-sm font-normal text-[#1C3220]/40"> / month</span></div>
                  <p className="text-xs text-[#1C3220]/40 mb-4">{pkg.total} · 6-month minimum contract</p>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#1C3220]/70">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E6B3E] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:partnerships@seftoncoast.network" className={`block text-center font-semibold py-2 rounded-lg text-sm transition-colors ${pkg.featured ? "bg-[#C9A96E] hover:bg-[#b8944f] text-white" : "border border-[#1C3220] text-[#1C3220] hover:bg-[#1C3220] hover:text-white"}`}>
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
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
              Formby punches above its weight for day visitors: the National Trust site, red squirrels, and beach draw people from across the North West. FormbyGuide is built to catch them at the research stage, before they decide where to eat or what to do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "High-intent traffic",
                desc: "People searching 'things to do Formby' or 'restaurants Formby' are actively planning. They're not browsing: they're deciding.",
              },
              {
                title: "Content that ranks",
                desc: "The site is built around editorial content covering the beach, pinewoods, and red squirrels: pages that attract and convert visitor traffic.",
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
          <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-2">For Formby businesses</p>
          <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-3">Business listing options</h2>
          <p className="text-[#1C3220]/60">Get your Formby business listed in the directory. Start free, upgrade when ready.</p>
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
            <p className="text-[#1C3220]/60 text-sm">Claim a free listing first: it takes about 2 minutes and costs nothing.</p>
          </div>
          <Link href="/claim-listing" className="flex-shrink-0 bg-[#2E6B3E] hover:bg-[#1C3220] text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            Claim free listing →
          </Link>
        </div>
      </section>
    </div>
  );
}
