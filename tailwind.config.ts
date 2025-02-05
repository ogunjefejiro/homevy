import type { Config } from "tailwindcss"

const { heroui } = require("@heroui/react")

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#0A2640",
            secondary: {
               DEFAULT: "#65E4A3",
               foreground: "#000",
            },
            background: "var(--background)",
            foreground: "var(--foreground)",
            paragraph: "#777777",
         },
      },
   },
   plugins: [heroui()],
} satisfies Config
