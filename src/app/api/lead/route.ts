import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";
import fs from "fs";
import path from "path";

function saveSubscriberLocally(name: string, email: string, source: string = "Website", locale: string = "fi") {
  try {
    const filePath = path.join(process.cwd(), "src/data/subscribers.json");
    let subscribers: any[] = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      subscribers = JSON.parse(content);
    }
    const nameParts = (name || "").trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const existingIndex = subscribers.findIndex((s: any) => s.email.toLowerCase() === email.toLowerCase());
    const newEntry = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      source: `Kotisivut / ftsakkinen.com (${source})`,
      platform: "Website",
      locale: locale,
      date_added: new Date().toISOString().split("T")[0],
      delivered: true,
      delivered_at: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      subscribers[existingIndex] = { ...subscribers[existingIndex], ...newEntry };
    } else {
      subscribers.push(newEntry);
    }

    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write to subscribers.json (may be read-only env):", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, condition, message, type = "lead", guide, locale = "fi" } = body;

    if (!email) {
      return NextResponse.json({ error: "Sähköposti vaaditaan" }, { status: 400 });
    }

    saveSubscriberLocally(name, email, type, locale);

    const recipientEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;


    console.log(`=== UUSI SUOMENKIELINEN YHTEYDENOTTO (${type.toUpperCase()}) ===`);
    console.log(`Lähetetään ilmoitus osoitteeseen: ${recipientEmail}`);
    console.log(`Lähettäjä: ${name || "Nimetön"} (${email}, puh: ${phone || "ei ilmoitettu"})`);

    if (!resendApiKey) {
      console.error("CRITICAL ERROR: RESEND_API_KEY is missing from environment variables.");
      return NextResponse.json({ error: "Sähköpostipalvelun konfiguraatiovirhe (API-avain puuttuu)." }, { status: 500 });
    }

    const driveUrl = SITE_CONFIG.googleDriveUrl;
    const emailSubject = `Tässä ovat luvatut 4 erikoisvideo-opastasi${name ? `, ${name}` : ""}!`;

    // Plain text content for anti-spam optimization & deliverability
    const textContent = `Hei ${name || "terveydenystävä"},

Kiitos liittymisestä sähköpostilistalleni! Tässä ovat neljä luvattua erikoisvideo-opasta kehonhuollon, leukanivelen, yläniskan ja hermoston rauhoittamisen tueksi:

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
${recipientEmail}
`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h1 style="color: #00AEEF; font-size: 22px; margin-bottom: 6px; letter-spacing: 1px;">FT JANNE SÄKKINEN</h1>
          <p style="color: #cccccc; font-size: 13px; margin: 0;">OMT-Fysioterapeutti | Purentaelimistö &amp; Kuntoutus</p>
        </div>
        
        <p style="font-size: 15px; line-height: 1.6; color: #ffffff;">Hei ${name || "terveydenystävä"},</p>
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
          <p style="margin: 4px 0 0 0;">OMT-Fysioterapeutti | <a href="https://www.ftsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ftsakkinen.com</a> | ${recipientEmail}</p>
        </div>
      </div>
    `;

    let subDeliverySuccess = false;
    let subResData: any = null;
    let sendErrorDetail = "";

    // Attempt 1: Primary sender janne@ftsakkinen.com
    try {
      const subRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
          to: [email],
          reply_to: recipientEmail,
          subject: emailSubject,
          text: textContent,
          html: htmlContent,
          tags: [
            { name: "language", value: "fi" },
            { name: "site", value: "ftsakkinen_com" },
          ],
        }),
      });

      subResData = await subRes.json();
      if (subRes.ok && subResData.id) {
        subDeliverySuccess = true;
        console.log("✔ Resend tilaajasähköposti lähetetty (janne@ftsakkinen.com) ID:", subResData.id);
      } else {
        console.warn("Primary sender janne@ftsakkinen.com ei onnistunut:", subResData);
        sendErrorDetail = subResData?.message || JSON.stringify(subResData);
      }
    } catch (err: any) {
      console.error("Primary sender exception:", err);
      sendErrorDetail = err.message || String(err);
    }

    // Attempt 2: Fallback sender onboarding@resend.dev if primary failed
    if (!subDeliverySuccess) {
      console.log("Yritetään varalähettäjää: FT Janne Säkkinen <onboarding@resend.dev>...");
      try {
        const fallbackRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FT Janne Säkkinen <onboarding@resend.dev>",
            to: [email],
            reply_to: recipientEmail,
            subject: emailSubject,
            text: textContent,
            html: htmlContent,
            tags: [
              { name: "language", value: "fi" },
              { name: "site", value: "ftsakkinen_com" },
              { name: "fallback", value: "true" },
            ],
          }),
        });

        const fallbackData = await fallbackRes.json();
        if (fallbackRes.ok && fallbackData.id) {
          subDeliverySuccess = true;
          subResData = fallbackData;
          console.log("✔ Resend tilaajasähköposti lähetetty varalähettäjällä ID:", fallbackData.id);
        } else {
          console.error("Varalähettäjäkään ei onnistunut:", fallbackData);
          sendErrorDetail += " | Fallback error: " + (fallbackData?.message || JSON.stringify(fallbackData));
        }
      } catch (err: any) {
        console.error("Fallback sender exception:", err);
        sendErrorDetail += " | Fallback exception: " + (err.message || String(err));
      }
    }

    // 2. Send Notification Email to Janne (tiedottajanne@gmail.com)
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "FT Sakkinen Kotisivut <info@ftsakkinen.com>",
          to: [recipientEmail],
          reply_to: email,
          subject: `${subDeliverySuccess ? "✔" : "⚠️"} Uusi tilaaja sähköpostilistalla: ${name || email}`,
          text: `UUSI TILAAJA!
Nimi: ${name || "Ei ilmoitettu"}
Sähköposti: ${email}
Puhelin: ${phone || "Ei ilmoitettu"}
Tyyppi: ${type}
Tilaajan sähköpostilähetys: ${subDeliverySuccess ? `ONNISTUI (ID: ${subResData?.id})` : `VAROITUS / VIRHE: ${sendErrorDetail}`}

Linkit joita tilaaja tarvitsee:
1. Leukanivelen Ensiapuopas: https://www.youtube.com/watch?v=P1lZdpluD64
2. Vaikean Vamman Tutkimus: https://www.youtube.com/watch?v=exfFQ0iRLiI
3. Hermoston Aktivoiminen: https://www.youtube.com/watch?v=ZFTSdUdEkC0
4. Yläniskan Venyttely: https://www.youtube.com/watch?v=JyducxjS1b8
5. Google Drive -kansio: ${driveUrl}
`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; border-radius: 8px; max-width: 600px;">
              <h2 style="color: #00AEEF; margin-top: 0;">Uusi sähköpostitilaaja!</h2>
              <p><strong>Nimi:</strong> ${name || "Ei ilmoitettu"}</p>
              <p><strong>Sähköposti:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Puhelin:</strong> ${phone || "Ei ilmoitettu"}</p>
              <p><strong>Tyyppi:</strong> ${type}</p>
              <p><strong>Aika:</strong> ${new Date().toLocaleString("fi-FI")}</p>
              
              <div style="margin: 16px 0; padding: 12px; border-radius: 6px; background-color: ${subDeliverySuccess ? "#e6f4ea" : "#fce8e6"}; border: 1px solid ${subDeliverySuccess ? "#34a853" : "#ea4335"};">
                <strong style="color: ${subDeliverySuccess ? "#137333" : "#c5221f"};">
                  ${subDeliverySuccess ? "✔ Tilaajasähköposti lähetetty automaattisesti tilaajalle!" : "⚠️ Tilaajasähköpostin lähetyksessä oli huomautus/virhe:"}
                </strong>
                <p style="margin: 4px 0 0 0; font-size: 12px; font-mono;">${subDeliverySuccess ? `Resend Message ID: ${subResData?.id}` : sendErrorDetail}</p>
              </div>

              <hr />
              <h4 style="margin-bottom: 8px;">Tilaajalle lähetetyt suorat linkit:</h4>
              <ul style="line-height: 1.6; font-size: 13px;">
                <li><strong>1. Leukanivelen Ensiapuopas:</strong> <a href="https://www.youtube.com/watch?v=P1lZdpluD64">Katso opas</a></li>
                <li><strong>2. Vaikean Vamman Tutkimus:</strong> <a href="https://www.youtube.com/watch?v=exfFQ0iRLiI">Katso video</a></li>
                <li><strong>3. Hermoston Aktivoiminen:</strong> <a href="https://www.youtube.com/watch?v=ZFTSdUdEkC0">Katso video</a></li>
                <li><strong>4. Yläniskan Venyttely:</strong> <a href="https://www.youtube.com/watch?v=JyducxjS1b8">Katso video</a></li>
                <li><strong>5. Google Drive -kansio (PDF-oppaat):</strong> <a href="${driveUrl}">${driveUrl}</a></li>
              </ul>
              <p style="color: #666; font-size: 12px; margin-top: 16px;">
                💡 <em>Voit myös vastata suoraan tähän sähköpostiin, jolloin viesti menee osoitteeseen ${email}.</em>
              </p>
            </div>
          `,
        }),
      });
    } catch (notifyErr) {
      console.error("Virhe ilmoitussähköpostissa Jannelle:", notifyErr);
    }

    return NextResponse.json({
      success: true,
      message: "Tiedot vastaanotettu ja sähköpostiautomaatio käsitelty.",
      subscriberDelivered: subDeliverySuccess,
    });
  } catch (error) {
    console.error("Virhe tilauksen käsittelyssä:", error);
    return NextResponse.json({ error: "Palvelinvirhe tilauksen käsittelyssä" }, { status: 500 });
  }
}


