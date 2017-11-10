// Dependencies
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('https://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('this is a test of selenium driver');
driver.findElement(webdriver.By.name('btnK')).click();
driver.quit();
