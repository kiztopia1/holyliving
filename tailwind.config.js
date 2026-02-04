/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8F060", // Lime Yellow - buttons, headers, accents
        secondary: "#C5D94E", // Lime Green - hover, highlights
        charcoal: "#2D2D2D", // Text, headers, footer background
        "warm-gray": "#5C5C5C", // Body text, secondary text
        "off-white": "#FAFDF2", // Backgrounds, cards
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
