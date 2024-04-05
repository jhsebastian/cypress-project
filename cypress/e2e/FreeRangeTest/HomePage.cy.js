describe('Home Page free range testers', () => {
    beforeEach(() => {
        cy.visit('https://freerangetesters.com/cursos')
    })

    it('Should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
        
    });
})

