const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Atma', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'bg-small': "url('/src/images/header/lines-small.webp')",
                'bg-big': "url('/src/images/header/lines-big.webp')",
            },
            colors: {
                mypink: '#FF8DA6',
                myblue: '#107F9B',
                mygrey: '#E5EEF0',
                mylightblue: '#BBF3FF',
                mylightpink: '#F86F8D',
            },
        },
    },
    plugins: [],
}
