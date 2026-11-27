import type { Metadata } from "next";
import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";

import { blogPosts, categories, blogPageData } from "@/app/data/blogPosts";

import BlogPageClient from "./BlogPageClient";

// ============================================
// BLOG PAGE SEO METADATA
// ============================================

const blogDescription = [
  blogPageData.hero.title,
  blogPageData.hero.highlight,
  blogPageData.closingSection.description,
  ...blogPosts.slice(0, 3).map((post) => post.excerpt),
]
  .filter(Boolean)
  .join(" ")
  .slice(0, 160);

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

const blogImage = featuredPost?.image;

const blogImageUrl = blogImage
  ? new URL(blogImage, SITE_URL).toString()
  : undefined;

const blogTitle = `Stories Worth Travelling For | ${BRAND_NAME}`;

export const metadata: Metadata = {
  title: blogTitle,

  description: blogDescription,

  keywords: [
    ...categories.filter((category) => category !== "All Stories"),
    ...blogPosts.map((post) => post.title),
    "travel journal",
    "travel inspiration",
    "luxury travel",
    "hospitality stories",
  ],

  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },

  openGraph: {
    type: "website",
    title: blogTitle,
    description: blogDescription,
    url: `${SITE_URL}/blogs`,
    images: blogImageUrl
      ? [
          {
            url: blogImageUrl,
            alt: featuredPost?.title ?? "Travel journal",
          },
        ]
      : [],
  },

  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: blogImageUrl ? [blogImageUrl] : [],
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

// ============================================
// BLOG PAGE
// ============================================

export default function BlogPage() {
  return <BlogPageClient />;
}
