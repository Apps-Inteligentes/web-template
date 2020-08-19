const mix = require('laravel-mix');
require('mix-tailwindcss');
require('laravel-mix-purgecss');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'dist/js')
    .sass('resources/sass/app.scss', 'dist/css')
    .sass('resources/sass/separated-file.scss', 'dist/css')
    .options({
        postCss: [
            require('postcss-css-variables')()
        ]
    })
    .tailwind('./tailwind.config.js');
