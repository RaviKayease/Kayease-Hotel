import type { Metadata } from "next";
import { Suspense } from "react";

import { SITE_URL } from "../../lib/site";
import { BRAND_NAME } from "../components/brand";

import RoomsPageClient from "./RoomsPageClient";

import {
  rooms,
  roomsHero,
  roomsCollectionContent,
  roomCategories,
  roomLocations,
} from "../data/roomsPageData";

// ============================================================
// ROOMS PAGE — SEO CONTENT DERIVED FROM EXISTING DATA
// ============================================================

const getUniqueKeywords = () => {
  const values = [
    roomsHero.title,
    roomsHero.eyebrow,
    roomsHero.heading,
    roomsHero.highlightedHeading,
    roomsHero.imageAlt,
    roomsCollectionContent.heading,

    ...roomCategories,

    ...roomLocations,

    ...rooms.flatMap((room) => [
      room.name,
      room.category,
      room.location,
      room.description,
      room.tag,
      room.beds,
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

const getRoomsDescription = () => {
  const categories = roomCategories.join(", ");

  const locations = [...new Set(rooms.map((room) => room.location))].join(", ");

  return `${roomsCollectionContent.heading}. Explore ${roomsHero.title.toLowerCase()} across ${categories}, with stays in ${locations}.`;
};

// ============================================================
// ROOMS PAGE — STRUCTURED DATA
// ============================================================

const roomsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/rooms#webpage`,
  name: roomsHero.title,
  description: getRoomsDescription(),
  url: `${SITE_URL}/rooms`,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    "@id": `${SITE_URL}/rooms#room-collection`,
    name: roomsCollectionContent.heading,
    numberOfItems: rooms.length,
    itemListElement: rooms.map((room, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: room.name,
        description: room.description,
        category: room.category,
      },
    })),
  },
};

// ============================================================
// ROOMS PAGE — METADATA
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: "/rooms",
  },

  title: `${roomsHero.title} | ${BRAND_NAME}`,

  description: getRoomsDescription(),

  keywords: getUniqueKeywords(),

  openGraph: {
    type: "website",
    url: "/rooms",
    title: `${roomsHero.title} | ${BRAND_NAME}`,
    description: getRoomsDescription(),
    images: [
      {
        url: roomsHero.image,
        alt: roomsHero.imageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${roomsHero.title} | ${BRAND_NAME}`,
    description: getRoomsDescription(),
    images: [roomsHero.image],
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

// ============================================================
// ROOMS PAGE
// ============================================================

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomsStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Suspense fallback={null}>
        <RoomsPageClient />
      </Suspense>
    </>
  );
}
