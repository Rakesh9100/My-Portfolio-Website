/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main1: '#0a0320',
        main2: '#1a0f3e',
        primary: '#d946ef',
        secondary: '#ffffff',
        ternary: '#3b82f6',
        hover: '#06b6d4',
        accent1: '#ec4899',
        accent2: '#f59e0b',
      },
      fontFamily: {
        sans: ['Poppins', 'Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
