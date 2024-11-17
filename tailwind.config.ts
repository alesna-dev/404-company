import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#6d28d9",
      },
      height: {
        hero: "calc(100vh - 84px)",
      },
      animation: {
        "slow-bounce": "slowBounce 3s ease-in-out infinite",
      },
      keyframes: {
        slowBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-0.875rem)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
