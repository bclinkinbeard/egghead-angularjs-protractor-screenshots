egghead-angularjs-protractor-screenshots
========================================

Code for the Better Protractor Testing with Screenshots video on egghead.io

```js
var IndexPage = require('./IndexPage'),
    capture = require('../screenshot');

describe('hello-protractor', function () {

  var page = new IndexPage();

  beforeEach(function() {
      page.get();
  });

  afterEach(function () {
    capture.takeScreenshot(jasmine.getEnv().currentSpec);
  });

  describe('index', function () {
    it('should display the correct title', function () {
      expect(page.getTitle()).toBe('hello protractor');
    });

    it('should display the message when button clicked', function () {
      page.clickButton();

      expect(page.getMessageText()).toBe('button 1 clicked');
    });
  });
});
```

```js
var fs = require('fs');

function capture (spec) {
	var name = spec.description.split(' ').join('_');

	browser.takeScreenshot().then(function (png) {
		var stream = fs.createWriteStream('screenshots/' + name + '.png');
		stream.write(new Buffer(png, 'base64'));
		stream.end();
	});
}

exports.takeScreenshot = function (spec) {
	capture(spec);
};

exports.takeScreenshotOnFailure = function (spec) {
	if (spec.results().passed()) return;

	capture(spec);
};
```