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

gulp.task('watch', function () {
  gulp.watch('./_styles/**/*.scss', gulp.series('sass'));
  gulp.watch('./_views/*.pug', gulp.series('pug'));
});