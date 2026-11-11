import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { AD_OPTIONS, AD_SLOTS, NETWORK_BUNDLE, describeSpace, enquiryHref, getAdOption, type AdOption } from "@/lib/ad-slots";
import { DISPLAY_EMAIL } from "@/lib/contact";

const BASE_URL = "https://www.formbyguide.co.uk";
const TITLE = "Advertise on FormbyGuide | Sefton Coast Network";
const DESCRIPTION =
  "Advertise on FormbyGuide.co.uk: Featured places in a category, guide sponsors, a home page card and sponsored articles. Fixed prices, clearly labelled adverts, payment by invoice.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/advertise` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/advertise`,
    type: "website",
    siteName: "FormbyGuide.co.uk",
    locale: "en_GB",
    images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type Props = { searchParams: Promise<{ space?: string | string[] }> };

export default async function AdvertisePage({ searchParams }: Props) {
  const raw = (await searchParams).space;
  const requested = typeof raw === "string" ? raw : undefined;
  // Only known space or option ids are used; anything else is ignored.
  const spaceTitle = describeSpace(requested);
  const space = spaceTitle ? requested : undefined;
  const askedOption = space ? (AD_SLOTS[space]?.option ?? getAdOption(space)?.id) : undefined;

  // "Ask about" carries the exact space when it belongs to this option.
  const askHref = (o: AdOption) => enquiryHref(space && askedOption === o.id ? space : o.id);

  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      {/* Hero */}
      <section className="bg-[#1C3220] relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        <div className="relative container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">Advertising</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Advertise to people planning a day in Formby
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Simple local options at fixed prices. Every advert is clearly labelled, and there are no ad networks and no advertising cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={enquiryHref(space)} className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-white font-bold px-6 py-3 rounded-full transition-colors">
                Ask about a space
              </Link>
              <Link href="/claim-listing" className="border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full transition-colors">
                Claim your free listing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="container mx-auto px-4 max-w-6xl py-14">
        <h2 className="font-display text-3xl font-bold text-[#1C3220] mb-2">Ways to advertise</h2>
        <p className="text-[#1C3220]/60 text-sm mb-8 max-w-2xl">
          All prices are plus VAT. Every listing in the directory stays free; these options add visibility on top.
        </p>

        {spaceTitle && (
          <div className="mb-8 rounded-xl border border-[#2E6B3E]/30 bg-[#2E6B3E]/5 px-5 py-4 text-sm text-[#1C3220]">
            <span className="font-semibold">You asked about: {spaceTitle}.</span>{" "}
            {askedOption && <>It is part of the {getAdOption(askedOption)?.name} option, marked below.</>}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AD_OPTIONS.map((o) => (
            <div
              key={o.id}
              id={o.id}
              className={`bg-white rounded-2xl border p-6 flex flex-col scroll-mt-24 ${
                askedOption === o.id ? "border-[#2E6B3E] ring-2 ring-[#2E6B3E]/30" : "border-[#1C3220]/10"
              }`}
            >
              <h3 className="font-display text-xl font-bold text-[#1C3220] mb-3">{o.name}</h3>
              <p className="mb-1">
                <span className="text-3xl font-bold text-[#1C3220]">{o.price}</span>{" "}
                <span className="text-sm text-[#1C3220]/60">{o.per} plus VAT</span>
              </p>
              <p className="text-xs text-[#1C3220]/50 mb-4">{o.note}</p>
              <ul className="space-y-2 text-sm text-[#1C3220]/75 mb-5 flex-1">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="w-4 h-4 text-[#2E6B3E] flex-none mt-0.5" aria-hidden="true" />{p}</li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-[#2E6B3E] mb-4">{o.term}</p>
              <Link href={askHref(o)} className="text-center bg-[#2E6B3E] hover:bg-[#1C3220] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
                Ask about this space
              </Link>
            </div>
          ))}

          <div
            id={NETWORK_BUNDLE.id}
            className={`bg-[#1C3220] text-white rounded-2xl p-6 flex flex-col scroll-mt-24 ${
              askedOption === NETWORK_BUNDLE.id ? "ring-2 ring-[#C9A96E]" : ""
            }`}
          >
            <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-widest mb-2">All four sites</p>
            <h3 className="font-display text-xl font-bold mb-3">{NETWORK_BUNDLE.name}</h3>
            <p className="mb-1">
              <span className="text-3xl font-bold">{NETWORK_BUNDLE.price}</span>{" "}
              <span className="text-sm text-white/60">{NETWORK_BUNDLE.per} plus VAT</span>
            </p>
            <p className="text-xs text-white/50 mb-4">{NETWORK_BUNDLE.note}</p>
            <ul className="space-y-2 text-sm text-white/80 mb-5 flex-1">
              {NETWORK_BUNDLE.points.map((p) => (
                <li key={p} className="flex gap-2"><Check className="w-4 h-4 text-[#C9A96E] flex-none mt-0.5" aria-hidden="true" />{p}</li>
              ))}
            </ul>
            <Link href={askHref(NETWORK_BUNDLE)} className="text-center bg-[#C9A96E] hover:bg-[#b8944f] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
              Ask about the bundle
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#C9A96E]/40 bg-[#C9A96E]/10 p-6">
          <h3 className="font-display text-lg font-bold text-[#1C3220] mb-1">Founding advertisers</h3>
          <p className="text-sm text-[#1C3220]/75">
            Half price for your first three months, and your monthly price held for twelve months, for the first ten advertisers across the Sefton Coast sites.
          </p>
        </div>
      </section>

      {/* How it works + rules */}
      <section className="bg-white border-y border-[#1C3220]/8">
        <div className="container mx-auto px-4 max-w-6xl py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">How it works</h2>
            <ol className="space-y-3 text-sm text-[#1C3220]/75 list-decimal pl-5">
              <li>
                Tell us which space you would like through the{" "}
                <Link href={enquiryHref(space)} className="text-[#2E6B3E] font-semibold hover:underline">contact form</Link>, or email{" "}
                <a href={`mailto:${DISPLAY_EMAIL}`} className="text-[#2E6B3E] font-semibold hover:underline">{DISPLAY_EMAIL}</a>.
              </li>
              <li>We confirm the space is available and send an invoice. There is no online checkout.</li>
              <li>Send a photo and up to 30 words. Your advert goes live within two working days.</li>
              <li>After any minimum term, stop with a month&apos;s notice.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-4">Our rules</h2>
            <ul className="space-y-3 text-sm text-[#1C3220]/75">
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#2E6B3E] flex-none mt-0.5" aria-hidden="true" />Every advert is labelled Advertisement, Featured, Sponsor or Sponsored.</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#2E6B3E] flex-none mt-0.5" aria-hidden="true" />Paid links are marked as sponsored for search engines.</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-[#2E6B3E] flex-none mt-0.5" aria-hidden="true" />Adverts never appear inside a review, and paying for a space does not change what we write.</li>
            </ul>
            <p className="text-sm text-[#1C3220]/60 mt-4">
              More on our{" "}
              <Link href="/disclosure#advertising" className="text-[#2E6B3E] font-semibold hover:underline">disclosure page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
