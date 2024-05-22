import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.css', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [sharedConfig],
};

export default config;
