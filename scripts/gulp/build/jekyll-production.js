// Build :: Jekyll :: Production
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-jekyll-data', function(callback) {
  runSequence(
    'jekyll',
    [
      'copy-fonts',
      'styles-base',
      'scripts-base'
    ],
    'browsersync-reload',
    callback);
});
