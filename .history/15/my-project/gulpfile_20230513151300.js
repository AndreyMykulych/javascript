const gulp = require('gulp');

 function move (){
    return gulp.src('firstTest/**/*')
      .pipe(gulp.dest('secondTest/'));
 }
 //
  exports.move = move