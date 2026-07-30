"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Play } from "lucide-react";
import Link from "next/link";

export default function SymptomQuiz() {
  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectSymptom = (val: string) => {
    setSymptom(val);
    setStep(2);
  };

  const handleSelectDuration = (val: string) => {
    setDuration(val);
    setSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSymptom(null);
    setDuration(null);
    setSubmitted(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#000a18] via-[#000d21] to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#000d21] border border-[#00AEEF]/40 p-8 md:p-12 shadow-glow space-y-8 relative">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-1">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00AEEF] shadow-[0_0_12px_rgba(0,174,239,0.6)] bg-white p-1">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain rounded-full" />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1 Minuutin Interaktiivinen Oiretesti</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              TESTAA OIREESI JA <span className="text-[#00AEEF]">LÖYDÄ TÄSMÄHARJOITTEET</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">
              Vastaa 2 nopeaan kysymykseen saadaksesi OMT-fysioterapeutin suositteleman kuntoutussuunnitelman.
            </p>
          </div>

          {/* Quiz Step 1: Symptom */}
          {!submitted && step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white text-center">
                1. Mikä oirealue haittaa eniten arkeasi?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "purenta-leuka", label: "Purentalihasten kireys & Leukanivelen naksumine (TMD)" },
                  { id: "niska-hartia", label: "Niska-hartiaseudun kireys & Jännityspäänsärky" },
                  { id: "selka-iskias", label: "Alaselkäkipu & Iskiasoireet" },
                  { id: "polvi-lonkka", label: "Polven tai lonkan jomotus / Nivelrikko" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSymptom(item.label)}
                    className="p-5 rounded-2xl bg-[#014489]/20 border border-[#0C66B4] text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 transition-all text-left flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#00AEEF] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Step 2: Duration */}
          {!submitted && step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white text-center">
                2. Kauanko oireet ovat vaivanneet sinua?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "akuutti", label: "Alle 2 viikkoa (Akuutti)" },
                  { id: "muutama-kk", label: "1 – 6 kuukautta" },
                  { id: "pitkittynyt", label: "Yli puoli vuotta (Pitkittynyt)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectDuration(item.label)}
                    className="p-5 rounded-2xl bg-[#014489]/20 border border-[#0C66B4] text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 transition-all text-center flex flex-col items-center justify-center gap-2 group"
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Result View */}
          {submitted && (
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="inline-flex items-center gap-2 text-[#00AEEF] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                <span>Testi suoritettu! Suosituksesi on valmis.</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#000a18] border border-[#00AEEF]/50 text-left space-y-4">
                <h4 className="text-xl font-bold text-white">
                  Suositeltu kuntoutuspolku: <span className="text-[#00AEEF]">{symptom}</span>
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Perustuen valitsemaasi oirealueeseen ({symptom}, kesto: {duration}), suosittelemme aloittamaan tutustumalla <strong>ilmaisiin opas-PDF-materiaaleihin</strong> sekä katsomalla täsmävideot aiheesta.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    href="/ilmaisopas"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
                  >
                    <span>Lataa Ilmaiset Oppaat</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/videot"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0C66B4]/30 border border-[#0C66B4] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Katso Ilmaiset Videot</span>
                  </Link>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Tee testi uudelleen</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
