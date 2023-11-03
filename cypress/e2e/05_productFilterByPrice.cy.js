/// <reference types="cypress" />

import category, { filter } from '../page_objects/category';
import '../support/commands';

describe("E2E-Filter product by price", () => {
  before(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.userLogIn();
  })
  after(() => {
    cy.userLogOut();
  });
  context("Product filter", () => {
    it('User should open mens category tab', () => {
      category.mensCategoryTab.click();
    })
  });
});
