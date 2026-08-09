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
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4" />
            <span>Suositellut Välineet &amp; Varusteet</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            SUOSITELTUT <span className="text-[#00AEEF]">KUNTOUTUSVÄLINEET &amp; VARUSTEET</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Kuratoitu lista fysioterapiaklinikallani ja videotallennuksissa käytetyistä välineistä, kuntoutuslaitteista, purentalihasten apuvälineistä sekä kuvausvarusteista.
          </p>
        </div>

        {/* Amazon & Affiliate Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-[#000d21] border border-[#0C66B4]/60 space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2 font-bold text-[#00AEEF]">
            <Info className="w-4 h-4 shrink-0" />
            <span>Avoimuus- &amp; Kumppanuusilmoitus (Affiliate Disclaimer)</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Tämä sivu sisältää kumppanuuslinkkejä (Amazon Associates &amp; suomalaiset yhteistyökumppanit). Jos ostat tuotteen linkin kautta, saatat tukea sivustoni ja ilmaisten kuntoutusvideoideni tuottamista ilman lisäkustannuksia sinulle. Kaikki suositellut välineet ovat henkilökohtaisesti testattuja kliinisessä työssä tai videotuotannossa.
          </p>
          <div className="pt-1 text-[11px] text-gray-400 italic">
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#00AEEF] text-[#000a18] shadow-glow"
                      : "bg-[#000d21] text-gray-300 border border-[#0C66B4]/40 hover:border-[#00AEEF]"
                  }`}
                >
                  {(cat as any).label || (cat as any).name}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Etsi varustetta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#000d21] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF]"
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
                className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-[#00AEEF] bg-[#014489]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {GEAR_CATEGORIES.find((c) => c.id === item.category)?.label || item.category}
                    </span>

                    {/* Task 5: Explicit Affiliate Link & Valvira Badge */}
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

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  {((item as any).whyIUseIt || item.recommendedReason) && (
                    <div className="p-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/30 space-y-1">
                      <div className="text-[11px] font-bold text-[#00AEEF] uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Kliininen Perustelu:</span>
                      </div>
                      <p className="text-xs text-gray-300 italic leading-relaxed">
                        &quot;{(item as any).whyIUseIt || item.recommendedReason}&quot;
                      </p>
                    </div>
                  )}

                  {/* Task 5: Valvira compliance note for supplements */}
                  {isSupplement && (
                    <div className="text-[10px] text-amber-200/90 bg-amber-950/30 p-2 rounded-lg border border-amber-800/40">
                      * Huomautus: Ravintolisä ei korvaa monipuolista ruokavaliota. Konsultoi tarvittaessa lääkäriä.
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#00AEEF] text-[#000a18] font-bold text-xs hover:bg-[#38c8ff] transition-colors"
                  >
                    <span>Katso Tuote &amp; Hinta</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleCopyLink(item)}
                    className="p-2.5 rounded-full bg-[#000a18] border border-[#0C66B4] text-gray-300 hover:text-[#00AEEF] hover:border-[#00AEEF] transition-colors"
                    title="Kopioi suora linkki"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-green-400" />
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
