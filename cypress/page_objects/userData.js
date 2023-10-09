class userData {
    
    get firstname() {
        return cy.get('#firstname')
    }
    get lastname() {
        return cy.get('#lastname')
    }
    get email() {
        return cy.get('#email_address')
    }
    get password() {
        return cy.get('#password')
    
    }
    get confirmPassword() {
        return cy.get('#password-confirmation')
    }
}
export default new userData();