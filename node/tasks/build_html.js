var gulp = require('gulp');
var _ = require('lodash');
var htmlmin = require('gulp-htmlmin');

var htmlminOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  preventAttributesEscaping: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true
};

// Defines Gulp tasks for building HTML files.
// Takes an array of configuration objects:
//   [
//     {
//       name: String - Task Name
//       file: String - The HTML file to build
//       minify: Boolean - Whether to minify and optimize the HTML
//       watch: Boolean - Whether to rebuild on file updates
//     }
//     ...
//   ]
//
// The build artifact is saved in ./dist with the same name as the input file.
module.exports = function(htmlTasks) {
  _.each(htmlTasks, function(options) {
    var watchOnce = _.once(function() {
      gulp.watch(options.file, [options.name].concat(options.watch));
    });
    gulp.task(options.name, function() {
      if (options.watch) {
        watchOnce();
      }
      return gulp.src(options.file)
        .pipe(htmlmin(options.minify ? htmlminOptions : {}))
        .pipe(gulp.dest('./dist'));
    });
  });
};
