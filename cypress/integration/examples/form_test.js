//boilerplate for testing:  describe( ) -- it( ) *note in this case it is beforeEach--expect( )
describe('Testing our form inputs', ( ) =>  {
    beforeEach(( ) => {
        cy.visit('http://localhost:3001/pizza');
    });
    it('tests name input', ( ) => {
        cy.get('[data-cy=name]').type('Testing Name Out');              //remember to write data-cy="name" in input tag when using reactstrap library         
    });
    it('test checkbox input', () => {
        cy.get('[data-cy=checkbox1]').check().should('be.checked');
    })
    it('test checkbox input', () => {
        cy.get('[data-cy=checkbox2]').check().should('be.checked');
    })
    it('test checkbox input', () => {
        cy.get('[data-cy=checkbox3]').check().should('be.checked');
    })
    it('test checkbox input', () => {
        cy.get('[data-cy=checkbox4]').check().should('be.checked');
    })
    it('test form submit', () => {
        cy.get('[data-cy=submit]').submit()
    })
});


