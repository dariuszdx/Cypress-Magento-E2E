
class address {
    get companyField() {
        return cy.get('#company');
    }

    get streetAddressField() {
        return cy.get('#street_1');
    }

    get cityField() {
        return cy.get('#city');
    }

    get stateField() {
        return cy.get('#region_id');
    }

    get zipCodeField() {
        return cy.get('#zip');
    }

    get countryField() {
        return cy.get('#country');
    }
    get phoneField() {
        return cy.get('#telephone');
    }
    get next() {
        return cy.get('.button > span');
    }
    get placeOrder() {
        return cy.get('span[data-bind="i18n: \'Place Order\'"]').contains('Place Order').should('be.visible');
    }
    get shippingMethod() {
        return cy.get('#checkout-shipping-method-load');
    }
    shippingMethodShouldBeVisible() {
        this.shippingMethod.should('be.visible');
    }
    get fiveDollarPaymant() {
        return cy.get('.radio')
    }
    
    get saveAddressButton() {
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action > span');
    }
    get myAccount(){
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a');
    }
    get addressBookTab(){
        return cy.get('.items > :nth-child(6) > a')
    }
    clickOnSaveAddresButton() {
        this.saveAddressButton.click();
    }
}

export default new address();
