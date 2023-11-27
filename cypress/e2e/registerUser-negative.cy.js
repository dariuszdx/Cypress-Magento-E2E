/// <reference types="cypress" />

import "../support/commands";
import registerButtons from "../page_objects/registerButtons";
import registerData from "../page_objects/registerData";

describe("E2E-Incorrect register a new user with wrong email address", { testIsolation: false }, () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
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

    it("Should complete fields in the sign in information section with incorrect email address", () => {
      registerData.email.type(Cypress.env("incorrectEmail"));
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
      registerData.email.should(
        "have.value",
        Cypress.env("expectedValues").incorrectEmail
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

  context("Cannot create user account", () => {
    it("Should click on the create account button, and should show error and not creating user account", () => {
      registerButtons.creatAnAccountBtn.click();
      cy.getElementById("email_address-error")
        .should("exist")
        .and(
          "contain",
          "Please enter a valid email address (Ex: johndoe@domain.com)."
        );
    });
  });
});
