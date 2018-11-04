const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const exec = require('child_process').exec;

const usercss = "telegram-vanilla-dark.user.css";

function lint() {
  return gulp.src('./*.css')
    .pipe(stylelint({
      reporters: [{
        formatter: "string",
        console: true
      }]
    }));
}

gulp.task('lint', function() {
  return lint();
});

gulp.task('patch', function() {
  lint();
  return exec(`npx ver patch -p ${usercss}`);
});

gulp.task('minor', function() {
  lint();
  return exec(`npx ver minor -p ${usercss}`);
});

gulp.task('major', function() {
  lint();
  return exec(`npx ver major -p ${usercss}`);
});

gulp.task('usercss', function() {
  return exec(`node ./options/build-usercss.js`);
});
