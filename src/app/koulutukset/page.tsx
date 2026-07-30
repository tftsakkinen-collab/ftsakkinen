import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koulutukset, Luennot & Työhistoria | FT Säkkinen",
  description: "Tiedot OMT-fysioterapeutti Janne Säkkisen koulutustoiminnasta, Oulun yliopiston opetuksesta, työhistoriasta ja koulutuspalautteista.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/koulutukset",
    languages: {
      "fi": "https://www.ftsakkinen.com/koulutukset",
      "en": "https://www.ptsakkinen.com/workshops",
    },
  },
};

export default function KoulutuksetPage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen space-y-12">
      <TrainingsSection />
      <TestimonialsSection />
      <BeaconsWidget />
    </div>
  );
}
