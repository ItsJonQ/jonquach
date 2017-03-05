// Base :: Open :: Development
'use strict';

var gulp = require('gulp');

gulp.task('open-development', function(callback) {
  var task = 'open http://localhost:'+global.config.port+'/'+global.config.name;
  return global.spawn(task, callback);
});
