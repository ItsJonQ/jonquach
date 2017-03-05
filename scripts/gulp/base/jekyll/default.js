// Base :: Jekyll
'use strict';

var gulp = require('gulp');

// Default: Initial jekyll build
gulp.task('jekyll', function(callback) {
  var task = 'bundle exec jekyll build';
  return global.spawn(task, callback);
});
