"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

interface TranscriptViewerProps {
  transcript: string;
}

export default function TranscriptViewer({ transcript }: TranscriptViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!transcript) return null;

  // Split transcript into natural paragraphs (by double newlines or sentence blocks)
  const rawParagraphs = transcript
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  // If no double newlines, group by roughly 3-5 sentences per paragraph
  let paragraphs: string[] = [];
  if (rawParagraphs.length > 1) {
    paragraphs = rawParagraphs;
  } else {
    const sentences = transcript.match(/[^.!?]+[.!?]+/g) || [transcript];
    let currentBlock: string[] = [];
    sentences.forEach((sentence, idx) => {
      currentBlock.push(sentence.trim());
      if (currentBlock.length >= 4 || idx === sentences.length - 1) {
        paragraphs.push(currentBlock.join(" "));
        currentBlock = [];
      }
    });
  }

  const initialVisibleCount = 3;
  const hasMore = paragraphs.length > initialVisibleCount;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-[#0C66B4]/30 pb-3">
        <div className="flex items-center gap-2 text-white font-display text-2xl">
          <FileText className="w-6 h-6 text-[#00AEEF]" />
          <h2>Videon transkripti ja täydellinen teksti</h2>
        </div>
        <span className="text-xs text-gray-400 font-mono">
          {paragraphs.length} kappaletta
        </span>
      </div>

      {/* Paragraph Container - Always rendered 100% in HTML for search engines */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 space-y-4 text-sm sm:text-base leading-relaxed font-sans text-gray-200">
        {paragraphs.map((pText, idx) => {
          const isHiddenOnFold = !isExpanded && idx >= initialVisibleCount;
          return (
            <p
              key={idx}
              className={`${
                isHiddenOnFold ? "hidden" : "block"
              } text-gray-200 leading-relaxed`}
            >
              {pText}
            </p>
          );
        })}

        {/* Gradient Overlay & Toggle Button if truncated */}
        {hasMore && !isExpanded && (
          <div className="pt-4 text-center border-t border-[#0C66B4]/30">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#014489]/40 border border-[#00AEEF]/50 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-black font-semibold text-xs transition-all shadow-glow"
            >
              <span>Näytä koko transkripti ({paragraphs.length - initialVisibleCount} lisäkappaletta)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {hasMore && isExpanded && (
          <div className="pt-6 text-center border-t border-[#0C66B4]/30">
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#000d21] border border-[#0C66B4] text-gray-300 hover:text-white font-semibold text-xs transition-all"
            >
              <span>Sulje transkriptin laajennus</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
