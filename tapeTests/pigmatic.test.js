const test = require('tape');
const beforeEach = require('tape');
const afterEach = require('tape');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

beforeEach('should open pigmatic home', function(t) {
    driver.get('https://pigmatic-app.herokuapp.com')
    t.end();
});

test('should nav to view collection', function(t) {
    driver.findElement(webdriver.By.linkText('View Collections')).click()
    driver.getCurrentUrl().then(function(url) {
        t.deepEqual(url, 'https://pigmatic-app.herokuapp.com/view-collections')
    })

    t.end();
})

afterEach('should close driver upon test completion', function(t) {
    driver.quit()
    t.end();
})