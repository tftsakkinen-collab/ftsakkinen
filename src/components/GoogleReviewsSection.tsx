"use client";

import { SITE_CONFIG } from "@/data/config";
import { Star, ExternalLink, MessageSquareHeart } from "lucide-react";

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
      badge: "Leukanivel &amp; Niska",
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
    <section className="py-16 bg-[#000a18] border-b border-[#0C66B4]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0C66B4]/30 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 fill-current text-[#00AEEF]" />
              <span>5.0 / 5.0 ★ Google &amp; Asiakaspalautteet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-normal">
              Asiakkaiden ja koulutettavien <span className="text-[#00AEEF]">kokemuksia</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl">
              Tutustu aitoihin potilas- ja koulutusasiakaspalautteisiin purentafysioterapiasta, TULE-kuntoutuksesta ja lääketieteellisistä luennoista.
            </p>
          </div>

          <a
            href={SITE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow shrink-0 text-center"
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
              className="p-6 rounded-3xl bg-[#000d21] border border-[#0C66B4]/50 shadow-panel space-y-4 flex flex-col justify-between hover:border-[#00AEEF]/60 transition-all"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00AEEF] text-[#00AEEF]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0C66B4]/30 text-[#00AEEF] text-[11px] font-mono font-semibold">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed italic">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#0C66B4]/30 flex items-center justify-between text-xs text-gray-400">
                <span className="font-bold text-white">{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shortlink Banner */}
        <div className="p-4 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div>
            <span className="font-bold text-white">Suora lyhytlinkki potilaille:</span>{" "}
            <code className="text-[#00AEEF] font-mono">ftsakkinen.com/arvostelu</code>
          </div>
          <a
            href={SITE_CONFIG.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00AEEF] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Avaa Google-arvosteluikkuna</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
