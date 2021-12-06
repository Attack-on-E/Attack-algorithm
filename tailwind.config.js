module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#FF0000',
        'onPrimary': '#ED635E',
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
