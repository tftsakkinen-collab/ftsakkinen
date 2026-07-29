"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Etusivu", href: "/" },
    { name: "Videokirjasto", href: "/videot" },
    { name: "Ilmaisopas", href: "/ilmaisopas" },
    { name: "Koulutukset & Kokemus", href: "/koulutukset" },
    { name: "Yhteystiedot", href: "/yhteystiedot" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#000a18]/90 backdrop-blur-md border-b border-[#0C66B4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Official Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#00AEEF]/60 bg-black flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="FT Säkkinen logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-wide text-white group-hover:text-[#00AEEF] transition-colors">
                FT SÄKKINEN<span className="text-[#00AEEF]">.</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest -mt-1 font-sans">
                OMT-Fysioterapeutti
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#00AEEF] relative py-1 ${
                    isActive ? "text-[#00AEEF]" : "text-gray-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/ilmaisopas"
              className="px-5 py-2.5 rounded-lg bg-[#00AEEF] text-black font-semibold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Lataa ilmainen opas
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Avaa valikko"
            className="md:hidden p-2 rounded-lg bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-white hover:text-[#00AEEF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000d21] border-b border-[#0C66B4]/40 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#0C66B4]/30 text-[#00AEEF] border-l-4 border-[#00AEEF]"
                      : "text-gray-300 hover:bg-[#0C66B4]/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              href="/ilmaisopas"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-[#00AEEF] text-black font-semibold text-center text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Lataa ilmainen opas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
