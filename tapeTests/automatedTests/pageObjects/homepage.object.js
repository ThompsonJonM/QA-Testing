const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

const homePage = {
    url: function() {
        driver.get('http://www.jmarshthompson.com')
    },

    title: '',
}

module.exports = { driver, homePage };