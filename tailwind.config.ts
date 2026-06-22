import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#F9D915",
          yellowSoft: "#FFF5B8",
          blue: "#073B86",
          blueDark: "#06285F",
          ink: "#031A3E"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(3, 26, 62, 0.10)",
        strong: "0 24px 70px rgba(3, 26, 62, 0.18)",
        yellow: "0 18px 45px rgba(249, 217, 21, 0.26)",
        glow: "0 0 0 1px rgba(249,217,21,0.25), 0 0 28px rgba(249,217,21,0.12)",
        card: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.45)"
      },
      borderRadius: {
        brand: "1.75rem"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shine: "shine 3.5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shine: {
          "0%": { transform: "translateX(110%)" },
          "100%": { transform: "translateX(-110%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
