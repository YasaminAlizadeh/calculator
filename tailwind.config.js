/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sage: {
          200: "#8da37a",
          300: "#88A272",
          400: "#768a66",
          500: "#627355",
          600: "#505e46",
          700: "#4f5c44",
        },
      },
      fontFamily: {
        ChakraPetch: ["Chakra Petch", "sans-serif"],
        KdamThmorPro: ["Kdam Thmor Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
