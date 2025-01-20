/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0D6EFD"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

