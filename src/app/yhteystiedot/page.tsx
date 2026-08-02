import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Building2, ExternalLink } from "lucide-react";
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
    <div className="py-16 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            YHTEYSTIEDOT &amp; <span className="text-[#00AEEF]">AJANVARAUS</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Kysyttävää fysioterapiasta, luennoista tai koulutuksista? Varaa vastaanottoaika tai ota yhteyttä alla olevalla lomakkeella.
          </p>
        </div>

        {/* Contact Info Card & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
                Tiedottajanne Oy
              </h2>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Vastaanotot Oulussa:</span>
                    <span className="text-xs text-gray-400">Terveystalo, Norre Työterveys &amp; Hammasvahti</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href="mailto:tiedottajanne@gmail.com" className="hover:underline text-white font-medium">
                    tiedottajanne@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF] shrink-0" />
                  <a href="tel:+358413274967" className="hover:underline text-white font-medium">
                    041 327 4967
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">OMT-Fysioterapeutti Janne Säkkinen</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Kliininen erikoisosaaminen: Purentaelimistön toimintahäiriöt (TMD), leukanivel, kasvojen kiputilat sekä ranka- ja nivelvaivat. Oulun yliopiston hammaslääketieteen kouluttaja vuodesta 2017.
                </p>
              </div>
            </div>

            {/* Interactive Map Embed for Oulu Practice Locations */}
            <div className="p-4 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00AEEF]" />
                  Vastaanottopaikat Oulussa
                </span>
                <span className="text-[10px] text-[#00AEEF] bg-[#014489]/40 px-2 py-0.5 rounded-full border border-[#00AEEF]/30">3 Toimipistettä</span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#0C66B4]/40">
                <iframe
                  title="Vastaanottopaikat Oulussa"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, filter: "brightness(0.85) contrast(1.1) invert(0.9) hue-rotate(180deg)" }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=25.4400%2C65.0000%2C25.5000%2C65.0300&amp;layer=mapnik&amp;marker=65.0121%2C25.4688"
                />
              </div>
              <p className="text-[11px] text-gray-400 text-center px-2">
                Vastaanotot sijaitsevat Oulun keskusta-alueella ja Kempeleessä (Terveystalo, Norre, Hammasvahti).
              </p>
            </div>
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
