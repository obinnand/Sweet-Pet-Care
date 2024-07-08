/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      fontFamily: {
        sans: ["Underdog", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(/img/bg-hero-1.jpg)",
        grid: "url(/assets/grid.png)",
      },
    },
  },
  plugins: [],
};
