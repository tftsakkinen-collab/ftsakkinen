import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Onboarding Connected Accounts using V2 Account Links
 */
export async function POST(req: Request) {
  try {
    const { accountId } = await req.json();

    if (!accountId) {
      return NextResponse.json({ error: "accountId is required" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const v2Client = (stripeClient as any).v2;
    const accountLink = await v2Client.core.accountLinks.create({
      account: accountId,
      use_case: {
        type: "account_onboarding",
        account_onboarding: {
          configurations: ["merchant", "customer"],
          refresh_url: `${origin}/connect-demo?accountId=${accountId}&refresh=true`,
          return_url: `${origin}/connect-demo?accountId=${accountId}`,
        },
      },
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (error: any) {
    console.error("Error creating account link:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create onboarding account link" },
      { status: 500 }
    );
  }
}
