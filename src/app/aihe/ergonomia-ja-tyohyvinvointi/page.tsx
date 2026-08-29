import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { BookOpen, Sparkles, Home, ChevronRight } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ergonomia & Työhyvinvointi | FT Säkkinen",
  description: "Fysioterapeuttinen opas suun terveydenhuollon ammattilaisten, hammaslääkäreiden ja tietotyöläisten työergonomian ja fyysisen suorituskyvyn optimointiin.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/aihe/ergonomia-ja-tyohyvinvointi",
    languages: {
      "fi": "https://www.ftsakkinen.com/aihe/ergonomia-ja-tyohyvinvointi",
      "en": "https://www.ptsakkinen.com/topic/ergonomics-and-wellness",
      "x-default": "https://www.ftsakkinen.com/aihe/ergonomia-ja-tyohyvinvointi",
    },
  },
};

export default function ErgonomiaTopicPage() {
  const topicVideos = FALLBACK_VIDEOS.filter((v) => v.categoryId === "ergonomia");

  const paragraphs = [
    "Ergonomia ja fyysisen suorituskyvyn optimointi ovat avainasemassa erityisesti hammaslääkäreillä, suuhygienisteillä ja tietotyöntekijöillä. Pitkään jatkuneet etukumarat ja kiertyneet työasennot aiheuttavat kuormitusta niska-hartiaseutuun, alaselkään ja kämmenen/ranteen alueelle.",
    "Kliinisellä työergonomialla pyritään minimoimaan tuki- ja liikuntaelimistön epäsymmetrinen kuormitus, parantamaan työasennon dynamiikkaa sekä ehkäisemään ammattitaudeista johtuvia sairauspoissaoloja.",
    "Oulun yliopiston hammaslääketieteen yksikön vierailevana ergonomialuennoitsijana (2017–) Janne Säkkinen opettaa käytännönläheisiä asentokorjauksia, mikrotaukoliikkeitä ja suorituskykyharjoitteita, joilla työkyky säilyy hyvänä läpi koko työuran."
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      "headline": "Ergonomia & Työhyvinvointi",
      "description": "Fysioterapeuttinen opas suun terveydenhuollon ammattilaisten, hammaslääkäreiden ja tietotyöläisten työergonomian ja fyysisen suorituskyvyn optimointiin.",
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
        "name": "Hammaslääketieteen ja tietotyön kliininen ergonomia"
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
      "datePublished": "2024-10-01",
      "dateModified": "2026-07-30",
      "mainEntityOfPage": "https://www.ftsakkinen.com/aihe/ergonomia-ja-tyohyvinvointi"
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
          "name": "Ergonomia & Työhyvinvointi",
          "item": "https://www.ftsakkinen.com/aihe/ergonomia-ja-tyohyvinvointi"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Miksi hammaslääkäreillä ja tietotyöntekijöillä on suuri riski niska- ja selkävaivoihin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[0]
          }
        },
        {
          "@type": "Question",
          "name": "Mitä hyötyä kliinisestä työergonomiasta on tuki- ja liikuntaelimistölle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[1]
          }
        },
        {
          "@type": "Question",
          "name": "Miten OMT-fysioterapeutti kouluttaa työergonomiaa Oulun yliopistolla?",
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
        id="json-ld-ergonomia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#67e8f9] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Etusivu</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link href="/videot" className="hover:text-[#67e8f9]">
            Videot &amp; Aiheet
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-white font-semibold">Ergonomia &amp; Työhyvinvointi</span>
        </nav>

        <div className="space-y-4 max-w-4xl border-b border-[#0C66B4]/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Kliininen Tietopankki &amp; Aihekooste</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            ERGONOMIA &amp; <span className="text-[#67e8f9]">TYÖHYVINVOINTI</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            Fysioterapeuttinen opas suun terveydenhuollon ammattilaisten, hammaslääkäreiden ja tietotyöläisten työergonomian ja fyysisen suorituskyvyn optimointiin.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-6 shadow-panel">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Asiantuntija Vastaa Työergonomiakysymyksiin</span>
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
              AIHEESEEN LIITTYVÄT <span className="text-[#67e8f9]">OHJEVIDEOT ({topicVideos.length} KPL)</span>
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
