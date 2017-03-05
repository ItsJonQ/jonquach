// Watch :: Scripts
'use strict';

var gulp = require('gulp');
var options = require('./_options');

gulp.task('watch-scripts', function (callback) {
  gulp.watch([
    global.config.src + global.config.dirs.js + '/**/*.js'
  ], options, ['scripts-base']);
});
