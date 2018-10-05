var gulp = require('gulp');
var stylelint = require('gulp-stylelint');
var exec = require('child_process').exec;

function lint() {
  return gulp.src('./*.css')
    .pipe(stylelint({
      reporters: [{
        formatter: "string",
        console: true,
        fix: true
      }]
    }))
    .pipe(gulp.dest('./'));
}

gulp.task('lint', function() {
  return lint();
});

gulp.task('patch', function() {
  lint();
  return exec("npx ver patch -p telegram-vanilla-dark.user.css");
});

gulp.task('minor', function() {
  lint();
  return exec("npx ver minor -p telegram-vanilla-dark.user.css");
});

gulp.task('major', function() {
  lint();
  return exec("npx ver major -p telegram-vanilla-dark.user.css");
});
