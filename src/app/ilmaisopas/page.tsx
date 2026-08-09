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
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen space-y-16">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
          <Video className="w-4 h-4 text-[#00AEEF]" />
          <span>Maksuttomat Kuntoutusvideot &amp; PDF-Oppaat</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide leading-tight">
          ILMAISET <span className="text-[#00AEEF]">KIPUOPPAAT &amp; ERIKOISVIDEOT</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Liity sähköpostilistalle ja saat VÄLITTÖMÄSTI pääsyn neljään erikoisvideo-opasteeseen sekä Janne Säkkisen suomenkieliseen Google Drive -kansioon.
        </p>
      </div>

      {/* Main Email Lead Capture Form with 4 Video Preview Cards */}
      <EmailLeadForm />

      {/* Trust & Drive Info Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 flex flex-col md:flex-row items-center gap-6 shadow-panel">
          <div className="w-14 h-14 rounded-2xl bg-[#014489]/30 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0">
            <FolderDown className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Google Drive -Kansion automaattinen päivitys</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Kun syötät nimesi ja sähköpostiosoitteesi yllä olevaan lomakkeeseen, saat heti suoran linkin Janne Säkkisen suomenkieliseen Google Drive -kansioon. Uudet oppaat (TMD, purentaelimistö, niska-hartiaseutu) tulevat suoraan kansioon näkyville heti kun ne julkaistaan.
            </p>
          </div>
        </div>
      </div>

      {/* Mitä oppaat sisältävät -osio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-display text-white uppercase tracking-wide">
            MITÄ KUNTOUTUSOPPAAT <span className="text-[#00AEEF]">SISÄLTÄVÄT</span>
          </h2>
          <p className="text-sm text-gray-300">
            OMT-Fysioterapeutti Janne Säkkisen kehittämät omatoimiset kuntoutusohjelmat ja liikekaaviot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-lg text-white">Purenta &amp; TMD -Oppaat</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Kuvalliset ohjeet purentalihasten omatoimiseen käsittelyyn, leukanivelen paineen kevennykseen, bruksismin hallintaan ja kielen lepoasennon linjaukseen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-lg text-white">Ergonomia &amp; Työhyvinvointi</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Työpisteen mittataulukot, näytön ja tuolin oikeat säädöt, suun terveydenhuollon asento-ohjeet sekä 30 sekunnin taukojumpparutiinit.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-lg text-white">Niska, Selkä &amp; Iskias -Ohjeet</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Rintarangan rotaatioharjoitteet, niskan syvien lihasten aktivointi, iskiashermon liukuharjoitteet ja fasetin vapautusliikkeet.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

