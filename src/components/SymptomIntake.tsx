"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Lock, FileText, Calendar, CheckCircle2, ShieldCheck, Download, Activity } from "lucide-react";

interface SymptomOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  recommendedVideoId: string;
  videoTitle: string;
}

const SYMPTOMS: SymptomOption[] = [
  {
    id: "purenta-leuka",
    icon: "🦷",
    title: "Leukanivel & Purentaelimistö (TMD)",
    description: "Leuan naksuminen, bruksismi, hampaiden yhteenpureminen tai kipu syödessä.",
    recommendedVideoId: "Nnf2NUdnC7M",
    videoTitle: "Näin hoidat leuan kipua oikein (älä tee tätä virhettä!)",
  },
  {
    id: "niska-päänsärky",
    icon: "🧘",
    title: "Yläniska & Jännityspäänsärky",
    description: "Niskan kireys, ohimokipu, vannemainen särky tai yläniskan liikerajoitus.",
    recommendedVideoId: "JyducxjS1b8",
    videoTitle: "Yläniskan Venyttely & Liikkuvuusohje",
  },
  {
    id: "hermosto-uni",
    icon: "🌿",
    title: "Hermoston Rauhoittaminen & Uni",
    description: "Kehon ylikierrokset, jatkuva jännitys, pinnallinen hengitys ja palautumishaasteet.",
    recommendedVideoId: "ZFTSdUdEkC0",
    videoTitle: "Parasympaattisen Hermoston Aktivoiminen",
  },
  {
    id: "vammat-kuntoutus",
    icon: "🏋️",
    title: "Vaikeat Vammat & Kuntoutus",
    description: "Pitkittynyt tuki- ja liikuntaelimistön vaiva, akuutti vamma tai leikkauksen jälkitila.",
    recommendedVideoId: "exfFQ0iRLiI",
    videoTitle: "Vaikean Vamman Tutkiminen ja Hoito",
  }
];

export default function SymptomIntake() {
  const [selectedId, setSelectedId] = useState<string>("purenta-leuka");

  const activeOption = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];

  const scrollToEmailForm = () => {
    const el = document.getElementById("ilmaisopas-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Älykäs Oirekartoitus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            VALITSE OIREESI – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">SAAT TÄSMÄOHJEET HETI</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Klikkaa oirealueesi alta nähdäksesi OMT-fysioterapeutin suositteleman erikoisvideo-oppaan ja kuntoutusmateriaalit.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SYMPTOMS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? "bg-[#001433] border-[#00AEEF] shadow-[0_0_25px_rgba(0,174,239,0.3)] ring-1 ring-[#00AEEF]"
                    : "bg-[#000e24] border-[#0C66B4]/40 hover:border-[#00AEEF]/60 hover:bg-[#00122e]"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00AEEF]/30 to-transparent pointer-events-none" />
                )}
                
                <div className="space-y-2.5">
                  <div className="text-3xl filter drop-shadow">{item.icon}</div>
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#67e8f9] transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-bold text-[#67e8f9]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    {isSelected ? "Valittu oire" : "Katso täsmäohjeet"}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "translate-x-1" : "group-hover:translate-x-1"}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommended Result Display with Gated / Locked Email Form Trigger */}
        <div className="rounded-3xl bg-gradient-to-b from-[#001433] to-[#000a18] border-2 border-[#00AEEF]/50 p-6 md:p-8 space-y-6 shadow-2xl shadow-cyan-950/40 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#0C66B4]/30 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#67e8f9] uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#67e8f9]" />
                <span>Suositeltu Fysioterapiaopas</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{activeOption.videoTitle}</h3>
            </div>
            <a
              href="/yhteystiedot"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs uppercase tracking-wider hover:from-white hover:to-slate-100 transition-all duration-300 shadow-glow-sm shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Varaa Aika Vastaanotolle</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Video Thumbnail (Gated / Locked Overlay) */}
            <div
              onClick={scrollToEmailForm}
              className="relative rounded-2xl overflow-hidden border-2 border-[#00AEEF]/60 group cursor-pointer shadow-xl"
            >
              <img
                src={`https://i2.ytimg.com/vi/${activeOption.recommendedVideoId}/hqdefault.jpg`}
                alt={activeOption.videoTitle}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500 filter blur-[1px] brightness-75"
              />
              <div className="absolute inset-0 bg-slate-950/70 flex flex-col items-center justify-center p-4 text-center space-y-2.5 group-hover:bg-slate-950/60 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#00AEEF] text-[#000a18] flex items-center justify-center shadow-[0_0_25px_rgba(0,174,239,0.8)] group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-[#000a18]" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-[#000e24]/90 border border-[#00AEEF]/60">
                  🔒 Pääsy vaatii sähköpostilistalle liittymisen
                </span>
                <p className="text-[11px] text-slate-200 max-w-xs leading-relaxed">
                  Liity sähköpostilistalle avataksesi tämän opasvideon ja ladattavat PDF-kuntoutusohjeet välittömästi!
                </p>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Tämä OMT-fysioterapeutti Janne Säkkisen laatima erikoisopas ja ladattava PDF-kuntoutusmateriaali on saatavilla maksutta sähköpostilistalaisille.
              </p>

              <div className="space-y-3">
                <button
                  onClick={scrollToEmailForm}
                  className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] hover:from-white hover:to-slate-100 text-[#000a18] font-bold text-sm shadow-[0_0_20px_rgba(0,174,239,0.5)] transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-[#000a18]" />
                    <span>Liity sähköpostilistalle &amp; Avaa opasvideot + PDF:ät</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#000a18] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100 % Maksuton • Ei roskapostia • Saat videolinkit heti sähköpostiisi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
