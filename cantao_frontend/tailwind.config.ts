import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx, mjs}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        cinza: '#f4f4f4',
        vermelho: '#ff0000',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neue: ['Font_Neue', 'sans-serif'],
      },
      margin: {
        '25%': '25%',
        
      }
    },
  },
  plugins: [],
} satisfies Config;
