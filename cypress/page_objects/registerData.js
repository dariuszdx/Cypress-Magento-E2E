class registerData {
    
    get firstname() {
        return cy.getElementById('firstname')
    }
    get lastname() {
        return cy.getElementById('lastname')
    }
    get email() {
        return cy.getElementById('email_address')
    }
    get password() {
        return cy.getElementById('password')
    
    }
    get confirmPassword() {
        return cy.getElementById('password-confirmation')
    }
}
export default new registerData();