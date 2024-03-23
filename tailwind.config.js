/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#32f6f7",
        "theme-secondary": "#fa02fc",
        "theme-bg": "rgba(255, 255, 255, 0.4)",
        "theme-bg2": "rgba(40,44,52,0.2)",
        "theme-bg3": "rgba(17,0,32,.5)",
        "theme-bg4": "rgba(39, 39, 39, 0.1)",
        border: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
