import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Add a Billing Portal Session for Connected Account (using customer_account: "acct_...")
 */
export async function POST(req: Request) {
  try {
    const { accountId } = await req.json();

    if (!accountId) {
      return NextResponse.json({ error: "accountId is required" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await (stripeClient.billingPortal.sessions as any).create({
      customer_account: accountId, // Connected Account ID
      return_url: `${origin}/connect-demo?accountId=${accountId}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating billing portal session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create billing portal session" },
      { status: 500 }
    );
  }
}
