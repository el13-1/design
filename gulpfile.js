const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('hello', function(done) {
  console.log ('привет мир');
  done();
})

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

function serveSass() {
  return src("*./sass/*.sass")
    .pipe(autoprefixer({
      cascade: false
    }))
  
}