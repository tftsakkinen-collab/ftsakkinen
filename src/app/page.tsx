import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PatientTestimonialsSection from "@/components/PatientTestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle, BookOpen } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import Script from "next/script";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "OMT-Fysioterapeutti Janne Säkkinen | Oulu | Purentaelimistö & TMD",
  description: "Purentaelimistön (TMD) ja tuki- ja liikuntaelimistön OMT-fysioterapeutti Janne Säkkinen. Kouluttaja Oulun yliopistolla vuodesta 2017. Katso oppaat ja videot.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/",
    languages: {
      "fi": "https://www.ftsakkinen.com/",
      "en": "https://www.ptsakkinen.com/",
      "x-default": "https://www.ftsakkinen.com/",
    },
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 6);

  // 5. ORGANIZATION, PERSON & LOCALBUSINESS JSON-LD SCHEMA FOR HOMEPAGE
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
          "streetAddress": "Lipunkantajantie 21 G",
          "addressLocality": "Oulu",
          "postalCode": "90670",
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
        "streetAddress": "Lipunkantajantie 21 G",
        "addressLocality": "Oulu",
        "postalCode": "90670",
        "addressCountry": "FI"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 65.0065,
        "longitude": 25.5415
      },
      "openingHours": [
        "Mo-Fr 08:00-16:00"
      ],
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": 12,
        "bestRating": "5"
      },
      "review": [
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
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section + Credibility Statistics Bar */}
      <Hero />

      {/* 2. Aihekoostesivujen Pikalinkit (Top Symptoms) */}
      <section className="py-12 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Oirealueet &amp; Tietopankit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                TUTUSTU <span className="text-[#00AEEF]">AIHEKOOSTESIVUIHIN</span>
              </h2>
            </div>
            <Link href="/videot" className="text-xs text-[#00AEEF] hover:underline font-semibold">
              Katso kaikki 68 videota →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((t, idx) => (
              <Link
                key={idx}
                href={`/aihe/${t.slug}`}
                className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/50 hover:border-[#00AEEF] transition-all space-y-2 group"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#00AEEF] transition-colors flex items-center justify-between">
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#00AEEF] transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About & Credentials Overview */}
      <AboutSection />

      {/* 4. Featured Clinical Videos Grid */}
      <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <PlayCircle className="w-4 h-4" />
                <span>Kliiniset Ohjevideot</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
                SUOSITUIMMAT <span className="text-[#00AEEF]">KUNTOUTUSVIDEOT</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Täsmällisiä liikeohjeita ja tutkittua tietoa purentaelimistön, leukanivelen ja rankaperäisten kipujen itsehoitoon.
              </p>
            </div>
            <Link
              href="/videot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#000d21] border border-[#00AEEF] text-[#00AEEF] font-semibold text-sm hover:bg-[#00AEEF] hover:text-[#000a18] transition-all shadow-glow self-start md:self-auto"
            >
              <span>Selaa Kaikkia Videoita</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Direct Patient Testimonials */}
      <PatientTestimonialsSection />

      {/* 6. Professional Training & Workshops */}
      <TrainingsSection />

      {/* 7. Real Professional & Student Testimonials */}
      <TestimonialsSection />

      {/* 8. Free Self-Care Guide Lead Magnet */}
      <section className="py-16 bg-[#000d21] border-b border-[#0C66B4]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailLeadForm
            title="LIITY SÄHKÖPOSTILISTALLE & SAAT ILMAISET LISÄOHJEET"
            subtitle="Syötä etunimesi ja sähköpostiosoitteesi alla olevaan lomakkeeseen. Saat heti pääsyn ilmaisiin lisäohjeisiin, kuntoutusmateriaaleihin ja uusiin opas-PDF-tiedostoihin siten kuin niitä julkaistaan."
          />
        </div>
      </section>

      {/* 9. Appointment Booking CTA Section */}
      <AppointmentBookingSection />
    </div>
  );
}
