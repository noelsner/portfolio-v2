module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B3B3B",
        secondary: "#EAE7E3",
      },
      fontFamily: {
        header: ["Galderglynn Titling", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        topo: "url('/images/topography.svg')",
      },
      dropShadow: {
        "3xl": "0px 1px 8px rgba(25, 25, 39, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
