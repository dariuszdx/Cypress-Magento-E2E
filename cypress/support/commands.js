
import userData, {  } from '../page_objects/userData';
import register from "../page_objects/register";
import logOut from "../page_objects/logOut";
import logIn from '../page_objects/logIn';
import address from '../page_objects/address';
import search from '../page_objects/search';
import filter from '../page_objects/filter';

Cypress.Commands.add('getByData', (dataTestAttribute) => {
  return cy.get(`[data-test="${dataTestAttribute}"]`);
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
  search.loop.click();

})
Cypress.Commands.add('filterByColour', () => { 
  filter.mensCategoryTab.click();
  filter.mensCategoryTops.click();
  filter.filterByColour.click();
  filter.redColour.click();
})


