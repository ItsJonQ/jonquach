// Build :: Jekyll
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build-jekyll-incremental', function(callback) {
  runSequence(
    'jekyll-incremental',
    'browsersync-reload',
    callback);
});
