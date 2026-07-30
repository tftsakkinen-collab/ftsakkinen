import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_FI } from "@/data/cv";
import { Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, User, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tietoa Minusta | OMT-Fysioterapeutti Janne Säkkinen | Oulu",
  description: "Tutustu OMT-fysioterapeutti Janne Säkkisen koulutustaustaan, OMT-erikoistumiseen (SOMTY) ja yliopisto-opettajuuteen (Oulun yliopisto 2017–).",
  alternates: {
    canonical: "https://www.ftsakkinen.com/tietoa-minusta",
    languages: {
      "fi": "https://www.ftsakkinen.com/tietoa-minusta",
      "en": "https://www.ptsakkinen.com/about",
      "x-default": "https://www.ftsakkinen.com/tietoa-minusta",
    },
  },
};

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta",
        "description": "OMT-fysioterapeutti ja Oulun yliopiston hammaslääketieteen työergonomian ja purentaelimistön fysioterapian kouluttaja vuodesta 2017.",
        "worksFor": {
          "@type": "Organization",
          "name": "Tiedottajanne Oy",
          "url": "https://www.ftsakkinen.com"
        },
        "alumniOf": [
          "Suomen Ortopedisen Manuaalisen Terapian Yhdistys (SOMTY)",
          "Rovaniemen Ammattikorkeakoulu (RAMK)"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "OMT-Fysioterapeutti (SOMTY 2018–2020)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Fysioterapeutti B.Sc. (RAMK 2007–2010)"
          }
        ],
        "sameAs": [
          "https://www.youtube.com/@ft_sakkinen",
          "https://www.instagram.com/sakkinenjanne",
          "https://www.tiktok.com/@sakkinenjanne",
          "https://beacons.ai/sakkinenjanne",
          "https://www.ptsakkinen.com",
          "https://www.ftsakkinen.com"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Etusivu",
          "item": "https://www.ftsakkinen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tietoa minusta",
          "item": "https://www.ftsakkinen.com/tietoa-minusta"
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200 space-y-16">
      <Script
        id="json-ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#00AEEF] shadow-glow">
              <img
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen OMT-Fysioterapeutti"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#000d21]/90 border border-[#00AEEF] backdrop-blur-md flex items-center gap-3 text-[#00AEEF] text-xs font-bold shadow-glow">
                <Award className="w-5 h-5 shrink-0" />
                <span>OMT-Fysioterapeutti (SOMTY 2018–2020)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Tietoa Minusta &amp; Tausta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide leading-tight">
              JANNE SÄKKINEN <span className="text-[#00AEEF]">— OMT-FYSIOTERAPEUTTI</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Olen tuki- ja liikuntaelimistön sekä purentaelimistön toimintahäiriöihin (TMD) erikoistunut OMT-fysioterapeutti ja kouluttaja Oulusta.
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Erikoistumiseni ytimessä on tuki- ja liikuntaelimistön monimutkaisten kiputilojen, leukanivelen naksumisen, purentalihasten kireyksien sekä cervikogeenisen päänsäryn täsmällinen fysioterapeuttinen tutkiminen ja kuntoutus.
              </p>
              <p>
                Toimin luennoitsijana ja työergonomian opettajana Oulun yliopiston hammaslääketieteen laitoksella vuodesta 2017 alkaen sekä kouluttajana Pohjois-Pohjanmaan kesäyliopistolla. Kliinistä potilastyötä teen Oulussa ja Kempeleessä Norre Työterveydessä sekä Terveystalolla.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Yliopisto-opettaja (2017–)</h3>
                  <p className="text-xs text-gray-400 mt-1">Oulun yliopisto, Hammaslääketiede</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">OMT-Erikoistuminen</h3>
                  <p className="text-xs text-gray-400 mt-1">SOMTY 2.5 vuotta (2018–2020)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed CV Sections */}
        <div className="space-y-10 pt-8 border-t border-[#0C66B4]/30">
          
          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
              <span>Koulutustausta &amp; Tutkinnot</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CV_DATA_FI.degrees.map((deg, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2">
                  <span className="text-xs font-mono text-[#00AEEF] px-2.5 py-1 rounded-md bg-[#014489]/30 inline-block">
                    {deg.duration}
                  </span>
                  <h3 className="text-base font-bold text-white pt-1">{deg.degree}</h3>
                  <p className="text-xs text-gray-300 font-medium">{deg.institution}</p>
                  {deg.description && <p className="text-xs text-gray-400 pt-2 leading-relaxed">{deg.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#00AEEF]" />
              <span>Työhistoria &amp; Kliininen Kokemus</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CV_DATA_FI.workExperience.map((work, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">{work.title}</h3>
                      <span className="text-xs font-mono text-[#00AEEF] bg-[#014489]/30 px-2.5 py-1 rounded-md">
                        {work.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 font-medium pt-1">{work.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-[#00AEEF]" />
              <span>Täydennyskoulutukset &amp; Sertifikaatit</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CV_DATA_FI.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/30 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{cert.title}</span>
                    <span className="text-[#00AEEF] font-mono">{cert.year}</span>
                  </div>
                  <p className="text-[11px] text-gray-400">{cert.instructorOrOrg}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
