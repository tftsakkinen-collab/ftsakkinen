import { NextResponse } from "next/server";
import { stripeClient } from "@/lib/stripe-connect";

/**
 * Endpoint to List Products on a Connected Account using `stripeAccount` option header
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const accountId = searchParams.get("accountId");

  if (!accountId) {
    return NextResponse.json({ error: "accountId query parameter is required" }, { status: 400 });
  }

  try {
    // List active products from the specified connected account
    const products = await stripeClient.products.list(
      {
        limit: 20,
        active: true,
        expand: ["data.default_price"],
      },
      {
        stripeAccount: accountId, // Header passed via request options
      }
    );

    return NextResponse.json({ products: products.data });
  } catch (error: any) {
    console.error("Error listing products for connected account:", error);
    return NextResponse.json(
      { error: error.message || "Failed to list products" },
      { status: 500 }
    );
  }
}

/**
 * Endpoint to Create a Product on a Connected Account using `stripeAccount` option header
 */
export async function POST(req: Request) {
  try {
    const { accountId, name, description, priceInCents, currency } = await req.json();

    if (!accountId || !name || !priceInCents) {
      return NextResponse.json(
        { error: "accountId, name, and priceInCents are required" },
        { status: 400 }
      );
    }

    // Create product directly on the connected account using stripeAccount header
    const product = await stripeClient.products.create(
      {
        name: name,
        description: description || "",
        default_price_data: {
          unit_amount: Number(priceInCents),
          currency: currency || "eur",
        },
      },
      {
        stripeAccount: accountId, // Header passed via request options
      }
    );

    console.log(`[Stripe Connect] Created product ${product.id} on account ${accountId}`);

    return NextResponse.json({ product });
  } catch (error: any) {
    console.error("Error creating product on connected account:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
