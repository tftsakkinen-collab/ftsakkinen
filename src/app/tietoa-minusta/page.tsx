import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_FI } from "@/data/cv";
import { Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, User, MapPin, Mail, Phone, Users, HeartHandshake, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tietoa Minusta | OMT-Fysioterapeutti Janne Säkkinen | Oulu",
  description: "Tutustu OMT-fysioterapeutti Janne Säkkisen ammatilliseen taustaan, OMT-erikoistumiseen (SOMTY), yliopisto-opettajuuteen (Oulun yliopisto 2017–) ja ratkaisukeskeiseen valmennusfilosofiaan.",
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
        "jobTitle": "OMT-Fysioterapeutti & Työfysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta",
        "description": "Pitkän työkokemuksen omaava OMT-fysioterapeutti, työfysioterapian erikoisosaaja ja Oulun yliopiston hammaslääketieteen yksikön vieraileva luennoitsija vuodesta 2017.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Profile Header */}
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
                <span>OMT-Fysioterapeutti &amp; Työfysioterapeutti</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <User className="w-4 h-4" />
              <span>Ammatillinen Tausta &amp; Osaaminen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide leading-tight">
              JANNE SÄKKINEN <span className="text-[#00AEEF]">— OMT-FYSIOTERAPEUTTI</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
              Olen pitkän työkokemuksen omaava ja kokenut työfysioterapeutti sekä OMT-erikoisfysioterapeutti Oulusta. Erikoisosaamiseni ytimessä on tuki- ja liikuntaelimistön ongelmien ennaltaehkäisy ja hoito, purentaelimistön toimintahäiriöt (TMD) sekä työhyvinvoinnin kokonaisvaltainen edistäminen.
            </p>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Nautin asiakastyöstä, jossa yhdistyvät avoin asiakaspalvelu ja kliininen asiantuntemus. Toimin ammatinharjoittajana Terveystalon digityöterveydessä sekä perinteisen työterveyden parissa. Lisäksi toimin työfysioterapeuttina Norre Työterveydessä Kempeleessä.
              </p>
              <p>
                Olen työskennellyt ergonomia-asiantuntijana ja vierailevana luennoitsijana Oulun yliopiston hammaslääketieteen yksikössä yli 7 vuoden ajan (2017–). Tässä roolissa olen kehittänyt suun terveydenhuollon työergonomian käytäntöjä ja jakanut asiantuntemustani uusille terveydenhuollon ammattilaisille.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#000d21] border border-[#0C66B4]/60 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Yliopisto-opettaja (2017–)</h3>
                  <p className="text-xs text-gray-400 mt-1">Oulun yliopisto, Hammaslääketiede (yli 7 vuotta)</p>
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

        {/* Work Philosophy & Leadership Section */}
        <div className="space-y-8 p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 shadow-panel">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Työskentelytapa &amp; Filosofia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display text-white">
              VALMENTAVA &amp; RATKAISUKESKEINEN <span className="text-[#00AEEF]">ASIAN TUNTIJAOTE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Avoin Vuorovaikutus &amp; Luottamus</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Uskon, että paras asiakaskokemus ja hoitotulos syntyvät avoimesta kuuntelemisesta, molemminpuolisesta luottamuksesta ja huolellisesta yksilöllisestä suunnittelusta.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Valmentava Lähestymistapa</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Perehdyn jokaiseen asiakastapaukseen kokonaisvaltaisesti. Olen saanut kiitosta innostavasta ja valmentavasta otteestani, joka saavuttaa tuloksia niin asiakkaiden kuin tiimin parissa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Vahva Organisointi &amp; Tiimityö</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Opiskelijajärjestöjen puheenjohtajuudet ja tuutorvastaavan luottamustehtävät ovat kehittäneet vahvat johtamis-, organisointi- ja tiimityötaidot eri sidosryhmien kanssa toimimiseen.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed CV Sections */}
        <div className="space-y-12 pt-8 border-t border-[#0C66B4]/30">
          
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
