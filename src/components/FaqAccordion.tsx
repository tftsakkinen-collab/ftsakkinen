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
    <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Usein Kysyttyä</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            VASTAUKSET <span className="text-[#00AEEF]">COMMUNITYN KYSYMYKSIIN</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-base sm:text-lg text-white flex items-center justify-between gap-4 hover:text-[#00AEEF] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00AEEF] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-[#0C66B4]/20 pt-4">
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
