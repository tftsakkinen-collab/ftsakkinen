import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Retrieve Onboarding & Payment capability status directly from Stripe V2 Accounts API
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const accountId = searchParams.get("accountId");

  if (!accountId) {
    return NextResponse.json({ error: "accountId query parameter is required" }, { status: 400 });
  }

  try {
    const v2Client = (stripeClient as any).v2;
    const account = await v2Client.core.accounts.retrieve(accountId, {
      include: ["configuration.merchant", "requirements"],
    });

    const readyToProcessPayments =
      account?.configuration?.merchant?.capabilities?.card_payments?.status === "active";

    const requirementsStatus = account?.requirements?.summary?.minimum_deadline?.status;
    const onboardingComplete =
      requirementsStatus !== "currently_due" && requirementsStatus !== "past_due";

    return NextResponse.json({
      accountId: account.id,
      displayName: account.display_name,
      contactEmail: account.contact_email,
      readyToProcessPayments,
      requirementsStatus,
      onboardingComplete,
      account,
    });
  } catch (error: any) {
    console.error("Error retrieving account status:", error);
    return NextResponse.json(
      { error: error.message || "Failed to retrieve account status" },
      { status: 500 }
    );
  }
}
