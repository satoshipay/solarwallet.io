const gulp = require('gulp');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./_styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./site/css'));
});

gulp.task('pug',function() {
  return gulp.src('./_views/*.pug')
    .pipe(pug({
        doctype: 'html',
        pretty: false
    }))
    .pipe(gulp.dest('./site/'));
});

gulp.task('favicons', function() {
  return gulp.src('./_assets/favicons/**.*')
    .pipe(gulp.dest('./site/'));
});

gulp.task('img', function() {
  return gulp.src('./_assets/img/**.*')
    .pipe(gulp.dest('./site/img/'));
});

gulp.task('misc', function() {
  return gulp.src('./_misc/**.*')
    .pipe(gulp.dest('./site/'));
});

gulp.task('watch', function () {
  gulp.watch('./_styles/**/*.scss', gulp.series('sass'));
  gulp.watch('./_views/*.pug', gulp.series('pug'));
  gulp.watch('./_assets/favicons/**.*', gulp.series('favicons'));
  gulp.watch('./_assets/img/**.*', gulp.series('img'));
  gulp.watch('./_misc/**.*', gulp.series('misc'));
});

gulp.task('build', gulp.parallel('pug', 'sass', 'favicons', 'img', 'misc'));