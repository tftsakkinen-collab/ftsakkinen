"use client";

import { useState, useEffect } from "react";
import { CreditCard, Lock } from "lucide-react";

interface StickyCtaBarProps {
  productName: string;
  price: string;
  regularPrice?: string;
  ctaText?: string;
  stripeUrl: string;
  dataCtaAttribute?: string;
}

export default function StickyCtaBar({
  productName,
  price,
  regularPrice,
  ctaText = "Ota paikkasi",
  stripeUrl,
  dataCtaAttribute = "mobiili",
}: StickyCtaBarProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar after scrolling past hero (approx 600px)
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#000814]/95 border-t border-[#00AEEF]/60 p-3 sm:p-4 backdrop-blur-xl shadow-[0_-10px_30px_rgba(0,0,0,0.85)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-2 sm:px-4">
        <div className="flex flex-col">
          <span className="text-xs text-slate-300 font-medium truncate max-w-[180px] sm:max-w-xs">
            {productName}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-extrabold text-[#67e8f9]">
              {price}
            </span>
            {regularPrice && (
              <span className="text-xs text-slate-400 line-through hidden sm:inline">
                {regularPrice}
              </span>
            )}
            <span className="text-[10px] text-slate-400 font-mono hidden md:inline">
              · Kertamaksu
            </span>
          </div>
        </div>

        <a
          href={stripeUrl}
          data-cta={dataCtaAttribute}
          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] font-extrabold text-xs sm:text-sm hover:from-white hover:to-slate-100 transition-all shadow-[0_0_20px_rgba(0,174,239,0.5)] flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <CreditCard className="w-4 h-4 text-[#000a18]" />
          <span>{ctaText}</span>
        </a>
      </div>
    </div>
  );
}
