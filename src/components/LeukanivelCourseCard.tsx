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
    <div className="relative rounded-3xl bg-gradient-to-b from-[#00132e] to-[#000a18] border border-[#00AEEF]/40 p-6 sm:p-10 shadow-2xl overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#0C66B4]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Terveydenhuollon Ammattilaisille (SOTE &amp; Fysioterapeutit)</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-display text-white tracking-wide leading-tight">
              SOTE- &amp; TERVEYSAMMATTILAISTEN <span className="text-[#00AEEF]">TMD-ERIKOISKOULUTUSMATERIAALI</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Syventävä OMT-fysioterapian erikoiskoulutuspaketti ja luentomateriaalit fysioterapeuteille, osteopaateille, hammaslääkäreille ja SOTE-ammattilaisille.
            </p>
          </div>

          {/* Included Items */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase font-bold text-gray-400 tracking-wider">Ammattilaispaketti sisältää:</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white">Kattavat PDF-luentodiat &amp; tutkimuskaavakkeet:</span> Teoria, anatomia, TMD-luokittelu, leukanivelen palpaatio ja erotusdiagnostiikka.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white">HD-Opetusvideot &amp; Tekniikkaoppaat:</span> Hands-on manuaalisen terapian otteet, liikehoidot ja kliiniset harjoiteprogressiot vastaanottotyöhön.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#00AEEF]/20 text-[#00AEEF] mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="font-semibold text-white">Välitön digitaalinen toimitus:</span> Valvira/SOTE-yhteensopivat materiaalit käyttöön heti maksun jälkeen.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Price & Checkout Action Column */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 text-center space-y-6 shadow-inner">
          <div className="space-y-1">
            <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider">Hinta (yksittäinen henkilö)</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-display font-bold text-white">119</span>
              <span className="text-2xl font-bold text-[#00AEEF]">€</span>
              <span className="text-xs text-gray-400 ml-1">(sis. ALV)</span>
            </div>
            <p className="text-xs text-gray-400 pt-1">Luo heti pääsyn PDF-dioihin ja opetusvideoon</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#0C66B4] hover:from-[#33c2ff] hover:to-[#147bdc] text-white font-bold text-base shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 transition-all transform active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="p-3 rounded-lg bg-red-950/70 border border-red-800/60 text-red-200 text-xs text-left">
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Turvallinen Stripe-maksu (Kortti, Apple Pay, Google Pay)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
