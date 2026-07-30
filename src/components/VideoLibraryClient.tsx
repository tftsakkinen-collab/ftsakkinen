"use client";

import { useState } from "react";
import { Category } from "@/data/categories";
import { Video } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import { PlayCircle, Search } from "lucide-react";

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
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-4 h-4" />
            <span>KAIKKI 68 KUNTOUTUS- &amp; OPETUSVIDEOTA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            OMT-FYSIOTERAPEUTIN <span className="text-[#00AEEF]">KOKO VIDEOKIRJASTO</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Tutustu OMT-fysioterapeutti Janne Säkkisen kaikkiin 68 julkaistuun fysioterapiavideoon ja AEO-optimattuihin blogiartikkeleihin. Videot on jaoteltu kolmeen pääosa-alueeseen.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Etsi 68 videon joukosta (esim. leuka, niska, tulehdus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm font-sans"
            />
          </div>

          {/* 3 Main Category Filter Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-none">
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
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border shrink-0 flex items-center gap-2 ${
                    active
                      ? "bg-[#00AEEF] text-black border-[#00AEEF] shadow-glow"
                      : "bg-[#000d21] text-gray-300 border-[#0C66B4]/50 hover:border-[#00AEEF] hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    active ? "bg-black/20 text-black" : "bg-[#014489] text-[#00AEEF]"
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
          <div className="space-y-16">
            
            {/* Section 1: Purenta & TMD */}
            <section className="space-y-6 pt-4 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">1</span>
                    PURENTA &amp; TMD ({purentaVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Purentalihasten kireys, leukanivelen naksahdus, bruksismi ja kasvojen kiputilat.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("purenta-tmd")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
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
            <section className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">2</span>
                    ERGONOMIA ({ergonomiaVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Suun terveydenhuollon ja etätyön ergonomia, taukojumpat ja asennonhallinta.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("ergonomia")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
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
            <section className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-display text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center text-sm font-bold">3</span>
                    TULE-VAIVAT ({tuleVideos.length} videota)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Tulehdus, niska-hartiaseutu, selkäkivut, olkapään ahtaus, polvi ja lonkka.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory("tule-vaivat")}
                  className="text-xs text-[#00AEEF] hover:underline font-semibold self-start sm:self-auto"
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
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-3">
              <span>Näytetään {filteredVideos.length} videota</span>
              {(selectedCategory !== "kaikki" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="text-[#00AEEF] hover:underline font-semibold"
                >
                  Näytä kaikki 68 videota
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
              <div className="text-center py-16 bg-[#000d21] rounded-2xl border border-[#0C66B4]/30 space-y-3">
                <p className="text-gray-300 font-medium">Ei hakuehtoja vastaavia videoita.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("kaikki");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#00AEEF] text-black font-bold text-xs"
                >
                  Näytä kaikki 68 videota
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
