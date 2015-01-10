var gulp = require('gulp');
var _ = require('lodash');
var jasminePhantom = require('gulp-jasmine-phantom');

// Defines Gulp tasks for running in-browser unit tests with PhantomJS.
// Takes an array of configuration objects:
//   [
//     {
//       name: String - Task Name
//       deps: Array[String] - Tasks to run before executing specs
//       specs: String | Array[String] - Spec file globs
//       implementation: String | Array[String] - App file globs
//       runner: String - Custom spec runner file
//     }
//     ...
//   ]
//
// Implementation files are loaded before spec files.
//
// If runner is specified, specs and implementation are ignored. Files must
// be required via script and link tags in the spec runner.
module.exports = function(unitTasks) {
  _.each(unitTasks, function(options) {
    gulp.task(options.name, options.deps, function()  {
      options.files = [].concat(options.implementation, options.specs);
      return gulp.src(options.files, {read: false})
      .pipe(jasminePhantom({
        integration: true,
        includeStackTrace: true,
        abortOnFail: true,
        specHtml: options.runner
      }));
    });
  });
};
