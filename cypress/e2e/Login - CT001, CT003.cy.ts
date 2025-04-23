describe('Registro, Login e Logout', () => {
    it('CT001, CT003 - Fluxo Completo', () => {
        // Visita a página inicial
        cy.pagina();

        // Realiza o registro de conta
        cy.registrar();
        cy.registroNome();
        cy.registroEmail();
        cy.registroSenha();
        cy.registroConfirmarSenha();
        cy.registroCriarSaldo();
        cy.registroCadastrar();
        cy.fecharModal();

        // ✅ Visita novamente a página inicial antes do login
        cy.pagina();

        // ✅ Realiza login com os dados registrados
        cy.loginEmail();
        cy.loginSenha();
        cy.loginAcessar();

        // ✅ Realiza logout
        cy.logout();
    });
});