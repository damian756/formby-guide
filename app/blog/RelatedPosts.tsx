import Link from "next/link";
import { BLOG_POSTS, getBlogCategory, type BlogPost } from "@/lib/blog-posts";

// Three more posts under every post, so each post links to others and not only from the
// blog index: the same category first, then the rest, each by nearest date, so every post
// is linked from its neighbours rather than all pointing at the newest three.
// Sponsored posts are not suggested.
function postTime(p: BlogPost): number {
  const t = new Date(`${p.date} UTC`).getTime();
  return Number.isNaN(t) ? 0 : t;
}

export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const at = post ? postTime(post) : Date.now();
  const others = BLOG_POSTS.filter((p) => p.slug !== slug && !p.sponsor).sort(
    (a, b) => Math.abs(postTime(a) - at) - Math.abs(postTime(b) - at) || postTime(b) - postTime(a),
  );
  const same = others.filter((p) => post && p.categorySlug === post.categorySlug);
  const rest = others.filter((p) => !same.includes(p));
  return [...same, ...rest].slice(0, count);
}

export default function RelatedPosts({ slug }: { slug: string }) {
  const posts = relatedPosts(slug);
  if (!posts.length) return null;
  return (
    <section aria-labelledby="related-posts-heading" className="bg-[#F7F9F6] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl py-10">
        <h2 id="related-posts-heading" className="font-display text-xl font-bold text-[#1C3220] mb-4">
          More from the blog
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="block h-full bg-white rounded-xl border border-gray-200 p-4 hover:border-[#2E6B3E]/50 transition-colors"
              >
                <span className="block text-xs font-semibold uppercase tracking-wide text-[#2E6B3E] mb-1">
                  {getBlogCategory(p.categorySlug)?.label ?? "Blog"}
                </span>
                <span className="block text-sm font-semibold text-[#1C3220] leading-snug">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
