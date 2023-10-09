
class register {
    get signIn() {
        return cy.get('.panel > .header > .authorization-link > a')
    }
    get createAccount() {
        return cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span')
    }

    get creatAnAccountBtn() {
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
    }    
    get myAccountButton() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible');
    }
    
    get myAddresButton() {
        return cy.get('.block-title > .action > span')
    }
}
export default new register ();