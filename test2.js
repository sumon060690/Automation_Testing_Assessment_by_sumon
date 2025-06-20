const { Builder, By, until } = require('selenium-webdriver');

(async function loginWithLockedOutUser() {
  // Launch Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to Swag Labs site
    await driver.get('https://www.saucedemo.com/');

    // Enter username
    await driver.findElement(By.id('user-name')).sendKeys('locked_out_user');

    // Enter password
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');

    // Click login button
    await driver.findElement(By.id('login-button')).click();

    // Wait for error message to appear
    await driver.wait(until.elementLocated(By.css('[data-test="error"]')), 5000);

    // Get the error message text
    const errorElement = await driver.findElement(By.css('[data-test="error"]'));
    const errorMessage = await errorElement.getText();

    // Expected message
    const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';

    // Verify the error message
    if (errorMessage === expectedMessage) {
      console.log('✅ Test Passed: Correct error message displayed.');
    } else {
      console.log(`❌ Test Failed: Expected "${expectedMessage}", but got "${errorMessage}"`);
    }

  } catch (error) {
    console.error('❌ Error during test execution:', error);
  } finally {
    // Close the browser
    await driver.quit();
     await driver.sleep(5000);
  }
})();
