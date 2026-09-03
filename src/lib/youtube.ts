import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { SITE_CONFIG } from "@/data/config";

// Category assignment mapping by keyword / video title match
const CATEGORY_MAP: Record<string, string> = {
  purenta: "purenta-tmd",
  leuka: "purenta-tmd",
  tmd: "purenta-tmd",
  masseter: "purenta-tmd",
  bruksismi: "purenta-tmd",
  ergonomia: "ergonomia",
  työ: "ergonomia",
  nukahtaminen: "ergonomia",
  tulehdus: "tule-vaivat",
  selkä: "tule-vaivat",
  iskias: "tule-vaivat",
  polvi: "tule-vaivat",
  lonkka: "tule-vaivat",
  lantionpohja: "tule-vaivat",
  virtsankarkailu: "tule-vaivat",
  kegel: "tule-vaivat",
};

// Explicitly excluded videos (e.g., converted to paid services / courses)
const EXCLUDED_VIDEO_IDS = new Set(["P1lZdpluD64"]);

function decodeXmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export async function fetchYouTubeVideos(): Promise<Video[]> {
  const channelId = SITE_CONFIG.youtubeChannelId || "UCz0XuTDgzskIDlzSrZFxsBg";

  try {
    // Fetch real-time YouTube channel RSS feed XML (revalidated automatically)
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 3600 } } // Auto-syncs new videos every hour
    );

    if (!res.ok) {
      return FALLBACK_VIDEOS.filter(v => !EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas"));
    }

    const xmlText = await res.text();
    const entries = xmlText.split("<entry>");
    if (entries.length <= 1) {
      return FALLBACK_VIDEOS.filter(v => !EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas"));
    }

    const fetchedVideos: Video[] = [];

    // Parse each XML entry
    for (let i = 1; i < entries.length; i++) {
      const entry = entries[i];
      
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      const descriptionMatch = entry.match(/<media:description>([\s\S]*?)<\/media:description>/);
      const publishedMatch = entry.match(/<published>(.*?)<\/published>/);
      const thumbnailMatch = entry.match(/<media:thumbnail url="(.*?)"/);

      const videoId = videoIdMatch ? videoIdMatch[1].trim() : "";
      const rawTitle = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : "";
      const rawDescription = descriptionMatch ? descriptionMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : "";
      const title = decodeXmlEntities(rawTitle);
      const description = decodeXmlEntities(rawDescription);
      const published = publishedMatch ? publishedMatch[1].split("T")[0] : "";
      const thumbnailUrl = thumbnailMatch ? thumbnailMatch[1] : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      // HARD FILTER: DISCARD ALL SHORTS, REELS, VERTICAL VIDEOS, COMMUNITY POSTS & EXCLUDED VIDEOS
      const isCommunityPost = !videoId || entry.includes("yt:community") || entry.includes("/community/");
      const isShort = title.toLowerCase().includes("#shorts") || 
                      title.toLowerCase().includes("#short") || 
                      description.toLowerCase().includes("#shorts") ||
                      description.toLowerCase().includes("#short") ||
                      title.toLowerCase().includes("shorts") ||
                      title.toLowerCase().includes("#reels") ||
                      title.toLowerCase().includes("#tiktok") ||
                      entry.includes("/shorts/");
      const isExcluded = EXCLUDED_VIDEO_IDS.has(videoId) || title.toLowerCase().includes("ensiapuopas");

      if (!isCommunityPost && !isShort && !isExcluded && videoId) {
        let categoryId = "tule-vaivat";
        const fallbackMatch = FALLBACK_VIDEOS.find(fv => fv.id === videoId);
        if (fallbackMatch && fallbackMatch.categoryId) {
          categoryId = fallbackMatch.categoryId;
        } else {
          const lower = (title + " " + description).toLowerCase();
          for (const [key, cat] of Object.entries(CATEGORY_MAP)) {
            if (lower.includes(key)) {
              categoryId = cat;
              break;
            }
          }
        }

        const cleanTitle = title.replace(/#\w+/g, "").trim();

        fetchedVideos.push({
          id: videoId,
          youtubeId: videoId,
          title: cleanTitle,
          promiseDescription: description.split("\n")[0].replace(/Ilmaiset oppaat.*?https:\/\/\S+/g, "").trim().slice(0, 140) || "Katso fysioterapeutin ohjeet ja harjoitteet.",
          categoryId,
          duration: "Pitkä video",
          publishedAt: published,
          thumbnailUrl,
          isShort: false,
        });
      }
    }

    // Return only non-short videos or fallback
    const longFormOnly = fetchedVideos.filter(v => !v.isShort && !EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas"));
    return longFormOnly.length > 0
      ? longFormOnly
      : FALLBACK_VIDEOS.filter(v => !EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas"));
  } catch (error) {
    console.error("YouTube RSS sync error, using fallback videos:", error);
    return FALLBACK_VIDEOS.filter(v => !EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas"));
  }
}

export async function getAllVideos(): Promise<Video[]> {
  const fetched = await fetchYouTubeVideos();
  const videoMap = new Map<string, Video>();

  for (const v of FALLBACK_VIDEOS) {
    if (!EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas")) {
      videoMap.set(v.id, v);
    }
  }

  for (const v of fetched) {
    if (!EXCLUDED_VIDEO_IDS.has(v.id) && !v.title.toLowerCase().includes("ensiapuopas")) {
      const existing = videoMap.get(v.id);
      if (existing) {
        videoMap.set(v.id, {
          ...existing,
          ...v,
          categoryId: existing.categoryId || v.categoryId,
          transcript: existing.transcript || v.transcript,
          pairVideoId: existing.pairVideoId || v.pairVideoId,
          pairUrl: existing.pairUrl || v.pairUrl,
        });
      } else {
        videoMap.set(v.id, v);
      }
    }
  }

  return Array.from(videoMap.values());
}

export async function getVideoById(id: string): Promise<Video | undefined> {
  if (EXCLUDED_VIDEO_IDS.has(id)) {
    return undefined;
  }
  const all = await getAllVideos();
  return all.find((v) => v.id === id);
}

