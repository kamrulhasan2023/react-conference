const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{ts,tsx}',
    './.storybook/preview.js',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    /**
     * WARNING: If you make changes to the breakpoints then,
     * please update the keys array/BREAKPOINTS object in 'src/themes/interface'.
     */
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      secondary: ['var(--font-secondary)', ...fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        thin: 'rgb(var(--color-primary-thin) / <alpha-value>)',
      },
      success: {
        DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
        light: 'rgb(var(--color-success-light) / <alpha-value>)',
        thin: 'rgb(var(--color-success-thin) / <alpha-value>)',
      },
      danger: {
        DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
        light: 'rgb(var(--color-danger-light) / <alpha-value>)',
        thin: 'rgb(var(--color-danger-thin) / <alpha-value>)',
      },
      info: {
        DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
        light: 'rgb(var(--color-info-light) / <alpha-value>)',
        thin: 'rgb(var(--color-info-thin) / <alpha-value>)',
      },
      black: {
        DEFAULT: 'rgb(var(--color-black) / <alpha-value>)',
        light: 'rgb(var(--color-black-light) / <alpha-value>)',
      },
      gray: {
        DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
        light: 'rgb(var(--color-gray-light) / <alpha-value>)',
        thin: 'rgb(var(--color-gray-thin) / <alpha-value>)',
      },
      white: 'rgb(var(--color-white) / <alpha-value>)',
    },
    backgroundImage: {
      'primary-gradient-1':
        'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
      'primary-gradient-2':
        'linear-gradient(198.61deg, #0C5EE8 12.59%, #317AF5 87.41%)',
      'secondary-gradient-1':
        'linear-gradient(180deg, #13A1C5 0%, #16B8E1 100%)',
      'secondary-gradient-2':
        'linear-gradient(270deg, #16B8E1 0%, #13A1C5 100%)',
      'link-gradient-1': 'linear-gradient(to right, #FBBC05, #FBBC05)',
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1.4',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.4',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.4',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.2',
        },
      ],
      xl: [
        '1.5rem',
        {
          lineHeight: '1.2',
        },
      ],
      '2xl': [
        '1.75rem',
        {
          lineHeight: '1.2',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '1.2',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '1.2',
        },
      ],
      '5xl': [
        '4rem',
        {
          lineHeight: '1.1',
        },
      ],
    },
    boxShadow: {
      1: '0 0 16px 0px rgba(12, 94, 232, 0.1)',
      2: '0px 11px 20px rgba(12, 94, 232, 0.16)',
      none: 'none',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        DEFAULT: '350ms',
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        toRightFromLeft: {
          '49%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)', opacity: '0' },
          '51%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s both',
        fadeInUp: 'fadeInUp .4s both',
        fadeInDown: 'fadeInDown .4s both',
        fadeInLeft: 'fadeInLeft .4s both',
        fadeInRight: 'fadeInRight .4s both',
        toRightFromLeft: 'toRightFromLeft 0.5s forwards',
      },
      borderRadius: {
        5: '.3125rem',
        10: '.625rem',
        20: '1.25rem',
        30: '1.875rem',
        40: '2.5rem',
      },
      zIndex: {
        1: '1',
        99: '99',
        111: '111',
        444: '444',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
