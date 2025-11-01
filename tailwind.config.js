/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "#FFFFFF",
          1: "#FAFAFA",
          2: "#F6F7F7",
          3: "#EEEEEE",
          4: "#DFE1E6",
          5: "#C6C9CF",
          6: "#A9AEB7",
          7: "#6E7178",
          8: "#3F4145",
          9: "#1C1E24"
        },
        primary: {
          1: "#F6F4F7",
          2: "#EDEAF0",
          3: "#DBD4E2",
          4: "#C9BFD3",
          5: "#4B286D"
        },
        secondary: {
          1: "#F7F8FE",
          2: "#EFF1FE",
          3: "#E0E4FC",
          4: "#D0D6FB",
          5: "#6277F0"
        },
        state: {
          blue: "#1970E6",
          red: "#D83E31",
          yellow: "#F7AE3B",
          green: "#28B058"
        }
      }
    }
  },
  plugins: [],
}
