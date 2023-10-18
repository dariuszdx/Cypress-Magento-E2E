class basket {
    
   get redTshirt(){
    return cy.get(":nth-child(5) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo")
   }
   get sizeM(){
    return cy.get("#option-label-size-143-item-168")
   }
   get redColour(){
    return cy.get("#option-label-color-93-item-58")
   }
   get qtyField(){
    return cy.get("#qty")
   }
   get addProductButton(){
    return cy.get("#product-addtocart-button > span")
   }
   get basket(){
    return cy.get(".showcart")
   }
   get viewBasket(){
    return cy.get(":nth-child(7) > .secondary > .action > span")
   }
   get qtyBasketField(){
    return cy.get("#cart-392274-qty")
   }
   get updateBasket(){
    return cy.get(".update > span")
   }
   get proccedToCheckOutButton(){
    return cy.get(".checkout-methods-items > :nth-child(1) > .action > span")
   }
}
export default new basket();