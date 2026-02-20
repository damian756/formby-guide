"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu, X, ChevronDown,
  Utensils, Beer, Coffee, ShoppingBag, Dumbbell, BedDouble,
  Trees, Waves, Squirrel, Compass,
} from "lucide-react";

const NATURE_LINKS = [
  { href: "/things-to-do",           label: "Things To Do — Full Guide", icon: Compass,  color: "text-[#2E6B3E]" },
];

const BUSINESS_CATEGORIES = [
  { slug: "restaurants",   label: "Restaurants",    icon: Utensils,   color: "text-red-500" },
  { slug: "cafes",         label: "Cafes & Coffee", icon: Coffee,     color: "text-amber-600" },
  { slug: "pubs",          label: "Pubs & Bars",    icon: Beer,       color: "text-blue-600" },
  { slug: "activities",   label: "Activities",     icon: Dumbbell,   color: "text-orange-500" },
  { slug: "accommodation", label: "Places to Stay", icon: BedDouble,  color: "text-purple-500" },
  { slug: "shopping",      label: "Shopping",       icon: ShoppingBag,color: "text-rose-500" },
];

export default function NavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <>
      {/* ── Desktop ─────────────────────────────────────────── */}
      <div className="hidden md:flex items-center gap-1">

        {/* Things to Do dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setExploreOpen(true)}
          onMouseLeave={() => setExploreOpen(false)}
        >
          <Link
            href="/things-to-do"
            className="flex items-center gap-1.5 text-[#1C3220] hover:text-[#2E6B3E] transition-colors font-medium px-3 py-2 rounded-lg text-sm"
          >
            <Compass className="w-3.5 h-3.5" />
            Things to Do
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} />
          </Link>

          {/* Mega dropdown */}
          <div className={`absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72 z-50 transition-all duration-200 ${exploreOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>

            {/* Nature & content pages */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2 px-2">Explore Formby</p>
            <div className="grid grid-cols-1 gap-0.5 mb-3">
              {NATURE_LINKS.map(({ href, label, icon: Icon, color }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F0F5EF] text-[#1C3220] text-sm transition-colors group"
                  onClick={() => setExploreOpen(false)}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color} group-hover:scale-110 transition-transform`} />
                  <span className="font-medium group-hover:text-[#2E6B3E] transition-colors">{label}</span>
                </Link>
              ))}
            </div>

            {/* Business categories */}
            <div className="border-t border-gray-100 pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2 px-2">Browse by category</p>
              <div className="grid grid-cols-1 gap-0.5">
                {BUSINESS_CATEGORIES.map(({ slug, label, icon: Icon, color }) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F0F5EF] text-[#1C3220] text-sm transition-colors group"
                    onClick={() => setExploreOpen(false)}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium group-hover:text-[#2E6B3E] transition-colors">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-px h-5 bg-gray-200 mx-1" />

        <Link href="/formby-beach" className="text-[#1C3220]/70 hover:text-[#2E6B3E] font-medium px-3 py-2 rounded-lg text-sm transition-colors">
          Formby Beach
        </Link>
        <Link href="/red-squirrels-formby" className="text-[#1C3220]/70 hover:text-[#2E6B3E] font-medium px-3 py-2 rounded-lg text-sm transition-colors">
          Red Squirrels
        </Link>
        <Link href="/formby-pinewoods" className="text-[#1C3220]/70 hover:text-[#2E6B3E] font-medium px-3 py-2 rounded-lg text-sm transition-colors">
          Pinewoods
        </Link>
        <Link href="/about-formby" className="text-[#1C3220]/70 hover:text-[#2E6B3E] font-medium px-3 py-2 rounded-lg text-sm transition-colors">
          About Formby
        </Link>

        <div className="w-px h-5 bg-gray-200 mx-1" />

        <Link
          href="/claim-listing"
          className="bg-[#2E6B3E] hover:bg-[#1C3220] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          List Your Business
        </Link>
      </div>

      {/* ── Mobile hamburger ────────────────────────────────── */}
      <button
        className="md:hidden text-[#1C3220] p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="overflow-y-auto max-h-[90vh] px-4 py-4">

          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Explore Formby</p>
          <div className="grid grid-cols-2 gap-1 mb-4">
            {NATURE_LINKS.map(({ href, label, icon: Icon, color }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2.5 px-3 py-3 rounded-xl hover:bg-[#F0F5EF] text-[#1C3220] text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 mb-4">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Browse by category</p>
            <div className="grid grid-cols-2 gap-1">
              {BUSINESS_CATEGORIES.map(({ slug, label, icon: Icon, color }) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl hover:bg-[#F0F5EF] text-[#1C3220] text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 mb-4 space-y-1">
            <Link href="/formby-beach" className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#F0F5EF] text-[#1C3220] text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Formby Beach
            </Link>
            <Link href="/red-squirrels-formby" className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#F0F5EF] text-[#1C3220] text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Red Squirrels
            </Link>
            <Link href="/formby-pinewoods" className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#F0F5EF] text-[#1C3220] text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Pinewoods
            </Link>
            <Link href="/about-formby" className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#F0F5EF] text-[#1C3220] text-sm font-medium" onClick={() => setMobileOpen(false)}>
              About Formby
            </Link>
            <Link href="/contact" className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-[#F0F5EF] text-[#1C3220] text-sm font-medium" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>

          <Link
            href="/claim-listing"
            className="block w-full text-center bg-[#2E6B3E] text-white px-4 py-3.5 rounded-xl font-semibold hover:bg-[#1C3220] transition-colors mb-4"
            onClick={() => setMobileOpen(false)}
          >
            List Your Business →
          </Link>
        </div>
      </div>
    </>
  );
}
