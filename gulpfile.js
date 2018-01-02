var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload');

gulp.task('scripts', function() {  
  return gulp.src('public/js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});

gulp.task('html',function(){  
  return gulp.src('views/**/*.html')
  .pipe(livereload());
});

gulp.task('watch', function() {  
  livereload.listen();
  gulp.watch('public/js/*.js', ['scripts']);
  gulp.watch('views/**/*.html', ['html']);
});

gulp.task('server',function(){  
  nodemon({
      'script': 'server.js',
      'ignore': 'public/js/*.js'
  });
});

gulp.task('serve', ['server', 'watch']);