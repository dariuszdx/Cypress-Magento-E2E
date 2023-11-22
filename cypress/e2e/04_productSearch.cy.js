/// <reference types="cypress" />

import search from "../page_objects/search";
import "../support/commands";

describe("E2E-Search product by name", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  });

  after(() => {
    cy.userLogOut();
  });

  context("Performing product search", () => {
    it("Should successfully type product name in search field", () => {
      search.searchField.clear().type(Cypress.env("product"));
    });

    it("Should check if the search field contains the entered value", () => {
      search.searchField.should("have.value", Cypress.env("product"));
    });

    it("Should click on loop button and confirm that the product has been displayed", () => {
      search.loopButton.click();
      cy.verifySearchElement("jacket");
      cy.location("pathname").should("eq", "/catalogsearch/result/");
    });
  });
});
