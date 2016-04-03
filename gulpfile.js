var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var cssmin      = require('gulp-cssmin');
var exec            = require('child_process').exec;
var ghPages         = require('gulp-gh-pages');
var plumber         = require('gulp-plumber');
var runSequence = require('run-sequence');
var sass            = require('gulp-sass');


var config = {
  src: 'src',
  dist: '_site',
  assets: 'src/_assets',
  port: 4848
};


// BrowserSync methods
var reload = browserSync.reload;
var notify = browserSync.notify;

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


// Jekyll
gulp.task('jekyll-clean', function(done) {
  return exec('bundle exec jekyll clean', function(err, stdout, stderr) {
    console.log(stdout);
  }).on('close', done);
});

gulp.task('jekyll-exec', function(done) {
  return exec('bundle exec jekyll build --incremental', function(err, stdout, stderr) {
    console.log(stdout);
  }).on('close', done);
});

gulp.task('jekyll-deploy', function(done) {
  return exec('bundle exec jekyll clean build --config "_config.yml, _config/production/_config.yml"', function(err, stdout, stderr) {
    console.log(stdout);
  }).on('close', done);
});



// Sass
gulp.task('sass', function () {
  return gulp.src(config.assets + '/stylesheets/*.scss')
  .pipe(plumber())
  .pipe(
    sass({
      includePaths: [
        config.assets + '/stylesheets',
        'src/_assets/vendors'
      ],
    })
    .on('error', sass.logError)
  )
  .pipe(gulp.dest(config.dist + '/css'))
  .pipe(reload({stream:true}));
});


// Browser Sync (Live Reload)
gulp.task('browser-sync', ['jekyll'], function() {
  browserSync({
    notify: false,
    port: config.port,
    server: {
      baseDir: config.dist
    }
  });
});


// Watch
gulp.task('watch', function () {
  gulp.watch([
    'src/_assets/stylesheets/**/*.scss'
  ], ['sass']);

  gulp.watch([
    'src/**/*.{html,md,rb,yml}',
    'src/**/*.yml',
    'src/js/**/*.js',
    '_config.yml',
    '_config/production/_config.yml',
    '!src/.asset-cache',
    '!src/_assets/vendors/**/*',
    '!**/node_modules/**',
    '!**/bower_components/**',
    '!.jekyll-metadata'
  ], ['jekyll-rebuild']);
});


// Deploy
gulp.task('deploy', ['jekyll-clean', 'jekyll-deploy'], function() {
  return gulp.src('./' + config.dist + '/**/*')
    .pipe(ghPages());
});
gulp.task('push', ['deploy']);


// Build tasks
gulp.task('jekyll', function(fn) {
  runSequence('jekyll-exec', ['sass'], fn);
});

gulp.task('jekyll-build', function(fn) {
  runSequence('jekyll', 'browser-sync', fn);
});

gulp.task('jekyll-rebuild', function(fn) {
  runSequence('jekyll', 'browser-reload', fn);
});


// Default
gulp.task('default', function(fn) {
  runSequence('jekyll-clean', 'jekyll-build', 'watch', fn);
});
gulp.task('serve', ['default']);
