"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

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
    <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border border-[#0C66B4] shadow-glow space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Lähetä yhteydenottopyyntö
        </h2>
        <p className="text-gray-300 text-sm">
          Täytä alla oleva lomake. Janne vastaa viestiisi mahdollisimman pian.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF] text-white space-y-3">
          <div className="flex items-center gap-3 text-[#00AEEF] font-bold text-lg">
            <CheckCircle2 className="w-6 h-6" />
            <span>Viestisi on lähetetty!</span>
          </div>
          <p className="text-sm text-gray-200">
            Kiitos yhteydenotostasi! Vahvistusviesti on lähetetty sähköpostiisi ({email}).
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs font-semibold text-[#00AEEF] underline hover:text-white"
          >
            Lähetä toinen viesti
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-300 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Nimi
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Matti Meikäläinen"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Sähköposti *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="matti@esimerkki.fi"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Puhelinnumero
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="040 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Aihe
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white focus:outline-none focus:border-[#00AEEF] text-sm"
              >
                <option value="Ajanvaraus & Fysioterapia">Ajanvaraus &amp; Fysioterapia</option>
                <option value="Koulutukset & Luennot">Koulutukset &amp; Luennot</option>
                <option value="Ergonomiakonsultointi">Ergonomiakonsultointi</option>
                <option value="Muu kysymys">Muu kysymys</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              Viesti *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Kirjoita viestisi tähän..."
              className="w-full px-4 py-3 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
