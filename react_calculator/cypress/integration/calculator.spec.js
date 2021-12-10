describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should be able to update running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })

  it('should be able to do arithmetical operations and update the results', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '24')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '24')
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '27')

  })

  it('should be able to display negative decimals', () => {
    cy.get('#operator-subtract').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '-0.1')

  })


  it('should be able to handle divide by zero with Error', () => {
  cy.get('#number1').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', 'Error')
  })

})
