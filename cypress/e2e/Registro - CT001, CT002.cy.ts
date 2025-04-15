it('Registro - CT001, CT002 (Dados válidos + E-mail duplicado)', () => {
    cy.visit('https://bugbank.netlify.app/');
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });

    // Cadastro inicial válido
    cy.get(':nth-child(2) > .input__default').type('pablo@gmail.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Pablo', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('123456', { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type('123456', { force: true, delay: 100 });
    cy.get('#toggleAddBalance').click({ force: true }); // Criar conta com saldo
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
    cy.wait(3000);
    cy.get('#btnCloseModal').click({ force: true }); // Fechar modal

    // Tentativa de criar uma nova conta com o mesmo e-mail
    cy.visit('https://bugbank.netlify.app/');
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });

    cy.get(':nth-child(2) > .input__default').type('pablo@gmail.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Outro Nome', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('654321', { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type('654321', { force: true, delay: 100 });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });

    // Validação da mensagem de erro
    cy.contains('Já existe uma conta com este e-mail').should('be.visible');
});