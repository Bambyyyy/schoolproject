import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      standard: [
        "clamp(0.9rem, 3vw, 2rem)",
        {
          lineHeight: "clamp(1.4rem, 4.2vw, 2.4rem)",
          letterSpacing: "0.03em",
        },
      ],
      medium: [
        "clamp(0.9rem, 3vw, 2rem)",
        {
          lineHeight: "clamp(1.2rem, 4.5vw, 2rem)",
          letterSpacing: "0.03em",
        },
      ],
      xl: [
        "clamp(1.5rem, 5vw, 3rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      "2xl": [
        "clamp(1.85rem, 5vw, 4.5rem)",
        {
          lineHeight: "clamp(2rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      "3xl": [
        "clamp(2.3rem, 6.2vw, 5.5rem)",
        {
          lineHeight: "clamp(2rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
    },
    screens: {
      xs: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1670px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
