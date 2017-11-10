const test = require('tape');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

test('should go to google', function(t) {
    driver.get('https://www.google.com');
    driver.getTitle().then(function(title) {
        t.equal(title, 'Google');
    driver.quit();
    });
    t.end();
});
    
