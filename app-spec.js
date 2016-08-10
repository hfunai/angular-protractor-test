describe('AngularJS minimal test', function() {
  it('should display your name', function() {
    browser.get('http://localhost:8080');

    element(by.model('name')).sendKeys('hogehoge');
	expect(element(by.binding('name')).getText()).toEqual('Hello hogehoge!');
  });

  it('should display alert', function() {
    EC = protractor.ExpectedConditions

    browser.get('http://localhost:8080');

    element(by.css('.name')).click()
    browser.wait(EC.alertIsPresent(), 3000)
    browser.switchTo().alert().accept()
  });
});
