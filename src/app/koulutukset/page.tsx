import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import LeukanivelCourseCard from "@/components/LeukanivelCourseCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koulutukset, Luennot & Työhistoria | FT Säkkinen",
  description: "Tiedot OMT-fysioterapeutti Janne Säkkisen koulutustoiminnasta, Oulun yliopiston opetuksesta, työhistoriasta ja koulutuspalautteista.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/koulutukset",
    languages: {
      "fi": "https://www.ftsakkinen.com/koulutukset",
      "en": "https://www.ptsakkinen.com/workshops",
      "x-default": "https://www.ftsakkinen.com/koulutukset",
    },
  },
  openGraph: {
    title: "Koulutukset, Luennot & Työhistoria | FT Säkkinen",
    description: "Tiedot OMT-fysioterapeutti Janne Säkkisen koulutustoiminnasta, Oulun yliopiston opetuksesta, työhistoriasta ja koulutuspalautteista.",
    url: "https://www.ftsakkinen.com/koulutukset",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koulutukset, Luennot & Työhistoria | FT Säkkinen",
    description: "Tiedot OMT-fysioterapeutti Janne Säkkisen koulutustoiminnasta, Oulun yliopiston opetuksesta, työhistoriasta ja koulutuspalautteista.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function KoulutuksetPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen space-y-12">
      <TrainingsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeukanivelCourseCard />
      </div>
      <TestimonialsSection />
      <BeaconsWidget />
    </div>
  );
}

