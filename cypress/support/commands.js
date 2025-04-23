import { faker } from '@faker-js/faker';

/* ==============================
    🟢 COMANDO PARA VISITAR PÁGINA
   ============================== */
Cypress.Commands.add('pagina', () => {
    cy.visit('https://bugbank.netlify.app/');
});

/* ==============================
    🟢 COMANDOS PARA REGISTRO
   ============================== */
Cypress.Commands.add('registrar', () => {
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA')
        .should('be.visible')
        .click({ force: true });
});

Cypress.Commands.add('registroEmail', () => {
    const email = faker.internet.email();
    cy.wrap(email).as('emailRegistrado'); // Armazena o e-mail
    cy.get(':nth-child(2) > .input__default')
        .should('exist')
        .type(email, { force: true, delay: 100 });
});

Cypress.Commands.add('registroNome', () => {
    const nome = faker.person.fullName();
    cy.wrap(nome).as('nomeRegistrado');
    cy.get('.input__default').eq(3)
        .should('exist')
        .type(nome, { force: true, delay: 100 });
});

Cypress.Commands.add('registroSenha', () => {
    const senha = '12345678';
    cy.wrap(senha).as('senhaRegistrada');
    cy.get('.input__default').eq(4)
        .should('exist')
        .type(senha, { force: true, delay: 100 });
});

Cypress.Commands.add('registroConfirmarSenha', () => {
    cy.get('@senhaRegistrada').then((senha) => {
        cy.get('.input__default').eq(5)
            .should('exist')
            .type(senha, { force: true, delay: 100 });
    });
});

Cypress.Commands.add('registroCriarSaldo', () => {
    cy.get('#toggleAddBalance').should('exist').click({ force: true });
});

Cypress.Commands.add('registroCadastrar', () => {
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').should('exist').click({ force: true });
});

Cypress.Commands.add('fecharModal', () => {
    cy.wait(3000);
    cy.get('#btnCloseModal')
        .should('be.visible')
        .click({ force: true });
});

/* ==============================
    🟢 COMANDOS PARA LOGIN
   ============================== */
Cypress.Commands.add('loginEmail', () => {
    cy.get('@emailRegistrado').then((email) => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default')
            .should('exist')
            .type(email, { force: true, delay: 100 });
    });
});

Cypress.Commands.add('loginSenha', () => {
    cy.get('@senhaRegistrada').then((senha) => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
            .should('exist')
            .type(senha, { force: true, delay: 100 });
    });
});

Cypress.Commands.add('loginAcessar', () => {
    cy.get('.otUnI').should('be.visible').click({ force: true });
});

Cypress.Commands.add('logout', () => {
    cy.get('#btnExit').should('be.visible').click({ force: true });
});

/* ==============================
    🟢 COMANDOS PARA TRANSFERÊNCIA
   ============================== */

   Cypress.Commands.add('transferirValor', (conta, valor, descricao) => {
    cy.get('#btn-TRANSFERÊNCIA').click({ force: true });

    cy.get('input[name="accountNumber"]')
        .should('exist')
        .type(conta.split('-')[0], { force: true, delay: 100 });

    cy.get('input[name="digit"]')
        .should('exist')
        .type(conta.split('-')[1], { force: true, delay: 100 });

    cy.get('input[name="transferValue"]')
        .should('exist')
        .type(valor, { force: true, delay: 100 });

    cy.get('input[name="description"]')
        .should('exist')
        .type(descricao, { force: true, delay: 100 });

    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB.button__child')
        .should('be.visible')
        .click({ force: true });

    cy.log(`Transferência realizada: R$${valor} para a conta ${conta} - ${descricao}`);
});
/* ==============================
    🟢 COMANDOS PARA EXTRATO
   ============================== */
   Cypress.Commands.add('visualizarExtrato', () => {
    cy.get('#btn-EXTRATO')
        .should('be.visible')
        .click({ force: true });

    cy.log('Extrato visualizado com sucesso!');
});