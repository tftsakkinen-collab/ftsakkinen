import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Youtube, Globe, ShieldAlert, Mail, Phone, MapPin, Instagram, Video, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";

export default function Footer() {
  return (
    <footer className="bg-[#000814] border-t border-[#0C66B4]/30 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#014489]/10 via-transparent to-transparent pointer-events-none" />

      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Identity (Col 5) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#00AEEF] bg-[#000d21] p-1 flex items-center justify-center shadow-[0_0_15px_rgba(0,174,239,0.5)] group-hover:scale-105 transition-all">
                <img src="/logo-whitebg.png" alt="FT Säkkinen logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white tracking-wide group-hover:text-[#67e8f9] transition-colors">
                  FT SÄKKINEN<span className="text-[#67e8f9]">.</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest -mt-1 font-sans">
                  OMT-Fysioterapeutti
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              OMT-Fysioterapeutti Janne Säkkinen — Tieteelliseen näyttöön pohjautuva kuntoutus tuki- ja liikuntaelimistön vaivoihin, purentaelimistön häiriöihin (TMD) ja työergonomiaan.
            </p>
            
            {/* Company Info Glass Card */}
            <div className="p-4 rounded-2xl bg-[#00122e]/80 border border-[#0C66B4]/40 text-xs space-y-2 text-slate-300 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-bold text-white text-sm">{SITE_CONFIG.companyName}</p>
                <span className="text-[10px] font-mono text-[#67e8f9] px-2 py-0.5 rounded bg-[#014489]/40 border border-[#00AEEF]/30">Y: 3305813-7</span>
              </div>
              <p className="text-[11px] text-[#67e8f9] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                Valvira / Terhikki -rekisteröity OMT-fysioterapeutti
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#67e8f9] shrink-0" />
                <span>{SITE_CONFIG.streetAddress}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#67e8f9] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contactPhone.replace(/\s+/g, "")}`} className="hover:text-white hover:underline transition-colors">{SITE_CONFIG.contactPhone}</a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#67e8f9] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-white hover:underline transition-colors">{SITE_CONFIG.contactEmail}</a>
              </p>
            </div>

            {/* Sister Site Link */}
            <div>
              <a
                href={SITE_CONFIG.sisterSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#00122e] border border-[#0C66B4]/50 text-xs font-semibold text-[#67e8f9] hover:text-white hover:border-[#00AEEF] hover:bg-[#014489]/40 transition-all duration-300 shadow-sm group/link"
              >
                <Globe className="w-4 h-4 text-[#67e8f9]" />
                <span>Also available in English → ptsakkinen.com</span>
                <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#67e8f9] uppercase tracking-wider flex items-center gap-1.5">
              <span>Navigaatio</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: "Etusivu", href: "/" },
                { name: "Tietoa minusta", href: "/tietoa-minusta" },
                { name: "Videokirjasto", href: "/videot" },
                { name: "Valmennukset", href: "/valmennukset" },
                { name: "Kamat", href: "/kamat", highlight: true },
                { name: "Ilmaisopas", href: "/ilmaisopas" },
                { name: "Koulutukset", href: "/koulutukset" },
                { name: "Kyynärpää-apu", href: "/kyynarpaa-apuvaline", highlight: true },
                { name: "Yhteystiedot", href: "/yhteystiedot" },
                { name: "Tietosuoja", href: "/tietosuoja" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-all duration-200 hover:translate-x-1 inline-block ${
                      link.highlight ? "text-[#67e8f9] font-semibold hover:text-[#38bdf8]" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#67e8f9] uppercase tracking-wider">
              Viralliset Some-Kanavat
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#00122e] border border-[#0C66B4]/40 flex items-center justify-between text-slate-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#014489]/30 transition-all duration-300 group/soc"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">YouTube ({SITE_CONFIG.youtubeHandle})</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/soc:text-[#67e8f9] group-hover/soc:translate-x-0.5 transition-all" />
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#00122e] border border-[#0C66B4]/40 flex items-center justify-between text-slate-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#014489]/30 transition-all duration-300 group/soc"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">Instagram ({SITE_CONFIG.instagramHandle})</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/soc:text-[#67e8f9] group-hover/soc:translate-x-0.5 transition-all" />
              </a>

              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#00122e] border border-[#0C66B4]/40 flex items-center justify-between text-slate-200 hover:text-white hover:border-[#00AEEF] hover:bg-[#014489]/30 transition-all duration-300 group/soc"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">TikTok ({SITE_CONFIG.tiktokHandle})</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/soc:text-[#67e8f9] group-hover/soc:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Box */}
        <div className="mt-12 p-5 rounded-2xl bg-[#00122e]/60 border border-[#0C66B4]/40 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-[#67e8f9] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-400 space-y-1 leading-relaxed">
            <p className="font-semibold text-slate-200">Lääketieteellinen vastuuvapauslausuma:</p>
            <p>
              Sivustolla ja videoilla esitetyt tiedot sekä harjoitteet on tarkoitettu vain yleiseksi informaatioksi ja koulutusmateriaaliksi. Ne eivät korvaa henkilökohtaista fysioterapeutin tutkimusta, lääkärin diagnoosia tai yksilöllistä hoitosuunnitelmaa. Keskustele aina terveydenhuollon ammattilaisen kanssa ennen uuden harjoitusohjelman aloittamista. Lopeta harjoitteet välittömästi, jos koet terävää kipua, huimausta tai pahoinvointia.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#0C66B4]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00122e] border border-amber-500/40 text-amber-300 text-[11px] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Valvira / Terhikki</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00122e] border border-[#00AEEF]/40 text-[#67e8f9] text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#67e8f9]" />
              <span className="text-slate-300">Rekisteröity OMT-Fysioterapeutti (SOMTY)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <VisitorCounter siteKey="ftsakkinen_com" label="Sivuston kävijämäärä" />
            <p className="text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.companyName}. Kaikki oikeudet pidätetään.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
