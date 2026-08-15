import Stripe from "stripe";

/**
 * Stripe Connect V2 Integration Client Setup
 * 
 * IMPORTANT: Replace process.env.STRIPE_SECRET_KEY in .env.local with your real or test secret key (sk_test_...).
 * The Stripe SDK automatically uses the latest recommended API version.
 */
const apiKey = process.env.STRIPE_SECRET_KEY;

if (!apiKey || apiKey === "sk_test_placeholder") {
  console.warn(
    "⚠️ STRIPE_SECRET_KEY is missing or set to placeholder in .env.local. " +
    "Please provide a valid secret key (sk_test_... or sk_live_...) to run Stripe Connect API calls."
  );
}

// Single instance of Stripe Client to be used across all requests
export const stripeClient = new Stripe(apiKey || "sk_test_placeholder", {
  typescript: true,
});
