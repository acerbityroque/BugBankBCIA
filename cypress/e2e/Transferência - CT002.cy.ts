it('Fluxo completo de registro e transferência sem saldo suficiente', () => {
    // Visitar a página inicial
    cy.visit('https://bugbank.netlify.app/');

    // Registrar a conta Pablo com saldo
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
    cy.get(':nth-child(2) > .input__default').type('pablo@gmail.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Pablo', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('123456', { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type('123456', { force: true, delay: 100 });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
    cy.get('#btnCloseModal').click({ force: true }); // Fechar modal

    // Fazer login na conta Pablo
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('pablo@gmail.com', { force: true, delay: 100 });
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456', { force: true, delay: 100 });
    cy.get('.otUnI').click({ force: true });

    // Sair da aplicação
    cy.get('#btnExit').click({ force: true });

    // Registrar a conta Sthefano sem saldo
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
    cy.get(':nth-child(2) > .input__default').type('sthefano@gmail.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Sthefano', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('123456', { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type('123456', { force: true, delay: 100 });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });

    // Capturar o número da conta de Sthefano
    cy.get('#modalText').invoke('text').then((text) => {
        const regex = /A conta (\d+-\d+) foi criada com sucesso/;
        const match = text.match(regex);
        if (match) {
            contaSthefano = match[1]; // Armazena o número da conta
            cy.log('Número da conta de Sthefano capturado: ' + contaSthefano);
        }
    }).then(() => {
        // Fechar o modal após capturar o número
        cy.get('#btnCloseModal').click({ force: true });

        // Fazer login na conta Pablo
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('pablo@gmail.com', { force: true, delay: 100 });
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456', { force: true, delay: 100 });
        cy.get('.otUnI').click({ force: true });

        // Vá até a aba de transferência
        cy.get('#btn-TRANSFERÊNCIA').click({ force: true });

        // Preencher os dados da transferência
        cy.get('input[name="accountNumber"]').type(contaSthefano.split('-')[0], { force: true, delay: 100 }); // Número da conta
        cy.get('input[name="digit"]').type(contaSthefano.split('-')[1], { force: true, delay: 100 }); // Dígito
        cy.get('input[name="transferValue"]').type('500', { force: true, delay: 100 }); // Valor da transferência
        cy.get('input[name="description"]').type('Teste OI', { force: true, delay: 100 }); // Descrição
        cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB.button__child').click({ force: true }); // Transferir

        // Voltar para a tela inicial
        cy.get('#btnBack').click({ force: true });

        // Sair do aplicativo
        cy.get('#btnExit').click({ force: true });

        // Faça login com a conta Sthefano
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('sthefano@gmail.com', { force: true, delay: 100 });
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456', { force: true, delay: 100 });
        cy.get('.otUnI').click({ force: true });

        // Vá até o extrato
        cy.get('#btn-EXTRATO').click({ force: true });

        // Voltar para a tela inicial
        cy.get('#btnBack').click({ force: true });

        // Sair do aplicativo
        cy.get('#btnExit').click({ force: true });

    });
});