import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(37, 99, 235, 0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(14,165,233,0.1))",
        "whatsapp-gradient":
          "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(59,130,246,0.15))"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
