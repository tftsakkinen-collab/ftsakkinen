import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();
  const reqHeaders = await headers();
  const signature = reqHeaders.get("stripe-signature");

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || webhookSecret === "whsec_placeholder") {
    console.warn("Stripe Webhook secret puuttuu. Webhook-pyyntöä ei tarkistettu.");
    return NextResponse.json({ received: true, note: "Webhook secret missing in dev mode" });
  }

  let event;

  try {
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Käsittele onnistunut maksu
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const customerName = session.customer_details?.name || "Asiakas";

    console.log(`Maksu suoritettu! Asiakas: ${customerName} (${customerEmail}), Summa: ${session.amount_total / 100} EUR`);

    // Tähän voidaan yhdistää sähköpostilähetys (Resend), joka lähettää automaattisesti latauslinkin & videolinkin
  }

  return NextResponse.json({ received: true });
}
