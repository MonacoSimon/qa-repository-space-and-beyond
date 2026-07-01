import HomePage from '../pages/HomePage'


describe('template spec', () => {
  const homePage = new HomePage();

  it('passes', () => {
    homePage.visit();
    cy.get('.Hero__headline-1___3C6vA').should('be.visible')
  })
})