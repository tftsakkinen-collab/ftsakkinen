"use client";

import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 bg-[#00122e]/95 border-2 border-[#00AEEF]/60 rounded-3xl p-6 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl flex flex-col gap-3 text-xs text-slate-300">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 font-bold text-[#00AEEF] text-sm">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-[#00AEEF] bg-[#000814] p-0.5 shrink-0">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <span>Evästeet &amp; Tietosuoja</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Sulje"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="leading-relaxed text-slate-300 font-normal">
        Käytämme sivustolla vain välttämättömiä evästeitä ja anonyymia kävijätilastointia käyttökokemuksen varmistamiseksi (EU GDPR -yhteensopiva).
      </p>

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold hover:from-white hover:to-slate-100 transition-all shadow-[0_0_15px_rgba(0,174,239,0.4)] text-xs cursor-pointer"
        >
          Hyväksy evästeet
        </button>
      </div>
    </div>
  );
}
