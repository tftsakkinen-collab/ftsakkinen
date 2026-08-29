"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, CreditCard, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";

/**
 * Connected Account Storefront Page
 * 
 * NOTE: In production, you should use a custom slug or domain instead of the raw connected account ID in the URL.
 */
export default function StorefrontPage({ params }: { params: Promise<{ accountId: string }> }) {
  const resolvedParams = use(params);
  const accountId = resolvedParams.accountId;

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [buyingId, setBuyingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Fetch products for this connected account using stripeAccount header API endpoint
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`/api/connect/products?accountId=${accountId}`);
        const data = await res.json();
        if (res.ok) {
          setProducts(data.products || []);
        } else {
          setErrorMsg(data.error || "Virhe tuotteiden haussa.");
        }
      } catch (err) {
        setErrorMsg("Verkkovirhe tuotteiden haussa.");
      } finally {
        setLoading(false);
      }
    }

    if (accountId) {
      fetchProducts();
    }
  }, [accountId]);

  // Process Hosted Checkout charge on Connected Account with Application Fee
  const handleBuyProduct = async (product: any) => {
    setBuyingId(product.id);
    setErrorMsg(null);

    try {
      const defaultPrice = product.default_price;
      const unitAmount = defaultPrice?.unit_amount || 10000;
      const priceId = typeof defaultPrice === "string" ? defaultPrice : defaultPrice?.id;

      const res = await fetch("/api/connect/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId,
          priceId,
          priceInCents: unitAmount,
          name: product.name,
          applicationFeeInCents: Math.round(unitAmount * 0.05), // 5% platform application fee
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setErrorMsg(data.error || "Maksusivun osoitetta ei saatu luotua.");
      }
    } catch (err) {
      setErrorMsg("Virhe maksutapahtuman alustuksessa.");
    } finally {
      setBuyingId(null);
    }
  };

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0C66B4]/30 pb-6">
          <div>
            <Link
              href={`/connect-demo?accountId=${accountId}`}
              className="inline-flex items-center gap-1.5 text-xs text-[#67e8f9] hover:underline mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Palaa Connect Dashboardiin</span>
            </Link>
            <h1 className="text-3xl font-display text-white tracking-wide">
              KAUPPASIVU <span className="text-[#67e8f9]">(STOREFRONT)</span>
            </h1>
            <p className="text-xs font-mono text-gray-400 mt-1">
              Connected Account: <span className="text-white">{accountId}</span>
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Suorat Stripe Connect -maksut + Komissio</span>
          </div>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-red-950/80 border border-red-700 text-red-200 text-sm">
            {errorMsg}
          </div>
        )}

        {/* Product Listing */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <Loader2 className="w-10 h-10 text-[#67e8f9] animate-spin mx-auto" />
            <p className="text-gray-400 text-sm">Haetaan kaupan tuotteita Stripe Connect API:sta...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 text-center space-y-4">
            <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto" />
            <h2 className="text-xl font-bold text-white">Ei tuotteita kaupassa</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Luo tuotteita Connect Dashboardin kautta valitulle tilille (`Stripe-Account: {accountId}`).
            </p>
            <Link
              href={`/connect-demo?accountId=${accountId}`}
              className="inline-block px-6 py-2.5 rounded-xl bg-[#00AEEF] text-white text-xs font-bold hover:bg-[#33c2ff] transition-colors"
            >
              Lisää ensimmäinen tuote
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const defaultPrice = product.default_price;
              const unitAmount = defaultPrice?.unit_amount ? defaultPrice.unit_amount / 100 : 0;
              const currency = (defaultPrice?.currency || "eur").toUpperCase();

              return (
                <div
                  key={product.id}
                  className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 flex flex-col justify-between space-y-6 hover:border-[#00AEEF]/60 transition-all shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono text-[#67e8f9] bg-[#000814] px-2 py-0.5 rounded border border-[#0C66B4]/40">
                        {product.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug">{product.name}</h3>
                    {product.description && (
                      <p className="text-xs text-gray-300 leading-relaxed">{product.description}</p>
                    )}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-800">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">Hinta:</span>
                      <span className="text-2xl font-bold text-white">
                        {unitAmount} <span className="text-[#67e8f9] text-lg">{currency === "EUR" ? "€" : currency}</span>
                      </span>
                    </div>

                    <button
                      onClick={() => handleBuyProduct(product)}
                      disabled={buyingId === product.id}
                      className="w-full py-3 px-4 rounded-xl bg-[#00AEEF] hover:bg-[#33c2ff] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {buyingId === product.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <CreditCard className="w-4 h-4" />
                      )}
                      <span>Osta nyt (Stripe Checkout)</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
