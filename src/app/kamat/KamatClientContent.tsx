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
import { trackEvent } from "@/lib/analytics";

export default function KamatClientContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("kaikki");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return GEAR_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "kaikki" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (((item as any).whyIUseIt || item.recommendedReason || "").toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = (item: any) => {
    const url = getAmazonUrl(item);
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    trackEvent("copy_affiliate_link", { itemId: item.id, url });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-12 md:py-20 bg-[#000814] min-h-screen text-slate-200 relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <ShoppingBag className="w-4 h-4" />
            <span>Suositellut Välineet &amp; Varusteet</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight break-words">
            SUOSITELLUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KUNTOUTUSVÄLINEET &amp; VARUSTEET</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Kuratoitu lista fysioterapiaklinikallani ja videotallennuksissa käytetyistä välineistä, kuntoutuslaitteista, purentalihasten apuvälineistä sekä kuvausvarusteista.
          </p>
        </div>

        {/* Amazon & Affiliate Disclaimer Box */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#00122e] border border-[#0C66B4]/60 space-y-2 text-sm text-slate-300 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold text-[#00AEEF]">
            <Info className="w-4 h-4 shrink-0" />
            <span>Avoimuus- &amp; Kumppanuusilmoitus (Affiliate Disclaimer)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Tämä sivu sisältää kumppanuuslinkkejä (Amazon Associates &amp; suomalaiset yhteistyökumppanit). Jos ostat tuotteen linkin kautta, saatat tukea sivustoni ja ilmaisten kuntoutusvideoideni tuottamista ilman lisäkustannuksia sinulle. Kaikki suositellut välineet ovat henkilökohtaisesti testattuja kliinisessä työssä tai videotuotannossa.
          </p>
          <div className="pt-1 text-[11px] text-slate-400 italic">
            * Terveydenhuollon ammattihenkilön huomautus: Ravintolisät ja harjoitusvälineet ovat täydentäviä tuotteita eivätkä korvaa yksilöllistä lääkärin tai fysioterapeutin tutkimusta ja hoitosuunnitelmaa.
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {GEAR_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                      : "bg-[#00122e] text-slate-300 border border-[#0C66B4]/50 hover:border-[#00AEEF] hover:text-white"
                  }`}
                >
                  {(cat as any).label || (cat as any).name}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Etsi varustetta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#00122e] border border-[#0C66B4]/60 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
            />
          </div>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const affiliateUrl = getAmazonUrl(item);
            const isNonAmazonAffiliate = !!((item as any).adtractionUrl || (item as any).directUrl || (item as any).affiliateUrl) && !item.amazonAsinOrSearch;
            const isSupplement = (item.category as string) === "ravintolisat" || item.id.includes("omega") || item.id.includes("magnesium");

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-panel hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-[#00AEEF] bg-[#014489]/40 border border-[#00AEEF]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {GEAR_CATEGORIES.find((c) => c.id === item.category)?.label || item.category}
                    </span>

                    {/* Explicit Affiliate Link & Valvira Badge */}
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {isNonAmazonAffiliate && (
                        <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded-full">
                          Kumppanuuslinkki
                        </span>
                      )}
                      {item.amazonAsinOrSearch && (
                        <span className="text-[10px] font-semibold text-sky-300 bg-sky-950/60 border border-sky-500/40 px-2 py-0.5 rounded-full">
                          Amazon Affiliate
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {((item as any).whyIUseIt || item.recommendedReason) && (
                    <div className="p-3.5 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-1">
                      <div className="text-[11px] font-bold text-[#00AEEF] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#00AEEF]" />
                        <span>Kliininen Perustelu:</span>
                      </div>
                      <p className="text-xs text-slate-300 italic leading-relaxed">
                        &quot;{(item as any).whyIUseIt || item.recommendedReason}&quot;
                      </p>
                    </div>
                  )}

                  {/* Valvira compliance note for supplements */}
                  {isSupplement && (
                    <div className="text-[10px] text-amber-200/90 bg-amber-950/30 p-2.5 rounded-xl border border-amber-800/40">
                      * Huomautus: Ravintolisä ei korvaa monipuolista ruokavaliota. Konsultoi tarvittaessa lääkäriä.
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs hover:from-white hover:to-slate-100 transition-all shadow-[0_0_15px_rgba(0,174,239,0.3)]"
                  >
                    <span>Katso Tuote &amp; Hinta</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopyLink(item)}
                    className="p-3 rounded-xl bg-[#000814] border border-[#0C66B4] text-slate-300 hover:text-[#00AEEF] hover:border-[#00AEEF] transition-colors cursor-pointer"
                    title="Kopioi suora linkki"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
