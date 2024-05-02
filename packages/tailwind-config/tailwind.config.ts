import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0092D6',
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
    },
  },
  plugins: [],
};
export default config;
