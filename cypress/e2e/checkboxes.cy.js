describe('Check UI Elements', () => {

  it('Checking Radio Buttons', () => {

// ✅ Visit the website


    cy.visit('https://testautomationpractice.blogspot.com/')



    // ✅ Check if checkboxes are visible


    cy.get('input#monday').should('be.visible')    // Check visibility of monday checkbox
    // select single checkbox
    cy.get('input#monday').check().should('be.checked')
    
    //unselect the checkbox
    cy.get('input#monday').uncheck().should('not.be.checked')
   
    //selecting all the checkboxes
  cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
   //unselecting all the checkboxes
  cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
  //select first checkbox among all the checkboxes
  //first get all the checkboxes
  cy.get("input.form-check-input[type='checkbox']").first().check()
  cy.get("input.form-check-input[type='checkbox']").last().check()

 // we can also add assertions as well 
 cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
  cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
 })
})
