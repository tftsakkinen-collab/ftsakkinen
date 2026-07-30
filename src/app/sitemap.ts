import { MetadataRoute } from "next";
import { FALLBACK_VIDEOS } from "@/data/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ftsakkinen.com";

  const videoUrls = FALLBACK_VIDEOS.map((video) => ({
    url: `${baseUrl}/videot/${video.id}`,
    lastModified: new Date(video.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topicSlugs = [
    "leukakipu-ja-tmd",
    "niskakipu-ja-paansarky",
    "selkakipu-ja-iskias",
    "ergonomia-ja-tyohyvinvointi",
  ];

  const topicUrls = topicSlugs.map((slug) => ({
    url: `${baseUrl}/aihe/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/videot`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ilmaisopas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/koulutukset`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/yhteystiedot`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tietosuoja`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...topicUrls, ...videoUrls];
}
