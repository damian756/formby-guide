import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { getBlogPost, getBlogCategory } from "@/lib/blog-posts";

// Layout for a paid, sponsored article (the "Sponsored article" option on
// /advertise). app/blog/[slug]/page.tsx wraps the post in this whenever the
// post has a `sponsor`: register a body-only component (no Clare template) in
// SPONSORED_POST_BODIES in app/blog/_content/index.ts.
//
// It reads the title, standfirst, image, date and `sponsor` from BLOG_POSTS.
// It labels the post Sponsored, bylines it "Sponsored by <name>", names the
// sponsor organisation as the JSON-LD author, and shows no persona bio.

const BASE_URL = "https://www.formbyguide.co.uk";

/** A link to the sponsor: always marked as a paid link. */
export function SponsorLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="sponsored noopener" className="text-[#2E6B3E] underline hover:text-[#1C3220]">
      {children}
    </a>
  );
}

function isoDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function SponsoredArticle({ slug, children }: { slug: string; children: ReactNode }) {
  const post = getBlogPost(slug);
  if (!post?.sponsor) {
    throw new Error(`SponsoredArticle: post "${slug}" needs a sponsor in lib/blog-posts.ts`);
  }
  const { sponsor } = post;
  const category = getBlogCategory(post.categorySlug);
  const url = `${BASE_URL}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-[#F7F9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            url,
            datePublished: isoDate(post.date),
            author: { "@type": "Organization", name: sponsor.name, url: sponsor.url },
            publisher: {
              "@type": "Organization",
              "@id": "https://www.churchtownmedia.co.uk/#organization",
              name: "Churchtown Media",
              url: "https://www.churchtownmedia.co.uk",
            },
            image: `${BASE_URL}${post.image}`,
          }),
        }}
      />

      <nav className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#2E6B3E]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-[#2E6B3E]">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 line-clamp-1">{post.title}</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-10">
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block bg-[#C9A96E] text-[#1C3220] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Sponsored
            </span>
            {category && (
              <span
                className="inline-block text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ backgroundColor: category.color }}
              >
                {category.label}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 896px" />
          </div>
          <p className="text-sm text-gray-500">
            Sponsored by <SponsorLink href={sponsor.url}>{sponsor.name}</SponsorLink>. {post.date}
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">{children}</div>

        <aside className="mt-12 rounded-2xl border border-[#C9A96E]/40 bg-[#C9A96E]/10 p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1C3220]/55 mb-1.5">About this article</p>
          <p className="text-sm text-[#1C3220]/75 leading-relaxed">
            This is a sponsored article. {sponsor.name} paid for it, and we wrote it with them and checked it for facts. It is
            not a review. Paying does not change what we write anywhere else on FormbyGuide.{" "}
            <Link href="/disclosure#advertising" className="text-[#2E6B3E] underline hover:text-[#1C3220]">How advertising works here</Link>.
          </p>
          <p className="text-sm mt-3">
            <SponsorLink href={sponsor.url}>Visit {sponsor.name}</SponsorLink>
          </p>
        </aside>
      </article>
    </div>
  );
}
