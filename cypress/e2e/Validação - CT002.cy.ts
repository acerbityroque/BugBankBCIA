it('CT002 - Criação de conta com senha de qualquer tamanho', () => {
    // Acessa a página
    cy.pagina();

    // Inicia o processo de registro
    cy.registrar();

    // Preenche o nome (registroNome) e o e-mail (registroEmail)
    cy.registroNome();
    cy.registroEmail();

    // Preenche a senha e a confirmação da senha
    cy.registroSenha(); // Armazena a senha gerada corretamente
    cy.registroConfirmarSenha(); // Usa a senha armazenada

    // Cria saldo
    cy.registroCriarSaldo();

    // Finaliza o cadastro
    cy.registroCadastrar();
});
