/// <reference types="cypress" />

import '../support/commands'; 

describe("E2E-Loggin and logout as a existing user", () => {
    before(() => {
      cy.visit("/");
    });
    beforeEach(() => {
      cy.clearCookies();
      cy.userLogIn();
    })
    afterEach(() => {
      cy.userLogOut();
    })
    context("Product search", () => {
    it('Should successfully find product on website', () => {
        cy.search();
    });
  });
});
