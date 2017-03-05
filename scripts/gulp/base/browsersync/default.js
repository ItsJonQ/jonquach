// Base :: BrowserSync :: Default
'use strict';

var gulp = require('gulp');

gulp.task('browsersync', function() {
  global.browserSync.init({
    notify: false,
    port: global.config.port,
    server: {
      baseDir: global.config.dest,
    },
  });
});
