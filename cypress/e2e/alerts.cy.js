describe('Alerts', () =>{
// 1.javascript alert: it will have some text and an 'ok' button
it('JS alert', () => {
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

  // Click the alert button
  cy.get("button[onclick='jsAlert()']").click()

  // Handle alert event
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('I am a JS Alert')  // it verify alert text
  })

  // Verify the result text on the page (we are just verifying the closed window meassage
  // cypress will execute closing of window itself) no need to write separate code for it
  cy.get('#result').should('have.text', 'You successfully clicked an alert')
})

// 2. JavaScript Confirm Alert: It will have 'OK' and 'Cancel' buttons
describe('JavaScript Confirm Alert Test', () => {

  it('Handles JS Confirm Alert with OK button', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    // Click the "Click for JS Confirm" button
    cy.get("button[onclick='jsConfirm()']").click()

    // Handle the confirm alert - OK
    cy.on('window:confirm', (text) => {
      // Verify the alert text
      expect(text).to.contains('I am a JS Confirm')
      // Return true to simulate clicking "OK"
      return true
    })

    // Verify result after clicking OK
    cy.get('#result').should('have.text', 'You clicked: Ok')
  })

  //if we want to close confirm alert window using cancel button,
  // we need to write another trigger event for that

  it('Handles JS Confirm Alert with Cancel button', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    // Click the "Click for JS Confirm" button
    cy.get("button[onclick='jsConfirm()']").click()

    // Handle the confirm alert - Cancel
    cy.on('window:confirm', (text) => {
      expect(text).to.contains('I am a JS Confirm')
      // Return false to simulate clicking "Cancel"
      return false   // cypress close window using cancel button
    })

    // Verify result after clicking Cancel
    cy.get('#result').should('have.text', 'You clicked: Cancel')
  })
})
  
// 3. javascript prompt alert: it will have some text with a text box for 
// user input along with 'ok'

  it('Handles JS Prompt Alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    // ✅ Before clicking the button, stub the window.prompt and return text
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('welcome')
    })

    // ✅ Trigger the JS prompt
    cy.get("button[onclick='jsPrompt()']").click()

    // ✅ Cypress will automatically click 'OK' on the prompt
    cy.get('#result').should('have.text', 'You entered: welcome')
  })

})


// 4. describe('Authentication Alerts', () => {

  it('Authenticated alert - Approach 1 (Using auth object)', () => {
    // ✅ Using auth object in cy.visit()
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin'
      }
    })

    // ✅ Verify success message
    cy.get("div[class='example'] p")
      .should('contain.text', 'Congratulations')
  })

  it('Authenticated alert - Approach 2 (Credentials in URL)', () => {
    // ✅ Using username and password directly in the URL
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

    // ✅ Verify success message
    cy.get("div[class='example'] p")
      .should('contain.text', 'Congratulations')
  })



