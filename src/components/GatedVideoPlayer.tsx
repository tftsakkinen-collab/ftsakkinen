"use client";

import { useState, useEffect } from "react";
import { Lock, Play, Mail, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Video } from "@/data/videos";

interface GatedVideoPlayerProps {
  video: Video;
}

export default function GatedVideoPlayer({ video }: GatedVideoPlayerProps) {
  const isGatedVideo = Boolean((video as unknown as { isGated?: boolean }).isGated || video.id === "P1lZdpluD64");

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const globalSub = localStorage.getItem("user_email_subscribed");
      const videoSub = localStorage.getItem(`gated_video_unlocked_${video.id}`);
      if (globalSub || videoSub) {
        setIsUnlocked(true);
        if (globalSub) setUserEmail(globalSub);
      }
    }
  }, [video.id]);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          locale: "fi",
          type: "gatedVideoUnlock",
          videoTitle: video.title,
          videoId: video.id,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("user_email_subscribed", email);
          localStorage.setItem(`gated_video_unlocked_${video.id}`, "true");
        }
        setUserEmail(email);
        setIsUnlocked(true);
      } else {
        alert(data.error || "Virhe ilmoittautumisen lähetyksessä. Yritä uudelleen.");
      }
    } catch (err) {
      console.error("API Error:", err);
      // Fallback unlock if network glitch
      if (typeof window !== "undefined") {
        localStorage.setItem(`gated_video_unlocked_${video.id}`, "true");
      }
      setIsUnlocked(true);
    } finally {
      setIsLoading(false);
    }
  };

  // If NOT gated or ALREADY unlocked by user:
  if (!isGatedVideo || isUnlocked) {
    return (
      <div className="space-y-4">
        {isGatedVideo && isUnlocked && (
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center justify-between gap-3 shadow-glow">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>Video avattu!</strong> Katselulinkki ja ilmaiset oppaat on lähetetty osoitteeseen{" "}
                <span className="underline font-mono">{userEmail || "sähköpostiisi"}</span>.
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-900/80 border border-emerald-400/40 text-[11px] font-bold uppercase tracking-wider text-emerald-200">
              Tilaaja
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
          <Play className="w-4 h-4 text-[#00AEEF]" />
          <span>Katso opetusvideo</span>
        </div>

        <div className="relative aspect-video rounded-2xl bg-black border border-[#0C66B4] overflow-hidden shadow-glow">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  // Gated locked state form
  const thumbnailUrl = video.thumbnailUrl || `https://i2.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#00122e] via-[#000a18] to-[#001838] border-2 border-[#00AEEF]/60 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,174,239,0.3)] space-y-6 overflow-hidden">
      {/* Background thumbnail blur preview */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img src={thumbnailUrl} alt={video.title} className="w-full h-full object-cover blur-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-[#000a18]/80 to-[#000a18]" />
      </div>

      <div className="relative z-10 space-y-6 max-w-2xl mx-auto text-center">
        {/* Header badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF] text-[#00AEEF] text-xs font-bold uppercase tracking-wider shadow-glow">
            <Lock className="w-3.5 h-3.5" />
            Sähköpostilistalaisten Erikoisvideo
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#014489]/40 border border-[#0C66B4] text-gray-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
            100 % Ilmainen Pääsy
          </span>
        </div>

        {/* Title and description */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-display text-white tracking-wide leading-tight">
            Tämä video on varattu <span className="text-[#00AEEF]">sähköpostilistan tilaajille</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Syötä sähköpostiosoitteesi alla, niin saat välittömän katseluoikeuden tähän 17 minuutin teho-oppaaseen sekä suoran katselulinkin sähköpostiisi!
          </p>
        </div>

        {/* Benefits checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left pt-2 text-xs text-gray-200 bg-[#000a18]/60 p-4 rounded-xl border border-[#0C66B4]/40">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span>Välitön videon katselu tällä sivulla</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span>Suora katselulinkki sähköpostiisi</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span>Google Drive PDF-kuntoutusoppaat</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span>Ei roskapostia • Voit perua milloin vain</span>
          </div>
        </div>

        {/* Email form */}
        <form onSubmit={handleUnlock} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Etunimesi (valinnainen)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] transition-all"
            />
            <input
              type="email"
              required
              placeholder="Sähköpostiosoitteesi *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3.5 rounded-xl bg-[#000814] border border-[#0C66B4]/60 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#00AEEF] text-black font-bold text-base hover:bg-[#33C2F5] transition-all shadow-[0_0_25px_rgba(0,174,239,0.5)] text-center cursor-pointer disabled:opacity-50"
          >
            <Lock className="w-5 h-5" />
            <span>{isLoading ? "Avataan videota..." : "🔒 Avaa video & Lähetä sähköpostiin"}</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
          <span>Tietosi ovat turvassa • FT Säkkinen / Tiedottajanne Oy</span>
        </div>
      </div>
    </div>
  );
}
