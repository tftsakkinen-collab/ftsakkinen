"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Ajanvaraus & Fysioterapia");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setErrorMessage("Täytä vähintään sähköposti ja viesti.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Viestin lähetys epäonnistui. Yritä uudelleen.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Yhteysvirhe. Tarkista verkkoyhteytesi ja yritä uudelleen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 shadow-2xl shadow-cyan-950/30 space-y-6 backdrop-blur-md">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/40 text-[#67e8f9] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Suora Yhteydenotto</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
          Lähetä yhteydenottopyyntö
        </h2>
        <p className="text-slate-300 text-sm font-normal">
          Täytä alla oleva lomake. Janne vastaa viestiisi mahdollisimman pian.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#00AEEF]/10 border-2 border-[#00AEEF] text-white space-y-3 shadow-glow-sm">
          <div className="flex items-center gap-3 text-[#67e8f9] font-bold text-lg">
            <CheckCircle2 className="w-6 h-6" />
            <span>Viestisi on lähetetty onnistuneesti!</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            Kiitos yhteydenotostasi! Vahvistusviesti on lähetetty sähköpostiisi ({email}). Janne palaa asiaan pian.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-bold text-[#67e8f9] underline hover:text-white cursor-pointer"
          >
            Lähetä toinen viesti →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-300 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Nimi
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Matti Meikäläinen"
                className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Sähköposti *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="matti@esimerkki.fi"
                className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Puhelinnumero
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="040 123 4567"
                className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Aihe
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm transition-all"
              >
                <option value="Ajanvaraus & Fysioterapia">Ajanvaraus &amp; Fysioterapia</option>
                <option value="Koulutukset & Luennot">Koulutukset &amp; Luennot</option>
                <option value="Ergonomiakonsultointi">Ergonomiakonsultointi</option>
                <option value="Muu kysymys">Muu kysymys</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Viesti *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Kirjoita viestisi tähän..."
              className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] text-sm transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Lähetetään...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Lähetä viesti</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
