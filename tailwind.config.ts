import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian — near-black with a faint violet undertone.
        // Calm on the eyes, premium, never pitch dark.
        obsidian: {
          50: "#f5f3f7",
          100: "#e6e2ec",
          200: "#c2bccd",
          300: "#8d8499",
          400: "#5a5365",
          500: "#3a3544",
          600: "#26222e",
          700: "#1a1620",
          800: "#120f17",
          900: "#0c0a11",
          950: "#08070c",
        },
        // Aged gold — antique, restrained, never neon.
        gold: {
          50: "#fbf7ec",
          100: "#f5ecd0",
          200: "#ead79f",
          300: "#dcbe6b",
          400: "#caa44a",
          500: "#b78a32",
          600: "#9a6f26",
          700: "#7a5520",
          800: "#5c401d",
          900: "#3f2c17",
        },
        // Champagne — soft warm off-white for body copy.
        champagne: {
          50: "#fdfaf3",
          100: "#f7efd9",
          200: "#ebdcb3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-24px,18px) scale(1.08)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        aurora: "aurora 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
