import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given ('that I visit the Todo application', () =>{
    cy.visit('examples/vanillajs/#/')
})

When ('I write a note and press enter', () =>{
  cy.get('.new-todo').type('Constancy is the key that opens invisible doors to success {enter}')
  })

Then ('the note should be displayed in the application', () =>{
 cy.contains('Constancy is the key that opens invisible doors to success').should('be.visible')
})



