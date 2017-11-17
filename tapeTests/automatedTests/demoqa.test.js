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

// Opens new window for testing
beforeEach('should navigate to demoqa site', function(t) {
    driver.get('http://www.demoqa.com/')
    t.end();
});

/* Nav to demoqa site and compare title
Test will pass if title === 'Demoqa | Just another Wordpress site' */
test('title should equal demoqa title', function(t) {
    driver.getTitle().then(function(title) {
        t.deepEqual(title, 'Demoqa | Just another WordPress site')
    })

    t.end();
});

/* Will nav to page, click "Tab 2" then compare aria
Test will pass if aria === 'false' */
test('navigate to ui-id-2', function(t) {
    driver.findElement(webdriver.By.id('ui-id-2')).click()
    driver.findElement(webdriver.By.id('tabs-2')).getAttribute('aria-hidden').then(function(aria) {
        t.deepEqual(aria, 'false')
    })

    t.end();
});

// Closes the driver following each test
afterEach('should close browser following each test', function(t) {
    driver.quit()
    t.end();
});