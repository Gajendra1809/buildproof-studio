import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f4ef",
          100: "#e8e4db",
          200: "#cfc8b8",
          300: "#a8a093",
          400: "#7d776c",
          500: "#5c574f",
          900: "#121314",
          950: "#08090a",
        },
        bronze: {
          300: "#e0c4a4",
          400: "#d4a574",
          500: "#c4925c",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,165,116,0.18), 0 24px 80px -32px rgba(0,0,0,0.7)",
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -24px rgba(0,0,0,0.65)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,165,116,0.12), transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "stage-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "card-shift": {
          "0%, 22%": { transform: "translateX(0)" },
          "25%, 47%": { transform: "translateX(0)" },
          "50%, 72%": { transform: "translateX(0)" },
          "75%, 100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "stage-pulse": "stage-pulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
