import HomePage from '../pages/HomePage'
import LogIn from '../pages/LogIn'


describe('template spec', () => {
  const homePage = new HomePage();
  const logIn = new LogIn();

  it('passes', () => {
    homePage.visit();
    cy.get('.NavButton__nav-button___34wHC').click()
    logIn.login();
    cy.get('.mui-btn > :nth-child(1)').should('contain.text', 'Hello, John')
  })
})