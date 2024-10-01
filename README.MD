# Automated Testing with Cypress and Cucumber 🥒
## 1. Clone the repository:
```bash
git clone https://github.com/hiagoagil/Todo_application.git
```
## 2. Installing All Dependencies:

Execute the following command to install all necessary dependencies, including those related to Node.js, Cypress, Cucumber, and Faker.js, present in the project:

```bash
npm install
```

## 3. Project Overview:

This project follows the Behavior-Driven Development (BDD) methodology to make it more accessible to the entire team, including those unfamiliar with technical terminology. The combination of Gherkin with Cucumber has been employed to enable test automation in the Cypress environment.

The chosen application is 'todomvc.com', allowing the visualization of tests through an intuitive interface, facilitating interaction with Cypress. This approach not only promotes effectiveness in test execution but also strengthens collaborative understanding of the project.

## 4. Directory Structure
- **cypress/**
  - Contém arquivos de configuração e scripts de teste Cypress

- **cypress/e2e/**
  - **step_definitions/** 
      - **todo.feature** Arquivo de especificação Gherkin para teste de login.
         - **todo/**
              - **1_todo.steps.js** Arquivo para criação de notas
            - **2_add.and_check.step.js** Arquivo para adicionar nota e verificar
            - **3_add_and_delete.step.js** Arquivo para adicionar nota e excluir
- **cypress/support/**
  - Pode incluir utilitários ou funções de suporte para testes.

- **cypress/fixtures/**
  - Contém dados de exemplo ou simulações para testes.

- **node_modules/**
  - Contém dependências de projeto geradas por Node.js.

## 5. Running Tests

To run all tests, use the following command in the command line:
```bash
npm test
```

To view the tests through the Cypress graphical interface, you must execute the command:
```bash
npx cypress open
```

## Contact ✉️

- **Email:** [emaildoqa@atlanteti.com](mailto:emaildoqa@atlanteti.com)
- **LinkedIn:** [Hiago Gil](https://www.linkedin.com/in/hiago-gil-b94169166)
- **GitHub:** [Hiago Gil](https://github.com/hiagoagil)
