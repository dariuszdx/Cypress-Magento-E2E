/// <reference types="cypress" />

import "../support/commands";
import registerButtons from "../page_objects/registerButtons";
import registerData from "../page_objects/registerData";

describe("E2E-Correct register a new user", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
  });

  after(() => {
    cy.userLogOut();
  });

  context("Open registration page", () => {
    it("Should open the registration page", () => {
      registerButtons.signIn.click();
      registerButtons.createAccount.click();
      cy.getElementWithClassBase()
        .should("exist")
        .and("contain", "Create New Customer Account");
      cy.location("pathname").should("eq", "/customer/account/create/");
    });
  });

  context("Complete registration fields", () => {
    it("Should complete fields in the personal information section", () => {
      registerData.firstname.type(Cypress.env("firstname"));
      registerData.lastname.type(Cypress.env("lastname"));
    });

    it("Should complete fields in the sign in information section", () => {
      registerData.email.type(Cypress.env("email"));
      registerData.password.type(Cypress.env("password"));
      registerData.confirmPassword.type(Cypress.env("password"));
    });

    it("Should check if the fields contain the entered values", () => {
      registerData.firstname.should(
        "have.value",
        Cypress.env("expectedValues").firstname
      );
      registerData.lastname.should(
        "have.value",
        Cypress.env("expectedValues").lastname
      );
      registerData.password.should(
        "have.value",
        Cypress.env("expectedValues").password
      );
      registerData.confirmPassword.should(
        "have.value",
        Cypress.env("expectedValues").password
      );
    });
  });

  context("Creating user account", () => {
    it("Should click on the create account button and confirm that the account has been created", () => {
      registerButtons.creatAnAccountBtn.click();
      cy.getElementByDiv("message-succes")
        .should("exist")
        .and("contain", "Thank you for registering with Main Website Store.");
      cy.location("pathname").should("eq", "/customer/account/");
    });
  });
});
