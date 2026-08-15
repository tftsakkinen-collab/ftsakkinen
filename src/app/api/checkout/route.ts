import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const { productId } = await req.json().catch(() => ({ productId: "leukanivel-kurssi" }));

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Varmistetaan että Stripe-avain on konfiguroitu
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
      return NextResponse.json(
        {
          error: "Stripe API-avain (STRIPE_SECRET_KEY) puuttuu .env.local -tiedostosta.",
          demoMode: true,
        },
        { status: 400 }
      );
    }

    // Leukanivelkurssin tiedot (119 € = 11900 senttiä)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Leukanivelen & Purentaelimistön (TMD) Koulutusmateriaali",
              description:
                "OMT-fysioterapeutti Janne Säkkisen kliininen luentomateriaali: PDF-luentsodiat + Opetusvideolinkki materiaaleihin.",
              images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
            },
            unit_amount: 11900, // 119.00 EUR
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${origin}/leukakipu-kurssi/kiitos?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/aihe/leukakipu-ja-tmd?canceled=true`,
      metadata: {
        productId: productId || "leukanivel-kurssi",
        productName: "Leukanivel & TMD Koulutusmateriaali",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error.message || "Tapahtui virhe maksutapahtumaa alustettaessa." },
      { status: 500 }
    );
  }
}
