/// <reference types="cypress" />

import category, { filter } from "../page_objects/category";
import "../support/commands";

describe("E2E-Filter product by colour", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  });

  after(() => {
    cy.userLogOut();
  });

  context("Navigate to men's category tab", () => {
    it("User should open men's category tab", () => {
      category.mensCategoryTab.click();
      cy.getElementWithClassBase().should("exist").and("contain", "Men");
      cy.location("pathname").should("eq", "/men.html");
    });
  });

  context("Navigating to men's tops category tab", () => {
    it("User should open men's tops category tab", () => {
      category.mensCategoryTops.click();
      cy.getElementWithClassBase().should("exist").and("contain", "Tops");
      cy.location("pathname").should("eq", "/men/tops-men.html");
    });
  });

  context("Filtering men's clothes by colour", () => {
    it("User should filter men's tops by red colour", () => {
      category.filterByColour.click();
      category.redColour.click({ force: true });
      cy.getElementWithClassBase().should("exist").and("contain", "Tops");
      cy.location("pathname").should("eq", "/men/tops-men.html");
      cy.getFilterStatus().should("exist").and("contain", "Red");
      cy.getProductsTable().should("exist").and("contain", "Red");
    });
  });
});
