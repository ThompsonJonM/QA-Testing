const test = require('tape');
const beforeEach = require('tape');
const afterEach = require('tape');

const { driver, contactPage } = require('./pageObjects/contact.object');

beforeEach('should open to contact page', function(t) {
    contactPage.open()
    t.end();
});

test('should verify submission url is equal', function(t) {
    contactPage.nameEntry('Jonathan Thompson')
    contactPage.emailEntry('jthompson@ricasurgical.com')
    contactPage.messageEntry('This is a test')
    contactPage.submitTerms()

    driver.getCurrentUrl().then(function(url) {
        t.deepEqual(url, contactPage.resultUrl);
    })
    
    t.end();
});

afterEach('should close the driver once testing has finished', function(t) {
    driver.quit()
    t.end();
});