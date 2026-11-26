import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { rooms } from "./data/roomsPageData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Rooms Listing Page
    {
      url: `${SITE_URL}/rooms`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Individual Room Detail Pages
    ...rooms.map((room) => ({
      url: `${SITE_URL}/rooms/${room.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // About Us Page
    {
      url: `${SITE_URL}/about-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
