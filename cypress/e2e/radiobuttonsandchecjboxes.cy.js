describe('Check UI Elements', () => {

  it('Checking Radio Buttons', () => {

// ✅ Visit the website

    cy.visit('https://testautomationpractice.blogspot.com/')


    // ✅ Check if radio buttons are visible

    cy.get('input#male').should('be.visible')    // Check visibility of male radio button

    cy.get('input#female').should('be.visible')  // Check visibility of female radio button


    // select Female radiobutton, here male becones in enable state              

    cy.get('input#male').check().should('be.checked')

    cy.get('input#female').should('not.be.checked')
   
   
    // select Male radiobutton, here female becones in enable state              

    cy.get('input#female').check().should('be.checked')

    cy.get('input#female').should('not.be.checked')
  })
})