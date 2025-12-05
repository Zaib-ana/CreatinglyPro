describe('Handle dropdowns', () => {

  it('Dropdown with select', () => {
    cy.visit('https://www.zoho.com/commerce/free-demo.html')

    cy.get('#zcf_address_country_1')
      .select('Pakistan', { force: true })
      .should('have.value', 'Pakistan')
  })
})

  it('Dropdown without select (Bootstrap/Custom dropdown)', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field')
      .type('Pakistan')
      .type('{enter}')

    // ✅ Use contain.text instead of have.text
    cy.get('#select2-billing_country-container')
      .should('contain.text', 'Pakistan')
  })


  it('Dynamic dropdown (Wikipedia search)', () => {
    // ✅ Handle different origin (Wikipedia)
   it('Dynamic dropdown (Wikipedia search)', () => {
  cy.origin('https://en.wikipedia.org', () => {
    cy.visit('/')
    cy.get('#searchInput').type('Pakistan')
    cy.get('.suggestion-link').first().click()
  })
})
  })
   // Select the first suggestion (if exists)  
     it('Dynamic dropdown (Wikipedia search)', () => {
  cy.origin('https://en.wikipedia.org', () => {
    cy.visit('/') 
    cy.get('#searchInput').type('Pakistan', { delay: 200 }) 
    cy.wait(2000)

    cy.get('body').then(($body) => {
      if ($body.find('.suggestion-title').length > 0) {
        cy.get('.suggestion-title', { timeout: 10000 }).first().click()
      } else {
        cy.get('#searchInput').type('{enter}')
      }
    })
  })
})





