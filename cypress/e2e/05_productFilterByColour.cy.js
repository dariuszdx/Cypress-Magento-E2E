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
  context("Product filter by red colur", () => {
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
  });
});
