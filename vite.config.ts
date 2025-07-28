import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        base: "15.4px", // Your custom base font size
      },
      colors: {
        // Your custom color scheme
        primary: {
          DEFAULT: "#38a169",
          foreground: "#ffffff",
          dark: "#68d391", // Dark mode variant
        },
        accent: {
          DEFAULT: "#e53e3e",
          foreground: "#ffffff",
          dark: "#fc8181", // Dark mode variant
        },
        earth: {
          brown: "#8b4513",
          light: "#d2b48c",
        },
        // Standard colors
        background: {
          DEFAULT: "#ffffff",
          dark: "#1a202c",
        },
        foreground: {
          DEFAULT: "#2d3748",
          dark: "#f7fafc",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2d3748",
          dark: "#2d3748",
          "dark-foreground": "#f7fafc",
        },
        muted: {
          DEFAULT: "#f7fafc",
          foreground: "#718096",
          dark: "#4a5568",
          "dark-foreground": "#a0aec0",
        },
        border: {
          DEFAULT: "rgba(0, 0, 0, 0.1)",
          dark: "#4a5568",
        },
      },
      borderRadius: {
        DEFAULT: "6px", // Your enhanced radius
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      minHeight: {
        input: "46px", // Your enhanced input height
        button: "45px", // Your enhanced button height
      },
    },
  },
});
