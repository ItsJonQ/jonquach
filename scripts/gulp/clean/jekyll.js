// Clean :: Jekyll
'use strict';

var gulp = require('gulp');

gulp.task('clean-jekyll', function(callback) {
  var task = 'bundle exec jekyll clean';
  return global.spawn(task, callback);
});
