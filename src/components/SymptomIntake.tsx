"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Lock, FileText, Calendar, CheckCircle2, ShieldCheck, Download } from "lucide-react";

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
    recommendedVideoId: "P1lZdpluD64",
    videoTitle: "Leukanivelen Ensiapuopas & Kuntoutus",
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
    <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Älykäs Oirekartoitus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
            VALITSE OIREESI – <span className="text-[#00AEEF]">SAAT TÄSMÄOHJEET HETI</span>
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
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
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-4 cursor-pointer ${
                  isSelected
                    ? "bg-[#00AEEF]/10 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.3)]"
                    : "bg-[#000a18] border-[#0C66B4]/50 hover:border-[#00AEEF]/50"
                }`}
              >
                <div className="space-y-2">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF]">
                  <span>{isSelected ? "Valittu" : "Katso opas"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommended Result Display with Gated / Locked Email Form Trigger */}
        <div className="rounded-3xl bg-[#000a18] border border-[#00AEEF]/40 p-6 md:p-8 space-y-6 shadow-glow">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#0C66B4]/30 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                <span>Suositeltu Fysioterapiaopas</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{activeOption.videoTitle}</h3>
            </div>
            <a
              href="/yhteystiedot"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#33C2F5] transition-all shadow-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>Varaa Aika Vastaanotolle</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Video Thumbnail (Gated / Locked Overlay) */}
            <div
              onClick={scrollToEmailForm}
              className="relative rounded-2xl overflow-hidden border border-[#00AEEF]/60 group cursor-pointer shadow-panel"
            >
              <img
                src={`https://i2.ytimg.com/vi/${activeOption.recommendedVideoId}/hqdefault.jpg`}
                alt={activeOption.videoTitle}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300 filter blur-[1px] brightness-75"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-center space-y-2 group-hover:bg-black/50 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#00AEEF] text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,174,239,0.8)] group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <span className="text-xs font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-[#000a18]/90 border border-[#00AEEF]/50">
                  🔒 Pääsy vaatii sähköpostilistalle liittymisen
                </span>
                <p className="text-[11px] text-gray-300 max-w-xs">
                  Liity sähköpostilistalle avataksesi tämän opasvideon ja ladattavat PDF-kuntoutusohjeet välittömästi!
                </p>
              </div>
            </div>

            {/* Content & Action Buttons */}
            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Tämä OMT-fysioterapeutti Janne Säkkisen laatima erikoisopas ja ladattava PDF-kuntoutusmateriaali on saatavilla maksutta sähköpostilistalaisille.
              </p>

              <div className="space-y-3">
                <button
                  onClick={scrollToEmailForm}
                  className="w-full py-4 px-5 rounded-xl bg-[#00AEEF] hover:bg-[#33C2F5] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,174,239,0.5)] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-black" />
                    <span>Liity sähköpostilistalle &amp; Avaa opasvideot + PDF:ät</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
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
