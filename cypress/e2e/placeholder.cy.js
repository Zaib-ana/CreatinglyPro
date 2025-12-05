describe('Assertions Demo', () => {

  it('should type and verify username field', () => {
    // ✅ Visit the website before interacting
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // ✅ Type into the username field
    cy.get("input[placeholder='Username']").type('Admin')

    // ✅ Assert that the typed value is correct
    cy.get("input[placeholder='Username']").should('have.value', 'Admin')
  })

})