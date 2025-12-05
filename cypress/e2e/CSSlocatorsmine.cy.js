Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('test done by me', () => {

    it('search for dresses using CSS locators', () => {
    // Visit the website
    cy.visit('https://nishatlinen.com/');

      // Click the search button to open the input
      cy.get('.t4s-icon.t4s-icon--search').click();
    // Type into the real visible search input
    cy.get('input.t4s-mini-search__input')
      .should('be.visible')
      .type('dresses{enter}');
      // get the dress 
      cy.get('.t4s-product-title').first().click();
      cy.get("button.t4s-fbt__submit.t4s-btn-loading__svg").click();
      cy.get('.add-to-cart-form-modal-col9').should('be.visible');

   

    
  });



         });