/// <reference types="cypress" />

import "../support/commands";

describe("E2E-Loggin and logout as a existing user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  });
  afterEach(() => {
    cy.userLogOut();
  });
  context("User loggin and logout", () => {
    it("Should successfully login as a new user and logout", () => {});
  });
});
