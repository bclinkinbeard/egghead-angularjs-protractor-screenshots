var IndexPage = require('./IndexPage'),
    fs = require('fs');

describe('hello-protractor', function () {

  var page = new IndexPage();

  beforeEach(function() {
      page.get();
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
