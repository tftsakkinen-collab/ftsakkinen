"use client";

import { SITE_CONFIG } from "@/data/config";
import { Star, ExternalLink, MessageSquareHeart, Quote } from "lucide-react";

export default function GoogleReviewsSection() {
  const reviews = [
    {
      author: "Matti K.",
      rating: 5,
      date: "2 kuukautta sitten",
      comment: "Purentalihasten kireys ja leukanivelen naksahdus saatiin rauhoittumaan jo muutaman OMT-ohjauksen jälkeen. Janne on erittäin ammattitaitoinen ja selittää asiat perusteellisesti.",
      badge: "Purentafysioterapia (TMD)",
    },
    {
      author: "Anna P.",
      rating: 5,
      date: "1 kuukausi sitten",
      comment: "Kärsin vuosia niskan ja leuan jännityksestä. Jannen tekemät harjoitteet ja kliininen käsittely toivat välittömän avun. Suosittelen lämpimästi!",
      badge: "Leukanivel & Niska",
    },
    {
      author: "Juha T.",
      rating: 5,
      date: "3 viikkoa sitten",
      comment: "Erittäin korkeatasoista OMT-fysioterapiaa Oulussa. Lääkärin suosituksesta hakeuduin Jannelle ja tulokset puhuvat puolestaan.",
      badge: "OMT-Fysioterapia",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0C66B4]/30 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#67e8f9] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>5.0 / 5.0 ★ Google &amp; Asiakaspalautteet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Asiakkaiden ja koulutettavien <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">kokemuksia</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
              Tutustu aitoihin potilas- ja koulutusasiakaspalautteisiin purentafysioterapiasta, TULE-kuntoutuksesta ja lääketieteellisistä luennoista.
            </p>
          </div>

          <a
            href={SITE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-sm hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.4)] shrink-0 text-center"
          >
            <MessageSquareHeart className="w-5 h-5" />
            <span>Kirjoita Google-arvostelu</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#00122e]/90 border border-[#0C66B4]/50 shadow-xl space-y-4 flex flex-col justify-between hover:border-[#00AEEF] transition-all duration-300 backdrop-blur-md group hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#014489]/40 border border-[#00AEEF]/30 text-[#67e8f9] text-[11px] font-semibold">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic pt-1">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-white group-hover:text-[#67e8f9] transition-colors">{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shortlink Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#00122e]/60 border border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Suora lyhytlinkki potilaille:</span>{" "}
            <code className="text-[#67e8f9] font-mono px-2 py-1 rounded bg-[#000814] border border-[#0C66B4]/40">ftsakkinen.com/arvostelu</code>
          </div>
          <a
            href={SITE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#67e8f9] hover:underline font-semibold flex items-center gap-1.5"
          >
            <span>Avaa Google-arvosteluikkuna</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
