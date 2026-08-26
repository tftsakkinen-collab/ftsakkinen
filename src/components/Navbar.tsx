"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download, Globe, ChevronRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Etusivu", href: "/" },
    { name: "Tietoa minusta", href: "/tietoa-minusta" },
    { name: "Videokirjasto", href: "/videot" },
    { name: "Valmennukset", href: "/valmennukset" },
    { name: "Kamat", href: "/kamat" },
    { name: "Ilmaisopas", href: "/ilmaisopas" },
    { name: "Koulutukset", href: "/koulutukset" },
    { name: "Kyynärpää-apu", href: "/kyynarpaa-apuvaline" },
    { name: "Yhteystiedot", href: "/yhteystiedot" },
    { name: "Tietosuoja", href: "/tietosuoja" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo with Official Image & Glowing Aura */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000d21] flex items-center justify-center shadow-[0_0_16px_rgba(0,174,239,0.7)] group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(0,174,239,0.9)] transition-all duration-300 p-0.5">
              <img
                src="/logo-whitebg.png?v=20260730"
                alt="FT Säkkinen logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#00AEEF] transition-colors">
                FT SÄKKINEN<span className="text-[#00AEEF]">.</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest -mt-1 font-sans">
                OMT-Fysioterapeutti
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Clean Centered Grid */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-1.5 xl:gap-2.5 px-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-semibold px-2.5 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap relative ${
                    isActive
                      ? "text-[#00AEEF] bg-[#0C66B4]/20 border border-[#00AEEF]/40 shadow-[0_0_12px_rgba(0,174,239,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00AEEF] rounded-full shadow-[0_0_8px_#00AEEF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href="https://www.ptsakkinen.com"
              title="In English — ptsakkinen.com"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#0C66B4]/60 bg-[#00122e]/90 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#0C66B4]/30 hover:shadow-[0_0_15px_rgba(0,174,239,0.25)] transition-all duration-300"
            >
              <Globe className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>EN</span>
              <span className="text-slate-500 font-normal">/ FI</span>
            </a>
            <Link
              href="/ilmaisopas"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-xs sm:text-sm hover:from-white hover:to-slate-100 hover:shadow-[0_0_25px_rgba(0,174,239,0.6)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-glow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Lataa ilmainen opas</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Avaa valikko"
            className="lg:hidden p-2.5 rounded-xl bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-white hover:text-[#00AEEF] hover:border-[#00AEEF] transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000e24]/98 backdrop-blur-2xl border-b border-[#0C66B4]/50 px-4 pt-4 pb-8 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#014489]/50 text-[#00AEEF] border border-[#00AEEF]/60 shadow-[0_0_15px_rgba(0,174,239,0.25)]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "text-[#00AEEF]" : "text-slate-500"}`} />
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 flex flex-col gap-3 border-t border-[#0C66B4]/30">
            <a
              href="https://www.ptsakkinen.com"
              className="w-full py-3 rounded-xl border border-[#0C66B4]/60 bg-[#00122e] text-slate-200 text-center text-sm font-semibold hover:border-[#00AEEF] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Globe className="w-4 h-4 text-[#00AEEF]" />
              <span>Switch to English (ptsakkinen.com)</span>
            </a>
            <Link
              href="/ilmaisopas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-center text-base hover:from-white hover:to-slate-100 transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Lataa ilmainen opas</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
