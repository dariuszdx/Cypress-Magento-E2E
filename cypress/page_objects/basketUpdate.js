class basketUpdate {
    
    get basket(){
     return cy.get(".showcart")
    }
    get viewBasket(){
     return cy.get(":nth-child(7) > .secondary > .action > span")
    }
    get qtyBasketField(){
     return cy.get('input[title="Qty"]')
    }
    get updateBasket(){
     return cy.get(".update > span")
    }
    get proccedToCheckOutButton(){
     return cy.get(".checkout-methods-items > :nth-child(1) > .action > span")
    }
 }
 export default new basketUpdate();