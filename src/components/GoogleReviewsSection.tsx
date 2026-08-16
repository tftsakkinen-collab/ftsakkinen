"use client";

import { Star, MessageSquare, ExternalLink, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface Review {
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    author: "Työterveysasiakas (Kenttäasentaja)",
    role: "Alaselkä- ja liikehoitopotilas",
    rating: 5,
    text: "Kävin vastaanotollasi alaselkäkipujen vuoksi. Opin ohjauksessasi oikean nostotavan, eikä alaselkäoireilua ole sen jälkeen juuri ollut. Jos oireita on ajoittain tuntunut, olen tehnyt fysioterapeutin voimisteluliikkeitä ja saanut niistä heti avun. Kiitos työpäivän helpottamisesta!",
    date: "2026-07"
  },
  {
    author: "Fysioterapeutti / Koulutusosallistuja",
    role: "2 vrk TMD-koulutettava",
    rating: 5,
    text: "Oli kyllä huippu kurssi, ihan innoissani pääsen nyt testaamaan hoitoa potilaille. Juuri tälläistä olen toivonutkin, että saan käytännön työkaluja! Verbaalisesta puolesta bonuspisteet Jannelle, selkeä ja kansanomainen tapa opettaa!",
    date: "2026-06"
  },
  {
    author: "TMD- ja purentapotilas",
    role: "Oulu",
    rating: 5,
    text: "Olin kärsinyt leukanivelen naksumisesta ja aamuisesta leuan kireydestä vuosia. Jannen OMT-fysioterapialla ja täsmällisillä leukanivelharjoitteilla leuan kireys ja säryt helpottivat täysin jo kolmessa viikossa.",
    date: "2026-05"
  },
  {
    author: "Valmistuva hammaslääkäri",
    role: "Oulun yliopisto",
    rating: 5,
    text: "Mukavan energinen luennoitsija ja oli helppo keskittyä, kun ei ollut tylsää tasapaksua settiä! Upea setti, todella mielenkiintoinen. Olet erinomainen ja huumorintajuinen puhuja!",
    date: "2026-04"
  }
];

export default function GoogleReviewsSection() {
  const googleReviewUrl = SITE_CONFIG.googleReviewUrl;

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
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#000d21] border border-[#00AEEF] text-[#00AEEF] font-bold text-xs uppercase tracking-wider hover:bg-[#00AEEF] hover:text-black transition-all shadow-glow self-start md:self-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Jätä Google-arvostelu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Rating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 flex flex-col justify-between space-y-4 hover:border-[#00AEEF]/60 transition-all shadow-panel"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#00AEEF]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#00AEEF]" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#0C66B4]/30 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white flex items-center gap-1">
                    <span>{r.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                  </div>
                  <div className="text-[11px] text-gray-400">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
