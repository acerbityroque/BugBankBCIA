it('Validação - CT001 (Tentativa de registro com e-mail inválido)', () => {
    cy.visit('https://bugbank.netlify.app/');
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });

    // Preenchendo os campos com um e-mail inválido (sem @)
    cy.get(':nth-child(2) > .input__default').type('emailinvalido.com', { force: true, delay: 100 });
    cy.get('.input__default').eq(3).type('Teste Usuario', { force: true, delay: 100 });
    cy.get('.input__default').eq(4).type('123456', { force: true, delay: 100 });
    cy.get('.input__default').eq(5).type('123456', { force: true, delay: 100 });
    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });

    // Verifica se a mensagem de erro específica para e-mail inválido aparece
    cy.get('p.input__warging')
        .should('exist')
        .and('contain', 'Formato inválido');
    
    cy.log('Teste passou: Mensagem de erro exibida corretamente para e-mail inválido.');
});