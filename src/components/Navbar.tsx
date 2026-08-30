"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Calendar,
  Globe,
  ChevronDown,
  PlayCircle,
  BookOpen,
  Sparkles,
  Phone,
  MapPin,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  PackageCheck,
  Layers,
  ArrowRight,
  FileText,
  Video,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        mediaRef.current &&
        !mediaRef.current.contains(event.target as Node)
      ) {
        setMediaDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMediaDropdownOpen(false);
  }, [pathname]);

  const serviceLinks = [
    {
      name: "Valmennukset",
      href: "/valmennukset",
      description: "Yksilölliset kotikuntoutusohjelmat ja fysioterapiavalmennukset.",
      icon: Dumbbell,
    },
    {
      name: "Koulutukset & Luennot",
      href: "/koulutukset",
      description: "Purentaelimistön (TMD) ammattilaiskoulutukset ja kurssit.",
      icon: GraduationCap,
    },
    {
      name: "Kyynärpää-apuvaline",
      href: "/kyynarpaa-apuvaline",
      description: "Innovatiivinen kuntoutuslaite tennis- ja golfkyynärpäälle.",
      icon: PackageCheck,
    },
    {
      name: "Kuntoutusvälineet & Gear",
      href: "/kamat",
      description: "Fysioterapeutin testaamat suositusvälineet ja varusteet.",
      icon: Layers,
    },
  ];

  const mediaLinks = [
    {
      name: "Videokirjasto",
      href: "/videot",
      description: "120+ maksutonta opastus- ja kuntoutusvideota eri oireisiin.",
      icon: Video,
    },
    {
      name: "Ilmaiset Kuntoutusoppaat",
      href: "/ilmaisopas",
      description: "Ladattavat PDF-oppaat ja leukanivelen ensiapuvideot.",
      icon: FileText,
    },
    {
      name: "Aihekoosteet (Tietopankki)",
      href: "/#aihekoosteet",
      description: "TMD, niska, selkä ja ergonomia teemakohtaisesti.",
      icon: BookOpen,
    },
  ];

  const isServicesActive = serviceLinks.some((l) => pathname === l.href);
  const isMediaActive = mediaLinks.some((l) => pathname === l.href);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* 1. TOP MINIMALIST UTILITY BAR */}
      <div className="bg-[#00060f] border-b border-[#0C66B4]/30 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] text-slate-400 font-medium">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#67e8f9] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OMT-vastaanotto Oulussa &amp; Kempeleessä
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/ilmaisopas"
              className="hidden sm:inline-flex items-center gap-1 text-[#67e8f9] hover:text-[#38bdf8] font-bold"
            >
              <Sparkles className="w-3 h-3" />
              <span>Ilmaiset PDF-oppaat</span>
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href="https://www.ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              title="International English Site — ptsakkinen.com"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-md bg-[#00122e] border border-[#0C66B4]/50 text-slate-200 hover:text-white hover:border-[#00AEEF] transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#67e8f9]" />
              <span className="font-bold text-xs">EN</span>
              <span className="text-slate-300 font-normal text-xs">/ FI</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVIGATION BAR */}
      <div className="bg-[#000814] border-b border-[#0C66B4]/60 shadow-xl">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000d21] flex items-center justify-center shadow-[0_0_16px_rgba(0,174,239,0.7)] group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(0,174,239,0.9)] transition-all duration-300 p-0.5">
                <img
                  src="/logo-whitebg.png?v=20260730"
                  alt="FT Säkkinen logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-extrabold tracking-wide text-white group-hover:text-[#67e8f9] transition-colors">
                  FT SÄKKINEN<span className="text-[#67e8f9]">.</span>
                </span>
                <span className="text-[10px] text-[#e2e8f0] font-bold uppercase tracking-widest -mt-1 font-sans">
                  OMT-Fysioterapeutti
                </span>
              </div>
            </Link>

            {/* Streamlined Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 px-2">
              <Link
                href="/"
                className={`text-sm font-bold px-3.5 py-2.5 min-h-[44px] flex items-center rounded-xl transition-all duration-200 whitespace-nowrap ${
                  pathname === "/"
                    ? "text-[#67e8f9] bg-[#014489]/60 border border-[#00AEEF]/70 shadow-[0_0_14px_rgba(0,174,239,0.35)]"
                    : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                }`}
              >
                Etusivu
              </Link>

              {/* Palvelut Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setMediaDropdownOpen(false);
                  }}
                  className={`text-sm font-bold px-3.5 py-2.5 min-h-[44px] rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isServicesActive || servicesDropdownOpen
                      ? "text-[#67e8f9] bg-[#014489]/60 border border-[#00AEEF]/70 shadow-[0_0_14px_rgba(0,174,239,0.35)]"
                      : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                  }`}
                >
                  <span>Palvelut &amp; Kuntoutus</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#67e8f9]" : "text-[#67e8f9]"
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-[#000e24]/98 border-2 border-[#00AEEF]/50 p-2.5 shadow-2xl shadow-cyan-950/60 backdrop-blur-2xl space-y-1 z-50">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`p-3 rounded-xl transition-all flex items-start gap-3 group ${
                            active
                              ? "bg-[#014489]/50 border border-[#00AEEF]/50"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-[#014489]/40 text-[#67e8f9] border border-[#00AEEF]/30 group-hover:scale-105 transition-transform shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors leading-snug">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-tight mt-0.5 font-normal">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sisällöt & Media Dropdown */}
              <div className="relative" ref={mediaRef}>
                <button
                  onClick={() => {
                    setMediaDropdownOpen(!mediaDropdownOpen);
                    setServicesDropdownOpen(false);
                  }}
                  className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isMediaActive || mediaDropdownOpen
                      ? "text-[#67e8f9] bg-[#014489]/60 border border-[#00AEEF]/70 shadow-[0_0_14px_rgba(0,174,239,0.35)]"
                      : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                  }`}
                >
                  <span>Sisällöt &amp; Media</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mediaDropdownOpen ? "rotate-180 text-[#67e8f9]" : "text-[#67e8f9]"
                    }`}
                  />
                </button>

                {mediaDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-[#000e24]/98 border-2 border-[#00AEEF]/50 p-2.5 shadow-2xl shadow-cyan-950/60 backdrop-blur-2xl space-y-1 z-50">
                    {mediaLinks.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMediaDropdownOpen(false)}
                          className={`p-3 rounded-xl transition-all flex items-start gap-3 group ${
                            active
                              ? "bg-[#014489]/50 border border-[#00AEEF]/50"
                              : "hover:bg-white/5"
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-[#014489]/40 text-[#67e8f9] border border-[#00AEEF]/30 group-hover:scale-105 transition-transform shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors leading-snug">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400 leading-tight mt-0.5 font-normal">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Tietoa minusta */}
              <Link
                href="/tietoa-minusta"
                className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  pathname === "/tietoa-minusta"
                    ? "text-[#67e8f9] bg-[#014489]/60 border border-[#00AEEF]/70 shadow-[0_0_14px_rgba(0,174,239,0.35)]"
                    : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                }`}
              >
                Tietoa minusta
              </Link>

              {/* Yhteystiedot */}
              <Link
                href="/yhteystiedot"
                className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  pathname === "/yhteystiedot"
                    ? "text-[#67e8f9] bg-[#014489]/60 border border-[#00AEEF]/70 shadow-[0_0_14px_rgba(0,174,239,0.35)]"
                    : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                }`}
              >
                Yhteystiedot
              </Link>

            </nav>

            {/* Desktop Action-Oriented Primary CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/yhteystiedot"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-sm hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#000a18]" />
                <span>Varaa vastaanotto</span>
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Avaa navigointivalikko"
              className="lg:hidden p-2.5 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 text-white hover:text-[#67e8f9] hover:border-[#00AEEF] transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* 3. CLEAN MOBILE OVERLAY DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000a18]/98 backdrop-blur-2xl border-b border-[#0C66B4]/60 px-4 pt-4 pb-8 space-y-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          {/* Primary Quick CTA */}
          <div className="grid grid-cols-1 gap-2.5">
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-center text-sm shadow-[0_0_20px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Varaa vastaanottoaika</span>
            </Link>

            <Link
              href="/ilmaisopas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#00122e] border border-[#0C66B4] text-white font-semibold text-center text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#67e8f9]" />
              <span>Lataa ilmaiset PDF-kuntoutusoppaat</span>
            </Link>
          </div>

          {/* Primary Navigation Links */}
          <div className="space-y-1">
            <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Pääsivut
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                pathname === "/"
                  ? "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/50"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              <span>Etusivu</span>
            </Link>
            <Link
              href="/tietoa-minusta"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                pathname === "/tietoa-minusta"
                  ? "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/50"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              <span>Tietoa minusta</span>
            </Link>
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                pathname === "/yhteystiedot"
                  ? "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/50"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              <span>Yhteystiedot</span>
            </Link>
          </div>

          {/* Palvelut & Kuntoutus */}
          <div className="space-y-1 pt-2 border-t border-[#0C66B4]/30">
            <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Palvelut &amp; Koulutukset
            </div>
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  pathname === item.href
                    ? "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/50"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>{item.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            ))}
          </div>

          {/* Sisällöt & Media */}
          <div className="space-y-1 pt-2 border-t border-[#0C66B4]/30">
            <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Videot &amp; Oppaat
            </div>
            {mediaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  pathname === item.href
                    ? "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/50"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                <span>{item.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            ))}
          </div>

          {/* Footer Utility Switcher */}
          <div className="pt-3 border-t border-[#0C66B4]/30 flex flex-col gap-2">
            <a
              href="https://www.ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl border border-[#0C66B4]/60 bg-[#00122e] text-slate-200 text-center text-xs font-semibold hover:border-[#00AEEF] flex items-center justify-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-[#67e8f9]" />
              <span>Switch to English (ptsakkinen.com)</span>
            </a>
            <Link
              href="/tietosuoja"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-[11px] text-slate-400 hover:text-slate-200 py-1"
            >
              Tietosuoja &amp; Vastuuvapauslauseke
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}

