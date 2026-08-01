import { PROGRAMS } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import { GraduationCap, ShieldCheck, HelpCircle } from "lucide-react";
import BeaconsWidget from "@/components/BeaconsWidget";

export default function ProgramsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Verkkovalmennukset</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            STRUKTUROIDUT <span className="text-[#00AEEF]">KOTIKUNTOUTUSOHJELMAT</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
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
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/40 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#00AEEF]" />
            Usein kysytyt kysymykset
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-2 p-4 rounded-xl bg-[#014489]/20 border border-[#0C66B4]/30">
              <h3 className="font-bold text-white">Kauan valmennuksen materiaalit ovat käytössäni?</h3>
              <p className="text-xs leading-relaxed">
                Saat materiaaleihin toistaiseksi voimassa olevan käyttöoikeuden, joten voit edetä täysin omaan tahtiisi.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-[#014489]/20 border border-[#0C66B4]/30">
              <h3 className="font-bold text-white">Miten maksaminen tapahtuu?</h3>
              <p className="text-xs leading-relaxed">
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
