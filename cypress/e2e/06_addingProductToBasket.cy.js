/// <reference types="cypress" />

import '../support/commands'; 

describe("E2E-Adding product to basket", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearCookies();
      cy.userLogIn();
    })
    afterEach(() => {
      cy.userLogOut();
    });
    context("Filter product and add to basket", () => {
    it('Should successfully filter product by the colour and add to teh basket', () => {
      cy.filterByColour()
      cy.basket();
    })
  })
});