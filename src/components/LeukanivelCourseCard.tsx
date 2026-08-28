"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, FileText, Video, Sparkles, ArrowRight, Loader2, CreditCard } from "lucide-react";

export default function LeukanivelCourseCard() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "leukanivel-kurssi" }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.demoMode) {
          setErrorMsg("Stripe API-avainta ei ole vielä lisätty .env.local -tiedostoon. Lisää Stripe-avaimesi aktivoidaksesi maksut.");
        } else {
          setErrorMsg(data.error || "Tapahtui virhe siirryttäessä maksutapahtumaan.");
        }
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        setErrorMsg("Maksusivun osoitetta ei saatu luotua.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Verkkovirhe maksutapahtuman alustuksessa.");
      setLoading(false);
    }
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#00122e] to-[#000a18] border-2 border-[#00AEEF]/50 p-6 sm:p-10 md:p-12 shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-md">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#014489]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Terveydenhuollon Ammattilaisille (SOTE &amp; Fysioterapeutit)</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              SOTE- &amp; TERVEYSAMMATTILAISTEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">TMD-ERIKOISKOULUTUSMATERIAALI</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Syventävä OMT-fysioterapian erikoiskoulutuspaketti ja luentomateriaalit fysioterapeuteille, osteopaateille, hammaslääkäreille ja SOTE-ammattilaisille.
            </p>
          </div>

          {/* Included Items */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Ammattilaispaketti sisältää:</h3>
            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5 border border-[#00AEEF]/30">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white">Kattavat PDF-luentodiat &amp; tutkimuskaavakkeet:</span> <span className="text-slate-300">Teoria, anatomia, TMD-luokittelu, leukanivelen palpaatio ja erotusdiagnostiikka.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5 border border-[#00AEEF]/30">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-white">HD-Opetusvideot &amp; Tekniikkaoppaat:</span> <span className="text-slate-300">Hands-on manuaalisen terapian otteet, liikehoidot ja kliiniset harjoiteprogressiot vastaanottotyöhön.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5 border border-[#00AEEF]/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="font-bold text-white">Välitön digitaalinen toimitus:</span> <span className="text-slate-300">Valvira/SOTE-yhteensopivat materiaalit käyttöön heti maksun jälkeen.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Price & Checkout Action Column */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#000814] border border-[#0C66B4]/60 text-center space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Hinta (yksittäinen henkilö)</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">119</span>
              <span className="text-2xl font-bold text-[#00AEEF]">€</span>
              <span className="text-xs text-slate-400 ml-1 font-mono">(sis. ALV)</span>
            </div>
            <p className="text-xs text-slate-400 pt-1">Luo heti pääsyn PDF-dioihin ja opetusvideoon</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 shadow-[0_0_25px_rgba(0,174,239,0.4)] transition-all transform active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Alustetaan maksua...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <span>Osta materiaali (119 €)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/70 border border-red-800/60 text-red-200 text-xs text-left">
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Turvallinen Stripe-maksu (Kortti, Apple Pay, Google Pay)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
