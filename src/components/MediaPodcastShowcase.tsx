"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Radio,
  Headphones,
  Play,
  ExternalLink,
  Sparkles,
  Youtube,
  Tv,
  Mic2,
  CheckCircle2,
  Share2,
  Volume2,
  Globe,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface MediaItem {
  id: string;
  title: string;
  type: "video" | "podcast";
  platform: "YouTube" | "Spotify" | "Apple Podcasts";
  duration: string;
  category: string;
  description: string;
  url: string;
  lang: "FI" | "EN";
  highlightBadge?: string;
}

const MEDIA_CHANNELS: MediaItem[] = [
  {
    id: "yt-ft-sakkinen",
    title: "FT Säkkinen — Purenta & Tuki- ja Liikuntaelimistö",
    type: "video",
    platform: "YouTube",
    duration: "120+ videota",
    category: "Purenta & TMD • OMT-Fysioterapia",
    description: "Suomen kattavin fysioterapeutin videokirjasto purentalihasten kireyksiin, leukanivelen naksumiseen ja rankaperäisiin vaivoihin.",
    url: "https://www.youtube.com/@ft_sakkinen",
    lang: "FI",
    highlightBadge: "Pääkanava (1,1M+ katselua)",
  },
  {
    id: "yt-pt-sakkinen",
    title: "PT Janne Sakkinen — International Channel",
    type: "video",
    platform: "YouTube",
    duration: "Global Hub",
    category: "TMJ Disorders & Evidence-Based Rehab",
    description: "English-language clinical physiotherapy tutorials, jaw biomechanics, and evidence-based exercise progressions.",
    url: "https://www.youtube.com/@pt_sakkinen",
    lang: "EN",
    highlightBadge: "International / English",
  },
  {
    id: "pod-spotify-tmd",
    title: "Purentaelimistön Kuntoutus & Kivunhallinta Podcast",
    type: "podcast",
    platform: "Spotify",
    duration: "Ääniraidat & Haastattelut",
    category: "Podcast & Audio • Kliininen Teoria",
    description: "Syventävät asiantuntijakeskustelut purentaelimistön toimintahäiriöistä, niskaperäisestä päänsärystä ja ergonomiasta.",
    url: "https://open.spotify.com",
    lang: "FI",
    highlightBadge: "Audio Streaming",
  },
  {
    id: "pod-apple-ergonomia",
    title: "Suun Terveydenhuollon Ergonomia & Työhyvinvointi",
    type: "podcast",
    platform: "Apple Podcasts",
    duration: "Oulun yliopisto & Luennot",
    category: "Ammattilaisaudio • Luennot",
    description: "Hammaslääkärien ja terveydenhuollon ammattilaisten fyysisen kuormituksen hallinta ja taukojumpparutiinit.",
    url: "https://podcasts.apple.com",
    lang: "FI",
    highlightBadge: "Apple Podcasts",
  },
];

export default function MediaPodcastShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "video" | "podcast">("all");

  const filteredMedia = MEDIA_CHANNELS.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <section className="py-20 bg-gradient-to-b from-[#000814] via-[#001026] to-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Lighting & Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#014489]/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Radio className="w-4 h-4 text-[#00AEEF] animate-pulse" />
              <span>Media &amp; Podcast Hub • Suomi &amp; Global</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              MEDIANÄKYVYYS, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-white">VIDEOT &amp; PODCASTIT</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Seuraa OMT-fysioterapeutti Janne Säkkisen opetusvideoita ja asiantuntija-audiota YouTubessa, Spotifyssa ja Apple Podcastsissa. Yli 1,1 miljoonaa katselukertaa ja 120+ kliinistä opasjaksoa.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#00122e] border border-[#0C66B4]/60 self-start lg:self-auto backdrop-blur-md">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] shadow-[0_0_15px_rgba(0,174,239,0.4)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Kaikki Kanavat
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] shadow-[0_0_15px_rgba(0,174,239,0.4)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </button>
            <button
              onClick={() => setActiveTab("podcast")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "podcast"
                  ? "bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] shadow-[0_0_15px_rgba(0,174,239,0.4)]"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Podcastit &amp; Audio</span>
            </button>
          </div>
        </div>

        {/* Media Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMedia.map((item) => {
            const isVideo = item.type === "video";
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xl shadow-cyan-950/30 backdrop-blur-md hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Bar with Platform & Badges */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-xl border flex items-center justify-center ${
                          isVideo
                            ? "bg-red-500/20 border-red-500/30 text-red-400"
                            : "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                        }`}
                      >
                        {isVideo ? <Youtube className="w-5 h-5" /> : <Mic2 className="w-5 h-5" />}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        {item.platform}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.highlightBadge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#014489]/50 border border-[#00AEEF]/40 text-[#00AEEF]">
                          {item.highlightBadge}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                        {item.lang}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#00AEEF] uppercase tracking-wider font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-[#0C66B4]/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.duration}</span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,174,239,0.3)] cursor-pointer"
                  >
                    <span>{isVideo ? "Avaa YouTube-kanava" : "Kuuntele jaksot"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Multi-Brand Relation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#000814] border-2 border-[#00AEEF]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-display font-extrabold text-white">
                Kaksikielinen Digitaalinen Alusta: FT Säkkinen &amp; PT Sakkinen
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Suomenkielinen OMT-vastaanotto Oulussa ja kansainvälinen englanninkielinen TMJ-brändi <span className="text-[#00AEEF] font-semibold">ptsakkinen.com</span>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#00122e] border border-[#0C66B4] text-white hover:border-[#00AEEF] font-bold text-xs transition-all flex items-center gap-2 group"
            >
              <span>Visit ptsakkinen.com (EN)</span>
              <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
