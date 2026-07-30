"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";

interface EmailLeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function EmailLeadForm({
  title = "LIITY SÄHKÖPOSTILISTALLE & SAAT ILMAISET LISÄOHJEET",
  subtitle = "Syötä etunimesi ja sähköpostiosoitteesi alla olevaan lomakkeeseen. Saat heti pääsyn ilmaisiin lisäohjeisiin, kuntoutusmateriaaleihin ja uusiin opas-PDF-tiedostoihin siten kuin niitä julkaistaan.",
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
              <img src="/logo-whitebg.png" alt="FT Säkkinen logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Sähköpostilista &amp; Ilmaiset Lisäohjeet</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display text-white tracking-wide leading-tight">
            {title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#000d21]/90 border border-[#0C66B4]/60 space-y-6 shadow-glow backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Etunimi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Matti"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Sähköpostiosoite *
                </label>
                <input
                  type="email"
                  required
                  placeholder="matti@esimerkki.fi"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-8 rounded-xl bg-[#00AEEF] text-[#000a18] font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-3 group"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{isLoading ? "Käsitellään..." : "Liity listalle & Avaa ilmaiset lisäohjeet"}</span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Tiedot sähköpostiisi
              </span>
              <span>•</span>
              <span>Ei roskapostia</span>
            </div>
          </form>
        ) : (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border-2 border-[#00AEEF] space-y-6 text-center shadow-glow">
            <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto border border-[#00AEEF]/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Kiitos liittymisestä!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Sähköpostiosoitteesi <strong className="text-white">{email}</strong> on nyt lisätty listalle. Saat vahvistuksen ja linkin ilmaisiin lisäohjeisiin ja materiaaleihin sähköpostiisi.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0C66B4]/40">
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00AEEF] text-[#000a18] font-bold text-sm hover:bg-white transition-all shadow-glow"
              >
                <span>Siirry ilmaisiin materiaaleihin</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
