/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        gold: "#FFD204",
        crimson: "#f1356d",
        darkBlue: "#32445A",
        littleDarkBlue: "#7189BF",
        orange: "#F37878",
      },
      boxShadow: {
        item: "1px 0px 10px 5px rgba(0, 0, 0, 0.2)",
        item2: "0px 0px 2px 0.2px rgba(0,0,0,0.37)",
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/home-background.png')",
      },
      transitionDuration: {
        25: "25ms",
      },
    },
  },
  plugins: [],
};
