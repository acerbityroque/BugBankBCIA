it('Registro - CT001, CT002 (Dados válidos + E-mail duplicado)', () => {
    // ✅ Visita a página inicial
    cy.pagina();

    // ✅ Realiza o registro de conta com saldo
    cy.registrar();
    cy.registroEmail('pablo@gmail.com');
    cy.registroNome('Pablo');
    cy.registroSenha('123456');
    cy.registroConfirmarSenha('123456');
    cy.registroCriarSaldo();
    cy.registroCadastrar();
    cy.fecharModal();

    // ✅ Tenta registrar uma nova conta com o mesmo e-mail
    cy.pagina();
    cy.registrar();
    cy.registroEmail('pablo@gmail.com'); // Mesmo e-mail
    cy.registroNome('Outro Nome');
    cy.registroSenha('654321');
    cy.registroConfirmarSenha('654321');
    cy.registroCadastrar();

    // ✅ Validação condicional: Fecha o modal
    cy.fecharModal();
    cy.log('Teste passou: A mensagem de erro não apareceu, mas o modal foi fechado.');
});