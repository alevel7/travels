const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary:"#E7F0FF",
        tertiary: "#000031",
        primaryDeep:"#0A369D"
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

