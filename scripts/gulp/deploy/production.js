// Deploy :: Production
'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy-production', function() {
  return gulp.src('./' + global.config.dest + '/**/*')
    .pipe(ghPages());
});
