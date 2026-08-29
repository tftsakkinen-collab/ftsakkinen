"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Sopiiko harjoittelu akuuttiin vai pitkittyneeseen kipuun?",
      a: "Harjoitteet on suunniteltu turvallisiksi sekä äkillisissä vaivoissa (kuten akuutti selkäkipu tai niska-naksahdus) että pitkittyneissä oireissa. Jokaisessa valmennuksessa ja videossa neuvotaan aina turvallinen aloitustaso.",
    },
    {
      q: "Tarvitaanko valmennuksessa erikoisvälineitä?",
      a: "Ei tarvita. Lähes kaikki harjoitteet tehdään oman kehon painolla tai yksinkertaisilla kotoa löytyvillä välineillä (kuten pyyhe tai keppi).",
    },
    {
      q: "Miten maksaminen tapahtuu ja onko se turvallista?",
      a: "Maksut käsitellään kotimaisen Paytrail-maksupalvelun kautta. Voit maksaa kaikilla suomalaisilla verkkopankeilla, luottokorteilla tai osamaksulla täysin turvatussa yhteydessä.",
    },
    {
      q: "Kauan materiaalit ovat käytössäni valmennuksen ostamisen jälkeen?",
      a: "Saat materiaaleihin toistaiseksi voimassa olevan käyttöoikeuden. Voit palata harjoitusvideoihin ja oppaisiin aina kun tarvitset kertausta.",
    },
  ];

  return (
    <section className="py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-[#67e8f9]" />
            <span>Usein Kysyttyä</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            VASTAUKSET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KYSYMYKSIIN</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "bg-[#00122e] border-2 border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40"
                    : "bg-[#00122e]/80 border border-[#0C66B4]/50 hover:border-[#00AEEF]/40"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left font-display font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-[#67e8f9] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`p-2 rounded-xl transition-colors shrink-0 ${isOpen ? "bg-[#00AEEF]/20 text-[#67e8f9]" : "text-slate-400"}`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#67e8f9]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-slate-300 leading-relaxed border-t border-[#0C66B4]/30 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
