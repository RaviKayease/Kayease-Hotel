import type { Metadata } from "next";

import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";

import PrivacyPolicyPageClient from "./PrivacyPolicyPageClient";

const canonicalUrl = `${SITE_URL}/privacy-policy`;

const privacyDescription = `Read the ${BRAND_NAME} Privacy Policy to understand how we collect, use, store and protect personal information, manage cookies, and respect your privacy choices.`;

export const metadata: Metadata = {
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: privacyDescription,

  keywords: [
    `${BRAND_NAME} privacy policy`,
    "hotel booking privacy policy",
    "hotel guest data protection",
    "personal information protection",
    "hotel reservation data privacy",
    "website cookies and privacy",
    "customer data security",
    "guest privacy rights",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    type: "website",
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: privacyDescription,
    url: canonicalUrl,
    siteName: BRAND_NAME,
  },

  twitter: {
    card: "summary",
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: privacyDescription,
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
