var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const cleanCSS = require("gulp-clean-css");
var uglify = require('gulp-uglify');

var pathsCSS = {
    source: './src/*.css',
    destination: './dist'
};

var pathsJS = {
    source: './src/*.js',
    destination: './dist'
};



gulp.task('css', () => {
    return gulp.src(pathsCSS.source)
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(minify())
        .pipe(gulp.dest(pathsCSS.destination));
});


gulp.task('js', () => {
    return gulp.src(pathsJS.source)
        .pipe(minify({
            ext: {
                min: '.js' // Set the file extension for minified files to just .js
            },
            noSource: true // Don’t output a copy of the source file
        }))
        .pipe(gulp.dest(pathsJS.destination));
});
