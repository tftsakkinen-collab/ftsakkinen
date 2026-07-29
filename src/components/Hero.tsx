import Link from "next/link";
import { PlayCircle, ArrowRight, CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000a18] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#0C66B4]/30">
      {/* Background Graphic Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#0C66B4]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & CTAs Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Identity Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-[#00AEEF] text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
              <span>OMT-fysioterapeutti Janne Säkkinen</span>
            </div>

            {/* Promise Headline (Luckiest Guy max 6 words, no question mark) */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-display tracking-tight text-white leading-[1.1]">
              VAPAUTA KEHOSI KIVUSTA JA <span className="text-[#00AEEF] glow-text">LIIKU VARMUUDELLA</span>
            </h1>

            {/* One-sentence Identity statement */}
            <p className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Autan tuki- ja liikuntaelimistön kivuista kärsiviä ihmisiä löytämään kestävän helpotuksen tutkittuun tietoon ja kliiniseen kokemukseen pohjautuvilla harjoitteilla.
            </p>

            {/* Single Authority Proof Line per section rule */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
              <span>{SITE_CONFIG.authorityProofs.experience} kliinisessä työssä</span>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/videot"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0C66B4] border border-[#00AEEF]/40 text-white font-bold text-base hover:bg-[#00AEEF] hover:text-black transition-all shadow-panel flex items-center justify-center gap-3 group"
              >
                <PlayCircle className="w-5 h-5 text-[#00AEEF] group-hover:text-black transition-colors" />
                Katso videot
              </Link>
              <Link
                href="/valmennukset"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-3"
              >
                Katso valmennukset
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>

          {/* Hero Portrait Photo Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#0C66B4] shadow-glow group">
              <img
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen OMT-fysioterapeutti"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#000d21]/90 border border-[#00AEEF]/50 backdrop-blur-md space-y-1">
                <p className="font-bold text-white text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00AEEF]" />
                  Janne Säkkinen
                </p>
                <p className="text-xs text-gray-300">
                  OMT-fysioterapeutti & Terveystieteiden asiantuntija
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
