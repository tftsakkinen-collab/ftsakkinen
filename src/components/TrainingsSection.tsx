"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_FI } from "@/data/cv";
import { GraduationCap, Award, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, ChevronDown, ChevronUp, ExternalLink, Sparkles, Video } from "lucide-react";
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
    <section className="py-20 bg-[#000d21] border-b border-[#0C66B4]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 0: Domestic Suomenkielinen Verkkokoulutus (Tulossa Stripe-maksulla) */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#00122e] via-[#000a18] to-[#001838] border-2 border-[#00AEEF]/60 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,174,239,0.25)] space-y-8 overflow-hidden group">
          {/* Subtle glow effect */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00AEEF]/20 transition-all duration-500" />

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0C66B4]/40 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF] text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Suomenkielinen Koulutuspaketti (Tulossa)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#014489]/40 border border-[#0C66B4] text-gray-200 text-xs font-semibold">
                <Video className="w-3.5 h-3.5 text-[#00AEEF]" />
                Tiedottajanne Oy
              </span>
            </div>
            <span className="text-xs font-mono text-[#00AEEF] bg-[#000a18] px-3 py-1 rounded-md border border-[#0C66B4]/50">
              SOTE- &amp; Terveysammattilaisille
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-display text-[#ffffff] tracking-wide leading-tight">
                SOTE- &amp; TMD-Verkkomasterclass: <span className="text-[#00AEEF]">Purentaelimistö &amp; Kliininen Ergonomia</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Kattava suomenkielinen erikoiskoulutus ja kliininen materiaalipaketti fysioterapeuteille, osteopaateille, hammaslääkäreille ja SOTE-ammattilaisille. Verkkomaksut ja ilmoittautuminen avautuvat pian (Stripe-integraatio tulossa).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Erotusdiagnostiikka &amp; leukanivelen palpaatio</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Manuaalinen terapia &amp; harjoiteprogressiot</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Kliiniset oppaat &amp; Valvira-yhteensopivat materiaalit</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Helppo Stripe-verkkomaksu &amp; instant pääsy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center gap-4">
              <a
                href="#yhteystiedot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-[0_0_20px_rgba(0,174,239,0.5)] group/btn text-center"
              >
                <span>Kysy ennakkotietoja koulutuksesta</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <p className="text-[11px] text-gray-400 text-center lg:text-right">
                Suora Stripe-korttimaksu &amp; ePassi / Smartum tulossa
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: What Workshops & Lectures Janne Teaches */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Opetustyö &amp; Luennointi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              MITÄ KOULUTUKSIA <span className="text-[#00AEEF]">VEDÄN &amp; OPETAN</span>
            </h2>
            <p className="text-gray-300 text-base">
              Koulutan muita fysioterapeutteja ja opetan hammaslääketieteen opiskelijoita Oulun yliopistolla purentaelimistön fysioterapiasta ja työergonomiasta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainTrainings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#000a18] border border-[#0C66B4] space-y-4 shadow-panel hover:border-[#00AEEF] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider block">
                      {item.target}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Ansioluettelo &amp; Kliininen Kokemus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
              TYÖHISTORIA JA <span className="text-[#00AEEF]">TUTKINNOT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Degrees & Basic Education */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
                Tutkinnot &amp; Erikoistuminen
              </h3>

              <div className="space-y-4">
                {topDegrees.map((deg, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/50 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs text-[#00AEEF] font-mono">
                      <span>{deg.duration}</span>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{deg.degree}</h4>
                    <p className="text-sm text-gray-300 font-medium">{deg.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Work Experience */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#00AEEF]" />
                Kliininen Työkokemus
              </h3>

              <div className="space-y-3">
                {topWorkExperience.map((work, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 flex items-start justify-between gap-4"
                  >
                    <div>
                      <h4 className="text-base font-bold text-white">{work.title}</h4>
                      <p className="text-xs text-gray-300">{work.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-[#00AEEF] shrink-0">{work.period}</span>
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
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <FileCheck className="w-4 h-4" />
                <span>Pätevyydet &amp; Erikoistumiset</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white tracking-wide">
                TÄYDENNYSKOULUTUKSET <span className="text-[#00AEEF]">(Yli 20 kurssia)</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCertifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#000a18] border border-[#0C66B4]/40 flex items-start gap-3 transition-all hover:border-[#00AEEF]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{cert.instructorOrOrg}</p>
                  <span className="text-[10px] font-mono text-[#00AEEF] mt-1 block">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Expansion & Full Profile Link Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow group cursor-pointer"
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
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white font-bold text-sm hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
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
