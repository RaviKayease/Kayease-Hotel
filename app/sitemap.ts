import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

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
  ];
}
