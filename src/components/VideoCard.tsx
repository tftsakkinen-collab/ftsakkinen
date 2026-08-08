"use client";

import Link from "next/link";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { Video } from "@/data/videos";
import { CATEGORIES } from "@/data/categories";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const category = CATEGORIES.find((c) => c.id === video.categoryId);

  // If YouTube ID is placeholder dQw4w9WgXcQ, use Janne Sakkinen professional branding image
  const isPlaceholder = !video.youtubeId || video.youtubeId === "dQw4w9WgXcQ";
  const thumbnailUrl = video.thumbnailUrl || (isPlaceholder 
    ? "/janne-sakkinen.jpg" 
    : `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`);

  return (
    <div className="group rounded-2xl bg-[#000d21] border border-[#0C66B4]/40 overflow-hidden flex flex-col justify-between clinical-panel-hover">
      <div>
        {/* Video Thumbnail Box */}
        <div className="relative aspect-video bg-[#014489]/40 overflow-hidden flex items-center justify-center">
          <img
            src={thumbnailUrl}
            alt={video.title}
            className={`w-full h-full ${isPlaceholder ? 'object-cover object-top' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
            onError={(e) => {
              // Fallback to Janne Sakkinen profile image if YouTube image fails
              (e.target as HTMLImageElement).src = "/janne-sakkinen.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
          
          {/* Play Icon Glow Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#00AEEF] text-black flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* Category Tag */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#014489]/90 border border-[#00AEEF]/50 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            {category?.name || "Fysioterapia"}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-gray-300 text-xs font-mono flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-3 text-center flex flex-col items-center">
          <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors leading-snug text-center">
            {video.title}
          </h3>
          <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed text-center">
            {video.promiseDescription}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/videot/${video.id}`}
          className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#0C66B4]/20 border border-[#0C66B4]/50 text-[#00AEEF] font-semibold text-sm hover:bg-[#00AEEF] hover:text-black transition-all gap-2 text-center"
        >
          Katso video &amp; ohjeet
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
