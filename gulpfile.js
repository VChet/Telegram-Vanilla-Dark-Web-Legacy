const gulp = require("gulp");
const stylelint = require("gulp-stylelint");

gulp.task("lint", function() {
  return gulp.src([
    "./**/*.css",
    "!./node_modules/**"
  ]).pipe(stylelint({
    reporters: [{
      formatter: "string",
      console: true
    }]
  }));
});
