/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-shade": "#000000",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 35s linear infinite",
      },
      animationPlayState: {
        paused: "paused",
        running: "running",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(to bottom, black, rgba(252,74,39,0.4), black)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".animation-play-state-paused": {
          "animation-play-state": "paused",
        },
        ".animation-play-state-running": {
          "animation-play-state": "running",
        },
      };
      addUtilities(newUtilities, ["hover"]);
    },
  ],
};
