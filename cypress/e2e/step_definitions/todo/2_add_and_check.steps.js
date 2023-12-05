import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('that I add a task', () =>{
    cy.visit('examples/vanillajs/#/')
    cy.get('.new-todo').type('Constancy is the key that opens invisible doors to success{enter}')
})

When ('I perform the checkbox marking', () =>{
    cy.get('.toggle').check()
  })

Then ('a check must be carried out', () =>{
    cy.get('.toggle').check().should('be.checked')
})