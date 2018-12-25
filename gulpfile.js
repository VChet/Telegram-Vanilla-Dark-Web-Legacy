const gulp = require("gulp");
const stylelint = require("gulp-stylelint");

gulp.task("lint", function() {
  return gulp.src([
    "./**/*.css",
    "!./node_modules/**"
  ]).pipe(stylelint({
    fix: true,
    reporters: [{
      formatter: "string",
      console: true
    }]
  })).pipe(gulp.dest((file => file.base)));
});
