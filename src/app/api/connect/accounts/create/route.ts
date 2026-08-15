import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Creating Connected Accounts (V2 API)
 * 
 * NOTE: Never pass top-level `type` property (such as type: 'express', 'standard', or 'custom').
 * Only use the V2 core account parameters as specified.
 */
export async function POST(req: Request) {
  try {
    const { displayName, contactEmail, country } = await req.json();

    if (!displayName || !contactEmail) {
      return NextResponse.json(
        { error: "display_name and contact_email are required" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
      return NextResponse.json(
        { error: "Stripe API Key missing. Please set STRIPE_SECRET_KEY in .env.local" },
        { status: 400 }
      );
    }

    // Create Connected Account using Stripe V2 Core API
    // (Using (stripeClient as any).v2.core.accounts.create for V2 API compatibility)
    const v2Client = (stripeClient as any).v2;
    const account = await v2Client.core.accounts.create({
      display_name: displayName,
      contact_email: contactEmail,
      identity: {
        country: country || "us",
      },
      dashboard: "full",
      defaults: {
        responsibilities: {
          fees_collector: "stripe",
          losses_collector: "stripe",
        },
      },
      configuration: {
        customer: {},
        merchant: {
          capabilities: {
            card_payments: {
              requested: true,
            },
          },
        },
      },
    });

    // TODO: DB Mapping
    // If a database is setup, store mapping here:
    // await db.user.update({ where: { id: userId }, data: { stripeAccountId: account.id } });
    console.log(`[Stripe Connect V2] Created account: ${account.id} for ${contactEmail}`);

    return NextResponse.json({ account });
  } catch (error: any) {
    console.error("Error creating V2 connected account:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create connected account" },
      { status: 500 }
    );
  }
}
