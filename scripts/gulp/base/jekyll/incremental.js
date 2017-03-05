// Base :: Jekyll :: Incremental
'use strict';

var gulp = require('gulp');

// Development: Incremental Jekyll rebuild
gulp.task('jekyll-incremental', function(callback) {
  var task = 'bundle exec jekyll build --incremental';
  return global.spawn(task, callback);
});
