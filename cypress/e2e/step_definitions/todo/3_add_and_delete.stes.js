import {faker} from '@faker-js/faker'
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const note = {
    name: faker.internet.userName()
}
Given('that I visit the Todo application and add a task', () =>{
    cy.visit('examples/vanillajs/#/')
    cy.get('.new-todo').type(`${note.name}{enter}`)

})

When ('I check and delete it', () =>{
    cy.get('.toggle').check()  
    cy.get('.clear-completed').click()
    
  })

Then ('the task must be deleted from the application', () =>{
    cy.contains('label', note.name).should('not.exist');
})