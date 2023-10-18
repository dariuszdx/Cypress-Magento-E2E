class checkout {
    
    get proccedToCheckOutButton(){
     return cy.get(".checkout-methods-items > :nth-child(1) > .action > span")
    }
    get nextButton(){
        return cy.get(".button")
    }
    get placeOrderButton(){
        return cy.get(".payment-method-content > :nth-child(4) > div.primary > .action")
    }
 }
 export default new checkout();