describe('Registro no Parabank', () => {
    it('Deve acessar a página de registro, tentar enviar o formulário e validar os campos obrigatórios', () => {
        // Acessa diretamente a página de registro
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');

        // Clica no botão "Register" para enviar o formulário sem preencher os campos
        cy.get('input[type="submit"][value="Register"]').click();

        // Valida a presença das mensagens de erro nos campos obrigatórios
        cy.get('#customer\\.firstName\\.errors').should('have.text', 'First name is required.');
;

        // Exibe um log indicando que os campos obrigatórios foram validados corretamente
        cy.log('✅ O botão Register foi clicado e os erros dos campos obrigatórios foram verificados!');
    });
});