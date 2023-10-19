
class logOut {
    get list() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').should("exist");
    }
    
    get signOut() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a');
    }
}
    
export default new logOut(); 
