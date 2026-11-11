import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS, getBlogPost, getBlogCategory } from "@/lib/blog-posts";
import { POST_COMPONENTS, SPONSORED_POST_BODIES } from "@/app/blog/_content/index";
import SponsoredArticle from "@/app/blog/SponsoredArticle";

const BASE_URL = "https://www.formbyguide.co.uk";

type Props = { params: Promise<{ slug: string }> };

// Re-render hourly so an end-of-post sponsor drops off when its end date passes.
export const revalidate = 3600;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

// "June 10, 2026" -> "2026-06-10" (Open Graph wants an ISO date). Read as UTC so the
// day does not move with the server's time zone.
function isoDate(date: string): string | undefined {
  const d = new Date(`${date} UTC`);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  const category = getBlogCategory(post.categorySlug);
  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "FormbyGuide.co.uk",
      locale: "en_GB",
      publishedTime: isoDate(post.date),
      // A sponsored article is bylined by its sponsor, never a persona.
      authors: [post.sponsor ? post.sponsor.name : post.author],
      tags: category ? [category.label] : undefined,
      images: [{ url: `${BASE_URL}/og-default.png`, width: 1200, height: 630, alt: "FormbyGuide.co.uk" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // A sponsored post always uses the sponsored layout ("Sponsored by X", the
  // sponsor as JSON-LD author, no persona bio), whatever else is registered for
  // the slug. Its body comes from SPONSORED_POST_BODIES, never from a Clare
  // template in POST_COMPONENTS; a sponsored post without a body fails the build.
  if (post.sponsor) {
    const Body = SPONSORED_POST_BODIES[slug];
    if (!Body) {
      throw new Error(`Sponsored post "${slug}" needs a body-only component in SPONSORED_POST_BODIES (app/blog/_content/index.ts)`);
    }
    return (
      <SponsoredArticle slug={slug}>
        <Body />
      </SponsoredArticle>
    );
  }

  const PostContent = POST_COMPONENTS[slug];
  if (!PostContent) notFound();

  return <PostContent />;
}
