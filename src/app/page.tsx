import SplitHeroSection from "@/components/SplitHeroSection";
import ThreeProductGridSection from "@/components/ThreeProductGridSection";
import AboutSection from "@/components/AboutSection";
import MediaPodcastShowcase from "@/components/MediaPodcastShowcase";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
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

import SymptomIntake from "@/components/SymptomIntake";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FeaturedMediaSection from "@/components/FeaturedMediaSection";

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
      "sameAs": [
        "https://anna.fi/hyvinvointi/ilmainen-muutos",
        "https://anna.fi/hyvinvointi/sankymokat",
        "https://www.apu.fi/artikkelit/pakarakipu-pahenee-istuessa-kokeile-naita-fysioterapeutin-suosittelemia-harjoitteita",
        "https://www.kaleva.fi/jos-naama-pysyy-peruslukemilla-venyttelet-oikein-t/12341018",
        "https://www.linkedin.com/posts/janne-s%C3%A4kkinen-4868bb221_ly%C3%B6tiin-mervi-niippan-kanssa-p%C3%A4%C3%A4t-yhteen-share-7440686206058790912-YuRP/",
        "https://www.youtube.com/@ft_sakkinen",
        "https://www.instagram.com/sakkinenjanne",
        "https://www.tiktok.com/@sakkinenjanne",
        "https://www.ptsakkinen.com/"
      ],
      "subjectOf": [
        {
          "@type": "NewsArticle",
          "headline": "Tämä muutos parantaisi lähes jokaisen suomalaisen hyvinvointia – se ei maksa mitään, mutta harva on siihen valmis",
          "url": "https://anna.fi/hyvinvointi/ilmainen-muutos",
          "datePublished": "2026-09-01",
          "publisher": {
            "@type": "Organization",
            "name": "Anna.fi / Otavamedia"
          }
        },
        {
          "@type": "NewsArticle",
          "headline": "Fysioterapeutti paljastaa mokat, jotka moni tekee sänkyostoksilla – hotelleista ei kannata ottaa mallia",
          "url": "https://anna.fi/hyvinvointi/sankymokat",
          "datePublished": "2026-08-28",
          "publisher": {
            "@type": "Organization",
            "name": "Anna.fi / Otavamedia"
          }
        },
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

      {/* 1. Split Hero Section (3-Second Rule Blueprint) */}
      <SplitHeroSection />

      {/* 2. Three Product Cards Side-by-Side Grid */}
      <ThreeProductGridSection />

      {/* 3. Symptom Intake & Navigator */}
      <SymptomIntake />
      <OireNavigaattori />

      {/* 4. Topic Links */}
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

      {/* 5. About & Credentials Overview */}
      <AboutSection />

      {/* 6. Janne Säkkinen Mediassa (Anna.fi, Apu.fi, Kaleva) */}
      <FeaturedMediaSection />

      {/* 7. Media Showcase */}
      <MediaPodcastShowcase />

      {/* 7. Featured Clinical Videos Grid */}
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

      {/* 8. Patient Testimonials & Google Reviews */}
      <GoogleReviewsSection />
      <PatientTestimonialsSection />

      {/* 9. Booking Section */}
      <AppointmentBookingSection />
    </div>
  );
}
