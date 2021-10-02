'use strict'

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.svg'],
    options: {
      safelist: []
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#6E6AFC',
          200: '#6B5BF9',
          300: '#684BF7',
          400: '#663CF4',
          500: '#632CF1',
          600: '#601DEF',
          700: '#5D0DEC'
        },
        secondary: {
          100: '#F7E5AE',
          200: '#EEDA95',
          300: '#E4CE7C',
          400: '#DBC363',
          500: '#D2B749',
          600: '#C8AC30',
          700: '#BFA017'
        },
        accent: {
          100: '#F4E3FF',
          200: '#F6C2FF',
          300: '#F7A0FF',
          400: '#F97FFF',
          500: '#FA5EFF',
          600: '#FC3CFF',
          700: '#FD1BFF'
        }
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              strong: {
                color: theme('colors.secondary.200')
              },
              a: {
                color: theme('colors.secondary.400')
              },
              'a:hover': {
                color: theme('colors.primary.100')
              },
              color: theme('colors.gray.100'),
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.primary.100')
              }
            }
          ]
        },
        DEFAULT: {
          css: [
            {
              strong: {
                color: theme('colors.primary.500')
              },
              a: {
                color: theme('colors.primary.300')
              },
              'a:hover': {
                color: theme('colors.primary.700')
              },
              color: theme('colors.gray.900'),
              'ol > li::before': {
                color: theme('colors.gray.400')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.secondary.500')
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
