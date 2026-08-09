/**
 * Official Design System & Theme Tokens for FT Säkkinen & PT Sakkinen
 * Enforces unified typography, colors, spacing, card styles, and badge design.
 */

export const DESIGN_TOKENS = {
  typography: {
    fontDisplay: "font-display uppercase tracking-wide",
    headingH1: "text-4xl sm:text-6xl font-display text-white tracking-wide leading-tight",
    headingH2: "text-2xl sm:text-4xl font-display text-white tracking-wide leading-snug",
    headingH3: "text-lg sm:text-xl font-bold text-white leading-normal",
    body: "text-sm sm:text-base text-gray-200 leading-relaxed font-sans",
    caption: "text-xs text-gray-400 font-sans",
  },
  colors: {
    bgDark: "#000a18",
    bgPanel: "#000d21",
    accentCyan: "#00AEEF",
    accentCyanHover: "#33C2F5",
    borderBlue: "#0C66B4",
    borderGlow: "rgba(0, 174, 239, 0.4)",
  },
  card: {
    container: "rounded-2xl bg-gradient-to-b from-[#000d21] to-[#000814] border border-[#0C66B4]/40 hover:border-[#00AEEF]/70 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,174,239,0.25)] p-6",
    innerBox: "p-4 rounded-xl bg-[#00050f] border border-[#0C66B4]/30",
  },
  badge: {
    cyan: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C66B4]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold uppercase tracking-wider",
    tag: "text-[11px] font-semibold tracking-wider text-[#00AEEF] uppercase bg-[#0C66B4]/20 px-2.5 py-1 rounded-md border border-[#00AEEF]/30",
  },
  button: {
    primary: "py-3 px-6 rounded-xl bg-[#00AEEF] text-black font-bold text-sm hover:bg-[#33C2F5] transition-all shadow-[0_0_15px_rgba(0,174,239,0.4)] flex items-center justify-center gap-2",
    secondary: "py-3 px-6 rounded-xl bg-[#0C66B4]/30 border border-[#00AEEF]/50 text-white font-bold text-sm hover:bg-[#00AEEF] hover:text-black transition-all flex items-center justify-center gap-2",
  },
};
