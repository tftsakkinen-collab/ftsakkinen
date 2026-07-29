import TrainingsSection from "@/components/TrainingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeaconsWidget from "@/components/BeaconsWidget";

export const metadata = {
  title: "Koulutukset, Luennot & Työhistoria — FT Säkkinen",
  description: "Tiedot OMT-fysioterapeutti Janne Säkkisen koulutustoiminnasta, Oulun yliopiston opetuksesta, työhistoriasta ja koulutuspalautteista.",
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
