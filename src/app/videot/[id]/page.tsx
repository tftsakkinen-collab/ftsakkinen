import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { getAllVideos, getVideoById } from "@/lib/youtube";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { ArrowLeft, Download, Sparkles, Globe, Play, ChevronRight, HelpCircle, Home } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";
import VideoCard from "@/components/VideoCard";
import TranscriptViewer from "@/components/TranscriptViewer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const videos = await getAllVideos();
  return videos.map((v) => ({
    id: v.id,
  }));
}

// 1. VIDEO-SPECIFIC DYNAMIC META TAGS + HREFLANG FOR SEO & AEO
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const video = await getVideoById(params.id);

  if (!video) {
    return {};
  }

  const cleanTitle = video.title.length > 45 ? `${video.title.slice(0, 45)}...` : video.title;
  const metaTitle = `${cleanTitle} | FT Säkkinen`;
  const metaDescription = video.promiseDescription.slice(0, 155);
  const canonicalUrl = `https://www.ftsakkinen.com/videot/${video.id}`;
  const pairedEnUrl = video.pairVideoId
    ? `https://www.ptsakkinen.com/videos/${video.pairVideoId}`
    : `https://www.ptsakkinen.com/videos/${video.id}`;
  const imageUrl = video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fi": canonicalUrl,
        "en": pairedEnUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "FT Säkkinen - OMT-Fysioterapia",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: video.title,
        },
      ],
      locale: "fi_FI",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = await getVideoById(params.id);

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  // Related videos from all available videos
  const allVideos = await getAllVideos();
  const relatedVideos = allVideos.filter(
    (v) => v.categoryId === video.categoryId && v.id !== video.id
  ).slice(0, 3);

  // Dynamic video-specific FAQ items
  const cleanTitle = video.title.trim();
  
  // Fix Category Genitive Grammar (Task 3)
  const formatCategoryGenitiveFI = (catId: string) => {
    if (catId === "purenta-tmd") return "purentaelimistön ja TMD:n";
    if (catId === "ergonomia") return "ergonomian";
    return "TULE-vaivojen";
  };
  const categoryGenitive = formatCategoryGenitiveFI(video.categoryId);

  // Content type detection for non-exercise videos (Task 2)
  const videoText = (video.title + " " + video.promiseDescription).toLowerCase();
  let contentType = "exercise";
  if (videoText.includes("ruoka") || videoText.includes("ravinto") || videoText.includes("tulehdus") || videoText.includes("syö") || videoText.includes("ruokavalio")) {
    contentType = "nutrition";
  } else if (videoText.includes("haastattelu") || videoText.includes("etä") || videoText.includes("vastaavat") || videoText.includes("tarina") || videoText.includes("myytti")) {
    contentType = "interview";
  } else if (videoText.includes("luento") || videoText.includes("kunto") || videoText.includes("tilasto") || videoText.includes("tieto")) {
    contentType = "lecture";
  }

  let q2Answer = video.transcript
    ? `Videolla käydään läpi täsmälliset liikeradat, palpaatio-ohjeet ja itsehoitomenetelmät: ${video.transcript.slice(0, 220).trim()}...`
    : `Videolla OMT-fysioterapeutti Janne Säkkinen näyttää vaihe vaiheelta sopivat harjoitteet ja asennonhallintavinkit teeman hoitoon.`;

  if (contentType === "nutrition") {
    q2Answer = `Videolla annetaan täsmälliset ravitsemussuositukset, tulehdusta rauhoittavat ravintoaineet ja arjen elämäntapaohjeet. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  } else if (contentType === "interview") {
    q2Answer = `Videolla käydään läpi asiantuntijahaastattelu, käytännön kliiniset esimerkit sekä potilastarinan mukaiset itsehoitovinkit. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  } else if (contentType === "lecture") {
    q2Answer = `Videolla esitellään kliininen luentotallenne, tutkittuun tietoon perustuvat tilastot sekä ergonomiset asennonhallintaohjeet. ${video.transcript ? video.transcript.slice(0, 180).trim() + "..." : ""}`;
  }

  const faqItems = [
    {
      question: `Mitä teemaa videossa "${cleanTitle}" käsitellään?`,
      answer: video.promiseDescription,
    },
    {
      question: `Miten videon "${cleanTitle}" ohjeita sovelletaan ${categoryGenitive} kuntoutuksessa?`,
      answer: q2Answer,
    },
    {
      question: `Milloin videon aihealueen oireissa kannattaa hakeutua OMT-fysioterapeutin vastaanotolle?`,
      answer: `Jos oireet liittyvät teemaan "${cleanTitle}" ja ne haittaavat päivittäistä toimintakykyä, heikentävät unta tai aiheuttavat kovaa kipua, asiantuntijan tekemä kliininen OMT-tutkimus auttaa varmistamaan tarkan diagnoosin ja oikean hoitosuunnitelman.`,
    },
  ];

  // 2. STRUCTURED DATA (JSON-LD) SCHEMAS: Article, VideoObject, FAQPage, BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": video.title,
      "description": video.promiseDescription,
      "author": {
        "@type": "Person",
        "name": "Janne Säkkinen",
        "jobTitle": "OMT-Fysioterapeutti",
        "worksFor": {
          "@type": "Organization",
          "name": "FT Säkkinen"
        },
        "description": "OMT-fysioterapeutti, Oulun yliopiston hammaslääketieteen tiedekunnan kouluttaja vuodesta 2017."
      },
      "publisher": {
        "@type": "Organization",
        "name": "FT Säkkinen",
        "url": "https://www.ftsakkinen.com"
      },
      "datePublished": video.publishedAt,
      "dateModified": video.publishedAt,
      "mainEntityOfPage": `https://www.ftsakkinen.com/videot/${video.id}`
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.promiseDescription,
      "thumbnailUrl": video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      "uploadDate": video.publishedAt,
      "duration": video.isShort ? "PT59S" : "PT12M30S",
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "transcript": video.transcript || video.promiseDescription
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
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
          "name": "Videot",
          "item": "https://www.ftsakkinen.com/videot"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category?.name || "Fysioterapia",
          "item": "https://www.ftsakkinen.com/videot"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": video.title,
          "item": `https://www.ftsakkinen.com/videot/${video.id}`
        }
      ]
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      {/* Inject Video-Specific AEO Structured JSON-LD Data */}
      <Script
        id={`json-ld-schemas-${video.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Navigation & Language Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/videot"
            className="inline-flex items-center gap-2 text-sm text-[#00AEEF] hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Takaisin videokirjastoon</span>
          </Link>

          {/* Sister Site Language Link if paired video exists */}
          {video.pairVideoId && (
            <a
              href={`https://www.ptsakkinen.com/videos/${video.pairVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#000d21] border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-semibold hover:bg-[#00AEEF] hover:text-black transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Available in English → ptsakkinen.com</span>
            </a>
          )}
        </div>

        {/* Article Header & Visible Breadcrumb Directly Above Title */}
        <div className="space-y-4">
          {/* Visible Breadcrumb Navigation (Murupolku) - Directly Above Title */}
          <nav aria-label="Murupolku" className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-medium pb-1">
            <Link href="/" className="hover:text-[#00AEEF] flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Etusivu</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <Link href="/videot" className="hover:text-[#00AEEF] transition-colors">
              Videot
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <span className="text-[#00AEEF] font-semibold truncate max-w-[150px] sm:max-w-none">
              {category?.name || "Fysioterapia"}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <span className="text-gray-300 truncate max-w-[200px] sm:max-w-xs font-normal">
              {video.title}
            </span>
          </nav>

          <div className="inline-block px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider">
            {category?.name || "Fysioterapia"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {video.title}
          </h1>

          {/* Author E-E-A-T Badge */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-400 border-b border-[#0C66B4]/30 pb-4">
            <span className="font-semibold text-white">Kirjoittanut Janne Säkkinen</span>
            <span>•</span>
            <span>OMT-fysioterapeutti, Oulun yliopiston kouluttaja</span>
            <span>•</span>
            <span>Päivitetty {video.publishedAt}</span>
          </div>
        </div>

        {/* AEO Direct Answer Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#000d21] via-[#014489]/30 to-[#000d21] border border-[#00AEEF]/50 shadow-panel space-y-3">
          <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>AEO-Tiivistelmä / Suora Vastaus</span>
          </div>
          <p className="text-base text-gray-200 leading-relaxed font-medium">
            {video.promiseDescription}
          </p>
        </div>

        {/* Responsive YouTube Embed Container */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <Play className="w-4 h-4 text-[#00AEEF]" />
            <span>Katso opetusvideo</span>
          </div>
          <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Full Text / Video Transcript Section with Expandable View & 100% HTML for Crawlers */}
        <TranscriptViewer transcript={video.transcript || video.promiseDescription} />

        {/* FAQ Section & FAQPage Schema */}
        <div className="space-y-6 pt-6 border-t border-[#0C66B4]/30">
          <div className="flex items-center gap-2 text-white font-display text-2xl">
            <HelpCircle className="w-6 h-6 text-[#00AEEF]" />
            <h2>Usein Kysytyt Kysymykset (UKK)</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2">
                  <span className="text-[#00AEEF]">Q:</span> {faq.question}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-linking: Related Videos in Same Category */}
        {relatedVideos.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#0C66B4]/30">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Liittyvät fysioterapiavideot ja -aiheet</h3>
              <Link href="/videot" className="text-xs text-[#00AEEF] hover:underline flex items-center gap-1">
                <span>Katso kaikki</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVideos.map((rel) => (
                <VideoCard key={rel.id} video={rel} />
              ))}
            </div>
          </div>
        )}

        {/* Lead Magnet CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#000d21] via-[#014489]/40 to-[#000d21] border border-[#00AEEF]/50 shadow-glow space-y-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto">
            <Download className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Lataa ilmaiset kuntoutusoppaat PDF-muodossa</h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Saat heti pääsyn Janne Säkkisen viralliseen Google Drive -kansioon, johon päivitetään täsmälliset liike- ja kuntoutusoppaat.
          </p>
          <Link
            href="/ilmaisopas"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow"
          >
            <span>Siirry tilaamaan oppaat (Google Drive)</span>
          </Link>
        </div>

        <p className="text-xs text-gray-400 italic pt-2">
          Lääketieteellinen vastuuvapauslauseke: Tämä artikkeli on tarkoitettu vain koulutus- ja informaatiotarkoitukseen. Se ei korvaa terveydenhuollon ammattilaisen tekemää diagnoosia, yksilöllistä fysioterapia-arviota tai lääkärin hoitosuunnitelmaa.
        </p>

      </div>
    </div>
  );
}
