var ideal = require('./index.js')
var gulp = require('gulp')
var concat = require('gulp-concat')

// ideal.import('Date.isLeapYear')

// Example
// gulp.task('default', () => {
//   gulp.src('no.js')
//     .pipe(ideal({
//       include: ['http']
//     }))
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('test2'))
// })

// COMPILE
// npm install babel babili babel-preset-es2015 gulp-uglify gulp-concat gulp-replace gulp-babel
gulp.task('compile', () => {

  var babel  = require("gulp-babel")
  var uglify = require('gulp-uglify')

  // ideal.js
  gulp.src('no.js')
    .pipe(ideal({
      // include: ['http', 'http.file', 'Element.*', 'Form.*', 'Form.*', 'NodeList.*', 'Object.*', 'String.*']
      include: ['Date.isLeapYear']
    }))
    .pipe(concat('ideal.js'))
    .pipe(gulp.dest('dist'))

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

  // ideal-es5.min.js
  gulp.src('dist/ideal-es5.js')
    .pipe(concat('ideal-es5.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

  // src-es5
  gulp.src('src/*')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('src-es5'))

})
