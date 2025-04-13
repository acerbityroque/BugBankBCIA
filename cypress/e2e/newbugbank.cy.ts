const credenciais = {
    nome: 'Maria João',
    email: 'pablo@gmail.com',
    senha: '123456'
};

describe('Fluxo: Registro e Login', () => {
    beforeEach(() => {
        // Configurar registro e login antes de cada teste
        cy.visit('https://bugbank.netlify.app/');
        cy.get('button.style__ContainerButton-sc-1wsixal-0.ihdmxA').click({ force: true });
        cy.get(':nth-child(2) > .input__default').type(credenciais.email, { force: true, delay: 100 });
        cy.get('.input__default').eq(3).type(credenciais.nome, { force: true, delay: 100 });
        cy.get('.input__default').eq(4).type(credenciais.senha, { force: true, delay: 100 });
        cy.get('.input__default').eq(5).type(credenciais.senha, { force: true, delay: 100 });
        cy.get('button.style__ContainerButton-sc-1wsixal-0.CMabB').click({ force: true });
        cy.get('#toggleAddBalance').click({ force: true });
        
        cy.wait(3000);
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(credenciais.email, { force: true, delay: 100 });
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(credenciais.senha, { force: true, delay: 100 });
        cy.get('.otUnI').click({ force: true });
    });

    it('Realizar transferência', () => {
        // Teste de transferência
    });

    it('Navegar para extrato', () => {
        // Teste de extrato
    });

    it('Sair da aplicação', () => {
        // Clicar no botão "Sair"
        cy.get('#btnExit').click({ force: true });
    });
});