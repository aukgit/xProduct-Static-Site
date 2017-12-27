'use strict';
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('minify-css', () => {
  return gulp.src('css/src/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/src/**/*.js'),
        uglify(),
        gulp.dest('js')
    ],
    cb
  );
});

gulp.task('watch',() => {
  gulp.watch('css/src/**/*.css',['minify-css']);
  gulp.watch('js/src/**/*.js',['compress']);
});

gulp.task('default',['minify-css','compress','watch']);
