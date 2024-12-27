/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        'xxs': '320px', // Defines a custom xxs breakpoint at 320px (example)
        'xs': '475px',  // Defines the xs breakpoint at 475px
      },
    },
  },
  plugins: [],
};
