import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A52",
          dark: "#0A1F3D",
          light: "#15396B",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
