import 'cypress-axe';

describe('Accesibilidad', () => {

  it('Home no debería tener errores críticos', () => {
    cy.visit('https://demo.testim.io/')

    cy.injectAxe()

    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious']
    })
  })

})
