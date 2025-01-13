// cypress/support/e2e.js

// Example: Adding a custom command
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name=username]').type(username);
  cy.get('input[name=password]').type(password);
  cy.get('button[type=submit]').click();
});

// Example: Logging every command
Cypress.on('command:before', (command) => {
  console.log('Running command:', command);
});
