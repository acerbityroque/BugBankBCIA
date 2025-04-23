it('CT002 - Criação de conta com senha de qualquer tamanho', () => {
    cy.pagina();
    cy.registrar();
    cy.nome();
    cy.email();
    cy.senha(); // Armazena a senha gerada corretamente
    cy.csenha(); // Usa a senha armazenada
    cy.criarSaldo();
    cy.cadastro();

});