"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  Play,
  ShoppingBag,
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export interface SymptomTopic {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  recommendedVideos: {
    id: string;
    title: string;
  }[];
  recommendedGear: {
    name: string;
    url: string;
    note: string;
  }[];
  pdfGuide: string;
}

const SYMPTOM_DATA: SymptomTopic[] = [
  {
    id: "tmj-jaw",
    name: "Leukakipu & Purenta",
    iconName: "😬",
    summary: "Hampaiden narskuttelu, leuan naksuminen, purentalihasten kireys tai leukanivelen kivut.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Purentalihasten ja Leukanivelen Hoidon Ohjeet" },
      { id: "D9g_8OtqRk8", title: "Leuan Naksuminen ja Kolmoishermon Rauhoittaminen" },
    ],
    recommendedGear: [
      { name: "Mutjutin Purentalihas- ja Kalvohierontaväline", url: "/kamat", note: "Fysioterapeutin suosittelema väline leukalihasten omatoimiseen käsittelyyn" },
      { name: "FaceImage Kasvokinesioteippi", url: "/kamat", note: "Hellävarainen teippi kolmoishermon ja leukanivelen alueelle" },
    ],
    pdfGuide: "Purentaelimistön & Leukakivun Omahoito-opas PDF",
  },
  {
    id: "neck-headache",
    name: "Niskakipu & Päänsärky",
    iconName: "🧠",
    summary: "Niskan jäykkyys, jännityspäänsärky, takaraivon jännitys ja huimausoireet.",
    recommendedVideos: [
      { id: "t8iCnAUr4pU", title: "Niskakivun ja Jännityspäänsäryn Tehohoito" },
      { id: "0MKwbFkXQ2w", title: "Yläniskan Rentoarvio ja Nikamaliikkuvuus" },
    ],
    recommendedGear: [
      { name: "Niskan Venytystyyny / Cervical Traction", url: "/kamat", note: "Lievittää painetta yläniskassa ja avaa rintarankaa" },
      { name: "Piikkimatto & Niskatyyny Set", url: "/kamat", note: "Laukaisee takaraivolihasten kroonista kireyttä" },
    ],
    pdfGuide: "Niskan & Jännityspäänsäryn Koti-opas PDF",
  },
  {
    id: "pelvic-floor",
    name: "Lantionpohja & Virtsankarkailu",
    iconName: "🌸",
    summary: "Lantionpohjan ylijännitys, virtsankarkailu hyppiessä/juostessa ja kegel-virheet.",
    recommendedVideos: [
      { id: "8H_k0lrebJ0", title: "Fysioterapeutti: puristelu (kegelit) voi pahentaa virtsankarkailua" },
    ],
    recommendedGear: [
      { name: "Lantionpohjan Biopalaute & Harjoitusväline", url: "/kamat", note: "Fysioterapeutin suosittelema väline hallittuun jännitykseen ja rentoutukseen" },
    ],
    pdfGuide: "Lantionpohjan & Virtsankarkailun Omahoito-opas PDF",
  },
  {
    id: "tennis-elbow",
    name: "Tennis- & Golfkyynärpää",
    iconName: "💪",
    summary: "Kyynärvarren ulko- tai sisäsyrjän rasituskipu, puristusvoiman heikkous ja jännealueen kipu.",
    recommendedVideos: [
      { id: "0MKwbFkXQ2w", title: "Tenniskyynärpään Eksentrinen Vahvistus" },
      { id: "TqVWQND9g64", title: "Kyynärvarren Kalvovapautus ja Venytys" },
    ],
    recommendedGear: [
      { name: "TheraBand FlexBar Kyynärpää-väännin", url: "/kamat", note: "Kliinisesti tutkittu väline jännevammojen omahoitoon" },
      { name: "Kyynärpään Kompressiotuki", url: "/kamat", note: "Keventää kuormitusta jännekiinnityskohdassa" },
    ],
    pdfGuide: "Tenniskyynärpään Harjoitteluohje PDF",
  },
  {
    id: "plantar-fasciitis",
    name: "Jalkapohja & Kantapää",
    iconName: "🦶",
    summary: "Plantaarifaskiitti, aamujäykkyys kantapäässä ja jalkapohjan kalvojänteen kipu.",
    recommendedVideos: [
      { id: "Qh8uK23HSAQ", title: "Plantaarifaskiitin Omahoito ja Venytykset" },
      { id: "D9g_8OtqRk8", title: "Pohkeen ja Jalkapohjan Mobilisointi" },
    ],
    recommendedGear: [
      { name: "Triggerpoint Hierontapallo Jalkapohjalle", url: "/kamat", note: "Syväkudoshieronta kantakalvon kireyksiin" },
      { name: "Plantaarifaskiitti Yölasta", url: "/kamat", note: "Pitävää lepoasentoa ylläpitävä tuki" },
    ],
    pdfGuide: "Plantaarifaskiitin Kuntoutusohje PDF",
  },
  {
    id: "back-sciatica",
    name: "Alaselkä & Iskias",
    iconName: "🧘",
    summary: "Alaselän jännitys, iskiassärky pakarassa tai reidessä ja lanneselän jäykkyys.",
    recommendedVideos: [
      { id: "t8iCnAUr4pU", title: "Alaselkäkivun ja Iskiasoireen Helpotus" },
      { id: "TqVWQND9g64", title: "Lannerangan Mobilisointi ja Syvä Tuki" },
    ],
    recommendedGear: [
      { name: "Rullattava Putkirulla / Foam Roller", url: "/kamat", note: "Lantioseudun ja pakaran lihaskalvojen avaamiseen" },
      { name: "Lanneselän Kompressiotuki", url: "/kamat", note: "Antaa tukea arkiaskareissa ja nostoissa" },
    ],
    pdfGuide: "Alaselän & Iskiaksen Koti-opas PDF",
  },
];

export default function OireNavigaattori() {
  const [selectedId, setSelectedId] = useState<string>("tmj-jaw");
  const activeSymptom = SYMPTOM_DATA.find((s) => s.id === selectedId) || SYMPTOM_DATA[0];

  return (
    <div className="py-12 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-y border-[#0C66B4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4 text-[#00AEEF]" />
            <span>Interaktiivinen Kuntoutusapu</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide">
            LÖYDÄ OMAT <span className="text-[#00AEEF]">KUNTOUTUSOHJEET</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Valitse oirealueesi alta nähdäksesi Janne Säkkisen suosittelemat täsmävideot, sopivat apuvälineet ja ilmaiset hoito-oppaat.
          </p>
        </div>

        {/* Symptom Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SYMPTOM_DATA.map((sym) => {
            const isActive = sym.id === selectedId;
            return (
              <button
                key={sym.id}
                onClick={() => setSelectedId(sym.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between gap-3 ${
                  isActive
                    ? "bg-[#014489]/40 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.3)] scale-[1.02]"
                    : "bg-[#000d21] border-[#0C66B4]/30 hover:border-[#00AEEF]/50 text-gray-300"
                }`}
              >
                <div className="text-2xl">{sym.iconName}</div>
                <div className="font-bold text-sm text-white">{sym.name}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Content Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#000d21] to-[#00050f] border border-[#00AEEF]/40 shadow-glow grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Summary & PDF Download */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider h-6">
                <Activity className="w-4 h-4 text-[#00AEEF]" />
                <span>Oirealueen Kuvaus</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeSymptom.iconName}</span>
                <h3 className="text-2xl font-bold text-white">{activeSymptom.name}</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeSymptom.summary}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#014489]/20 border border-[#00AEEF]/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                <Download className="w-4 h-4" />
                <span>Ilmainen Kuntoutusopas</span>
              </div>
              <p className="text-xs text-gray-200 font-semibold">{activeSymptom.pdfGuide}</p>
              <Link
                href="/ilmaisopas"
                className="w-full py-2.5 px-4 rounded-xl bg-[#00AEEF] text-black font-bold text-xs hover:bg-[#33C2F5] transition-all flex items-center justify-center gap-2 shadow-glow"
              >
                <span>Lataa PDF-Opas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Clinical Video Recommendations */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider h-6">
                <Play className="w-4 h-4" />
                <span>Suositellut Opetusvideot</span>
              </div>

              <div className="space-y-3">
                {activeSymptom.recommendedVideos.map((vid) => (
                  <Link
                    key={vid.id}
                    href={`/videot/${vid.id}`}
                    className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF] hover:bg-[#000d21] transition-all flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00AEEF] group-hover:text-black transition-all">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug">
                        {vid.title}
                      </h4>
                      <span className="text-[10px] text-gray-400">Katso harjoitusohjeet →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 3: Recommended Rehab Tools */}
          <div className="space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider h-6">
                <ShoppingBag className="w-4 h-4" />
                <span>Suositellut Apuvälineet</span>
              </div>

              <div className="space-y-3">
                {activeSymptom.recommendedGear.map((gear, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#000814] border border-[#0C66B4]/40 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{gear.name}</span>
                      <Link
                        href={gear.url}
                        className="text-[11px] text-[#00AEEF] font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Tutustu</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-[11px] text-gray-400 italic leading-tight">
                      "{gear.note}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
