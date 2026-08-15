"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CreditCard,
  UserPlus,
  RefreshCw,
  ExternalLink,
  PlusCircle,
  ShoppingBag,
  ShieldCheck,
  AlertTriangle,
  Loader2,
  CheckCircle2,
} from "lucide-react";

function ConnectDashboardContent() {
  const searchParams = useSearchParams();
  const initialAccountId = searchParams.get("accountId") || "";

  // State management
  const [accountId, setAccountId] = useState(initialAccountId);
  const [displayName, setDisplayName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [accountStatus, setAccountStatus] = useState<any>(null);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("29");
  const [creatingProduct, setCreatingProduct] = useState(false);

  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Auto-fetch account status if accountId is set
  useEffect(() => {
    if (accountId) {
      fetchStatus(accountId);
    }
  }, [accountId]);

  // Create Connected Account (V2 API)
  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading("create-account");
    setMessage(null);

    try {
      const res = await fetch("/api/connect/accounts/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName, contactEmail }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Tapahtui virhe tilin luonnissa." });
      } else {
        setAccountId(data.account.id);
        setMessage({ type: "success", text: `Connected Account luotu! ID: ${data.account.id}` });
        fetchStatus(data.account.id);
      }
    } catch (err: any) {
      setMessage({ type: "error", text: "Verkkovirhe tilin luonnissa." });
    } finally {
      setActionLoading(null);
    }
  };

  // Fetch status directly from API
  const fetchStatus = async (idToFetch: string) => {
    setLoadingStatus(true);
    try {
      const res = await fetch(`/api/connect/accounts/status?accountId=${idToFetch}`);
      const data = await res.json();
      if (res.ok) {
        setAccountStatus(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingStatus(false);
    }
  };

  // Onboard to collect payments (Account Link V2)
  const handleOnboard = async () => {
    if (!accountId) return;
    setActionLoading("onboard");
    setMessage(null);

    try {
      const res = await fetch("/api/connect/accounts/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setMessage({ type: "error", text: data.error || "Ei saatu Onboarding-linkkiä." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Virhe Onboarding-linkin haussa." });
    } finally {
      setActionLoading(null);
    }
  };

  // Create Product on Connected Account
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId) return;
    setCreatingProduct(true);
    setMessage(null);

    try {
      const priceInCents = Math.round(parseFloat(productPrice) * 100);
      const res = await fetch("/api/connect/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accountId,
          name: productName,
          description: productDesc,
          priceInCents,
          currency: "eur",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.error || "Virhe tuotteen luonnissa." });
      } else {
        setMessage({ type: "success", text: `Tuote '${data.product.name}' luotu kauppaan!` });
        setProductName("");
        setProductDesc("");
      }
    } catch (err) {
      setMessage({ type: "error", text: "Virhe tuotteen luonnissa." });
    } finally {
      setCreatingProduct(false);
    }
  };

  // Subscribe to Platform Plan
  const handleSubscribePlatform = async () => {
    if (!accountId) return;
    setActionLoading("subscribe");
    try {
      const res = await fetch("/api/connect/subscriptions/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setMessage({ type: "error", text: data.error || "Tilaussivun osoitetta ei saatu." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Virhe tilaussivulle siirryttäessä." });
    } finally {
      setActionLoading(null);
    }
  };

  // Open Billing Portal
  const handleOpenBillingPortal = async () => {
    if (!accountId) return;
    setActionLoading("portal");
    try {
      const res = await fetch("/api/connect/subscriptions/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setMessage({ type: "error", text: data.error || "Portal-osoitetta ei saatu." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Virhe Billing Portalin avauksessa." });
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 space-y-10 text-gray-200">
      {/* Header */}
      <div className="border-b border-[#0C66B4]/40 pb-6 space-y-2">
        <span className="px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
          Stripe Connect V2 Dashboard Demo
        </span>
        <h1 className="text-3xl sm:text-4xl font-display text-white">
          STRIPE CONNECT <span className="text-[#00AEEF]">KÄYTTÄJÄHALLINTA</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Tällä sivulla voit luoda Connected Account -tilejä (V2 Core API), seurata onboarding-tilaa, hallinnoida tuotteita ja alustan tilauksia.
        </p>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl text-sm ${
            message.type === "success"
              ? "bg-emerald-950/80 border border-emerald-700 text-emerald-200"
              : "bg-red-950/80 border border-red-700 text-red-200"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Account Creation & Selection */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Section 1: Create Account */}
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-[#00AEEF]" />
              1. Luokse Uusi Connected Account (V2 API)
            </h2>
            <form onSubmit={handleCreateAccount} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Nimi / Yritys</label>
                <input
                  type="text"
                  required
                  placeholder="Esim. Fysio Oulu Oy"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#000814] border border-gray-700 text-white focus:border-[#00AEEF] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Sähköposti</label>
                <input
                  type="email"
                  required
                  placeholder="kumppani@esimerkki.fi"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#000814] border border-gray-700 text-white focus:border-[#00AEEF] outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={actionLoading === "create-account"}
                className="w-full py-3 px-4 rounded-xl bg-[#00AEEF] hover:bg-[#33c2ff] text-white font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {actionLoading === "create-account" ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                <span>Luo Connected Account</span>
              </button>
            </form>
          </div>

          {/* Account Switcher / Direct ID Input */}
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-3">
            <label className="block text-xs font-semibold text-gray-300">Tai syötä olemassa oleva Account ID (`acct_...`)</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="acct_1N..."
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl bg-[#000814] border border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none"
              />
              <button
                onClick={() => fetchStatus(accountId)}
                className="px-4 py-2 rounded-xl bg-[#014489] text-white text-xs font-bold hover:bg-[#00AEEF] transition-colors"
              >
                Hae tila
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Onboarding Status & Subscriptions */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Section 2: Onboarding Status */}
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
                2. Onboarding Status (Live API)
              </h2>
              {accountId && (
                <button
                  onClick={() => fetchStatus(accountId)}
                  disabled={loadingStatus}
                  className="text-xs text-[#00AEEF] hover:underline flex items-center gap-1"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingStatus ? "animate-spin" : ""}`} />
                  Päivitä
                </button>
              )}
            </div>

            {!accountId ? (
              <p className="text-xs text-gray-400">Luo tili vasemmalta tai anna Account ID nähdäksesi onboarding-tilan.</p>
            ) : loadingStatus ? (
              <div className="py-6 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#00AEEF]" />
                Haetaan tietoja suoraan Stripe V2 API:sta...
              </div>
            ) : accountStatus ? (
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-[#000814] border border-gray-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Nimi:</span>
                    <span className="font-semibold text-white">{accountStatus.displayName || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Maksukyky (card_payments):</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded ${
                        accountStatus.readyToProcessPayments
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                          : "bg-amber-950 text-amber-400 border border-amber-800"
                      }`}
                    >
                      {accountStatus.readyToProcessPayments ? "Active (Valmis)" : "Ei vielä aktiivinen"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Onboarding-tila:</span>
                    <span className="font-mono text-gray-300">
                      {accountStatus.onboardingComplete ? "Suoritettu" : "Keskeneräinen (Vaatii tietoja)"}
                    </span>
                  </div>
                </div>

                {/* Onboard Button */}
                <button
                  onClick={handleOnboard}
                  disabled={actionLoading === "onboard"}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#0C66B4] hover:opacity-90 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  {actionLoading === "onboard" ? <Loader2 className="w-4 h-4 animate-spin" /> : <ExternalLink className="w-4 h-4" />}
                  <span>Onboard to collect payments</span>
                </button>
              </div>
            ) : (
              <p className="text-xs text-red-400">Tilitietoja ei saatu haettua.</p>
            )}
          </div>

          {/* Section 3: Subscriptions & Billing Portal */}
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#00AEEF]" />
              3. Alustan Tilaus &amp; Billing Portal
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Voit veloittaa kuukausitilauksen liitetyltä tililtä (`customer_account: "acct_..."`).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleSubscribePlatform}
                disabled={!accountId || actionLoading === "subscribe"}
                className="py-2.5 px-4 rounded-xl bg-[#014489] hover:bg-[#00AEEF] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
              >
                {actionLoading === "subscribe" ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                <span>Tilaa Alustapaketti</span>
              </button>
              <button
                onClick={handleOpenBillingPortal}
                disabled={!accountId || actionLoading === "portal"}
                className="py-2.5 px-4 rounded-xl bg-[#000814] border border-gray-700 hover:border-gray-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
              >
                {actionLoading === "portal" ? <Loader2 className="w-4 h-4 animate-spin" /> : <ExternalLink className="w-4 h-4" />}
                <span>Avaa Billing Portal</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Section 4 & 5: Products & Storefront Link */}
      {accountId && (
        <div className="p-8 rounded-3xl bg-[#000d21] border border-[#00AEEF]/50 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0C66B4]/40 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <PlusCircle className="w-6 h-6 text-[#00AEEF]" />
                4. Lisää Tuote &amp; Avaa Kauppa (Storefront)
              </h2>
              <p className="text-xs text-gray-400">
                Tuotteet luodaan otsakkeella `Stripe-Account: {accountId}`
              </p>
            </div>
            {/* Storefront Link (per connected account) */}
            {/* NOTE: In production, you should use a custom slug or domain instead of the raw connected account ID in the URL. */}
            <Link
              href={`/connect-demo/storefront/${accountId}`}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg transition-transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Avaa Kauppasivu (Storefront)</span>
            </Link>
          </div>

          {/* Product Creation Form */}
          <form onSubmit={handleCreateProduct} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Tuotteen Nimi</label>
              <input
                type="text"
                required
                placeholder="Esim. Niskakivun Kuntoutusopas"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#000814] border border-gray-700 text-white focus:border-[#00AEEF] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Kuvaus</label>
              <input
                type="text"
                placeholder="PDF-opas ja harjoitteet"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#000814] border border-gray-700 text-white focus:border-[#00AEEF] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Hinta (€)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  required
                  step="0.01"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#000814] border border-gray-700 text-white focus:border-[#00AEEF] outline-none"
                />
                <button
                  type="submit"
                  disabled={creatingProduct}
                  className="px-6 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#33c2ff] text-white font-bold shrink-0 transition-colors flex items-center gap-1 disabled:opacity-50"
                >
                  {creatingProduct ? <Loader2 className="w-4 h-4 animate-spin" /> : <PlusCircle className="w-4 h-4" />}
                  <span>Lisää</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default function ConnectDashboardPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Suspense fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-[#00AEEF] animate-spin" />
        </div>
      }>
        <ConnectDashboardContent />
      </Suspense>
    </div>
  );
}
