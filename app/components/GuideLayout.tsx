import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, MapPin } from "lucide-react";
import type { Guide } from "@/lib/guides-config";
import { getRelatedGuides, getGuideUrl, GUIDE_CATEGORIES } from "@/lib/guides-config";

interface GuideLayoutProps {
  guide: Guide;
  children: React.ReactNode;
}

export default function GuideLayout({ guide, children }: GuideLayoutProps) {
  const relatedGuides = getRelatedGuides(guide.slug);

  const categoryLabel = GUIDE_CATEGORIES[guide.category].label;

  // The trail below for search engines. The category step links to a filtered view of
  // /guides (canonical: /guides), so it is not a page of its own and is left out here.
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.formbyguide.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.formbyguide.co.uk/guides" },
      { "@type": "ListItem", position: 3, name: guide.title, item: `https://www.formbyguide.co.uk${getGuideUrl(guide)}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7FAF7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── Breadcrumb strip ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#1C3220] border-b border-white/10"
      >
        <div className="container mx-auto px-4 max-w-7xl py-2.5">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#C9A96E] transition-colors font-medium">
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link href="/guides" className="hover:text-[#C9A96E] transition-colors font-medium">
                Guides
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link
                href={`/guides?category=${guide.category}`}
                className="hover:text-[#C9A96E] transition-colors font-medium"
              >
                {categoryLabel}
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-white/80 font-semibold">{guide.title}</li>
          </ol>
        </div>
      </nav>

      {/* ── Bespoke page content ── */}
      {children}

      {/* ── Related Guides ── */}
      {relatedGuides.length > 0 && (
        <section className="bg-[#F7FAF7] border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl py-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-[#C9A96E] font-bold mb-2">
                Keep Exploring
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1C3220]">
                Related Guides
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={getGuideUrl(related)}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#2E6B3E]/30 transition-all group overflow-hidden"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={related.heroImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-[#C9A96E] text-[10px] font-bold uppercase tracking-wider">
                        {GUIDE_CATEGORIES[related.category].label}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-[#1C3220] text-sm mb-1.5 group-hover:text-[#2E6B3E] transition-colors leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {related.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-[#2E6B3E] font-semibold text-sm hover:text-[#1C3220] transition-colors"
              >
                All guides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── List Your Business CTA ── */}
      <section className="bg-[#1C3220] py-14">
        <div className="container mx-auto px-4 max-w-7xl text-center text-white">
          <MapPin className="w-8 h-8 text-[#C9A96E] mx-auto mb-4" />
          <p className="text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-3">
            Formby Business?
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            List Your Business on Formby Guide
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            A basic listing is free. Claim yours or add your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/claim-listing"
              className="bg-[#C9A96E] hover:bg-[#E0C08A] text-[#1C3220] px-8 py-3.5 rounded-full font-bold transition-colors"
            >
              List Your Business
            </Link>
            <Link
              href="/advertise"
              className="bg-white/10 border border-white/25 text-white px-8 py-3.5 rounded-full font-semibold transition-colors hover:bg-white/20"
            >
              Advertising Options →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
