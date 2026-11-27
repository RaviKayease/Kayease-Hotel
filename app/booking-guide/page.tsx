import type { Metadata } from "next";

import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";
import { bookingGuidePageData } from "@/app/data/bookingGuideData";

import BookingGuidePageClient from "./BookingGuidePageClient";

const canonicalUrl = `${SITE_URL}/booking-guide`;

const bookingGuideDescription =
  "Learn how to book your next stay with Oravilles. Explore our simple booking process, choose your dates, review reservation details and prepare for your getaway.";

const heroImageUrl = new URL(
  bookingGuidePageData.hero.image,
  SITE_URL,
).toString();

export const metadata: Metadata = {
  title: `Hotel Booking Guide | ${BRAND_NAME}`,
  description: bookingGuideDescription,

  keywords: [
    "hotel booking guide",
    "how to book a hotel",
    "hotel reservation process",
    "booking accommodation online",
    "hotel booking steps",
    "travel booking guide",
    "room reservation guide",
    "hotel booking information",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    type: "website",
    title: `Hotel Booking Guide | ${BRAND_NAME}`,
    description: bookingGuideDescription,
    url: canonicalUrl,
    siteName: BRAND_NAME,
    images: [
      {
        url: heroImageUrl,
        alt: bookingGuidePageData.hero.imageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Hotel Booking Guide | ${BRAND_NAME}`,
    description: bookingGuideDescription,
    images: [heroImageUrl],
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

export default function BookingGuidePage() {
  return <BookingGuidePageClient />;
}
