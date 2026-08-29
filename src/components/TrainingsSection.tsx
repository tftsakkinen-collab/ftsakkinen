"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_FI } from "@/data/cv";
import { GraduationCap, Award, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, ChevronDown, ChevronUp, ExternalLink, Sparkles, Video, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TrainingsSection() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const mainTrainings = [
    {
      title: "Purentaelimistö & TMD-Fysioterapia",
      target: "Hammaslääketieteen opiskelijat & Fysioterapeutit",
      description: "Purentaelimistön toimintahäiriöiden (TMD), leukanivelen ja kasvojen alueen kiputilojen fysioterapiakoulutukset. Opetusta Oulun yliopistolla vuodesta 2017 alkaen.",
      icon: GraduationCap,
    },
    {
      title: "Leukanivelen terapia -koulutus",
      target: "Pohjois-Pohjanmaan Kesäyliopisto & Yhteisöt",
      description: "Kurssikouluttajana fysioterapeuteille ja terveydenhuollon ammattilaisille suunnatuissa purentaelimistön erikoiskoulutuksissa (2024–).",
      icon: BookOpen,
    },
    {
      title: "Tuki- ja Liikuntaelimistön OMT-Koulutukset",
      target: "Fysioterapeutit & Ammatinharjoittajat",
      description: "Kliiniseen tutkimiseen ja manuaaliseen terapiaan pohjautuvat täydennyskoulutukset niska-hartiaseudun, selän ja nivelten vaivoista.",
      icon: Award,
    },
  ];

  const topDegrees = CV_DATA_FI.degrees.slice(0, 3);
  const topWorkExperience = CV_DATA_FI.workExperience.slice(0, 3);
  const visibleCertifications = showAllCertifications 
    ? CV_DATA_FI.certifications 
    : CV_DATA_FI.certifications.slice(0, 3);

  return (
    <section className="py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Section 0: Domestic Suomenkielinen Verkkokoulutus (Tulossa Stripe-maksulla) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001433] via-[#000e24] to-[#001a40] border-2 border-[#00AEEF]/60 p-8 sm:p-12 shadow-2xl shadow-cyan-950/40 space-y-8 overflow-hidden group">
          {/* Subtle glow effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00AEEF]/25 transition-all duration-700" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0C66B4]/40 pb-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/50 border border-[#00AEEF] text-[#67e8f9] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Suomenkielinen Koulutuspaketti (Tulossa)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#001026] border border-[#0C66B4] text-slate-200 text-xs font-semibold">
                <Video className="w-3.5 h-3.5 text-[#67e8f9]" />
                Tiedottajanne Oy
              </span>
            </div>
            <span className="text-xs font-mono text-[#67e8f9] bg-[#000814] px-3.5 py-1.5 rounded-xl border border-[#0C66B4]/60 shadow-inner">
              SOTE- &amp; Terveysammattilaisille
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                SOTE- &amp; TMD-Verkkomasterclass: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">Purentaelimistö &amp; Kliininen Ergonomia</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Kattava suomenkielinen erikoiskoulutus ja kliininen materiaalipaketti fysioterapeuteille, osteopaateille, hammaslääkäreille ja SOTE-ammattilaisille. Verkkomaksut ja ilmoittautuminen avautuvat pian (Stripe-integraatio tulossa).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#67e8f9] shrink-0" />
                  <span>Erotusdiagnostiikka &amp; leukanivelen palpaatio</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#67e8f9] shrink-0" />
                  <span>Manuaalinen terapia &amp; harjoiteprogressiot</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#67e8f9] shrink-0" />
                  <span>Kliiniset oppaat &amp; Valvira-yhteensopivat materiaalit</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#67e8f9] shrink-0" />
                  <span>Helppo Stripe-verkkomaksu &amp; instant pääsy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center gap-4">
              <a
                href="#yhteystiedot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] group/btn text-center"
              >
                <span>Kysy ennakkotietoja koulutuksesta</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <p className="text-[11px] text-slate-400 text-center lg:text-right">
                Suora Stripe-korttimaksu &amp; ePassi / Smartum tulossa
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: What Workshops & Lectures Janne Teaches */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-[#67e8f9]" />
              <span>Opetustyö &amp; Luennointi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              MITÄ KOULUTUKSIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">VEDÄN &amp; OPETAN</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Koulutan muita fysioterapeutteja ja opetan hammaslääketieteen opiskelijoita Oulun yliopistolla purentaelimistön fysioterapiasta ja työergonomiasta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainTrainings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-5 shadow-xl hover:border-[#00AEEF] hover:-translate-y-1.5 transition-all duration-300 group backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#67e8f9] uppercase tracking-wider block">
                      {item.target}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#67e8f9] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Top CV Highlights */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Briefcase className="w-4 h-4 text-[#67e8f9]" />
              <span>Ansioluettelo &amp; Kliininen Kokemus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              TYÖHISTORIA JA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">TUTKINNOT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Degrees & Basic Education */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#67e8f9]" />
                <span>Tutkinnot &amp; Erikoistuminen</span>
              </h3>

              <div className="space-y-4">
                {topDegrees.map((deg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#00122e]/90 border border-[#0C66B4]/50 space-y-2 hover:border-[#00AEEF]/60 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs text-[#67e8f9] font-mono">
                      <span>{deg.duration}</span>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-white leading-snug">{deg.degree}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">{deg.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Work Experience */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#67e8f9]" />
                <span>Kliininen Työkokemus</span>
              </h3>

              <div className="space-y-4">
                {topWorkExperience.map((work, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#00122e]/90 border border-[#0C66B4]/50 flex items-start justify-between gap-4 hover:border-[#00AEEF]/60 transition-all shadow-sm"
                  >
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white leading-snug">{work.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300">{work.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-[#67e8f9] px-2 py-1 rounded bg-[#000814] border border-[#0C66B4]/40 shrink-0">{work.period}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Continuing Education Highlights & Dynamic Expansion Button */}
        <div className="pt-12 border-t border-[#0C66B4]/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#67e8f9] text-xs font-bold uppercase tracking-widest">
                <FileCheck className="w-4 h-4 text-[#67e8f9]" />
                <span>Pätevyydet &amp; Erikoistumiset</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-1">
                TÄYDENNYSKOULUTUKSET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">(Yli 20 kurssia)</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#00122e]/80 border border-[#0C66B4]/40 flex items-start gap-3.5 transition-all duration-300 hover:border-[#00AEEF] hover:bg-[#00183c]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-[11px] text-slate-400">{cert.instructorOrOrg}</p>
                  <span className="text-[10px] font-mono text-[#67e8f9] block">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Expansion & Full Profile Link Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-sm hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.4)] group cursor-pointer"
            >
              <span>
                {showAllCertifications
                  ? "Näytä vähemmän"
                  : `Katso kaikki täydennyskoulutukset (${CV_DATA_FI.certifications.length} kpl)`}
              </span>
              {showAllCertifications ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>

            <Link
              href="/tietoa-minusta"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 text-white font-bold text-sm hover:border-[#00AEEF] hover:text-[#67e8f9] transition-all duration-300"
            >
              <span>Lue koko ammatillinen filosofia &amp; tausta</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
