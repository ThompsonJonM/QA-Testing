var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get('https://pigmatic-app.herokuapp.com');
driver.findElement(webdriver.By.linkText('Add Collection')).click();

driver.findElement(webdriver.By.name('collectionName')).sendKeys('Eastern European');
driver.findElement(webdriver.By.name('accessionID')).sendKeys('21');


// driver.quit();