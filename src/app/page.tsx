import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedMediaSection from "@/components/FeaturedMediaSection";
import MediaPodcastShowcase from "@/components/MediaPodcastShowcase";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PatientTestimonialsSection from "@/components/PatientTestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle, BookOpen, ArrowUpRight } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { PersonPhysicianSchema } from "@/components/JsonLdSchemas";
import type { Metadata } from "next";
import Script from "next/script";
import dynamicImport from "next/dynamic";

const OireNavigaattori = dynamicImport(() => import("@/components/OireNavigaattori"), {
  ssr: true,
});

const FysioAiHaku = dynamicImport(() => import("@/components/FysioAiHaku"), {
  ssr: true,
});

import SymptomIntake from "@/components/SymptomIntake";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OMT-Fysioterapeutti Janne Säkkinen | Purenta & TMD Oulu",
  description: "OMT-fysioterapeutti Janne Säkkinen | Purentaelimistön (TMD) ja TULE-vaivojen asiantuntija Oulussa. Oulun yliopiston kouluttaja. Katso videot & oppaat.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/",
    languages: {
      "fi": "https://www.ftsakkinen.com/",
      "en": "https://www.ptsakkinen.com/",
      "x-default": "https://www.ftsakkinen.com/",
    },
  },
  openGraph: {
    title: "OMT-Fysioterapeutti Janne Säkkinen | Purenta & TMD Oulu",
    description: "OMT-fysioterapeutti Janne Säkkinen | Purentaelimistön (TMD) ja TULE-vaivojen asiantuntija Oulussa. Oulun yliopiston kouluttaja. Katso videot & oppaat.",
    url: "https://www.ftsakkinen.com/",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMT-Fysioterapeutti Janne Säkkinen | Purenta & TMD Oulu",
    description: "OMT-fysioterapeutti Janne Säkkinen | Purentaelimistön (TMD) ja TULE-vaivojen asiantuntija Oulussa. Oulun yliopiston kouluttaja. Katso videot & oppaat.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 3);

  // ORGANIZATION, PERSON & LOCALBUSINESS JSON-LD SCHEMA FOR HOMEPAGE
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Janne Säkkinen",
      "jobTitle": "OMT-Fysioterapeutti",
      "url": "https://www.ftsakkinen.com/tietoa-minusta",
      "worksFor": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "image": "https://www.ftsakkinen.com/logo-whitebg.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oulu",
          "addressCountry": "FI"
        },
        "telephone": "+358413274967",
        "email": "tiedottajanne@gmail.com",
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
        "https://www.youtube.com/@ft_sakkinen",
        "https://www.instagram.com/sakkinenjanne",
        "https://www.tiktok.com/@sakkinenjanne",
        "https://beacons.ai/sakkinenjanne",
        "https://www.ptsakkinen.com",
        "https://www.ftsakkinen.com",
        "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
        "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
        "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/"
      ],
      "subjectOf": [
        {
          "@type": "NewsArticle",
          "headline": "Pakarakipu pahenee istuessa? Kokeile näitä fysioterapeutin suosittelemia harjoitteita",
          "url": "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
          "publisher": {
            "@type": "Organization",
            "name": "Apu.fi / A-lehdet"
          }
        },
        {
          "@type": "NewsArticle",
          "headline": "Jos naama pysyy peruslukemilla, venyttelet oikein",
          "url": "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
          "publisher": {
            "@type": "Organization",
            "name": "Kaleva Media"
          }
        },
        {
          "@type": "SocialMediaPosting",
          "headline": "Asiantuntijayhteistyö: Fysioterapian & Kuntoutuksen Kehittäminen",
          "url": "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/",
          "publisher": {
            "@type": "Organization",
            "name": "LinkedIn"
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tiedottajanne Oy - FT Säkkinen",
      "description": "OMT-Fysioterapia ja purentaelimistön fysioterapiakoulutukset Oulussa ja valtakunnallisesti.",
      "url": "https://www.ftsakkinen.com",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.ftsakkinen.com/janne-sakkinen.jpg",
        "width": 800,
        "height": 1000
      },
      "telephone": "+358413274967",
      "email": "tiedottajanne@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Oulu",
        "addressCountry": "FI"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 65.0121,
        "longitude": 25.4688
      },
      "openingHours": [
        "Mo-Fr 08:00-16:00"
      ],
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": 13,
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Työterveysasiakas (Kenttäasentaja)" },
          "reviewBody": "Kävin vastaanotollasi alaselkäkipujen vuoksi. Opin ohjauksessasi oikean nostotavan, eikä alaselkäoireilua ole sen jälkeen juuri ollut. Jos oireita on ajoittain tuntunut, olen tehnyt fysioterapeutin voimisteluliikkeitä ja saanut niistä heti avun. Kiitos työstäsi – mahtavaa kun homma toimii!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Fysioterapeutti / Koulutusosallistuja" },
          "reviewBody": "Oli kyllä huippu kurssi, ihan innoissani pääsen nyt testaamaan hoitoa potilaille. Juuri tälläistä olen toivonutkin, että saan käytännön työkaluja! Verbaalisesta puolesta bonuspisteet Jannelle, selkeä ja kansanomainen tapa opettaa!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "TMD- ja purentapotilas" },
          "reviewBody": "Olin kärsinyt leukanivelen naksumisesta ja aamuisesta leuan kireydestä vuosia. Jannen OMT-fysioterapialla ja täsmällisillä leukanivelharjoitteilla leuan kireys ja säryt helpottivat täysin jo kolmessa viikossa.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Valmistuva hammaslääkäri / Oulun yliopisto" },
          "reviewBody": "Mukavan energinen luennoitsija ja oli helppo keskittyä, kun ei ollut tylsää tasapaksua settiä! Upea setti, todella mielenkiintoinen. Olet erinomainen ja huumorintajuinen puhuja!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Selkäkipu- ja kuntoutuspotilas" },
          "reviewBody": "Olin kärsinyt leikkauksen jälkeisestä selkäkivusta ja pelkäsin jo joutuvani uudelleen leikkauskierteeseen. Jannen tutkimuksen ja täsmällisten liikeohjeiden ansiosta normaali arki ja kivuton liikkuminen palasivat parissa kuukaudessa.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Koulutusosallistuja (2 pvää TMD)" },
          "reviewBody": "Raikas syventävä ja innostava kokonaisuus! Paljon tuttua asiaa, mutta moni asia tarkentui. Kahden päivän koulutus on erinomainen!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kroonisen selkäkivun potilas" },
          "reviewBody": "Olen kärsinyt selkäkivuista vuosia ja aiemmin hoito oli vain oireiden peittelyä. Jannen perusteellisessa tutkimuksessa löydettiin vaivan syy, ja täsmällisillä liikeohjeilla selkäkivut kaikkosivat kokonaan ilman lääkkeitä.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Suun terveydenhuollon henkilöstö" },
          "reviewBody": "Kiinnostavin kaikista Denstalin etäluennoista, kiitos! Käytännönläheinen esitys!! Iso kiitos sinulle! Jatka samaan malliin.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Työterveysasiakas (Videoidut koti-ohjeet)" },
          "reviewBody": "Monesti fysioterapiasta saa paperinipun, joka jää pöydälle lojumaan. Janne kuvasi täsmälliset kuntoutusliikkeet suoraan puhelimellani videolle minua varten! Täydellinen tapa varmistaa että liikkeet tekee kotona oikein.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    }
  ];

  const topics = [
    {
      title: "Leukakipu & Bruksismi (TMD)",
      slug: "leukakipu-ja-tmd",
      desc: "Leukanivelen naksahdus, purentalihasten jumit ja kasvojen jomotus.",
    },
    {
      title: "Niskakipu & Päänsärky",
      slug: "niskakipu-ja-paansarky",
      desc: "Niska-hartiaseudun jännitystilat ja cervikogeeninen päänsärky.",
    },
    {
      title: "Selkäkipu & Iskias",
      slug: "selkakipu-ja-iskias",
      desc: "Alaselän fasettilukot, välilevyvaivat ja iskiasoireilu.",
    },
    {
      title: "Ergonomia & Työhyvinvointi",
      slug: "ergonomia-ja-tyohyvinvointi",
      desc: "Hammaslääketieteen ja etätyön fysioterapeuttiset asentokorjaukset.",
    },
  ];

  return (
    <div>
      <PersonPhysicianSchema />
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section + Credibility Statistics Bar */}
      <Hero />

      <SymptomIntake />

      <OireNavigaattori />

      {/* 2. Aihekoostesivujen Pikalinkit (Top Symptoms) */}
      <section className="py-16 bg-gradient-to-b from-[#000814] to-[#001026] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Oirealueet &amp; Tietopankit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mt-1">
                TUTUSTU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">AIHEKOOSTESIVUIHIN</span>
              </h2>
            </div>
            <Link href="/videot" className="text-xs text-[#67e8f9] hover:text-[#38bdf8] font-bold flex items-center gap-1">
              <span>Katso kaikki 70 videota</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, idx) => (
              <Link
                key={idx}
                href={`/aihe/${t.slug}`}
                className="p-5 rounded-2xl bg-[#00122e]/90 border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all duration-300 space-y-2 group shadow-sm hover:-translate-y-1"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#67e8f9] transition-colors flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#67e8f9] transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About & Credentials Overview */}
      <AboutSection />

      {/* 4. Dedicated Media & Podcast Showcase Hub */}
      <MediaPodcastShowcase />

      {/* 5. Featured Clinical Videos Grid */}
      <section className="py-20 bg-[#000814] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <PlayCircle className="w-4 h-4 text-[#67e8f9]" />
                <span>Kliiniset Ohjevideot</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                SUOSITUIMMAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KUNTOUTUSVIDEOT</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal">
                Täsmällisiä liikeohjeita ja tutkittua tietoa purentaelimistön, leukanivelen ja rankaperäisten kipujen itsehoitoon.
              </p>
            </div>
            <Link
              href="/videot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs sm:text-sm hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.4)] self-start md:self-auto"
            >
              <span>Selaa Kaikkia 70 Videota</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Direct Patient Testimonials & Google Reviews */}
      <GoogleReviewsSection />
      <PatientTestimonialsSection />

      {/* 7. Free Self-Care Guide & Booking Section */}
      <section className="py-16 bg-[#000814] border-b border-[#0C66B4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailLeadForm
            title="LIITY SÄHKÖPOSTILISTALLE & SAAT ILMAISET LISÄOHJEET"
            subtitle="Syötä etunimesi ja sähköpostiosoitteesi alla olevaan lomakkeeseen. Saat heti pääsyn ilmaisiin lisäohjeisiin, kuntoutusmateriaaleihin ja uusiin opas-PDF-tiedostoihin siten kuin niitä julkaistaan."
          />
        </div>
      </section>

      <AppointmentBookingSection />
    </div>
  );
}
