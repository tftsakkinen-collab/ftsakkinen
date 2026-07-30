import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { BookOpen, Sparkles, Home, ChevronRight, Download } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leukakipu, Leukanivelen Naksahdus & Bruksismi (TMD) | FT Säkkinen",
  description: "Täydellinen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd",
    languages: {
      "fi": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd",
      "en": "https://www.ptsakkinen.com/topic/tmj-and-jaw-pain",
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
      "@type": "Article",
      "headline": "Leukakipu, Leukanivelen Naksahdus & Bruksismi (TMD)",
      "description": "Täydellinen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.",
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "worksFor": {
          "@type": "Organization",
          "name": "FT Säkkinen"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "FT Säkkinen",
        "url": "https://www.ftsakkinen.com"
      },
      "datePublished": "2024-07-24",
      "dateModified": "2026-07-30"
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
          "name": "Leukakipu & TMD",
          "item": "https://www.ftsakkinen.com/aihe/leukakipu-ja-tmd"
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Script
        id="json-ld-topic-leukakipu"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumbs */}
        <nav aria-label="Murupolku" className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium">
          <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Etusivu</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <Link href="/videot" className="hover:text-[#00AEEF] transition-colors">
            Videot &amp; Aiheet
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
          <span className="text-[#00AEEF] font-semibold">Leukakipu &amp; TMD</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            Kliininen Aihekooste &amp; Tietopankki
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            Leukakipu, Leukanivelen Naksahdus &amp; Bruksismi (TMD)
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
            Täydellinen opas purentaelimistön toimintahäiriöiden (TMD), leukanivelten jännitystilojen, naksumisen ja hammassäryn hoitoon OMT-fysioterapian keinoin.
          </p>
        </div>

        {/* Written Synthesis */}
        <article className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 space-y-6 text-sm sm:text-base leading-relaxed text-gray-200 shadow-panel">
          <div className="flex items-center gap-2 text-white font-display text-2xl border-b border-[#0C66B4]/30 pb-3">
            <BookOpen className="w-6 h-6 text-[#00AEEF]" />
            <h2>OMT-Fysioterapeutin Kliininen Synteesi</h2>
          </div>

          {paragraphs.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </article>

        {/* Video Grid Section */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00AEEF]" />
              <span>Aiheeseen Liittyvät Opetusvideot ({topicVideos.length} videota)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* CTA Lead Magnet */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Lataa aihealueen harjoiteohjeet PDF-muodossa</h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Saat heti pääsyn Janne Säkkisen viralliseen Google Drive -kansioon, johon päivitetään täsmälliset liike- ja kuntoutusoppaat.
          </p>
          <Link
            href="/ilmaisopas"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
          >
            <span>Lataa oppaat (Google Drive)</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
