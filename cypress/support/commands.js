
import userData, {  } from '../page_objects/registerData';
import register from "../page_objects/registerButtons";
import logOut from "../page_objects/logOut";
import logIn from '../page_objects/logIn';
import address from '../page_objects/address';
import search from '../page_objects/search';
import filter from '../page_objects/category';
import basket from '../page_objects/basket';
import checkout from '../page_objects/checkout';
import basketUpdate from '../page_objects/basketUpdate';

Cypress.Commands.add('getElementByData', (dataTestAttribute) => {
  return cy.get(`[data-test="${dataTestAttribute}"]`);
});
Cypress.Commands.add('clickSignInButton', () => {
  cy.get('.panel > .header > .authorization-link > a');
});
Cypress.Commands.add('getElementById', (Id) => {
  cy.get(`#${Id}`);
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});
Cypress.Commands.add('getButtonByLabel', (label) => {
  cy.get('.login-container').find('span').contains(label);
});
Cypress.Commands.add('getElementWithClassBase', () => {
  cy.get('.base');
});
Cypress.Commands.add("clickButtonByTitle", (title) => {
  cy.get("button[title='" + title + "']");
});
Cypress.Commands.add("getElementByDiv", () => {
  cy.get("div");
});
Cypress.Commands.add('getNthChildCustomerAction', (index) => {
  cy.get('.customer-welcome > .customer-name > .action').eq(index - 1)
}) 
Cypress.Commands.add('getNthChildCustomerMenuLink', (index) => {
  cy.get('.customer-welcome > .customer-menu > .header > .authorization-link > a').eq(index - 1)
    
});
Cypress.Commands.add('getNthChildLinkInItems', (nthChild) => {
  return cy.get('.items').find(`:nth-child(${nthChild}) > a`);
});
Cypress.Commands.add('verifySearchElement', (product) => {
  cy.get('.column > .search').should('exist').should('contain', product);
});
Cypress.Commands.add('clickElementByText', (text) => {
  cy.contains(text).click();
});
Cypress.Commands.add('clickElementByNthChild', (nth) => {
  cy.get(`:nth-child(${nth}) > .filter-options-title`);
});
Cypress.Commands.add('selectColor', (color) => {
  cy.get('.active > .filter-options-content')
    .contains(color);
});
Cypress.Commands.add('getFilterStatus',() => {
  cy.get(".filter-current > .items > .item")
})
Cypress.Commands.add('getProductsTable',() => {
  cy.get(".filter-current > .items > .item")
})
Cypress.Commands.add('getNthChildProductLink', (nth) => {
  return cy.get(`:nth-child(${nth}) > .product-item-info > .details > .name > .product-item-link`);
});
Cypress.Commands.add('findProductByName', (name) => {
  return cy.contains('.product-item-link', name);
});
Cypress.Commands.add('getChangeQtyOfProductField', (qty) => {
  return cy.get('input[name^="cart["][name$="][qty]"]').clear().type(qty)
});

























Cypress.Commands.add('registerUser', () => {
  register.signIn.click();
  register.createAccount.click();
  userData.firstname.type(Cypress.env('firstname'));
  userData.lastname.type(Cypress.env('lastname'));
  userData.email.type(Cypress.env('email'));
  userData.password.type(Cypress.env('password'));
  userData.confirmPassword.type(Cypress.env('password'));
  register.creatAnAccountBtn.click();
});

Cypress.Commands.add('getBySelector', (selector) => {
  return cy.get(selector);
});

Cypress.Commands.add('userLogOut',() => {
  logOut.list.click();
  logOut.signOut.click({ force: true });
})

Cypress.Commands.add('userLogIn',() => {
  logIn.signIn.click();
  logIn.email.type(Cypress.env('email'));
  logIn.password.type(Cypress.env('password'));
  logIn.signInButton.click();


})
Cypress.Commands.add('addAddress',() => {
  logOut.list.click({ force: true });
  address.myAccount.click({ force: true });
  address.addressBookTab.click();
  address.companyField.clear().type(Cypress.env('company'));
  address.phoneField.clear().type(Cypress.env('phoneNumber'));
  address.streetAddressField.clear().type(Cypress.env('street'));
  address.cityField.clear().type(Cypress.env('city'));
  address.countryField.invoke('val', '').select(Cypress.env('country'));
  address.stateField.invoke('val', '').select(Cypress.env('state'));
  address.streetAddressField.clear().type(Cypress.env('street'));
  address.zipCodeField.clear().type(Cypress.env('zipCode'));
  address.saveAddressButton.click();
})
Cypress.Commands.add('search', () => { 
  search.search.clear().type(Cypress.env('product'));
  search.loop.click({force: true});

})
Cypress.Commands.add('filterByColour', () => { 
  filter.mensCategoryTab.click();
  filter.mensCategoryTops.click();
  cy.wait(3000);
  filter.filterByColour.click();
  filter.redColour.click();
})
Cypress.Commands.add('basket', () => { 
  basket.redTshirt.click();
  basket.sizeM.click();
  cy.wait(3000);
  basket.redColour.click();
  basket.qtyField.clear().type(1)
  basket.addProductButton.click();
})
Cypress.Commands.add('update', () => { 
  basketUpdate.basket.click();
  //basketUpdate.viewBasket.click();
  basketUpdate.qtyBasketField.clear().type(1)
  basketUpdate.updateBasket.click();
  cy.wait(3000)
})

Cypress.Commands.add('checkout', () => { 
  checkout.proccedToCheckOutButton.click();
  cy.wait(5000)
  checkout.nextButton.click();
  cy.wait(5000)
  checkout.placeOrderButton.click();
  
})




