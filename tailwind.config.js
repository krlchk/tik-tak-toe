/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: { max: "1279.99px" },
      mobile: { max: "834.99px" },
      xs: { max: "375.99px" },
    },
    extend: {
      gridTemplateColumns: {
        "game-field": "repeat(3, 30px)",
      },
      gridTemplateRows: {
        "game-field": "repeat(3, 30px)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
