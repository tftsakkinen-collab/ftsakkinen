"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

interface VisitorCounterProps {
  siteKey?: string;
  label?: string;
}

export default function VisitorCounter({
  siteKey = "ftsakkinen_com",
  label = "Sivuston kävijät"
}: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function trackVisit() {
      try {
        const sessionKey = `has_visited_${siteKey}`;
        const hasVisited = typeof window !== "undefined" ? sessionStorage.getItem(sessionKey) : "true";
        
        let url = `https://api.counterapi.dev/v1/${siteKey}/visitors`;
        if (!hasVisited) {
          url += `/up`;
        }

        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === "number") {
            setCount(data.count);
            if (typeof window !== "undefined") {
              sessionStorage.setItem(sessionKey, "true");
            }
          }
        }
      } catch (err) {
        console.warn("Visitor counter sync skipped:", err);
      }
    }

    trackVisit();
  }, [siteKey]);

  if (count === null) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000d21] border border-[#0C66B4]/40 text-xs text-gray-400">
        <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
        <Users className="w-3.5 h-3.5 text-[#00AEEF]" />
        <span>{label}: ...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000d21] border border-[#00AEEF]/40 text-xs text-gray-300 shadow-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Users className="w-3.5 h-3.5 text-[#00AEEF]" />
      <span className="font-medium">
        {label}: <strong className="text-white font-bold tracking-wide">{count.toLocaleString("fi-FI")}</strong>
      </span>
    </div>
  );
}
