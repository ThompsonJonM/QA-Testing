
const { driver, webdriver } = require('./driver.object');

const homePage = {
    open: function() {
        driver.get('https://www.narrativescience.com')
    },

    resources: function() {
        driver.findElement(webdriver.By.linkText('Resources')).click()
    },

    aboutUs: function() {
        driver.findElement(webdriver.By.linkText('About Us')).click()
    },

    resultURL: 'https://narrativescience.com/Resources/About-Narrative-Science/About-Us'
}

module.exports = homePage;