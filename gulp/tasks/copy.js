module.exports = function (gulp, plugins, config) {
  return function copy() {
    gulp.src([
      'html/*.html',
      'assets/favicon/*',
      'assets/logo.svg',
      'assets/grafana-logo.png',
      'service-worker.js'
    ])
      .pipe(gulp.dest(config.build));
    gulp.src(['polyfill.js'])
      .pipe(gulp.dest(config.build + '/vendor'));
    return gulp.src(['assets/fonts/*', 'assets/icons/fonts/*'])
      .pipe(gulp.dest(config.build + '/fonts'));
  };
};

