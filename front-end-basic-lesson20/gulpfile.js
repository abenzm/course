var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css');

gulp.task('scripts', function(){
  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
  gulp.src('css/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('minCSS'));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/*.css', ['styles']);
});
gulp.task('default', ['scripts', 'styles', 'watch']);

gulp.task('Robot', function(){
  console.log("I'm a Robot.");
});

gulp.task('Hello', function(){
  console.log("Hello, World!");
});
