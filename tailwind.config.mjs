/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,md}'],
    theme: {
        extend: {
            colors: {
                main1: '#0a0320',
                primary: '#d946ef',
                secondary: '#ffffff',
                ternary: '#3b82f6',
                hover: '#06b6d4'
            },
            fontFamily: {
                sans: ['Poppins', 'Ubuntu', 'sans-serif']
            }
        }
    },
    plugins: []
};