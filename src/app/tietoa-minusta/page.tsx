import { SITE_CONFIG } from "@/data/config";
import { CV_DATA_FI } from "@/data/cv";
import { Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ShieldCheck, FileCheck, ArrowRight, User, MapPin, Mail, Phone, Users, HeartHandshake, Sparkles, Target, Compass, Globe, ArrowUpRight } from "lucide-react";
import { PersonPhysicianSchema, BreadcrumbSchema } from "@/components/JsonLdSchemas";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tietoa Minusta | OMT-Fysioterapeutti Janne Säkkinen",
  description: "Tutustu OMT-fysioterapeutti Janne Säkkiseen (SOMTY), Oulun yliopiston opettajuuteen (2017–) sekä fysioterapia- ja valmennusfilosofiaan.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/tietoa-minusta",
    languages: {
      "fi": "https://www.ftsakkinen.com/tietoa-minusta",
      "en": "https://www.ptsakkinen.com/about",
      "x-default": "https://www.ftsakkinen.com/tietoa-minusta",
    },
  },
  openGraph: {
    title: "Tietoa Minusta | OMT-Fysioterapeutti Janne Säkkinen",
    description: "Tutustu OMT-fysioterapeutti Janne Säkkiseen (SOMTY), Oulun yliopiston opettajuuteen (2017–) sekä fysioterapia- ja valmennusfilosofiaan.",
    url: "https://www.ftsakkinen.com/tietoa-minusta",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "profile",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tietoa Minusta | OMT-Fysioterapeutti Janne Säkkinen",
    description: "Tutustu OMT-fysioterapeutti Janne Säkkiseen (SOMTY), Oulun yliopiston opettajuuteen (2017–) sekä fysioterapia- ja valmennusfilosofiaan.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
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
        "description": "Pitkän työkokemuksen omaava OMT-fysioterapeutti, työfysioterapian erikoisosaaja ja Oulun yliopiston hammaslääketieteen yksikön vieraileva luennoitsija vuodesta 2017. Erikoistunut tuki- ja liikuntaelimistön sekä purentaelimistön vaivojen (TMD) ennaltaehkäisyyn ja hoitoon. Uskon, että paras asiakaskokemus syntyy avoimesta vuorovaikutuksesta, luottamuksesta ja huolellisesta yksilöllisestä suunnittelusta. Kliinisessä työssä yhdistyvät uusin tieteellinen tutkimusnäyttö, manuaalinen terapia ja aktiivinen liikeharjoittelu.",
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
            "name": "Fysioterapeutti (RAMK 2007–2010)"
          }
        ],
        "sameAs": [
          "https://www.oulu.fi/",
          "https://www.terveystalo.com/",
          "https://www.ftsakkinen.com/",
          "https://www.ptsakkinen.com/",
          "https://www.youtube.com/@ft_sakkinen",
          "https://www.instagram.com/sakkinenjanne",
          "https://www.tiktok.com/@sakkinenjanne",
          "https://beacons.ai/sakkinenjanne"
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
          "name": "Tietoa minusta & Filosofia",
          "item": "https://www.ftsakkinen.com/tietoa-minusta"
        }
      ]
    }
  ];

  return (
    <div className="py-12 md:py-16 bg-[#000814] min-h-screen text-slate-200 space-y-16 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-20 left-1/4 w-[700px] h-[350px] bg-[#00AEEF]/5 rounded-full blur-[160px] pointer-events-none" />

      <PersonPhysicianSchema />
      <BreadcrumbSchema
        items={[
          { name: "Etusivu", url: "https://www.ftsakkinen.com/" },
          { name: "Tietoa Janne Säkkisestä", url: "https://www.ftsakkinen.com/tietoa-minusta" },
        ]}
      />
      <Script
        id="json-ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Main Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#00AEEF]/70 shadow-2xl shadow-cyan-950/40 group">
              <img
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen OMT-Fysioterapeutti"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-[#000e24]/90 border border-[#00AEEF]/60 backdrop-blur-xl flex items-center gap-3 text-[#00AEEF] text-xs font-bold shadow-lg">
                <Award className="w-5 h-5 shrink-0 text-[#00AEEF]" />
                <span>OMT-Fysioterapeutti &amp; Työfysioterapeutti</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <User className="w-4 h-4" />
              <span>Ammatillinen Tausta &amp; Osaaminen</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight break-words">
              JANNE SÄKKINEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">— OMT-FYSIOTERAPEUTTI</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              Olen pitkän työkokemuksen omaava ja kokenut työfysioterapeutti sekä OMT-erikoisfysioterapeutti Oulusta. Erikoisosaamiseni ytimessä on tuki- ja liikuntaelimistön ongelmien ennaltaehkäisy ja hoito, purentaelimistön toimintahäiriöt (TMD) sekä työhyvinvoinnin kokonaisvaltainen edistäminen.
            </p>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Nautin asiakastyöstä, jossa yhdistyvät avoin asiakaspalvelu ja kliininen asiantuntemus. Toimin ammatinharjoittajana Terveystalon digityöterveydessä sekä perinteisen työterveyden parissa. Lisäksi toimin työfysioterapeuttina Norre Työterveydessä Kempeleessä.
              </p>
              <p>
                Olen työskennellyt ergonomia-asiantuntijana ja vierailevana luennoitsijana Oulun yliopiston hammaslääketieteen yksikössä yli 7 vuoden ajan (2017–). Tässä roolissa olen kehittänyt suun terveydenhuollon työergonomian käytäntöjä ja jakanut asiantuntemustani uusille terveydenhuollon ammattilaisille.
              </p>
              <div className="p-4 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 text-xs text-slate-300 flex items-start gap-3 mt-3">
                <Globe className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                <p>
                  <strong>Kansainvälinen nimen kirjoitusasu:</strong> Englanninkielisellä sivustollani (<strong><a href="https://www.ptsakkinen.com" className="text-[#00AEEF] hover:underline">ptsakkinen.com</a></strong>) käytän nimen kirjoitusasua <em>"PT Janne Sakkinen"</em> ilman ääkkösiä kansainvälisen luettavuuden helpottamiseksi.
                </p>
              </div>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#0C66B4]/60 flex items-start gap-3.5 shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                <GraduationCap className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Yliopisto-opettaja (2017–)</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Oulun yliopisto, Hammaslääketiede (yli 7 vuotta)</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#0C66B4]/60 flex items-start gap-3.5 shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">OMT-Erikoistuminen</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">SOMTY 2.5 vuotta (2018–2020)</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#00122e] border border-[#00AEEF]/60 flex items-start gap-3.5 sm:col-span-2 shadow-sm hover:border-[#00AEEF] transition-colors">
                <FileCheck className="w-6 h-6 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-bold text-sm">Valvira &amp; Terhikki -Rekisteröinti</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">Laillistettu terveydenhuollon ammattihenkilö (Valvira / Terhikki -rekisteröity OMT-fysioterapeutti)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Why I do this work & Work Philosophy */}
        <div className="space-y-10 p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#00122e] to-[#000a18] border border-[#0C66B4]/60 shadow-2xl shadow-cyan-950/30">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Miksi teen tätä työtä</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              INTOHIMO FYYSISEEN SUORITUSKYKYYN &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KLIINISEEN KUNTOUTUKSEEN</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
              <p>
                Minua ajaa eteenpäin vahva intohimo ihmisen fyysisen toimintakyvyn ja toiminnallisen hyvinvoinnin edistämiseen — erityisesti työympäristöissä. Vuodesta 2010 alkaen olen työskennellyt laajasti työfysioterapian ja tuki- ja liikuntaelimistön kuntoutuksen parissa, ja toimin nykyään ammatinharjoittajana Terveystalon perinteisessä ja digitaalisessa työterveydessä.
              </p>
              <p>
                Ydinosaamiseni pohjautuu ortopediseen manuaaliseen terapiaan (OMT), ergonomiaan ja tutkittuun fysioterapiaan. Vuosien varrella olen erikoistunut monimutkaisten tuki- ja liikuntaelinoireiden hoitoon ja ihmisten ohjaamiseen kohti kestävää fyysistä suorituskykyä arjessa ja työssä. Olipa kyseessä niskakivuista kärsivä hammaslääkäri tai selkäjäykkyyden kanssa kamppaileva tietotyöläinen, sytytän käytännönläheisten ja yksilöllisten ratkaisujen löytämisestä.
              </p>
              <p>
                Kliinisen työn lisäksi olen toiminut yli seitsemän vuotta vierailevana luennoitsijana Oulun yliopiston hammaslääketieteen yksikössä opettamassa työergonomian strategioita tuleville ammattilaisille. Luennoin myös valtakunnallisesti leukanivelen (TMD) toimintahäiriöistä ja niiden terapiasta — aihealueesta, johon olen kehittänyt syvän erikoisosaamisen. Tavoitteeni on aina sama: yhdistää korkeatasoinen tutkittu tieto konkreettisiin työkaluihin, jotka auttavat sekä ammattilaisia että potilaita.
              </p>
            </div>
          </div>

          {/* Cards: Trust & Collaboration */}
          <div className="pt-8 border-t border-[#0C66B4]/30 space-y-6">
            <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#00AEEF]" />
              <span>Luottamus &amp; Yhteistyö</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-3 hover:border-[#00AEEF]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Ratkaisukeskeinen Ote</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Olen saanut kollegoilta ja asiakkailta runsaasti palautetta positiivisesta asenteestani ja ratkaisukeskeisyydestäni. Paras asiakaskokemus syntyy avoimesta vuorovaikutuksesta, luottamuksesta ja huolellisesta suunnittelusta.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-3 hover:border-[#00AEEF]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Ammattilaisten &amp; Potilaiden Voimauttaminen</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Nämä kokemukset palvelevat minua edelleen kliinisessä työssäni ja opetustehtävissäni yhdistämällä akateemisen asiantuntemuksen selkeisiin arjen työkaluun.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Clinical Practice Gallery */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-display font-extrabold text-white tracking-tight">
              KLIININEN VASTAANOTTOTYÖ &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">HOITOTEKNIIKAT</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Aitoja kuvia OMT-fysioterapian tutkimuksesta, purentaelimistön manuaalisesta terapiasta ja etätyöergonomiasta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-xl">
              <img
                src="/janne-tmd-intraoral.jpg"
                alt="Purentaelimistön manuaalinen fysioterapia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Purentaelimistön (TMD) suunsisäinen hoito
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-xl">
              <img
                src="/janne-cervical-treatment.jpg"
                alt="Niskarangan OMT-mobilisaatio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Yläniskarangan OMT-käsittely
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-xl">
              <img
                src="/janne-tmd-examination.jpg"
                alt="Leukanivelen ja purentalihasten tutkiminen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Masseter-lihasten &amp; leukanivelen palpaatio
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#0C66B4]/60 group shadow-xl">
              <img
                src="/janne-workstation.jpg"
                alt="Ergonomia ja digityöterveys"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-85" />
              <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                Digityöterveys &amp; Työergonomia
              </span>
            </div>
          </div>
        </div>

        {/* Detailed CV Sections */}
        <div className="space-y-14 pt-10 border-t border-[#0C66B4]/30">
          
          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#00AEEF]" />
              <span>Koulutustausta &amp; Tutkinnot</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CV_DATA_FI.degrees.map((deg, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-2.5 shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                  <span className="text-xs font-mono text-[#00AEEF] px-2.5 py-1 rounded-md bg-[#014489]/30 inline-block border border-[#00AEEF]/20">
                    {deg.duration}
                  </span>
                  <h3 className="text-base font-bold text-white pt-1 leading-snug">{deg.degree}</h3>
                  <p className="text-xs text-slate-300 font-medium">{deg.institution}</p>
                  {deg.description && <p className="text-xs text-slate-400 pt-2 leading-relaxed font-normal">{deg.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#00AEEF]" />
              <span>Työhistoria &amp; Kliininen Kokemus</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CV_DATA_FI.workExperience.map((work, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#00122e] border border-[#0C66B4]/50 space-y-2 flex flex-col justify-between shadow-sm hover:border-[#00AEEF]/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white leading-snug">{work.title}</h3>
                      <span className="text-xs font-mono text-[#00AEEF] bg-[#000814] px-2.5 py-1 rounded-md border border-[#0C66B4]/40 shrink-0">
                        {work.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium pt-1.5">{work.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-[#00AEEF]" />
              <span>Täydennyskoulutukset &amp; Sertifikaatit</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CV_DATA_FI.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#00122e]/80 border border-[#0C66B4]/40 space-y-1 hover:border-[#00AEEF]/50 transition-all">
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className="font-bold text-white leading-snug">{cert.title}</span>
                    <span className="text-[#00AEEF] font-mono shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">{cert.instructorOrOrg}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
