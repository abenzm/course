var gulp = require('gulp');
var gm = require('gulp-gm');
var gSequence= require('gulp-sequence');

gulp.task('resize1600', function() {
  gulp.src('img_src/*.jpg')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(1600); 
    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('img/1600/'))
});

gulp.task('resize800', function() {
  gulp.src('img_src/*.jpg')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(800); 
    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('img/800/'))
});

gulp.task('resize500', function() {
  gulp.src('img_src/*.jpg')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(500); 
    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('img/500/'))
});

gulp.task('resize1000', function() {
  gulp.src('img_src/*.jpg')
    .pipe(gm(function(gmfile) {
      return gmfile.resize(1000); 
    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('img/1000/'))
});

gulp.task('default', function (callback) {
  gSequence(
    'resize500',
    'resize800',
    'resize1000',
    'resize1600',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY.');
      }
      callback(error);
    }
  );
});
