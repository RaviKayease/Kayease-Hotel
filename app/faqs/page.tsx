import type { Metadata } from "next";

import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";
import { faqsPageData } from "../data/faqs";

import FAQsPageClient from "./FAQsPageClient";

// =====================================================
// FAQ PAGE SEO METADATA
// =====================================================

const canonicalUrl = `${SITE_URL}/faqs`;

const faqDescription =
  "Find answers to frequently asked questions about hotel reservations, accommodation, payments, cancellations, booking changes and guest support.";

const faqKeywords = [
  "hotel booking FAQs",
  "frequently asked questions",
  "hotel reservations",
  "hotel booking help",
  "hotel cancellation policy",
  "hotel payment information",
  "guest accommodation questions",
  ...faqsPageData.map((faq) => faq.question),
  ...Array.from(new Set(faqsPageData.map((faq) => faq.category))),
];

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${BRAND_NAME}`,
  description: faqDescription,
  keywords: faqKeywords,

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    type: "website",
    title: `Frequently Asked Questions | ${BRAND_NAME}`,
    description: faqDescription,
    url: canonicalUrl,
    siteName: BRAND_NAME,
  },

  twitter: {
    card: "summary",
    title: `Frequently Asked Questions | ${BRAND_NAME}`,
    description: faqDescription,
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

export default function FAQsPage() {
  return <FAQsPageClient />;
}
