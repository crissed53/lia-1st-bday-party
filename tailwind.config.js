/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        set1: {
          0: "#1A4D2E",
          1: "#4F6F52",
          2: "#E8DFCA",
          3: "#F5EFE6"
        }
      }
    },
    fontFamily: {
      sans: ["NanumSquare"]
    }
  },
  plugins: [],
}