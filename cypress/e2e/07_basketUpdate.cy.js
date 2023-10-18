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
    it('Should successfully filter product by the colour and add to the basket', () => {
      cy.filterByColour();
      cy.basket();
    });
  });

  context("Basket update", () => {
    it('Should update the quantity of product in the basket', () => {
      cy.update();
    });
  });
});
