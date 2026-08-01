import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import { Mail, Phone, MapPin, Building2, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yhteystiedot & Ajanvaraus | OMT-Fysioterapeutti Janne Säkkinen",
  description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkitiehen tai varaa vastaanottoaika Terveystalolta / Norre Työterveydeltä / Hammasvahdilta.",
  alternates: {
    canonical: "https://www.ftsakkinen.com/yhteystiedot",
    languages: {
      "fi": "https://www.ftsakkinen.com/yhteystiedot",
      "en": "https://www.ptsakkinen.com/contact",
      "x-default": "https://www.ftsakkinen.com/yhteystiedot",
    },
  },
  openGraph: {
    title: "Yhteystiedot & Ajanvaraus | OMT-Fysioterapeutti Janne Säkkinen",
    description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkitiehen tai varaa vastaanottoaika Terveystalolta / Norre Työterveydeltä / Hammasvahdilta.",
    url: "https://www.ftsakkinen.com/yhteystiedot",
    siteName: "FT Säkkinen - OMT-Fysioterapia",
    locale: "fi_FI",
    type: "website",
    images: [{ url: "https://www.ftsakkinen.com/janne-sakkinen.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yhteystiedot & Ajanvaraus | OMT-Fysioterapeutti Janne Säkkinen",
    description: "Ota yhteyttä OMT-fysioterapeutti Janne Säkkitiehen tai varaa vastaanottoaika Terveystalolta / Norre Työterveydeltä / Hammasvahdilta.",
    images: ["https://www.ftsakkinen.com/janne-sakkinen.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-[#000a18] min-h-screen text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
            YHTEYSTIEDOT &amp; <span className="text-[#00AEEF]">AJANVARAUS</span>
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Kysyttävää fysioterapiasta, luennoista tai koulutuksista? Ota yhteyttä alla olevilla tiedoilla.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00AEEF]" />
                Tiedottajanne Oy
              </h2>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span>Lipunkantajantie 21 G, 90670 Oulu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <a href="mailto:tiedottajanne@gmail.com" className="hover:underline text-white font-medium">
                    tiedottajanne@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <a href="tel:+358413274967" className="hover:underline text-white font-medium">
                    041 327 4967
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#000a18] border border-[#0C66B4]/40 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">OMT-Fysioterapeutti Janne Säkkinen</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Kliininen erikoisosaaminen: Purentaelimistön toimintahäiriöt (TMD), leukanivel, kasvojen kiputilat sekä ranka- ja nivelvaivat. Oulun yliopiston hammaslääketieteen kouluttaja vuodesta 2017.
              </p>
            </div>

          </div>
        </div>

        {/* Miten varaan vastaanottoajan? -osio */}
        <AppointmentBookingSection />
      </div>
    </div>
  );
}
