/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:        "#44a1d7",
        "accent-hover":"#2d87be",
        "bg-dark":     "#0e0408",
        "bg-light":    "#ede9ef",
      },
      fontFamily: {
        display: ["Anta", "sans-serif"],
        body:    ["Josefin Slab", "serif"],
      },
    },
  },
  plugins: [],
}