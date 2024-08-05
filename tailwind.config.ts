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
        "optil": ["OPTILency"],
      },
      colors: {
        artioBlack: "#2F332B",
        artioWhite: "#F0EEEA",
        artioRed: "#C53434",
      },
    },
  },
  plugins: [],
};
export default config;
