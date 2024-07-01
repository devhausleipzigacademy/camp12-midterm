/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1C1C27",
          light: "#363740",
        },
        white: {
          DEFAULT: "#FFFFFF",
          dimmed: "rgba(255,255,255,0.4)",
          "dimmed-heavy": "rgba(255,255,255,0.2)",
        },
        yellow: "#FFB43A",
        red: "#EF4444",
        green: "#22C55E",
      },
    },
  },
  plugins: [],
};
