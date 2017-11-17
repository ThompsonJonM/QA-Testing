const test = require('tape');
const beforeEach = require('tape');
const afterEach = require('tape');

const { driver, homePage } = require('./pageObjects/homepage.object');

beforeEach('should open to profile page', function(t) {
    homePage.url()
    t.end();
});

test('should verify title is equal', function(t) {
    driver.getTitle().then(function(title) {
        t.deepEqual(title, homePage.title);
    })
    t.end();
});

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
});