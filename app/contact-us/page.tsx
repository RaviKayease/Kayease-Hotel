import type { Metadata } from "next";
import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";

import { contactUsPageData } from "@/app/data/contactUsData";

import ContactPageClient from "./ContactPageClient";

// ============================================
// CONTACT PAGE SEO METADATA
// ============================================

const contactDescription = [
  contactUsPageData.enquirySection.description,
  contactUsPageData.faqSection.description,
  ...contactUsPageData.faqSection.items.map((item) => item.answer),
]
  .filter(Boolean)
  .join(" ")
  .slice(0, 160);

const contactImage = contactUsPageData.contactInfo.image.src;

const contactImageUrl = contactImage
  ? new URL(contactImage, SITE_URL).toString()
  : undefined;

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND_NAME} — Get in Touch`,

  description: contactDescription,

  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },

  openGraph: {
    type: "website",
    title: `Contact Us | ${BRAND_NAME}`,
    description: contactDescription,
    url: `${SITE_URL}/contact-us`,
    images: contactImageUrl
      ? [
          {
            url: contactImageUrl,
            alt: contactUsPageData.contactInfo.image.alt,
          },
        ]
      : [],
  },

  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${BRAND_NAME}`,
    description: contactDescription,
    images: contactImageUrl ? [contactImageUrl] : [],
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
// CONTACT PAGE
// ============================================

export default function ContactPage() {
  return <ContactPageClient />;
}
