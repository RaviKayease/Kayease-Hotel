import type { Metadata } from "next";
import RoomDetailClient from "./RoomDetailClient";
import { Suspense } from "react";
import { connection } from "next/server";
import { rooms } from "../../data/roomsPageData";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: String(room.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const room = rooms.find((item) => String(item.id) === String(id));

  // Prevent invalid room URLs from being indexed
  if (!room) {
    return {
      title: "Room Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Generate metadata using existing room information
  const title = `${room.name} | ${room.location} | Oravilles`;

  const description = [
    room.description,
    room.location && `Discover this stay in ${room.location}.`,
    room.guests && `Accommodates up to ${room.guests} guests.`,
  ]
    .filter(Boolean)
    .join(" ");

  const image = room.image
    ? room.image.startsWith("http")
      ? room.image
      : new URL(room.image, SITE_URL).toString()
    : undefined;

  return {
    title,
    description,

    alternates: {
      canonical: `${SITE_URL}/rooms/${room.id}`,
    },

    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_URL}/rooms/${room.id}`,
      images: image
        ? [
            {
              url: image,
              alt: room.name,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
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
}

async function DynamicMarker() {
  await connection();
  return null;
}

export default function RoomDetailPage() {
  return (
    <>
      <RoomDetailClient />

      <Suspense fallback={null}>
        <DynamicMarker />
      </Suspense>
    </>
  );
}
