"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, Sparkles, FileText, ExternalLink } from "lucide-react";

interface EmailLeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function EmailLeadForm({
  title = "LATAA SUOMENKIELISET KIPUOPPAAT GOOGLE DRIVESTÄ",
  subtitle = "Liity FT Säkkisen suomenkieliselle uutiskirjelistalle. Saat välittömästi pääsyn Google Drive -kansioon, josta löydät OMT-fysioterapeutti Janne Säkkisen laaditut opas-PDF:t.",
}: EmailLeadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedGuide, setSelectedGuide] = useState("purenta-tmd");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const guides = [
    { id: "purenta-tmd", name: "Purentaelimistön & Leukanivelen Koti-opas (PDF)" },
    { id: "niska-huimaus", name: "Yläniskan & Niskahuimauksen Kuntoutusopas (PDF)" },
    { id: "tuki-ja-liikunta", name: "TUKI- ja Liikuntaelimistön Itsehoito-opas (PDF)" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Send lead details to Next.js API route (notifies tiedottajanne@gmail.com)
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          guide: selectedGuide,
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
    <section className="py-20 bg-gradient-to-b from-[#000a18] via-[#014489]/30 to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00AEEF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Suomenkieliset Oppaat &amp; Google Drive</span>
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
              
              {/* Guide Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  1. Valitse ladattava opas:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {guides.map((guide) => (
                    <button
                      key={guide.id}
                      type="button"
                      onClick={() => setSelectedGuide(guide.id)}
                      className={`p-3.5 rounded-xl border text-xs font-semibold text-left transition-all flex items-center gap-2.5 ${
                        selectedGuide === guide.id
                          ? "bg-[#0C66B4]/40 border-[#00AEEF] text-white shadow-glow"
                          : "bg-[#000a18] border-[#0C66B4]/40 text-gray-400 hover:border-gray-500"
                      }`}
                    >
                      <FileText className={`w-4 h-4 shrink-0 ${selectedGuide === guide.id ? "text-[#00AEEF]" : "text-gray-500"}`} />
                      <span>{guide.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
                <span>{isLoading ? "Lähetetään..." : "Tilaa oppaat & Avaa Google Drive -kansio"}</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00AEEF]" /> Ilmoitus tiedottajanne@gmail.com</span>
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
                <h3 className="text-2xl font-bold text-white">Kiitos tilauksesta, {name || "hyvä lukija"}!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Tieto tilauksesta on lähetetty. Voit avata suomenkielisten oppaiden Google Drive -kansion suoraan alta:
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
