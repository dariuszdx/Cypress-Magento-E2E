/// <reference types="cypress" />

import '../../cypress/support/commands'; 

describe("E2E-Checkout flow test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearCookies();
      cy.userLogIn();
    })
    afterEach(() => {
      cy.userLogOut();
    });   
  context("Product search", () => {
    it('Should successfully find product on website', () => {
        cy.search();
    });
  });
  context("Product filter", () => {
  it('Should successfully filter product by the colour', () => {
    cy.filterByColour()
  })
 });
context("Filter product and add to basket", () => {
  it('Should successfully filter the product by color and add it to cart', () => {
    cy.filterByColour();
    cy.basket();
  });
});
context("Basket update and procced to checkout", () => {
  it('Should update the number of products in cart and proceed to checkout', () => {
    cy.update();
    cy.checkout();
    cy.getBySelector(".base").should("exist")
  });
});
});
