/// <reference types="cypress" />

import basket from "../page_objects/basket";
import category from "../page_objects/category";
import "../support/commands";

describe(
  "E2E-Changing quantity of product in basket",
  { testIsolation: false },
  () => {
    before(() => {
      cy.visit("/");
      cy.clearCookies();
      cy.userLogIn();
    });

    after(() => {
      cy.userLogOut();
    });

    context("Navigating to men's category tab", () => {
      it("User should open mens category tab", () => {
        category.mensCategoryTab.click();
        cy.getElementWithClassBase().should("exist").and("contain", "Men");
        cy.location("pathname").should("eq", "/men.html");
      });
    });

    context("Navigating to men's tops category tab", () => {
      it("User should open mens tops category tab", () => {
        category.mensCategoryTops.click();
        cy.getElementWithClassBase().should("exist").and("contain", "Tops");
        cy.location("pathname").should("eq", "/men/tops-men.html");
      });
    });

    context("Filtering men's clothes by colour", () => {
      it("User should filter mens tops by red colour", () => {
        category.filterByColour.click();
        category.redColour.click({ force: true });
        cy.getElementWithClassBase().should("exist").and("contain", "Tops");
        cy.location("pathname").should("eq", "/men/tops-men.html");
        cy.getFilterStatus().should("exist").and("contain", "Red");
        cy.getProductsTable().should("exist").and("contain", "Red");
      });
    });

    context("Choosing product", () => {
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
        basket.sizeM.should("contain", "M");
        basket.colorAttribute.should("contain", "Red");
        basket.qtyField.should("have.value", "1");
      });
    });

    context("Adding product to the basket", () => {
      it("User should add product to the basket", () => {
        basket.addProductButton.click();
        cy.getElementByDiv("message-succes")
          .should("exist")
          .and(
            "contain",
            "You added Primo Endurance Tank to your shopping cart."
          );
      });

      it("User should open basket, and verify tha product has been added", () => {
        basket.basket.click();
        basket.viewBasket.click();
        basket.basketInfo
          .should("exist")
          .and("contain", "Primo Endurance Tank");
        cy.getElementWithClassBase()
          .should("exist")
          .and("contain", "Shopping Cart");
        cy.location("pathname").should("eq", "/checkout/cart/");
      });
    });

    context("Changing quantity of product in basket", () => {
      it("User should change quantity in basket, and verify quantity has been changed", () => {
        cy.getChangeQtyOfProductField(5);
        basket.qtyProductField.should("have.value", "5");
      });
    });

    context("Deleting product from the basket", () => {
      it("User should delete product from basket, and verify there in no products in basket", () => {
        basket.deleteBasket.click({ force: true });
        basket.emptyBasket
          .should("exist")
          .and("contain", "You have no items in your shopping cart.");
      });
    });
  }
);
