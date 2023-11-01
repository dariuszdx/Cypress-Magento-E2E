
class menuList {
    get list() {
        return cy.getNthChildCustomerAction(2).should("exist");
    }
    
    get signOut() {
        return cy.getNthChildCustomerMenuLink(2);
    }
}
    
export default new menuList(); 
