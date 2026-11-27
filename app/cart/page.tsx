import type { Metadata } from "next";
import { BRAND_NAME } from "../components/brand";
import { SITE_URL } from "@/lib/site";
import CartPageClient from "./CartPageClient";

const canonicalUrl = `${SITE_URL}/cart`;

export const metadata: Metadata = {
  title: `Your Cart | ${BRAND_NAME}`,
  description:
    "Review your selected stays, check your booking details, and submit your room booking request with ease.",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: `Your Cart | ${BRAND_NAME}`,
    description:
      "Review your selected stays and booking details before submitting your booking request.",
    url: canonicalUrl,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: `Your Cart | ${BRAND_NAME}`,
    description:
      "Review your selected stays and booking details before submitting your booking request.",
  },
};

export default function CartPage() {
  return <CartPageClient />;
}
