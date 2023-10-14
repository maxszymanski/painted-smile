const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
            '3xl': '1600px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ['Atma', ...defaultTheme.fontFamily.sans],
                love: 'Love Ya Like A Sister, sans-serif',
                exo: 'Exo Variable, sans-serif',
            },
            backgroundImage: {
                'bg-small': "url('/src/images/header/lines-small.webp')",
                'bg-big': "url('/src/images/header/lines-big.webp')",
                'hover-green': "url('/src/images/nav/hover-green.webp')",
                'hover-pink': "url('/src/images/nav/hover-pink.webp')",
                'hover-blue': "url('/src/images/nav/hover-blue.webp')",
                'more-btn': "url('/src/images/cards/more-btn.webp')",
                santa: "url('/src/images/aboutus/santa.webp')",
                fun: "url('/src/images/aboutus/fun.webp')",
                about: "url('/src/images/aboutus/about.webp')",
            },
            colors: {
                mypink: '#FF8DA6',
                myblue: '#107F9B',
                mygrey: '#E5EEF0',
                mylightblue: '#BBF3FF',
                mylightpink: '#F86F8D',
                myorange: '#FF8D2B',
                mygreyblue: '#3DA352',
                myspiritblue: '#05A8D2',
                mycardblue: '#F8FEFF',
                myorder: '#86D4E8',
                cardpink: '#CF284D',
                cardyellow: '#FFBF1D',
                cardred: '#C92424',
                cardorange: '#FF8D2B',
                bgblue: '#E1F9FF',
                formpink: '#FFDFE6',
                formyellow: '#FFE4A0',
                formorange: '#FFC390',
                formgreen: '#A7D6B1',
                formred: '#FA7878',
                formbtn: '#FFBF1D',
            },
        },
    },
    plugins: [],
}
