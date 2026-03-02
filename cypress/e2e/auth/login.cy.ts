describe('Sanity check', () => {
    it('should load the login page', () => {
      cy.visit('/')
      cy.get('#user-name').should('be.visible')
    })
  })