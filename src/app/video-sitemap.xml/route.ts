import { FALLBACK_VIDEOS } from "@/data/videos";

export async function GET() {
  const baseUrl = "https://www.ftsakkinen.com";

  const videoEntries = FALLBACK_VIDEOS.map((video) => {
    const pageUrl = `${baseUrl}/videot/${video.id}`;
    const thumbnailUrl = video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
    const playerUrl = `https://www.youtube.com/embed/${video.youtubeId}`;
    const cleanTitle = video.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanDesc = video.promiseDescription.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const pubDate = `${video.publishedAt}T08:00:00+02:00`;

    return `
    <url>
      <loc>${pageUrl}</loc>
      <video:video>
        <video:thumbnail_loc>${thumbnailUrl}</video:thumbnail_loc>
        <video:title>${cleanTitle}</video:title>
        <video:description>${cleanDesc}</video:description>
        <video:player_loc>${playerUrl}</video:player_loc>
        <video:publication_date>${pubDate}</video:publication_date>
        <video:family_friendly>yes</video:family_friendly>
        <video:uploader info="${baseUrl}">Janne Säkkinen (OMT-Fysioterapeutti)</video:uploader>
      </video:video>
    </url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${videoEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
