import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { SITE_CONFIG } from "@/data/config";

// Category assignment mapping by keyword / video title match or explicit ID override
const CATEGORY_MAP: Record<string, string> = {
  niska: "niska",
  headache: "niska",
  päänsärky: "niska",
  olkapaa: "olkapaa",
  olkapää: "olkapaa",
  iskias: "selka-iskias",
  selkä: "selka-iskias",
  polvi: "polvi",
  lonkka: "lonkka",
  jalkaterä: "jalkatera",
  kantapää: "jalkatera",
  tulehdus: "ravinto-tulehdus",
  ravinto: "ravinto-tulehdus",
};

export async function fetchYouTubeVideos(): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = SITE_CONFIG.youtubeChannelId;

  if (!apiKey || apiKey === "[PLACEHOLDER: YOUTUBE_API_KEY]") {
    // Return curated fallback dataset with video placeholders
    return FALLBACK_VIDEOS;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20&type=video`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn("YouTube API response not OK, using fallback videos.");
      return FALLBACK_VIDEOS;
    }

    const data = await res.json();
    if (!data.items || data.items.length === 0) {
      return FALLBACK_VIDEOS;
    }

    return data.items.map((item: any, index: number) => {
      const title = item.snippet.title || "";
      const description = item.snippet.description || "";
      
      // Categorize based on title/description match
      let categoryId = "selka-iskias";
      const lower = (title + " " + description).toLowerCase();
      for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
        if (lower.includes(key)) {
          categoryId = cat;
          break;
        }
      }

      return {
        id: item.id.videoId || `yt-video-${index}`,
        youtubeId: item.id.videoId || "dQw4w9WgXcQ",
        title: title,
        promiseDescription: description.slice(0, 120) || "Katso asiantuntijan fysioterapiavinkit kipusi lievittämiseen.",
        categoryId: categoryId,
        duration: "15:00",
        publishedAt: item.snippet.publishedAt?.split("T")[0] || "2024-01-01",
      };
    });
  } catch (error) {
    console.error("Failed to fetch YouTube API videos:", error);
    return FALLBACK_VIDEOS;
  }
}
