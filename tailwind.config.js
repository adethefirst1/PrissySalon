/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefefe',
          100: '#fefcfb',
          200: '#fdf8f5',
          300: '#fbf2ed',
          400: '#f8ebe2',
          500: '#f4e2d6',
          600: '#f0d8c9',
          700: '#ebcdbb',
          800: '#e6c2ad',
          900: '#e1b79f',
        },
        blush: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd5d5',
          300: '#f8c0c0',
          400: '#f5abab',
          500: '#f29696',
          600: '#ef8181',
          700: '#ec6c6c',
          800: '#e95757',
          900: '#e64242',
        },
        pearl: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f9f9f9',
          400: '#f7f7f7',
          500: '#f5f5f5',
          600: '#f3f3f3',
          700: '#f1f1f1',
          800: '#efefef',
          900: '#ededed',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
