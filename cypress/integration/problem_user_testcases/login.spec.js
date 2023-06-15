import {
  LoginHands,
  LoginEyes,
  LoginDependencies,
} from "../../robots/commonRobots/loginRobot";
import properties from "../../_utils/properties";
import { slowCypressDown } from "cypress-slow-down";

const loginEyes = new LoginEyes();
const loginHands = new LoginHands();
const loginDependencies = new LoginDependencies();
const url = properties.LOGIN_URL;
const userName_2 = properties.USERNAME_2;
const password = properties.PASSWORD;
const invalidUserName = properties.INVALID_USERNAME;
const invalidPassword = properties.INVALID_PASSWORD;

slowCypressDown(500);

context("Checking Login Page options and variations", () => {
  beforeEach("Visit Sauce Labs Demo Web Site", () => {
    loginDependencies.visitUrl(url);
    loginEyes.seesLoginUrl();
    loginEyes.seesWebTitle();
    loginEyes.seesLoginPageElements();
  });
  it("Trying to login using invalid UserName and Password", () => {
    loginHands.typeUserName(invalidUserName);
    loginHands.typePassword(invalidPassword);
    loginHands.clickOnLoginButton();
    loginEyes.seesLoginErrorMessage();
  });
  it("Trying to login using valid UserName and Password", () => {
    loginHands.typeUserName(userName_2);
    loginHands.typePassword(password);
    loginHands.clickOnLoginButton();
    loginEyes.seesInventoryUrl();
  });
});
