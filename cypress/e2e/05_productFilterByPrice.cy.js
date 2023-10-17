/// <reference types="cypress" />

import '../support/commands'; 

describe("E2E-Filter product by price", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearCookies();
      cy.userLogIn();
    })
    afterEach(() => {
      cy.userLogOut();
    });
    it('Should successfully filter product by the colour', () => {
      cy.filterByColour()
    })
  });
