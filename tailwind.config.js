const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

    // Purge is handled by laravel mix
    purge: {
        enabled: false
    },
    
    experimental: {
        // Add support for `@apply` with complex classes, including responsive and pseudo-class variants
        // https://github.com/tailwindlabs/tailwindcss/pull/2159
        applyComplexClasses: true,
    },
    
    future: {
        removeDeprecatedGapUtilities: true, // will be removed in v2
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
