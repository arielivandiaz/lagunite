var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const cleanCSS = require("gulp-clean-css");
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const headerComment = require('gulp-header-comment');

var fs = require('fs');
var file_path = 'package.json';

var pathsCSS = {
    source: './src/*.css',
    destination: './dist'
};

var pathsJS = {
    source: './src/*.js',
    destination: './dist'
};

let getVersion = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(file_path, 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                var obj = JSON.parse(data);
                resolve(obj.version);
            }
        });
    });
}

gulp.task('css', async () => {
    getVersion().then((v) => {
        return gulp.src(pathsCSS.source)
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(minify())
            .pipe(headerComment('Lagunite v' + v + '\n\r Visit lagunite.com'))
            .pipe(gulp.dest(pathsCSS.destination));
        done();
    }).catch((reject) => {
        console.log("File Read Failed");
        console.log(reject);
    });
});

gulp.task('js', async () => {
    getVersion().then((v) => {
        return gulp.src(pathsJS.source)
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(headerComment('Lagunite v' + v + '\n\r Visit lagunite.com'))
            .pipe(gulp.dest(pathsJS.destination));
        done();
    }).catch((reject) => {
        console.log("File Read Failed");
        console.log(reject);
    });
});
