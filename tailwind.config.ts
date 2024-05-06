import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#E3D9C7",
      secondary: "#FFF8F1",
      buttonColor: "#9E8F6E",
      black: "#333333",
      danger: "#BA1A1A",
      brown: "#755B00",
      primaryDarken: "#ccc3b3",
      surface: "#FFF8F1",
      white: "#FFFFFF",
      gray: "#808080",
    },
  },
  plugins: [],
};
export default config;
