class FillBookTravel {
    fill() {
        cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type('Simon')
        cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type('as@as.com')
        cy.get(':nth-child(3) > .theme__inputElement___27dyY').type('123-45-6789')
        cy.get(':nth-child(4) > .theme__inputElement___27dyY').type('+34 612 345 678')
    }
}
export default FillBookTravel;