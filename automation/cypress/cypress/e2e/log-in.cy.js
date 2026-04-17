describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demo.testim.io/')
    cy.get('.NavButton__nav-button___34wHC').click()
    cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').type('as@as.com')
    cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').type('1234')
    cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').click()
    cy.get('.mui-btn').should('be.visible')
  })
})