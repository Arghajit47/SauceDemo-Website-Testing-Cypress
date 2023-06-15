Automation Testing Repo

## 1. Clone the repository

Clone the repository to your local machine using this command: `git clone https://github.com/Arghajit47/SauceDemo-Website-Testing-Cypress.git`

## 2. Install NPM dependencies

Go to the root folder of the cloned project and install dependencies using this command: `npm install`

## 3. Run Cypress tests

Run the Cypress app using this command: `npx cypress open` //Not Applicable for this Automation
Cypress launchpad will open. From this console, select the tests and click on Run to run the tests.

## 4. Run Cypress in headless mode

To run cypress in headless mode: `npx cypress run` //Not Applicable for this Automation

## 5. To run Cypress testsing in specified browser, headless mode

To run cypress in headless mode in specified browser: `npx cypress run --browser <BrowserName>` //Not Applicable for this Automation

## 6. Run cypress tests in headed mode in specified browser with given browser name

`npx cypress run --config-file <cypress.config.json> --browser <browserName> --headed`

## 7. Inside this Automation Directory we have standardUser-config.json, problemUser-config.json, performanceGlitchUser-config.json & lockedOutUser-config.json file we have the testfiles in sequence. Also to run the entire testfile we can use all-config.json.

## 8. Standard User Automation Test cases(In Chrome)

`npx cypress run --config-file standardUser-config.json --browser chrome --headed`

## 9. Locked Out User Automation Test cases(In Chrome)

`npx cypress run --config-file lockedOutUser-config.json --browser chrome --headed`

## 10. Performance Glitch User Automation Test cases(In Chrome)

`npx cypress run --config-file performanceGlitchUser-config.json --browser chrome --headed`

## 11. Problem User Automation Test cases(In Chrome)

`npx cypress run --config-file problemUser-config.json --browser chrome --headed`

## 12. To run all the Automation Test cases(In Chrome)

`npx cypress run --config-file all-config.json --browser chrome --headed`
