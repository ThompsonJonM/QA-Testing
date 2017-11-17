const t = require('tape');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

const contactPage = {
    open: function() {
        driver.get('http://www.jmarshthompson.com/contact')
    },

    nameEntry: function(nameTerms) {
        driver.findElement(webdriver.By.name('name')).sendKeys(nameTerms)
    },

    emailEntry: function(emailTerms) {
        driver.findElement(webdriver.By.name('email')).sendKeys(emailTerms)
    }, 

    messageEntry: function(messageTerms) {
        driver.findElement(webdriver.By.name('message')).sendKeys(messageTerms)
    },

    submitTerms: function() {
        driver.findElement(webdriver.By.name('submitButton')).click()
    },

    resultUrl: 'http://www.jmarshthompson.com/contact-submit'
}

module.exports = { driver, contactPage };