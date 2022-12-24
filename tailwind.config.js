/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily:{
        perm:['Permanent Marker'],
        bung:['Bungee Spice'],
        ms:['Ms Madi'],
        nab:['Nabla'],
        Raleway: ["Raleway"],
      }
    },
  },
  plugins: [],
}
