/**
 * Tailwind config
 * ---------------
 * Extends theme with portfolio colors, fonts, shadows, and keyframes.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand palette
      colors: {
        gold: {
          DEFAULT: "#DBA507",
          light: "#F0C14B",
          dark: "#B8860B",
        },
        surface: {
          DEFAULT: "rgba(33, 33, 40, 0.75)",
          solid: "#212128",
          dark: "#0B0B0D",
        },
      },
      // Wired to next/font CSS variables in layout.tsx
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.35)",
        gold: "0 0 20px rgba(219, 165, 7, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
