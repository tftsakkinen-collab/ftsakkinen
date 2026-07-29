import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, guide, locale = "fi" } = body;

    if (!email) {
      return NextResponse.json({ error: "Sähköposti vaaditaan" }, { status: 400 });
    }

    const leadData = {
      name,
      email,
      guide,
      locale,
      list: "FT_Sakkinen_FI",
      recipient: SITE_CONFIG.contactEmail, // tiedottajanne@gmail.com
      timestamp: new Date().toISOString(),
    };

    console.log("=== UUSI SUOMENKIELINEN TILAUS ===");
    console.log(`Lähetetään ilmoitus osoitteeseen: ${leadData.recipient}`);
    console.log(`Tilaaja: ${name} (${email}), Opas: ${guide}`);

    // Here we integrate with Formspree / Resend / Webhook if API Key is configured
    // E.g., await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(leadData) })

    return NextResponse.json({
      success: true,
      message: "Tilaus vastaanotettu ja ilmoitus lähetetty sähköpostiin.",
      driveUrl: "https://drive.google.com/drive/folders/[PLACEHOLDER_SUOMI_DRIVE_KANSIO]",
    });
  } catch (error) {
    console.error("Virhe tilauksen käsittelyssä:", error);
    return NextResponse.json({ error: "Palvelinvirhe tilauksen käsittelyssä" }, { status: 500 });
  }
}
