// Base :: Verify :: Gems
'use strict';

var gulp = require('gulp');

gulp.task('verify-skipped', function(callback) {
  var task = 'echo "\nIt appears that you may be offline.\nDependency checks skipped!"';
  return global.spawn(task, callback);
});
