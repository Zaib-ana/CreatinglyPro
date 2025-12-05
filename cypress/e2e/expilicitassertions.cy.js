describe('Assertions Demo', () => {

  it('Explicit Assertions', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // ✅ Enter login credentials
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

    // ✅ Expected username after login
    let expName = 'Willian Silva'

    // ✅ Wait for the username dropdown to appear, then assert
    cy.get(".oxd-userdropdown-name", { timeout: 10000 })
      .should('be.visible')
      .then((x) => {
        const actName = x.text().trim()

        // 🔹 BDD style assertion
        expect(actName).to.equal(expName)

        // 🔹 TDD style assertion
        assert.equal(actName, expName, 'Username matches expected value')
      })
  })
})