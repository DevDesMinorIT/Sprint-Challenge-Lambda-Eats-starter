//boilerplate for testing:  describe( ) -- it( ) *note in this case it is beforeEach--expect( )
describe('Testing our form inputs', ( ) =>  {
    beforeEach(( ) => {
        cy.visit('http://localhost:3000/pizza');
    });
    it('tests name input', ( ) => {
        cy.get('[data-cy=name]').type('Testing Name Out');              //remember to write data-cy="name" in input tag when using reactstrap library         
    });
    it('test checkbox input', () => {
        cy.get('[data-cy=checkbox]').check().should('be checked');
    })
});


