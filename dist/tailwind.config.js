/** @type {import('tailwindcss').Config} */
const { plugin } = require("tailwindcss/plugin");

const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
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
  plugins: [
    plugin(function ({ match }) {
      match(
        {
          "text-clamp-1.8-4-2.8": {
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          },
          "text-clamp-1.7-4-2.5": {
            fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
          },
          "text-clamp-2.35-6-4.6": {
            fontSize: "clamp(2.35rem, 6vw, 4.6rem)",
          },
        }
      );
    }),
  ],
};

module.exports = config;
