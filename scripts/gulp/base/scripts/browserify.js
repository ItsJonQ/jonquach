// Base :: Scripts :: Browserify
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

var file = global.config.src + '/js/main.js';
var options = {
  entries: file,
  paths: [
    './node_modules/',
    global.config.src + global.config.dirs.js + '/'
  ]
};

gulp.task('scripts-browserify', function(callback) {
  return browserify(file)
    .bundle()
    .on('error', function (e) {
      gutil.log(e);
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest(global.config.dest + global.config.dirs.js + '/'))
    .pipe(global.browserSyncReload({ stream: true }))
    .on('close', callback);
});
