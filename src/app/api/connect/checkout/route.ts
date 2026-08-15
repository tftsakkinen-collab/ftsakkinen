import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Process Charges to Connected Account via Direct Charge with Application Fee
 */
export async function POST(req: Request) {
  try {
    const { accountId, priceId, priceInCents, name, applicationFeeInCents } = await req.json();

    if (!accountId) {
      return NextResponse.json({ error: "accountId is required" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Application fee amount (e.g., 5% platform fee or specified fee in cents)
    const feeAmount = applicationFeeInCents
      ? Number(applicationFeeInCents)
      : Math.round((Number(priceInCents || 10000) * 0.05)); // Default 5% platform fee

    // Line item configuration: use price ID if provided, otherwise price_data
    const lineItem = priceId
      ? { price: priceId, quantity: 1 }
      : {
          price_data: {
            currency: "eur",
            product_data: {
              name: name || "Tuote / Palvelu",
            },
            unit_amount: Number(priceInCents || 10000),
          },
          quantity: 1,
        };

    // Create Checkout Session using Direct Charge with application_fee_amount
    const session = await stripeClient.checkout.sessions.create(
      {
        line_items: [lineItem],
        payment_intent_data: {
          application_fee_amount: feeAmount,
        },
        mode: "payment",
        success_url: `${origin}/connect-demo/storefront/${accountId}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/connect-demo/storefront/${accountId}?canceled=true`,
      },
      {
        stripeAccount: accountId, // Connected Account ID header
      }
    );

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating Checkout Session on connected account:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
