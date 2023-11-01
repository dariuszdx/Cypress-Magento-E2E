
class address {
    get firstname() {
        return cy.getElementById('firstname')
    }
    get lastname() {
        return cy.getElementById('lastname')
    }
    get companyField() {
        return cy.getElementById('company');
    }

    get streetAddressField() {
        return cy.getElementById('street_1');
    }

    get cityField() {
        return cy.getElementById('city');
    }

    get stateField() {
        return cy.getElementById('region_id');
    }

    get zipCodeField() {
        return cy.getElementById('zip');
    }

    get countryField() {
        return cy.getElementById('country');
    }
    get phoneField() {
        return cy.getElementById('telephone');
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
        return cy.clickButtonByTitle('Save Address');
    }
    get myAccount(){
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a');
    }
    get addressBookTab(){
        return cy.getNthChildLinkInItems(6)
    }
    clickOnSaveAddresButton() {
        this.saveAddressButton.click();
    }
}

export default new address();
