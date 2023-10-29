
class registerButtons {
    get signIn() {
        return cy.clickSignInButton();
    }
    get createAccount() {
        return cy.getButtonByLabel('Create an Account');
    }

    get creatAnAccountBtn() {
        return cy.clickButtonByTitle('Create an Account')
    }    
    get myAccountButton() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible');
    }
    
    get myAddresButton() {
        return cy.get('.block-title > .action > span')
    }
}
export default new registerButtons ();