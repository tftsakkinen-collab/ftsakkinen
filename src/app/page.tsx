import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VideoCard from "@/components/VideoCard";
import EmailLeadForm from "@/components/EmailLeadForm";
import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OMT-Fysioterapeutti Janne Säkkinen | Oulu | Purentaelimistö & TMD",
  description: "Purentaelimistön (TMD) ja tuki- ja liikuntaelimistön OMT-fysioterapeutti Janne Säkkinen. Kouluttaja Oulun yliopistolla vuodesta 2017. Katso oppaat ja videot.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/",
    languages: {
      "fi": "https://www.ftsakkinen.com/",
      "en": "https://www.ptsakkinen.com/",
    },
  },
};

export default async function HomePage() {
  const videos = await fetchYouTubeVideos();
  const featuredVideos = videos.slice(0, 6);

  // 5. ORGANIZATION & PERSON JSON-LD SCHEMA FOR HOMEPAGE
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Janne Säkkinen",
      "jobTitle": "OMT-Fysioterapeutti",
      "worksFor": {
        "@type": "Organization",
        "name": "Tiedottajanne Oy",
        "legalName": "Tiedottajanne Oy",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lipunkantajantie 21 G",
          "addressLocality": "Oulu",
          "postalCode": "90670",
          "addressCountry": "FI"
        },
        "telephone": "+358407675529",
        "email": "tiedottajanne@gmail.com",
        "url": "https://www.ftsakkinen.com"
      },
      "alumniOf": "Oulun Yliopisto",
      "sameAs": [
        "https://www.youtube.com/@ftsakkinen",
        "https://www.ptsakkinen.com"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Tiedottajanne Oy - FT Säkkinen",
      "description": "OMT-Fysioterapia ja purentaelimistön fysioterapiakoulutukset Oulussa ja valtakunnallisesti.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lipunkantajantie 21 G",
        "addressLocality": "Oulu",
        "postalCode": "90670",
        "addressCountry": "FI"
      },
      "telephone": "+358407675529",
      "email": "tiedottajanne@gmail.com",
      "url": "https://www.ftsakkinen.com"
    }
  ];

  return (
    <div>
      <Script
        id="homepage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Ajanvarausohjeet */}
      <AppointmentBookingSection />

      {/* 3. Koulutukset & Työhistoria (Tiivistetty) */}
      <TrainingsSection />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. Luento- ja Koulutuspalautteet */}
      <TestimonialsSection />

      {/* 6. YouTube-videokirjasto */}
      <section className="py-20 bg-[#000a18] border-b border-[#0C66B4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[#00AEEF] text-sm font-semibold uppercase tracking-widest">
                <PlayCircle className="w-4 h-4" />
                <span>YouTube-videokirjasto</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
                KAIKKI PITKÄT <span className="text-[#00AEEF]">FYSIOTERAPIAVIDEOT</span>
              </h2>
            </div>

            <Link
              href="/videot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C66B4]/20 border border-[#0C66B4] text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all shadow-panel shrink-0"
            >
              <span>Katso koko 68 videon kirjasto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* YouTube Video Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Lead Magnet Banner */}
      <EmailLeadForm />
    </div>
  );
}
