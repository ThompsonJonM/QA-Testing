// Dependencies
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

driver.navigate().to('http://www.jmarshthompson.com/')
    .then(() => driver.findElement(webdriver.By.name('contactLink')).click())
    .then(() => driver.findElement(webdriver.By.name('nameBox')).sendKeys('Jonathan Thompson'))
    .then(() => driver.findElement(webdriver.By.name('emailBox')).sendKeys('jthompson@ricasurgical.com'))
    .then(() => driver.findElement(webdriver.By.name('messageBox')).sendKeys('This is a test of selenium webdriver on my personal profile.'))
    .then(() => driver.findElement(webdriver.By.name('submitButton')).click())
    // .then(() => driver.findElement(webdriver.By.name('homeLink')).click())
    // .then(() => driver.quit())