/// <reference types="cypress" />

import '../support/commands'; 

describe("E2E-Add new address", () => {
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
    context("User address", () => {
    it('Should successfully add new user address', () => {
        cy.addAddress();
        cy.getBySelector(".message-success > div").should("exist")
    });
  });
});
