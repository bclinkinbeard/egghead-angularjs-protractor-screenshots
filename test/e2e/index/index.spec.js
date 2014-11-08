var IndexPage = require('./IndexPage'),
    fs = require('fs');

describe('hello-protractor', function () {

  var page = new IndexPage();

  beforeEach(function() {
      page.get();
  });

  afterEach(function () {
    var spec = jasmine.getEnv().currentSpec;
    var specName = spec.description.split(' ').join('_');

    if (spec.results().passed()) return;

    browser.takeScreenshot().then(function (png) {
      var stream = fs.createWriteStream('grabs/' + specName + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
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
