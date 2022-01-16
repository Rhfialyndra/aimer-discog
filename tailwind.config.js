module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : ['Montserrat']
      },

      screens: {
        
        "2k":"2048px",
        "3k":"2880px",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
