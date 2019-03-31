const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
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


mix.js('resources/js/system/app.js', 'public/js/app.js')
    .sourceMaps();
mix.js('resources/js/tenant/settings.js', 'public/js/settings.js')
    .sourceMaps();
mix.js('resources/js/tenant/mailbox.js', 'public/js/mailbox.js')
    .sourceMaps();
mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')]
    });