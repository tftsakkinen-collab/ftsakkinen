"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

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
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 bg-[#000d21] border border-[#00AEEF]/50 rounded-2xl p-5 shadow-glow backdrop-blur-lg flex flex-col gap-3 text-xs text-gray-300">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 font-bold text-[#00AEEF] text-sm">
          <Cookie className="w-4 h-4" />
          <span>Evästeet & Tietosuoja</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Sulje"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="leading-relaxed">
        Käytämme sivustolla vain välttämättömiä evästeitä ja anonyymia kävijätilastointia käyttökokemuksen varmistamiseksi (EU GDPR -yhteensopiva).
      </p>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-lg bg-[#00AEEF] text-black font-bold hover:bg-[#33C2F5] transition-all shadow-glow text-xs"
        >
          Hyväksy evästeet
        </button>
      </div>
    </div>
  );
}
