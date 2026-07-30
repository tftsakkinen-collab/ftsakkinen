import { MetadataRoute } from "next";
import { FALLBACK_VIDEOS } from "@/data/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ftsakkinen.com";

  const videoUrls = FALLBACK_VIDEOS.map((video) => ({
    url: `${baseUrl}/videot/${video.id}`,
    lastModified: new Date(video.publishedAt || "2024-01-15"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topicDates: Record<string, string> = {
    "leukakipu-ja-tmd": "2024-07-24",
    "niskakipu-ja-paansarky": "2024-08-10",
    "selkakipu-ja-iskias": "2024-09-15",
    "ergonomia-ja-tyohyvinvointi": "2024-10-01",
  };

  const topicUrls = Object.entries(topicDates).map(([slug, dateStr]) => ({
    url: `${baseUrl}/aihe/${slug}`,
    lastModified: new Date(dateStr),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tietoa-minusta`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videot`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ilmaisopas`,
      lastModified: new Date("2024-06-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/koulutukset`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/yhteystiedot`,
      lastModified: new Date("2024-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tietosuoja`,
      lastModified: new Date("2024-01-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...topicUrls, ...videoUrls];
}
