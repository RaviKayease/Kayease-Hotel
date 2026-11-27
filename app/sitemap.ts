import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { rooms } from "./data/roomsPageData";
import { blogPosts } from "./data/blogPosts";

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

    // Contact Us Page
    {
      url: `${SITE_URL}/contact-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Blogs Listing Page
    {
      url: `${SITE_URL}/blogs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Individual Blog Article Pages
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // FAQs Page
    {
      url: `${SITE_URL}/faqs`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Booking Guide Page
    {
      url: `${SITE_URL}/booking-guide`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
