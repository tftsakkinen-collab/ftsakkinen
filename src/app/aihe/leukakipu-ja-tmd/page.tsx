import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { BookOpen, Sparkles, Home, ChevronRight, Download } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leukakipu & Leukanivelen TMD-Fysioterapia | FT Säkkinen",
  description: "Opas purentaelimistön (TMD), leukanivelten naksumisen, kireyksien ja hammassäryn tutkimiseen ja hoitoon OMT-fysioterapialla.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd",
    languages: {
      "fi": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd",
      "en": "https://www.ptsakkinen.com/topic/tmj-and-jaw-pain",
      "x-default": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd",
    },
  },
};

export default function LeukakipuTopicPage() {
  const topicVideos = FALLBACK_VIDEOS.filter((v) => v.categoryId === "purenta-tmd");

  const paragraphs = [
    "Purentaelimistön toimintahäiriöt (TMD, temporomandibular disorders) ovat yleinen syy kasvojen jomotukseen, leukanivelen naksahduksiin ja pään alueen säryille. Purentalihaksista tehokkain on masseter-lihas (ulompi purentalihas), johon kohdistuu purennassa ja öisessä hampaiden narskuttelussa (bruksismi) poikkeuksellisen suuri mekaaninen kuormitus.",
    "Tyypillisiä oireita ovat aamuisin tuntuva leukanivelen kireys, suun rajoittunut avautuminen, korvaan säteilevä kipu sekä tunne siitä, että hampaat eivät osu kohdakkain. Syynä ovat usein anatomiset ja toiminnalliset kireydet purentalihaksistossa, niska-hartiaseudun virheasennoissa sekä leukanivelen nivelvälilevyn (discus) dislokaatiossa.",
    "OMT-fysioterapiassa purentaelimistön vaivoja tutkitaan ja hoidetaan kokonaisvaltaisesti. Hoitoon kuuluu intraoraalinen (suunsisäinen) manuaalinen palpaatio ja käsittely, leukanivelen mobilisaatio, niskarangan nivelten täsmäliikkeet sekä asiakkaan omaehtoinen liikehoito. Oikein kohdistetulla fysioterapialla leukanivelen naksuminen ja lihaskireydet helpottavat usein merkittävästi jo 2–4 viikossa."
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Article", "MedicalWebPage"],
      "headline": "Leukakipu, Leukanivelen Naksahdus & Bruksismi (TMD)",
      "description": "Täydellinen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.",
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
        "name": "Purentaelimistön toimintahäiriö (TMD)"
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
      "datePublished": "2024-07-24",
      "dateModified": "2026-07-30",
      "mainEntityOfPage": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd"
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
          "name": "Leukakipu, Leukanivelen Naksahdus & Bruksismi (TMD)",
          "item": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mikä aiheuttaa leukakipua, leukanivelen naksumista ja bruksismia (TMD)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[0]
          }
        },
        {
          "@type": "Question",
          "name": "Mitkä ovat purentaelimistön toimintahäiriöiden (TMD) tyypillisimmät oireet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": paragraphs[1]
          }
        },
        {
          "@type": "Question",
          "name": "Miten purentaelimistön vaivoja hoidetaan OMT-fysioterapiassa?",
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
        id="json-ld-leukakipu"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
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
          <span className="text-white font-semibold">Leukakipu &amp; TMD</span>
        </nav>

        {/* Page Header */}
        <div className="space-y-4 max-w-4xl border-b border-[#0C66B4]/30 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Kliininen Tietopankki &amp; Aihekooste</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            LEUKAKIPU, LEUKANIVELEN NAKSAHDUS &amp; <span className="text-[#00AEEF]">BRUKSISMI (TMD)</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            Täydellinen kliininen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.
          </p>
        </div>

        {/* Synthesis Article Text */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-6 shadow-panel">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Leukaterapeutit Vastaavat Yleisimpiin Kysymyksiin</span>
          </div>

          <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
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
