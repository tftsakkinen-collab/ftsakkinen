"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ExternalLink,
  Info,
  Check,
  Copy,
  Sparkles,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import {
  GEAR_ITEMS,
  GEAR_CATEGORIES,
  getAmazonUrl,
} from "@/data/gearData";

export default function KamatPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("kaikki");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return GEAR_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "kaikki" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recommendedReason.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCoupon = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#000a18] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,174,239,0.3)]">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Suositukset & Varusteet</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide text-white mb-6">
            JANNEN <span className="text-[#00AEEF]">KAMAT & TYÖKALUT</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Kaikki välineet, laitteet ja ohjelmistot joita käytän
            sisällönluontiin, studiokuvauksiin, fysioterapiaan ja treeneihin.
          </p>

          {/* Affiliate Disclosure Box */}
          <div className="p-4 rounded-xl bg-[#000d21]/90 border border-[#0C66B4]/50 text-left text-xs text-gray-300 flex items-start gap-3 shadow-lg">
            <Info className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Kumppanuus- & Affiliate-ilmoitus:</span>{" "}
              Osa sivun linkeistä on kumppanuuslinkkejä (esim. Amazon Associates ID{" "}
              <code className="text-[#00AEEF] font-mono bg-[#0C66B4]/30 px-1 py-0.5 rounded">
                ftsakkinen-21
              </code>{" "}
              sekä Adtraction suomalaiset kaupat). Linkin kautta ostaminen ei maksa sinulle mitään ylimääräistä, mutta
              pieni komissio auttaa tukemaan ilmaisen sisällön tuottamista!
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#0C66B4]/30">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {GEAR_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#00AEEF] text-black shadow-[0_0_15px_rgba(0,174,239,0.5)] scale-105"
                      : "bg-[#000d21] text-gray-300 border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Etsi varustetta tai työkalua..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#000d21] border border-[#0C66B4]/40 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
            />
          </div>
        </div>

        {/* Gear Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#000d21]/50 rounded-2xl border border-[#0C66B4]/30">
            <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-1">Ei hakutuloksia</h3>
            <p className="text-gray-400 text-sm">
              Kokeile toista hakusanaa tai suodatinta.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const amazonLink = getAmazonUrl(item);

              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/70 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] p-6 group"
                >
                  <div>
                    {/* Badge & Category Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold tracking-wider text-[#00AEEF] uppercase bg-[#0C66B4]/20 px-2.5 py-1 rounded-md border border-[#00AEEF]/30">
                        {item.category === "kuvaus" && "🎥 Kuvaus & Audio"}
                        {item.category === "treeni" && "🏋️‍♂️ Treeni & Palautuminen"}
                        {item.category === "ohjelmistot" && "💻 Ohjelmistot"}
                      </span>
                      {item.badge && (
                        <span className="text-xs font-bold text-[#00AEEF] bg-[#0C66B4]/20 border border-[#00AEEF]/40 px-2.5 py-1 rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-white group-hover:text-[#00AEEF] transition-colors mb-2">
                      {item.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Recommended Reason / Jannen Vinkki */}
                    <div className="p-3.5 rounded-xl bg-[#00050f] border border-[#0C66B4]/30 mb-6">
                      <div className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                        <span>Miksi käytän tätä:</span>
                      </div>
                      <p className="text-gray-300 text-xs italic leading-normal">
                        "{item.recommendedReason}"
                      </p>
                    </div>
                  </div>

                  {/* Actions & Coupon */}
                  <div className="space-y-3 pt-2 border-t border-[#0C66B4]/20">
                    {item.couponCode && (
                      <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#0C66B4]/10 border border-[#00AEEF]/30">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                            Alennuskoodi
                          </span>
                          <span className="font-mono font-bold text-sm text-[#00AEEF]">
                            {item.couponCode}{" "}
                            {item.couponDiscount && `(${item.couponDiscount})`}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            handleCopyCoupon(item.id, item.couponCode!)
                          }
                          className="px-3 py-1.5 rounded-lg bg-[#0C66B4]/30 hover:bg-[#00AEEF] hover:text-black text-xs font-semibold transition-all flex items-center gap-1.5 text-white"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              Kopioitu!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Kopioi
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Main CTA Links (Dual Store Support) */}
                    <div className="flex flex-col gap-2">
                      {item.directUrl ? (
                        <Link
                          href={item.directUrl}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#00AEEF] text-black font-semibold text-sm hover:bg-[#33C2F5] transition-all shadow-[0_0_15px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2 group/btn"
                        >
                          <span>Tutustu tuotteeseen</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <div className={`grid ${item.adtractionUrl ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-2`}>
                          <a
                            href={amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-3 rounded-xl bg-[#00AEEF] hover:bg-[#33C2F5] text-black font-bold text-xs transition-all shadow-[0_0_15px_rgba(0,174,239,0.3)] flex items-center justify-center gap-1.5"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Amazon.de</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>

                          {item.adtractionUrl && (
                            <a
                              href={item.adtractionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2.5 px-3 rounded-xl bg-[#0C66B4]/40 hover:bg-[#00AEEF] hover:text-black border border-[#00AEEF]/50 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                            >
                              <span>🇫🇮 {item.adtractionStoreName || "Suomalainen kauppa"}</span>
                              <ExternalLink className="w-3 h-3 opacity-70" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
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
