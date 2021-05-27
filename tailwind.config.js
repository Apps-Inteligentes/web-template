const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.js',
        './resources/**/*.sass',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here.
            // // See https://tailwindcss.com/docs/customizing-colors#color-palette-reference
            transparent: 'transparent',
            current: 'currentColor',
            
            gray: colors.trueGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.green,
            blue: colors.lightBlue,
            indigo: colors.indigo,
            purple: colors.purple,
            pink: colors.pink,
            // Add any other from https://tailwindcss.com/docs/customizing-colors#color-palette-reference
            
            white: colors.white,
            black: colors.black,
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
