import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        colors: {
          "body": "#FFE7D5",
          "main": "#D8AE7E",
          "primary": "#FFF2D7",
          "secondary": "#FFE0B5",
          "ternary": "#F8C794",
          "category": "#f5f5f5",
          "subtitle": "#454545",
          "platinum": "#e5e4e2",
        },
        fontFamily: {
          "main": "Poppins, sans-serif",
          "title": "Merriweather, serif"
        }
    },
  },
  plugins: [],
};
export default config;
