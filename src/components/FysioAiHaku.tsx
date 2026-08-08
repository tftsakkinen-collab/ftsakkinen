"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, Play, Bot } from "lucide-react";
import { FALLBACK_VIDEOS } from "@/data/videos";

export default function FysioAiHaku() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof FALLBACK_VIDEOS>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase();
    const matched = FALLBACK_VIDEOS.filter((v) => {
      const title = v.title.toLowerCase();
      const desc = v.promiseDescription.toLowerCase();
      const transcript = (v.transcript || "").toLowerCase();
      return title.includes(q) || desc.includes(q) || transcript.includes(q);
    });

    setResults(matched.length > 0 ? matched : FALLBACK_VIDEOS.slice(0, 3));
    setSearched(true);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fysio-AI Hakubotti</span>
          </div>
          <h3 className="text-xl font-bold text-white">Etsi Jannen Videokirjastosta</h3>
        </div>
      </div>

      <form onSubmit={handleSearch} className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="esim. Miten helpottaa leukakipua iltaisin?"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#000814] border border-[#0C66B4]/50 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-[0_0_15px_rgba(0,174,239,0.4)] shrink-0"
        >
          Hae
        </button>
      </form>

      {searched && (
        <div className="space-y-3 pt-2">
          <span className="text-xs font-semibold text-gray-400">
            {results.length > 0 ? "Löytyneet opetusvideot:" : "Suositellut videot:"}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((vid) => (
              <Link
                key={vid.id}
                href={`/videot/${vid.id}`}
                className="p-4 rounded-xl bg-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF] transition-all flex items-start gap-3 group"
              >
                <Play className="w-4 h-4 text-[#00AEEF] shrink-0 mt-1 fill-current group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 line-clamp-2 mt-1">
                    {vid.promiseDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
