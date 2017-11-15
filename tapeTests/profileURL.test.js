const test = require('tape');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const beforeEach = require('tape');
const afterEach = require('tape');

const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

beforeEach('should open to profile page', function(t) {
    driver.get('http://www.jmarshthompson.com')
    t.end();
})

test('should verify empty title', function(t) {
    driver.getTitle().then(function(title) {
        t.equal(title, '');
    })
    t.end();
});

test('should go to contact page', function(t) {
    driver.findElement(webdriver.By.name('contactLink')).click();
    driver.getCurrentUrl().then(function(url) {
        t.equal(url, 'http://www.jmarshthompson.com/contact');
    })
    t.end();
});

test('should go to the works page', function(t) {
    driver.findElement(webdriver.By.name('worksLink')).click();
    driver.getCurrentUrl().then(function(url) {
        t.deepEqual(url, 'http://www.jmarshthompson.com/works');
    })
    t.end();
});

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
});