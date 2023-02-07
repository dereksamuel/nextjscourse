const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: colors.emerald,
      secondary: colors.slate,
      dark: colors.slate[800],
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
