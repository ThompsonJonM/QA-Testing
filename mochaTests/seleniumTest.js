// Dependencies
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setFirefoxOptions( /* _ */)
    .setChromeOptions(/* _ */)
    .build();

driver.get('http://www.google.com');
driver.getTitle().then(function( title ) {
    console.log(title);
});

driver.quit();