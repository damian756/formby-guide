import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS, getBlogPost, getBlogCategory } from "@/lib/blog-posts";
import { POST_COMPONENTS } from "@/app/blog/_content/index";

const BASE_URL = "https://www.formbyguide.co.uk";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  const category = getBlogCategory(post.categorySlug);
  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: `${post.title} | FormbyGuide.co.uk`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "FormbyGuide.co.uk",
      locale: "en_GB",
      publishedTime: post.date,
      authors: [post.author],
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

  const PostContent = POST_COMPONENTS[slug];
  if (!PostContent) notFound();

  return <PostContent />;
}
