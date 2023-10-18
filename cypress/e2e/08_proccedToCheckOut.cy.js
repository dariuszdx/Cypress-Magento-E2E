/// <reference types="cypress" />

import '../support/commands';

describe("E2E-Update quantity of product in basket", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  });

  afterEach(() => {
    cy.userLogOut();
  });

  context("Filter product and add to basket", () => {
    it('Should successfully filter the product by color and add it to cart', () => {
      cy.filterByColour();
      cy.basket();
    });
  });
  context("Basket update", () => {
    it('Should update the number of products in cart and proceed to checkout', () => {
      cy.update();
      cy.checkout();
      cy.getBySelector(".base").should("exist")
    });
  });
});
