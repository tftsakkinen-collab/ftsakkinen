import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { BookOpen, Sparkles, Home, ChevronRight } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selkäkipu & Iskiasoireilu | FT Säkkinen",
  description: "Asiantuntijaopas alaselän fasettilukkojen, välilevyrappeutuman ja pakaraan/jalkaan säteilevän iskiaskivun kuntoutukseen.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/aihe/selkakipu-ja-iskias",
    languages: {
      "fi": "https://www.ftsakkinen.com/aihe/selkakipu-ja-iskias",
      "en": "https://www.ptsakkinen.com/topic/back-pain-and-sciatica",
      "x-default": "https://www.ftsakkinen.com/aihe/selkakipu-ja-iskias",
    },
  },
};

export default function SelkakipuTopicPage() {
  const topicVideos = FALLBACK_VIDEOS.filter((v) => v.categoryId === "selka-iskias");

  const paragraphs = [
    "Alaselän kivut ja iskiasoireilu voivat johtua lannerangan fasettinivelten toimintahäiriöistä, välilevyperäisestä ärsytyksestä tai lonkkanervon puristustilasta (esim. piriformis-oireyhtymä). Alaraajaan säteilevä kipu ja pistely edellyttävät täsmällistä fysioterapeuttista erotusdiagnostiikkaa.",
    "Iskiasoireen tunnistaa tyypillisesti lanteelta pakaraan, takareiteen ja pohkeeseen säteilevästä pistävästä tai polttavasta kivusta. Asennonvaihdot ja kohdennetut liikesuunnat (kuten rangan ojennus tai koukistus) usein helpottavat säteilyoikeutta.",
    "OMT-fysioterapiassa alaselän ja lonkan liikekontrolli sekä hermokudoksen liukuvuus arvioidaan huolellisesti. Kuntoutukseen kuuluu manuaalinen käsittely, hermokudoksen mobilisointi (neurodynamiikka) sekä syvien keskivartalon lihasten aktivaatio."
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      "headline": "Selkäkipu & Iskiasoireilu",
      "description": "Asiantuntijaopas alaselän fasettilukkojen, välilevyrappeutuman ja pakaraan/jalkaan säteilevän iskiaskivun kuntoutukseen.",
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "lastReviewed": "2026-07-30",
      "reviewedBy": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta"
      },
      "about": {
        "@type": "MedicalCondition",
        "name": "Alaselän fasettilukot, välilevyvaivat ja iskiasoireilu"
      },
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "url": "https://www.ftsakkinen.com/tietoa-minusta",
        "worksFor": {
          "@type": "Organization",
          "name": "FT Säkkinen"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "FT Säkkinen",
        "url": "https://www.ftsakkinen.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.ftsakkinen.com/logo-whitebg.png",
          "width": 600,
          "height": 60
        }
      },
      "datePublished": "2024-09-15",
      "dateModified": "2026-07-30",
      "mainEntityOfPage": "https://www.ftsakkinen.com/aihe/selkakipu-ja-iskias"
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
          "name": "Videot & Aiheet",
          "item": "https://www.ftsakkinen.com/videot"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Selkäkipu & Iskiasoireilu",
          "item": "https://www.ftsakkinen.com/aihe/selkakipu-ja-iskias"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mikä aiheuttaa alaselkäkipua ja jalkaan säteilevää iskiaskipua?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[0]
          }
        },
        {
          "@type": "Question",
          "name": "Mistä iskiasoireen tunnistaa ja mitä sille voi itse tehdä?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[1]
          }
        },
        {
          "@type": "Question",
          "name": "Miten selkävaivoja ja iskiasta hoidetaan OMT-fysioterapiassa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[2]
          }
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200 space-y-12">
      <Script
        id="json-ld-selka"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Etusivu</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/videot" className="hover:text-[#00AEEF]">
            Videot &amp; Aiheet
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-white font-semibold">Selkäkipu &amp; Iskias</span>
        </nav>

        <div className="space-y-4 max-w-4xl border-b border-[#0C66B4]/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Kliininen Tietopankki &amp; Aihekooste</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            SELKÄKIPU &amp; <span className="text-[#00AEEF]">ISKIASOIREILU</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            Asiantuntijaopas alaselän fasettilukkojen, välilevyrappeutuman ja pakaraan/jalkaan säteilevän iskiaskivun kuntoutukseen.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-6 shadow-panel">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Asiantuntija Vastaa Selkä- ja Iskiaskysymyksiin</span>
          </div>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display text-white">
              AIHEESEEN LIITTYVÄT <span className="text-[#00AEEF]">OHJEVIDEOT ({topicVideos.length} KPL)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topicVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
