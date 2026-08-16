import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local if present
const envPath = path.join(__dirname, "../.env.local");
let resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  const match = envContent.match(/RESEND_API_KEY=([^\r\n]+)/);
  if (match) {
    resendApiKey = match[1].trim();
  }
}

if (!resendApiKey) {
  console.error("VIRHE: RESEND_API_KEY puuttuu .env.local -tiedostosta tai ympäristömuuttujista.");
  process.exit(1);
}

const subscribersPath = path.join(__dirname, "../src/data/subscribers.json");
if (!fs.existsSync(subscribersPath)) {
  console.error("VIRHE: subscribers.json ei löydy polusta:", subscribersPath);
  process.exit(1);
}

const subscribers = JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));

// Arguments parsing
const args = process.argv.slice(2);
let videoId = "";
let customTitle = "";
let customDesc = "";
let isDryRun = false;
let targetEmailFilter = "";

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--video-id" && args[i + 1]) {
    videoId = args[i + 1];
    i++;
  } else if (args[i] === "--title" && args[i + 1]) {
    customTitle = args[i + 1];
    i++;
  } else if (args[i] === "--desc" && args[i + 1]) {
    customDesc = args[i + 1];
    i++;
  } else if (args[i] === "--to" && args[i + 1]) {
    targetEmailFilter = args[i + 1];
    i++;
  } else if (args[i] === "--dry-run") {
    isDryRun = true;
  }
}

if (!videoId && !customTitle) {
  console.log("KÄYTTÖ:");
  console.log("  node scripts/broadcast-new-video.mjs --video-id <YouTube-ID> [--dry-run] [--to email]");
  console.log("\nEsimerkki:");
  console.log("  node scripts/broadcast-new-video.mjs --video-id P1lZdpluD64 --dry-run");
  process.exit(0);
}

const driveUrl = "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing";
const videoTitle = customTitle || `Uusi fysioterapiaopas julkaistu!`;
const videoLink = videoId ? `https://www.youtube.com/watch?v=${videoId}` : "https://www.youtube.com/@ftsakkinen";
const videoThumb = videoId ? `https://i2.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";

const recipients = targetEmailFilter
  ? subscribers.filter((s) => s.email.toLowerCase() === targetEmailFilter.toLowerCase())
  : subscribers;

console.log("====================================================");
console.log(`VIDEOTIEDOTTEEN LÄHETYS (${isDryRun ? "DRY-RUN / TESTIAJO" : "LIVE LÄHETYS"})`);
console.log(`Vastaanottajia: ${recipients.length} henkilöä`);
console.log(`Videon ID: ${videoId || "N/A"}`);
console.log("====================================================\n");

async function runBroadcast() {
  for (const sub of recipients) {
    const firstName = sub.first_name || "terveydenystävä";
    const subject = `🎬 Uusi erikoisvideo julkaistu: ${videoTitle}!`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #00AEEF; font-size: 22px; margin-bottom: 6px; letter-spacing: 1px;">FT JANNE SÄKKINEN</h1>
          <p style="color: #cccccc; font-size: 13px; margin: 0;">OMT-Fysioterapeutti | Purentaelimistö &amp; Kuntoutus</p>
        </div>
        
        <p style="font-size: 15px; line-height: 1.6; color: #ffffff;">Hei ${firstName},</p>
        <p style="font-size: 14px; line-height: 1.6; color: #dddddd;">Olen juuri julkaissut uuden erikoisvideo-oppaan kehonhuollon ja fysioterapian tueksi:</p>
        
        <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 20px; border: 1px solid #0C66B4; text-align: center;">
          ${videoThumb ? `<img src="${videoThumb}" alt="${videoTitle}" style="width: 100%; border-radius: 8px; margin-bottom: 16px;" />` : ""}
          <h3 style="color: #00AEEF; margin-top: 0; font-size: 18px; text-align: left;">${videoTitle}</h3>
          <p style="color: #bbbbbb; font-size: 14px; text-align: left; line-height: 1.5;">${customDesc || "Katso uusi kliininen fysioterapiaopas ja täsmälliset kotiharjoitteet suoraan YouTubesta."}</p>
          <a href="${videoLink}" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-size: 14px; margin-top: 10px;">Katso video YouTubessa →</a>
        </div>

        <hr style="border: 0; border-top: 1px solid #0C66B4; margin: 24px 0;" />

        <div style="background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #00AEEF;">
          <p style="font-size: 14px; color: #ffffff; margin: 0 0 10px 0; font-weight: bold;">
            📁 Kaikki ladattavat kuntoutusoppaat (Google Drive):
          </p>
          <a href="${driveUrl}" target="_blank" style="color: #00AEEF; font-size: 13px; font-weight: bold;">Avaa Janne Säkkisen Google Drive -materiaalikansio →</a>
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
          <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Säkkinen</p>
          <p style="margin: 4px 0 0 0;">OMT-Fysioterapeutti | <a href="https://www.ftsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ftsakkinen.com</a> | tiedottajanne@gmail.com</p>
        </div>
      </div>
    `;

    console.log(`- Vastaanottaja: ${firstName} <${sub.email}>`);

    if (isDryRun) {
      console.log("  [DRY-RUN] Sähköposti muotoiltu onnistuneesti, ei lähetetty.");
      continue;
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
          to: [sub.email],
          reply_to: "tiedottajanne@gmail.com",
          subject: subject,
          html: htmlContent,
        }),
      });

      const data = await res.json();
      if (res.ok && data.id) {
        console.log(`  ✔ Lähetetty! Resend ID: ${data.id}`);
      } else {
        console.error(`  ✖ Virhe lähetettäessä osoitteeseen ${sub.email}:`, data);
      }
    } catch (err) {
      console.error(`  ✖ Poikkeus lähetettäessä osoitteeseen ${sub.email}:`, err.message);
    }

    await new Promise((r) => setTimeout(r, 300));
  }

  console.log("\n====================================================");
  console.log("VALMIS!");
  console.log("====================================================");
}

runBroadcast();
