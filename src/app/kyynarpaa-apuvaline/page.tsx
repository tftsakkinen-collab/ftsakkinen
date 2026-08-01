import ElbowDeviceInquiryForm from "@/components/ElbowDeviceInquiryForm";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import BeaconsWidget from "@/components/BeaconsWidget";
import { PackageCheck, ShieldCheck, Activity, CheckCircle2, Sliders, Repeat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kyynärvarsitreenari — Tennis- ja Golfkyynärpään Kuntoutusapuväline | FT Säkkinen",
  description: "Tilaa opetusvideoilla näkyvä kyynärvarsitreenari golfkyynärpään ja tenniskyynärpään kuntoutukseen. Jätä yhteystietosi lomakkeella, niin järjestämme toimituksen.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/kyynarpaa-apuvaline",
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
          Golfkyynärpää- ja tenniskyynärpää-videoillamme näet yksinkertaisen täsmävälineen: vastuskuminauhan, jonka toiseen päähän on kierretty noin 10 cm puukeppi. Kuminauhan toinen pää kiinnitetään esimerkiksi ovenkahvaan, ja kyynärpää pysyy 90 asteen kulmassa vartalon vieressä koko liikkeen ajan.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
              <Repeat className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Sisä- ja ulkokierto vastuksella</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Väline mahdollistaa kyynärvarren kiertoliikkeen vastuksella — juuri sen avainliikkeen, joka on tärkeä osa golf- ja tenniskyynärpään tuloksellista kuntoutusta.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Helppo kuormituksen säätö</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Kuormaa voi säätää yksinkertaisesti ottamalla kepin päästä eri kohdista kiinni: mitä kauempaa otat kiinni, sitä raskaampi liike on.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/50 space-y-3 shadow-panel">
            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Suora toimitus</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Jos haluat itsellesi vastaavan valmiin apuvälineen, jätä yhteystietosi alla olevalla lomakkeella — järjestämme sen jälkeen toimituksen sinulle.
            </p>
          </div>
        </div>

      </div>

      {/* Embedded Inquiry Form */}
      <ElbowDeviceInquiryForm
        title="TILAA REHAB-VÄLINE / JÄTÄ YHTEYDENOTTOPYYNTÖ"
        subtitle="Jos haluat itsellesi vastaavan kyynärvarsitreenarin, jätä yhteystietosi alla olevalla lomakkeella — järjestän sen jälkeen toimituksen sinulle."
      />

      <AppointmentBookingSection />
      <BeaconsWidget />
    </div>
  );
}
