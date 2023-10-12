class search {
    
    get search(){
        return cy.get('#search');
    }
    get loop () {
        return cy.get('.actions>.action');
    }
}
export default new search();