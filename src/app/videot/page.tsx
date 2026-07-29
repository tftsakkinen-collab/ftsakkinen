"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/categories";
import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import { PlayCircle, Search, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

export default function VideoLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState("kaikki");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos] = useState<Video[]>(FALLBACK_VIDEOS);

  const filteredVideos = videos.filter((v) => {
    const matchesCat = selectedCategory === "kaikki" || v.categoryId === selectedCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.promiseDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4" />
            <span>Virallinen Kuntoutus- &amp; Opetusvideokirjasto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            OMT-FYSIOTERAPEUTIN <span className="text-[#00AEEF]">VIDEOKIRJASTO</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Katso OMT-fysioterapeutti Janne Säkkisen julkaisemat YouTuben fysioterapiavideot, täsmälliset liike- ja harjoitusohjeet sekä AEO-optimoidut tekstiartikkelit purentaelimistön vaivoihin (TMD), työergonomiaan ja tuki- ja liikuntaelimistön ongelmiin.
          </p>
        </div>

        {/* SEO Category Descriptions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              Leukanivel &amp; Purentaelimistö (TMD)
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Tieteelliseen näyttöön pohjautuvat kuntoutusohjeet leukanivelen naksumiseen, rajoittuneeseen suun avaukseen, purentalihasten (Masseter, Pterygoideus) faskiakäsittelyyn ja narskutteluun (bruksismi).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              Ergonomia &amp; Työhyvinvointi
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Täsmälliset taukojumppa- ja asennonhallintaohjeet etätyöntekijöille, hammaslääkäreille, suuhygienisteille ja päätetyöntekijöille niska-hartiaseudun jännitysten helpottamiseen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              Tuki- ja Liikuntaelimistö (TULE)
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Ohjeet selkäkivun, iskiasoireiden, olkapään ahtauden, polven ja lonkan nivelrikon sekä kroonisen matala-asteisen tulehduksen sammuttamiseen ravinnon ja liikehoidon avulla.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-6 pt-4">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Etsi videota tai aihetta (esim. leuka, TMD, tulehdus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm font-sans"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border shrink-0 ${
                    active
                      ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-glow"
                      : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF] hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count Header */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-3">
          <span>Näytetään {filteredVideos.length} videota</span>
          {selectedCategory !== "kaikki" && (
            <button
              onClick={() => setSelectedCategory("kaikki")}
              className="text-[#00AEEF] hover:underline"
            >
              Tyhjennä suodatin
            </button>
          )}
        </div>

        {/* Video Cards Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#000d21] rounded-2xl border border-[#0C66B4]/30 space-y-3">
            <p className="text-gray-300 font-medium">Ei hakuehtoja vastaavia videoita.</p>
            <button
              onClick={() => {
                setSelectedCategory("kaikki");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-[#00AEEF] text-black font-bold text-xs"
            >
              Näytä kaikki videot
            </button>
          </div>
        )}

        {/* Bottom Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Haluatko kaikki liikeoppaat PDF-muodossa?</h3>
            <p className="text-xs text-gray-300">
              Liity sähköpostilistalle ja saat välittömän pääsyn Janne Säkkisen suomenkieliseen Google Drive -kansioon.
            </p>
          </div>
          <Link
            href="/ilmaisopas"
            className="px-6 py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-xs hover:bg-[#33C2F5] transition-all shadow-glow whitespace-nowrap"
          >
            Lataa ilmaiset oppaat →
          </Link>
        </div>

      </div>
    </div>
  );
}
