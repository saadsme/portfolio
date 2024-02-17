/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define animation class
      animation: {
        fadedown: 'fadeAndMoveDown 0.3s ease-in-out',
        fadeup: 'fadeAndMoveUp 0.3s ease-in-out',
      },
      // Define keyframes for the animation
      keyframes: {
        fadeAndMoveDown: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' }, // Start at opacity 0 and translate up
          '100%': { opacity: 1, transform: 'translateY(0)' },    // End at opacity 1 and no translation
        },
        fadeAndMoveUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' }, // Start at opacity 0 and translate up
          '100%': { opacity: 1, transform: 'translateY(0)' },    // End at opacity 1 and no translation
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
