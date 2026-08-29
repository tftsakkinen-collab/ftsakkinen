"use client";

import { MapPin, Navigation } from "lucide-react";

export default function DarkLocationMap({ title = "Vastaanottopisteet (Oulu & Kempele)" }: { title?: string }) {
  return (
    <div className="p-5 rounded-3xl bg-[#000d21] border border-[#0C66B4]/60 space-y-4 shadow-panel">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#67e8f9]" />
          <span>{title}</span>
        </span>
        <span className="text-[10px] font-semibold text-[#67e8f9] bg-[#014489]/40 px-2.5 py-1 rounded-full border border-[#00AEEF]/40 shadow-[0_0_10px_rgba(0,174,239,0.3)]">
          Oulu &amp; Kempele
        </span>
      </div>

      {/* Dark Styled Map Box */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#0C66B4]/50 bg-[#000814] shadow-inner group">
        <div
          className="w-full h-full"
          style={{
            filter: "invert(90%) hue-rotate(185deg) brightness(85%) contrast(120%)",
            WebkitFilter: "invert(90%) hue-rotate(185deg) brightness(85%) contrast(120%)",
          }}
        >
          <iframe
            title="Vastaanottopisteet Oulu"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=25.4200%2C64.9900%2C25.5200%2C65.0350&amp;layer=mapnik"
          />
        </div>

        {/* Branded Cyan Pin Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative flex flex-col items-center animate-bounce">
            <div className="w-10 h-10 rounded-full bg-[#00AEEF] text-black border-2 border-white flex items-center justify-center shadow-[0_0_20px_#00AEEF]">
              <MapPin className="w-6 h-6 fill-current" />
            </div>
            <div className="w-3 h-1.5 bg-[#00AEEF] rounded-full blur-[2px] mt-1" />
          </div>
        </div>

        {/* Location Badge Overlay */}
        <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#000a18]/90 backdrop-blur-md border border-[#00AEEF]/40 flex items-center justify-between text-xs text-gray-200">
          <div className="flex items-center gap-2">
            <Navigation className="w-3.5 h-3.5 text-[#67e8f9]" />
            <span className="font-semibold text-white">Vastaanotot Oulussa &amp; Kempeleessä</span>
          </div>
          <span className="text-[10px] text-[#67e8f9]">Terveystalo • Norre • Hammasvahti</span>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 text-center">
        OMT-Fysioterapian vastaanotot ajanvarauksella Terveystalolla, Norressa ja Hammasvahdissa.
      </p>
    </div>
  );
}
