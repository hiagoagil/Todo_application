Feature: TODO

Scenario: Adicionando uma tarefa

Given that I visit the Todo application
When I write a note and press enter
Then the note should be displayed in the application 

Scenario: Adding a task and using checkbox

Given that I add a task
When I perform the checkbox marking
Then a check must be carried out

Scenario: Adding a task and deleting

Given that I visit the Todo application and add a task
When I check and delete it
Then the task must be deleted from the application



