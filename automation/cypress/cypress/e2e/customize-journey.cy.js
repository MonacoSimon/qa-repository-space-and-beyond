import HomePage from '../pages/HomePage'
import CustomizeTravel from '../pages/CustomizeTravel'

describe('template spec', () => {
  const homePage = new HomePage();
  const customizeTravel = new CustomizeTravel();

  it('passes', () => {
    homePage.visit();
    customizeTravel.book();
    cy.get('.theme__title___35Wsy').should('be.visible')
  })
})