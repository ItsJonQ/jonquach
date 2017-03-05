// Production: Jekyll build
'use strict';

var gulp = require('gulp');

gulp.task('jekyll-production', function(callback) {
  var task = 'bundle exec jekyll build --config _config.yml,_config/production/_config.yml';
  return global.spawn(task, callback);
});
