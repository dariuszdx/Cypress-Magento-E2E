/// <reference types="cypress" />

import '../../cypress/support/commands'; 

describe("E2E-Register a new user", () => {
    before(() => {
      cy.visit("/");
    });
    beforeEach(() => {
      cy.clearCookies();
    })
    afterEach(() => {
      cy.userLogOut();
    })
    context("User Registration", () => {
    it('Should successfully register a new user', () => {
      cy.registerUser();
      cy.getBySelector(".message-success > div").should("exist");
      cy.location("pathname").should("eq", "/customer/account/");

    });
  });
});
