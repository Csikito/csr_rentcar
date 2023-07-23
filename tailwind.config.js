/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#162331",
        text: "#ffe4c4",
        lightGreen: "#08b281",
        lightBlue: "#00ccbf",
        darkGreen: "#1abc9c",
        darkBlue: "#3498db",
        purple: "#9b59b6",
      },
      backgroundImage: {
        book: "url('./images/home/bookCar/book.png')",
      },
    },
  },
  plugins: [],
};
