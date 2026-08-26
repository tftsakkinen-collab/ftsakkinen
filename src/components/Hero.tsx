import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/data/config";
import { ShieldCheck, Play, ArrowRight, Award, GraduationCap, CheckCircle2, Eye, Users, Video, Sparkles, Star } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      label: "Yli 1,1M+ Katselua",
      sublabel: "Katselukertaa YouTubessa",
      icon: Eye,
    },
    {
      label: "5 380+ Tilaajaa",
      sublabel: "Oppimassa kanavalla",
      icon: Users,
    },
    {
      label: `${SITE_CONFIG.totalVideosCount} Opetusvideota`,
      sublabel: "Maksuttomat oppaat",
      icon: Video,
    },
    {
      label: "20+ v. Kliininen Kokemus",
      sublabel: "OMT & TMD -erikoisosaaja",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-[#000814] border-b border-[#0C66B4]/30 overflow-hidden">
      {/* Background Hero Ambient Glow & Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Janne Säkkinen OMT Fysioterapeutti"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000814] via-[#000814]/95 to-[#000814]/80" />
      </div>

      {/* Radial Light Flares */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#00AEEF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#014489]/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Clean Authoritative Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,174,239,0.2)]">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span>Terveystieteiden B.Sc. • Laillistettu OMT-Fysioterapeutti</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] break-words">
              Erikoistunut <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-[#38bdf8] to-white">purentaelimistön (TMD)</span> ja tuki- ja liikuntaelimistön fysioterapiaan
            </h1>

            {/* Subtitle / Promise */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Purentalihasten kireyden, leukanivelen vaivojen (TMD) ja niska-selkäkivun asiantunteva hoito Oulussa sekä koulutuspalvelut valtakunnallisesti.
            </p>

            {/* Authority Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Valvira / Terhikki -rekisteröity OMT-fysioterapeutti</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 shadow-sm">
                <GraduationCap className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Oulun yliopiston opettaja (Hammaslääketiede 2017–)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 shadow-sm">
                <Award className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>SOMTY OMT -erikoistumiskoulutus</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/ilmaisopas"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2 group text-center cursor-pointer"
              >
                <span>Lataa ilmaiset oppaat</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/videot"
                className="px-8 py-4 rounded-xl bg-[#00122e] border border-[#0C66B4] text-white font-bold text-base hover:border-[#00AEEF] hover:bg-[#014489]/30 hover:shadow-[0_0_20px_rgba(0,174,239,0.25)] transition-all duration-300 flex items-center justify-center gap-2 text-center"
              >
                <Play className="w-4 h-4 text-[#00AEEF] fill-[#00AEEF]" />
                <span>Katso {SITE_CONFIG.totalVideosCount} ilmaista videota</span>
              </Link>
            </div>

            {/* Trust Micro-Bullet */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Valvira / Terhikki -rekisteröity</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Tiedottajanne Oy</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> YouTube: @ft_sakkinen</span>
            </div>

          </div>

          {/* Janne Sakkinen Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl p-2 bg-gradient-to-b from-[#00AEEF]/40 via-[#014489]/40 to-[#000814] shadow-2xl shadow-cyan-950/50 group border border-[#00AEEF]/30">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#000d21]">
                <Image
                  src="/janne-sakkinen.jpg"
                  alt="Janne Säkkinen OMT Fysioterapeutti"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-slate-950/20 to-transparent opacity-90" />

                {/* Floating Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000e24]/90 backdrop-blur-md border border-[#00AEEF]/40 text-[#00AEEF] text-[11px] font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Vastaanotto Oulussa &amp; Etänä</span>
                  </div>

                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#000e24]/90 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-bold shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Floating Bottom Bio Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-4 rounded-2xl bg-[#000e24]/95 backdrop-blur-xl border border-[#0C66B4]/70 space-y-1 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">Janne Säkkinen</h3>
                    <span className="text-[10px] uppercase font-bold text-[#00AEEF] bg-[#014489]/40 border border-[#00AEEF]/30 px-2 py-0.5 rounded-md">OMT</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#00AEEF] font-semibold">OMT-Fysioterapeutti &amp; Luennoitsija</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-tight font-normal">
                    Tiedottajanne Oy • Erityisosaamisena purentaelimistön fysioterapia (TMD) &amp; TULE-vaivat.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. USKOTTAVUUSLUVUT (CREDIBILITY STATS BAR) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-3xl bg-[#00122e] border-2 border-[#0C66B4]/60 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-2xl bg-[#000814]/60 border border-[#0C66B4]/40 hover:border-[#00AEEF]/50 transition-all duration-300 min-w-0 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#014489]/40 border border-[#00AEEF]/40 text-[#00AEEF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,174,239,0.4)] transition-all">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-base md:text-lg font-extrabold text-white leading-tight font-display break-words group-hover:text-[#00AEEF] transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 leading-tight mt-0.5 font-medium">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
