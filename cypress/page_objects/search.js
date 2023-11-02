class search {
    
    get searchField(){
        return cy.getElementById('search');
    }
    get loopButton () {
        return cy.get('.actions>.action');
    }
}
export default new search();