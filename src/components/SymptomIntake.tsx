"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Play, FileText, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface SymptomOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  recommendedVideoId: string;
  videoTitle: string;
  drivePdfLink: string;
  bookingUrl: string;
}

const SYMPTOMS: SymptomOption[] = [
  {
    id: "purenta-leuka",
    icon: "🦷",
    title: "Leukanivel & Purentaelimistö (TMD)",
    description: "Leuan naksumine, bruksismi, hampaiden yhteenpureminen tai kipu syödessä.",
    recommendedVideoId: "P1lZdpluD64",
    videoTitle: "Leukanivelen Ensiapuopas & Kuntoutus",
    drivePdfLink: "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing",
    bookingUrl: "https://www.ftsakkinen.com"
  },
  {
    id: "niska-päänsärky",
    icon: "🧘",
    title: "Yläniska & Jännityspäänsärky",
    description: "Niskan kireys, ohimokipu, vannemainen särky tai yläniskan liikerajoitus.",
    recommendedVideoId: "JyducxjS1b8",
    videoTitle: "Yläniskan Venyttely & Liikkuvuusohje",
    drivePdfLink: "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing",
    bookingUrl: "https://www.ftsakkinen.com"
  },
  {
    id: "hermosto-uni",
    icon: "🌿",
    title: "Hermoston Rauhoittaminen & Uni",
    description: "Kehon ylikierrokset, jatkuva jännitys, pinnallinen hengitys ja palautumishaasteet.",
    recommendedVideoId: "ZFTSdUdEkC0",
    videoTitle: "Parasympaattisen Hermoston Aktivoiminen",
    drivePdfLink: "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing",
    bookingUrl: "https://www.ftsakkinen.com"
  },
  {
    id: "vammat-kuntoutus",
    icon: "🏋️",
    title: "Vaikeat Vammat & Kuntoutus",
    description: "Pitkittynyt tuki- ja liikuntaelimistön vaiva, akuutti vamma tai leikkauksen jälkitila.",
    recommendedVideoId: "exfFQ0iRLiI",
    videoTitle: "Vaikean Vamman Tutkiminen ja Hoito",
    drivePdfLink: "https://drive.google.com/drive/folders/162_8pH138FX1KLJjpIZRYqabWjL-Dnlr?usp=sharing",
    bookingUrl: "https://www.ftsakkinen.com"
  }
];

export default function SymptomIntake() {
  const [selectedId, setSelectedId] = useState<string>("purenta-leuka");

  const activeOption = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];

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
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-4 ${
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

        {/* Recommended Result Display */}
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
              href={activeOption.bookingUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#33C2F5] transition-all shadow-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>Varaa Aika Vastaanotolle</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden border border-[#0C66B4] group">
              <img
                src={`https://i2.ytimg.com/vi/${activeOption.recommendedVideoId}/hqdefault.jpg`}
                alt={activeOption.videoTitle}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a
                href={`https://www.youtube.com/watch?v=${activeOption.recommendedVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#00AEEF] text-black flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </a>
            </div>

            {/* Content & Actions */}
            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Tämä OMT-fysioterapeutti Janne Säkkisen laatima opas sisältää kliiniset kotiharjoitteet ja selkeät vaiheittaiset ohjeet vaivasi kotihoitoon.
              </p>

              <div className="space-y-2">
                <a
                  href={`https://www.youtube.com/watch?v=${activeOption.recommendedVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white hover:border-[#00AEEF] transition-all group"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <Play className="w-4 h-4 text-[#00AEEF]" />
                    <span>Katso video YouTubessa</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={activeOption.drivePdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white hover:border-[#00AEEF] transition-all group"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <FileText className="w-4 h-4 text-[#00AEEF]" />
                    <span>Lataa PDF-kuntoutusopas (Google Drive)</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
