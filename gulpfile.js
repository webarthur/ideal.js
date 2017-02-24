var ideal = require('./index.js')
var gulp = require('gulp')
var concat = require('gulp-concat')
var babel  = require("gulp-babel")
var uglify = require('gulp-uglify')

// COMPILE
// npm install babel babili babel-preset-es2015 gulp-uglify gulp-concat gulp-replace gulp-babel
gulp.task('compile', ['compile_src'], () => {
  setTimeout(function () {
    gulp.start('compileEnd')
  }, 1000)
});

// ideal.js
gulp.task('compile_src', () => {
  gulp.src('no.js')
    .pipe(ideal({
      include: ['$doc.onload', 'htt*', 'cookies', 'location.*', 'Object.*', 'Date.*', 'Element.*', 'Form.*', 'String.*']
    }))
    .pipe(concat('ideal.js'))
    .pipe(gulp.dest('dist'))

  // src-es5
  gulp.src('src/*')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('src-es5'))
})

// ideal.min.js + ideal-es5.js
gulp.task('compile_minify', () => {
  // ideal.min.js
  gulp.src('dist/ideal.js')
    .pipe(concat('ideal.min.js'))
    .pipe(babel({presets: ['babili']}))
    .pipe(gulp.dest('dist'))

  // ideal-es5.js
  gulp.src('dist/ideal.js')
    .pipe(concat('ideal-es5.js'))
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('dist'))
})

// ideal-es5.min.js
gulp.task('compileEnd', ['compile_minify'], () => {
  setTimeout(function () {
    gulp.src('dist/ideal-es5.js')
      .pipe(concat('ideal-es5.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
  }, 1000)
})
