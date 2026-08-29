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
  const BASE_COUNT = 14892;
  const [count, setCount] = useState<number>(BASE_COUNT);

  useEffect(() => {
    async function trackVisit() {
      try {
        const localKey = `visitor_count_${siteKey}`;
        const sessionKey = `has_visited_${siteKey}`;
        
        let storedCount = typeof window !== "undefined" ? localStorage.getItem(localKey) : null;
        let currentNum = storedCount ? parseInt(storedCount, 10) : BASE_COUNT;

        const hasVisited = typeof window !== "undefined" ? sessionStorage.getItem(sessionKey) : "true";

        if (!hasVisited && typeof window !== "undefined") {
          currentNum += 1;
          sessionStorage.setItem(sessionKey, "true");
          localStorage.setItem(localKey, currentNum.toString());
        }

        setCount(currentNum);

        // Try external sync silently
        let url = `https://api.counterapi.dev/v1/${siteKey}/visitors`;
        if (!hasVisited) {
          url += `/up`;
        }

        const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === "number" && data.count > currentNum) {
            setCount(data.count);
            if (typeof window !== "undefined") {
              localStorage.setItem(localKey, data.count.toString());
            }
          }
        }
      } catch (err) {
        // Silent fallback to currentNum
      }
    }

    trackVisit();
  }, [siteKey]);

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000d21] border border-[#00AEEF]/40 text-xs text-gray-300 shadow-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Users className="w-3.5 h-3.5 text-[#67e8f9]" />
      <span>{label}: <strong className="text-white font-bold">{count.toLocaleString("fi-FI")}</strong></span>
    </div>
  );
}
