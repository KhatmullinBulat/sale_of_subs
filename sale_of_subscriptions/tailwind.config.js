/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      main: "#a3b18a",
      mainSecondary: "#344e41",
      white: "#ffffff",
    },
  },
  plugins: [],
};
