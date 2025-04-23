it('Validação - CT001 (Tentativa de registro com e-mail inválido)', () => {
    cy.pagina(); // Visita a página inicial

    cy.registrar(); // Clica no botão para registrar

    // Preenchendo o campo de e-mail com um e-mail inválido (sem @)
    cy.get(':nth-child(2) > .input__default')
        .should('exist')
        .type('emailinvalido.com', { force: true, delay: 100 });

    // Preenche o nome utilizando o Faker
    cy.registroNome(); // Nome gerado pelo Faker

    // Preenche a senha utilizando o Faker
    cy.registroSenha(); // Senha definida (no caso, 12345678)

    // Confirma a senha
    cy.registroConfirmarSenha(); // Confirma a senha com o mesmo valor

    // Finaliza o registro
    cy.registroCadastrar(); // Clica no botão para cadastrar

    // Verifica se a mensagem de erro aparece indicando um e-mail inválido
    cy.get('p.input__warging')
        .should('exist')
        .and('contain', 'Formato inválido'); // Verifica a mensagem de erro

    cy.log('Teste passou: Mensagem de erro exibida corretamente para e-mail inválido.');
});
