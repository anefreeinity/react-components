/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "spin-disk": {
          "0%": { borderWidth: "2px" },
          "50%": { borderWidth: "8px" },
          "100%": { borderWidth: "2px" },
        },
      },
      animation: {
        "spin-disk": "spin 1s linear infinite, spin-disk 1s linear infinite",
      },
    },
  },
  plugins: [],
};
