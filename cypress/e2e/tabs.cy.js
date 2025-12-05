describe('Handle Tabs or Child Tabs', () => {

  it('Approach 1 - Using removeAttr to open in the same tab', () => {
    // ✅ Visit the parent tab
    cy.visit('https://the-internet.herokuapp.com/windows');

    // ✅ Remove target attribute so the link opens in the same tab
    cy.get('.example > a')
      .invoke('removeAttr', 'target')
      .click();

    // ✅ Verify URL of the new tab
    cy.url().should('include', '/windows/new');

    cy.wait(2000);

    // ✅ Perform any operations on the child tab
    cy.contains('New Window').should('be.visible');

    // ✅ Go back to parent tab
    cy.go('back');
  });


  it('Approach 2 - Extract href and visit directly', () => {
    // ✅ Visit the parent tab
    cy.visit('https://the-internet.herokuapp.com/windows');

    // ✅ Get the link and extract its href attribute
    cy.get('.example > a').then(($link) => {
      const url = $link.prop('href');
      cy.visit(url); // Visit the child tab directly
    });

    // ✅ Verify new tab URL
    cy.url().should('include', '/windows/new');

    cy.wait(2000);

    // ✅ Perform operations on child tab
    cy.contains('New Window').should('be.visible');

    // ✅ Navigate back to parent tab
    cy.go('back');
  });

});