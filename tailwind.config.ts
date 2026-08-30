import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#014489",
          dark: "#00122a",
          deep: "#000a18",
          light: "#0256ab",
          slate: "#041833",
        },
        panel: {
          blue: "#0C66B4",
          dark: "#094b85",
          glass: "rgba(12, 102, 180, 0.12)",
          subtle: "rgba(0, 18, 42, 0.75)",
        },
        accent: {
          blue: "#00AEEF",
          hover: "#33C2F5",
          glow: "rgba(0, 174, 239, 0.25)",
          cyan: "#38bdf8",
        },
        func: {
          red: "#E5484D",
          green: "#3DD68C",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        display: ["var(--font-roboto)", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 174, 239, 0.35)",
        "glow-lg": "0 0 45px rgba(0, 174, 239, 0.45)",
        "glow-sm": "0 0 15px rgba(0, 174, 239, 0.25)",
        panel: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "panel-hover": "0 12px 40px 0 rgba(0, 174, 239, 0.18)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "radial-clinical": "radial-gradient(ellipse at top, #014489 0%, #00122a 50%, #000a18 100%)",
        "mesh-hero": "radial-gradient(circle at 50% 0%, rgba(0, 174, 239, 0.15), transparent 70%), radial-gradient(circle at 10% 40%, rgba(1, 68, 137, 0.25), transparent 60%)",
        "gradient-card": "linear-gradient(135deg, rgba(12, 102, 180, 0.15) 0%, rgba(0, 10, 24, 0.8) 100%)",
        "gradient-card-hover": "linear-gradient(135deg, rgba(0, 174, 239, 0.2) 0%, rgba(1, 68, 137, 0.3) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
