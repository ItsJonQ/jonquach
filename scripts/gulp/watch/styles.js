// Watch :: Styles
'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var options = require('./_options');
var path = require('path');

gulp.task('watch-styles', function (callback) {
  gulp.watch([
    global.config.src + global.config.dirs.css + '/**/*.scss'
  ], options, ['styles-base'])
  .on('change', function(event) {
    var file = event.path;
    gutil.log(path.basename(file) + ' was', gutil.colors.green('updated'));
  });
});
