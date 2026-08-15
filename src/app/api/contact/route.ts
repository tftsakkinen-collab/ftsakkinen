import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Sähköposti ja viesti ovat pakollisia kenttiä." },
        { status: 400 }
      );
    }

    const recipientEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        // 1. Send Notification Email to Janne Säkkinen
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FT Sakkinen Kotisivut <info@ftsakkinen.com>",
            to: [recipientEmail],
            subject: `Uusi yhteydenotto kotisivuilta: ${name || email}`,
            tags: [
              { name: "language", value: "fi" },
              { name: "type", value: "contact-form" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <h2 style="color: #00AEEF; margin-top: 0;">Uusi yhteydenottopyyntö</h2>
                <p><strong>Nimi:</strong> ${name || "Ei ilmoitettu"}</p>
                <p><strong>Sähköposti:</strong> ${email}</p>
                <p><strong>Puhelinnumero:</strong> ${phone || "Ei ilmoitettu"}</p>
                <p><strong>Aihe:</strong> ${subject || "Yhteydenotto"}</p>
                <hr style="border: 0; border-top: 1px solid #0C66B4; margin: 16px 0;" />
                <p><strong>Viesti:</strong></p>
                <div style="background-color: #000d21; padding: 16px; border-radius: 8px; border: 1px solid #0C66B4/50; color: #dddddd; white-space: pre-wrap;">
                  ${message}
                </div>
                <p style="color: #888; font-size: 12px; margin-top: 20px;">Aika: ${new Date().toLocaleString("fi-FI")}</p>
              </div>
            `,
          }),
        });

        // 2. Send Confirmation Email to Sender
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "FT Janne Säkkinen <janne@ftsakkinen.com>",
            to: [email],
            subject: `Kiitos yhteydenotostasi${name ? `, ${name}` : ""}!`,
            tags: [
              { name: "language", value: "fi" },
              { name: "type", value: "contact-confirmation" },
            ],
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
                <h2 style="color: #00AEEF; margin-top: 0;">Kiitos yhteydenotostasi!</h2>
                <p style="font-size: 15px; line-height: 1.6;">Hei ${name || "terveydenystävä"},</p>
                <p style="font-size: 14px; line-height: 1.6; color: #dddddd;">Viestisi on vastaanotettu onnistuneesti. Olen sinuun yhteydessä mahdollisimman pian.</p>
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #0C66B4; color: #888888; font-size: 12px;">
                  <p style="margin: 0; font-weight: bold; color: #ffffff;">Janne Säkkinen</p>
                  <p style="margin: 4px 0 0 0;">OMT-Fysioterapeutti | <a href="https://www.ftsakkinen.com" style="color: #00AEEF; text-decoration: none;">www.ftsakkinen.com</a></p>
                </div>
              </div>
            `,
          }),
        });
      } catch (resendErr) {
        console.error("Resend API error:", resendErr);
      }
    }

    return NextResponse.json({ success: true, message: "Viesti lähetetty onnistuneesti." });
  } catch (error) {
    console.error("Virhe viestin lähetyksessä:", error);
    return NextResponse.json({ error: "Palvelinvirhe viestin lähetyksessä." }, { status: 500 });
  }
}
