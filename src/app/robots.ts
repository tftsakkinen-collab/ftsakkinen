import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://www.ftsakkinen.com/sitemap.xml",
      "https://www.ftsakkinen.com/video-sitemap.xml",
    ],
  };
}
