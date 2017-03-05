// Watch :: Images
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var options = require('./_options');

gulp.task('watch-images', function () {
  gulp.watch([
    global.config.src + global.config.dirs.images + '/**/*',
  ], options)
  .on('change', function(event) {
    var file = event.path.replace(global.path, '').replace('/', '');

    return gulp.src(file, { base: global.config.src + global.config.dirs.images })
      .pipe(gulp.dest(global.config.dest + global.config.dirs.images))
      .on('end', function() {
        gutil.log(path.basename(file) + ' was', gutil.colors.green('updated'));
        global.browserSync.reload();
      });
  });
});

