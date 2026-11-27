import type { Metadata } from "next";

import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";

import TermsAndConditionsPageClient from "./TermsAndConditionsPageClient";

const canonicalUrl = `${SITE_URL}/terms-and-conditions`;

const termsDescription = `Read the ${BRAND_NAME} Terms and Conditions to understand our hotel booking services, reservation requirements, payment conditions, cancellation policies and guest responsibilities.`;

export const metadata: Metadata = {
  title: `Terms and Conditions | ${BRAND_NAME}`,
  description: termsDescription,

  keywords: [
    `${BRAND_NAME} terms and conditions`,
    "hotel booking terms and conditions",
    "hotel reservation terms",
    "accommodation booking conditions",
    "guest booking responsibilities",
    "hotel payment and cancellation terms",
    "booking platform terms of service",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    type: "website",
    title: `Terms and Conditions | ${BRAND_NAME}`,
    description: termsDescription,
    url: canonicalUrl,
    siteName: BRAND_NAME,
  },

  twitter: {
    card: "summary",
    title: `Terms and Conditions | ${BRAND_NAME}`,
    description: termsDescription,
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

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsPageClient />;
}
