module.exports = function (gulp, plugins, config) {
  return function copy() {
    return Promise.all([
      new Promise(function (resolve) {
        gulp.src([
          'html/*.html',
          'assets/favicon/*',
          'assets/logo.svg',
          'assets/grafana-logo.png',
          'service-worker.js'
        ])
          .pipe(gulp.dest(config.build))
          .on('end', resolve);
      }),
      new Promise(function (resolve) {
        gulp.src(['polyfill.js'])
          .pipe(gulp.dest(config.build + '/vendor'))
          .on('end', resolve);
      }),
      new Promise(function (resolve) {
        gulp.src(['assets/fonts/*', 'assets/icons/fonts/*'])
          .pipe(gulp.dest(config.build + '/fonts'))
          .on('end', resolve);
      })
    ]);
  };
};
