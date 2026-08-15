import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ paid: false, error: "Session ID puuttuu." }, { status: 400 });
  }

  // Jos Stripe-avainta ei ole vielä konfiguroitu, mahdollistetaan testinäkymä kehitysvaiheessa
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
    return NextResponse.json({
      paid: true,
      demoMode: true,
      customerEmail: "malli.asiakas@esimerkki.fi",
      productName: "Leukanivelen & Purentaelimistön (TMD) Koulutusmateriaali",
    });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({
        paid: true,
        customerEmail: session.customer_details?.email,
        customerName: session.customer_details?.name,
        productName: "Leukanivelen & Purentaelimistön (TMD) Koulutusmateriaali",
      });
    } else {
      return NextResponse.json({ paid: false, status: session.payment_status });
    }
  } catch (error: any) {
    console.error("Session verification error:", error);
    return NextResponse.json({ paid: false, error: error.message }, { status: 500 });
  }
}
