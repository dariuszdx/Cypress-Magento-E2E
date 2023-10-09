
import userData, {  } from '../page_objects/userData';
import register from "../page_objects/register";
import logOut from "../page_objects/logOut";
import logIn from '../page_objects/logIn';

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
  logOut.list.click({ force: true });
  logOut.signOut.click({ force: true });
})

Cypress.Commands.add('userLogIn',() => {
  logIn.signIn.click();
  logIn.email.type(Cypress.env('email'));
  logIn.password.type(Cypress.env('password'));
  logIn.signInButton.click();

})
