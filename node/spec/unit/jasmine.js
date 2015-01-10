import * as jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window.jasmineRequire = jasmineRequire;
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

if (window._phantom) {
  import jasmineConsole from 'gulp-jasmine-phantom/vendor/jasmine-2.0/console.js';
  window.jasmineRequire.console = jasmineConsole.console;
  window.jasmineRequire.ConsoleReporter = jasmineConsole.ConsoleReporter;
  import 'gulp-jasmine-phantom/lib/specRunner.js';
}
