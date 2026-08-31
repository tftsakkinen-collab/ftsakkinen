"use client";

import Link from "next/link";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  // If YouTube ID is placeholder dQw4w9WgXcQ, use Janne Sakkinen professional branding image
  const isPlaceholder = !video.youtubeId || video.youtubeId === "dQw4w9WgXcQ";
  const thumbnailUrl = video.thumbnailUrl || (isPlaceholder 
    ? "/janne-sakkinen.jpg" 
    : `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`);

  return (
    <div className="group rounded-3xl bg-gradient-to-b from-[#00122e]/90 to-[#000a18]/90 border border-[#0C66B4]/50 overflow-hidden flex flex-col justify-between hover:border-[#00AEEF] hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md">
      <div>
        {/* Video Thumbnail Box */}
        <div className="relative aspect-video bg-[#001026] overflow-hidden flex items-center justify-center">
          <img
            src={thumbnailUrl}
            alt={video.title}
            className={`w-full h-full ${isPlaceholder ? 'object-cover object-top' : 'object-cover'} group-hover:scale-105 transition-transform duration-700 ease-out`}
            onError={(e) => {
              // Fallback to Janne Sakkinen profile image if YouTube image fails
              (e.target as HTMLImageElement).src = "/janne-sakkinen.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000a18] via-slate-950/20 to-transparent opacity-80" />
          
          {/* Play Icon Glow Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#38bdf8] text-[#000a18] flex items-center justify-center shadow-[0_0_25px_rgba(0,174,239,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(0,174,239,0.9)] transition-all duration-300 p-3">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-slate-200 text-xs font-mono flex items-center gap-1.5 backdrop-blur-md border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#67e8f9]" />
            <span>{video.duration}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 sm:p-6 space-y-2.5 text-center flex flex-col items-center min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#67e8f9] transition-colors leading-snug text-center break-words w-full line-clamp-2">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed text-center font-normal">
            {video.promiseDescription}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 sm:pt-2">
        <Link
          href={`/videot/${video.id}`}
          className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#014489]/30 border border-[#0C66B4]/60 text-[#67e8f9] font-bold text-xs sm:text-sm hover:bg-[#00AEEF] hover:text-[#000a18] hover:border-[#00AEEF] transition-all duration-300 gap-2 text-center shadow-sm group/btn"
        >
          <span>Katso video &amp; ohjeet</span>
          <ArrowUpRight className="w-4 h-4 shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
