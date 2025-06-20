const { Builder, Browser, By, Key } = require("selenium-webdriver");

let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
  await driver.get("https://www.saucedemo.com/");
  await driver.manage().window().maximize();
  //console.log(Site Title: ${await driver.getTitle()})
  await driver.findElement(By.id('user-name')).sendKeys('locked_out_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  let errorMsg = await driver.wait(
      until.elementLocated(By.css('.error-message-container')),
      5000
    );
  await driver.sleep(5000);
  await driver.quit();
}

testRunner();