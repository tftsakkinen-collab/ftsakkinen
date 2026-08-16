import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoUrlOrId = process.argv[2];

if (!videoUrlOrId) {
  console.log("KÄYTTÖ:");
  console.log("  node scripts/add-youtube-video.mjs <YouTube-URL tai Video-ID> [Kategoria] [Kuvaus]");
  console.log("\nEsimerkki:");
  console.log("  node scripts/add-youtube-video.mjs https://www.youtube.com/watch?v=P1lZdpluD64 purenta-tmd \"Akuutti fysioterapiaopas leukanivelelle\"");
  process.exit(0);
}

if (videoUrlOrId.includes("/shorts/") || videoUrlOrId.includes("#shorts")) {
  console.error("⛔ HUOMIO: Pystyvideot / YouTube Shorts -videot ja community-postaukset on suodatettu pois kotisivuilta.");
  console.error("Kotisivulle lisätään ainoastaan vaakasuuntaisia pitkiä opasvideoita.");
  process.exit(1);
}

function extractYoutubeId(urlOrId) {
  if (urlOrId.length === 11 && !urlOrId.includes("/")) {
    return urlOrId;
  }
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
}

const youtubeId = extractYoutubeId(videoUrlOrId);
if (!youtubeId) {
  console.error("VIRHE: Ei pystytty tunnistamaan kelvollista 11-merkkistä YouTube Video ID:tä osoitteesta:", videoUrlOrId);
  process.exit(1);
}

const categoryId = process.argv[3] || "purenta-tmd";
const customDescription = process.argv[4] || "";

async function fetchMetadataAndProcess() {
  console.log("====================================================");
  console.log(`HAETAAN YOUTUBE-VIDEON METATIEDOT (ID: ${youtubeId})...`);
  console.log("====================================================\n");

  let title = "Fysioterapiaopas - Janne Säkkinen";
  let authorName = "FT Janne Säkkinen";
  let thumbnailUrl = `https://i2.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeId}&format=json`;
    const res = await fetch(oembedUrl);
    if (res.ok) {
      const data = await res.json();
      title = data.title || title;
      authorName = data.author_name || authorName;
      if (data.thumbnail_url) {
        thumbnailUrl = data.thumbnail_url;
      }
      console.log(`✔ Haettu otsikko YouTube oEmbedistä: "${title}"`);
    } else {
      console.warn("ℹ oEmbed ei palauttanut tietoja, käytetään oletusotsikkoa.");
    }
  } catch (err) {
    console.warn("Huomio: oEmbed haku epäonnistui:", err.message);
  }

  const promiseDescription = customDescription || `Fysioterapeutti Janne Säkkisen kliininen opasvideo: ${title}. Käsittelee leukanivelen, yläniskan ja hermoston kuntoutusta sekä itsehoitoharjoitteita.`;
  const todayStr = new Date().toISOString().split("T")[0];

  const newVideoEntry = {
    id: youtubeId,
    youtubeId: youtubeId,
    title: title,
    promiseDescription: promiseDescription,
    categoryId: categoryId,
    duration: "Pitkä video",
    publishedAt: todayStr,
    thumbnailUrl: thumbnailUrl,
    pairVideoId: youtubeId,
    pairUrl: `https://www.ptsakkinen.com/videos/${youtubeId}`,
    isShort: false
  };

  // 1. Append to videos.ts
  const videosPath = path.join(__dirname, "../src/data/videos.ts");
  if (fs.existsSync(videosPath)) {
    try {
      let content = fs.readFileSync(videosPath, "utf-8");
      if (content.includes(`youtubeId": "${youtubeId}"`) || content.includes(`id": "${youtubeId}"`)) {
        console.log(`ℹ Video ID "${youtubeId}" on jo olemassa tiedostossa videos.ts.`);
      } else {
        const insertPos = content.indexOf("export const FALLBACK_VIDEOS: Video[] = [");
        if (insertPos !== -1) {
          const bracketPos = content.indexOf("[", insertPos);
          const newEntryJson = JSON.stringify(newVideoEntry, null, 2);
          const formattedEntry = `\n  ${newEntryJson.split("\n").join("\n  ")},`;
          content = content.slice(0, bracketPos + 1) + formattedEntry + content.slice(bracketPos + 1);
          fs.writeFileSync(videosPath, content, "utf-8");
          console.log(`✔ Lisätty uusi video tiedostoon src/data/videos.ts!`);
        }
      }
    } catch (e) {
      console.error("Virhe päivitettäessä videos.ts:", e.message);
    }
  }

  // 2. Generate Schema.org VideoObject JSON-LD snippet
  const schemaSnippet = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": promiseDescription,
    "thumbnailUrl": [thumbnailUrl],
    "uploadDate": todayStr,
    "embedUrl": `https://www.youtube.com/embed/${youtubeId}`,
    "author": {
      "@type": "Person",
      "name": "Janne Säkkinen",
      "jobTitle": "OMT-Fysioterapeutti",
      "url": "https://www.ftsakkinen.com"
    }
  };

  console.log("\n----------------------------------------------------");
  console.log("GENERORTU SCHEMA.ORG VIDEOOBJECT (SEO):");
  console.log("----------------------------------------------------");
  console.log(JSON.stringify(schemaSnippet, null, 2));

  // 3. Update public/llms.txt for AI agent searchability
  const llmsPath = path.join(__dirname, "../public/llms.txt");
  if (fs.existsSync(llmsPath)) {
    try {
      let llmsContent = fs.readFileSync(llmsPath, "utf-8");
      const videoEntryText = `\n- **${title}** (YouTube ID: ${youtubeId}): ${promiseDescription} [Katso video](https://www.youtube.com/watch?v=${youtubeId})`;
      if (!llmsContent.includes(youtubeId)) {
        llmsContent += videoEntryText;
        fs.writeFileSync(llmsPath, llmsContent, "utf-8");
        console.log(`✔ Päivitetty tekoälyhakujen indeksi public/llms.txt!`);
      }
    } catch (e) {
      console.warn("Huomio llms.txt päivityksessä:", e.message);
    }
  }

  console.log("\n====================================================");
  console.log("PROSESSI VALMIS!");
  console.log("Voit lähettää tästä videosta automaatiokirjeen komennolla:");
  console.log(`node scripts/broadcast-new-video.mjs --video-id "${youtubeId}" --dry-run`);
  console.log("====================================================\n");
}

fetchMetadataAndProcess();
