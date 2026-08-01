"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, PackageCheck, Repeat, Sliders } from "lucide-react";

interface ElbowDeviceInquiryFormProps {
  title?: string;
  subtitle?: string;
}

export default function ElbowDeviceInquiryForm({
  title = "TENNIS- JA GOLFKYYNÄRPÄÄN KUNTOUTUSAPUVÄLINE",
  subtitle = "Jos haluat itsellesi videoilla esiintyvän vastaavan kyynärvarsitreenarin, jätä yhteystietosi alla olevalla lomakkeella — järjestän sen jälkeen toimituksen sinulle.",
}: ElbowDeviceInquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("tenniskyynarpaa");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          condition,
          message,
          type: "deviceInquiry",
          guide: "Kyynärvarsitreenarin hankintatilaus/kysely",
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
    <section id="kyynarpaa-apuvaline-lomake" className="py-16 bg-gradient-to-b from-[#000a18] via-[#014489]/20 to-[#000a18] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <PackageCheck className="w-4 h-4 text-[#00AEEF]" />
            <span>Kyynärvarsitreenari • Hankintalomake</span>
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
                  Nimi *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Etunimi ja Sukunimi"
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
                  placeholder="sinun.sahkoposti@esimerkki.fi"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Puhelinnumero (toimitusta varten)
                </label>
                <input
                  type="tel"
                  placeholder="040 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Vaiva / Käyttökohde
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
                >
                  <option value="tenniskyynarpaa">Tenniskyynärpää (ulkosivun kiertokipu)</option>
                  <option value="golfkyynarpaa">Golfkyynärpää (sisäsivun kiertokipu)</option>
                  <option value="molemmat">Molemmat / Ennaltaehkäisy</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Toimitusosoite tai lisätiedot (valinnainen)
              </label>
              <textarea
                rows={3}
                placeholder="Voit ilmoittaa toimitusosoitteesi tai kysyä apuvälineen käytöstä..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-[#000a18] border border-[#0C66B4]/60 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00AEEF] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-8 rounded-xl bg-[#00AEEF] text-[#000a18] font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-3 group cursor-pointer"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>{isLoading ? "Lähetetään..." : "Jätä yhteystiedot toimitusta varten"}</span>
            </button>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                Tiedot käsitellään luottamuksellisesti
              </span>
              <span>•</span>
              <span>Tiedottajanne Oy</span>
            </div>
          </form>
        ) : (
          <div className="p-8 sm:p-10 rounded-3xl bg-[#000d21] border-2 border-[#00AEEF] space-y-6 text-center shadow-glow">
            <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto border border-[#00AEEF]/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Kiitos tilauksestasi / tiedustelustasi!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Yhteystietosi on vastaanotettu. Otamme sinuun yhteyttä sähköpostitse osoitteeseen <strong className="text-white">{email}</strong> ja järjestämme apuvälineen toimituksen sinulle.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
