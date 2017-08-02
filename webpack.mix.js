let mix = require('laravel-mix');

mix
    .setPublicPath('public/dist')
    .js('src/js/app.js', 'js')
    .sass('src/scss/app.scss', 'css');
