var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

// ----------------------------------------------
//  Default
// ----------------------------------------------
// gulp.task('default', function () {
  
//   // minify global css
  
//   // minify global js
  
  
// });
gulp.task('default', ['clean', 'scripts', 'css']);

// ----------------------------------------------
// Global Clean
// ----------------------------------------------
gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean());
});

// ----------------------------------------------
// Gloabl Scripts
// ----------------------------------------------
gulp.task('scripts', function() {
  return gulp.src([
    './assets/lib/angular-1.4/angular.js',
    './assets/lib/jquery-2.1/dist/jquery.js'
  ])
   .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
      .pipe(uglify())
   .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

// ----------------------------------------------
// Global CSS
// ----------------------------------------------
gulp.task('css', function() {
  return gulp.src([
    './assets/lib/normalize.css/normalize.css',
    './assets/css/*.css'
  ])
   .pipe(sourcemaps.init())
    .pipe(concat('all.css'))
    .pipe(minifyCss())
   .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});