import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0092D6',
      black: colors.black,
      blue: {
        '50': '#f0f9ff',
        '100': '#e0f3fe',
        '200': '#b9e8fe',
        '300': '#7cd6fd',
        '400': '#36c2fa',
        '500': '#0cabeb',
        '600': '#0092d6',
        '700': '#016da3',
        '800': '#065c86',
        '900': '#0b4c6f',
        '950': '#07304a',
      },
      gray: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#474747',
        '900': '#3d3d3d',
        '950': '#262626',
      },
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
      white: colors.white,
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '2rem',
      full: '9999px',
    },
    textShadow: {
      sm: '0 1px 2px #000',
      DEFAULT: '0 2px 4px #000',
      lg: '0 8px 16px #000',
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
