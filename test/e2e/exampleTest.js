describe('Example:', function () {
  'use strict';
 
  beforeEach(function () {
    // Load up a view and wait for it to be done with its rendering and epicycles.
    browser.get('/angularTest/app/');
    browser.waitForAngular();
  });
 
  it('view title', function () {
    var element = browser.findElement(by.css('.title-area a'));
    expect(element.isDisplayed()).toBe(true);
    expect(element.getText()).toBe('My Site');
  });
});