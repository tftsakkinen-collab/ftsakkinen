"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, GraduationCap, Flame, ArrowRight, UserCheck, ShieldCheck, Star } from "lucide-react";

export default function SplitHeroSection() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-20 bg-[#000814] border-b border-[#0C66B4]/30 overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Header & Title Above the Fold */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-[#67e8f9]" />
            <span>OMT-Fysioterapeutti Janne Säkkinen · Purenta- &amp; TMD-Erikoisosaaminen</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            Valitse sinulle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-white">oikea polku</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Tutkittuun tietoon ja 15+ vuoden kliiniseen kokemukseen pohjautuvat täsmäratkaisut kuluttajille ja SOTE-ammattilaisille.
          </p>
        </div>

        {/* The 3-Second Blueprint Split Doors Above the Fold */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* DOOR 1: Consumers / Kuluttajat ("Kärsin kivuista") */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#001433] via-[#00122e] to-[#000d21] border-2 border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-[#00AEEF] transition-all">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#014489]/60 text-[#67e8f9] border border-[#00AEEF]/40 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-[#67e8f9]" />
                <span>Kärsin Kivusta · Itsehoito</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Eroon leuan, niskan ja päänsäryn jännityksestä
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Kahdeksan viikon strukturoitu Puristus Pois -ohjelma sekä 17 minuutin pika-opas leuan puristuksen, naksahdusten ja iltapäiväpäänsäryn kotikuntoutukseen.
              </p>

              <ul className="space-y-2 text-xs text-slate-200 pt-2 border-t border-[#0C66B4]/30">
                <li className="flex items-center gap-2">
                  <span className="text-[#67e8f9] font-bold">✓</span>
                  <span>17 min pika-opas (29 €)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#67e8f9] font-bold">✓</span>
                  <span>8 viikon Puristus Pois -ohjelma (49 € / 149 €)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#67e8f9] font-bold">✓</span>
                  <span>100 % suomenkieliset opetusvideot &amp; PDF-työkirja</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="#tuotteet"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-base hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 text-center group cursor-pointer"
              >
                <span>Selaa itsehoitotuotteita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* DOOR 2: B2B Professionals / Ammattilaiset ("Olen ammattilainen") */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#001433] via-[#000e24] to-[#000814] border-2 border-amber-500/60 shadow-2xl shadow-amber-950/30 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-amber-400 transition-all">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Olen Ammattilainen · B2B</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                Leukanivelen terapia -koulutus ammattilaisille
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                SOTE- ja terveysalan ammattilaisille (fysioterapeutit, osteopaatit, hammaslääkärit, hierojat). Syvennä OMT-tason TMD-tutkimista ja hoitotekniikoita.
              </p>

              <ul className="space-y-2 text-xs text-slate-200 pt-2 border-t border-amber-500/20">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>2 h 7 min videotallenne + liitemateriaalit (199 €)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>9 moduulia: biomekaniikka, tutkiminen, triggerit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span>ALV-vähennyskelpoinen yrityslaskutukseen</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/koulutukset"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#000a18] font-extrabold text-base hover:from-white hover:to-amber-100 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 text-center group cursor-pointer"
              >
                <span>Katso ammattilaiskoulutus (199 €)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
