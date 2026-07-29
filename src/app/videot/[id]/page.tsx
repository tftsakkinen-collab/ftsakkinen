import { FALLBACK_VIDEOS, Video } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck, Sparkles, Globe, Play, FileText, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import Script from "next/script";
import VideoCard from "@/components/VideoCard";

export async function generateStaticParams() {
  return FALLBACK_VIDEOS.map((v) => ({
    id: v.id,
  }));
}

export default async function SingleVideoPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const video = FALLBACK_VIDEOS.find((v) => v.id === params.id) || FALLBACK_VIDEOS[0];

  if (!video) {
    notFound();
  }

  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  // Find related videos in the same category (excluding current video)
  const relatedVideos = FALLBACK_VIDEOS.filter(
    (v) => v.categoryId === video.categoryId && v.id !== video.id
  ).slice(0, 3);

  // JSON-LD Schemas for AEO & SEO (Article, VideoObject, FAQPage)
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
      "mainEntityOfPage": `https://www.ftsakkinen.com/videot/${video.id}`
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.title,
      "description": video.promiseDescription,
      "thumbnailUrl": video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      "uploadDate": video.publishedAt,
      "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
      "transcript": video.transcript || video.promiseDescription
    }
  ];

  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200">
      {/* Inject AEO Structured JSON-LD Data */}
      <Script
        id="json-ld-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
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

        {/* Article Header */}
        <div className="space-y-4">
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

        {/* Full Text / Video Transcript Section for AI Crawlers and Humans */}
        <article className="space-y-6 text-base leading-relaxed text-gray-300 pt-4 border-t border-[#0C66B4]/30">
          <div className="flex items-center gap-2 text-white font-display text-2xl">
            <FileText className="w-6 h-6 text-[#00AEEF]" />
            <h2>Videon transkripti ja täydellinen teksti</h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 whitespace-pre-line text-sm leading-relaxed font-sans text-gray-200">
            {video.transcript || video.promiseDescription}
          </div>
        </article>

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
