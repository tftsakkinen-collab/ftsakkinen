import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Youtube, ExternalLink, Globe, ShieldAlert, Mail, Phone, MapPin, Instagram, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000a18] border-t border-[#0C66B4]/40 text-gray-400 text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0C66B4] border border-[#00AEEF] flex items-center justify-center">
                <span className="font-display text-[#00AEEF] text-sm">FT</span>
              </div>
              <span className="font-display text-xl text-white">
                FT SÄKKINEN<span className="text-[#00AEEF]">.</span>
              </span>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              OMT-Fysioterapeutti Janne Säkkinen — Tieteelliseen näyttöön pohjautuva kuntoutus tuki- ja liikuntaelimistön vaivoihin, purentaelimistön häiriöihin (TMD) ja huimaukseen.
            </p>
            
            {/* Company Info */}
            <div className="pt-2 text-xs space-y-1 text-gray-300">
              <p className="font-bold text-white">{SITE_CONFIG.companyName}</p>
              <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#00AEEF]" /> {SITE_CONFIG.clinicAddress}</p>
              <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#00AEEF]" /> {SITE_CONFIG.contactPhone}</p>
              <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#00AEEF]" /> {SITE_CONFIG.contactEmail}</p>
            </div>

            {/* Sister Site Courtesy Link */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.sisterSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#00AEEF] hover:underline"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Also available in English → ptsakkinen.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">Navigaatio</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Etusivu</Link>
              </li>
              <li>
                <Link href="/videot" className="hover:text-white transition-colors">Videokirjasto</Link>
              </li>
              <li>
                <Link href="/ilmaisopas" className="hover:text-white transition-colors">Ilmaiset Kipuoppaat</Link>
              </li>
              <li>
                <Link href="/koulutukset" className="hover:text-white transition-colors">Koulutukset &amp; Kokemus</Link>
              </li>
              <li>
                <Link href="/yhteystiedot" className="hover:text-white transition-colors">Yhteystiedot</Link>
              </li>
              <li>
                <Link href="/tietosuoja" className="hover:text-white transition-colors">Tietosuoja &amp; Vastuuvapaus</Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">Viralliset Some-Kanavat</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={SITE_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00AEEF] transition-colors font-medium"
              >
                <Youtube className="w-4 h-4 text-[#00AEEF]" />
                <span>YouTube ({SITE_CONFIG.youtubeHandle})</span>
              </a>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00AEEF] transition-colors font-medium"
              >
                <Instagram className="w-4 h-4 text-[#00AEEF]" />
                <span>Instagram ({SITE_CONFIG.instagramHandle})</span>
              </a>
              <a
                href={SITE_CONFIG.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00AEEF] transition-colors font-medium"
              >
                <Video className="w-4 h-4 text-[#00AEEF]" />
                <span>TikTok ({SITE_CONFIG.tiktokHandle})</span>
              </a>
              <a
                href={SITE_CONFIG.beaconsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-[#00AEEF] transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4 text-[#00AEEF]" />
                <span>Beacons.ai / SakkinenJanne</span>
              </a>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Box */}
        <div className="mt-10 p-5 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#00AEEF] shrink-0 mt-0.5" />
          <div className="text-xs text-gray-400 space-y-1 leading-relaxed">
            <p className="font-semibold text-gray-300">Lääketieteellinen vastuuvapauslausuma:</p>
            <p>
              Sivustolla ja videoilla esitetyt tiedot sekä harjoitteet on tarkoitettu vain yleiseksi informaatioksi ja koulutusmateriaaliksi. Ne eivät korvaa henkilökohtaista fysioterapeutin tutkimusta, lääkärin diagnoosia tai yksilöllistä hoitosuunnitelmaa. Keskustele aina terveydenhuollon ammattilaisen kanssa ennen uuden harjoitusohjelman aloittamista. Lopeta harjoitteet välittömästi, jos koet terävää kipua, huimausta tai pahoinvointia.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#0C66B4]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.companyName} — Kaikki oikeudet pidätetään.</p>
          <p className="font-mono text-[11px]">Y-tunnus: {SITE_CONFIG.businessId}</p>
        </div>
      </div>
    </footer>
  );
}
