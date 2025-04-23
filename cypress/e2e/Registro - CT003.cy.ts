it('Registro - CT003 (Campos obrigatórios em branco devem exibir mensagem de erro)', () => {
    // ✅ Visita a página inicial
    cy.pagina();

    // ✅ Clica no botão "Registrar"
    cy.registrar();

    // ✅ Clica no botão "Cadastrar" sem preencher os campos
    cy.registroCadastrar();

    // ✅ Valida se a mensagem "É campo obrigatório" aparece corretamente
    cy.get('p.input__warging')
        .should('exist')
        .and('contain', 'É campo obrigatório');

    cy.log('Teste passou: Mensagem de erro exibida corretamente.');
});