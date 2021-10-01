module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: {
    content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.svg'],
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
  plugins: [
    require('@tailwindcss/typography')
  ]
}
