describe('Handling iFrames', () => {

  it('Approach 1 - Access iframe and type text', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');

    // Wait until TinyMCE editor becomes editable
    cy.get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(($body) => {
        // Keep checking until contenteditable is true
        cy.wrap($body, { timeout: 10000 })
          .should('have.attr', 'contenteditable', 'true')
          .then(cy.wrap)
          .clear()
          .type('Welcome to Cypress 🚀');
      });
  });

});