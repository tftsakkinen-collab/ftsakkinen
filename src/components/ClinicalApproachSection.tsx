"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1];

export default function ClinicalApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // SVG diagram nodes representing the clinical trifecta
  const nodes = [
    {
      id: "manual",
      label: "Manuaaliterapia",
      angle: 215,
      description: "Täsmällinen OMT-manuaalikäsittely, pehmytkudosvapautus ja nivelmobilisaatio.",
    },
    {
      id: "strength",
      label: "Voimaharjoittelu",
      angle: 335,
      description: "Nousujohteinen aktiivinen kuntoutus, liikehallinta ja lihasvoiman vahvistus.",
    },
    {
      id: "ergonomics",
      label: "Ergonomia",
      angle: 110,
      description: "Työasentojen, staattisen kuormituksen ja arjen fysiologian optimointi.",
    },
  ];

  // Helper to calculate circle coordinates (percentage relative to 100x100 viewBox)
  const getCoords = (radius: number, angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(angleRad),
      y: 50 + radius * Math.sin(angleRad),
    };
  };

  const activeNodeObj = nodes.find((n) => n.id === hoveredNode);

  return (
    <section
      ref={containerRef}
      className="overflow-x-hidden bg-white text-gray-900 py-20 lg:py-28 border-y border-gray-100 relative"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="mb-16 flex items-center justify-between gap-4 border-b border-gray-100 pb-8">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="text-[#014489] font-bold text-xs uppercase tracking-widest mb-1.5"
            >
              Kokonaisvaltainen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 tracking-tight"
            >
              Hoitofilosofiamme
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#014489]/10 text-[#014489] border border-[#014489]/20 shadow-sm"
          >
            <svg viewBox="0 0 12 12" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 1v10M1 6h10" />
            </svg>
          </motion.div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-14">
          
          {/* Left: Clean Clinical Portrait & Quote */}
          <div className="flex min-w-0 flex-1 flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
            
            {/* Portrait Card (Clean, Premium, rounded-2xl & shadow-xl, NO glitch blocks) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="relative shrink-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white group"
              style={{ width: "260px", height: "330px" }}
            >
              <Image
                src="/janne-sakkinen.jpg"
                alt="Janne Säkkinen - OMT Fysioterapeutti"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-bold block text-white text-sm">Janne Säkkinen</span>
                <span className="text-[#00AEEF] text-[11px] font-semibold">OMT Fysioterapeutti, Asiantuntija</span>
              </div>
            </motion.div>

            {/* Quote Block */}
            <div className="min-w-0 max-w-[460px]">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="text-[#014489]/20 font-serif leading-none select-none -mb-8"
                style={{ fontSize: "5rem" }}
              >
                &ldquo;
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="text-gray-700 font-normal leading-relaxed relative z-10 pt-4"
                style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)" }}
              >
                Näemme jatkuvasti saman kaavan – oireita hoidetaan hetkellisesti, mutta juurisyyt jäävät huomiotta. Yhdistämällä tarkan tutkimisen, manuaaliterapian ja nousujohteisen harjoittelun, rakennamme pysyviä tuloksia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="mt-8 pt-4 border-t border-gray-200"
              >
                <div className="text-base font-bold tracking-tight text-gray-900">Janne Säkkinen</div>
                <div className="text-xs font-semibold tracking-wide text-[#014489]">OMT Fysioterapeutti, Asiantuntija</div>
              </motion.div>
            </div>
          </div>

          {/* Right: Interactive Trifecta Circle Diagram */}
          <div className="flex w-full max-w-[380px] shrink-0 flex-col items-center justify-center self-center sm:max-w-[420px] lg:max-w-[460px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="relative w-full aspect-square p-6 bg-gray-50/80 rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full p-8 pointer-events-none">
                {/* Outer Trifecta Circle Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="#014489"
                  strokeWidth="0.5"
                  strokeDasharray="1.5 1.5"
                  opacity="0.35"
                />
                
                {/* Connecting Lines */}
                {nodes.map((node) => {
                  const p1 = getCoords(30, node.angle);
                  const p2 = getCoords(36, node.angle);
                  const isHovered = hoveredNode === node.id;
                  
                  return (
                    <line
                      key={node.id}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke={isHovered ? "#00AEEF" : "#014489"}
                      strokeWidth={isHovered ? "1.0" : "0.5"}
                      opacity={isHovered ? "1" : "0.5"}
                      style={{ transition: "all 0.3s ease" }}
                    />
                  );
                })}
              </svg>

              {/* Node Interactive Buttons */}
              {nodes.map((node, i) => {
                const labelPos = getCoords(44, node.angle);
                const isHovered = hoveredNode === node.id;

                return (
                  <motion.button
                    key={node.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease }}
                    className={`absolute cursor-pointer whitespace-nowrap transition-all duration-300 px-4 py-2.5 rounded-xl border text-center shadow-sm ${
                      isHovered
                        ? "bg-[#014489] text-white border-[#00AEEF] shadow-lg scale-105"
                        : "bg-white text-gray-900 border-gray-200 hover:border-[#014489]"
                    }`}
                    style={{
                      left: `${labelPos.x}%`,
                      top: `${labelPos.y}%`,
                      transform: "translate(-50%, -50%)",
                      fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)",
                      fontWeight: isHovered ? 700 : 600,
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div>{node.label}</div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Dynamic Node Info Card */}
            <div className="w-full mt-4 min-h-[54px] p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm text-center">
              {activeNodeObj ? (
                <p className="text-xs text-[#014489] font-medium leading-relaxed animate-fadeIn">
                  <strong className="font-bold text-gray-900">{activeNodeObj.label}:</strong> {activeNodeObj.description}
                </p>
              ) : (
                <p className="text-xs text-gray-500 italic">
                  Vie hiiri solmun (Manuaaliterapia, Voimaharjoittelu, Ergonomia) päälle tarkastellaksesi kliinistä lähestymistapaamme.
                </p>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
