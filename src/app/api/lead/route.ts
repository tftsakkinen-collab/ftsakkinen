import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, condition, message, type = "lead", guide, locale = "fi" } = body;

    if (!email) {
      return NextResponse.json({ error: "Sähköposti vaaditaan" }, { status: 400 });
    }

    const recipientEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    console.log(`=== UUSI SUOMENKIELINEN YHTEYDENOTTO (${type.toUpperCase()}) ===`);
    console.log(`Lähetetään ilmoitus osoitteeseen: ${recipientEmail}`);
    console.log(`Lähettäjä: ${name || "Nimetön"} (${email}, puh: ${phone || "ei ilmoitettu"})`);

    if (resendApiKey) {
      try {
        // 1. Send Welcome Email with 3 Videos & Drive Link to Subscriber
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
            to: [email],
            subject: `Tässä ovat luvatut 4 erikoisvideo-opastasi${name ? `, ${name}` : ""}!`,
            tags: [
              { name: "language", value: "fi" },
              { name: "site", value: "ftsakkinen.com" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <div style="text-align: center; margin-bottom: 24px;">
                  <h1 style="color: #00AEEF; font-size: 22px; margin-bottom: 6px; letter-spacing: 1px;">FT JANNE SÄKKINEN</h1>
                  <p style="color: #cccccc; font-size: 13px; margin: 0;">OMT-Fysioterapeutti | Purentaelimistö & Kuntoutus</p>
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
                  <p style="color: #bbbbbb; font-size: 13px; margin-bottom: 14px; line-height: 1.5;">Näin OMT-fysioterapeutti tutkii ja hoitaa perusteellisesti haastavia tuki- ja liikuntaelimistön vammoja.</p>
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

                <p style="font-size: 13px; color: #aaaaaa; line-height: 1.6;">
                  📁 <strong>Ladattavat oppaat:</strong> Pääset lisäksi lukemaan kaikki kirjalliset kuntoutusoppaat ja materiaalit täältä: <br/>
                  <a href="${SITE_CONFIG.googleDriveUrl}" style="color: #00AEEF; text-decoration: underline; font-weight: bold;">Avaa Janne Säkkisen Google Drive -kansio</a>
                </p>

                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
                  <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Säkkinen</p>
                  <p style="margin: 4px 0 0 0;">OMT-Fysioterapeutti | <a href="https://www.ftsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ftsakkinen.com</a></p>
                </div>
              </div>
            `,
          }),
        });

        // 2. Send Notification Email to Janne (tiedottajanne@gmail.com)
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FT Sakkinen Kotisivut <info@ftsakkinen.com>",
            to: [recipientEmail],
            subject: `Uusi tilaaja sähköpostilistalla: ${name || email}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f4f4f5; border-radius: 8px;">
                <h2 style="color: #00AEEF; margin-top: 0;">Uusi sähköpostitilaaja!</h2>
                <p><strong>Nimi:</strong> ${name || "Ei ilmoitettu"}</p>
                <p><strong>Sähköposti:</strong> ${email}</p>
                <p><strong>Tyyppi:</strong> ${type}</p>
                <p><strong>Aika:</strong> ${new Date().toLocaleString("fi-FI")}</p>
                <hr />
                <p style="color: #666; font-size: 12px;">Automaattinen 4-osainen videopalkkio lähetettiin tilaajan osoitteeseen.</p>
              </div>
            `,
          }),
        });

        console.log(`Resend: Automaattinen sähköposti ja ilmoitus lähetettiin osoitteisiin ${email} ja ${recipientEmail}`);
      } catch (resendError) {
        console.error("Resend API virhe sähköpostin lähetyksessä:", resendError);
      }
    } else {
      console.log("Huomio: RESEND_API_KEY puuttuu .env.local -tiedostosta. Lisää se saadaksesi sähköpostit lähtemään oikeasti.");
    }

    return NextResponse.json({
      success: true,
      message: "Tiedot vastaanotettu ja sähköposti käsitelty.",
    });
  } catch (error) {
    console.error("Virhe tilauksen käsittelyssä:", error);
    return NextResponse.json({ error: "Palvelinvirhe tilauksen käsittelyssä" }, { status: 500 });
  }
}

