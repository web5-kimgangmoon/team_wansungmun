/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    width: {
      sm: "320px",
      md: "768px",
      lg: "1400px",
      xl: "1920px",
    },
    screens: {
      sm: "0px",
      md: "321px",
      lg: "769px",
      xl: "1401px",
      // "wd":{
      //   "bs": "(min-width:320px)",
      //   "ml":"(min-width:768px)",
      //   "big":"(min-width:1400px)",
      //   "mx":"(min-width:1920px)"
      // }
    },
  },
  plugins: [],
};
