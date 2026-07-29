import { SITE_CONFIG } from "@/data/config";
import { Download, Mail, Sparkles, ExternalLink } from "lucide-react";

export default function BeaconsWidget() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#000d21] to-[#014489] border-y border-[#0C66B4]/40 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#000d21]/90 border border-[#00AEEF]/40 p-8 md:p-12 shadow-glow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ilmaiset harjoitusoppaat PDF-muodossa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display text-white tracking-wide">
              LATAA ILMAINEN <span className="text-[#00AEEF]">KIPUVAAPAA KEHO -OPAS</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
              Liity sähköpostilistalle ja saat jokaisen videon täydentävän PDF-kuntoutusoppaan suoraan sähköpostiisi. Mukana täsmälliset liikeohjeet, sarjamäärät ja itsetestit.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#00AEEF]" />
                Ei roskapostia
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Download className="w-4 h-4 text-[#00AEEF]" />
                Välitön latauslinkki
              </span>
            </div>
          </div>

          {/* Beacons Link CTA Card / Form Embed */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-[#014489]/50 border border-[#0C66B4] space-y-4 text-center">
              <p className="text-sm text-gray-200 font-medium">
                Tilaa ilmaiset oppaat Beacons-sivulta:
              </p>
              
              <a
                href={SITE_CONFIG.beaconsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group"
              >
                <span>Siirry lataamaan (Beacons.ai)</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-[11px] text-gray-400 font-mono">
                [PLACEHOLDER: Beacons.ai sähköpostin tilauslomake]
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
