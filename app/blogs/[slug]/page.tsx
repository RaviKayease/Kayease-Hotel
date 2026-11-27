import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BRAND_NAME } from "../../components/brand";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/app/data/blogPosts";
import BlogDetailPageClient from "./BlogDetailPageClient";

export const instant = false;

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static routes for all blog articles
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata for each blog article
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: `Article Not Found | ${BRAND_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${post.title} | ${BRAND_NAME}`;

  const description =
    post.excerpt ||
    post.content
      .flatMap((section) => section.paragraphs)
      .join(" ")
      .slice(0, 160);

  const imageUrl = post.image
    ? new URL(post.image, SITE_URL).toString()
    : undefined;

  const canonicalUrl = `${SITE_URL}/blogs/${post.slug}`;

  return {
    title,
    description,

    keywords: [
      post.title,
      post.category,
      post.author,
      "travel inspiration",
      "luxury travel",
      "hospitality",
      "travel journal",
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      authors: [post.author],
      section: post.category,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

// Blog Detail Page
export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPageClient slug={slug} />;
}
