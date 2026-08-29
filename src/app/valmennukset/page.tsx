import { PROGRAMS } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import { GraduationCap, ShieldCheck, HelpCircle } from "lucide-react";
import BeaconsWidget from "@/components/BeaconsWidget";

export default function ProgramsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000814] min-h-screen space-y-16 relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <GraduationCap className="w-4 h-4 text-[#67e8f9]" />
            <span>Verkkovalmennukset</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            STRUKTUROIDUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KOTIKUNTOUTUSOHJELMAT</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Kliiniseen kokemukseen ja tutkittuun tietoon pohjautuvat täsmäohjelmat vaivojen kotikuntoutukseen ovat parhaillaan valmisteilla. Tutustu tuleviin aiheisiin ja ota yhteyttä lisätietoja varten.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>

        {/* FAQ & Trust Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 space-y-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-md">
          <h2 className="text-2xl font-display font-bold text-white text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#67e8f9]" />
            <span>Usein kysytyt kysymykset</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
            <div className="space-y-2 p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50">
              <h3 className="font-bold text-white text-base">Kauan valmennuksen materiaalit ovat käytössäni?</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Saat materiaaleihin toistaiseksi voimassa olevan käyttöoikeuden, joten voit edetä täysin omaan tahtiisi.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50">
              <h3 className="font-bold text-white text-base">Miten maksaminen tapahtuu?</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Maksu suoritetaan turvallisesti suomalaisten verkkopankkien ja korttimaksujen kautta Paytrail-maksupalvelussa.
              </p>
            </div>
          </div>
        </div>

      </div>

      <BeaconsWidget />
    </div>
  );
}
