import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1d4ed8",
          foreground: "#ffffff"
        },
        success: "#10b981"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      fontFamily: {
        sans: ["'InterVariable'", ...fontFamily.sans]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
