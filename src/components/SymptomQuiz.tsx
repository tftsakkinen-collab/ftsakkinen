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
    <section className="py-20 bg-gradient-to-b from-[#000814] via-[#001026] to-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#00122e] border-2 border-[#00AEEF]/50 p-8 md:p-12 shadow-2xl shadow-cyan-950/40 space-y-8 relative backdrop-blur-md">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-1">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#00AEEF] shadow-[0_0_15px_rgba(0,174,239,0.5)] bg-[#000814] p-1.5">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain rounded-xl" />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>1 Minuutin Interaktiivinen Oiretesti</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              TESTAA OIREESI JA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">LÖYDÄ TÄSMÄHARJOITTEET</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Vastaa 2 nopeaan kysymykseen saadaksesi OMT-fysioterapeutin suositteleman kuntoutussuunnitelman.
            </p>
          </div>

          {/* Quiz Step 1: Symptom */}
          {!submitted && step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-white text-center">
                1. Mikä oirealue haittaa eniten arkeasi?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "purenta-leuka", label: "Purentalihasten kireys & Leukanivelen naksuminen (TMD)" },
                  { id: "niska-hartia", label: "Niska-hartiaseudun kireys & Jännityspäänsärky" },
                  { id: "selka-iskias", label: "Alaselkäkipu & Iskiasoireet" },
                  { id: "polvi-lonkka", label: "Polven tai lonkan jomotus / Nivelrikko" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSymptom(item.label)}
                    className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/60 text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#014489]/20 transition-all text-left flex items-center justify-between group cursor-pointer shadow-sm hover:-translate-y-0.5"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#67e8f9] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Step 2: Duration */}
          {!submitted && step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-white text-center">
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
                    className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/60 text-white font-semibold text-sm hover:border-[#00AEEF] hover:bg-[#014489]/20 transition-all text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-sm hover:-translate-y-0.5"
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
              <div className="inline-flex items-center gap-2 text-[#67e8f9] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Testi suoritettu! Suosituksesi on valmis.</span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#000814] border border-[#00AEEF]/50 text-left space-y-4 shadow-xl">
                <h4 className="text-xl font-display font-bold text-white">
                  Suositeltu kuntoutuspolku: <span className="text-[#67e8f9]">{symptom}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Perustuen valitsemaasi oirealueeseen ({symptom}, kesto: {duration}), suosittelemme aloittamaan tutustumalla <strong className="text-white">ilmaisiin opas-PDF-materiaaleihin</strong> sekä katsomalla täsmävideot aiheesta.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    href="/ilmaisopas"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2"
                  >
                    <span>Lataa Ilmaiset Oppaat</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/videot"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#014489]/30 border border-[#00AEEF]/50 text-[#67e8f9] font-bold text-sm hover:bg-[#00AEEF] hover:text-[#000a18] transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Katso Ilmaiset Videot</span>
                  </Link>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#67e8f9] transition-colors cursor-pointer"
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
