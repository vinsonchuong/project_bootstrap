// Acceptance specs are run in Node.js via jasmine-npm. These files are not
// run through the ES6 transpiler.

// Selenium is downloaded and run using selenium-standalone. It supports
// Chrome, Firefox, and PhantomJS. It can also run headlessly via xvfb.
// WebdriverIO allows specs to interface with Selenium. For CI, it supports
// running through Sauce Labs, BrowserStack, and TestingBot.
var webdriverio = require('webdriverio');

describe('Example Tests', function() {
  // By default, Jasmine only waits 5 seconds (5000ms) for each spec to finish.
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

  beforeEach(function() {
    // Create a new browser session before each spec.
    this.browser = webdriverio
      .remote({
        // Select and configure a browser. You can pass CLI flags, disable
        // CORS, accept self-signed SSL certificates, etc. Search for
        // "desiredCapabilities" for documentation.
        desiredCapabilities: {
          browserName: 'firefox'
        }
      })
      .init();
  });

  // Notice the done callback. Browser interactions happen asynchronously in
  // a different process.
  it('can load Google', function(done) {
    this.browser
      .url('http://www.google.com')
      .getTitle(function(error, title) {
        expect(title).toBe('Google');
      })
      // Call the done callback at the completion of the spec.
      .call(done);
  });

  afterEach(function(done) {
    // End the session after each spec.
    this.browser.end(done);
  });
});
