"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Star, MapPin, Search, X, LayoutGrid, Map, SlidersHorizontal } from "lucide-react";
import { MapSkeleton, type MapPin as MapPinType } from "./CategoryMap";

const CategoryMap = dynamic(() => import("./CategoryMap"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export type BrowserBusiness = {
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  listingTier: string;
  address: string;
  postcode: string;
  rating: number | null;
  reviewCount: number | null;
  priceRange: string | null;
  lat: number | null;
  lng: number | null;
};

type SortOption = { key: string; label: string };
type AreaDef = { key: string; label: string };

type Props = {
  businesses: BrowserBusiness[];
  mapPins: MapPinType[];
  accentColor: string;
  themeGradient: string;
  emoji: string;
  category: string;
  activeArea: string | undefined;
  activeSort: string;
  sortOptions: SortOption[];
  areas: AreaDef[];
  currentSort: string | undefined;
  currentArea: string | undefined;
};

function getSnippet(b: BrowserBusiness): string | null {
  if (b.shortDescription) return b.shortDescription;
  if (b.description) {
    const first = b.description.split(/(?<=[.!?])\s+/)[0] ?? b.description;
    return first.length > 140 ? first.slice(0, 137) + "…" : first;
  }
  return null;
}

function getAreaLabel(address: string, postcode: string): string {
  if (postcode.startsWith("L23") || address.includes("Crosby")) return "Crosby";
  if (postcode.startsWith("L38") || address.includes("Hightown")) return "Hightown";
  if (address.includes("Freshfield")) return "Freshfield";
  return "Formby";
}

export default function CategoryBrowser({
  businesses,
  mapPins,
  accentColor,
  themeGradient,
  emoji,
  category,
  activeArea,
  activeSort,
  sortOptions,
  areas,
  currentSort,
  currentArea,
}: Props) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"list" | "map">("list");

  function buildUrl(overrides: Record<string, string | undefined>): string {
    const merged: Record<string, string> = {};
    if (currentSort) merged.sort = currentSort;
    if (currentArea) merged.area = currentArea;
    Object.entries(overrides).forEach(([k, v]) => {
      if (v === undefined) delete merged[k];
      else merged[k] = v;
    });
    const qs = new URLSearchParams(merged).toString();
    return `/${category}${qs ? `?${qs}` : ""}`;
  }

  const q = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return businesses;
    return businesses.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        (b.shortDescription ?? "").toLowerCase().includes(q) ||
        (b.description ?? "").toLowerCase().includes(q)
    );
  }, [businesses, q]);

  const filteredPins = useMemo(() => {
    if (!q) return mapPins;
    return mapPins.filter((p) => p.name.toLowerCase().includes(q));
  }, [mapPins, q]);

  const activeAreaLabel = areas.find((a) => a.key === activeArea)?.label;

  return (
    <>
      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search in Formby…`}
          className="w-full pl-11 pr-11 py-3.5 text-sm bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-gray-400"
          style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Area filter */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wide shrink-0 mr-1">
            <MapPin className="w-3 h-3" /> Area
          </span>
          <Link
            href={buildUrl({ area: undefined })}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              !activeArea ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={!activeArea ? { backgroundColor: accentColor } : {}}
          >
            All
          </Link>
          {areas.map(({ key, label }) => (
            <Link
              key={key}
              href={buildUrl({ area: key })}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeArea === key ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={activeArea === key ? { backgroundColor: accentColor } : {}}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Sort + count + view toggle */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <div className="flex items-center gap-1 bg-white rounded-xl border border-gray-200 shadow-sm px-2 py-1.5 flex-wrap">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400 mr-1 ml-1 shrink-0" />
          {sortOptions.map(({ key, label }) => (
            <Link
              key={key}
              href={buildUrl({ sort: key === "default" ? undefined : key })}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeSort === key ? "text-white" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              }`}
              style={activeSort === key ? { backgroundColor: accentColor } : {}}
            >
              {label}
            </Link>
          ))}
        </div>

        <span className="text-xs text-gray-400 ml-1 hidden sm:block">
          {q ? (
            <><span className="font-semibold text-gray-700">{filtered.length}</span> of {businesses.length} results</>
          ) : (
            <>
              <span className="font-semibold text-gray-700">{filtered.length}</span>
              {" "}listing{filtered.length !== 1 ? "s" : ""}
              {activeAreaLabel && <span className="text-gray-300"> · </span>}
              {activeAreaLabel && <span className="font-medium text-gray-600">{activeAreaLabel}</span>}
            </>
          )}
        </span>

        <div className="ml-auto flex items-center gap-1 bg-white border border-gray-200 rounded-xl shadow-sm p-1">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              view === "list" ? "bg-gray-100 text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">List</span>
          </button>
          <button
            onClick={() => setView("map")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              view === "map" ? "bg-gray-100 text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Map</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "map" ? (
        <CategoryMap pins={filteredPins} accentColor={accentColor} />
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <div className="text-5xl mb-4">{emoji}</div>
          {q ? (
            <>
              <p className="text-gray-500 text-lg mb-2">No results for &ldquo;{search}&rdquo;</p>
              <button onClick={() => setSearch("")} className="text-[#2E6B3E] font-semibold text-sm hover:underline">
                Clear search
              </button>
            </>
          ) : activeArea ? (
            <>
              <p className="text-gray-500 text-lg mb-2">No listings in this area</p>
              <Link href={`/${category}`} className="text-[#2E6B3E] font-semibold text-sm hover:underline">
                Clear area filter
              </Link>
            </>
          ) : (
            <>
              <p className="text-gray-500 text-lg mb-2">No listings yet</p>
              <p className="text-gray-400 text-sm mb-6">Be the first to list your business here.</p>
              <Link href="/claim-listing" className="inline-block bg-[#2E6B3E] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1C3220] transition-colors">
                Add Your Business
              </Link>
            </>
          )}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((b) => {
            const isFeatured = b.listingTier === "featured" || b.listingTier === "premium";
            const areaLabel = getAreaLabel(b.address, b.postcode);
            const snippet = getSnippet(b);

            return (
              <Link
                key={b.slug}
                href={`/${category}/${b.slug}`}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all ${
                  isFeatured
                    ? "border-[#C9A96E]/40 ring-1 ring-[#C9A96E]/15 shadow-md"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                {/* Colour accent strip */}
                <div className={`w-full bg-gradient-to-r ${themeGradient} ${isFeatured ? "h-2" : "h-1"}`} />

                <div className="p-5 flex flex-col flex-1">
                  {isFeatured && (
                    <div className="mb-2.5">
                      <span className="bg-[#C9A96E]/10 text-[#C9A96E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#C9A96E]/20">
                        ✦ Featured
                      </span>
                    </div>
                  )}

                  <h2 className="font-display font-bold text-[#1C3220] text-lg leading-snug group-hover:text-[#2E6B3E] transition-colors mb-1 line-clamp-2">
                    {b.name}
                  </h2>

                  <p className="flex items-center gap-1 text-gray-400 text-xs mb-3">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {areaLabel}
                  </p>

                  {snippet ? (
                    <p className="text-gray-500 text-sm line-clamp-2 flex-1 mb-4 leading-relaxed">{snippet}</p>
                  ) : (
                    <div className="flex-1 mb-4" />
                  )}

                  <div className="flex items-center gap-2 flex-wrap mt-auto pt-3 border-t border-gray-50">
                    {b.rating ? (
                      <span className="flex items-center gap-1 bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {b.rating.toFixed(1)}
                        {b.reviewCount && (
                          <span className="font-normal text-amber-500">
                            ({b.reviewCount >= 1000 ? `${(b.reviewCount / 1000).toFixed(1)}k` : b.reviewCount})
                          </span>
                        )}
                      </span>
                    ) : null}

                    <div className="ml-auto flex items-center gap-2">
                      {b.priceRange && (
                        <span className="text-gray-400 text-xs font-semibold">{b.priceRange}</span>
                      )}
                      <span
                        className="text-xs font-bold group-hover:translate-x-0.5 transition-transform"
                        style={{ color: accentColor }}
                      >
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
