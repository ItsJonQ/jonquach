// Watch :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('watch', function(callback) {
  runSequence([
    'watch-styles',
    'watch-scripts',
    'watch-images',
    'watch-jekyll',
    'watch-jekyll-data',
  ], callback);
});
