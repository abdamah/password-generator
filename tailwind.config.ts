import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#24232C",
        grey: "#817D92",
        "almost-white": "#E6E5EA",
        "very-dark-grey": "#18171F",
        "neon-green": "#A4FFAF",
        red: "#F64A4A",
        orange: "#FB7C58",
        yellow: "#F8CD65",
        "almost-black": "#08070B",
      },
    },
  },
  plugins: [],
};
export default config;
