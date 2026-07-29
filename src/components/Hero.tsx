import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, Play, ArrowRight, Award, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-[#000a18] border-b border-[#0C66B4]/30 overflow-hidden">
      {/* Background Hero Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Janne Säkkinen OMT Fysioterapeutti"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000a18] via-[#000a18]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* OMT Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C66B4]/30 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
              <span>{SITE_CONFIG.authorTitle} • OMT Fysioterapeutti</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-normal text-white tracking-wide leading-[1.1]">
              ERIKOISTUNUT <span className="text-[#00AEEF]">PURENTAELIMISTÖN (TMD)</span> JA TUKI- JA LIIKUNTAELIMISTÖN FYSIOTERAPIAAN
            </h1>

            {/* Subtitle / Promise */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Purentalihasten kireyden, leukanivelen vaivojen (TMD) ja niska-selkäkivun asiantunteva hoito Oulussa ja koulutuspalvelut valtakunnallisesti.
            </p>

            {/* Authority Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <GraduationCap className="w-4 h-4 text-[#00AEEF]" />
                <span>Oulun yliopisto (Hammaslääketiede) vuodesta 2017</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000d21] border border-[#0C66B4]/50">
                <Award className="w-4 h-4 text-[#00AEEF]" />
                <span>SOMTY OMT-Erikoistunut</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/ilmaisopas"
                className="px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group"
              >
                <span>Lataa Ilmaiset Oppaat</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/videot"
                className="px-8 py-4 rounded-xl bg-[#000d21] border border-[#0C66B4] text-white font-bold text-base hover:border-[#00AEEF] hover:bg-[#001533] transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-[#00AEEF] fill-[#00AEEF]" />
                <span>Katso Ilmaiset Videot</span>
              </Link>
            </div>

            {/* Trust Micro-Bullet */}
            <div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> Tiedottajanne Oy</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-[#00AEEF]" /> YouTube: @ft_sakkinen</span>
            </div>

          </div>

          {/* Janne Sakkinen Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-b from-[#0C66B4] to-[#000a18] shadow-panel">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#000d21]">
                <Image
                  src="/janne-sakkinen.jpg"
                  alt="Janne Säkkinen OMT Fysioterapeutti"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-transparent to-transparent opacity-80" />

                {/* Floating Bio Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#000d21]/90 backdrop-blur-md border border-[#0C66B4]/60 space-y-1">
                  <h3 className="text-lg font-bold text-white">Janne Säkkinen</h3>
                  <p className="text-xs text-[#00AEEF] font-mono">OMT-Fysioterapeutti &amp; Luennoitsija</p>
                  <p className="text-[11px] text-gray-300 leading-tight">
                    Tiedottajanne Oy • Erityisosaamisena purentaelimistön fysioterapia (TMD) &amp; TULE-vaivat.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
