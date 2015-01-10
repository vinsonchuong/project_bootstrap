var gulp = require('gulp');
var browserSync = require('browser-sync');

require('./tasks/spec_unit')([
  {name: 'spec:unit', deps: ['build:app', 'build:spec'], specs: './dist/spec.js', implementation: './dist/app.js', runner: './dist/spec.html'}
]);
require('./tasks/spec_acceptance')([
  {name: 'spec:acceptance', deps: ['build:app', 'serve'], specs: './spec/acceptance/**/*_spec.js', callback: browserSync.exit}
]);
gulp.task('spec', ['spec:unit', 'spec:acceptance']);

require('./tasks/build_html')([
  {name: 'build:app:html', file: './app/index.html', watch: false},
  {name: 'build:spec:html', file: './spec/unit/spec.html', watch: false},

  {name: 'watch:app:html', file: './app/index.html', watch: [browserSync.reload]},
  {name: 'watch:spec:html', file: './spec/unit/spec.html', watch: [browserSync.reload]}
]);
require('./tasks/build_css')([
  {name: 'build:app:css', file: './app/styles/app.css', watch: false},
  {name: 'build:spec:css', file: './spec/unit/spec.css', watch: false},

  {name: 'watch:app:css', file: './app/styles/app.css', watch: [browserSync.reload]},
  {name: 'watch:spec:css', file: './spec/unit/spec.css', watch: [browserSync.reload]}
]);
require('./tasks/build_js')([
  {name: 'build:app:js', file: './app/scripts/app.js', watch: false},
  {name: 'build:spec:js', file: './spec/unit/spec.js', watch: false},
  {name: 'build:spec:jasmine', file: './spec/unit/jasmine.js', watch: false},

  {name: 'watch:app:js', file: './app/scripts/app.js', watch: [browserSync.reload]},
  {name: 'watch:spec:js', file: './spec/unit/spec.js', watch: [browserSync.reload]},
  {name: 'watch:spec:jasmine', file: './spec/unit/jasmine.js', watch: [browserSync.reload]}
]);

gulp.task('build:app', ['build:app:html', 'build:app:css', 'build:app:js']);
gulp.task('build:spec', ['build:spec:html', 'build:spec:css', 'build:spec:js', 'build:spec:jasmine']);
gulp.task('build', ['build:app', 'build:spec']);

gulp.task('watch:app', ['watch:app:html', 'watch:app:css', 'watch:app:js']);
gulp.task('watch:spec', ['watch:spec:html', 'watch:spec:css', 'watch:spec:js', 'watch:spec:jasmine']);
gulp.task('watch', ['watch:app', 'watch:spec']);

gulp.task('serve', function() {
  browserSync({server: './dist', https: false, browser: []});
});

gulp.task('default', ['watch', 'serve']);
