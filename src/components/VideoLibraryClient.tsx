"use client";

import { useState } from "react";
import { Category } from "@/data/categories";
import { Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import { PlayCircle, Search, Sparkles, Filter } from "lucide-react";

interface VideoLibraryClientProps {
  videos: Video[];
  categories: Category[];
}

export default function VideoLibraryClient({ videos, categories }: VideoLibraryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("kaikki");
  const [searchQuery, setSearchQuery] = useState("");

  const purentaVideos = videos.filter(v => v.categoryId === "purenta-tmd");
  const ergonomiaVideos = videos.filter(v => v.categoryId === "ergonomia");
  const tuleVideos = videos.filter(v => v.categoryId === "tule-vaivat");

  const filteredVideos = videos.filter((v) => {
    const matchesCat = selectedCategory === "kaikki" || v.categoryId === selectedCategory;
    const matchesSearch =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.promiseDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 bg-[#000814] min-h-screen text-slate-200 relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <PlayCircle className="w-4 h-4 text-[#00AEEF]" />
            <span>KAIKKI {videos.length} KUNTOUTUS- &amp; OPETUSVIDEOTA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight break-words">
            OMT-FYSIOTERAPEUTIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KOKO VIDEOKIRJASTO</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Tutustu OMT-fysioterapeutti Janne Säkkisen kaikkiin {videos.length} julkaistuun fysioterapiavideoon ja AEO-optimoituihin oppaisiin. Videot on jaoteltu kolmeen pääosa-alueeseen.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Etsi ${videos.length} videon joukosta (esim. leuka, niska, tulehdus)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#00122e] border-2 border-[#0C66B4]/60 text-white placeholder-slate-400 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 text-sm font-sans shadow-lg transition-all"
            />
          </div>

          {/* 3 Main Category Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              let count = videos.length;
              if (cat.id === "purenta-tmd") count = purentaVideos.length;
              if (cat.id === "ergonomia") count = ergonomiaVideos.length;
              if (cat.id === "tule-vaivat") count = tuleVideos.length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap border shrink-0 flex items-center gap-2 cursor-pointer ${
                    active
                      ? "bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.4)]"
                      : "bg-[#00122e] text-slate-300 border-[#0C66B4]/50 hover:border-[#00AEEF] hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    active ? "bg-black/20 text-[#000a18]" : "bg-[#014489] text-[#00AEEF]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Mode */}
        {selectedCategory === "kaikki" && searchQuery === "" ? (
          <div className="space-y-20">
            
            {/* Section 1: Purenta & TMD */}
            <section className="space-y-8 pt-6 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold border border-[#00AEEF]/40">1</span>
                    PURENTA &amp; TMD ({purentaVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Purentalihasten kireys, leukanivelen naksahdus, bruksismi ja kasvojen kiputilat.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("purenta-tmd")}
                  className="text-xs text-[#00AEEF] hover:text-[#38bdf8] font-bold self-start sm:self-auto cursor-pointer"
                >
                  Suodata vain Purenta &amp; TMD →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {purentaVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

            {/* Section 2: Ergonomia */}
            <section className="space-y-8 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold border border-[#00AEEF]/40">2</span>
                    ERGONOMIA ({ergonomiaVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Suun terveydenhuollon ja etätyön ergonomia, taukojumpat ja asennonhallinta.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("ergonomia")}
                  className="text-xs text-[#00AEEF] hover:text-[#38bdf8] font-bold self-start sm:self-auto cursor-pointer"
                >
                  Suodata vain Ergonomia →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ergonomiaVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

            {/* Section 3: TULE-vaivat */}
            <section className="space-y-8 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold border border-[#00AEEF]/40">3</span>
                    TULE-VAIVAT ({tuleVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Tulehdus, niska-hartiaseutu, selkäkivut, olkapään ahtaus, polvi ja lonkka.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("tule-vaivat")}
                  className="text-xs text-[#00AEEF] hover:text-[#38bdf8] font-bold self-start sm:self-auto cursor-pointer"
                >
                  Suodata vain TULE-vaivat →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tuleVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </section>

          </div>
        ) : (
          /* Filtered Grid View */
          <div className="space-y-8">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-[#0C66B4]/30 pb-4">
              <span className="font-semibold text-white">Näytetään {filteredVideos.length} videota</span>
              {(selectedCategory !== "kaikki" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="text-[#00AEEF] hover:underline font-bold cursor-pointer"
                >
                  Näytä kaikki 70 videota
                </button>
              )}
            </div>

            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[#00122e] rounded-3xl border border-[#0C66B4]/40 space-y-4">
                <p className="text-slate-300 font-medium">Ei hakuehtoja vastaavia videoita.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#00AEEF] text-[#000a18] font-bold text-xs shadow-glow-sm cursor-pointer"
                >
                  Näytä kaikki 70 videota
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
