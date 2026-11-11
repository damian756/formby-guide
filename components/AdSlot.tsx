import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { AD_SLOTS, activeSponsor, advertiseHref, getAdOption, type AdSlotDef } from "@/lib/ad-slots";

// One advert space. Filled: the sponsor's card, labelled "Advertisement" or
// "Sponsor", with a rel="sponsored" link. Empty: the "advertise here" card that
// names the space and links to /advertise?space=<id>#<option>.
// Spaces and sponsors are set in lib/ad-slots.ts.

const FEATURED_NOUN: Record<string, string> = {
  "featured-restaurants": "restaurant",
  "featured-cafes": "café",
  "featured-pubs": "pub or bar",
  "featured-accommodation": "place to stay",
  "featured-activities": "activity",
  "featured-shopping": "shop",
};

// The rule as the advertise page states it.
const RULE = "Adverts never appear inside a review, and paying for a space does not change what we write.";

function emptyCopy(slot: AdSlotDef): { kicker: string; heading: string; body: string } {
  switch (slot.kind) {
    case "home":
      return {
        kicker: "Advertising space",
        heading: "Your Formby business here",
        body: "One local business on the home page, clearly labelled as an advert, with a photo, a line about you and a link.",
      };
    case "featured":
      return {
        kicker: "Featured spot available",
        heading: `Put your ${FEATURED_NOUN[slot.id] ?? "business"} at the top of this page`,
        body: "Up to two featured places per category, marked Featured so visitors know it is a paid placement. Listings below stay in their normal order.",
      };
    default: {
      const noun = slot.kind === "post" ? "post" : "guide";
      return {
        kicker: `Sponsor this ${noun}`,
        heading: `Sponsor the ${slot.label} ${noun}`,
        body: `Your business shown once at the end of this ${noun}, labelled as a sponsor. ${RULE}`,
      };
    }
  }
}

export default function AdSlot({ id }: { id: string }) {
  const slot = AD_SLOTS[id];
  if (!slot) return null;

  // Featured spaces are filled only by Featured places from the listings data,
  // never by a sponsor card, so a category page shows no other advert.
  const sponsor = slot.kind === "featured" || slot.id.startsWith("featured-") ? null : activeSponsor(slot);

  if (sponsor) {
    if (process.env.NODE_ENV !== "production" && sponsor.text.trim().split(/\s+/).length > 30) {
      console.warn(`[AdSlot] ${id}: sponsor text is over 30 words`);
    }
    const label = slot.kind === "home" ? "Advertisement" : "Sponsor";
    return (
      <aside
        aria-label={label}
        data-ad-slot={slot.id}
        className="rounded-2xl border border-[#1C3220]/12 bg-white p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:items-center"
      >
        {sponsor.image && (
          <div className="relative w-full sm:w-48 aspect-[16/10] flex-none rounded-xl overflow-hidden bg-[#E8EDE6]">
            <Image src={sponsor.image} alt={sponsor.name} fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1C3220] mb-1.5">{label}</p>
          <p className="font-display text-lg font-bold text-[#1C3220] leading-snug mb-1">
            <a href={sponsor.url} target="_blank" rel="sponsored noopener" className="hover:text-[#2E6B3E] transition-colors">
              {sponsor.name}
            </a>
          </p>
          <p className="text-sm text-[#1C3220]/70 leading-relaxed">{sponsor.text}</p>
        </div>
        <a
          href={sponsor.url}
          target="_blank"
          rel="sponsored noopener"
          className="self-start sm:self-center flex-none inline-flex items-center gap-2 bg-[#2E6B3E] hover:bg-[#1C3220] text-white text-sm font-semibold px-4 py-2.5 rounded-[10px] transition-colors"
        >
          Visit website <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </aside>
    );
  }

  const option = getAdOption(slot.option);
  const copy = emptyCopy(slot);
  const priceName = slot.kind === "featured" ? slot.title : option?.name;

  return (
    <aside
      aria-label="Advertising space"
      data-ad-slot={slot.id}
      className="rounded-2xl border-[1.5px] border-dashed border-[#2E6B3E]/45 bg-[#F3F1E8] px-6 py-5 flex flex-wrap items-center justify-between gap-4"
    >
      <div className="min-w-[240px] flex-[1_1_380px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1C3220]/55 mb-1.5">{copy.kicker}</p>
        <p className="font-display text-[19px] font-bold text-[#1C3220] leading-snug mb-1.5">{copy.heading}</p>
        <p className="text-sm text-[#1C3220]/70 leading-relaxed">{copy.body}</p>
      </div>
      <div className="flex flex-col items-start gap-2">
        {option && (
          <span className="text-[13px] font-semibold text-[#1C3220]">
            {priceName} · {option.from} plus VAT
          </span>
        )}
        <Link
          href={advertiseHref(slot)}
          className="inline-block bg-[#2E6B3E] hover:bg-[#1C3220] text-white text-sm font-semibold px-[18px] py-2.5 rounded-[10px] transition-colors"
        >
          See advertising options
        </Link>
      </div>
    </aside>
  );
}
