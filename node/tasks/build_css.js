var gulp = require('gulp');
var _ = require('lodash');
var cssnext = require('gulp-cssnext');

var cssnextOptions = {
  sourcemap: true
};

// Defines Gulp tasks for building CSS files.
// Takes an array of configuration objects:
//   [
//     {
//       name: String - Task Name
//       file: String - The CSS file to build
//       minify: Boolean - Whether to minify the CSS
//       watch: Boolean - Whether to rebuild on file updates
//     }
//     ...
//   ]
//
//   The CSS file is passed through cssnext, which:
//     * Inlines @import statements
//     * Transpiles some CSS4 features into CSS2/3
//     * Adds vendor-specific prefixes
//     * Produces Source Maps
//
// The build artifact is saved in ./dist with the same name as the input file.
module.exports = function(cssTasks) {
  _.each(cssTasks, function(options) {
    var watchOnce = _.once(function() {
      gulp.watch(options.file, [options.name].concat(options.watch));
    });

    gulp.task(options.name, function() {
      if (options.watch) {
        watchOnce();
      }
      return gulp.src(options.file)
        .pipe(cssnext(_.extend({compress: options.minify}, cssnextOptions)))
        .pipe(gulp.dest('./dist'));
    });
  });
};
