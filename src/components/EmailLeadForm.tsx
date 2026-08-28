"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Play, Video, Gift, FolderDown, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface EmailLeadFormProps {
  title?: string;
  subtitle?: string;
}

export default function EmailLeadForm({
  title = "LIITY SÄHKÖPOSTILISTALLE & SAAT VÄLITTÖMÄSTI 4 ERIKOISVIDEO-OPASTA",
  subtitle = "Syötä etunimesi ja sähköpostiosoitteesi. Saat heti VÄLITTÖMÄN pääsyn neljään exklusiiviseen video-oppaaseen sekä Janne Säkkisen ilmaisille kuntoutusmateriaaleille.",
}: EmailLeadFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bonusVideos = [
    {
      id: "P1lZdpluD64",
      title: "1. Leukanivelen Ensiapuopas",
      desc: "Akuutti fysioterapeuttinen apu leukanivelen naksumiseen, jännitykseen ja lukkiutumiseen.",
      youtubeUrl: "https://www.youtube.com/watch?v=P1lZdpluD64",
      embedUrl: "https://www.youtube-nocookie.com/embed/P1lZdpluD64",
      thumbnail: "https://img.youtube.com/vi/P1lZdpluD64/mqdefault.jpg",
      badge: "Akuutti Ensiapu & Naksuminen",
    },
    {
      id: "exfFQ0iRLiI",
      title: "2. Vaikean Vamman Tutkiminen ja Hoito",
      desc: "Näin OMT-fysioterapeutti tutkii ja hoitaa perusteellisesti haastavia tuki- ja liikuntaelimistön vammoja.",
      youtubeUrl: "https://www.youtube.com/watch?v=exfFQ0iRLiI",
      embedUrl: "https://www.youtube-nocookie.com/embed/exfFQ0iRLiI",
      thumbnail: "https://img.youtube.com/vi/exfFQ0iRLiI/mqdefault.jpg",
      badge: "Kliininen OMT-Tutkimus",
    },
    {
      id: "ZFTSdUdEkC0",
      title: "3. Parasympaattisen Hermoston Aktivoiminen",
      desc: "Täsmälliset ohjeet kehon ja hermoston rauhoittamiseen sekä kivun säätelyyn.",
      youtubeUrl: "https://www.youtube.com/watch?v=ZFTSdUdEkC0",
      embedUrl: "https://www.youtube-nocookie.com/embed/ZFTSdUdEkC0",
      thumbnail: "https://img.youtube.com/vi/ZFTSdUdEkC0/mqdefault.jpg",
      badge: "Hermoston Rauhoitus & Kipu",
    },
    {
      id: "JyducxjS1b8",
      title: "4. Yläniskan Venyttelyohje",
      desc: "Kliiniset fysioterapiaohjeet yläniskan kireyksien lievittämiseen ja niskan liikkuvuuden parantamiseen.",
      youtubeUrl: "https://www.youtube.com/watch?v=JyducxjS1b8",
      embedUrl: "https://www.youtube-nocookie.com/embed/JyducxjS1b8",
      thumbnail: "https://img.youtube.com/vi/JyducxjS1b8/mqdefault.jpg",
      badge: "Yläniska & Niskakipu",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          locale: "fi",
          type: "videoBonusLead",
          videos: bonusVideos.map(v => ({ title: v.title, url: v.youtubeUrl })),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.error || "Virhe ilmoittautumisen lähetyksessä. Yritä uudelleen.");
      }
    } catch (err) {
      console.error("API error:", err);
      alert("Yhteysvirhe ilmoittautumista lähetettäessä. Yritä uudelleen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ilmaisopas-form" className="py-20 bg-gradient-to-b from-[#000814] via-[#001433]/70 to-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#00AEEF]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.6)] bg-[#000d21] p-1.5 flex items-center justify-center">
              <img src="/logo-whitebg.png" alt="FT Säkkinen logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#00AEEF]" />
            <span>Maksuton Liidipalkkio &amp; Erikoisvideot</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto break-words">
            NÄMÄ 4 ERIKOISVIDEO-OPASTA AUKEEVAT HETI KUN LIITYT LISTALLE:
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Syötä etunimesi ja sähköpostiosoitteesi alla olevaan lomakkeeseen. Saat heti VÄLITTÖMÄN pääsyn näihin neljään erikoisvideoon suoraan ruudullesi &amp; sähköpostiisi, sekä Janne Säkkisen ladattaviin PDF-kuntoutusmateriaaleihin!
          </p>
        </div>

        {!isSubmitted ? (
          <div className="space-y-10">
            {/* Showcase Cards with Real Thumbnails & Lock Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonusVideos.map((video, idx) => (
                <div key={idx} className="rounded-3xl bg-[#00122e]/95 border-2 border-[#0C66B4]/50 overflow-hidden space-y-4 shadow-xl hover:border-[#00AEEF] transition-all duration-300 group flex flex-col justify-between backdrop-blur-md hover:-translate-y-1">
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-black/40 to-transparent" />
                      
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#000814]/90 border border-[#00AEEF]/50 text-[#00AEEF] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                        {video.badge}
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white font-medium bg-[#000814]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#0C66B4]/40">
                        <span className="flex items-center gap-1.5 text-[#00AEEF] font-bold text-[11px]">
                          <Play className="w-3.5 h-3.5 fill-[#00AEEF]" />
                          Erikoisvideo #{idx + 1}
                        </span>
                        <span className="text-[10px] text-slate-300 font-mono">🔒 Aukeaa liittymällä</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#00AEEF] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {video.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="w-full py-2 px-3 rounded-xl bg-[#014489]/25 border border-[#0C66B4]/40 text-center text-[11px] text-[#00AEEF] font-semibold">
                      ✔ Saatavilla heti liittymisen jälkeen
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form Box */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#00122e]/95 border-2 border-[#00AEEF] space-y-6 shadow-[0_0_50px_rgba(0,174,239,0.3)] backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-[#00AEEF]" />
                <span>Liity sähköpostilistalle – Avaa 4 erikoisvideota &amp; Drive-oppaat</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Etunimi *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Matti"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Sähköpostiosoite *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="matti@esimerkki.fi"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-3 group cursor-pointer"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{isLoading ? "Käsitellään..." : "Liity listalle & Avaa 4 erikoisvideota (Välitön pääsy)"}</span>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                  Suorat videolinkit sähköpostiisi
                </span>
                <span>•</span>
                <span>100 % Ilmainen</span>
                <span>•</span>
                <span>Ei roskapostia</span>
              </div>
            </form>
          </div>
        ) : (
          /* Instant Unlock View */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#00122e] border-2 border-[#00AEEF] space-y-10 shadow-[0_0_50px_rgba(0,174,239,0.3)]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center mx-auto border border-[#00AEEF]/50 shadow-[0_0_20px_rgba(0,174,239,0.5)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Kiitos liittymisestä{name ? `, ${name}` : ""}!
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Sähköpostiosoitteesi <strong className="text-[#00AEEF]">{email}</strong> on lisätty listalle. Videolinkit on lähetetty sähköpostiisi, ja voit lisäksi katsoa kaikki 4 erikoisvideota tästä suoraan:
              </p>
            </div>

            {/* Embedded 4 Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonusVideos.map((video, idx) => (
                <div key={idx} className="rounded-2xl bg-[#000814] border border-[#0C66B4]/60 overflow-hidden space-y-3 flex flex-col justify-between p-4 shadow-panel">
                  <div className="space-y-3">
                    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black relative border border-[#0C66B4]/30">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wider block">
                        Osa {idx + 1} / 4
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug mt-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                  </div>

                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#014489]/40 border border-[#0C66B4] text-white font-semibold text-xs hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all w-full text-center mt-2"
                  >
                    <span>Katso YouTubessa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* Extra Google Drive Link */}
            <div className="pt-6 border-t border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <FolderDown className="w-6 h-6 text-[#00AEEF] shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Haluatko myös ladattavat PDF-kuntoutusoppaat?</h4>
                  <p className="text-xs text-slate-300">Google Drive -kansiosta löydät kaikki Janne Säkkisen kirjalliset ohjeet.</p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.googleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs sm:text-sm hover:from-white hover:to-slate-100 transition-all shadow-glow-sm"
              >
                <span>Avaa Google Drive -oppaat</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

