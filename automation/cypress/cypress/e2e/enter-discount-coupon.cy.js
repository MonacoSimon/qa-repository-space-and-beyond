import HomePage from '../pages/HomePage'
import FillBookTravel from '../pages/FillBookTravel'


describe('template spec', () => {
  const homePage = new HomePage();
  const fillBookTravel = new FillBookTravel();

  it('passes', () => {
    homePage.visit();
    cy.get(':nth-child(2) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click()
    fillBookTravel.fill();
    const precioAntes = cy.get('.OrderSummary__headline-1___1lzsL')
    cy.get('[name="promo"]').type('TESTIM')
    cy.get('.flexboxgrid__col-xs-5___1HkK5 > .theme__button___1iKuo').click()
    const despues = cy.get('.OrderSummary__headline-1___1lzsL')
    precioAntes.should('not.equal', despues)
  })
})