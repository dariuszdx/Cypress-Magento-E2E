class basket {
    
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
    return cy.clickButtonByTitle("Add to Cart")
   }
   get basket(){
    return cy.get(".showcart")
   }
   get viewBasket(){
    return cy.get(":nth-child(7) > .secondary > .action > span").should("be.visible")
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
   get colorAttribute(){
      return cy.get(".swatch-attribute.color > .swatch-attribute-selected-option")
   }
   get basketInfo(){
      return cy.get(".item-info > .item")
   }
   get deleteBasket(){
      return cy.get(".action-delete")
   }
   get emptyBasket(){
      return cy.get(".cart-empty > :nth-child(1)")
   }
   get qtyProductField(){
      return cy.get('input[name^="cart["][name$="][qty]"]')
   }
}
export default new basket();