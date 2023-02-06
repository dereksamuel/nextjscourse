const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: colors.emerald[500],
      secondary: colors.slate[500],
      dark: colors.slate[700],
      light: colors.emerald[50],
      white: colors.white,
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
