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
  console.error("VIRHE: RESEND_API_KEY -avainta ei löytynyt .env.local tiedostosta tai ympäristömuuttujista.");
  process.exit(1);
}

const targetEmail = process.argv[2];
const targetName = process.argv[3] || "";

if (!targetEmail) {
  console.log("KÄYTTÖ: node scripts/send-welcome-email.mjs <sahkoposti> [Etunimi]");
  console.log("Esimerkki: node scripts/send-welcome-email.mjs matti@esimerkki.fi Matti");
  process.exit(1);
}

const driveUrl = "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing";

console.log(`Sending welcome email to subscriber: ${targetEmail} (${targetName || "No name"})...`);

async function sendEmail() {
  const textContent = `Hei ${targetName || "terveydenystävä"},

Kiitos liittymisestä sähköpostilistalleni! Tässä ovat luvatut 4 erikoisvideo-opasta kehonhuollon, leukanivelen, yläniskan ja hermoston rauhoittamisen tueksi:

1. Leukanivelen Ensiapuopas (Akuutti fysioterapeuttinen apu leukanivelen naksumiseen ja jännitykseen):
https://www.youtube.com/watch?v=P1lZdpluD64

2. Vaikean Vamman Tutkiminen ja Hoito (Näin OMT-fysioterapeutti tutkii ja hoitaa vammoja):
https://www.youtube.com/watch?v=exfFQ0iRLiI

3. Parasympaattisen Hermoston Aktivoiminen (Kehon ja hermoston rauhoittaminen sekä kivun säätely):
https://www.youtube.com/watch?v=ZFTSdUdEkC0

4. Yläniskan Venyttelyohje (Yläniskan kireyksien lievittäminen ja niskan liikkuvuus):
https://www.youtube.com/watch?v=JyducxjS1b8

----------------------------------------------------
📁 LISÄKSI LADATTAVAT PDF-KUNTOUTUSOPPAAT (GOOGLE DRIVE):
Pääset lukemaan kaikki kirjalliset kuntoutusoppaat ja materiaalit suoraan tästä linkistä:
${driveUrl}

Ystävällisin terveisin,
Janne Säkkinen
OMT-Fysioterapeutti | FT Säkkinen / Tiedottajanne Oy
www.ftsakkinen.com
tiedottajanne@gmail.com
`;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h1 style="color: #00AEEF; font-size: 22px; margin-bottom: 6px; letter-spacing: 1px;">FT JANNE SÄKKINEN</h1>
        <p style="color: #cccccc; font-size: 13px; margin: 0;">OMT-Fysioterapeutti | Purentaelimistö &amp; Kuntoutus</p>
      </div>
      
      <p style="font-size: 15px; line-height: 1.6; color: #ffffff;">Hei ${targetName || "terveydenystävä"},</p>
      <p style="font-size: 14px; line-height: 1.6; color: #dddddd;">Kiitos liittymisestä sähköpostilistalleni! Tässä ovat neljä luvattua erikoisvideo-opasta kehonhuollon, leukanivelen, yläniskan ja hermoston rauhoittamisen tueksi:</p>
      
      <!-- Video 1 -->
      <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #0C66B4;">
        <h3 style="color: #00AEEF; margin-top: 0; font-size: 16px;">1. Leukanivelen Ensiapuopas</h3>
        <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Akuutti fysioterapeuttinen apu leukanivelen naksumiseen, jännitykseen ja lukkiutumiseen.</p>
        <a href="https://www.youtube.com/watch?v=P1lZdpluD64" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-size: 13px;">Katso Ensiapuopas (YouTube) →</a>
      </div>

      <!-- Video 2 -->
      <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #0C66B4;">
        <h3 style="color: #00AEEF; margin-top: 0; font-size: 16px;">2. Vaikean Vamman Tutkiminen ja Hoito</h3>
        <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Näin OMT-fysioterapeutti tutkii ja hoitaa perusteellisesti haastavia tuki- ja liikuntaelimistön vamvoja.</p>
        <a href="https://www.youtube.com/watch?v=exfFQ0iRLiI" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-size: 13px;">Katso Vamma-Video (YouTube) →</a>
      </div>

      <!-- Video 3 -->
      <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #0C66B4;">
        <h3 style="color: #00AEEF; margin-top: 0; font-size: 16px;">3. Parasympaattisen Hermoston Aktivoiminen</h3>
        <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Täsmälliset ohjeet kehon ja hermoston rauhoittamiseen sekä kivun säätelyyn.</p>
        <a href="https://www.youtube.com/watch?v=ZFTSdUdEkC0" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-size: 13px;">Katso Hermosto-Video (YouTube) →</a>
      </div>

      <!-- Video 4 -->
      <div style="margin: 20px 0; background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #0C66B4;">
        <h3 style="color: #00AEEF; margin-top: 0; font-size: 16px;">4. Yläniskan Venyttelyohje</h3>
        <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Kliiniset fysioterapiaohjeet yläniskan kireyksien lievittämiseen ja niskan liikkuvuuden parantamiseen.</p>
        <a href="https://www.youtube.com/watch?v=JyducxjS1b8" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-size: 13px;">Katso Yläniska-Video (YouTube) →</a>
      </div>

      <hr style="border: 0; border-top: 1px solid #0C66B4; margin: 24px 0;" />

      <div style="background-color: #000d21; border-radius: 12px; padding: 18px; border: 1px solid #00AEEF;">
        <p style="font-size: 14px; color: #ffffff; margin: 0 0 10px 0; font-weight: bold;">
          📁 Ladattavat oppaat (Google Drive):
        </p>
        <p style="font-size: 13px; color: #cccccc; margin: 0 0 14px 0; line-height: 1.5;">
          Pääset lukemaan ja lataamaan kaikki kirjalliset kuntoutusoppaat ja materiaalit tästä linkistä:
        </p>
        <a href="${driveUrl}" target="_blank" style="display: inline-block; background-color: #00AEEF; color: #000a18; font-weight: bold; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 14px;">Avaa Janne Säkkisen Google Drive -kansio →</a>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
        <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Säkkinen</p>
        <p style="margin: 4px 0 0 0;">OMT-Fysioterapeutti | <a href="https://www.ftsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ftsakkinen.com</a> | tiedottajanne@gmail.com</p>
      </div>
    </div>
  `;

  // Attempt primary sender: janne@ftsakkinen.com
  let res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
      to: [targetEmail],
      reply_to: "tiedottajanne@gmail.com",
      subject: `Tässä ovat luvatut 4 erikoisvideo-opastasi${targetName ? `, ${targetName}` : ""}!`,
      text: textContent,
      html: htmlContent,
    }),
  });

  let data = await res.json();

  if (!res.ok) {
    console.warn("Primary sender janne@ftsakkinen.com warning/error:", data);
    console.log("Retrying with fallback sender onboarding@resend.dev...");
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FT Janne Säkkinen <onboarding@resend.dev>",
        to: [targetEmail],
        reply_to: "tiedottajanne@gmail.com",
        subject: `Tässä ovat luvatut 4 erikoisvideo-opastasi${targetName ? `, ${targetName}` : ""}!`,
        text: textContent,
        html: htmlContent,
      }),
    });
    data = await res.json();
  }

  if (res.ok) {
    console.log("✔ ONNISTUI! Sähköposti lähetetty vastaanottajalle:", targetEmail, "ID:", data.id);
  } else {
    console.error("✖ VIRHE: Lähetys epäonnistui:", data);
  }
}

sendEmail();
