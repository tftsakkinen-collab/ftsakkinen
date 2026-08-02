import ElbowDeviceInquiryForm from "@/components/ElbowDeviceInquiryForm";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import { PackageCheck, ShieldCheck, Activity, CheckCircle2, Sliders, Repeat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyynärvarsitreenari — Tennis- & Golfkyynärpää | FT Säkkinen",
  description: "Tilaa opetusvideoilla näkyvä kyynärvarsitreenari tennis- ja golfkyynärpään kuntoutukseen. Jätä yhteystietosi tilauslomakkeella.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/kyynarpaa-apuvaline",
  },
  openGraph: {
    title: "Kyynärvarsitreenari — Tennis- & Golfkyynärpää | FT Säkkinen",
    description: "Tilaa opetusvideoilla näkyvä kyynärvarsitreenari tennis- ja golfkyynärpään kuntoutukseen. Jätä yhteystietosi tilauslomakkeella.",
    url: "https://www.ftsakkinen.com/kyynarpaa-apuvaline",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/logo-whitebg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyynärvarsitreenari — Tennis- & Golfkyynärpää | FT Säkkinen",
    description: "Tilaa opetusvideoilla näkyvä kyynärvarsitreenari tennis- ja golfkyynärpään kuntoutukseen. Jätä yhteystietosi tilauslomakkeella.",
    images: ["https://www.ftsakkinen.com/logo-whitebg.png"],
  },
};

export default function KyynarpaaApuvalinePage() {
  return (
    <div className="py-12 bg-[#000a18] min-h-screen text-gray-200 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
          <PackageCheck className="w-4 h-4" />
          <span>Kuntoutusapuväline • Kyynärvarsitreenari</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide leading-tight">
          TENNIS- JA GOLFKYYNÄRPÄÄN <span className="text-[#00AEEF]">KUNTOUTUSAPUVÄLINE</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Golfkyynärpää- ja tenniskyynärpää-videoilla näet yksinkertaisen kotitekoisen välineen, jolla kyynärvartta voi kuormittaa vastuksella — juuri sen liikkeen, joka on tärkeä osa golf- ja tenniskyynärpään kuntoutusta.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
              <Repeat className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Sisä- ja ulkokierto vastuksella</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Mahdollistaa kyynärvarren kiertoliikkeen vastuksella — avainliike golf- ja tenniskyynärpään tulokselliseen kuntoutukseen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Toimitus kotiin</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Jos haluat itsellesi vastaavan välineen, jätä yhteystietosi lomakkeella — järjestän sen jälkeen toimituksen sinulle.
            </p>
          </div>
        </div>

      </div>

      {/* Embedded Inquiry Form */}
      <ElbowDeviceInquiryForm
        title="TILAA VÄLINE / JÄTÄ YHTEYDENOTTOPYYNTÖ"
        subtitle="Jos haluat itsellesi vastaavan välineen, jätä yhteystietosi alla olevalla lomakkeella — järjestän sen jälkeen toimituksen sinulle."
      />

      <AppointmentBookingSection />
      <BeaconsWidget />
    </div>
  );
}
