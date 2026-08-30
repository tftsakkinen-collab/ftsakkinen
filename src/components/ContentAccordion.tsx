"use client";

import { useState } from "react";
import { ChevronDown, Clock, BookOpen } from "lucide-react";

export interface AccordionItem {
  id?: string;
  title: string;
  duration?: string;
  subtitle?: string;
  content: React.ReactNode | string;
}

interface ContentAccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
}

export default function ContentAccordion({
  items,
  defaultOpenIndex = 0, // First item open by default per blueprint rules
  className = "",
}: ContentAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-3 w-full ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id || idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#001433] border-[#00AEEF]/60 shadow-lg shadow-cyan-950/20"
                : "bg-[#000d21] border-[#0C66B4]/40 hover:border-[#00AEEF]/40"
            }`}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#67e8f9] transition-colors cursor-pointer min-h-[56px]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 pr-2">
                <span className="w-7 h-7 rounded-lg bg-[#014489]/60 text-[#67e8f9] font-mono text-xs font-extrabold flex items-center justify-center shrink-0 border border-[#00AEEF]/30">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="text-xs text-slate-400 font-normal mt-0.5">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {item.duration && (
                  <span className="text-xs font-mono font-bold text-[#67e8f9] bg-[#014489]/50 px-2.5 py-1 rounded-full border border-[#00AEEF]/30 flex items-center gap-1 hidden sm:inline-flex">
                    <Clock className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </span>
                )}
                <ChevronDown
                  className={`w-5 h-5 text-[#67e8f9] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {isOpen && (
              <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#0C66B4]/30 bg-[#000814]/40 animate-in fade-in duration-200">
                {typeof item.content === "string" ? (
                  <p className="whitespace-pre-line">{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
