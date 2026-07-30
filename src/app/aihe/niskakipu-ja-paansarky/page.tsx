import { FALLBACK_VIDEOS } from "@/data/videos";
import VideoCard from "@/components/VideoCard";
import Link from "next/link";
import { BookOpen, Sparkles, Home, ChevronRight, Download } from "lucide-react";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niskakipu, Niska-Hartiaseudun Kireys & Cervikogeeninen Päänsärky | FT Säkkinen",
  description: "Kliininen tietopankki niska-hartiaseudun jännitystilojen, cervikogeenisen päänsäryn ja ylärangan liikerajoitusten fysioterapeuttiseen hoitoon.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/aihe/niskakipu-ja-paansarky",
    languages: {
      "fi": "https://www.ftsakkinen.com/aihe/niskakipu-ja-paansarky",
      "en": "https://www.ptsakkinen.com/topic/neck-pain-and-headaches",
      "x-default": "https://www.ftsakkinen.com/aihe/niskakipu-ja-paansarky",
    },
  },
};

export default function NiskakipuTopicPage() {
  const topicVideos = FALLBACK_VIDEOS.filter((v) => v.categoryId === "tule-vaivat");

  const paragraphs = [
    "Niskakipu ja yläselän jännitystilat ovat yksi yleisimmistä syistä hakeutua OMT-fysioterapeutin vastaanotolle. Niskarangan yläosan (C0–C3) nivelten toimintahäiriöt ja kireydet voivat aiheuttaa nk. cervikogeenistä eli niskaperäistä päänsärkyä, joka tuntuu tyypillisesti toispuoleisena kipuna takaraivolla, ohimolla tai silmän takana.",
    "Purentaelimistön ja niskarangan välillä on tiivis neurologinen ja anatominen yhteys. Niska-hartiaseudun virheasennot ja etukumara päätä kuormittava asento etätyössä lisäävät suoraan purentalihasten aktiivisuutta. Tämän vuoksi niska- ja leukaoireita on aina tutkittava ja hoidettava rinnakkain.",
    "Fysioterapiassa keskityytään niskarangan syvien koukistajalihasten vahvistamiseen, rintarangan liikkumattomien osien mobilisointiin sekä täsmällisiin venytys- ja hallintaharjoitteisiin. Säännöllisillä taukojumpparutiineilla ja aktiivisella liikehoidolla niskakipu ja siihen liittyvä päänsärky saadaan hallintaan tehokkaasti."
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Niskakipu, Niska-Hartiaseudun Kireys & Cervikogeeninen Päänsärky",
      "description": "Kliininen tietopankki niska-hartiaseudun jännitystilojen, cervikogeenisen päänsäryn ja ylärangan liikerajoitusten fysioterapeuttiseen hoitoon.",
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
          "name": "Niskakipu & Päänsärky",
          "item": "https://www.ftsakkinen.com/aihe/niskakipu-ja-paansarky"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Mikä aiheuttaa niskaperäistä eli cervikogeenistä päänsärkyä?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Niskarangan yläosan (C0–C3) nivelten toimintahäiriöt ja kireydet voivat aiheuttaa nk. cervikogeenistä eli niskaperäistä päänsärkyä, joka tuntuu tyypillisesti toispuoleisena kipuna takaraivolla, ohimolla tai silmän takana."
          }
        },
        {
          "@type": "Question",
          "name": "Miten niska-hartiaseudun kireydet liittyvät purentaelimistön vaivoihin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Purentaelimistön ja niskarangan välillä on tiivis neurologinen ja anatominen yhteys. Niska-hartiaseudun virheasennot ja etukumara päätä kuormittava asento etätyössä lisäävät suoraan purentalihasten aktiivisuutta. Tämän vuoksi niska- ja leukaoireita on aina tutkittava ja hoidettava rinnakkain."
          }
        },
        {
          "@type": "Question",
          "name": "Miten niskakipua ja niskaperäistä päänsärkyä hoidetaan fysioterapiassa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fysioterapiassa keskityytään niskarangan syvien koukistajalihasten vahvistamiseen, rintarangan liikkumattomien osien mobilisointiin sekä täsmällisiin venytys- ja hallintaharjoitteisiin. Säännöllisillä taukojumpparutiineilla ja aktiivisella liikehoidolla niskakipu ja siihen liittyvä päänsärky saadaan hallintaan tehokkaasti."
          }
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      <Script
        id="json-ld-topic-niskakipu"
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
          <span className="text-[#00AEEF] font-semibold">Niskakipu &amp; Päänsärky</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            Kliininen Aihekooste &amp; Tietopankki
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            Niskakipu, Niska-Hartiaseudun Kireys &amp; Cervikogeeninen Päänsärky
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
            Kliininen tietopankki niska-hartiaseudun jännitystilojen, cervikogeenisen päänsäryn ja ylärangan liikerajoitusten fysioterapeuttiseen hoitoon.
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
