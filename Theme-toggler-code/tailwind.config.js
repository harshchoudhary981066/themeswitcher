/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //To enable theme switching in Tailwind, 'darkMode' has to be imported and defined on what basis should it react
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

