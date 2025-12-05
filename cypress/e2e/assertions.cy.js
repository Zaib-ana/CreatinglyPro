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
})

describe('Count links on Amazon homepage', () => {
  it('should count all links', () => {
    cy.visit('https://www.amazon.com')

    // ✅ Get all anchor (<a>) tags and count them
    cy.get('a').then(($links) => {
      const count = $links.length
      cy.log('Total number of links on the page: ' + count)

      // ✅ Example assertion: page should have more than 50 links
      expect(count).to.be.greaterThan(50)
      
    })
  })
})