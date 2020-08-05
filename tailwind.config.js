const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

    // Purge is handled by laravel mix
    purge: {
        enabled: false
    },

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('tailwindcss'),
        require('@tailwindcss/ui'),
        require('autoprefixer'),
    ]
}
