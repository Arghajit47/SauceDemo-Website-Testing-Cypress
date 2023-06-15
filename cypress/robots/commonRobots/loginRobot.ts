import { BaseEyes, BaseDependencies, BaseHands } from "../BaseRobot";
import properties from "../../_utils/properties/index";

const login_url = properties.LOGIN_URL;
const inventory_url = properties.INVENTORY_URL;

export class LoginEyes extends BaseEyes {
  seesLoginUrl() {
    this.seesUrl(login_url);
  }
  seesWebTitle() {
    this.seesTitle("Swag Labs");
  }
  seesLoginPageElements() {
    this.seesDomContainText("div.login_logo", "Swag Labs");
    this.seesDomEnabled("#user-name");
    this.seesDomEnabled("#password");
    this.seesDomEnabled("#login-button");
    this.seesDomVisible("#login_credentials");
    this.seesDomVisible(".login_password");
  }
  seesLoginErrorMessage() {
    this.seesDomContainText(
      "h3[data-test='error']",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }
  seesLockedOutLoginErrorMessage() {
    this.seesDomContainText(
      "h3[data-test='error']",
      "Epic sadface: Sorry, this user has been locked out."
    );
  }
  seesInventoryUrl() {
    this.seesUrl(inventory_url);
  }
}

export class LoginHands extends BaseHands {
  clickOnLoginButton() {
    this.clickOnDomElement("#login-button");
  }
  typeUserName(userName: string) {
    this.typeTextonId("user-name", userName);
  }
  typePassword(password: string) {
    this.typeTextonId("password", password);
  }
}

export class LoginDependencies extends BaseDependencies {}
