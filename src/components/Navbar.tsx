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
  Sparkles,
  Dumbbell,
  GraduationCap,
  PackageCheck,
  Layers,
  Video,
  FileText,
  Flame,
  UserCheck,
} from "lucide-react";

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
      name: "Eroon jäykästä leuasta (29 €)",
      href: "/valmennukset",
      description: "17 minuutin täsmävideokurssi & kotihoito-opas.",
      icon: Video,
      highlight: false,
    },
    {
      name: "Puristus Pois (49 € / 149 €)",
      href: "/puristus-pois",
      description: "8 viikon täsmäohjelma leuan ja niskan jännitystiloihin.",
      icon: Flame,
      highlight: true,
    },
    {
      name: "Kyynärpää-apu väline",
      href: "/kyynarpaa-apuvaline",
      description: "Kuntoutuslaite tennis- ja golfkyynärpäälle.",
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
  ];

  const isServicesActive = serviceLinks.some((l) => pathname === l.href);
  const isMediaActive = mediaLinks.some((l) => pathname === l.href);

  return (
    <header className="sticky top-0 z-50 bg-[#000814] border-b border-[#0C66B4] shadow-2xl transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000d21] flex items-center justify-center shadow-[0_0_16px_rgba(0,174,239,0.7)] group-hover:scale-105 transition-all duration-300 p-0.5">
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

          {/* Streamlined Desktop Navigation with 3-Second Blueprint Split */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3 px-2">
            
            {/* 1. Primary Consumer Door: Itsehoito */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setMediaDropdownOpen(false);
                }}
                className={`text-sm font-extrabold px-3.5 py-2 min-h-[44px] rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isServicesActive || servicesDropdownOpen
                    ? "text-[#67e8f9] bg-[#014489] border border-[#00AEEF]"
                    : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#67e8f9]" />
                <span>Itsehoito &amp; Kivunlievitys</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#67e8f9]" : "text-[#67e8f9]"
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#000d21] border-2 border-[#00AEEF] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.95)] space-y-1.5 z-[100]">
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
                            ? "bg-[#014489] border border-[#00AEEF]"
                            : "bg-[#001433] hover:bg-[#014489]/80 border border-[#0C66B4]/50"
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 ${item.highlight ? "bg-[#00AEEF] text-[#000a18]" : "bg-[#014489] text-[#67e8f9] border border-[#00AEEF]/40"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors leading-snug">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-300 leading-tight mt-0.5 font-normal">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Primary B2B Door: Ammattilaisille (Distinct B2B Badge Styling) */}
            <Link
              href="/koulutukset"
              className={`text-sm font-extrabold px-3.5 py-2 min-h-[44px] flex items-center gap-2 rounded-xl transition-all duration-200 whitespace-nowrap ${
                pathname === "/koulutukset"
                  ? "text-amber-300 bg-amber-500/30 border-2 border-amber-400"
                  : "text-amber-200 bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/25 hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Ammattilaisille</span>
              <span className="text-[10px] font-mono font-bold uppercase bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                B2B
              </span>
            </Link>

            {/* Videot & Oppaat Dropdown */}
            <div className="relative" ref={mediaRef}>
              <button
                onClick={() => {
                  setMediaDropdownOpen(!mediaDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className={`text-sm font-bold px-3 py-2 min-h-[44px] rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isMediaActive || mediaDropdownOpen
                    ? "text-[#67e8f9] bg-[#014489] border border-[#00AEEF]"
                    : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
                }`}
              >
                <span>Videot &amp; Oppaat</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mediaDropdownOpen ? "rotate-180 text-[#67e8f9]" : "text-[#67e8f9]"
                  }`}
                />
              </button>

              {mediaDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#000d21] border-2 border-[#00AEEF] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.95)] space-y-1.5 z-[100]">
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
                            ? "bg-[#014489] border border-[#00AEEF]"
                            : "bg-[#001433] hover:bg-[#014489]/80 border border-[#0C66B4]/50"
                        }`}
                      >
                        <div className="p-2 rounded-lg bg-[#014489] text-[#67e8f9] border border-[#00AEEF]/40 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#67e8f9] transition-colors leading-snug">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-300 leading-tight mt-0.5 font-normal">
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
              className={`text-sm font-bold px-3 py-2 min-h-[44px] flex items-center rounded-xl transition-all duration-200 whitespace-nowrap ${
                pathname === "/tietoa-minusta"
                  ? "text-[#67e8f9] bg-[#014489] border border-[#00AEEF]"
                  : "text-slate-100 hover:text-[#67e8f9] hover:bg-white/10"
              }`}
            >
              Tietoa minusta
            </Link>

          </nav>

          {/* Desktop Right CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://www.ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              title="International English Site — ptsakkinen.com"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg bg-[#00122e] border border-[#0C66B4]/60 text-slate-200 hover:text-white hover:border-[#00AEEF] transition-all shadow-sm"
            >
              <Globe className="w-4 h-4 text-[#67e8f9]" />
              <span className="font-bold text-xs">EN</span>
              <span className="text-slate-300 font-normal text-xs">/ FI</span>
            </a>

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
            className="lg:hidden p-2.5 rounded-xl bg-[#00122e] border border-[#0C66B4]/60 text-white hover:text-[#67e8f9] hover:border-[#00AEEF] transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000d21] border-b-2 border-[#00AEEF] px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/puristus-pois"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-extrabold text-[#67e8f9] bg-[#014489] border border-[#00AEEF] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#67e8f9]" />
              <span>Puristus Pois (49 € / 149 €)</span>
            </Link>

            <Link
              href="/koulutukset"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/40 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Ammattilaisille (199 € B2B)</span>
            </Link>

            <div className="pt-2 pb-1 border-t border-[#0C66B4]/30 text-xs font-bold text-[#67e8f9] uppercase tracking-wider px-2">
              Itsehoito &amp; Valmennukset
            </div>
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
              >
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="pt-2 pb-1 border-t border-[#0C66B4]/30 text-xs font-bold text-[#67e8f9] uppercase tracking-wider px-2">
              Videot &amp; Oppaat
            </div>
            {mediaLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
              >
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="pt-2 border-t border-[#0C66B4]/30" />
            <Link
              href="/tietoa-minusta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-base font-bold text-slate-100 hover:bg-white/10 hover:text-[#67e8f9] transition-all"
            >
              Tietoa minusta
            </Link>
            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-base font-bold text-slate-100 hover:bg-white/10 hover:text-[#67e8f9] transition-all"
            >
              Yhteystiedot
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://www.ptsakkinen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl border border-[#0C66B4]/60 bg-[#00122e] text-slate-200 text-center text-sm font-bold hover:border-[#00AEEF] transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Globe className="w-4 h-4 text-[#67e8f9]" />
              <span>International English Site (ptsakkinen.com)</span>
            </a>

            <Link
              href="/yhteystiedot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-center text-base hover:from-white hover:to-slate-100 transition-all shadow-glow flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Calendar className="w-5 h-5 text-[#000a18]" />
              <span>Varaa vastaanotto</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
