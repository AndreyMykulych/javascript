const gulp = require('gulp');

gulp.task('moveFiles', function() {
    return gulp.src('firstTest/**/*')
      .pipe(gulp.dest('secondTest/'));
  });