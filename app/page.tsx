import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import HomePageClient from "./HomePageClient";
import { BRAND_NAME } from "./components/brand";

import {
  homeHeroData,
  hotelCollectionData,
  editorialHotelsData,
  featuredExperiencesData,
  editorialShowcaseData,
} from "./data/homePageData";

const getUniqueKeywords = () => {
  const values = [
    homeHeroData.title,
    homeHeroData.tagline,
    homeHeroData.imageAlt,
    hotelCollectionData.heading,
    hotelCollectionData.highlightedHeading,
    hotelCollectionData.collectionDescription,
    hotelCollectionData.trendingHeading,

    ...editorialHotelsData.flatMap((hotel) => [
      hotel.name,
      hotel.location,
      hotel.description,
    ]),

    ...featuredExperiencesData.experiences.flatMap((experience) => [
      experience.name,
      experience.category,
      experience.description,
    ]),

    ...editorialShowcaseData.slides.flatMap((slide) => [
      slide.title,
      slide.highlight,
      slide.description,
    ]),
  ];

  return [
    ...new Set(
      values
        .filter((value) => typeof value === "string" && value.trim())
        .map((value) => value.trim()),
    ),
  ];
};

const getHomepageDescription = () =>
  [homeHeroData.tagline, hotelCollectionData.collectionDescription]
    .filter(Boolean)
    .join(" ");

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      url: SITE_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND_NAME,
      url: SITE_URL,
      description: getHomepageDescription(),
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#featured-hotels`,
      numberOfItems: editorialHotelsData.length,
      name: hotelCollectionData.heading,
      description: hotelCollectionData.collectionDescription,
      itemListElement: editorialHotelsData.map((hotel, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: hotel.name,
          description: hotel.description,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: "/",
  },

  title: `${homeHeroData.title} | ${homeHeroData.tagline}`,

  description: getHomepageDescription(),

  keywords: getUniqueKeywords(),

  openGraph: {
    type: "website",
    title: `${homeHeroData.title} | ${homeHeroData.tagline}`,
    description: getHomepageDescription(),
    images: [
      {
        url: homeHeroData.image.src,
        alt: homeHeroData.imageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${homeHeroData.title} | ${homeHeroData.tagline}`,
    description: getHomepageDescription(),
    images: [homeHeroData.image.src],
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <HomePageClient />
    </>
  );
}
