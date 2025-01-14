import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
 /*    "./src/pages/**/ //*.{js,ts,jsx,tsx,mdx}",
  //  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   // "./src/app/**/*.{js,ts,jsx,tsx,mdx}", */
  ],
  theme: {
    extend: {
      colors: {
        fundoCinza: '#f4f4f4',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Neue: ['Font_Neue', 'sans-serif'],
      },
      margin: {
        '25%': '25%',
        
      }
    },
  },
  plugins: [],
} satisfies Config;
