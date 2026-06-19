import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1b",
        "surface-container": "#1f1f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353535",
        "surface-border": "#262626",
        "surface-variant": "#353535",
        "on-surface": "#e2e2e2",
        "on-surface-variant": "#c4c7c8",
        primary: "#ffffff",
        "on-primary": "#2f3131",
        "primary-container": "#e2e2e2",
        secondary: "#c8c6c5",
        "on-secondary": "#313030",
        tertiary: "#ffffff",
        "muted-grey": "#7F7F7F",
        "on-background": "#e2e2e2",
        outline: "#8e9192",
        "outline-variant": "#444748",
        "glow-cyan": "#c6f0ff",
        "glow-purple": "#d4b8ff",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "serif"],
        body: ["var(--font-hanken)", "sans-serif"],
        mono: ["var(--font-hanken)", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(60px, 10vw, 120px)",
          {
            lineHeight: "0.92",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],
        "display-lg": [
          "clamp(48px, 7vw, 80px)",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "headline-lg": [
          "clamp(32px, 4vw, 48px)",
          { lineHeight: "1.17", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-caps": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.2em",
            fontWeight: "700",
          },
        ],
        "mono-tech": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
      },
      spacing: {
        "margin-mobile": "24px",
        "margin-desktop": "80px",
        gutter: "32px",
        "section-gap": "160px",
        "stack-sm": "8px",
        "stack-md": "24px",
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
