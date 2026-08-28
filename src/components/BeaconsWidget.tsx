import Link from "next/link";
import { Download, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export default function BeaconsWidget() {
  return (
    <section className="py-16 bg-[#000814] border-b border-[#0C66B4]/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00AEEF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* In-House Lead Capture Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#00122e] via-[#00183c] to-[#00122e] border-2 border-[#00AEEF]/50 shadow-2xl shadow-cyan-950/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-md">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#00AEEF]" />
              <span>Ilmaiset Harjoitusoppaat PDF-muodossa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              TILAA ILMAISET <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#38bdf8]">KIPUOPPAAT &amp; MATERIAALIT</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Syötä etunimesi ja sähköpostiosoitteesi. Saat heti pääsyn Janne Säkkisen suomenkieliseen Google Drive -kansioon, johon päivitetään uudet oppaat sitä mukaa kun uusia videoita julkaistaan.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00AEEF]" /> Ei roskapostia</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Download className="w-4 h-4 text-[#00AEEF]" /> Välitön Google Drive -pääsy</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Link
              href="/ilmaisopas"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-bold text-base hover:from-white hover:to-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2 group text-center cursor-pointer"
            >
              <span>Siirry tilaamaan oppaat</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
