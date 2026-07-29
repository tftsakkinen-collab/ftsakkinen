import { SITE_CONFIG } from "@/data/config";
import { Mail, Phone, MapPin, Send, ShieldCheck, Stethoscope } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-[#000a18] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Yhteystiedot &amp; Vastaanotto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display text-white tracking-wide">
            OTAS YHTEYTTÄ TAI <span className="text-[#00AEEF]">JÄTÄ YHTEYDENOTTOPYYNTÖ</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg">
            Onko sinulla kysyttävää oppaista, koulutuksista tai haluatko jättää yhteydenottopyynnön?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] space-y-6 shadow-panel">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-[#00AEEF]" />
                Yhteystiedot
              </h2>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Toimipiste &amp; Osoite</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.clinicAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Sähköposti</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Puhelin</span>
                    <span className="text-xs font-mono text-[#00AEEF]">{SITE_CONFIG.contactPhone}</span>
                  </div>
                </div>
              </div>

              {/* Single Authority Proof Rule */}
              <div className="pt-4 border-t border-[#0C66B4]/30 text-xs text-gray-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                <span>{SITE_CONFIG.authorityProofs.teaching}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form className="p-8 rounded-3xl bg-[#000d21] border border-[#0C66B4] space-y-6 shadow-panel">
              <h2 className="text-2xl font-bold text-white">Lähetä viesti</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Nimi *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Etunimi ja sukunimi"
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Sähköposti *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nimi@esimerkki.fi"
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Aihe / Aihealue
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white focus:outline-none focus:border-[#00AEEF] text-sm">
                    <option>Kipuoppaat &amp; Materiaalit</option>
                    <option>Koulutukset &amp; Luennot</option>
                    <option>Muu yhteydenotto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Viesti *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Kirjoita viestisi tähän..."
                    className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Lähetä viesti</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
