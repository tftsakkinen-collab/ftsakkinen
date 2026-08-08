import { Program } from "@/data/programs";
import { Check, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
        program.isPlaceholder
          ? "bg-[#000d21]/60 border border-dashed border-[#0C66B4]/60 opacity-80"
          : "bg-gradient-to-b from-[#00122a] to-[#000d21] border border-[#0C66B4] hover:border-[#00AEEF] shadow-panel hover:shadow-glow"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Top Badge */}
        {program.badge && (
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-4 mx-auto">
            {program.badge}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-display text-white tracking-wide mb-3 text-center">
          {program.name}
        </h3>

        {/* Promise Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center max-w-sm">
          {program.promiseDescription}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-8 w-full text-left">
          {program.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
              <Check className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <span className="break-words">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing & Action */}
      <div className="pt-6 border-t border-[#0C66B4]/30 space-y-4 w-full">
        <div className="flex items-baseline justify-between px-1">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">Tila</span>
          <span className="text-sm font-bold text-[#00AEEF] font-mono">
            {program.pricePlaceholder}
          </span>
        </div>

        {program.isPlaceholder ? (
          <a
            href="mailto:tiedottajanne@gmail.com?subject=Verkkovalmennus%20tiedustelu"
            className="w-full py-3.5 rounded-xl bg-[#0C66B4]/20 border border-[#00AEEF]/50 text-[#00AEEF] font-bold text-sm hover:bg-[#00AEEF]/10 transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Kysy lisätietoja sähköpostitse</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <a
            href={program.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-glow flex items-center justify-center gap-2 group text-center"
          >
            <span>Osta nyt</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}

        {!program.isPlaceholder && (
          <p className="text-[11px] text-center text-gray-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
            Turvallinen Paytrail-verkkomaksu
          </p>
        )}
      </div>
    </div>
  );
}
