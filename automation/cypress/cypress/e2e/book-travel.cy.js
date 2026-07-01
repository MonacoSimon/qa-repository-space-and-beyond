import HomePage from '../pages/HomePage';
import FillBookTravel from '../pages/FillBookTravel';

describe('template spec', () => {
  const homePage = new HomePage();
  const fillBookTravel = new FillBookTravel();

  it('passes', () => {
    homePage.visit();
    cy.get(':nth-child(1) > .theme__cardActions___1aHjq > .theme__button___1iKuo').click()
    fillBookTravel.fill();
    cy.get('.theme__check___2B20W').click()
    cy.get('.flexboxgrid__col-xs___1ROHR > .theme__button___1iKuo').click()
    cy.get('.theme__text___1nV6f').should('be.visible')
  })
})