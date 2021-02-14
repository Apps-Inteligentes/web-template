const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')


mix
    .js('resources/js/app.js', 'dist/js').vue()
    
    .sass('resources/sass/app.scss', 'dist/css')
    .sass('resources/sass/separated-file.scss', 'dist/css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })

// .postCss('resources/css/datatable.css', 'public/css', [
//     require('tailwindcss'),
// ])


if (mix.inProduction()) {
    mix.version();
}
