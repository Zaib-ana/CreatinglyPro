describe('Assertions Demo', () => {

  it('Title Assertions', () => {
    cy.visit('https://www.amazon.com/')

    // ✅ Implicit assertions on title of the page
    cy.title()
      .should('include', 'Amazon.com')
      .and('contain', 'Smile more')
  })

  it('Amazon Logo Assertions', () => {
    cy.visit('https://www.amazon.com/ref=nav_logo')

    // ✅ Check the logo container is visible
    cy.get('#nav-logo-sprites')
      .should('be.visible')
      .and('exist')
  })

  it('Count links on Amazon homepage', () => {
    cy.visit('https://www.amazon.com')

    // ✅ Get all anchor (<a>) tags
    cy.xpath("//a").its('length').should('be.greaterThan', 50)
    })
  })
