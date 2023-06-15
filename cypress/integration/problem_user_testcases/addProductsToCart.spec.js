import {
  AddProductsToCartEyes,
  AddProductsToCartHands,
} from "../../robots/commonRobots/addProductsToCart";
import {
  LoginHands,
  LoginEyes,
  LoginDependencies,
} from "../../robots/commonRobots/loginRobot";
import properties from "../../_utils/properties";
import { slowCypressDown } from "cypress-slow-down";

const addProductsToCartEyes = new AddProductsToCartEyes();
const addProductsToCartHands = new AddProductsToCartHands();
const loginEyes = new LoginEyes();
const loginHands = new LoginHands();
const loginDependencies = new LoginDependencies();
const url = properties.LOGIN_URL;
const userName_2 = properties.USERNAME_2;
const password = properties.PASSWORD;
const firstName = properties.FIRSTNAME;
const lastName = properties.LASTNAME;
const postalCode = properties.POSTAL_CODE;

context("Checking Products Page options and variations", () => {
  beforeEach("Visit Sauce Labs Demo Web Site", () => {
    loginDependencies.visitUrl(url);
    loginHands.typeUserName(userName_2);
    loginHands.typePassword(password);
    loginHands.clickOnLoginButton();
  });
  it("Checking Products Page and all functionalities", () => {
    loginEyes.seesInventoryUrl();
    addProductsToCartEyes.seesProductsPage();
  });
  it("Checking Naming sequenece functionality is not Working", () => {
    addProductsToCartEyes.seesProductNames();
    addProductsToCartHands.selectItemNamingSequence();
    addProductsToCartEyes.seesSelectedOptionInDropdown(
      "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)"
    );
    cy.log("The Sorting functionality is not working");
    addProductsToCartEyes.seesProductNames();
  });
  it("Add Backpack and Onesie to Cart and checkout, is it working or not?", () => {
    addProductsToCartHands.addSauceLabsBackpackToCart();
    addProductsToCartHands.addSauceLabsOnesieToCart();
    addProductsToCartHands.clickOnCartOption();
    addProductsToCartEyes.seesNumberOfItemsInCart("2");
    addProductsToCartEyes.seesCartPage();
    addProductsToCartHands.clickOnCheckoutButton();
    addProductsToCartEyes.seesCheckoutInfoPage();
    addProductsToCartHands.inputFirstName(firstName);
    addProductsToCartHands.inputLastName(lastName);
    addProductsToCartHands.inputPostalCode(postalCode);
    addProductsToCartHands.clickOnContinueButton();
    addProductsToCartEyes.seesErrorMessage();
  });
});
