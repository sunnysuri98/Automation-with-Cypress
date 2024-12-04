// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

import 'cypress-downloadfile/lib/downloadFileCommand';
import "cypress-real-events";


//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {

    cy.session(username, () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(username);
        cy.get("input[placeholder='Password']").type(password);

        cy.get("button[type='submit']").click();

        cy.url().should("contains","/dashboard/index");




    })





});





