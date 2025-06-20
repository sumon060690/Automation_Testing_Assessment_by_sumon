# Automation Test – Locked Out User
## Objective:
Automate the login process on SauceDemo to test the behavior when using a locked-out user account and verify the displayed error message.

## Tools & Technologies Used:
Language: JavaScript (Node.js)
Automation Tool: Selenium WebDriver
Package Manager: npm
Browser: Chrome (via ChromeDriver)
Assertion Library: Chai (optional)
Environment Variable Management: dotenv (optional)

## Test Steps:
Open the login page: https://www.saucedemo.com/
Enter the following credentials:
Username: locked_out_user
Password: secret_sauce
Click the Login button.
Verify the appearance of the error message:
Expected Text:
Epic sadface: Sorry, this user has been locked out.

