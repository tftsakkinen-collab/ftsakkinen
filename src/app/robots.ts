import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
      },
    ],
    sitemap: [
      "https://www.ftsakkinen.com/sitemap.xml",
      "https://www.ftsakkinen.com/video-sitemap.xml",
    ],
  };
}
