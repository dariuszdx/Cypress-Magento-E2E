/// <reference types="cypress" />

import "../support/commands";

describe("E2E-Log in and log out as an existing user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  });

  afterEach(() => {
    cy.userLogOut();
  });

  context("User log in and log out", () => {
    it("Should successfully log in as an existing user and log out", () => {
      cy.findNthChildGreetLoggedIn().should('exist').and('contain', 'Janusz Kowalski');
    });
  });
});
