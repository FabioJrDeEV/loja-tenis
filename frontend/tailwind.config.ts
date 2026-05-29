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
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0066ff",
          dark: "#0052cc",
        },
        accent: "#ff3366",
        mint: "#00d4aa",
        sky: "#00a8ff",
        lavender: "#e8eaff",
        ink: "#0a0a0a",
        muted: "#6b7280",
        paper: "#ffffff",
        surface: "#f8f9fa",
        line: "#e5e7eb",
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'strong': '0 12px 40px rgba(0, 0, 0, 0.16)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
