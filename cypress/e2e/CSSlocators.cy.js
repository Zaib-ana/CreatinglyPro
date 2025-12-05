describe('CSS Locators Test', () => {
  it('Searches for T-shirts using CSS locators', () => {

    // Visit the website
    cy.visit('http://www.automationpractice.pl/index.php');

    // Type "T-shirts" in the search bar
    cy.get('#search_query_top').type('T-shirts');

    // Click the search button
    cy.get("button[name='submit_search']").click();

    // Assertion 1: Verify that the URL contains the search query
    cy.url().should('include', 'search_query=T-shirts');

    // Assertion 2: Verify that the results contain the searched keyword
    cy.get('.lighter')
      .should('be.visible')
      .and('contain.text', 'T-shirts');
  });
});