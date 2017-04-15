var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

var cssFileBase = 'css/base.scss';
var cssFileMobile = 'css/mobile.scss';

gulp.task('sass', function(){
  gulp.src(cssFileBase)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(concat('base.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
  gulp.watch('kfmahre.github.io/css/*.scss', ['sass']);
})

gulp.task('init', ['sass']);
gulp.task('default', ['sass']);