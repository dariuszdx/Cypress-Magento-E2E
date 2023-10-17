class logIn {
    get signIn() {
      return cy.get('.panel > .header > .authorization-link > a');
    }
  
    get email() {
      return cy.get('#email');
    }
  
    get password() {
      return cy.get('#pass');
    }

    get signInButton() {
      return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').should("be.visible");
    }
  
  }

  export default new logIn();
  