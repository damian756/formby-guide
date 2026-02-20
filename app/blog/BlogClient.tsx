"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, X } from "lucide-react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categorySlug: string;
  gradient: string;
};

export type BlogCategory = {
  slug: string;
  label: string;
  color: string;
  description: string;
};

interface Props {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogClient({ posts, categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
  }, [activeCategory]);

  function selectCategory(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`);
  }

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory) {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, activeCategory, query]);

  const activeCat = categories.find((c) => c.slug === activeCategory);

  return (
    <>
      {/* Search bar */}
      <div className="max-w-2xl mx-auto px-4 mb-6 -mt-6 relative z-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-11 pr-10 text-[#1C3220] text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/40 focus:border-[#C9A96E] transition-all placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-[#F7F9F6] border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => selectCategory("")}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === ""
                  ? "bg-[#1C3220] text-white shadow"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#1C3220] hover:text-[#1C3220]"
              }`}
            >
              All posts
              <span className="ml-1.5 opacity-60 font-normal">{posts.length}</span>
            </button>
            {categories.map((cat) => {
              const count = posts.filter((p) => p.categorySlug === cat.slug).length;
              if (count === 0) return null;
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => selectCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "text-white shadow"
                      : "bg-white text-gray-600 border border-gray-200 hover:text-[#1C3220] hover:border-gray-300"
                  }`}
                  style={isActive ? { backgroundColor: cat.color } : {}}
                >
                  {cat.label}
                  <span className="ml-1.5 opacity-60 font-normal">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results header */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2 flex items-center justify-between">
        <div>
          {query ? (
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-[#1C3220]">{filtered.length}</span> post{filtered.length !== 1 ? "s" : ""} matching &ldquo;{query}&rdquo;
            </p>
          ) : activeCat ? (
            <div>
              <p className="font-display text-xl font-bold text-[#1C3220]">{activeCat.label}</p>
              <p className="text-sm text-gray-500 mt-0.5">{activeCat.description}</p>
            </div>
          ) : null}
        </div>
        {(query || activeCategory) && (
          <button
            onClick={() => { setQuery(""); selectCategory(""); }}
            className="text-xs text-gray-400 hover:text-[#1C3220] flex items-center gap-1 transition-colors"
          >
            <X className="w-3 h-3" /> Clear filters
          </button>
        )}
      </div>

      {/* Post grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="font-display text-xl font-bold text-[#1C3220] mb-2">
              {query ? `No posts found for "${query}"` : "No posts in this category yet"}
            </h3>
            <p className="text-gray-500 text-sm">
              {query ? "Try a different search term." : "We're adding new posts every week."}
            </p>
            <button
              onClick={() => { setQuery(""); selectCategory(""); }}
              className="mt-5 text-sm font-semibold text-[#C9A96E] hover:underline"
            >
              View all posts →
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {filtered.map((post) => {
              const cat = categories.find((c) => c.slug === post.categorySlug);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A96E]/30 hover:shadow-lg transition-all flex flex-col"
                >
                  <div
                    className="relative h-48 overflow-hidden flex-none"
                    style={{ background: post.gradient }}
                  >
                    {cat && (
                      <span
                        className="absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow"
                        style={{ backgroundColor: cat.color }}
                      >
                        {cat.label}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[11px] text-gray-400 mb-2">{post.date} · {post.readTime}</p>
                    <h2 className="font-display font-bold text-[#1C3220] text-lg leading-snug mb-2 group-hover:text-[#C9A96E] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                    <span className="mt-4 text-[#C9A96E] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Browse by category (only when no filter active) */}
      {!activeCategory && !query && (
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl font-bold text-[#1C3220] mb-6">Browse by category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => {
              const count = posts.filter((p) => p.categorySlug === cat.slug).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.slug}
                  onClick={() => selectCategory(cat.slug)}
                  className="flex flex-col items-start p-4 bg-white border border-gray-100 rounded-2xl hover:border-[#C9A96E]/30 hover:shadow-md transition-all text-left group"
                >
                  <div
                    className="w-8 h-8 rounded-xl mb-3 flex-none"
                    style={{ backgroundColor: cat.color + "25" }}
                  />
                  <span className="font-semibold text-[#1C3220] text-sm leading-tight group-hover:text-[#C9A96E] transition-colors">{cat.label}</span>
                  <span className="text-xs text-gray-400 mt-1">{count} post{count !== 1 ? "s" : ""}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
