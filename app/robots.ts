import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

const isLocalWebsite = ["localhost", "127.0.0.1"].includes(
  new URL(SITE_URL).hostname,
);

export default function robots(): MetadataRoute.Robots {
  if (isLocalWebsite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
