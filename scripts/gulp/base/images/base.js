// Base :: Images :: Base
'use strict';

var gulp = require('gulp');

gulp.task('images-base', function(callback) {
  return gulp.src(global.config.src + global.config.dirs.images + '/**/*')
    .pipe(gulp.dest(global.config.dest + global.config.dirs.images))
    .on('close', callback);
});
