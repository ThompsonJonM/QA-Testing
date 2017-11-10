// Dependencies
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

driver.navigate().to('http://www.jmarshthompson.com/')
    .then(() => driver.findElement(webdriver.By.linkText('CONTACT ME')).click())
    .then(() => driver.findElement(webdriver.By.name('name')).sendKeys('Jonathan Thompson'))
    .then(() => driver.findElement(webdriver.By.name('email')).sendKeys('jthompson@ricasurgical.com'))
    .then(() => driver.findElement(webdriver.By.name('message')).sendKeys('This is a test of selenium webdriver on my personal profile.'))
    .then(() => driver.findElement(webdriver.By.className('col-4 ml-auto mr-auto btn btn-dark')).click())
    .then(() => driver.findElement(webdriver.By.linkText('Take Me Home')).click())
    .then(() => driver.quit())