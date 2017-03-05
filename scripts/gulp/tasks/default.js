// Tasks :: Default
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(callback) {
  runSequence(
    'verify-dependencies',
    'clean-jekyll',
    'jekyll-incremental',
    [
      'images-base',
      'styles-base',
      'scripts-base',
    ],
    'browsersync',
    'open-development',
    'watch'
  );
});

// Alias
gulp.task('serve', ['default']);
