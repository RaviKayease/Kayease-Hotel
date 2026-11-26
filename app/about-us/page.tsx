import type { Metadata } from "next";
import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";

import {
  aboutUsHero,
  aboutUsStory,
  aboutUsValues,
} from "@/app/data/aboutUsData";

import AboutPageClient from "./AboutPageClient";

// ============================================
// ABOUT PAGE SEO METADATA
// ============================================

const aboutDescription = [
  aboutUsHero.description,
  aboutUsStory.belief.description,
  aboutUsValues.values.map((item) => item.description).join(" "),
]
  .filter(Boolean)
  .join(" ")
  .slice(0, 160);

const aboutImage = aboutUsHero.stayHighlights[0]?.image;

const aboutImageUrl = aboutImage
  ? new URL(aboutImage, SITE_URL).toString()
  : undefined;

export const metadata: Metadata = {
  title: `About Us | ${BRAND_NAME} — ${aboutUsHero.heading}`,

  description: aboutDescription,

  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },

  openGraph: {
    type: "website",
    title: `About Us | ${BRAND_NAME}`,
    description: aboutDescription,
    url: `${SITE_URL}/about-us`,
    images: aboutImageUrl
      ? [
          {
            url: aboutImageUrl,
            alt: aboutUsHero.stayHighlights[0].alt,
          },
        ]
      : [],
  },

  twitter: {
    card: "summary_large_image",
    title: `About Us | ${BRAND_NAME}`,
    description: aboutDescription,
    images: aboutImageUrl ? [aboutImageUrl] : [],
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
// ABOUT PAGE
// ============================================

export default function AboutPage() {
  return <AboutPageClient />;
}
