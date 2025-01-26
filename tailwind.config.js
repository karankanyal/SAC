/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#243533", // Custom blue
        secondary: "#F59E0B", // Custom yellow
        accent: "#10B981", // Custom green
      },
    },
  },
  plugins: [],
};
