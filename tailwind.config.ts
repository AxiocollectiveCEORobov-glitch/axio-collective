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
        // AXIO Design System
        void:    "#06060A",   // fondo base
        iron:    "#0E0E14",   // superficies
        steel:   "#16161F",   // cards
        line:    "#1E1E2A",   // bordes
        muted:   "#3A3A50",   // texto apagado
        ghost:   "#6B6B88",   // texto secundario
        mercury: "#A8A8C0",   // texto terciario
        white:   "#F0EFF8",   // texto principal
        axiom:   "#FF5722",   // acento primary (verde señal)
        axiom2:  "#0064FF",   // acento secondary (azul técnico)
        warn:    "#FF3D00",   // acento warning / confrontativo
      },
      fontFamily: {
        mono:    ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Syne'", "system-ui", "sans-serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      animation: {
        "scan":      "scan 8s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "float":     "float 6s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-void": `
          linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
        `,
        "noise": "url('/noise.svg')",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
