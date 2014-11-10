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
