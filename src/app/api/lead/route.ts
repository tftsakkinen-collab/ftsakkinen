import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, condition, message, type = "lead", guide, locale = "fi" } = body;

    if (!email) {
      return NextResponse.json({ error: "Sähköposti vaaditaan" }, { status: 400 });
    }

    const leadData = {
      type,
      name,
      email,
      phone,
      condition,
      message,
      guide,
      locale,
      list: type === "deviceInquiry" ? "FT_Sakkinen_Elbow_Device_Inquiries" : "FT_Sakkinen_FI",
      recipient: SITE_CONFIG.contactEmail, // tiedottajanne@gmail.com
      timestamp: new Date().toISOString(),
    };

    console.log(`=== UUSI SUOMENKIELINEN YHTEYDENOTTO (${type.toUpperCase()}) ===`);
    console.log(`Lähetetään ilmoitus osoitteeseen: ${leadData.recipient}`);
    console.log(`Lähettäjä: ${name} (${email}, puh: ${phone || "ei ilmoitettu"})`);
    if (type === "deviceInquiry") {
      console.log(`Aihe: ${condition}, Viesti: ${message}`);
    } else {
      console.log(`Opas: ${guide}`);
    }

    return NextResponse.json({
      success: true,
      message: "Viesti vastaanotettu onnistuneesti.",
    });
  } catch (error) {
      console.error("Virhe tilauksen käsittelyssä:", error);
      return NextResponse.json({ error: "Palvelinvirhe tilauksen käsittelyssä" }, { status: 500 });
  }
}
