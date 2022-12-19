/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
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
