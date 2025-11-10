/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#002349",
        deep: "#001F3F",
        gold: "#FFD700",
        goldMuted: "#957C3D",
        darkblue: "#002147",
        golden: "#FFD700",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
