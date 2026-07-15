import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          surface: "#F5F5F5",
          dark: "#0D1B2A",
          ebony: "#5B5941",
          muted: "#6B6854",
          border: "#E5E5E4",
          accent: "#801611",
          "accent-hover": "#6B1210",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        yantra: ["var(--font-yantra)", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      keyframes: {
        "gallery-scroll": {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        "gallery-scroll": "gallery-scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
