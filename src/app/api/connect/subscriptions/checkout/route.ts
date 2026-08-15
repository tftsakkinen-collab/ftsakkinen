import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Charge a Subscription to a Connected Account (using customer_account: "acct_...")
 */
export async function POST(req: Request) {
  try {
    const { accountId, priceId } = await req.json();

    if (!accountId) {
      return NextResponse.json({ error: "accountId is required" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Subscription price ID from environment variable or provided in request body
    const targetPriceId = priceId || process.env.STRIPE_PLATFORM_SUBSCRIPTION_PRICE_ID;

    if (!targetPriceId || targetPriceId === "price_placeholder") {
      return NextResponse.json(
        {
          error:
            "Platform subscription price ID missing. Please configure STRIPE_PLATFORM_SUBSCRIPTION_PRICE_ID in .env.local",
        },
        { status: 400 }
      );
    }

    // Create Checkout Session charging subscription to V2 Connected Account
    const session = await (stripeClient.checkout.sessions as any).create({
      customer_account: accountId, // Connected Account ID acct_... used directly as customer
      mode: "subscription",
      line_items: [{ price: targetPriceId, quantity: 1 }],
      success_url: `${origin}/connect-demo?accountId=${accountId}&subscription=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/connect-demo?accountId=${accountId}&subscription=canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating subscription checkout session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create subscription session" },
      { status: 500 }
    );
  }
}
