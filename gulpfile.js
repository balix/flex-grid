'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    postcss = require('gulp-postcss'),
    postcsseach = require('postcss-each'),
    postcssfor = require('postcss-for'),
    autoprefixer = require('autoprefixer'),
    cssimport = require('postcss-import'),
    cssnested = require('postcss-nested'),
    cssvariables = require('postcss-css-variables'),
    cssapply = require('postcss-apply'),
    cssbeautify = require('gulp-cssbeautify'),
    custommedia = require('postcss-custom-media'),
    rename = require('gulp-rename'),
    cssnano = require('cssnano');

/* CSS
   -------------------------------------------------------------------------- */

gulp.task('css', function(){
    var plugins = [
        postcsseach,
        postcssfor,
        cssnested,
        cssvariables,
        custommedia,
        autoprefixer({ browsers: ['> 1%', 'IE 9'], cascade: false })
    ];

    return gulp.src('./src/flex_grid.css')
        .pipe(postcss(plugins))
        .pipe(cssbeautify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css_prod', function(){
    var plugins = [
        postcsseach,
        postcssfor,
        cssnested,
        cssvariables,
        custommedia,
        autoprefixer({ browsers: ['> 1%', 'IE 9'], cascade: false }),
        cssnano
    ];

     return gulp.src('./src/flex_grid.css')
        .pipe(postcss(plugins))
        .pipe(rename('flex_grid.min.css'))
        .pipe(gulp.dest('./dist/'))
});

/* Clean
   -------------------------------------------------------------------------- */
gulp.task('clean', function() {
    del('./dist');
});

/* Compilation
   -------------------------------------------------------------------------- */
gulp.task('default', [
    'css', 'css_prod'
]);