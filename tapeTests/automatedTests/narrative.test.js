const test = require('tape');
const beforeEach = require('tape');
const afterEach = require('tape');

const homePage = require('./pageObjects/narrativeHome.object');
const { driver, webdriver } = require('./pageObjects/driver.object');

beforeEach('should open to Narrative Science home page', function(t) {
    homePage.open()
    t.end();
});

test('should open to about us under resources', function(t) {
    homePage.resources()
    homePage.aboutUs()

    driver.getCurrentUrl().then(function(url) {
        t.deepEqual(url, homePage.resultURL);
    })
    
    t.end();
});

test('patent one should equal', function(t) {
    driver.findElement(webdriver.By.linkText('8,630,844')).getText().then(function(patentOneText) {
        t.deepEqual(patentOneText, '8,630,844')
    })

    t.end();
});

test('patent two should equal', function(t) {
    driver.findElement(webdriver.By.linkText('9,576,009')).getText().then(function(patentTwoText) {
        t.deepEqual(patentTwoText, '9,576,009')
    })

    t.end();
});

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
});