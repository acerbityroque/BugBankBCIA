it('Registro - CT006 (Validação de criação de conta, independente do tamanho da senha)', () => {
    cy.visit('https://bugbank.netlify.app/');
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });

    // Preenchendo os campos corretamente, sem restrição de tamanho de senha
    cy.get(':nth-child(2) > .input__default').type('teste@gmail.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Teste Usuario', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('123', { force: true, delay: 100 }); // Senha curta
    cy.get('.input__default').eq(5).type('123', { force: true, delay: 100 });
    cy.get('#toggleAddBalance').click({ force: true }); // Criar conta com saldo
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });

    // Verificação condicional para validar a criação da conta no modal
    cy.get('body').then(($body) => {
        if ($body.find('#modalText:contains("A conta")').length > 0) {
            cy.get('#modalText')
                .should('be.visible')
                .and('contain', 'A conta')
                .and('contain', 'foi criada com sucesso');
            cy.log('Teste passou: Conta criada com sucesso.');

            // Fechar o modal
            cy.get('#btnCloseModal').click({ force: true });
        } else {
            cy.log('Teste falhou: Mensagem de sucesso não apareceu.');
            throw new Error('A mensagem de criação da conta não foi exibida.');
        }
    });
});