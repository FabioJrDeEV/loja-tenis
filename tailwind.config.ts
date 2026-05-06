import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2447ff",
          dark: "#1832c8",
        },
        accent: "#ff5a66",
        mint: "#24d6b5",
        sky: "#7dd3fc",
        lavender: "#ecebff",
        ink: "#111827",
        muted: "#667085",
        paper: "#f6f8fc",
        surface: "#ffffff",
        line: "#dde3ee",
      },
      boxShadow: {
        soft: "0 16px 36px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
