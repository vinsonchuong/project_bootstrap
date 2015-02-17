var path = require('path');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var _ = require('lodash');
var browserify = require('browserify');
var watchify = require('watchify');

var bundler = _.memoize(function(filename, options) {
  options = Object(options);
  var b = browserify((filename), _.extend({debug: true}, watchify.args));
  if (options.watch) {
    b = watchify(b)
      .on('update', function() {
        gulp.start.apply(gulp, options.watch);
      });
  }
  return b
    .transform('babelify', {sourceMap: true})
    .transform('uglifyify', {ignore: options.minify ? [] : '**'});
});

// function browserify(options) {
//   return transform(function(fileName) {
//     return bundler(fileName, options).bundle();
//   });
// }

// Defines Gulp tasks for building JS files.
// Takes an array of configuration objects:
//   [
//     {
//       name: String - Task Name
//       file: String - The JS file to build
//       minify: Boolean - Whether to uglify the JS
//       watch: Boolean - Whether to rebuild on file updates
//     }
//     ...
//   ]
//
//   The JS file is passed through Browserify and 6to5, which:
//     * Transpiles ES6 syntax into ES5
//     * Resolves import dependencies and concatenates files in order
//     * Produces Source Maps
//
// The build artifact is saved in ./dist with the same name as the input file.
module.exports = function(jsTasks) {
  _.each(jsTasks, function(options) {
    gulp.task(options.name, function() {
      return bundler(options.file, {watch: options.watch && [options.name].concat(options.watch)})
        .bundle()
        .pipe(source(path.basename(options.file)))
        .pipe(gulp.dest('./dist'))
    });
  });
};
