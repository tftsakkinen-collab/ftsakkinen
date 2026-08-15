import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";
import { headers } from "next/headers";

/**
 * Webhook Endpoint for Stripe V2 Connected Account 'Thin' Events
 * 
 * To test locally using Stripe CLI:
 * stripe listen --thin-events 'v2.core.account[requirements].updated,v2.core.account[configuration.merchant].capability_status_updated,v2.core.account[configuration.customer].capability_status_updated' --forward-thin-to http://localhost:3000/api/connect/webhooks/thin
 */
export async function POST(req: Request) {
  const body = await req.text();
  const reqHeaders = await headers();
  const signature = reqHeaders.get("stripe-signature");

  const webhookSecret = process.env.STRIPE_THIN_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || webhookSecret === "whsec_placeholder") {
    console.warn("[Stripe Connect Thin Webhook] Webhook secret missing. Set STRIPE_THIN_WEBHOOK_SECRET in .env.local");
    return NextResponse.json({ received: true, note: "Webhook secret missing in dev mode" });
  }

  try {
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    // 1. Parse thin event notification signature
    const thinEvent = (stripeClient as any).parseThinEvent(body, signature, webhookSecret);
    console.log(`[Stripe Connect Thin Webhook] Received thin event notification ID: ${thinEvent.id}`);

    // 2. Fetch full event details using V2 core API
    const v2Client = (stripeClient as any).v2;
    const event = await v2Client.core.events.retrieve(thinEvent.id);

    console.log(`[Stripe Connect Thin Webhook] Retrieved full V2 event type: ${event.type}`);

    // 3. Handle specific event types
    switch (event.type) {
      case "v2.core.account[requirements].updated": {
        const accountId = event.related_object?.id;
        console.log(`Requirements updated for connected account: ${accountId}`);
        // TODO: Re-fetch account status and update DB or notify merchant
        break;
      }
      case "v2.core.account[configuration.merchant].capability_status_updated": {
        const accountId = event.related_object?.id;
        console.log(`Merchant capability status updated for account: ${accountId}`);
        // TODO: Update merchant payment capability status in DB
        break;
      }
      case "v2.core.account[configuration.customer].capability_status_updated": {
        const accountId = event.related_object?.id;
        console.log(`Customer capability status updated for account: ${accountId}`);
        break;
      }
      default:
        console.log(`Unhandled V2 event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error(`[Stripe Connect Thin Webhook Error]: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }
}
