/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary:"#E7F0FF",
        tertiary: "#000031"
      },
      backgroundColor: {
        primaryBg: "#0D6EFD",
        secondaryBg: "#E7F0FF"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

