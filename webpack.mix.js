let mix = require('laravel-mix');

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

mix.react('resources/assets/js/app.js', 'public/js')
    .styles(['resources/assets/css/css.css'], 'public/css/css.css')
    .sass('resources/assets/sass/app.scss', 'public/css');


mix.browserSync({
    proxy: '127.0.0.1:8000',
    files: ['public/**/*.css', 'resources/**/*']
});
