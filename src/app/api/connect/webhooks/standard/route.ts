import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";
import { headers } from "next/headers";

/**
 * Standard Webhook Endpoint for Subscription & Customer Events
 * 
 * IMPORTANT: For V2 connected accounts, get the account ID from subscription.customer_account (shape acct_...)
 * instead of subscription.customer.
 */
export async function POST(req: Request) {
  const body = await req.text();
  const reqHeaders = await headers();
  const signature = reqHeaders.get("stripe-signature");

  const webhookSecret = process.env.STRIPE_STANDARD_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret || webhookSecret === "whsec_placeholder") {
    console.warn("[Stripe Connect Standard Webhook] Webhook secret missing. Set STRIPE_STANDARD_WEBHOOK_SECRET in .env.local");
    return NextResponse.json({ received: true, note: "Webhook secret missing in dev mode" });
  }

  let event;

  try {
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }
    event = stripeClient.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`[Stripe Connect Webhook Error]: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  console.log(`[Stripe Connect Standard Webhook] Handling event: ${event.type}`);

  switch (event.type) {
    case "customer.subscription.updated": {
      const subscription = event.data.object as any;
      // For V2 accounts, retrieve connected account ID from customer_account
      const accountId = subscription.customer_account || subscription.customer;
      const status = subscription.status; // active, trialing, past_due, etc.
      const priceId = subscription.items?.data?.[0]?.price?.id;
      const quantity = subscription.items?.data?.[0]?.quantity;
      const cancelAtPeriodEnd = subscription.cancel_at_period_end;
      const isPaused = !!subscription.pause_collection;

      console.log(`[Subscription Updated] Account: ${accountId}, Status: ${status}, Price: ${priceId}, Quantity: ${quantity}, CancelAtEnd: ${cancelAtPeriodEnd}, Paused: ${isPaused}`);

      // TODO: Update user/account subscription status in Database
      // await db.connectedAccount.update({
      //   where: { stripeAccountId: accountId },
      //   data: { subscriptionStatus: status, priceId, quantity, cancelAtPeriodEnd }
      // });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as any;
      const accountId = subscription.customer_account || subscription.customer;

      console.log(`[Subscription Deleted/Canceled] Revoking product access for account: ${accountId}`);

      // TODO: Revoke access in Database
      // await db.connectedAccount.update({
      //   where: { stripeAccountId: accountId },
      //   data: { subscriptionStatus: 'canceled', hasAccess: false }
      // });
      break;
    }

    case "payment_method.attached": {
      const paymentMethod = event.data.object as any;
      console.log(`Payment method ${paymentMethod.id} attached to customer ${paymentMethod.customer}`);
      break;
    }

    case "payment_method.detached": {
      const paymentMethod = event.data.object as any;
      console.log(`Payment method ${paymentMethod.id} detached`);
      break;
    }

    case "customer.updated": {
      const customer = event.data.object as any;
      const defaultPaymentMethod = customer.invoice_settings?.default_payment_method;
      console.log(`Customer ${customer.id} updated. Default payment method: ${defaultPaymentMethod}`);
      // TODO: Update default payment method in DB if stored
      break;
    }

    case "customer.tax_id.created":
    case "customer.tax_id.updated":
    case "customer.tax_id.deleted": {
      const taxIdObj = event.data.object as any;
      console.log(`Customer Tax ID event (${event.type}): ${taxIdObj.id}`);
      break;
    }

    case "billing_portal.configuration.created":
    case "billing_portal.configuration.updated":
    case "billing_portal.session.created": {
      const portalObj = event.data.object as any;
      console.log(`Billing Portal event (${event.type}): ${portalObj.id}`);
      break;
    }

    default:
      console.log(`Unhandled standard event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
