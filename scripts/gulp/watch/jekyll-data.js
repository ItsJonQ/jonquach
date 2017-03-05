// Watch :: Jekyll (Data)
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var options = require('./_options');
var path = require('path');

gulp.task('watch-jekyll-data', function () {
  gulp.watch([
    '_config.yml',
    global.config.src + '/**/*.yml',
    global.config.src + '/_data/**/*',
    global.config.src + '/_plugins/**/*',
  ], options, ['build-jekyll-data'])
  .on('change', function(event) {
    var file = event.path
      .replace(global.path, '')
      .replace('/src', '');
    gutil.log(file + ' was', gutil.colors.green('updated'));
  });
});
