var gulp = require('gulp');
var gm = require('gulp-gm');

gulp.task('default', function() {
  gulp.src('img_src/*.jpg')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(1600); 
    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('img/'))
});
