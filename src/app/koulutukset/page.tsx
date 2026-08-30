import TrainingsSection from "@/components/TrainingsSection";
import ProfessionalTrainingSection from "@/components/ProfessionalTrainingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ammattilaisten TMD-Koulutukset & Luennot | FT Säkkinen",
  description: "OMT-fysioterapeutti Janne Säkkisen 2 h 7 min Leukanivelen terapia -koulutus ammattilaisille (fysioterapeutit, osteopaatit, hammaslääkärit, SOTE-ammattilaiset).",
  alternates: {
    canonical: "https://www.ftsakkinen.com/koulutukset",
    languages: {
      "fi": "https://www.ftsakkinen.com/koulutukset",
      "en": "https://www.ptsakkinen.com/workshops",
      "x-default": "https://www.ftsakkinen.com/koulutukset",
    },
  },
  openGraph: {
    title: "Ammattilaisten TMD-Koulutukset & Luennot | FT Säkkinen",
    description: "OMT-fysioterapeutti Janne Säkkisen 2 h 7 min Leukanivelen terapia -koulutus ammattilaisille.",
    url: "https://www.ftsakkinen.com/koulutukset",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammattilaisten TMD-Koulutukset & Luennot | FT Säkkinen",
    description: "OMT-fysioterapeutti Janne Säkkisen 2 h 7 min Leukanivelen terapia -koulutus ammattilaisille.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function KoulutuksetPage() {
  return (
    <div className="py-12 bg-[#000814] min-h-screen space-y-16">
      <TrainingsSection />
      
      {/* Featured 199 € Professional Training Section */}
      <ProfessionalTrainingSection />

      <TestimonialsSection />
      <BeaconsWidget />
    </div>
  );
}
