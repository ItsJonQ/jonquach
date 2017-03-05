// Base :: Styles :: Minify
'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

var options = {
  advanced: {
    removeDuplicates: true
  },
  aggressiveMerging: false,
  keepSpecialComments: 0,
  restructuring: false,
  semanticMerging: false
};

gulp.task('styles-minify', ['styles-base'], function(callback) {
  return gulp.src(global.config.dest + global.config.dirs.css + '/**/*.css')
    .pipe(cssmin(options))
    .pipe(gulp.dest(global.config.dest + global.config.dirs.css))
    .on('close', callback);
});
