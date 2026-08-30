"use client";

import { Check, CreditCard, ExternalLink, Sparkles, Clock, UserCheck } from "lucide-react";
import Link from "next/link";

export interface ProductCardData {
  id: string;
  name: string;
  audienceTag: string; // e.g. "Kuluttajat · Itsehoito" or "B2B · Ammattilaisille"
  isB2B?: boolean;
  duration: string; // e.g. "17 min video", "8 viikon ohjelma", "2 h 7 min"
  price: string; // e.g. "29 €", "49 €", "199 €"
  regularPrice?: string; // e.g. "149 €"
  description: string;
  details: string[];
  ctaText: string;
  ctaUrl: string;
  isExternal?: boolean;
  badge?: string;
}

interface ProductCardProps {
  product: ProductCardData;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const isStripe = product.ctaUrl.startsWith("http");

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 backdrop-blur-md hover:-translate-y-1 border-2 ${
        product.isB2B
          ? "bg-gradient-to-b from-[#001433] to-[#000a18] border-[#0C66B4] shadow-xl shadow-cyan-950/30"
          : "bg-gradient-to-b from-[#00122e] to-[#000d21] border-[#00AEEF]/60 shadow-2xl shadow-cyan-950/40 hover:border-[#00AEEF]"
      } ${className}`}
    >
      <div className="space-y-5">
        {/* Field 1: Audience Tag & Optional Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              product.isB2B
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                : "bg-[#014489]/50 text-[#67e8f9] border border-[#00AEEF]/40"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>{product.audienceTag}</span>
          </span>

          {product.badge && (
            <span className="text-[11px] font-mono font-bold text-slate-300 bg-[#000814] px-2.5 py-1 rounded-full border border-[#0C66B4]/40">
              {product.badge}
            </span>
          )}
        </div>

        {/* Field 2: Product Name */}
        <h3 className="text-2xl font-display font-extrabold text-white tracking-tight leading-tight">
          {product.name}
        </h3>

        {/* Field 3: Duration & Format */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#67e8f9] bg-[#000814] p-2.5 rounded-xl border border-[#0C66B4]/40 w-fit">
          <Clock className="w-4 h-4 text-[#67e8f9]" />
          <span>{product.duration}</span>
        </div>

        {/* Description & Key Details */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
          {product.description}
        </p>

        <ul className="space-y-2.5 pt-2 border-t border-[#0C66B4]/30">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
              <Check className="w-4 h-4 text-[#67e8f9] shrink-0 mt-0.5" />
              <span className="leading-snug">{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Field 4: Price & CTA Button */}
      <div className="pt-6 mt-6 border-t border-[#0C66B4]/40 space-y-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Hinta</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#67e8f9]">
              {product.price}
            </span>
            {product.regularPrice && (
              <span className="text-sm font-bold text-slate-400 line-through">
                {product.regularPrice}
              </span>
            )}
          </div>
        </div>

        {isStripe ? (
          <a
            href={product.ctaUrl}
            target={product.isExternal ? "_blank" : undefined}
            rel={product.isExternal ? "noopener noreferrer" : undefined}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2 text-center cursor-pointer min-h-[48px]"
          >
            <CreditCard className="w-4 h-4" />
            <span>{product.ctaText}</span>
            {product.isExternal && <ExternalLink className="w-4 h-4" />}
          </a>
        ) : (
          <Link
            href={product.ctaUrl}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2 text-center min-h-[48px]"
          >
            <span>{product.ctaText}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
