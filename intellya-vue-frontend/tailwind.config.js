/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "intellya-primary": "#E4CA85",
        "intellya-secondary": "#b09e71",
      }
    },
    fontFamily: {
      OpenSans: ["Open Sans, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
}

