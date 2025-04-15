it('Registro - CT003 (Campos obrigatórios em branco devem exibir mensagem de erro)', () => {
    cy.visit('https://bugbank.netlify.app/');
    cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });

    cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true }); // Tentar registrar sem preencher os campos

    // Verifica se a mensagem de erro "É campo obrigatório" aparece com { force: true }
    cy.get('p.input__warging')
        .should('exist')
        .and('contain', 'É campo obrigatório')
    cy.log('Teste passou: Mensagem de erro exibida corretamente.');
});