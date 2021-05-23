module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        OpenSans: ['Open Sans'],
      },

      colors: {
        purpleM: 'hsl(257, 40%, 49%)',
        pinkM: 'hsl(300, 69%, 71%)',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active'],
    textColor: ['hover', 'active'],
    borderColor: ['hover', 'active'],
  },
  plugins: [],
};
