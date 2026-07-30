"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

interface EmailLeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function EmailLeadForm({
  title = "LIITY SÄHKÖPOSTILISTALLE & SAAT ILMAISET OPPAAT",
  subtitle = "Syötä etunimesi ja sähköpostiosoitteesi alla olevaan lomakkeeseen. Saat heti pääsyn Google Drive -kansioon, johon OMT-fysioterapeutti Janne Säkkinen lisää uudet opas-PDF:t sitä mukaa kun uusia videoita ja materiaaleja julkaistaan.",
}: EmailLeadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          locale: "fi",
        }),
      });
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="ilmaisopas-form" className="py-20 bg-gradient-to-b from-[#000a18] via-[#014489]/30 to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00AEEF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-1">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.6)] bg-white p-1.5">
              <img src="/logo.jpg" alt="FT Säkkinen logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Sähköpostilista &amp; Google Drive -Kansio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide">
            {title}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Lead Capture Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-panel space-y-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Etunimi *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Matti"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Sähköpostiosoite *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="matti@esimerkki.fi"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4] text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Download className="w-5 h-5" />
                <span>{isLoading ? "Lähetetään..." : "Liity listalle & Avaa Google Drive -kansio"}</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00AEEF]" /> Tiedot sähköpostiisi</span>
                <span>•</span>
                <span>Ei roskapostia</span>
              </div>
            </form>
          ) : (
            /* Success View with Direct Google Drive Access */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF] text-[#00AEEF] flex items-center justify-center mx-auto shadow-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Kiitos liittymisestä, {name || "hyvä lukija"}!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Tieto on lähetetty. Voit avata suomenkielisten oppaiden Google Drive -kansion suoraan alla olevasta painikkeesta:
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="[PLACEHOLDER: GOOGLE_DRIVE_FI_FOLDER_URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Avaa Suomenkieliset Oppaat Google Drivessä</span>
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
