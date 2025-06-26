/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF5FF',
          100: '#D6E7FF',
          200: '#ADC9FF',
          300: '#85ACFE',
          400: '#538EFC',
          500: '#0F62FE', // Main primary color
          600: '#0043CE',
          700: '#002D9C',
          800: '#001D6C',
          900: '#001141',
        },
        secondary: {
          50: '#F2F4F8',
          100: '#DDE1E6',
          200: '#A2A9B0',
          300: '#878D96',
          400: '#697077',
          500: '#4D5358', // Main secondary color
          600: '#343A3F',
          700: '#21272A',
          800: '#121619',
          900: '#030303',
        },
        success: {
          500: '#198754',
        },
        warning: {
          500: '#FFC107',
        },
        error: {
          500: '#DC3545',
        },
        accent: {
          500: '#FF7A59',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};