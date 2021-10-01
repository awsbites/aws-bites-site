module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.html', './src/**/*.njk'],
    options: {
      safelist: []
    }
  },
  theme: {
    extend: {
      colors: {
        change: 'transparent'
      }
    }
  },
  variants: {},
  plugins: []
}
