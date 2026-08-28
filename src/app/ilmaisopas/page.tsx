import EmailLeadForm from "@/components/EmailLeadForm";
import { BookOpen, ShieldCheck, Sparkles, FolderDown, Video } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ilmaiset Kipuoppaat & Kuntoutusmateriaalit | FT Säkkinen",
  description: "Lataa ilmaiset fysioterapian ja leukanivelkuntoutuksen PDF-oppaat sekä opetusvideot suoraan Janne Säkkisen Google Drive -kansiosta.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/ilmaisopas",
    languages: {
      "fi": "https://www.ftsakkinen.com/ilmaisopas",
      "en": "https://www.ptsakkinen.com/free-guide",
      "x-default": "https://www.ftsakkinen.com/ilmaisopas",
    },
  },
  openGraph: {
    title: "Ilmaiset Kipuoppaat & Kuntoutusmateriaalit | FT Säkkinen",
    description: "Lataa ilmaiset fysioterapian ja leukanivelkuntoutuksen PDF-oppaat sekä opetusvideot suoraan Janne Säkkisen Google Drive -kansiosta.",
    url: "https://www.ftsakkinen.com/ilmaisopas",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilmaiset Kipuoppaat & Kuntoutusmateriaalit | FT Säkkinen",
    description: "Lataa ilmaiset fysioterapian ja leukanivelkuntoutuksen PDF-oppaat sekä opetusvideot suoraan Janne Säkkisen Google Drive -kansiosta.",
    images: ["https://www.ftsakkinen.com/logo-whitebg.png"],
  },
};

export default function FreeGuidePage() {
  return (
    <div className="py-12 md:py-20 bg-[#000814] min-h-screen space-y-16 relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <Video className="w-4 h-4 text-[#00AEEF]" />
          <span>Maksuttomat Kuntoutusvideot &amp; PDF-Oppaat</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          ILMAISET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KIPUOPPAAT &amp; ERIKOISVIDEOT</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Liity sähköpostilistalle ja saat VÄLITTÖMÄSTI pääsyn neljään erikoisvideo-opasteeseen sekä Janne Säkkisen suomenkieliseen Google Drive -kansioon.
        </p>
      </div>

      {/* Main Email Lead Capture Form with 4 Video Preview Cards */}
      <EmailLeadForm />

      {/* Trust & Drive Info Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 flex flex-col md:flex-row items-center gap-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-md">
          <div className="w-14 h-14 rounded-2xl bg-[#014489]/30 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0 shadow-sm">
            <FolderDown className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Google Drive -Kansion automaattinen päivitys</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Kun syötät nimesi ja sähköpostiosoitteesi yllä olevaan lomakkeeseen, saat heti suoran linkin Janne Säkkisen suomenkieliseen Google Drive -kansioon. Uudet oppaat (TMD, purentaelimistö, niska-hartiaseutu) tulevat suoraan kansioon näkyville heti kun ne julkaistaan.
            </p>
          </div>
        </div>
      </div>

      {/* Mitä oppaat sisältävät -osio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            MITÄ KUNTOUTUSOPPAAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">SISÄLTÄVÄT</span>
          </h2>
          <p className="text-sm text-slate-300 font-normal">
            OMT-Fysioterapeutti Janne Säkkisen kehittämät omatoimiset kuntoutusohjelmat ja liikekaaviot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-lg text-white">Purenta &amp; TMD -Oppaat</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Kuvalliset ohjeet purentalihasten omatoimiseen käsittelyyn, leukanivelen paineen kevennykseen, bruksismin hallintaan ja kielen lepoasennon linjaukseen.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-lg text-white">Ergonomia &amp; Työhyvinvointi</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Työpisteen mittataulukot, näytön ja tuolin oikeat säädöt, suun terveydenhuollon asento-ohjeet sekä 30 sekunnin taukojumpparutiinit.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-lg text-white">Niska, Selkä &amp; Iskias -Ohjeet</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Rintarangan rotaatioharjoitteet, niskan syvien lihasten aktivointi, iskiashermon liukuharjoitteet ja fasetin vapautusliikkeet.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

