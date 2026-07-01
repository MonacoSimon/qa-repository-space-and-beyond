class LogIn {
    login() {
        cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').type('as@as.com')
        cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').type('1234')
        cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').click()
    }
}
export default LogIn;