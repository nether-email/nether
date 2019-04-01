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

const sassOptions = {
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.js')]
};

mix.js('resources/js/system/app.js', 'public/js/app.js')
    .sourceMaps();
mix.sass('resources/sass/system/app.scss', 'public/css/app.css')
    .options(sassOptions);

mix.js('resources/js/tenant/settings.js', 'public/js/settings.js')
    .sourceMaps();
mix.sass('resources/sass/tenant/settings.scss', 'public/css/settings.css')
    .options(sassOptions);

mix.js('resources/js/tenant/mailbox.js', 'public/js/mailbox.js')
    .sourceMaps();
mix.sass('resources/sass/tenant/mailbox.scss', 'public/css/mailbox.css')
    .options(sassOptions);