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
})

test('should enter text into contact and submit', function(t) {
    driver.findElement(webdriver.By.name('name')).sendKeys('Jonathan Thompson');
    driver.findElement(webdriver.By.name('email')).sendKeys('jthompson@ricasurgical.com');
    driver.findElement(webdriver.By.name('message')).sendKeys('This is a test using Selenium and Tape.');
    driver.findElement(webdriver.By.name('submitButton')).click();
    driver.getCurrentUrl().then(function(url) {
        t.equal(url, 'http://www.jmarshthompson.com/contact-submit');

    driver.quit();
    })
    t.end();
})

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
})