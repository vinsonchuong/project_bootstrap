var gulp = require('gulp');
var _ = require('lodash');
var Jasmine = require('jasmine');
var selenium = require('selenium-standalone');

// Defines Gulp tasks for running browser acceptance tests.
// Takes an array of configuration objects:
//   [
//     {
//       name: String - Task Name
//       deps: Array[String] - Tasks to run before executing specs
//       specs: String | Array[String] - Spec file globs
//       callback: Function(Boolean) - Called with whether the suite passes
//     }
//     ...
//   ]
module.exports = function(acceptanceTasks) {
  _.each(acceptanceTasks, function(options) {
    if (_.isString(options.specs)) {
      options.specs = [options.specs];
    }

    gulp.task(options.name, options.deps, function() {
      selenium(function() {
        var jasmine = new Jasmine();
        jasmine.configureDefaultReporter({
          onComplete: options.callback
        })
        jasmine.execute(options.specs);
      });
    });
  });
};
