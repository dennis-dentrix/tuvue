/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },

    extend: {
      colors: {
        black: "#383634",
        green: "#4c7c7d",
        grey: "#edeae7",
        maroon: "#e45959",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
