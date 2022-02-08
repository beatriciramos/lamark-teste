module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        "2fr": "minmax(0, 2fr)",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      blue: "#051e52",
      purple: "#2139cb",
      midnight: "#121063",
      metal: "#565584",
      silver: "#ecebff",
    },
  },
  plugins: [],
};
