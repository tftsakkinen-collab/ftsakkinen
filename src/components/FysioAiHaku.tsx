"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, Play, Bot, ArrowRight } from "lucide-react";
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
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#00122e] via-[#00183c] to-[#00122e] border-2 border-[#00AEEF]/50 shadow-2xl shadow-cyan-950/30 space-y-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0 border border-[#00AEEF]/30 shadow-sm">
          <Bot className="w-6 h-6 text-[#00AEEF]" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fysio-AI Hakubotti</span>
          </div>
          <h3 className="text-lg sm:text-xl font-display font-extrabold text-white">Etsi Jannen Videokirjastosta</h3>
        </div>
      </div>

      <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="esim. Miten helpottaa leukakipua iltaisin?"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_15px_rgba(0,174,239,0.4)] shrink-0 cursor-pointer"
        >
          Hae
        </button>
      </form>

      {searched && (
        <div className="space-y-3 pt-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {results.length > 0 ? "Löytyneet opetusvideot:" : "Suositellut videot:"}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((vid) => (
              <Link
                key={vid.id}
                href={`/videot/${vid.id}`}
                className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all flex items-start gap-3 group shadow-sm hover:-translate-y-0.5"
              >
                <div className="p-2 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-[#000814] transition-colors shrink-0 mt-0.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                    {vid.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-normal leading-relaxed">
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
