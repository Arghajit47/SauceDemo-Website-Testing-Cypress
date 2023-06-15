import { BaseEyes, BaseHands, BaseDependencies } from "../BaseRobot";
import properties from "../../_utils/properties";

const checkoutComplete_url = properties.CHECKOUT_COMPLETE_URL;
const checkoutInfo_url = properties.CHECKOUT_INFO_URL;
const checkoutOverview_url = properties.CHECKOUT_OVERVIEW_URL;

const products = [
  "Sauce Labs Backpack",
  "Sauce Labs Bike Light",
  "Sauce Labs Bolt T-Shirt",
  "Sauce Labs Fleece Jacket",
  "Sauce Labs Onesie",
  "Test.allTheThings() T-Shirt (Red)",
];
// const reverseProducts = products.reverse();

export class AddProductsToCartEyes extends BaseEyes {
  seesProductsPage() {
    this.seesDomVisible("button#react-burger-menu-btn");
    this.seesDomVisible("div#shopping_cart_container>a");
    this.seesDomVisible("select[data-test='product_sort_container']");
    for (var items = 0; items < 6; items++) {
      this.seesDomVisible("div#inventory_container>div>div");
    }
    this.seesDomVisible("li.social_twitter");
    this.seesDomVisible("li.social_facebook");
    this.seesDomVisible("li.social_linkedin");
  }
  seesOnesieProductPage() {
    this.seesDomEnabled("#back-to-products");
    this.seesDomVisible("div.inventory_details_name.large_size");
    this.seesDomVisible("div.inventory_details_desc.large_size");
    this.seesDomVisible("div.inventory_details_price");
    this.seesDomVisible("#add-to-cart-sauce-labs-onesie");
  }
  seesCartPage() {
    this.seesDomElementWithXpath("//span[text()='Your Cart']");
    this.seesDomEnabled("#continue-shopping");
    this.seesDomVisible("#checkout");
    for (var count = 0; count < 2; count++) {
      this.seesDomWithIndex('div[class="cart_item"]', count);
    }
  }
  seesNumberOfItemsInCart(count: string) {
    this.seesDomContainText("span.shopping_cart_badge", count);
  }
  seesProductNames() {
    for (let index = 0; index < 6; index++) {
      cy.get('div[class="inventory_item_name"]')
        .eq(index)
        .should("contain.text", products[index]);
    }
  }
  seesProductNamesInReverseOrder() {
    const reverseProducts = products.reverse();
    for (let index = 0; index < 6; index++) {
      cy.get('div[class="inventory_item_name"]')
        .eq(index)
        .should("contain.text", reverseProducts[index]);
    }
  }
  seesCheckoutInfoPage() {
    this.seesUrl(checkoutInfo_url);
    this.seesDomElementWithXpath("//input[@id='first-name']");
    this.seesDomElementWithXpath("//input[@id='last-name']");
    this.seesDomElementWithXpath("//input[@id='postal-code']");
    this.seesDomElementWithXpath("//input[@id='continue']");
    this.seesDomElementWithXpath("//button[@id='cancel']");
  }
  seesCheckoutCompletePage() {
    this.seesUrl(checkoutComplete_url);
    this.seesDomVisible("img[alt='Pony Express']");
    this.seesDomContainText(
      "div#checkout_complete_container>h2",
      "Thank you for your order!"
    );
    this.seesDomContainText(
      "div.complete-text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
    this.seesDomEnabled("#back-to-products");
  }
  seesCheckoutOverviewUrl() {
    this.seesUrl(checkoutOverview_url);
  }
  seesNamingSequence(text: string) {
    this.seesSelectedOptionInDropdown(text);
  }
  seesProductImageChanges(link: string) {
    this.seesDomVisible(`img[src="${link}"]`);
  }
  seesErrorMessage() {
    this.seesDomContainText(
      "h3[data-test='error']",
      "Error: Last Name is required"
    );
  }
}

export class AddProductsToCartHands extends BaseHands {
  clickOnHamburgerMenu() {
    this.clickOnDomElement("button#react-burger-menu-btn");
  }
  clickOnCartOption() {
    this.clickOnDomElement("div#shopping_cart_container>a");
  }
  clickOnSauceLabsBackpack() {
    this.clickOnDomElement("a#item_4_title_link");
  }
  clickOnSauceLabsBikeLight() {
    this.clickOnDomElement("a#item_0_title_link");
  }
  clickOnSauceLabsBoltTShirt() {
    this.clickOnDomElement("a#item_1_title_link");
  }
  clickOnSauceLabsFleeceJacket() {
    this.clickOnDomElement("a#item_5_title_link");
  }
  clickOnSauceLabsOnesie() {
    this.clickOnDomElement("a#item_2_title_link");
  }
  clickOnSauceLabsRedTShirt() {
    this.clickOnDomElement("a#item_3_title_link");
  }
  addSauceLabsBackpackToCart() {
    this.clickOnDomElement("#add-to-cart-sauce-labs-backpack");
  }
  addSauceLabsBikeLightToCart() {
    this.clickOnDomElement("#add-to-cart-sauce-labs-bike-light");
  }
  addSauceLabsBoltTShirtToCart() {
    this.clickOnDomElement("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  addSauceLabsFleeceJacketToCart() {
    this.clickOnDomElement("#add-to-cart-sauce-labs-fleece-jacket");
  }
  addSauceLabsOnesieToCart() {
    this.clickOnDomElement("#add-to-cart-sauce-labs-onesie");
  }
  addSauceLabsRedTShirtToCart() {
    this.clickOnDomElement("#add-to-cart-test.allthethings()-t-shirt-(red)");
  }
  removeSauceLabsBackpackFromCart() {
    this.clickOnDomElement("#remove-sauce-labs-backpack");
  }
  removeSauceLabsBikeLightFromCart() {
    this.clickOnDomElement("#remove-sauce-labs-bike-light");
  }
  removeSauceLabsBoltTShirtFromCart() {
    this.clickOnDomElement("#remove-sauce-labs-bolt-t-shirt");
  }
  removeSauceLabsFleeceJacketFromCart() {
    this.clickOnDomElement("#remove-sauce-labs-fleece-jacket");
  }
  removeSauceLabsOnesieFromCart() {
    this.clickOnDomElement("#remove-sauce-labs-onesie");
  }
  removeSauceLabsRedTShirtFromCart() {
    this.clickOnDomElement("#remove-test.allthethings()-t-shirt-(red)");
  }
  clickOnContinueShoppingButton() {
    this.clickOnDomElement("#continue-shopping");
  }
  clickOnCheckoutButton() {
    this.clickOnDomElement("#checkout");
  }
  clickOnBackToProducts() {
    this.clickOnDomElement("#back-to-products");
  }
  selectItemNamingSequence() {
    this.selectInDropdown("za");
  }
  clickOnContinueButton() {
    this.clickOnDomElementWithXpath("//input[@id='continue']");
  }
  clickOnFinishButton() {
    this.clickOnDomElementWithXpath("//button[@id='finish']");
  }
  inputFirstName(firstName: string) {
    this.typeTextonId("first-name", firstName);
  }
  inputLastName(lastName: string) {
    this.typeTextonId("last-name", lastName);
  }
  inputPostalCode(postalCode: string) {
    this.typeTextonId("postal-code", postalCode);
  }
}
