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

beforeEach('should open to profile page', function(t) {
    driver.get('http://www.jmarshthompson.com')
    t.end();
});

test('should enter text into contact and submit', function(t) {
    driver.findElement(webdriver.By.name('contactLink')).click();
    driver.findElement(webdriver.By.name('name')).sendKeys('Jonathan');
    driver.findElement(webdriver.By.name('email')).sendKeys('test case');
    driver.findElement(webdriver.By.name('message')).sendKeys('This should fail.');
    driver.findElement(webdriver.By.name('submitButton')).click();
    t.fail('Invalid input entered');

    t.end();
});

test('should enter text into contact and submit', function(t) {
    driver.findElement(webdriver.By.name('contactLink')).click();
    driver.findElement(webdriver.By.name('name')).sendKeys('Jonathan');
    driver.findElement(webdriver.By.name('email')).sendKeys('jthompson@ricasurgical.com');
    driver.findElement(webdriver.By.name('message')).sendKeys('This should pass.');
    driver.findElement(webdriver.By.name('submitButton')).click();
    driver.getCurrentUrl().then(function(url) {
        t.equal(url, 'http://www.jmarshthompson.com/contact-submit');
    })

    t.end();
});

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
});