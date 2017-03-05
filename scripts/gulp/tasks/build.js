// Tasks :: Deploy
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence(
    'verify-dependencies',
    'clean-jekyll',
    'jekyll-production',
    'scripts',
    'styles',
    callback
  );
});
