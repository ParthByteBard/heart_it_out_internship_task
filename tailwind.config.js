/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#f44336',  // Main red color
          50: '#ffebee',       // Lighter red (red-50)
        },
        pink: {
          DEFAULT: '#e91e63',  // Main pink color
          50: '#fce4ec',       // Lighter pink (pink-50)
        },
        purple: {
          DEFAULT: '#9c27b0',  // Main purple color
          50: '#f3e5f5',       // Lighter purple (purple-50)
        },
        'deep-purple': {
          DEFAULT: '#673ab7',  // Main deep purple color
          50: '#ede7f6',       // Lighter deep purple (deep-purple-50)
        },
        indigo: {
          DEFAULT: '#3f51b5',  // Main indigo color
          50: '#e8eaf6',       // Lighter indigo (indigo-50)
        },
        blue: {
          DEFAULT: '#2196f3',  // Main blue color
          50: '#e3f2fd',       // Lighter blue (blue-50)
        },
        'light-blue': {
          DEFAULT: '#03a9f4',  // Main light-blue color
          50: '#e1f5fe',       // Lighter light-blue (light-blue-50)
        },

        todo: {
          DEFAULT: '#f8f8f8'
        }
        ,
        cyan: {
          DEFAULT: '#00bcd4',  // Main cyan color
        },
        green: '#4caf50',
        yellow: '#ffeb3b',
        orange: '#ff9800',
        aqua: '#00ffff',
        'dark-blue': '#00008b',
        'light-red': '#ffcccb',
        'dark-green': '#013220'
      },
      backgroundImage: {
        'night-sky': "url('./assets/night-sky.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        garamond: ['Garamond', 'serif'],
        futura: ['Futura', 'sans-serif'],
        bodoni: ['Bodoni', 'serif'],
        arial: ['Arial', 'sans-serif'],
        'times-new-roman': ['Times New Roman', 'serif'],
        verdana: ['Verdana', 'sans-serif'],
        rockwell: ['Rockwell', 'serif'],
        'franklin-gothic': ['Franklin Gothic', 'sans-serif'],
        univers: ['Univers', 'sans-serif'],
        frutiger: ['Frutiger', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
