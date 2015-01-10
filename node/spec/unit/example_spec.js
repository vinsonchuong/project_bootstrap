// All spec files must be required by `./spec/unit/spec.js`.
// You are free to add a directory-importing Browserify transform, but
// Watchify may be unable to detect spec file changes. Also, gulp.watch does
// not watch for new or deleted files.
describe('Example Test', function() {
  function fn(x) {
    var next = x + 1;
    var prev = x - 1;
    return {next, prev}
  }

  it('works', function() {
    // Jasmine unit tests are passed through 6to5, an ES6 transpiler.
    var {next, prev} = fn(1);
    expect(next).toBe(2);
    expect(prev).toBe(0);
  });
});
