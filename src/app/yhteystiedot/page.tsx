import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import ContactForm from "@/components/ContactForm";
import DarkLocationMap from "@/components/DarkLocationMap";
import { Mail, Phone, MapPin, Building2, ExternalLink, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yhteystiedot & Ajanvaraus | FT Janne Säkkinen",
  description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkiseen tai varaa aika vastaanotolle Terveystaloon, Norre Työterveyteen tai Hammasvahtiin.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/yhteystiedot",
    languages: {
      "fi": "https://www.ftsakkinen.com/yhteystiedot",
      "en": "https://www.ptsakkinen.com/contact",
      "x-default": "https://www.ftsakkinen.com/yhteystiedot",
    },
  },
  openGraph: {
    title: "Yhteystiedot & Ajanvaraus | FT Janne Säkkinen",
    description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkiseen tai varaa aika vastaanotolle Terveystaloon, Norre Työterveyteen tai Hammasvahtiin.",
    url: "https://www.ftsakkinen.com/yhteystiedot",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yhteystiedot & Ajanvaraus | FT Janne Säkkinen",
    description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkiseen tai varaa aika vastaanotolle Terveystaloon, Norre Työterveyteen tai Hammasvahtiin.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-20 bg-[#000814] min-h-screen text-slate-200 relative overflow-hidden">
      {/* Background Subtle Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-[#00AEEF]" />
            <span>Ota Yhteyttä &amp; Asiantuntijapalvelut</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight break-words">
            YHTEYSTIEDOT &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">AJANVARAUS</span>
          </h1>
          <p className="text-slate-300 text-base leading-relaxed font-normal">
            Kysyttävää fysioterapiasta, luennoista tai koulutuksista? Varaa vastaanottoaika tai ota yhteyttä alla olevalla lomakkeella.
          </p>
        </div>

        {/* Contact Info Card & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 shadow-2xl shadow-cyan-950/30 space-y-6 backdrop-blur-md">
              <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
                <span>Tiedottajanne Oy</span>
              </h2>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Vastaanotot Oulussa:</span>
                    <span className="text-xs text-slate-400">Terveystalo, Norre Työterveys &amp; Hammasvahti</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href="mailto:tiedottajanne@gmail.com" className="hover:text-[#00AEEF] text-white font-semibold transition-colors">
                    tiedottajanne@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href="tel:+358413274967" className="hover:text-[#00AEEF] text-white font-semibold transition-colors">
                    041 327 4967
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#000814] border border-[#0C66B4]/50 space-y-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">OMT-Fysioterapeutti Janne Säkkinen</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Kliininen erikoisosaaminen: Purentaelimistön toimintahäiriöt (TMD), leukanivel, kasvojen kiputilat sekä ranka- ja nivelvaivat. Oulun yliopiston hammaslääketieteen kouluttaja vuodesta 2017.
                </p>
              </div>
            </div>

            {/* Interactive Dark Map Embed for Oulu Practice Locations */}
            <DarkLocationMap />
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Miten varaan vastaanottoajan? -osio */}
        <AppointmentBookingSection />
      </div>
    </div>
  );
}
