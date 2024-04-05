describe('Locators types', () => {

    it('Get element by tag', () => {
        cy.visit('/automation-practice-form')
        cy.get('input')
    });

    it('Get element by attribute', () => {
        cy.visit('/automation-practice-form')
        cy.get('[placeholder]="First Name')
    });

})