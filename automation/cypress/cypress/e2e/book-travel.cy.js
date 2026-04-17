describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demo.testim.io/')
    cy.get(':nth-child(1) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click()
    cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Simon')
    cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('as@as.com')
    cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('123-45-6789')
    cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('+34 612 345 678')
    cy.get('.theme__check___2B20W').click()
    cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').click()
    cy.get('.theme__text___1nV6f').should('not.be.visible')
  })
})