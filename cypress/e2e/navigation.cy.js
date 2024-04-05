describe('first test', () => {

    it('Navigate to our first page', () => {
        cy.visit('https://www.cypress.io/')
    });

    it('Reaload our page', () => {
        cy.reload()
    });

   


})