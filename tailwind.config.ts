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
        },
        panel: {
          blue: "#0C66B4",
          dark: "#094b85",
        },
        accent: {
          blue: "#00AEEF",
          hover: "#33C2F5",
          glow: "rgba(0, 174, 239, 0.25)",
        },
        func: {
          red: "#E5484D",
          green: "#3DD68C",
        },
      },
      fontFamily: {
        display: ["var(--font-luckiest-guy)", "cursive", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(0, 174, 239, 0.35)",
        panel: "0 8px 32px 0 rgba(12, 102, 180, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
