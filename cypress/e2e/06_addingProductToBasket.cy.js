/// <reference types="cypress" />

import basket from "../page_objects/basket";
import category from "../page_objects/category";
import "../support/commands";

describe("E2E-Adding product to basket", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
    });
    after(() => {
      cy.userLogOut();
  });
  context("Filter product and add to the basket", () => {
    it("User should open mens category tab", () => {
      category.mensCategoryTab.click();
      cy.getElementWithClassBase().should("exist").and("contain", "Men");
      cy.location("pathname").should("eq", "/men.html");
    });
    it("User should open mens tops category tab", () => {
      category.mensCategoryTops.click();
      cy.getElementWithClassBase().should("exist").and("contain", "Tops");
      cy.location("pathname").should("eq", "/men/tops-men.html");
    });
    it("User should filter mens tops by red colour", () => {
      category.filterByColour.click();
      category.redColour.click();
      cy.getElementWithClassBase().should("exist").and("contain", "Tops");
      cy.location("pathname").should("eq", "/men/tops-men.html");
      cy.getFilterStatus().should("exist").and("contain", "Red");
      cy.getProductsTable().should("exist").and("contain", "Red");
    });
    it("User should click on  Primo Endurance Tank ", () => {
      cy.findProductByName("Primo Endurance Tank").click();
      cy.getElementWithClassBase()
        .should("exist")
        .and("contain", "Primo Endurance Tank");
      cy.location("pathname").should("eq", "/primo-endurance-tank.html");
    });
    it("User should choose size, colour and quanitity of Primo Endurance Tank ", () => {
      basket.sizeM.click();
      basket.redColour.click();
      basket.qtyField.clear().type("1");
    });
    it("User should check if the product contain the chosen attributes", () => {
      basket.sizeM.should("contain", "M")
      basket.colorAttribute.should("contain", "Red")
      basket.qtyField.should("have.value", "1")
    });
    it("User should add product to the basket, and verify iy has been added", () => {
      basket.addProductButton.click();
      cy.wait(5000)
      basket.basket.click();
      basket.viewBasket.click();
      basket.basketInfo.should("exist").and("contain", "Primo Endurance Tank");
      cy.getElementWithClassBase().should("exist").and("contain", "Shopping Cart");
      cy.location("pathname").should("eq", "/checkout/cart/");
      basket.deleteBasket.click({ force: true });
      cy.wait(5000)
      basket.emptyBasket.should("exist").and("contain", "You have no items in your shopping cart.");
    });
  });
});
